export function CompareSection() {
  return (
    <section className="section" style={{ background: 'var(--color-paper)', paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Neden Vetly</span>
          <h2>Excel ve kağıt takipten kurtulun</h2>
          <p>Dağınık tablolar ve kağıt defterler yerine, kliniğinizin tüm işleyişini tek bir sistemde toplayın.</p>
        </div>
        <div className="compare-wrap">
          <div className="compare-card old">
            <h3>Excel / Kağıt Takip</h3>
            <div className="compare-list">
              <div className="compare-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg><span>Randevu çakışmaları elle takip edilir, hatalar kolayca gözden kaçar</span></div>
              <div className="compare-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg><span>Hasta geçmişi farklı dosya ve defterlere dağılmış durumda</span></div>
              <div className="compare-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg><span>Aşı ve TARBİL bildirimlerini hatırlamak tamamen size kalıyor</span></div>
              <div className="compare-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg><span>Stok tükendiğinde genelde son anda fark edilir</span></div>
              <div className="compare-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg><span>Birden fazla şube varsa veriler birbirinden kopuk ilerler</span></div>
            </div>
          </div>
          <div className="compare-card new">
            <h3>Vetly ile</h3>
            <div className="compare-list">
              <div className="compare-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Randevu takvimi çakışmaları otomatik engeller, no-show riskini önceden gösterir</span></div>
              <div className="compare-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Her hastanın tüm geçmişi tek dosyada, tek tıkla erişilebilir</span></div>
              <div className="compare-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Aşı takvimi ve TARBİL bildirimleri otomatik hesaplanır ve hatırlatılır</span></div>
              <div className="compare-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Kritik stok seviyelerinde otomatik uyarı alırsınız</span></div>
              <div className="compare-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg><span>Tüm şubeleriniz tek hesaptan, tek merkezden yönetilir</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
