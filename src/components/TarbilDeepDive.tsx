export function TarbilDeepDive() {
  return (
      <section className="section deepdive tarbil-deepdive" id="tarbil">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Yakından Bakış</span>
            <h2>TARBİL bildirimleri otomatik ve eksiksiz gider</h2>
            <p>Aşı ve tedavi kayıtlarınız, resmi TARBİL sistemine manuel veri girişi olmadan otomatik olarak iletilir; her bildirimin durumunu anlık olarak takip edersiniz.</p>
          </div>

          <div className="deepdive-grid">
            <div className="deepdive-card reveal">
              <h3>Otomatik Bildirim</h3>
              <p className="dd-desc">Her kayıt TARBİL'e iletildiğinde durumu anında güncellenir; bekleyen veya hatalı bildirimler otomatik olarak işaretlenerek ekibinize bildirilir.</p>
            </div>
            <div className="deepdive-visual reveal">
              <div className="deepdive-visual-frame">
                <svg viewBox="0 0 240 200" width="100%" height="100%" aria-hidden="true">
                  <circle cx="118" cy="100" r="80" style={{ fill: 'var(--color-gold-100)' }} opacity="0.6" />
                  <ellipse cx="112" cy="168" rx="50" ry="8" style={{ fill: 'var(--color-ink-900)' }} opacity="0.08" />

                  <g transform="rotate(-6 106 96)">
                    <rect x="60" y="36" width="92" height="120" rx="8" style={{ fill: 'var(--color-paper)' }} stroke="var(--color-border-strong)" strokeWidth="2" />
                    <rect x="74" y="56" width="52" height="7" rx="3.5" style={{ fill: 'var(--color-border)' }} />
                    <rect x="74" y="72" width="64" height="7" rx="3.5" style={{ fill: 'var(--color-border)' }} />
                    <rect x="74" y="88" width="40" height="7" rx="3.5" style={{ fill: 'var(--color-border)' }} />
                    <rect x="74" y="108" width="56" height="7" rx="3.5" style={{ fill: 'var(--color-border)' }} />
                    <rect x="74" y="124" width="34" height="7" rx="3.5" style={{ fill: 'var(--color-border)' }} />
                  </g>

                  <path d="M168 48 a16 16 0 1 1 -4 -11" fill="none" stroke="var(--color-brand-500)" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M160 33 l8 1 l-1 9 Z" style={{ fill: 'var(--color-brand-500)' }} />

                  <circle cx="162" cy="142" r="14" style={{ fill: 'var(--color-ink-900)' }} opacity="0.08" />
                  <circle cx="160" cy="140" r="27" style={{ fill: 'var(--color-gold-600)' }} />
                  <path d="M148 140 l8 8 l14 -16" fill="none" stroke="var(--color-paper)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="ai-card-grid tarbil-benefit-grid">
            <div className="ai-feature-card is-tarbil reveal">
              <div className="ai-feature-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v4M15 3v4M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" /><path d="M8 15l2.5 2.5L16 12" /></svg></div>
              <h3>Manuel Veri Girişi Yok</h3>
              <p>Aşı ve tedavi kayıtları muayene sırasında otomatik olarak TARBİL formatına dönüştürülüp iletilir; çift veri girişi gerekmez.</p>
            </div>
            <div className="ai-feature-card is-tarbil reveal">
              <div className="ai-feature-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 2 20h20L12 3Z" /><line x1="12" y1="10" x2="12" y2="14" /><circle cx="12" cy="17" r="0.6" fill="currentColor" /></svg></div>
              <h3>Anında Hata Uyarısı</h3>
              <p>İletilemeyen bir bildirim olduğunda ekibiniz anında bilgilendirilir; kaçırılan bildirim riski kalmaz.</p>
            </div>
            <div className="ai-feature-card is-tarbil reveal">
              <div className="ai-feature-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg></div>
              <h3>Toplu Senkronizasyon</h3>
              <p>Geçmiş kayıtlarınızı tek seferde TARBİL'e aktarın; eksik bildirimleri sistem otomatik olarak tespit eder.</p>
            </div>
          </div>
        </div>
      </section>
  );
}
