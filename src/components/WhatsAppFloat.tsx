const WA_HREF = 'https://wa.me/90XXXXXXXXXX?text=Merhaba%2C%20Vetly%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum';

export function WhatsAppFloat() {
  return (
    <>
      {/* WhatsApp yönlendirmesi şu an bir yer tutucu numara kullanıyor: gerçek WhatsApp Business numaranızla değiştirin (90XXXXXXXXXX kısmını) */}
      <a className="wa-float" href={WA_HREF} target="_blank" rel="noopener" aria-label="WhatsApp'tan yazın">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.1l-.3-.2-3.1.8.8-3-.2-.3C4.2 14.7 3.8 13.4 3.8 12c0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" /></svg>
      </a>

      <div className="mobile-sticky-cta">
        <a className="mobile-cta-wa" href={WA_HREF} target="_blank" rel="noopener" aria-label="WhatsApp'tan yazın">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.1l-.3-.2-3.1.8.8-3-.2-.3C4.2 14.7 3.8 13.4 3.8 12c0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" /></svg>
        </a>
        <a href="#iletisim" className="btn btn-primary" style={{ flex: 1 }}>Hemen Başla</a>
      </div>
    </>
  );
}
