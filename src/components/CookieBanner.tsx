import { useEffect, useState } from 'react';

const COOKIE_NAME = 'vetly_cookie_consent';

function getCookie(name: string): string {
  return document.cookie.split('; ').reduce((acc, part) => {
    const [key, value] = part.split('=');
    return key === name ? decodeURIComponent(value) : acc;
  }, '');
}

function acceptCookie() {
  const expiry = new Date();
  expiry.setFullYear(expiry.getFullYear() + 1);
  document.cookie = `${COOKIE_NAME}=1; expires=${expiry.toUTCString()}; path=/; SameSite=Lax`;
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookie(COOKIE_NAME)) {
      setVisible(true);
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-banner" style={{ display: 'flex' }}>
      <p>
        Bu site deneyiminizi iyileştirmek için çerezler kullanır. Devam ederek çerez kullanımını kabul etmiş olursunuz.{' '}
        <a href="/gizlilik-politikasi" style={{ color: '#ffffff', textDecoration: 'underline' }}>Gizlilik Politikası</a>
      </p>
      <button
        className="btn btn-primary btn-sm"
        type="button"
        onClick={() => {
          acceptCookie();
          setVisible(false);
        }}
      >
        Kabul Et
      </button>
    </div>
  );
}
