const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080';

export class ApiError extends Error {
  status: number;
  /** Sunucunun standart hata kodu (örn. TRIAL_CODE_INVALID); yoksa UNKNOWN_ERROR. */
  errorCode: string;

  constructor(message: string, status: number, errorCode = 'UNKNOWN_ERROR') {
    super(message);
    this.status = status;
    this.errorCode = errorCode;
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  });

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(body?.message ?? 'Beklenmeyen bir hata olustu', response.status, body?.errorCode);
  }

  return body as T;
}

export const apiClient = {
  get: <T>(path: string) => request<T>(path, { method: 'GET' }),
  post: <T>(path: string, data?: unknown) =>
    request<T>(path, { method: 'POST', body: data !== undefined ? JSON.stringify(data) : undefined }),
};
