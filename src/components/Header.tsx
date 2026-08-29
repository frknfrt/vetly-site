import logoMark from '../assets/logo-mark.png';

/**
 * "Giriş Yap" / "Hemen Başla" şu an sayfa içi #iletisim'e gidiyor (orijinal
 * tasarımdaki davranış korundu) -- gerçek ürün (app.vetly.com) URL'i
 * belirlendiğinde bu iki link güncellenmeli.
 */
export function Header() {
  return (
    <header className="site-header">
      <a href="#" className="brand" aria-label="Sayfa başına dön">
        <div className="brand-mark">
          <img src={logoMark} alt="Vetly" />
        </div>
        <span className="brand-name">Vetly</span>
      </a>
      <nav className="nav-links">
        <a href="#ozellikler">Özellikler</a>
        <a href="#ai-merkezi">AI Merkezi</a>
        <a href="#nasil-calisir">Nasıl Çalışır</a>
        <a href="#fiyatlandirma">Fiyatlandırma</a>
        <a href="#sss">SSS</a>
        <a href="#iletisim">İletişim</a>
      </nav>
      <div className="header-actions">
        <a href="#iletisim" className="btn btn-ghost btn-sm">Giriş Yap</a>
        <a href="#iletisim" className="btn btn-primary btn-sm">Hemen Başla</a>
      </div>
    </header>
  );
}
