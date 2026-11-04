import { useState, type FormEvent } from 'react';
import { ApiError } from '../api/client';
import { signupApi, type SignupPlan } from '../api/signupApi';

type FormStatus = 'idle' | 'submitting';

interface ContactCtaProps {
  selectedPlan: SignupPlan | null;
}

// REVIZE (2026-11-01, canli QA bulgusu): daha once sadece plan KODU
// geliyordu -- "Hemen Basla"ya basinca odeme butonu sessizce aktif
// oluyordu ama formda hangi plani secip odeyecegini gosteren hicbir sey
// yoktu. Artik tam plan nesnesi alinip acikca gosteriliyor.
export function ContactCta({ selectedPlan }: ContactCtaProps) {
  const selectedPlanCode = selectedPlan?.code ?? null;
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [showCoupon, setShowCoupon] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const planCode = String(formData.get('planCode') || '');

    if (!planCode) {
      setError('Lütfen yukarıdaki fiyatlandırma bölümünden bir plan seçin.');
      return;
    }

    setStatus('submitting');
    setError(null);

    try {
      const phone = String(formData.get('phone') || '');
      const couponCode = String(formData.get('couponCode') || '');
      const session = await signupApi.initiateCheckout({
        clinicName: String(formData.get('clinicName') || ''),
        adminFullName: String(formData.get('adminFullName') || ''),
        adminEmail: String(formData.get('adminEmail') || ''),
        phone: phone === '' ? undefined : phone,
        planCode,
        couponCode: couponCode === '' ? undefined : couponCode,
      });
      window.location.href = session.checkoutFormUrl;
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Bir şeyler ters gitti, lütfen tekrar deneyin.');
      setStatus('idle');
    }
  }

  return (
      <section className="section cta-band reveal" id="iletisim">
        <div className="wrap">
          <div>
            <span className="eyebrow">Hemen Başlayın</span>
            <h2>Kliniğinizi bugün Vetly'ye taşıyın</h2>
            <p className="cta-sub">Formu doldurun, ödemenizi yapın, hesabınız hemen oluşsun.</p>

            <form className="real-cta-form" onSubmit={handleSubmit}>
              <input type="hidden" name="planCode" value={selectedPlanCode ?? ''} />

              <div className="form-row">
                <input type="text" name="clinicName" placeholder="Klinik Adı" required />
                <input type="text" name="adminFullName" placeholder="Adınız Soyadınız" required />
              </div>
              <div className="form-row">
                <input type="email" name="adminEmail" placeholder="E-posta" required />
                <input type="tel" name="phone" placeholder="Telefon (opsiyonel)" />
              </div>
              {showCoupon ? (
                  <div className="form-row">
                    <input type="text" name="couponCode" placeholder="Kupon Kodu" autoFocus />
                  </div>
              ) : (
                  <button type="button" className="coupon-toggle" onClick={() => setShowCoupon(true)}>
                    Kupon kodunuz var mı?
                  </button>
              )}

              {selectedPlan ? (
                  <p className="form-status success">
                    Seçili plan: <strong>{selectedPlan.name}</strong> — {selectedPlan.monthlyPrice.toLocaleString('tr-TR')}₺ / ay
                  </p>
              ) : (
                  <p className="form-status">Devam etmek için yukarıdan bir plan seçin.</p>
              )}

              <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting' || !selectedPlanCode}>
                {status === 'submitting' ? 'Yönlendiriliyor...' : 'Ödemeye Geç'}
              </button>

              {error && <p className="form-status error">{error}</p>}
            </form>

            <p className="cta-fineprint">Ya da bizi arayın: +90 553 165 61 32</p>
          </div>
        </div>
      </section>
  );
}