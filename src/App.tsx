import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TrialSignupPage } from './pages/TrialSignupPage';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gizlilik-politikasi" element={<PrivacyPage />} />
      <Route path="/kullanim-sartlari" element={<TermsPage />} />
      <Route path="/deneme" element={<TrialSignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    {/* Tüm sayfalarda: altbilgideki "Çerez Ayarları" gizlilik sayfalarında da çalışsın. */}
    <CookieBanner />
    </>
  );
}
