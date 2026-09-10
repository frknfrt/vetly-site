export function LabDeepDive() {
  return (
      <section className="section deepdive">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Yakından Bakış</span>
            <h2>Laboratuvar sonuçları anında değerlendirilir</h2>
            <p>Tahlil sonuçları otomatik olarak hasta dosyasına işlenir, referans aralığı dışındaki değerler anında işaretlenir.</p>
          </div>
          <div className="deepdive-grid single">
            <div className="deepdive-card reveal">
              <h3>Laboratuvar</h3>
              <p className="dd-desc">Referans aralığı dışındaki değerler otomatik olarak işaretlenir ve hekim onayına sunulur.</p>
              <div className="lab-mock">
                <div className="lab-row"><span className="lc1">Test</span><span className="lc2">Referans Aralığı</span><span className="lc3">Sonuç</span></div>
                <div className="lab-row"><span className="lc1">ALT</span><span className="lc2">10–100 U/L</span><span className="lab-tag ok">Normal</span></div>
                <div className="lab-row"><span className="lc1">BUN</span><span className="lc2">7–27 mg/dL</span><span className="lab-tag high">Yüksek</span></div>
                <div className="lab-row"><span className="lc1">Hematokrit</span><span className="lc2">37–55 %</span><span className="lab-tag ok">Normal</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}