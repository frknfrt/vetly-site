import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ApiError } from '../api/client';
import { trialSignupApi } from '../api/trialSignupApi';
import { LegalHeader } from '../components/LegalHeader';
import { LegalFooter } from '../components/LegalFooter';
import { usePageMeta } from '../hooks/usePageMeta';
import { TURKISH_CITIES } from '../lib/turkishCities';

type Step = 'form' | 'code';

const GENERIC_ERROR = 'Bir şeyler ters gitti, lütfen tekrar deneyin.';
const RATE_LIMITED = 'Çok fazla deneme yapıldı. Lütfen biraz sonra tekrar deneyin.';

/** Sunucunun hata kodunu kullanıcıya gösterilecek metne çevirir. */
function messageFor(err: unknown): string {
  if (!(err instanceof ApiError)) return GENERIC_ERROR;
  if (err.status === 429) return RATE_LIMITED;
  switch (err.errorCode) {
    case 'SIGNUP_EMAIL_ALREADY_REGISTERED':
      return 'Bu e-posta ile zaten bir hesap var. Giriş yapmayı deneyin.';
    case 'TRIAL_PHONE_ALREADY_USED':
      return 'Bu telefon numarasıyla daha önce deneme başlatılmış.';
    case 'TRIAL_CODE_EXPIRED':
      return 'Kodun süresi doldu. Yeni kod isteyin.';
    case 'TRIAL_RATE_LIMITED':
      return RATE_LIMITED;
    case 'TRIAL_SIGNUP_REQUEST_NOT_FOUND':
      return 'Kayıt isteği bulunamadı. Lütfen formu yeniden doldurun.';
    default:
      return err.message || GENERIC_ERROR;
  }
}

export function TrialSignupPage() {
  usePageMeta({
    title: '7 Gün Ücretsiz Deneyin | Vetly',
    description: 'Vetly veteriner klinik yönetim yazılımını 7 gün ücretsiz deneyin. Kredi kartı gerekmez; formu doldurun, telefonunuzu doğrulayın, hemen başlayın.',
    path: '/deneme',
  });

  const [step, setStep] = useState<Step>('form');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [requestId, setRequestId] = useState<string | null>(null);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [resendIn, setResendIn] = useState(0);

  // "Kodu tekrar gönder" geri sayımı.
  useEffect(() => {
    if (resendIn <= 0) return;
    const timer = window.setTimeout(() => setResendIn((seconds) => seconds - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [resendIn]);

  async function handleStart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const data = new FormData(event.currentTarget);
    const password = String(data.get('password') || '');
    if (password !== String(data.get('passwordRepeat') || '')) {
      setError('Şifreler birbiriyle aynı olmalı.');
      return;
    }
    const enteredPhone = String(data.get('phone') || '').trim();

    setSubmitting(true);
    setError(null);
    try {
      const started = await trialSignupApi.start({
        fullName: String(data.get('fullName') || '').trim(),
        phone: enteredPhone,
        email: String(data.get('email') || '').trim(),
        clinicName: String(data.get('clinicName') || '').trim(),
        city: String(data.get('city') || ''),
        chamberRegistrationNo: String(data.get('chamberRegistrationNo') || '').trim(),
        password,
        consentAccepted: true,
      });
      setRequestId(started.requestId);
      setPhone(enteredPhone);
      setResendIn(started.resendAvailableInSeconds);
      setCode('');
      setStep('code');
    } catch (err) {
      setError(messageFor(err));
    } finally {
      setSubmitting(false);
    }
  }

  async function handleVerify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting || !requestId) return;
    setSubmitting(true);
    setError(null);
    setNotice(null);
    try {
      const verified = await trialSignupApi.verify({ requestId, code: code.trim() });
      window.location.href = verified.loginUrl;
    } catch (err) {
      setError(messageFor(err));
      setSubmitting(false);
    }
  }

  async function handleResend() {
    if (!requestId || resendIn > 0 || submitting) return;
    setError(null);
    setNotice(null);
    try {
      const resent = await trialSignupApi.resendCode({ requestId });
      setResendIn(resent.resendAvailableInSeconds);
      setCode('');
      setNotice('Yeni kod gönderildi.');
    } catch (err) {
      setError(messageFor(err));
    }
  }

  function backToForm() {
    setStep('form');
    setError(null);
    setNotice(null);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">İçeriğe atla</a>
      <div id="app">
        <LegalHeader />

        <section className="legal-hero wrap" id="main-content">
          <span className="eyebrow">7 Gün Ücretsiz</span>
          <h1>Vetly'yi kendi kliniğinizde deneyin</h1>
          <p className="updated">Kredi kartı gerekmez. Deneme boyunca tüm modüller açıktır.</p>
        </section>

        <section className="trial-signup wrap">
          {step === 'form' ? (
            <form className="trial-form" onSubmit={handleStart} noValidate={false}>
              <div className="trial-row">
                <label className="trial-field">
                  <span>Ad Soyad</span>
                  <input type="text" name="fullName" autoComplete="name" required maxLength={120} />
                </label>
                <label className="trial-field">
                  <span>Cep Telefonu</span>
                  <input type="tel" name="phone" autoComplete="tel" placeholder="05XX XXX XX XX" required maxLength={30} defaultValue={phone} />
                </label>
              </div>
              <div className="trial-row">
                <label className="trial-field">
                  <span>E-posta</span>
                  <input type="email" name="email" autoComplete="email" required maxLength={200} />
                </label>
                <label className="trial-field">
                  <span>Klinik Adı</span>
                  <input type="text" name="clinicName" autoComplete="organization" required maxLength={160} />
                </label>
              </div>
              <div className="trial-row">
                <label className="trial-field">
                  <span>İl</span>
                  <select name="city" required defaultValue="">
                    <option value="" disabled>İl seçin</option>
                    {TURKISH_CITIES.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </label>
                <label className="trial-field">
                  <span>Veteriner Hekimler Odası Sicil No</span>
                  <input type="text" name="chamberRegistrationNo" required maxLength={30} />
                </label>
              </div>
              <div className="trial-row">
                <label className="trial-field">
                  <span>Şifre</span>
                  <input type="password" name="password" autoComplete="new-password" required minLength={8} maxLength={100} />
                  <small>En az 8 karakter. Panele bu şifreyle giriş yapacaksınız.</small>
                </label>
                <label className="trial-field">
                  <span>Şifre (tekrar)</span>
                  <input type="password" name="passwordRepeat" autoComplete="new-password" required minLength={8} maxLength={100} />
                </label>
              </div>

              <label className="trial-consent">
                <input type="checkbox" name="consentAccepted" required />
                <span>
                  <Link to="/kullanim-sartlari" target="_blank" rel="noopener">Kullanım Şartları</Link>'nı ve{' '}
                  <Link to="/gizlilik-politikasi" target="_blank" rel="noopener">KVKK Aydınlatma Metni</Link>'ni okudum, kabul ediyorum.
                </span>
              </label>

              {error && <p className="trial-status error" role="alert">{error}</p>}

              <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
                {submitting ? 'Gönderiliyor...' : 'Doğrulama Kodu Gönder'}
              </button>
              <p className="trial-fineprint">
                Telefonunuza SMS ile 6 haneli bir kod göndereceğiz. Zaten hesabınız var mı?{' '}
                <a href="https://uygulama.vetly.com.tr/login">Giriş yapın</a>
              </p>
            </form>
          ) : (
            <form className="trial-form trial-form-narrow" onSubmit={handleVerify}>
              <h2>Telefonunuzu doğrulayın</h2>
              <p className="trial-lede">
                <strong>{phone}</strong> numarasına gönderdiğimiz 6 haneli kodu girin. Kod 5 dakika geçerlidir.
              </p>
              <label className="trial-field">
                <span>Doğrulama Kodu</span>
                <input
                  type="text"
                  name="code"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  required
                  autoFocus
                  className="trial-code-input"
                  value={code}
                  onChange={(event) => setCode(event.target.value.replace(/[^0-9]/g, ''))}
                />
              </label>

              {error && <p className="trial-status error" role="alert">{error}</p>}
              {notice && !error && <p className="trial-status success" role="status">{notice}</p>}

              <button type="submit" className="btn btn-primary btn-block" disabled={submitting || code.length !== 6}>
                {submitting ? 'Hesabınız oluşturuluyor...' : 'Doğrula ve Denemeyi Başlat'}
              </button>

              <div className="trial-code-actions">
                <button type="button" className="trial-link-button" onClick={handleResend} disabled={resendIn > 0 || submitting}>
                  {resendIn > 0 ? `Kodu tekrar gönder (${resendIn} sn)` : 'Kodu tekrar gönder'}
                </button>
                <button type="button" className="trial-link-button" onClick={backToForm} disabled={submitting}>
                  Bilgileri düzelt
                </button>
              </div>
            </form>
          )}
        </section>

        <LegalFooter />
      </div>
    </>
  );
}
