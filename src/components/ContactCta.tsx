import { useState, type FormEvent } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactCta() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('submitting');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section cta-band" id="iletisim">
      <div className="wrap">
        <div className="cta-band-inner">
          <span className="eyebrow">Hemen Başlayın</span>
          <h2>Kliniğinizi bugün Vetly'ye taşıyın</h2>
          <p>Formu doldurun, ekibimiz sizinle iletişime geçsin.</p>

          <form
            className="real-cta-form"
            action="https://formsubmit.co/info@vetly.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="Yeni Vetly Kayıt Talebi" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="Talebiniz alındı, en kısa sürede sizinle iletişime geçeceğiz." />

            <div className="cta-form-row">
              <input type="text" name="Klinik / İsim" placeholder="Klinik / İsim" required />
              <input type="email" name="E-posta" placeholder="E-posta" required />
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Gönderiliyor...' : 'Kaydımı Oluştur'}
            </button>

            {status === 'success' && (
              <p className="cta-form-status cta-form-success">Talebiniz alındı, teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.</p>
            )}
            {status === 'error' && (
              <p className="cta-form-status cta-form-error">Bir şeyler ters gitti, lütfen tekrar deneyin ya da bizi arayın.</p>
            )}
          </form>

          <p className="cta-fineprint">Ya da bizi arayın: [TELEFON NUMARANIZ]</p>
        </div>
      </div>
    </section>
  );
}
