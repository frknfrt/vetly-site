export function Faq() {
  return (
      <section className="section" id="sss">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Sıkça Sorulan Sorular</span>
            <h2>Aklınıza takılanlar</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">Verilerim ne kadar güvende?<span className="plus">+</span></summary>
              <div className="faq-answer">Verileriniz şifrelenerek saklanır ve iletilir; sunucularımız Türkiye'de barındırılır. Yetkisiz erişime karşı makul teknik önlemler alıyoruz.</div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Mevcut sistemimden (Excel, kağıt veya başka bir yazılım) geçiş nasıl oluyor?<span className="plus">+</span></summary>
              <div className="faq-answer">Kurulum aşamasında ekibimiz kliniğinizi sisteme tanımlamanıza, hizmet ve ilaç kataloğunuzu aktarmanıza yardımcı olur. Çoğu klinik aynı gün içinde kullanmaya başlıyor.</div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Kaç şube ve kullanıcı dahil?<span className="plus">+</span></summary>
              <div className="faq-answer">Bu, seçtiğiniz pakete göre değişir: Başlangıç paketi tek şube, Profesyonel paketi ise 3 şubeye kadar destekler. Daha büyük klinik zincirleri için bizimle <a href="#iletisim">iletişime</a> geçebilirsiniz.</div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Yıllık ödemede nasıl indirim alıyorum?<span className="plus">+</span></summary>
              <div className="faq-answer">Aylık yerine yıllık ödemeyi tercih ettiğinizde 12 ay yerine 10 aylık ücret ödersiniz — yani 2 ay ücretsiz kullanmış olursunuz. Paket değişikliği istediğinizde ekibimizle iletişime geçmeniz yeterli.</div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Vetly'yi kullanmak için özel bir kurulum gerekiyor mu?<span className="plus">+</span></summary>
              <div className="faq-answer">Hayır, Vetly tarayıcı üzerinden çalışır; internet bağlantısı olan bir cihazdan doğrudan erişebilirsiniz.</div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Bir sorum olursa nasıl destek alabilirim?<span className="plus">+</span></summary>
              <div className="faq-answer"><a href="mailto:info@vetly.com">info@vetly.com</a> adresinden bize ulaşabilir veya sağ alttaki WhatsApp butonunu kullanabilirsiniz.</div>
            </details>
          </div>
        </div>
      </section>
  );
}