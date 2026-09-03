import fs from "fs";
import path from "path";

export interface DocMeta {
  slug: string;
  title: string;
  category: string;
  path: string;
  contentSnippet: string;
}

const CATEGORY_MAP: Record<string, string> = {
  "product": "Product",
  "user-guides": "User Guides",
  "services": "Services",
  "api": "API",
  "architecture": "Architecture",
  "security": "Security",
  "project": "Project",
  "features": "Features",
  "database": "Database"
};

interface DiscoveredDoc {
  slug: string;
  title: string;
  category: string;
  relPath: string;
  content: string;
  contentSnippet: string;
  isReadme: boolean;
  /** basename of the immediate parent directory, used to resolve README.md by `domain` */
  parentDirName: string;
}

function getAllDocs(basePath = "docs"): DiscoveredDoc[] {
  const fullPath = path.join(process.cwd(), basePath);
  let docs: DiscoveredDoc[] = [];

  if (!fs.existsSync(fullPath)) {
    return docs;
  }

  const entries = fs.readdirSync(fullPath, { withFileTypes: true });

  for (const entry of entries) {
    const res = path.resolve(fullPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "project" && entry.name !== "images") {
        docs = docs.concat(getAllDocs(path.join(basePath, entry.name)));
      }
    } else {
      if (entry.name.endsWith(".md")) {
        const relPath = path.relative(path.join(process.cwd(), "docs"), fullPath);
        const categoryParts = relPath.split(path.sep);
        const category = categoryParts[0] || "product";

        const isReadme = entry.name === "README.md";
        let slug = entry.name.replace(/\.md$/, "");

        // Handle README.md inside domain roots
        if (isReadme) {
            slug = category; // E.g., 'product', 'user-guides'
        }

        let title = slug.replace(/-/g, " ");
        title = title.charAt(0).toUpperCase() + title.slice(1);
        let contentSnippet = "";
        let content = "";

        try {
            content = fs.readFileSync(res, "utf-8");
            const firstLine = content.split('\n').find(line => line.startsWith('# '));
            if (firstLine) {
                title = firstLine.replace('# ', '').trim();
            }
            contentSnippet = content.substring(0, 500).replace(/\n/g, ' ');
        } catch (e) {}

        docs.push({
          slug,
          title,
          category,
          relPath: path.join(basePath, entry.name),
          content,
          contentSnippet,
          isReadme,
          parentDirName: path.basename(fullPath),
        });
      }
    }
  }

  return docs;
}

function escapeTemplateLiteral(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function generate() {
  const docs = getAllDocs("docs");

  // ---------------------------------------------------------------------
  // 1. Navigation / search index (unchanged shape, kept for back-compat).
  // ---------------------------------------------------------------------
  let indexOutput = `// Auto-generated metadata index for navigation and search
export interface DocMeta {
  slug: string;
  titleEn: string;
  titleFa: string;
  category: string;
  categoryFa?: string;
  snippet: string;
}

export const DOCS_INDEX: DocMeta[] = [\n`;

  for (const doc of docs) {
    const title = doc.title.replace(/"/g, '\\"');
    const snippet = doc.contentSnippet.replace(/"/g, '\\"').replace(/\\/g, '\\\\').replace(/`/g, '\\`');
    indexOutput += `  {
    slug: "${doc.slug}",
    titleEn: "${title}",
    titleFa: "${title}",
    category: "${doc.category}",
    categoryFa: "${CATEGORY_MAP[doc.category] || doc.category}",
    snippet: \`${snippet}\`
  },\n`;
  }
  indexOutput += `];\n`;
  fs.writeFileSync(path.join(process.cwd(), "src/lib/docsIndex.ts"), indexOutput);

  // ---------------------------------------------------------------------
  // 2. Full-content lookup tables, generated at build time so the docs API
  //    route never has to touch the filesystem (and therefore never drags
  //    the whole repository into the Vercel/Turbopack production trace).
  //
  //    Mirrors the exact lookup rules the API route implements:
  //      - regular files are addressed by filename (without `.md`)
  //      - README.md files are addressed by their parent directory's name
  //        (the `domain` query param), with the docs/ root itself
  //        addressed via the reserved key "root"
  // ---------------------------------------------------------------------
  const bySlug: Record<string, string> = {};
  const byDomain: Record<string, string> = {};

  for (const doc of docs) {
    if (doc.isReadme) {
      const domainKey = doc.parentDirName === "docs" ? "root" : doc.parentDirName;
      if (!(domainKey in byDomain)) {
        byDomain[domainKey] = doc.content;
      }
    } else if (!(doc.slug in bySlug)) {
      bySlug[doc.slug] = doc.content;
    }
  }

  let contentOutput = `// Auto-generated full-text content lookup for the documentation API.
// Regenerate via \`npx tsx scripts/generate-docs-data.ts\` (also run automatically
// as part of \`pnpm run build\`). Do not edit by hand.

/** Regular docs, keyed by filename without the \`.md\` extension. */
export const DOCS_CONTENT_BY_SLUG: Record<string, string> = {\n`;

  for (const [slug, content] of Object.entries(bySlug)) {
    contentOutput += `  ${JSON.stringify(slug)}: \`${escapeTemplateLiteral(content)}\`,\n`;
  }
  contentOutput += `};\n\n`;

  contentOutput += `/** README.md files, keyed by their parent directory name ("root" for docs/README.md). */\nexport const DOCS_README_BY_DOMAIN: Record<string, string> = {\n`;
  for (const [domain, content] of Object.entries(byDomain)) {
    contentOutput += `  ${JSON.stringify(domain)}: \`${escapeTemplateLiteral(content)}\`,\n`;
  }
  contentOutput += `};\n`;

  fs.writeFileSync(path.join(process.cwd(), "src/lib/docsContent.generated.ts"), contentOutput);

  console.log(`Generated docs index metadata with content snippets (${docs.length} docs).`);
  console.log(`Generated full-text docs content lookup (${Object.keys(bySlug).length} slugs, ${Object.keys(byDomain).length} domains).`);
}

generate();
