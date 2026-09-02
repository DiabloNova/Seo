import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

const defaultNow = sql`NOW()`;

/**
 * Insert-before-process ledger for inbound webhooks (payment provider, etc.).
 *
 * A webhook handler MUST attempt to INSERT the event id here before applying any side
 * effect (crediting an account, mutating a subscription). A unique-violation on
 * `event_id` means the event was already processed and the handler must acknowledge it
 * (200 OK) without repeating the side effect. This is what makes replayed or
 * at-least-once-delivered webhook events safe to receive more than once.
 *
 * Matches the physical table created by
 * `database/migrations/0019_user_credentials_and_webhook_idempotency.sql`.
 */
export const processedWebhookEvents = pgTable("processed_webhook_events", {
  eventId: text("event_id").primaryKey(),
  provider: text("provider").notNull(),
  eventType: text("event_type").notNull(),
  payloadHash: text("payload_hash").notNull(),
  processedAt: timestamp("processed_at", { withTimezone: true }).notNull().default(defaultNow),
});
