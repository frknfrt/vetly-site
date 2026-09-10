import { useState, type FormEvent } from 'react';
import { ApiError } from '../api/client';
import { signupApi } from '../api/signupApi';

type FormStatus = 'idle' | 'submitting';

interface ContactCtaProps {
  selectedPlanCode: string | null;
}

export function ContactCta({ selectedPlanCode }: ContactCtaProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<string | null>(null);

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
      const session = await signupApi.initiateCheckout({
        clinicName: String(formData.get('clinicName') || ''),
        adminFullName: String(formData.get('adminFullName') || ''),
        adminEmail: String(formData.get('adminEmail') || ''),
        phone: phone === '' ? undefined : phone,
        planCode,
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

              {!selectedPlanCode && (
                  <p className="form-status error">Lütfen yukarıdaki fiyatlandırma bölümünden bir plan seçin.</p>
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