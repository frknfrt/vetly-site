export function AiDeepDive() {
  return (
    <section className="section ai-deepdive" id="ai-merkezi">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">AI Merkezi</span>
          <h2>Profesyonel yapay zekâ destekli teşhis araçları</h2>
          <p>Vetly'nin AI Merkezi, hekimlerin karar sürecini hızlandıran araçları bir araya getirir — hangisinin gerçek yapay zekâ, hangisinin kural tabanlı kontrol olduğunu her zaman net şekilde gösteririz.</p>
        </div>

        <div className="ai-group">
          <div className="ai-group-head"><span className="ai-group-badge is-ai">Yapay Zekâ Destekli</span></div>
          <div className="ai-card-grid">
            <div className="ai-feature-card is-ai">
              <div className="ai-feature-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0" /><line x1="12" y1="19" x2="12" y2="22" /><line x1="8" y1="22" x2="16" y2="22" /></svg></div>
              <h3>Sesli SOAP Dikte</h3>
              <p>Muayene sırasında konuştuklarınızı otomatik olarak yapılandırılmış SOAP formatında muayene notuna dönüştürür.</p>
            </div>
            <div className="ai-feature-card is-ai">
              <div className="ai-feature-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1Z" /><path d="M8 12l2.5 2.5L16 9" /></svg></div>
              <h3>Tanı Desteği</h3>
              <p>Girilen semptom ve bulgulara göre olası tanılar için yapay zekâ destekli öneriler sunar; nihai karar her zaman hekimde kalır.</p>
            </div>
          </div>
        </div>

        <div className="ai-group">
          <div className="ai-group-head"><span className="ai-group-badge is-rule">Kural Tabanlı Kontroller (AI değil)</span></div>
          <p className="ai-group-note">Bu kontroller yapay zekâ modeli kullanmaz, önceden tanımlanmış kurallara dayanır — bu yüzden AI mavisi değil, uyarı tonuyla gösterilir.</p>
          <div className="ai-card-grid">
            <div className="ai-feature-card is-rule">
              <div className="ai-feature-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 2 20h20L12 3Z" /><line x1="12" y1="10" x2="12" y2="14" /><circle cx="12" cy="17" r="0.6" fill="currentColor" /></svg></div>
              <h3>İlaç Etkileşim Kontrolü</h3>
              <p>Reçete edilen ilaçlar arasında bilinen etkileşimleri kontrol eder ve olası riskleri anında işaretler.</p>
            </div>
            <div className="ai-feature-card is-rule">
              <div className="ai-feature-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v4M15 3v4M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" /></svg></div>
              <h3>Laboratuvar Referans Aralığı Ön-Değerlendirmesi</h3>
              <p>Tahlil sonuçlarını tür ve yaşa göre referans aralıklarıyla karşılaştırır, sınır dışı değerleri otomatik işaretler.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
