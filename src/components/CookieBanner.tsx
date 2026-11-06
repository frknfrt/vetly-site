import { useEffect, useRef, useState } from 'react';
import { onOpenCookieSettings, readConsent, saveConsent } from '../lib/cookieConsent';

/**
 * Çerez bildirimi ve ayarlar penceresi. Reddet, Kabul Et ile aynı katmanda ve aynı kolaylıkta;
 * karar verilene kadar zorunlu olmayan çerez çalışmaz. Karar altbilgideki "Çerez Ayarları"ndan değiştirilebilir.
 */
export function CookieBanner() {
  const [bannerOpen, setBannerOpen] = useState(() => !readConsent());
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => onOpenCookieSettings(() => openSettings()), []);

  useEffect(() => {
    if (!settingsOpen) return;
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSettingsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [settingsOpen]);

  function openSettings() {
    const current = readConsent();
    setAnalytics(current?.analytics ?? false);
    setMarketing(current?.marketing ?? false);
    setSettingsOpen(true);
  }

  function decide(choice: { analytics: boolean; marketing: boolean }) {
    saveConsent(choice);
    setBannerOpen(false);
    setSettingsOpen(false);
  }

  return (
    <>
      {bannerOpen && !settingsOpen && (
        <div className="cookie-banner" role="region" aria-label="Çerez bildirimi">
          <p>
            Sitenin çalışması için zorunlu çerezler kullanılır. Analiz ve pazarlama çerezleri yalnızca izin verirseniz
            kullanılır.{' '}
            <a href="/gizlilik-politikasi#cerezler">Ayrıntılar</a>
          </p>
          <div className="cookie-actions">
            <button className="btn btn-sm cookie-btn-secondary" type="button" onClick={openSettings}>
              Ayarlar
            </button>
            <button
              className="btn btn-sm cookie-btn-secondary"
              type="button"
              onClick={() => decide({ analytics: false, marketing: false })}
            >
              Reddet
            </button>
            <button
              className="btn btn-primary btn-sm"
              type="button"
              onClick={() => decide({ analytics: true, marketing: true })}
            >
              Kabul Et
            </button>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div
          className="cookie-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSettingsOpen(false);
          }}
        >
          <div
            className="cookie-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            tabIndex={-1}
            ref={dialogRef}
          >
            <h2 id="cookie-modal-title">Çerez ayarları</h2>
            <p className="cookie-modal-lead">
              Hangi çerezlere izin verdiğinizi seçin. Kararınızı istediğiniz zaman sayfanın altındaki{' '}
              <strong>Çerez Ayarları</strong> bağlantısından değiştirebilirsiniz.
            </p>

            <div className="cookie-category">
              <div>
                <h3>Zorunlu çerezler</h3>
                <p>Sitenin çalışması ve çerez tercihinizin hatırlanması için gereklidir. Kapatılamaz.</p>
              </div>
              <span className="cookie-always">Her zaman açık</span>
            </div>

            <label className="cookie-category">
              <div>
                <h3>Analiz çerezleri</h3>
                <p>Ziyaretlerin nasıl kullanıldığını anlamamıza yardım eder. Şu an sitede kullanılmıyor.</p>
              </div>
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
            </label>

            <label className="cookie-category">
              <div>
                <h3>Pazarlama çerezleri</h3>
                <p>Size uygun reklam göstermek için kullanılır. Şu an sitede kullanılmıyor.</p>
              </div>
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
            </label>

            <div className="cookie-modal-actions">
              <button className="btn btn-ghost btn-sm" type="button" onClick={() => decide({ analytics: false, marketing: false })}>
                Tümünü reddet
              </button>
              <button className="btn btn-ghost btn-sm" type="button" onClick={() => decide({ analytics, marketing })}>
                Seçimleri kaydet
              </button>
              <button className="btn btn-primary btn-sm" type="button" onClick={() => decide({ analytics: true, marketing: true })}>
                Tümünü kabul et
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
