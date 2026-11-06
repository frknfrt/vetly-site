import { apiClient } from './client';

export interface SignupPlan {
  id: string;
  code: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number | null;
  description: string | null;
  badge: string | null;
  imageUrl: string | null;
  features: string[];
  active: boolean;
  /** Paketteki modüller (ör. AI_ASSISTANT). */
  enabledFeatures?: string[];
  /** Aylık yapay zekâ hakkı; null = sınırsız. */
  monthlyAiQuota?: number | null;
  /** En fazla şube sayısı; null = sınırsız. */
  maxBranches?: number | null;
}

export interface CheckoutSession {
  checkoutFormUrl: string;
}

export interface SignupCheckoutPayload {
  clinicName: string;
  adminFullName: string;
  adminEmail: string;
  phone?: string;
  planCode: string;
  couponCode?: string;
}

export const signupApi = {
  getPlans: () => apiClient.get<SignupPlan[]>('/api/v1/public/signup/plans'),
  initiateCheckout: (payload: SignupCheckoutPayload) =>
    apiClient.post<CheckoutSession>('/api/v1/public/signup/checkout', payload),
};
