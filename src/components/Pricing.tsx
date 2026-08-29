export function Pricing() {
  return (
    <section className="section pricing" id="fiyatlandirma">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Fiyatlandırma</span>
          <h2>Kliniğinizin büyüklüğüne uygun paket</h2>
          <p>İki basit paket, gizli ücret yok. Yıllık ödemede 2 ay ücretsiz kazanın.</p>
        </div>
        <div className="pricing-grid">
          <div className="price-card">
            <div>
              <div className="price-plan-name">Başlangıç</div>
              <p className="price-plan-desc">Tek şubeli, küçük ekipli klinikler için.</p>
            </div>
            <div>
              <div className="price-amount"><span className="num">1.000</span><span className="unit">₺ / ay</span></div>
              <p className="price-annual">Yıllık <strong>10.000₺</strong> <span className="price-save">(2 ay ücretsiz)</span></p>
            </div>
            <div className="price-feature-list">
              <div className="price-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Randevu takvimi</span></div>
              <div className="price-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Hasta &amp; sahip kayıtları</span></div>
              <div className="price-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Aşı takvimi &amp; TARBİL</span></div>
              <div className="price-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Tek şube</span></div>
            </div>
            <a href="#iletisim" className="btn btn-ghost btn-block">Hemen Başla</a>
          </div>

          <div className="price-card popular">
            <span className="price-badge">En Popüler</span>
            <div>
              <div className="price-plan-name">Profesyonel</div>
              <p className="price-plan-desc">Büyüyen klinikler ve çoklu ekip için.</p>
            </div>
            <div>
              <div className="price-amount"><span className="num">2.000</span><span className="unit">₺ / ay</span></div>
              <p className="price-annual">Yıllık <strong>20.000₺</strong> <span className="price-save">(2 ay ücretsiz)</span></p>
            </div>
            <div className="price-feature-list">
              <div className="price-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Başlangıç'taki her şey</span></div>
              <div className="price-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Laboratuvar &amp; Görüntüleme</span></div>
              <div className="price-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Stok &amp; ilaç yönetimi</span></div>
              <div className="price-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>SMS &amp; WhatsApp otomasyonu</span></div>
              <div className="price-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>AI Merkezi &amp; 3 şubeye kadar</span></div>
            </div>
            <a href="#iletisim" className="btn btn-primary btn-block">Hemen Başla</a>
          </div>
        </div>
        <p className="pricing-footnote">Daha büyük bir klinik zinciri misiniz? <a href="#iletisim">Bize ulaşın</a>, size özel bir teklif hazırlayalım.</p>
      </div>
    </section>
  );
}
