import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { CompareSection } from '../components/CompareSection';
import { LabDeepDive } from '../components/LabDeepDive';
import { AiDeepDive } from '../components/AiDeepDive';
import { HowItWorks } from '../components/HowItWorks';
import { Pricing } from '../components/Pricing';
import { Faq } from '../components/Faq';
import { ContactCta } from '../components/ContactCta';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { CookieBanner } from '../components/CookieBanner';

export function HomePage() {
  const [selectedPlanCode, setSelectedPlanCode] = useState<string | null>(null);
  const [signupResult, setSignupResult] = useState<'basarili' | 'hata' | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const kayit = params.get('kayit');
    if (kayit === 'basarili' || kayit === 'hata') {
      setSignupResult(kayit);
      params.delete('kayit');
      const newSearch = params.toString();
      window.history.replaceState({}, '', window.location.pathname + (newSearch ? `?${newSearch}` : ''));
    }
  }, []);

  return (
    <div id="app">
      <Header />
      {signupResult === 'basarili' && (
        <div className="signup-result-banner signup-result-success">
          Ödemeniz alındı! E-postanızı kontrol edin, hesabınızı etkinleştirme linki gönderdik.
        </div>
      )}
      {signupResult === 'hata' && (
        <div className="signup-result-banner signup-result-error">
          Ödeme tamamlanamadı, lütfen tekrar deneyin ya da bizimle iletişime geçin.
        </div>
      )}
      <Hero />
      <Features />
      <CompareSection />
      <LabDeepDive />
      <AiDeepDive />
      <HowItWorks />
      <Pricing onSelectPlan={setSelectedPlanCode} />
      <Faq />
      <ContactCta selectedPlanCode={selectedPlanCode} />
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </div>
  );
}
