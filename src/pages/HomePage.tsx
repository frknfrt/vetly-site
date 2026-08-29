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
  return (
    <div id="app">
      <Header />
      <Hero />
      <Features />
      <CompareSection />
      <LabDeepDive />
      <AiDeepDive />
      <HowItWorks />
      <Pricing />
      <Faq />
      <ContactCta />
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </div>
  );
}
