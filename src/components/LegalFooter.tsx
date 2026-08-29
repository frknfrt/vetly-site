import { Link } from 'react-router-dom';

export function LegalFooter() {
  return (
    <footer className="legal-footer">
      <div className="wrap">
        <div className="footer-bottom-row">
          <span>© 2026 Vetly. Tüm hakları saklıdır.</span>
          <span>Bu sayfa bir tasarım taslağıdır.</span>
        </div>
        <div className="footer-links-row">
          <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
          <Link to="/kullanim-sartlari">Kullanım Şartları</Link>
          <a href="mailto:info@vetly.com">info@vetly.com</a>
        </div>
      </div>
    </footer>
  );
}
