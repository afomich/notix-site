/**
 * Турецкий словарь.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-турецки. Проверено по Google Ads
 * (Turkiye, tr, 16.08.2026): «ses yazıya çevirme» — 3600/мес, «ses metne çevirme»
 * и «ses kaydını yazıya çevirme» — по 2900, «ders notu» — 2900,
 * «ders çalışma uygulaması» — 1300, «not uygulaması» — 1000, «özet çıkarma» — 720,
 * «kelime kartı» — 480, «bilgi kartları» — 390, «pdf özetleme» — 320,
 * «ai note taker» — 210. Английские кальки («yapay zeka not alma»,
 * «youtube video özetleme») объёма не показывают вовсе, поэтому в заголовках их нет.
 *
 * Остальное — перевод с сохранением тона: короткие фразы, обращение на «sen»,
 * без канцелярита.
 *
 * «Notix» — имя продукта: склоняется только через апостроф (Notix'in, Notix'i).
 */
import type { Dictionary } from './en';

export const tr = {
  path: 'tr',
  hreflang: 'tr',
  nativeName: 'Türkçe',

  nav: {
    features: 'Özellikler',
    faq: 'Sorular',
    examples: 'Örnekler',
    support: 'Destek',
    getApp: 'İndir',
    menu: 'Menü',
    language: 'Dil',
  },

  footer: {
    privacy: 'Gizlilik Politikası',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Bu sayfa senin dilinde de var',
    cta: 'Değiştir',
    dismiss: 'Kapat',
  },

  home: {
    seoTitle:
      "Notix — Yapay zeka not uygulaması: sesi yazıya çevir, PDF ve YouTube'dan özet çıkar",
    seoDescription:
      'Notix dersleri kaydeder, sesi yazıya çevirir; PDF, YouTube videosu ve makalelerden özet çıkarır. Testler ve bilgi kartları otomatik gelir. Ücretsiz başla.',
    ogTitle: 'Notix — Ders, PDF ve videodan yapay zeka notları',
    ogDescription:
      "Dersler, PDF'ler ve videolar not, test ve bilgi kartına dönüşsün. Notlarına soru sor, sınava daha hızlı hazırlan.",
    ogImageAlt: 'Notix öğrendiğin her şeyi sana ders veren notlara çevirir',
    schemaDescription:
      "Notix dersleri, PDF'leri, YouTube videolarını ve ses kayıtlarını anlaşılır notlara, testlere ve bilgi kartlarına çevirir. Yazıya çevirme, özet ve notlarınla sohbet.",

    hero: {
      badge: 'iPhone için yapay zeka ders arkadaşı',
      titleLead: "Ders, PDF ve videoları",
      titleEmphasis: 'seni sınava hazırlayan notlara çevir',
      subtitle:
        'Dersi kaydet, PDF yükle ya da YouTube bağlantısını yapıştır. Notix sesi yazıya çevirir, anlaşılır bir özet yazar ve bundan test ile bilgi kartı üretir — sen tekrar okumak yerine gerçekten öğren.',
      cta: "App Store'dan indir",
      ctaNote: 'Ücretsiz başla · iPhone',
    },

    valueStrip: [
      { title: 'Her şey girer', note: 'ses, PDF, YouTube, web' },
      { title: 'Saniyeler içinde not', note: 'yazıya çevirme ve özet' },
      { title: 'Kalıcı öğrenme', note: 'test, bilgi kartı, yapay zeka sohbeti' },
      { title: '6 dil', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Tanıdık geldi mi?',
      title: 'Ders çalışmak neden bu kadar zor?',
      items: [
        '“Dersin yirminci dakikasında dalıp gidiyorum — sınavda çıkacak yarısını kaçırıyorum.”',
        '“Bu bölümü üç kez okudum, hâlâ hiçbir şey hatırlamıyorum.”',
        '“Notlarım iki deftere ve beş ayrı uygulamaya dağılmış.”',
        '“Sınavdan önceki gece yarısı, kafam karışık ve soracak kimse yok.”',
      ],
      pivot:
        "Daha iyi bir yolu var. Notix dersleri, PDF'leri ve videoları kendiliğinden bir çalışma sistemine çevirir.",
    },

    how: {
      title: 'Nasıl çalışır?',
      steps: [
        {
          title: 'Her şeyi kaydet',
          text: 'Dersi kaydet, ses dosyası veya belge yükle, YouTube ya da web bağlantısı yapıştır.',
        },
        {
          title: 'Gerisini Notix yapar',
          text: 'Otomatik yazıya çevirme ve düzenli, anlaşılır bir özet — saniyeler içinde hazır.',
        },
        {
          title: 'Gerçekten öğren',
          text: 'Testler ve bilgi kartlarıyla kendini dene ya da notlarına yapay zeka sohbetinden soru sor.',
        },
      ],
    },

    features: {
      title: 'Kaydet, anla, aklında kalsın — tek uygulamada',
      items: [
        {
          title: 'Derste hiçbir şey kaçmasın',
          text: 'Kaydı başlat ve derse odaklan. Ders bitince yazıya çevrilmiş metin ve düzenli notlar seni bekliyor olacak.',
        },
        {
          title: 'Elli slayt, tek net özet',
          text: 'PDF, sunum ya da makale yükle; saniyeler içinde düzenli, anlaşılır bir özet al.',
        },
        {
          title: 'YouTube ve web bağlantıları',
          text: 'Bağlantıyı yapıştır, Notix videoyu ya da sayfayı içinde arama yapabileceğin notlara çevirsin.',
        },
        {
          title: 'Eksiklerini sınavdan önce gör',
          text: 'Herhangi bir notu soru setine çevir — hatırlamaya çalışmak, tekrar okumaktan her zaman daha iyi.',
        },
        {
          title: 'Aklında kalsın',
          text: 'Doğrudan notlarından üretilen bilgi kartları — nerede olursan ol hızlıca tekrar et.',
        },
        {
          title: 'Notların sana cevap versin',
          text: 'Tek bir not ya da tüm kütüphanen hakkında soru sor — her cevap kaynağına bağlantı verir.',
        },
        {
          title: 'Hepsi tek yerde',
          text: 'Klasörler, arama ve cihazlar arası eşitleme — hangi dersten olursa olsun her bilgiyi saniyeler içinde bul.',
        },
        {
          title: 'Senin dilini konuşur',
          text: 'İngilizce, İspanyolca, Fransızca, Almanca, Rusça ve Lehçe — özetler ve testler senin dilinde gelir.',
        },
        {
          title: 'PDF olarak paylaş',
          text: 'Herhangi bir notu düzgün bir PDF olarak dışa aktar — arkadaşların ya da iş arkadaşların için.',
        },
      ],
    },

    testimonials: {
      title: 'Öğrenciler Notix hakkında ne diyor?',
      items: [
        {
          quote:
            '“Her dersi kaydediyorum, Notix bunu gerçekten çalıştığım düzgün notlara çeviriyor. Bu dönem ortalamam yükseldi.”',
          author: 'Maya R. · Öğrenci',
        },
        {
          quote:
            '“Sınav öncesi tekrar artık çok daha hızlı. Saatlerce kayıt izlemek yerine notlarımda arama yapıyorum.”',
          author: 'Daniel K. · Öğrenci',
        },
        {
          quote:
            '“Arka arkaya dersler için birebir. Kaydı başlatıyorum, derse odaklanıyorum, özet sonrasında beni bekliyor.”',
          author: 'Priya S. · Öğrenci',
        },
      ],
    },

    whatIs: {
      title: 'Notix nedir?',
      paragraphs: [
        'Notix, yapay zeka destekli bir not uygulaması. Bir dersi, toplantıyı ya da röportajı kaydediyorsun; PDF veya belge yüklüyorsun; bağlantı yapıştırıyorsun — YouTube videosu, makale, TikTok ya da Instagram gönderisi — Notix bunu yazıya çeviriyor, düzenli ve anlaşılır bir özet yazıyor, konuyu gerçekten aklında tutman gerektiğinde de bu özetten testler ve bilgi kartları üretiyor.',
        'Bu bir ses kayıt cihazı değil, bir deşifre aracı da değil. Ses kayıt cihazı sana baştan dinlemen gereken bir saatlik kaydı geri verir. Deşifre aracı bir duvar dolusu metin verir. Notix ise zaten yazacağın şeyi verir: ana fikirlerin gereksizinden ayrıldığı, düzenli notlar.',
        'Her şey tek yerde toplanır. Kayıtlar, belgeler, videolar, makaleler ve gönderiler içinde arama yapabildiğin tek bir kütüphaneye dönüşür — mart ayında ne konuşulduğunu aradığında altı ayrı uygulamayı değil, kendi notlarını ararsın.',
        "Notix iPhone'da çalışır ve ücretsiz başlayabilirsin.",
      ],
    },

    faqTitle: 'Sık sorulan sorular',

    finalCta: {
      title: 'Bir daha önemli hiçbir şey kaçmasın',
      text: 'Bir sonraki dersin kendiliğinden düzgün bir nota, teste ve bilgi kartı destesine dönüşebilir.',
      cta: "App Store'dan indir",
      note: 'Ücretsiz başla · iPhone',
    },
  },

  faq: [
    {
      q: 'Ses kaydını yazıya çevirip nasıl not çıkarırım?',
      a: 'Notix sesi kaydeder, yazıya çevirir ve düzenli bir özeti kendiliğinden yazar — sen kaydı başlatıp telefonu bırakıyorsun. Kayıt bitince metin ve özet hazır olur; tek dokunuşla bunlardan test ya da bilgi kartı destesi üretebilirsin. Elinde başka yerden gelen bir ses dosyası varsa, canlı kayıt yerine onu da yükleyebilirsin.',
    },
    {
      q: 'Ses yazıya çevirme ne kadar doğru?',
      a: 'Notix, üzerinde çalışabileceğin kadar doğru yazıya çeviriyor ve her hafta daha iyi oluyor — en çok uğraştığımız iki şey hız ve kalite, ikisi de son aylarda belirgin şekilde ilerledi. Normal bir odada net konuşma neredeyse kelimesi kelimesine geri gelir. Gürültülü bir salon, uzaktaki bir mikrofon ya da ağır bir aksan daha zordur; hatalar en çok teknik terimlerde ve özel isimlerde toplanır — bu yüzden belirli bir sayıya ya da isme güvenmeden önce metne bir göz atmakta fayda var.',
    },
    {
      q: "PDF ve belgelerden özet çıkarabilir miyim?",
      a: 'Evet. PDF, Word belgesi, metin dosyası ya da tablo yükle — PDF, DOCX, TXT, RTF, CSV, XLS ve XLSX destekleniyor — Notix içinde arama yapabileceğin, kendini test edebileceğin ya da bilgi kartına çevirebileceğin düzenli bir özet üretsin. PDF olarak dışa aktarılmış sunumlar özellikle iyi çalışır, çünkü özet slaytların atladığı bağlantıları tamamlar.',
    },
    {
      q: 'YouTube videolarından ve web makalelerinden not çıkarabilir miyim?',
      a: 'Evet. YouTube bağlantısını ya da bir makalenin adresini yapıştır; Notix bunu tıpkı kendi kaydettiğin ses gibi notlara, testlere ve bilgi kartlarına çevirir. YouTube özetleri videonun altyazılarından üretilir, bu yüzden altyazısı kapalı bir video henüz özetlenemiyor.',
    },
    {
      q: 'Notix sosyal medya gönderilerini özetleyebilir mi?',
      a: 'Evet. TikTok, Instagram, X ya da Reddit gönderisinin bağlantısını yapıştır; Notix içinde ne varsa çıkarır — videonun sesini yazıya çevirir, görsellerdeki ve slaytlardaki metni okur, açıklamayı da ekler — sonra sende kalacak bir özet yazar. Kaydırırken geçtiğin işe yarar şeyi, bir daha asla açmayacağın bir bağlantıya dönüştürmeden saklamanın yolu bu.',
    },
    {
      q: 'Kayıtlarıma ve dosyalarıma ne oluyor?',
      a: 'Ses kaydın cihazında kalır — sunucularımızda tutulmaz. Yüklediğin belge işlendiği anda sunucularımızdan silinir; geriye yalnızca sonuç kalır: metin ve özet. Bir notu sildiğinde kütüphanenden hemen kaybolur ve 30 gün sonra kalıcı olarak silinir — bu süre, yanlışlıkla yapılan bir silmenin geri alınabilmesi için var. İçeriğin yapay zeka modellerini eğitmek için hiçbir zaman kullanılmaz ve asla satılmaz.',
    },
    {
      q: 'Notix internetsiz çalışır mı?',
      a: "Yazıya çevirme ve özetleme sunucularımızda çalışır, bu yüzden sesi ya da PDF'i nota çevirmek için bağlantı gerekir. Üretilmiş olan her şey cihazında saklanır: notların, özetlerin, testlerin ve bilgi kartların çevrimdışı okunur — uçakta ya da sinyalin olmadığı bir bodrumda kütüphanen yanında kalır.",
    },
    {
      // Суммы намеренно не названы: App Store берёт деньги в лирах по собственной
      // ценовой сетке, поэтому долларовая цифра на турецкой странице — цена,
      // которую покупатель не увидит. Названа структура (месячный и годовой план,
      // 3 и 7 дней пробного периода — они одинаковы везде), за суммой — в App Store.
      q: 'Notix ücretsiz mi?',
      a: "Ücretsiz başlayabilirsin: kayıt yapmak, not oluşturmak, test ve bilgi kartı üretmek için ödeme gerekmez. Notix Pro sınırları kaldırır — sınırsız kayıt saati, sınırsız test sorusu, PDF ve video özetleme. Aylık plan 3 günlük, yıllık plan 7 günlük ücretsiz deneme ile geliyor; kendi ülkendeki fiyatı App Store'da görürsün. Deneme süresi bitmeden hiçbir ücret alınmaz.",
    },
    {
      q: 'İstediğim zaman iptal edebilir miyim?',
      a: "Evet. Abonelik, App Store'da Apple ID'n üzerinden yönetilir ve oradan birkaç dokunuşla istediğin zaman iptal edebilirsin. İptal bir sonraki ödemeyi durdurur; Pro, halihazırda ödediğin dönemin sonuna kadar açık kalır, notların ise her hâlükârda kütüphanende kalır.",
    },
    {
      q: 'Notix hangi dilleri destekliyor?',
      a: 'Uygulama arayüzü İngilizce, İspanyolca, Fransızca, Almanca, Rusça ve Lehçe olarak kullanılabiliyor. Yazıya çevirme bu altı dille sınırlı değil — Notix dünyanın başlıca dillerini anlıyor; özetlerin ve testlerin seçtiğin dilde geliyor, yani bir dilde kaydedip notları başka bir dilde okuyabilirsin.',
    },
  ],

  support: {
    seoTitle: 'Destek — Notix',
    seoDescription:
      'Notix ile ilgili yardım: destek ekibine yaz, hata bildir ya da aboneliğinle ilgili soru sor.',
    title: 'Destek',
    replyTime: 'Genelde 1–2 iş günü içinde yanıtlıyoruz.',
    contactCardTitle: 'Bize yaz',
    contactCardText: 'Her türlü soru, hata bildirimi ya da fikir için:',

    reportingTitle: 'Sorun bildirme',
    reportingIntro: 'Daha hızlı çözebilmemiz için şunları ekle:',
    reportingItems: [
      'Cihaz modelin ve iOS sürümün',
      'Biliyorsan Notix sürümü',
      'Ne yaptığın, ne beklediğin ve bunun yerine ne olduğu',
      'Mümkünse ekran görüntüsü ya da ekran kaydı',
    ],

    billingTitle: 'Abonelik ve ödeme',
    billingTextLead:
      "Notix Pro abonelikleri Apple ID'n üzerinden faturalandırılır. Aboneliğini istediğin zaman cihaz ayarlarından yönetebilir ya da iptal edebilirsin:",
    billingSettingsPath: 'Ayarlar → adın → Abonelikler',
    billingRefundsLead:
      'App Store alışverişlerinde iadeleri Apple yapar — talebini şuradan iletebilirsin:',

    accountTitle: 'Hesap ve veriler',
    accountTextLead: 'Hesabını ve tüm verilerini doğrudan uygulamadan silebilirsin:',
    accountSettingsPath: 'Ayarlar → Hesap Bilgileri → Hesabı sil',
    accountTextTail:
      'Hesabın ve verilerin 30 gün sonra kalıcı olarak silinir; bu süre içinde tekrar giriş yaparsan silme iptal olur.',
    accountPrivacyLead: 'Verilerle ilgili sorular için',
    accountPrivacyLink: 'Gizlilik Politikası',
    accountPrivacyTail: 'sayfamıza bak ya da bize yaz.',

    recordingTitle: 'Ders ve toplantı kaydı',
    recordingText:
      'Notix, kaydetme hakkın olan materyali kaydetmene yardım eder. Kayıt kuralları okuldan okula, iş yerinden iş yerine ve ülkeden ülkeye değişir; bazı yerlerde başlamadan önce odadaki herkesin onay vermesi gerekir — bu yüzden kayda basmadan önce sana uygulanan kuralları kontrol et.',
  },

  notFound: {
    seoTitle: 'Sayfa bulunamadı — Notix',
    seoDescription: 'Sayfa bulunamadı — Notix. Aradığın sayfa yok ya da taşınmış.',
    titleLead: '404 — bu sayfa hiç',
    titleEmphasis: 'not tutmamış',
    text: 'Aradığın sayfa mevcut değil ya da taşınmış.',
    cta: 'Ana sayfaya dön',
  },

  resetPassword: {
    seoTitle: 'Şifreni sıfırla — Notix',
    seoDescription:
      'Yeni bir şifre belirlemek için bu bağlantıyı Notix uygulamasının kurulu olduğu telefonda aç.',
    title: 'Bu bağlantıyı telefonunda aç',
    text: "Şifre sıfırlama Notix uygulamasının içinde yapılır. E-postadaki bağlantıyı Notix'in kurulu olduğu iPhone ya da Android telefonda aç — seni doğrudan yeni şifre ekranına götürür.",
    noAppText:
      "Notix'in kurulu olduğu bir telefon yok mu? Önce uygulamayı kur, sonra bağlantıya tekrar dokun. Bağlantı 30 dakika geçerli.",
    cta: "App Store'dan indir",
  },
} satisfies Dictionary;
