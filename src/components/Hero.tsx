import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Hareket azaltma tercihi olan ziyaretçilerde videoyu oynatmayıp kapak karesinde bırakıyoruz.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
    }
  }, []);

  return (
      <section className="section hero" id="main-content">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Veteriner klinikleri için</span>
            <h1>Kliniğinizi yönetmenin <span className="hl">en akıllı</span> yolu</h1>
            <p className="hero-sub">SOAP kaydından TARBİL bildirimine, muayene notundan stok takibine — Vetly ile hepsi tek ekranda.</p>
            <div className="hero-ctas">
              <Link to="/deneme" className="btn btn-primary">7 Gün Ücretsiz Dene</Link>
              <a href="#ozellikler" className="btn btn-ghost">Özellikleri İncele</a>
            </div>
            <p className="hero-note">Kredi kartı gerekmez · Kurulum aynı gün tamamlanır · Uzman destek dahildir</p>
          </div>

          <div className="visual-stage">
            <div className="hero-video-frame">
              <video
                ref={videoRef}
                className="hero-video"
                src="/video/vetlysiteslider.mp4"
                poster="/video/vetlysiteslider-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Vetly panelinin kullanımını gösteren tanıtım videosu"
              />
            </div>
          </div>
        </div>
        <div className="wrap trust-strip">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
            <span>Verileriniz şifrelenerek saklanır ve iletilir</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z" /></svg>
            <span>Sınırsız hasta ve hayvan kaydı</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.5 2.5 4.5-5" /></svg>
            <span>Gizli ücret yok</span>
          </div>
        </div>
      </section>
  );
}
