/**
 * Çerez izni (KVKK Kurulu çerez rehberi): zorunlu çerezler izinsiz çalışır; analiz ve pazarlama çerezleri
 * ancak kullanıcı açıkça izin verirse çalışır. Varsayılan "reddedildi"dir; "devam ederek kabul" geçerli izin sayılmaz.
 *
 * Siteye ileride bir analiz/pazarlama aracı eklenirse ancak hasConsent('analytics' | 'marketing') true iken
 * yüklenmeli ve onConsentChange ile sonradan verilen izni dinlemelidir.
 */
export type OptionalCategory = 'analytics' | 'marketing';

export interface CookieConsent {
  version: 2;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
}

const COOKIE_NAME = 'vetly_cookie_consent';
const CHANGE_EVENT = 'vetly:cookie-consent';
const OPEN_SETTINGS_EVENT = 'vetly:open-cookie-settings';
const MAX_AGE_DAYS = 365;

function readRaw(): string {
  return document.cookie.split('; ').reduce((acc, part) => {
    const [key, ...rest] = part.split('=');
    return key === COOKIE_NAME ? decodeURIComponent(rest.join('=')) : acc;
  }, '');
}

/** Kaydedilmiş karar; hiç karar yoksa ya da eski "1" değeriyse (örtülü onay) null → bildirim yeniden sorar. */
export function readConsent(): CookieConsent | null {
  const raw = readRaw();
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    if (parsed.version !== 2) return null;
    return {
      version: 2,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      decidedAt: String(parsed.decidedAt ?? ''),
    };
  } catch {
    return null;
  }
}

export function saveConsent(choice: { analytics: boolean; marketing: boolean }): CookieConsent {
  const consent: CookieConsent = { version: 2, ...choice, decidedAt: new Date().toISOString() };
  const expiry = new Date(Date.now() + MAX_AGE_DAYS * 24 * 60 * 60 * 1000);
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(consent))}; expires=${expiry.toUTCString()}; path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent<CookieConsent>(CHANGE_EVENT, { detail: consent }));
  return consent;
}

export function hasConsent(category: OptionalCategory): boolean {
  return readConsent()?.[category] === true;
}

export function onConsentChange(listener: (consent: CookieConsent) => void): () => void {
  const handler = (e: Event) => listener((e as CustomEvent<CookieConsent>).detail);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

/** Altbilgideki "Çerez Ayarları" bağlantısı: kararı sonradan değiştirmek için ayarlar penceresini açar. */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

export function onOpenCookieSettings(listener: () => void): () => void {
  window.addEventListener(OPEN_SETTINGS_EVENT, listener);
  return () => window.removeEventListener(OPEN_SETTINGS_EVENT, listener);
}
