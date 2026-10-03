import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
}

const SITE_ORIGIN = 'https://www.vetly.com.tr';

/**
 * Her route'un kendi title/description/canonical degerini ayarlamasi icin.
 * SPA oldugu icin index.html'deki meta etiketleri tum route'larda ayni
 * kalir -- bu hook, route degistiginde bu etiketleri gercek sayfa
 * icerigine gore gunceller (SEO: her sayfanin kendi <title>'i olmali).
 */
export function usePageMeta({ title, description, path }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    const canonicalUrl = `${SITE_ORIGIN}${path}`;
    setMeta('meta[property="og:url"]', canonicalUrl);

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);
  }, [title, description, path]);
}
