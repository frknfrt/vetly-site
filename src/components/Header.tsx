import logoMark from '../assets/logo-mark.png';

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
                <a href="https://uygulama.vetly.com.tr/panel" className="btn btn-ghost btn-sm">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                        <polyline points="10 17 15 12 10 7" />
                        <line x1="15" y1="12" x2="3" y2="12" />
                    </svg>
                    Giriş Yap
                </a>
                <a href="#iletisim" className="btn btn-primary btn-sm">Hemen Başla</a>
            </div>
        </header>
    );
}