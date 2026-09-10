import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.png';

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <div className="brand-mark" style={{ height: '26px' }}>
              <img src={logoMark} alt="Vetly" />
            </div>
            <span className="brand-name" style={{ fontSize: '17px' }}>Vetly</span>
          </div>
          <p>Veteriner klinikleri için tek ekranda randevu, hasta, laboratuvar ve stok yönetimi.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Ürün</h4>
            <a href="#ozellikler">Özellikler</a>
            <a href="#ai-merkezi">AI Merkezi</a>
            <a href="#nasil-calisir">Nasıl Çalışır</a>
            <a href="#fiyatlandirma">Fiyatlandırma</a>
            <a href="#sss">SSS</a>
          </div>
          <div className="footer-col">
            <h4>İletişim</h4>
            <a href="mailto:info@vetly.com">info@vetly.com</a>
            <a href="#iletisim">İletişim Formu</a>
          </div>
          <div className="footer-col">
            <h4>Yasal</h4>
            <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
            <Link to="/kullanim-sartlari">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 Vetly. Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
}
