import { Link } from 'react-router-dom';
import { LegalHeader } from '../components/LegalHeader';
import { LegalFooter } from '../components/LegalFooter';
import { usePageMeta } from '../hooks/usePageMeta';

// REVIZE (2026-11-01, canli QA bulgusu): var olmayan bir route'a gidildiginde
// (orn. yanlis yazilmis bir link ya da eski bir yer isareti) React Router
// hicbir Route'u eslestiremiyor ve sayfa tamamen bos/beyaz kaliyordu --
// ziyaretciye profesyonel olmayan bir deneyim sunuyordu. Artik App.tsx'teki
// catch-all route bu sayfaya yonleniyor.
export function NotFoundPage() {
  usePageMeta({
    title: 'Sayfa Bulunamadı | Vetly',
    description: 'Aradığınız sayfa bulunamadı. Vetly ana sayfasına geri dönün.',
    path: '/404',
  });

  return (
    <>
      <div id="app">
        <LegalHeader />

        <section className="legal-hero wrap not-found-hero" id="main-content">
          <span className="eyebrow">404</span>
          <h1>Sayfa bulunamadı</h1>
          <p className="updated">Aradığınız sayfa kaldırılmış, taşınmış veya hiç var olmamış olabilir.</p>
          <Link to="/" className="btn btn-primary not-found-cta">Ana Sayfaya Dön</Link>
        </section>

        <LegalFooter />
      </div>
    </>
  );
}
