import Accordion from "../Accordion/Accordion";

const Questions = () => {
  const questionData = [
    {
      title: "İstanbul Kodluyor nedir?",
      content:
        "Yazılım ve teknoloji alanında meslek sahibi olmak isteyen genç yetişkinlere, ücretsiz ve kapsamlı eğitimlerle gerekli bilgi ve becerileri kazandıran, Türkiye’nin önde gelen kurumlarında işe yerleştiren bir projedir. Teknoloji alanında nitelikli insan kaynağı yaratmayı amaçlayan bu proje, aynı zamanda kadınların sektördeki temsiliyetini artırmayı da hedeflemektedir.",
      className: "mb-3",
    },
    {
      title: "Kimler başvurabilir?",
      content: "Aşağıdaki şartları sağlayan herkes programa başvurabilir.",
      className: "mb-3",
    },
    {
      title: "Öğrenciyim katılabilir miyim?",
      content:
        "Hayır.  Proje kapsamında öğrenci olmayan adaylar kabul edilecektir.",
      className: "mb-3",
    },
    {
      title: "Açıköğretim öğrencisiyim, başvurabilir miyim?",
      content:
        "Hayır. Proje kapsamında öğrenci olmayan adaylar kabul edilecektir.",
      className: "mb-3",
    },
    {
      title: "İstanbul dışında yaşıyorum başvurabilir miyim?",
      content: `Evet başvurabilirsiniz. Sadece "Herkes için Kodlama" programında 1 kez ve Mesleki Gelişim Eğitimlerinde ayda 1 kez İstanbul'daki eğitim ve etkinliklere yüz yüze katılım koşulu bulunmaktadır.`,
      className: "mb-3",
    },
    {
      title: "Ücretli mi?",
      content:
        "Hayır. Programa katılım tamamen ücretsizdir. Programın herhangi bir aşamasında (başvuru, değerlendirme, eğitim ve istihdam) adaylardan ücret talep edilmeyecektir.",
      className: "mb-3",
    },
    {
      title: "Nasıl başvurabilirim?",
      content:
        "Kayıt olduktan sonra Başvuru Formunu’nun doldurulması yeterlidir. Başvuru durumu Tobeto platform üzerinden ve gelen e-postalardan ile takip edilebilir. Başvuru sırasında güncel ve aktif bir e-posta adresi kullanılması önerilmektedir. Kayıt olduktan sonra e-posta adresinizi doğrulamanız gerekmektedir.",
      className: "mb-3",
    },
    {
      title: "Ne zamana kadar başvurabilirim?",
      content:
        "Hayır.  Proje kapsamında Programa başvurular 14 Ağustos 2023 tarihi itibari ile alınacaktır. Başvuru tarihleri : 14 Ağustos - 25 Ocak 2024 olmayan adaylar kabul edilecektir.",
      className: "mb-3",
    },
    {
      title: "Hangi eğitimleri alabilirim?", //To Do
      content:
        "Program kapsamında başvurusu uygun bulunan herkes ilk aşamada iki haftalık “Herkes için Kodlama” eğitimlerine katılır. Bu eğitimler sonrasında ilk aşamayı başarılı şekilde geçen adaylar aşağıdaki mesleki gelişim eğitimlerinden birini alabilirler.",
      className: "mb-3",
    },
    {
      title: "Eğitim süresi ne kadar?",
      content:
        "İlk aşama eğitimleri olan “Herkes için Kodlama” üç hafta sürecektir. Mesleki gelişim eğitimleri uzmanlık alanına ve eğitim ihtiyacına göre değişmekte olup 3 - 6 ay arasında değişmektedir.",
      className: "mb-3",
    },

    {
      title: "Eğitimler ne zaman ve nasıl olacak?",
      content:
        "Eğitimler asenkron içerikler ve canlı dersler şeklinde hafta içi ve hafta sonu olmak üzere hibrit bir şekilde gerçekleşecektir. Asenkron içeriklerde Enocta, Tobeto, Codeacademy ve Skillsoft içerikleri yer almaktadır. “Herkes için Kodlama” eğitimleri 18 Eylül 2023 itibari ile başvuru dönemi sonuna kadar belli haftalarda tekrarlayarak yeni gelen adaylara açılacaktır. Mesleki gelişim eğitimleri 23 Ekim 2023 tarihi itibari ile başlayacak olup Kasım, Aralık ve Ocak aylarında yeni sınıflar ile devam edecektir. Canlı ve online derslerin yanı sıra İstanbul’da yüz yüze oturumlar ve buluşmalar da gerçekleşecektir.",
      className: "mb-3",
    },

    {
      title: "Eğitmenler kimler?",
      content:
        '"Herkes için Kodlama" eğitimlerinin canlı oturumları Engin Demiroğ ve Kodlama.io ekibi liderliğinde yürütülmektedir. Çoğu mesleki gelişim eğitimleri yine Engin Demiroğ ve Kodlama.io ekibi liderliğinde verilecek olup, dijital pazarlama eğitimleri Veli Bahçeci ve Rovia\'nın eğitmen kadrosu tarafından, veri bilimi eğitimi Miuul ekibi tarafından, oyun eğitimi Dojo ekibi tarafından ve iş analisti eğitimi Ozan Kaan Karmik tarafından verilecektir.',
      className: "mb-3",
    },

    {
      title: "Yüz yüze eğitim ve etkinlik tarihleri neler?",
      content:
        'İlk fiziksel kampüs buluşmaları "Herkes için Kodlama" eğitimleri bitiminde olacaktır. Bu eğitimi tamamlayanlar eğitimini bitirdikleri tarihten sonraki ilk buluşmaya katılacaktır. Etkinlik tarihleri aşağıdaki gibidir. 7 Ekim 2023 25 Kasım 2023 11 Ocak 2024 20 Şubat 2024 Mesleki gelişim eğitimlerinin yüz yüze eğitim ve etkinlik tarihleri kendi içinde değişmekte olup, kabul edilen adaylarla paylaşılacaktır.',
      className: "mb-3",
    },

    {
      title: "Eğitim sürecinde işe girersem ne olur?",
      content:
        "İşe giriş ile ilgili tüm sürecinizde proje ekibini bilgilendirmeniz beklenmektedir. Teknoloji alanında nitelikli insan kaynağı yaratmayı amaçlayan bu proje, aynı zamanda kadınların sektördeki temsiliyetini artırmayı da hedeflemektedir.",
      className: "mb-3",
    },

    {
      title: "Eğitim programları arası geçiş yapabilir miyim?",
      content:
        "Mesleki gelişim eğitimlerinde programlar arası geçişlerde adayların özelliklerine ve yetkinliklerine göre değişim imkanı tanınacaktır. Bu talepleri proje ekibine bildirmeniz beklenmektedir.",
      className: "mb-3",
    },

    {
      title: "Mesleki gelişim eğitimlerine kabul edilme kriterleri neler?",
      content:
        'Mesleki gelişim eğitimlerine kabul edilebilmek için aşağıdaki kriterler göz önünde bulundurulacaktır. "Herkes için Kodlama" eğitimini başarıyla tamamlamak, Süreç içinde yapılacak değerlendirmelerde uygun bulunmak, İstanbul\'da yapılacak olan "Kampüs Buluşması" etkinliğine yüz yüze katılmak, Yazılım ve teknoloji alanında işe girmeye istekli olmak',
      className: "mb-3",
    },

    {
      title: "Proje katılmak için bilgisayarımın olması gerekir mi?",
      content:
        "Evet. Özellikle mesleki gelişim eğitimlerinde örnek uygulamaları ve projeleri gerçekleştirmek için bilgisayar ve internet gibi imkanlara sahip olmak gerekmektedir.",
      className: "mb-3",
    },

    {
      title: "İşe yerleşebilecek miyim?",
      content:
        "Mesleki gelişim eğitimleri sonrası başarılı olanlar iş görüşmesine yönlendirilecektir. Mülakatlarında başarılı olan adaylar işe yerleştirilecektir",
      className: "mb-3",
    },

    {
      title: "Hangi kurumlarda işe girebilirim?",
      content:
        "Türkiye’nin önde gelen kurum ve kuruluşları bu programa destek veriyor, adaylar tamamladıkları eğitimin uzmanlık alanına bağlı olarak bu kurumlardaki uygun pozisyonlara yönlendirilecektir.",
      className: "mb-3",
    },
    {
      title: "İşe yerleştirildikten sonra maaş alacak mıyım?",
      content:
        "Evet. Yerleştirildiğiniz kurum politikasına göre tam zamanlı statüsünde maaş planlamanız yapılacaktır.",
      className: "mb-3",
    },

    {
      title: "Yerleştirildiğim işi değiştirme imkanım var mı?",
      content:
        "İşle ile ilgili tüm sürecinizde proje ekibini bilgilendirmeniz beklenmektedir. Bu süreç içerisinde iş değişikliği konusunda destek sağlanacaktır.",
      className: "mb-3",
    },

    {
      title: "Herhangi bir sorum olursa kiminle iletişime geçebilirim?",
      content:
        "Tüm sorularınız için istanbulkodluyor@tobeto.com adresine mail atabilirsiniz.",
      className: "mb-3",
    },

    {
      title: "Programa katılmak için bir taahhütname imzalayacak mıyım?",
      content:
        "Evet. Başvuru aşaması ve “Herkes için Kodlama” eğitimlerini başarı ile tamamlayan adaylar bir sonraki aşamaya geçmek için taahhütname imzalayacaktır.",
      className: "mb-3",
    },

    {
      title: "Sosyal Etki Tahvili ne demek?",
      content:
        "Sosyal Etki Tahvilleri, sosyal sorunlara çözüm bulan performansa dayalı sözleşmelerdir. Topluma ve özellikle gençlere yönelik projeler desteklenerek istihdam ve eğitim gibi alanlarda olumlu etkiler yaratacak sonuçlara ulaşılması amaçlanır.",
      className: "mb-3",
    },

    {
      title: "Paydaşlar kimler?",
      content:
        "Sanayi ve Teknoloji Bakanlığı Kalkınma Ajansları Genel Müdürlüğü koordinasyonuyla İSTKA tarafından hayata geçirilen İstanbul Kodluyor’un etki yatırımcısı İngiltere merkezli Bridges Outcomes Partnerships’tir. Eğitim programları Enocta çatısı altında, Tobeto platform (tobeto.com) üzerinden gerçekleştirilecektir. Etkiyap, kolaylaştırıcı rolü ile programda paydaş olarak yer alacaktır.",
      className: "mb-3",
    },
  ];

  return (
    <>
      {questionData.map(({ title, content, className }) => {
        return (
          <div className={className}>
            <Accordion title={title} content={content} />
          </div>
        );
      })}
    </>
  );
};

export default Questions;
