import { LegalHeader } from '../components/LegalHeader';
import { LegalFooter } from '../components/LegalFooter';

export function PrivacyPage() {
  return (
      <>
        <a className="skip-link" href="#main-content">İçeriğe atla</a>
        <div id="app">
          <LegalHeader />

          <section className="legal-hero wrap" id="main-content">
            <span className="eyebrow">Yasal</span>
            <h1>Gizlilik Politikası</h1>
            <p className="updated">Son güncelleme: 31.08.2026 · Bu metin bir taslaktır, yayına almadan önce bir hukuk danışmanına gözden geçirtmenizi öneririz.</p>
          </section>

          <section className="legal-body wrap">
            <section>
              <h2>1. Taraflar ve Kapsam</h2>
              <p>Zora Yazılım ("Zora Yazılım", "biz"), Çankaya, Ankara adresinde faaliyet göstermekte olup Vetly veteriner klinik yönetim yazılımını ("Hizmet") geliştirmekte ve işletmektedir. Bu Gizlilik Politikası, Hizmeti kullanan veteriner klinikleri, klinik çalışanları ve yetkilileri olarak sizlerin kişisel verilerinin nasıl toplandığını, işlendiğini ve korunduğunu açıklar.</p>
              <p>Bu politika kapsamında iki farklı rolümüz bulunmaktadır: (a) klinik hesabınıza, yetkililerinize ve Hizmeti kullanımınıza ilişkin verilerde Zora Yazılım <strong>Veri Sorumlusu</strong> sıfatıyla hareket eder; (b) kliniğiniz tarafından sisteme girilen hasta, hayvan sahibi, randevu, laboratuvar ve faturalandırma verilerinde ise Zora Yazılım yalnızca kliniğinizin talimatları doğrultusunda hareket eden <strong>Veri İşleyen</strong> sıfatındadır. Bu ikinci grup veriler bakımından veri sorumlusu sıfatı, verileri sisteme giren veteriner kliniğine aittir; bu verilerin KVKK'ya uygun şekilde toplanması ve hukuki dayanağının bulunmasından klinik sorumludur.</p>
            </section>

            <section>
              <h2>2. Toplanan Kişisel Veriler</h2>
              <p>Hizmetimizi sunabilmek için aşağıdaki veri kategorilerini işleyebiliriz:</p>
              <ul>
                <li>Hesap bilgileri: ad, e-posta, telefon, klinik unvanı, kullanıcı rolü</li>
                <li>Kullanım verileri: giriş kayıtları, işlem geçmişi, cihaz ve tarayıcı bilgisi, IP adresi</li>
                <li>Klinik tarafından sisteme girilen hasta, hayvan sahibi, randevu, laboratuvar, görüntüleme, konaklama ve faturalandırma kayıtları</li>
                <li>İletişim: destek talepleri, form gönderimleri, e-posta ve WhatsApp/SMS yazışmaları</li>
              </ul>
            </section>

            <section>
              <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
              <p>Toplanan veriler; Hizmetin sunulması, hesabınızın yönetilmesi, randevu/aşı/ödeme hatırlatmalarının iletilmesi, destek taleplerinin karşılanması, Hizmet kalitesinin ve güvenliğinin iyileştirilmesi, faturalandırma ve mevzuata uygun kayıt tutma yükümlülüklerinin (ör. e-Fatura, TARBİL bildirimleri) yerine getirilmesi amacıyla işlenir. Verileriniz, açık rızanız veya yasal bir dayanak olmaksızın üçüncü taraflarla pazarlama amacıyla paylaşılmaz.</p>
            </section>

            <section>
              <h2>4. İşlemenin Hukuki Sebebi</h2>
              <p>Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde yer alan şu hukuki sebeplere dayanılarak işlenir: aramızdaki sözleşmenin kurulması ve ifası için gerekli olması, hukuki yükümlülüklerimizin yerine getirilmesi (ör. mali mevzuat, TARBİL bildirim yükümlülükleri), temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatlerimiz (ör. Hizmetin güvenliğinin ve performansının izlenmesi) ve gerekli hallerde açık rızanızın bulunması.</p>
            </section>

            <section>
              <h2>5. Veri Güvenliği ve Saklama Süresi</h2>
              <p>Verileriniz şifrelenerek saklanır ve iletilir; sunucularımız Türkiye'de barındırılır. Yetkisiz erişime, kayba veya kötüye kullanıma karşı makul teknik ve idari önlemler alıyoruz. Ancak internet üzerinden hiçbir iletim veya elektronik saklama yönteminin %100 güvenli olmadığını belirtmek isteriz.</p>
              <p>Verileriniz, hesabınız aktif olduğu sürece ve ilgili mevzuatın öngördüğü süreler boyunca (ör. mali kayıtlar için Vergi Usul Kanunu uyarınca 10 yıl) saklanır; bu sürelerin sonunda silinir, yok edilir veya anonim hale getirilir.</p>
            </section>

            <section>
              <h2>6. Kişisel Verilerin Aktarılması ve Veri İşleyenler</h2>
              <p>Hizmetin sunulması sırasında sınırlı ölçüde yetkilendirilmiş üçüncü taraf hizmet sağlayıcılarından (barındırma/altyapı sağlayıcısı, SMS ve WhatsApp mesajlaşma altyapısı sağlayıcısı, iletişim formu/e-posta gönderim hizmeti gibi) yararlanılmaktadır. Bu sağlayıcılar verilerinizi yalnızca Hizmetin ifası için gerekli ölçüde ve sözleşmesel gizlilik yükümlülükleri çerçevesinde işleyebilir. Kullanılan sağlayıcılardan bir kısmının yurt dışında yerleşik olması halinde, aktarım KVKK'nın 9. maddesinde öngörülen açık rıza veya Kurul tarafından belirlenen yeterli koruma mekanizmaları çerçevesinde gerçekleştirilir. Güncel sağlayıcı listesi talep üzerine paylaşılabilir.</p>
            </section>

            <section>
              <h2>7. Çerezler</h2>
              <p>Web sitemiz, deneyiminizi iyileştirmek ve site kullanımını analiz etmek amacıyla çerezler kullanabilir. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.</p>
            </section>

            <section>
              <h2>8. KVKK Kapsamındaki Haklarınız ve Başvuru Usulü</h2>
              <p>6698 sayılı Kişisel Verilerin Korunması Kanunu'nun ("KVKK") 11. maddesi uyarınca; kişisel verinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, KVKK'nın 7. maddesindeki koşullar çerçevesinde silinmesini veya yok edilmesini isteme, bu işlemlerin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme, işlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.</p>
              <p>Taleplerinizi <a href="mailto:info@vetly.com.tr">info@vetly.com.tr</a> adresine veya +90 553 165 61 32 numarasına yazılı olarak iletebilirsiniz. Başvurularınız, niteliğine göre en geç 30 gün içinde ve ücretsiz olarak sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi hâlinde Kurul'un belirlediği tarifedeki ücret talep edilebilir.</p>
            </section>

            <section>
              <h2>9. Politika Değişiklikleri</h2>
              <p>Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler web sitemiz veya e-posta yoluyla duyurulur; güncel sürüm her zaman bu sayfada yayınlanır.</p>
            </section>

            <section>
              <h2>10. İletişim</h2>
              <p>Bu politika hakkında sorularınız için bize <a href="mailto:info@vetly.com.tr">info@vetly.com.tr</a> üzerinden veya +90 553 165 61 32 numarasından ulaşabilirsiniz.</p>
            </section>
          </section>

          <LegalFooter />
        </div>
      </>
  );
}