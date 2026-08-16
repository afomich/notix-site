/**
 * Magyar szótár.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-венгерски (Google Ads, Hungary, hu).
 * Венгерский агглютинативный, и объём собирается вокруг именно той падежной формы,
 * которую набирают: «hang szöveggé alakítása» (140/мес) — это и есть транскрипция,
 * а не «transzkripció» (320, но там почти весь объём — фонетика и лингвистика).
 * «jegyzetelő app» / «jegyzet app» (110), «ai note taker» (90) венгры набирают
 * по-английски, венгерская калька «ai jegyzetelő» объёма не имеет вовсе. Карточки:
 * английское «flashcard» (880) вчетверо популярнее венгерского «tanulókártya» (320),
 * поэтому в мета-тегах стоят оба, в тексте — венгерское. «kvíz» (90 500) — обычное
 * слово, никакой замены не нужно. «szövegfelolvasó» (1600) намеренно НЕ используется:
 * это text-to-speech, обратное направление.
 *
 * Остальное — перевод с сохранением тона: короткие фразы, обращение на «te»,
 * без канцелярита.
 *
 * «Notix» — имя продукта, но венгерский без падежных суффиксов не читается, поэтому
 * суффиксы присоединяются напрямую (Notixot, Notixról, Notixhoz). Инструменталис
 * («Notixszal») выглядит неряшливо — обходится перифразой.
 */
import type { Dictionary } from './en';

export const hu = {
  path: 'hu',
  hreflang: 'hu',
  nativeName: 'Magyar',

  nav: {
    features: 'Funkciók',
    faq: 'GYIK',
    examples: 'Példák',
    support: 'Súgó',
    getApp: 'Letöltés',
    menu: 'Menü',
    language: 'Nyelv',
  },

  footer: {
    privacy: 'Adatvédelmi tájékoztató',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Ez az oldal a te nyelveden is elérhető',
    cta: 'Váltás',
    dismiss: 'Bezárás',
  },

  home: {
    seoTitle:
      'Notix — AI note taker: hang szöveggé alakítása, jegyzet előadásból, PDF-ből és YouTube-ról',
    seoDescription:
      'A Notix felveszi az előadásokat és a megbeszéléseket, elvégzi a hang szöveggé alakítását, és összefoglalót ír PDF-ekből meg YouTube-videókból. A kvíz és a tanulókártya (flashcard) magától elkészül. Jegyzetelő app iPhone-ra.',
    ogTitle: 'Notix — AI note taker',
    ogDescription:
      'Az előadásokból, PDF-ekből és videókból összefoglaló, kvíz és tanulókártya lesz. Kérdezd a saját jegyzeteidet, és készülj gyorsabban.',
    ogImageAlt: 'Notix — amit tanulsz, abból olyan jegyzet lesz, ami téged tanít',
    schemaDescription:
      'A Notix előadásokból, PDF-ekből, YouTube-videókból és hangfelvételekből világos összefoglalót, kvízt és tanulókártyát készít. Leirat, összefoglaló és csevegés a jegyzeteiddel.',

    hero: {
      badge: 'AI tanulótárs iPhone-ra',
      titleLead: 'Amit tanulsz, abból olyan jegyzet lesz, ami',
      titleEmphasis: 'téged tanít',
      subtitle:
        'Vedd fel az előadást, tölts fel egy PDF-et, vagy illessz be egy YouTube-linket. A Notix leírja, világos összefoglalót ír belőle, és kvízt meg tanulókártyát csinál — hogy tanulj, ne újraolvass.',
      cta: 'Letöltés az App Store-ból',
      ctaNote: 'Ingyen kezdheted · iPhone',
    },

    valueStrip: [
      { title: 'Bármi mehet bele', note: 'hang, PDF, YouTube, web' },
      { title: 'Jegyzet másodpercek alatt', note: 'leirat és összefoglaló' },
      { title: 'Aktív felidézés', note: 'kvíz, tanulókártya, AI-csevegés' },
      { title: '6 nyelv', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Ismerős?',
      title: 'A tanulás nehezebb, mint amilyennek lennie kellene',
      items: [
        '„Húsz perc után elkalandozom az előadáson — és pont az marad ki, ami a vizsgán lesz.”',
        '„Harmadszor olvasom el ezt a fejezetet, és még mindig semmi nem maradt meg belőle.”',
        '„A jegyzeteim két füzetben és öt különböző appban hevernek.”',
        '„Éjfél van a vizsga előtt, nem értem az anyagot, és nincs kitől kérdezni.”',
      ],
      pivot:
        'Van jobb út. A Notix az előadásokból, PDF-ekből és videókból tanulórendszert csinál — magától.',
    },

    how: {
      title: 'Így működik — egyszerűbb már nem lehet',
      steps: [
        {
          title: 'Vegyél fel bármit',
          text: 'Vedd fel az előadást, tölts fel hangfájlt vagy dokumentumot, vagy illessz be egy YouTube- vagy weblinket.',
        },
        {
          title: 'A Notix elvégzi a munkát',
          text: 'Automatikus leirat és világos, rendezett összefoglaló — másodpercek alatt.',
        },
        {
          title: 'Tanuld meg igazán',
          text: 'Teszteld magad kvízzel és tanulókártyával, vagy kérdezd a jegyzeteidet az AI-csevegésben.',
        },
      ],
    },

    features: {
      title: 'Rögzítés, megértés, megjegyzés — egyetlen appban',
      items: [
        {
          title: 'Az órán semmi nem marad ki',
          text: 'Nyomd meg a felvételt, és figyelj nyugodtan. A leirat és a rendezett jegyzet az előadás után már vár rád.',
        },
        {
          title: 'Ötven dia, egy világos összefoglaló',
          text: 'Dobj be PDF-et, diasort vagy cikket, és másodpercek alatt tiszta, rendezett összefoglalót kapsz.',
        },
        {
          title: 'YouTube és weblinkek',
          text: 'Illeszd be a linket, és a Notix a videóból vagy az oldalból kereshető jegyzetet csinál.',
        },
        {
          title: 'Találd meg a hiányaidat a vizsga előtt',
          text: 'Bármelyik jegyzetből gyakorlókérdés lesz — az aktív felidézés mindig veri az újraolvasást.',
        },
        {
          title: 'Hogy meg is maradjon',
          text: 'Tanulókártyák egyenesen a jegyzeteidből, bárhol elővehetők egy gyors ismétléshez.',
        },
        {
          title: 'A jegyzeteid válaszolnak',
          text: 'Kérdezz egy jegyzetről vagy az egész könyvtáradról — minden válasz a forrására hivatkozik.',
        },
        {
          title: 'Minden egy helyen',
          text: 'Mappák, keresés és szinkronizálás — bármelyik előadás bármelyik tényét megtalálod másodpercek alatt.',
        },
        {
          title: 'A te nyelveden beszél',
          text: 'Angol, spanyol, francia, német, orosz és lengyel — az összefoglalók és a kvízek követik a nyelvedet.',
        },
        {
          title: 'Oszd meg PDF-ben',
          text: 'Exportálj bármelyik jegyzetet igényes PDF-be az évfolyamtársaknak vagy a kollégáknak.',
        },
      ],
    },

    testimonials: {
      title: 'Mit mondanak a diákok a Notixról',
      items: [
        {
          quote:
            '„Minden előadást felveszek, és a Notix olyan jegyzetet csinál belőle, amiből tényleg tanulok. Ebben a félévben feljebb mentek a jegyeim.”',
          author: 'Maya R. · Hallgató',
        },
        {
          quote:
            '„A vizsga előtti ismétlés sokkal gyorsabb lett. Csak rákeresek a jegyzeteimben, ahelyett hogy órákat hallgatnék vissza.”',
          author: 'Daniel K. · Hallgató',
        },
        {
          quote:
            '„Tökéletes, ha egymás után jönnek az órák. Elindítom a felvételt, figyelek az előadásra, az összefoglaló meg utána már vár.”',
          author: 'Priya S. · Hallgató',
        },
      ],
    },

    whatIs: {
      title: 'Mi az a Notix?',
      paragraphs: [
        'A Notix egy AI jegyzetelő app. Felveszel egy előadást, egy megbeszélést vagy egy interjút, feltöltesz egy PDF-et vagy dokumentumot, beillesztesz egy linket — YouTube-videót, cikket, TikTok- vagy Instagram-posztot —, a Notix pedig leírja, világos, rendezett összefoglalót ír belőle, és kvízzé meg tanulókártyává alakítja, amikor tényleg meg kell jegyezned az anyagot.',
        'Ez nem diktafon és nem leiratkészítő. A diktafon visszaad egy órányi hangot, amit végig kell hallgatnod még egyszer. A leiratkészítő egy falnyi szöveget ad. A Notix azt adja, amit úgyis le akartál írni: rendezett jegyzetet, amiben a lényeg külön van a töltelékszövegtől.',
        'Minden egy helyre kerül. A felvételek, dokumentumok, videók, cikkek és posztok egyetlen kereshető könyvtárrá állnak össze — így ha kell, ami márciusban elhangzott, a saját jegyzeteid között keresel, nem hat különböző appban.',
        'A Notixot ingyen elkezdheted, és iPhone-on fut.',
      ],
    },

    faqTitle: 'Gyakori kérdések',

    finalCta: {
      title: 'Többé ne maradjon ki a lényeg',
      text: 'A következő előadásodból magától lehet tiszta jegyzet, kvíz és egy pakli tanulókártya.',
      cta: 'Letöltés az App Store-ból',
      note: 'Ingyen kezdheted · iPhone',
    },
  },

  faq: [
    {
      q: 'Hogyan veszek fel valamit, és hogyan lesz belőle jegyzet?',
      a: 'A Notix felveszi a hangot, leírja, és magától rendezett összefoglalót ír — te csak elindítod a felvételt és leteszed a telefont. Amikor vége, a leirat és az összefoglaló már vár, kvízt vagy tanulókártya-paklit pedig egyetlen koppintással készítesz belőlük. Ha máshonnan már van kész hangfájlod, azt is feltöltheted élő felvétel helyett.',
    },
    {
      q: 'Mennyire pontos a hang szöveggé alakítása?',
      a: 'A Notix elég pontosan írja le a hangot ahhoz, hogy dolgozni lehessen belőle, és hétről hétre jobb lesz — a sebesség és a minőség az a két dolog, amin a legtöbbet dolgozunk, és mindkettő sokat javult az elmúlt hónapokban. A tiszta beszéd egy hétköznapi szobában szinte szóról szóra visszajön. A zajos terem, a távoli mikrofon vagy az erős akcentus nehezebb eset, a hibák pedig a szakkifejezéseknél és a neveknél gyűlnek össze — szóval mielőtt egy konkrét számra vagy névre építesz, érdemes belenézni a leiratba.',
    },
    {
      q: 'Készíthetek összefoglalót PDF-ből és dokumentumokból?',
      a: 'Igen. Tölts fel PDF-et, Word-dokumentumot, szövegfájlt vagy táblázatot — a PDF, DOCX, TXT, RTF, CSV, XLS és XLSX mind megy —, a Notix pedig rendezett összefoglalót készít, amiben kereshetsz, amiből kvízzel tesztelheted magad, vagy tanulókártyát csinálhatsz. A PDF-be exportált diasorok különösen jól működnek, mert az összefoglaló pótolja azt, amit a diasor kihagy.',
    },
    {
      q: 'Tudok jegyzetet készíteni YouTube-videóból és webes cikkből?',
      a: 'Igen. Illessz be egy YouTube-linket vagy egy cikk webcímét, és a Notix jegyzetté, kvízzé és tanulókártyává alakítja — ugyanúgy, ahogy az általad felvett hanggal teszi. A YouTube-összefoglalók a videó feliratából készülnek, ezért egy kikapcsolt feliratú videót egyelőre nem tud összefoglalni.',
    },
    {
      q: 'Össze tudja foglalni a Notix a közösségimédia-posztokat?',
      a: 'Igen. Illessz be egy TikTok-, Instagram-, X- vagy Reddit-poszt linkjét, és a Notix kiszedi belőle, ami tényleg benne van — leírja a videó hangját, elolvassa a képeken és a diákon lévő szöveget, hozzáveszi a leírást —, majd összefoglalót ír, ami meg is marad. Így elmentheted azt a hasznos dolgot, amin átgörgettél, anélkül hogy egy linket hagynál magadnak, amit soha nem nyitsz meg.',
    },
    {
      q: 'Mi történik a felvételeimmel és a fájljaimmal?',
      a: 'A hangfelvételed a készülékeden marad — a szervereinken nem tároljuk. A feltöltött dokumentumot a feldolgozás után azonnal töröljük a szervereinkről; ami megmarad, az az eredmény: a leirat és az összefoglaló. Ha törölsz egy jegyzetet, azonnal eltűnik a könyvtáradból, és 30 nap után véglegesen megsemmisül — ez az ablak azért van, hogy a véletlen törlést vissza lehessen vonni. A tartalmaidat soha nem használjuk AI-modellek tanítására, és soha nem adjuk el.',
    },
    {
      q: 'Működik a Notix internet nélkül?',
      a: 'A leirat és az összefoglaló a szervereinken készül, ezért a hang vagy a PDF jegyzetté alakításához kell kapcsolat. Ami már elkészült, az a készülékeden marad, így a jegyzeteid, összefoglalóid, kvízeid és tanulókártyáid offline is olvashatók — repülőn vagy térerő nélküli pincében is ott a könyvtárad.',
    },
    {
      q: 'Ingyenes a Notix?',
      a: 'A Notixot ingyen elkezdheted: felveszel, jegyzetet készítesz, kvízt és tanulókártyát csinálsz fizetés nélkül. A Notix Pro leveszi a korlátokat — korlátlan felvételi óra, korlátlan kvízkérdés, valamint PDF- és videóösszefoglaló. Van havi csomag 3 napos próbaidővel és éves csomag 7 napossal — a pontos árat a saját pénznemedben az App Store-ban látod. A próbaidő vége előtt semmit nem vonunk le.',
    },
    {
      q: 'Bármikor lemondhatom?',
      a: 'Igen. Az előfizetést az Apple ID-d kezeli az App Store-ban, és ott pár koppintással le is mondhatod. A lemondás a következő fizetést állítja le; a Pro a már kifizetett időszak végéig aktív marad, a jegyzeteid pedig így is, úgy is a könyvtáradban maradnak.',
    },
    {
      q: 'Milyen nyelveket támogat a Notix?',
      a: 'Az app felülete angolul, spanyolul, franciául, németül, oroszul és lengyelül érhető el. A hang szöveggé alakítása nem szorítkozik erre a hatra — a Notix elboldogul a világ fő nyelveivel, az összefoglalók és a kvízek pedig az általad választott nyelven jönnek vissza, így felveheted az anyagot egy nyelven, és elolvashatod a jegyzetet egy másikon.',
    },
  ],

  support: {
    seoTitle: 'Súgó — Notix',
    seoDescription:
      'Segítség a Notixhoz: írj nekünk, jelents hibát, vagy kérdezz az előfizetésről.',
    title: 'Súgó',
    replyTime: 'Általában 1–2 munkanapon belül válaszolunk.',
    contactCardTitle: 'Írj nekünk',
    contactCardText: 'Bármilyen kérdéssel, hibával vagy ötlettel:',

    reportingTitle: 'Hibabejelentés',
    reportingIntro: 'Hogy gyorsabban javíthassunk, írd meg:',
    reportingItems: [
      'A készüléked típusát és az iOS verzióját',
      'A Notix verzióját, ha tudod',
      'Mit csináltál, mire számítottál, és mi történt helyette',
      'Képernyőképet vagy képernyőfelvételt, ha van',
    ],

    billingTitle: 'Előfizetés és számlázás',
    billingTextLead:
      'A Notix Pro előfizetést az Apple ID-d terheli. Az előfizetést bármikor kezelheted vagy lemondhatod a készülék beállításaiban:',
    billingSettingsPath: 'Beállítások → a neved → Előfizetések',
    billingRefundsLead:
      'Az App Store-ban vásároltak visszatérítését az Apple intézi — itt igényelheted:',

    accountTitle: 'Fiók és adatok',
    accountTextLead:
      'A fiókodat és minden hozzá tartozó adatot közvetlenül az appban törölheted:',
    accountSettingsPath: 'Settings → Account details → Delete account',
    accountTextTail:
      'A fiókod és az adataid 30 nap után véglegesen törlődnek; ha ezen belül újra bejelentkezel, a törlés visszavonódik.',
    accountPrivacyLead: 'Adatkérdésekben nézd meg az',
    accountPrivacyLink: 'adatvédelmi tájékoztatót',
    accountPrivacyTail: 'vagy írj nekünk.',

    recordingTitle: 'Előadások és megbeszélések rögzítése',
    recordingText:
      'A Notix abban segít, hogy rögzítsd, amit jogod van rögzíteni. A felvételre vonatkozó szabályok iskolánként, munkahelyenként és országonként eltérnek, és van, ahol a teremben mindenkinek bele kell egyeznie — szóval mielőtt elindítod a felvételt, nézz utána, mi vonatkozik rád.',
  },

  notFound: {
    seoTitle: 'Az oldal nem található — Notix',
    seoDescription:
      'Az oldal nem található — Notix. A keresett oldal nem létezik, vagy elköltözött.',
    titleLead: '404 — ez az oldal',
    titleEmphasis: 'nem jegyzetelt',
    text: 'A keresett oldal nem létezik, vagy elköltözött.',
    cta: 'Vissza a főoldalra',
  },

  resetPassword: {
    seoTitle: 'Jelszó visszaállítása — Notix',
    seoDescription:
      'Nyisd meg ezt a linket azon a telefonon, amelyikre a Notix telepítve van, és állíts be új jelszót.',
    title: 'Nyisd meg ezt a linket a telefonodon',
    text: 'A jelszó módosítása a Notix appban történik. Nyisd meg az e-mailben kapott linket azon az iPhone-on vagy Android-telefonon, amelyikre a Notix telepítve van — egyenesen az új jelszó képernyőjére jutsz.',
    noAppText:
      'Még nincs telefonod, amin fut a Notix? Telepítsd az appot, majd koppints újra a linkre. A link 30 percig él.',
    cta: 'Letöltés az App Store-ból',
  },
} satisfies Dictionary;
