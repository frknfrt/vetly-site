import { apiClient } from './client';

/** 7 günlük ücretsiz deneme kaydı — backend: /api/v1/public/signup/trial/* */
export interface TrialSignupPayload {
  fullName: string;
  phone: string;
  email: string;
  clinicName: string;
  city: string;
  chamberRegistrationNo: string;
  password: string;
  consentAccepted: true;
}

export interface TrialSignupStarted {
  requestId: string;
  resendAvailableInSeconds: number;
}

export const trialSignupApi = {
  /** Formu gönderir; telefona 6 haneli doğrulama kodu gider. */
  start: (payload: TrialSignupPayload) =>
    apiClient.post<TrialSignupStarted>('/api/v1/public/signup/trial/start', payload),
  /** Kod doğruysa klinik hesabı oluşur; dönen adres panelin giriş sayfasıdır. */
  verify: (payload: { requestId: string; code: string }) =>
    apiClient.post<{ loginUrl: string }>('/api/v1/public/signup/trial/verify', payload),
  resendCode: (payload: { requestId: string }) =>
    apiClient.post<{ resendAvailableInSeconds: number }>('/api/v1/public/signup/trial/resend', payload),
};
