import { useEffect, useState } from 'react';
import { signupApi, type SignupPlan } from '../api/signupApi';
import { planLimitLines, visibleFeatures } from '../lib/planLimits';

interface PricingProps {
  onSelectPlan: (plan: SignupPlan) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const [plans, setPlans] = useState<SignupPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    signupApi
      .getPlans()
      .then((fetched) => setPlans([...fetched].sort((a, b) => a.monthlyPrice - b.monthlyPrice)))
      .catch(() => setPlans([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    // Plan kartlari backend'den veri geldikten SONRA DOM'a ekleniyor; sayfa
    // acilisinda bir kerelik calisan global .reveal gozlemcisi (useScrollReveal)
    // bu kartlari hic gormuyor ve opacity:0'da kaliyorlar -- fiyatlar "gelmiyor"
    // gibi gorunuyordu. Kartlar render oldugunda kendi gorunurlugunu tetikliyoruz.
    if (plans.length === 0) return;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setCardsVisible(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, [plans]);

  function handleSelect(plan: SignupPlan) {
    onSelectPlan(plan);
    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="section pricing" id="fiyatlandirma">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Fiyatlandırma</span>
          <h2>Kliniğinizin büyüklüğüne uygun paket</h2>
          <p>Basit paketler, gizli ücret yok. Yıllık ödemede 2 ay ücretsiz kazanın.</p>
        </div>

        {loading ? (
          <p className="pricing-footnote">Planlar yükleniyor...</p>
        ) : plans.length === 0 ? (
          <p className="pricing-footnote">Şu anda satın alınabilir bir plan bulunmuyor.</p>
        ) : (
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                key={plan.code}
                className={["price-card", plan.badge ? "popular" : "", "reveal", cardsVisible ? "is-visible" : ""].filter(Boolean).join(" ")}
              >
                {plan.badge && <span className="price-badge">{plan.badge}</span>}
                <div>
                  <div className="price-plan-name">{plan.name}</div>
                  {plan.description && <p className="price-plan-desc">{plan.description}</p>}
                </div>
                <div>
                  <div className="price-amount">
                    <span className="num">{plan.monthlyPrice.toLocaleString('tr-TR')}</span>
                    <span className="unit">₺ / ay</span>
                  </div>
                  {plan.annualPrice !== null && (
                    <p className="price-annual">
                      Yıllık <strong>{plan.annualPrice.toLocaleString('tr-TR')}₺</strong>{' '}
                      <span className="price-save">(2 ay ücretsiz)</span>
                    </p>
                  )}
                </div>
                {(plan.features.length > 0 || planLimitLines(plan).length > 0) && (
                  <div className="price-feature-list">
                    {planLimitLines(plan).map((line) => (
                      <div className="price-feature price-limit" key={line}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 12l5 5L20 6" />
                        </svg>
                        <span>{line}</span>
                      </div>
                    ))}
                    {visibleFeatures(plan).map((feature) => (
                      <div className="price-feature" key={feature}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 12l5 5L20 6" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
                <button
                  type="button"
                  className={plan.badge ? 'btn btn-primary btn-block' : 'btn btn-ghost btn-block'}
                  onClick={() => handleSelect(plan)}
                >
                  Hemen Başla
                </button>
              </div>
            ))}
          </div>
        )}

        <p className="pricing-footnote">
          Daha büyük bir klinik zinciri misiniz? <a href="#iletisim">Bize ulaşın</a>, size özel bir teklif hazırlayalım.
        </p>
      </div>
    </section>
  );
}
