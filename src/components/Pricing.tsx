import { useEffect, useState } from 'react';
import { signupApi, type SignupPlan } from '../api/signupApi';

interface PricingProps {
  onSelectPlan: (planCode: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const [plans, setPlans] = useState<SignupPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    signupApi
      .getPlans()
      .then(setPlans)
      .catch(() => setPlans([]))
      .finally(() => setLoading(false));
  }, []);

  function handleSelect(planCode: string) {
    onSelectPlan(planCode);
    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="section pricing" id="fiyatlandirma">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Fiyatlandırma</span>
          <h2>Kliniğinizin büyüklüğüne uygun paket</h2>
          <p>İki basit paket, gizli ücret yok. Yıllık ödemede 2 ay ücretsiz kazanın.</p>
        </div>

        {loading ? (
          <p className="pricing-footnote">Planlar yükleniyor...</p>
        ) : plans.length === 0 ? (
          <p className="pricing-footnote">Şu anda satın alınabilir bir plan bulunmuyor.</p>
        ) : (
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div key={plan.code} className={plan.badge ? 'price-card popular' : 'price-card'}>
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
                {plan.features.length > 0 && (
                  <div className="price-feature-list">
                    {plan.features.map((feature) => (
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
                  onClick={() => handleSelect(plan.code)}
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
