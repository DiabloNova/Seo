import { NextResponse } from 'next/server';
import { DOCS_CONTENT_BY_SLUG, DOCS_README_BY_DOMAIN } from '@/lib/docsContent.generated';

// This route intentionally does NOT touch the filesystem at request time.
//
// It used to walk `docs/` with `fs.readdirSync`/`fs.readFileSync` on every request.
// Because that traversal is dynamic (the directory list to search is built at
// runtime), Vercel/Turbopack's static Node File Trace analysis could not determine
// which files it actually needed, and conservatively swept the entire project
// (including next.config.ts) into this route's production trace.
//
// Doc content is now generated at build time (see scripts/generate-docs-data.ts,
// which runs before `next build`) into a plain data module, and this route just
// does an in-memory lookup against it. Same lookup semantics as before:
//   - `slug` matches a regular doc by filename (without the `.md` extension)
//   - `slug=README` + `domain=<folder>` matches that folder's README.md
//   - `slug=README` + `domain=root` matches the top-level docs/README.md
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const domain = searchParams.get('domain');

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }

  try {
    let content: string | undefined;

    if (slug === 'README') {
      if (domain) {
        content = DOCS_README_BY_DOMAIN[domain];
      }
    } else {
      content = DOCS_CONTENT_BY_SLUG[slug];
    }

    if (content === undefined) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ content });
  } catch (e) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
