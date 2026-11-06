import type { SignupPlan } from '../api/signupApi';

const UNLIMITED_AI = /s[ıi]n[ıi]rs[ıi]z[^,;]*(yapay\s*zek[aâ]|\bai\b)/i;
const UNLIMITED_BRANCH = /s[ıi]n[ıi]rs[ıi]z[^,;]*[şs]ube|[çc]oklu\s*[şs]ube/i;

/**
 * Paket maddelerinden, sistemdeki gerçek limitle çelişenleri ayıklar: kotası olan pakette "Sınırsız Yapay Zeka",
 * şube sınırı olan pakette "Sınırsız/Çoklu şube" gösterilmez. Gerçek limit planLimitLines ile ayrıca yazılır.
 */
export function visibleFeatures(plan: SignupPlan): string[] {
  return plan.features.filter((f) => {
    if (plan.monthlyAiQuota != null && UNLIMITED_AI.test(f)) return false;
    if (plan.maxBranches != null && plan.maxBranches <= 1 && UNLIMITED_BRANCH.test(f)) return false;
    return true;
  });
}

/** Sistemdeki gerçek limitlerden üretilen satırlar; elle yazılan madde metninden bağımsızdır. */
export function planLimitLines(plan: SignupPlan): string[] {
  const lines: string[] = [];
  if (plan.enabledFeatures?.includes('AI_ASSISTANT')) {
    lines.push(
      plan.monthlyAiQuota == null
        ? 'Sınırsız yapay zekâ önerisi'
        : `Ayda ${plan.monthlyAiQuota.toLocaleString('tr-TR')} yapay zekâ önerisi`,
    );
  }
  if (plan.maxBranches !== undefined) {
    lines.push(plan.maxBranches == null ? 'Sınırsız şube' : plan.maxBranches === 1 ? 'Tek şube' : `En fazla ${plan.maxBranches} şube`);
  }
  return lines;
}
