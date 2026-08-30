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
}

export const signupApi = {
  getPlans: () => apiClient.get<SignupPlan[]>('/api/v1/public/signup/plans'),
  initiateCheckout: (payload: SignupCheckoutPayload) =>
    apiClient.post<CheckoutSession>('/api/v1/public/signup/checkout', payload),
};
