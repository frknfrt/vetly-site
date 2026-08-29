import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gizlilik-politikasi" element={<PrivacyPage />} />
      <Route path="/kullanim-sartlari" element={<TermsPage />} />
    </Routes>
  );
}
