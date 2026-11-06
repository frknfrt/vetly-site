import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { CompareSection } from '../components/CompareSection';
import { LabDeepDive } from '../components/LabDeepDive';
import { TarbilDeepDive } from '../components/TarbilDeepDive';
import { AiDeepDive } from '../components/AiDeepDive';
import { HowItWorks } from '../components/HowItWorks';
import { Pricing } from '../components/Pricing';
import { Faq } from '../components/Faq';
import { ContactCta } from '../components/ContactCta';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import type { SignupPlan } from '../api/signupApi';

export function HomePage() {
    // REVIZE (2026-11-01, canli QA bulgusu): sadece plan KODU tutuluyordu --
    // ContactCta formunda kullaniciya hangi plani sectigini gosterecek bir isim/
    // fiyat yoktu, odeme butonu sessizce aktif oluyordu. Artik tum plan nesnesi
    // tutuluyor ki ContactCta secili plani acikca gosterebilsin.
    const [selectedPlan, setSelectedPlan] = useState<SignupPlan | null>(null);
    const [signupResult, setSignupResult] = useState<'basarili' | 'hata' | null>(null);

    useScrollReveal();
    usePageMeta({
        title: 'Vetly | Veteriner Klinik Yönetim Yazılımı',
        description: 'Vetly ile randevu, hasta ve sahip kayıtları, laboratuvar, konaklama, stok ve faturalandırmayı tek panelden yönetin.',
        path: '/',
    });

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
        <>
            <a className="skip-link" href="#main-content">İçeriğe atla</a>
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
                <TarbilDeepDive />
                <AiDeepDive />
                <HowItWorks />
                <Pricing onSelectPlan={setSelectedPlan} />
                <Faq />
                <ContactCta selectedPlan={selectedPlan} />
                <Footer />
                <WhatsAppFloat />
            </div>
        </>
    );
}