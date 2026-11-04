export function LabDeepDive() {
  return (
      <section className="section deepdive" id="laboratuvar">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Yakından Bakış</span>
            <h2>Laboratuvar sonuçları anında değerlendirilir</h2>
            <p>Tahlil sonuçları otomatik olarak hasta dosyasına işlenir, referans aralığı dışındaki değerler anında işaretlenir.</p>
          </div>
          <div className="deepdive-grid">
            <div className="deepdive-card reveal">
              <h3>Laboratuvar</h3>
              <p className="dd-desc">Referans aralığı dışındaki değerler otomatik olarak işaretlenir ve hekim onayına sunulur; manuel karşılaştırma yapmanıza gerek kalmaz.</p>
            </div>
            <div className="deepdive-visual reveal">
              <div className="deepdive-visual-frame">
                <svg viewBox="0 0 240 200" width="100%" height="100%" aria-hidden="true">
                  <circle cx="120" cy="98" r="80" style={{ fill: 'var(--color-success-100)' }} opacity="0.55" />
                  <ellipse cx="118" cy="168" rx="48" ry="8" style={{ fill: 'var(--color-ink-900)' }} opacity="0.08" />

                  <defs>
                    <clipPath id="labTubeClip">
                      <rect x="96" y="44" width="36" height="106" rx="18" />
                    </clipPath>
                  </defs>

                  <rect x="92" y="30" width="44" height="16" rx="5" style={{ fill: 'var(--color-brand-500)' }} />
                  <rect x="96" y="44" width="36" height="106" rx="18" style={{ fill: 'var(--color-paper)' }} stroke="var(--color-border-strong)" strokeWidth="2" />
                  <g clipPath="url(#labTubeClip)">
                    <rect x="96" y="98" width="36" height="52" style={{ fill: 'var(--color-success-700)' }} />
                    <circle cx="106" cy="112" r="3" style={{ fill: 'var(--color-paper)' }} opacity="0.5" />
                    <circle cx="121" cy="126" r="2.4" style={{ fill: 'var(--color-paper)' }} opacity="0.45" />
                    <circle cx="110" cy="135" r="2" style={{ fill: 'var(--color-paper)' }} opacity="0.4" />
                  </g>

                  <circle cx="174" cy="60" r="12" style={{ fill: 'var(--color-ink-900)' }} opacity="0.08" />
                  <circle cx="172" cy="58" r="24" style={{ fill: 'var(--color-success-700)' }} />
                  <path d="M162 58 l7 7 l12 -14" fill="none" stroke="var(--color-paper)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
