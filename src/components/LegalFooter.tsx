import { Link } from 'react-router-dom';

export function LegalFooter() {
  return (
    <footer className="legal-footer">
      <div className="wrap">
        <div className="footer-bottom-row">
          <span>© 2026 Vetly. Tüm hakları saklıdır.</span>
        </div>
        <div className="footer-links-row">
          <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
          <Link to="/kullanim-sartlari">Kullanım Şartları</Link>
          <a href="mailto:info@vetly.com.tr">info@vetly.com.tr</a>
        </div>
      </div>
    </footer>
  );
}
