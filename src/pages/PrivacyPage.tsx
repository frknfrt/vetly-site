import { LegalHeader } from '../components/LegalHeader';
import { LegalFooter } from '../components/LegalFooter';

export function PrivacyPage() {
  return (
    <div id="app">
      <LegalHeader />

      <section className="legal-hero wrap">
        <span className="eyebrow">Yasal</span>
        <h1>Gizlilik Politikası</h1>
        <p className="updated">Son güncelleme: <span className="placeholder">[GG.AA.YYYY]</span> · Bu metin bir taslaktır, yayına almadan önce bir hukuk danışmanına gözden geçirtmenizi öneririz.</p>
      </section>

      <section className="legal-body wrap">
        <section>
          <h2>1. Giriş</h2>
          <p><span className="placeholder">[Şirket Unvanı]</span> ("Vetly", "biz") olarak, <span className="placeholder">[Adres]</span> adresinde faaliyet göstermekteyiz. Bu Gizlilik Politikası, Vetly veteriner klinik yönetim yazılımını kullanan klinikler, çalışanları ve son kullanıcılar olarak sizlerin kişisel verilerinin nasıl toplandığını, işlendiğini ve korunduğunu açıklar.</p>
        </section>

        <section>
          <h2>2. Toplanan Veriler</h2>
          <p>Hizmetimizi sunabilmek için aşağıdaki veri kategorilerini işleyebiliriz:</p>
          <ul>
            <li>Hesap bilgileri: ad, e-posta, telefon, klinik unvanı</li>
            <li>Kullanım verileri: giriş kayıtları, işlem geçmişi, cihaz ve tarayıcı bilgisi</li>
            <li>Klinik tarafından sisteme girilen hasta, sahip, randevu, laboratuvar, görüntüleme ve faturalandırma kayıtları</li>
            <li>İletişim: destek talepleri, form gönderimleri, e-posta yazışmaları</li>
          </ul>
        </section>

        <section>
          <h2>3. Verilerin Kullanım Amacı</h2>
          <p>Toplanan veriler; hizmetin sunulması, hesabınızın yönetilmesi, destek taleplerinin karşılanması, hizmet kalitesinin iyileştirilmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılır. Verileriniz, açık rızanız veya yasal bir dayanak olmaksızın üçüncü taraflarla pazarlama amacıyla paylaşılmaz.</p>
        </section>

        <section>
          <h2>4. Veri Güvenliği</h2>
          <p>Verileriniz şifrelenerek saklanır ve iletilir; sunucularımız Türkiye'de barındırılır. Yetkisiz erişime, kayba veya kötüye kullanıma karşı makul teknik ve idari önlemler alıyoruz. Ancak internet üzerinden hiçbir iletim veya elektronik saklama yönteminin %100 güvenli olmadığını belirtmek isteriz.</p>
        </section>

        <section>
          <h2>5. Çerezler</h2>
          <p>Web sitemiz, deneyiminizi iyileştirmek ve site kullanımını analiz etmek amacıyla çerezler kullanabilir. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.</p>
        </section>

        <section>
          <h2>6. Haklarınız</h2>
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat kapsamında; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini talep etme ve işlenen verileriniz hakkında bilgi talep etme haklarına sahipsiniz. Taleplerinizi <a href="mailto:info@vetly.com">info@vetly.com</a> adresine iletebilirsiniz.</p>
        </section>

        <section>
          <h2>7. İletişim</h2>
          <p>Bu politika hakkında sorularınız için bize <a href="mailto:info@vetly.com">info@vetly.com</a> üzerinden veya <span className="placeholder">[TELEFON NUMARANIZ]</span> numarasından ulaşabilirsiniz.</p>
        </section>
      </section>

      <LegalFooter />
    </div>
  );
}
