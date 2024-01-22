import Accordion from "../Accordion/Accordion";

const Questions = () => {
  const questionData = [
    {
      title: "İstanbul Kodluyor nedir?",
      content:
        "Yazılım ve teknoloji alanında meslek sahibi olmak isteyen genç yetişkinlere, ücretsiz ve kapsamlı eğitimlerle gerekli bilgi ve becerileri kazandıran, Türkiye’nin önde gelen kurumlarında işe yerleştiren bir projedir. Teknoloji alanında nitelikli insan kaynağı yaratmayı amaçlayan bu proje, aynı zamanda kadınların sektördeki temsiliyetini artırmayı da hedeflemektedir.",
    },
    {
      title: "Kimler başvurabilir?",
      content: `Aşağıdaki şartları sağlayan herkes programa başvurabilir.
      ${`<br>&#8226`} 18 – 35 yaş arası olanlar,
      ${`<br>&#8226`} Lise/Önlisans/ Lisans /Yüksek Lisans mezunu olup son altı aydır öğrenci olmayanlar,
      ${`<br>&#8226`} Son bir yıldır sigortalı bir işte çalışmayanlar ve iş arayışında olanlar,
      ${`<br>&#8226`} Kariyerini yazılım ve teknoloji alanında geliştirmek isteyenler.
      `,
    },
    {
      title: "Öğrenciyim katılabilir miyim?",
      content:
        "Hayır.  Proje kapsamında öğrenci olmayan adaylar kabul edilecektir.",
    },
    {
      title: "Açıköğretim öğrencisiyim, başvurabilir miyim?",
      content:
        "Hayır. Proje kapsamında öğrenci olmayan adaylar kabul edilecektir.",
    },
    {
      title: "İstanbul dışında yaşıyorum başvurabilir miyim?",
      content: `Evet başvurabilirsiniz. Sadece "Herkes için Kodlama" programında 1 kez ve Mesleki Gelişim Eğitimlerinde ayda 1 kez İstanbul'daki eğitim ve etkinliklere yüz yüze katılım koşulu bulunmaktadır.`,
    },
    {
      title: "Ücretli mi?",
      content:
        "Hayır. Programa katılım tamamen ücretsizdir. Programın herhangi bir aşamasında (başvuru, değerlendirme, eğitim ve istihdam) adaylardan ücret talep edilmeyecektir.",
    },
    {
      title: "Nasıl başvurabilirim?",
      content:
        "Kayıt olduktan sonra Başvuru Formunu’nun doldurulması yeterlidir. Başvuru durumu Tobeto platform üzerinden ve gelen e-postalardan ile takip edilebilir. Başvuru sırasında güncel ve aktif bir e-posta adresi kullanılması önerilmektedir. Kayıt olduktan sonra e-posta adresinizi doğrulamanız gerekmektedir.",
    },
    {
      title: "Ne zamana kadar başvurabilirim?",
      content:
        "Hayır.  Proje kapsamında Programa başvurular 14 Ağustos 2023 tarihi itibari ile alınacaktır. Başvuru tarihleri : 14 Ağustos - 25 Ocak 2024 olmayan adaylar kabul edilecektir.",
    },
    {
      title: "Hangi eğitimleri alabilirim?", //To Do
      content: `Program kapsamında başvurusu uygun bulunan herkes ilk aşamada iki haftalık “Herkes için Kodlama” eğitimlerine katılır. Bu eğitimler sonrasında ilk aşamayı başarılı şekilde geçen adaylar aşağıdaki mesleki gelişim eğitimlerinden birini alabilirler.
      ${`<br><b>Mesleki Gelişim Eğitimleri:</b>`}
      ${`<br>&#8226`} Java & React Full Stack Developer,
      ${`<br>&#8226`} .NET & React Full Stack Developer,
      ${`<br>&#8226`} İş Analisti,
      ${`<br>&#8226`} Yazılım Kalite ve Test Uzmanı,
      ${`<br>&#8226`} Mobil Geliştirici (Flutter),
      ${`<br>&#8226`} Sistem ve Network Uzmanı,
      ${`<br>&#8226`} Siber Güvenlik,
      ${`<br>&#8226`} Veri Bilimi,
      ${`<br>&#8226`} Dijital Pazarlama Uzmanı,
      ${`<br>&#8226`} Oyun Yazılım Uzmanı,

      `,
    },
    {
      title: "Eğitim süresi ne kadar?",
      content:
        "İlk aşama eğitimleri olan “Herkes için Kodlama” üç hafta sürecektir. Mesleki gelişim eğitimleri uzmanlık alanına ve eğitim ihtiyacına göre değişmekte olup 3 - 6 ay arasında değişmektedir.",
    },

    {
      title: "Eğitimler ne zaman ve nasıl olacak?",
      content:
        "Eğitimler asenkron içerikler ve canlı dersler şeklinde hafta içi ve hafta sonu olmak üzere hibrit bir şekilde gerçekleşecektir. Asenkron içeriklerde Enocta, Tobeto, Codeacademy ve Skillsoft içerikleri yer almaktadır. “Herkes için Kodlama” eğitimleri 18 Eylül 2023 itibari ile başvuru dönemi sonuna kadar belli haftalarda tekrarlayarak yeni gelen adaylara açılacaktır. Mesleki gelişim eğitimleri 23 Ekim 2023 tarihi itibari ile başlayacak olup Kasım, Aralık ve Ocak aylarında yeni sınıflar ile devam edecektir. Canlı ve online derslerin yanı sıra İstanbul’da yüz yüze oturumlar ve buluşmalar da gerçekleşecektir.",
    },

    {
      title: "Eğitmenler kimler?",
      content: `"Herkes için Kodlama" eğitimlerinin canlı oturumları Engin Demiroğ ve Kodlama.io ekibi liderliğinde yürütülmektedir. 
       <br> <br>Çoğu mesleki gelişim eğitimleri yine Engin Demiroğ ve Kodlama.io ekibi liderliğinde verilecek olup, dijital pazarlama eğitimleri Veli Bahçeci ve Rovia\'nın eğitmen kadrosu tarafından, veri bilimi eğitimi Miuul ekibi tarafından, oyun eğitimi Dojo ekibi tarafından ve iş analisti eğitimi Ozan Kaan Karmik tarafından verilecektir.`,
    },

    {
      title: "Yüz yüze eğitim ve etkinlik tarihleri neler?",
      content: `İlk fiziksel kampüs buluşmaları "Herkes için Kodlama" eğitimleri bitiminde olacaktır. Bu eğitimi tamamlayanlar eğitimini bitirdikleri tarihten sonraki ilk buluşmaya katılacaktır. Etkinlik tarihleri aşağıdaki gibidir.
      ${`<br>&#8226`} 7 Ekim 2023,
      ${`<br>&#8226`} 25 Kasım 2023,
      ${`<br>&#8226`} 11 Ocak 2024,
      ${`<br>&#8226`} 20 Şubat 2024,
      ${`<br>`} Mesleki gelişim eğitimlerinin yüz yüze eğitim ve etkinlik tarihleri kendi içinde değişmekte olup, kabul edilen adaylarla paylaşılacaktır.
      `,
    },

    {
      title: "Eğitim sürecinde işe girersem ne olur?",
      content:
        "İşe giriş ile ilgili tüm sürecinizde proje ekibini bilgilendirmeniz beklenmektedir. Teknoloji alanında nitelikli insan kaynağı yaratmayı amaçlayan bu proje, aynı zamanda kadınların sektördeki temsiliyetini artırmayı da hedeflemektedir.",
    },

    {
      title: "Eğitim programları arası geçiş yapabilir miyim?",
      content:
        "Mesleki gelişim eğitimlerinde programlar arası geçişlerde adayların özelliklerine ve yetkinliklerine göre değişim imkanı tanınacaktır. Bu talepleri proje ekibine bildirmeniz beklenmektedir.",
    },

    {
      title: "Mesleki gelişim eğitimlerine kabul edilme kriterleri neler?",

      content: `Mesleki gelişim eğitimlerine kabul edilebilmek için aşağıdaki kriterler göz önünde bulundurulacaktır. "Herkes için Kodlama" eğitimini başarıyla tamamlamak, Süreç içinde yapılacak değerlendirmelerde uygun bulunmak, İstanbul\'da yapılacak olan "Kampüs Buluşması" etkinliğine yüz yüze katılmak, Yazılım ve teknoloji alanında işe girmeye istekli olmak
      ${`<br>&#8226`} "Herkes için Kodlama" eğitimini başarıyla tamamlamak,,
      ${`<br>&#8226`} Süreç içinde yapılacak değerlendirmelerde uygun bulunmak,
      ${`<br>&#8226`} İstanbul'da yapılacak olan "Kampüs Buluşması" etkinliğine yüz yüze katılmak,
      ${`<br>&#8226`} Yazılım ve teknoloji alanında işe girmeye istekli olmak
      `,
    },

    {
      title: "Proje katılmak için bilgisayarımın olması gerekir mi?",
      content:
        "Evet. Özellikle mesleki gelişim eğitimlerinde örnek uygulamaları ve projeleri gerçekleştirmek için bilgisayar ve internet gibi imkanlara sahip olmak gerekmektedir.",
    },

    {
      title: "İşe yerleşebilecek miyim?",
      content:
        "Mesleki gelişim eğitimleri sonrası başarılı olanlar iş görüşmesine yönlendirilecektir. Mülakatlarında başarılı olan adaylar işe yerleştirilecektir",
    },

    {
      title: "Hangi kurumlarda işe girebilirim?",
      content:
        "Türkiye’nin önde gelen kurum ve kuruluşları bu programa destek veriyor, adaylar tamamladıkları eğitimin uzmanlık alanına bağlı olarak bu kurumlardaki uygun pozisyonlara yönlendirilecektir.",
    },
    {
      title: "İşe yerleştirildikten sonra maaş alacak mıyım?",
      content:
        "Evet. Yerleştirildiğiniz kurum politikasına göre tam zamanlı statüsünde maaş planlamanız yapılacaktır.",
    },

    {
      title: "Yerleştirildiğim işi değiştirme imkanım var mı?",
      content:
        "İşle ile ilgili tüm sürecinizde proje ekibini bilgilendirmeniz beklenmektedir. Bu süreç içerisinde iş değişikliği konusunda destek sağlanacaktır.",
    },

    {
      title: "Herhangi bir sorum olursa kiminle iletişime geçebilirim?",
      content:
        "Tüm sorularınız için istanbulkodluyor@tobeto.com adresine mail atabilirsiniz.",
    },

    {
      title: "Programa katılmak için bir taahhütname imzalayacak mıyım?",
      content:
        "Evet. Başvuru aşaması ve “Herkes için Kodlama” eğitimlerini başarı ile tamamlayan adaylar bir sonraki aşamaya geçmek için taahhütname imzalayacaktır.",
    },

    {
      title: "Sosyal Etki Tahvili ne demek?",
      content:
        "Sosyal Etki Tahvilleri, sosyal sorunlara çözüm bulan performansa dayalı sözleşmelerdir. Topluma ve özellikle gençlere yönelik projeler desteklenerek istihdam ve eğitim gibi alanlarda olumlu etkiler yaratacak sonuçlara ulaşılması amaçlanır.",
    },

    {
      title: "Paydaşlar kimler?",
      content:
        "Sanayi ve Teknoloji Bakanlığı Kalkınma Ajansları Genel Müdürlüğü koordinasyonuyla İSTKA tarafından hayata geçirilen İstanbul Kodluyor’un etki yatırımcısı İngiltere merkezli Bridges Outcomes Partnerships’tir. Eğitim programları Enocta çatısı altında, Tobeto platform (tobeto.com) üzerinden gerçekleştirilecektir. Etkiyap, kolaylaştırıcı rolü ile programda paydaş olarak yer alacaktır.",
    },
  ];

  return (
    <>
      {questionData.map(({ title, content }) => {
        return (
          <div className="mb-3">
            <Accordion title={title} content={content} />
          </div>
        );
      })}
    </>
  );
};

export default Questions;
