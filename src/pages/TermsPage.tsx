import { LegalHeader } from '../components/LegalHeader';
import { LegalFooter } from '../components/LegalFooter';

export function TermsPage() {
  return (
    <div id="app">
      <LegalHeader />

      <section className="legal-hero wrap">
        <span className="eyebrow">Yasal</span>
        <h1>Kullanım Şartları</h1>
        <p className="updated">Son güncelleme: <span className="placeholder">[GG.AA.YYYY]</span> · Bu metin bir taslaktır, yayına almadan önce bir hukuk danışmanına gözden geçirtmenizi öneririz.</p>
      </section>

      <section className="legal-body wrap">
        <section>
          <h2>1. Kabul</h2>
          <p><span className="placeholder">[Şirket Unvanı]</span> tarafından sağlanan Vetly yazılımını ("Hizmet") kullanarak bu Kullanım Şartları'nı kabul etmiş olursunuz. Bu şartları kabul etmiyorsanız Hizmeti kullanmamalısınız.</p>
        </section>

        <section>
          <h2>2. Hizmetin Tanımı</h2>
          <p>Vetly; randevu takvimi, hasta ve sahip kayıtları, aşı takvimi ve TARBİL bildirimleri, laboratuvar, görüntüleme, konaklama, stok ve ilaç yönetimi, faturalandırma ve e-Fatura, çoklu şube desteği, raporlama ve AI destekli özellikler sunan bir veteriner klinik yönetim yazılımıdır. Hizmet kapsamı zaman içinde geliştirilebilir veya güncellenebilir.</p>
        </section>

        <section>
          <h2>3. Hesap ve Kullanıcı Yükümlülükleri</h2>
          <ul>
            <li>Hesap bilgilerinizin doğruluğundan ve güncelliğinden siz sorumlusunuz.</li>
            <li>Hesap şifrenizin gizliliğini korumak ve yetkisiz kullanımı bize bildirmek sizin sorumluluğunuzdadır.</li>
            <li>Hizmeti yalnızca yasalara uygun amaçlarla kullanmayı kabul edersiniz.</li>
            <li>Sisteme girdiğiniz hasta ve sahip verilerinin doğruluğundan ve ilgili mevzuata (ör. KVKK, TARBİL bildirim yükümlülükleri) uygunluğundan klinik olarak siz sorumlusunuz.</li>
          </ul>
        </section>

        <section>
          <h2>4. Ücretlendirme</h2>
          <p>Seçtiğiniz pakete göre ücretlendirme <span className="placeholder">[Fiyatlandırma sayfasında]</span> belirtilir. Ödemeler, aksi belirtilmedikçe peşin ve iade edilemez niteliktedir. Ücretlerde yapılacak değişiklikler önceden bildirilir.</p>
        </section>

        <section>
          <h2>5. Fikri Mülkiyet</h2>
          <p>Vetly yazılımı, tasarımı, logosu ve marka unsurları <span className="placeholder">[Şirket Unvanı]</span>'na aittir. Bu Şartlar, yazılımın kaynak kodu veya marka varlıkları üzerinde herhangi bir mülkiyet hakkı devretmez.</p>
        </section>

        <section>
          <h2>6. Sorumluluğun Sınırlandırılması</h2>
          <p>Hizmet "olduğu gibi" sunulur. Yasaların izin verdiği azami ölçüde, kesintisiz veya hatasız çalışma garantisi verilmez ve dolaylı zararlardan sorumluluk kabul edilmez. AI destekli özelliklerin (AI Merkezi) çıktıları öneri niteliğindedir; klinik kararların nihai sorumluluğu kullanıcıya aittir.</p>
        </section>

        <section>
          <h2>7. Fesih</h2>
          <p>Bu Şartların ihlali durumunda hesabınızı askıya alma veya sonlandırma hakkımız saklıdır. Hesabınızı istediğiniz zaman kapatabilirsiniz; kapatma sonrası veri saklama süreleri ayrıca belirtilir.</p>
        </section>

        <section>
          <h2>8. Değişiklikler</h2>
          <p>Bu Kullanım Şartları zaman zaman güncellenebilir. Önemli değişiklikler, web sitemiz veya e-posta yoluyla duyurulur.</p>
        </section>

        <section>
          <h2>9. Uygulanacak Hukuk</h2>
          <p>Bu Şartlar, <span className="placeholder">[Ülke/Yargı Yetkisi]</span> kanunlarına tabidir.</p>
        </section>

        <section>
          <h2>10. İletişim</h2>
          <p>Sorularınız için bize <a href="mailto:info@vetly.com">info@vetly.com</a> üzerinden ulaşabilirsiniz.</p>
        </section>
      </section>

      <LegalFooter />
    </div>
  );
}
