export function TarbilDeepDive() {
  return (
      <section className="section deepdive tarbil-deepdive" id="tarbil">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Yakından Bakış</span>
            <h2>TARBİL formunu Vetly doldurur, onayı siz verirsiniz</h2>
            <p>Chrome'a ekleyeceğiniz Vetly TARBİL Yardımcısı, Vetly'deki aşı ve reçete kayıtlarını TARBİL formuna sizin yerinize doldurur. TARBİL'e e-Devlet ile siz girersiniz; kaydı onaylamak her zaman hekimdedir.</p>
          </div>

          <div className="deepdive-grid">
            <div className="deepdive-card reveal">
              <h3>Nasıl çalışır?</h3>
              <ol className="dd-steps">
                <li>Aşıyı ya da stoktan verilen ilacı Vetly'de kaydedin.</li>
                <li><strong>TARBİL'e aktar</strong>'a basın; TARBİL yeni sekmede açılır.</li>
                <li>Eklenti tarihi, hayvanı (çip ya da pasaport numarasıyla) ve ürünü forma girer.</li>
                <li>Kontrol edip <strong>Onayla</strong>'ya siz basarsınız; Vetly kaydı "Gönderildi" olarak işaretler.</li>
              </ol>
              <p className="dd-desc">Gereksinimler: Google Chrome ve TARBİL'de yetkili hekim hesabı. Eklenti kedi ve köpek aşıları ile stoktan verilen ilaç reçetelerini destekler.</p>
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
              <h3>Çift veri girişi yok</h3>
              <p>Tarih, tür, hayvan ve aşı ürünü Vetly'deki kayıttan doldurulur; aynı bilgiyi TARBİL'e yeniden yazmazsınız, yalnızca kontrol edip onaylarsınız.</p>
            </div>
            <div className="ai-feature-card is-tarbil reveal">
              <div className="ai-feature-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 2 20h20L12 3Z" /><line x1="12" y1="10" x2="12" y2="14" /><circle cx="12" cy="17" r="0.6" fill="currentColor" /></svg></div>
              <h3>Bekleyen bildirim gözden kaçmaz</h3>
              <p>TARBİL'e henüz gitmemiş her aşı Vetly'de "Bekliyor" olarak listelenir. Yalnızca TARBİL'in gerçekten kaydettiği bildirimler "Gönderildi" görünür.</p>
            </div>
            <div className="ai-feature-card is-tarbil reveal">
              <div className="ai-feature-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg></div>
              <h3>Stok eşitleme</h3>
              <p>TARBİL'deki aşı ve ilaç stoğunuzu tek tıkla Vetly'ye alır, farkları gösterir. TARBİL'de düşülen ürün Vetly stoğundan da düşer.</p>
            </div>
          </div>
        </div>
      </section>
  );
}
