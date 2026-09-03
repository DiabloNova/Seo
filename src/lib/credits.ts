import { TenantContextManager } from "@/core/database/tenant-context";
import { subscriptionService } from "@/features/billing/services/subscription-service";

// Thin adapter over `SubscriptionService` (the canonical, tenant-isolated credit
// ledger backed by `tenantQuotas`/`creditTransactions`) for callers -- like Inngest
// background functions -- that only have a bare `workspaceId` rather than an
// already-established `TenantContextManager` async-local context.
//
// `SubscriptionService` resolves the active tenant from ambient async-local storage
// (`TenantContextManager.getRequiredTenantId()`), so every call here is wrapped in
// `runWithTenantContext` to open a properly scoped, RLS-enforcing transaction
// (`SET LOCAL app.current_tenant_id = ...`) before touching the ledger.

/**
 * Returns whether `workspaceId` currently has at least `amount` credits available.
 * Read-only: does not modify the balance.
 */
export async function checkCredits(workspaceId: string, amount: number): Promise<boolean> {
  return TenantContextManager.runWithTenantContext(workspaceId, null, null, async () => {
    const usage = await subscriptionService.getQuotaUsage();
    return usage.creditsBalance >= amount;
  });
}

/**
 * Atomically deducts `amount` credits from `workspaceId`'s balance and records a
 * `creditTransactions` row (`referenceType` is stored as the transaction's
 * `referenceId` for traceability). Returns `false` instead of throwing on
 * insufficient balance or any other failure, so callers can branch on the result
 * without a try/catch.
 */
export async function deductCredits(
  workspaceId: string,
  amount: number,
  referenceType: string,
  description: string
): Promise<boolean> {
  try {
    await TenantContextManager.runWithTenantContext(workspaceId, null, null, async () => {
      await subscriptionService.consumeCredits(amount, description, referenceType);
    });
    return true;
  } catch (err) {
    console.error(
      "[credits] deductCredits failed:",
      err instanceof Error ? err.message : err
    );
    return false;
  }
}
