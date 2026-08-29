import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.png';

export function LegalHeader() {
  return (
    <header className="site-header legal-site-header">
      <Link to="/" className="brand" aria-label="Ana sayfaya dön">
        <div className="brand-mark">
          <img src={logoMark} alt="Vetly" />
        </div>
        <span className="brand-name">Vetly</span>
      </Link>
      <Link to="/" className="btn">Ana Sayfaya Dön</Link>
    </header>
  );
}
