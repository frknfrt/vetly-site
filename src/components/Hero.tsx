import logoMark from '../assets/logo-mark.png';

export function Hero() {
  return (
      <section className="section hero" id="main-content">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Veteriner klinikleri için</span>
            <h1>Kliniğinizi yönetmenin <span className="hl">en akıllı</span> yolu</h1>
            <p className="hero-sub">SOAP kaydından TARBİL bildirimine, muayene notundan stok takibine — Vetly ile hepsi tek ekranda.</p>
            <div className="hero-ctas">
              <a href="#iletisim" className="btn btn-primary">Hemen Başla</a>
              <a href="#ozellikler" className="btn btn-ghost">Özellikleri İncele</a>
            </div>
            <p className="hero-note">Kurulum aynı gün tamamlanır · Uzman destek dahildir</p>
          </div>

          <div className="visual-stage">
            <div className="app-frame">
              <div className="app-frame-sidebar">
                <div className="app-frame-brand">
                  <div className="mini-mark"><img src={logoMark} alt="Vetly" /></div>
                  <span>Vetly</span>
                </div>
                <div className="app-nav-item active">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="8" rx="1.5" /><rect x="3" y="13" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" /></svg>
                  <span>Panel</span>
                </div>
                <div className="app-nav-item">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="16" y1="3" x2="16" y2="7" /></svg>
                  <span>Randevu</span>
                </div>
                <div className="app-nav-item">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M4 20c0-3 2.2-5.2 5-5.2s5 2.2 5 5.2" /><circle cx="18" cy="8.5" r="2.4" /><path d="M15.5 14.4c2.3.3 4 2.2 4 4.6" /></svg>
                  <span>Hastalar</span>
                </div>
                <div className="app-nav-item">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v4M15 3v4M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" /><path d="M8 15l2.5 2.5L16 12" /></svg>
                  <span>Laboratuvar</span>
                </div>
                <div className="app-nav-item">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="9" width="8" height="12" rx="1" /><rect x="13" y="4" width="8" height="17" rx="1" /></svg>
                  <span>Konaklama</span>
                </div>
                <div className="app-nav-item">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></svg>
                  <span>Ayarlar</span>
                </div>
              </div>

              <div className="app-frame-main">
                <div className="app-main-head">
                  <h4>Hasta Kuyruğu</h4>
                </div>
                <div className="app-stat-grid">
                  <div className="app-stat"><span className="lbl">Bugünkü Randevu</span><span className="val">8</span></div>
                  <div className="app-stat"><span className="lbl">Onay Bekleyen</span><span className="val">3</span></div>
                  <div className="app-stat"><span className="lbl">Bekleme Salonu</span><span className="val">2</span></div>
                  <div className="app-stat warn"><span className="lbl">No-show Riski</span><span className="val">1</span></div>
                </div>
                <div className="app-tabs">
                  <span className="app-tab active">Bugün Tümü</span>
                  <span className="app-tab">Muayenede</span>
                  <span className="app-tab">Tamamlanan</span>
                </div>
                <div className="app-row">
                  <div className="col"><div className="bar" style={{ width: '70%' }} /></div>
                  <div className="col2"><div className="bar" style={{ width: '45%' }} /></div>
                  <span className="app-tag" style={{ background: 'var(--color-brand-100)', color: 'var(--color-brand-700)' }}>Kontrol</span>
                </div>
                <div className="app-row">
                  <div className="col"><div className="bar" style={{ width: '55%' }} /></div>
                  <div className="col2"><div className="bar" style={{ width: '38%' }} /></div>
                  <span className="app-tag" style={{ background: 'var(--color-gold-100)', color: 'var(--color-gold-600)' }}>Aşı</span>
                </div>
              </div>

              <div className="float-stat">
                <div className="float-stat-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="16" rx="3" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="16" y1="3" x2="16" y2="7" />
                  </svg>
                </div>
                <div>
                  <div className="float-stat-num">8</div>
                  <div className="float-stat-label">randevu bugün</div>
                </div>
              </div>
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