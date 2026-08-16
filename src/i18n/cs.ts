/**
 * Český slovník.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-чешски. Чешские AI-кальки («ai poznámky»,
 * «ai zápisky», «ai aplikace na učení») не набирают вообще ничего — объём сидит в
 * обычных категорийных словах («poznámky» 5400, «kvíz» 27100, «shrnutí» 1000,
 * «přepis audia do textu» 90, «převod řeči na text» 170), а AI-термин чехи набирают
 * по-английски («ai note taker» 70) — как и поляки. Отсюда смешанные заголовки.
 * «flashcards» (1900) чехи ищут по-английски чаще, чем «kartičky na učení» (260),
 * поэтому английское слово оставлено в мета-описании, а в тексте живёт «kartičky».
 *
 * Остальное — перевод с сохранением тона: короткие фразы, обращение на «ty»
 * (строчное — заглавное «Ty» в чешском звучит как деловое письмо), без канцелярита.
 *
 * «Notix» не склоняется — это имя продукта.
 */
import type { Dictionary } from './en';

export const cs = {
  path: 'cs',
  hreflang: 'cs',
  nativeName: 'Čeština',

  nav: {
    features: 'Funkce',
    faq: 'FAQ',
    examples: 'Ukázky',
    support: 'Podpora',
    getApp: 'Stáhnout',
    menu: 'Menu',
    language: 'Jazyk',
  },

  footer: {
    privacy: 'Zásady ochrany soukromí',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Tahle stránka je i ve tvém jazyce',
    cta: 'Přepnout',
    dismiss: 'Zavřít',
  },

  home: {
    seoTitle:
      'Notix — AI note taker: přepis audia do textu, poznámky z přednášek, PDF a YouTube',
    seoDescription:
      'Notix nahraje přednášku i schůzku, udělá přepis audia do textu a shrnutí z PDF a videí na YouTube. Kvízy a kartičky (flashcards) vzniknou samy. Aplikace na poznámky pro iPhone.',
    ogTitle: 'Notix — AI note taker',
    ogDescription:
      'Přednášky, PDF a videa se mění ve shrnutí, kvízy a kartičky. Ptej se svých poznámek a připrav se na zkoušku rychleji.',
    ogImageAlt: 'Notix — mění to, co se učíš, v poznámky, které tě samy učí',
    schemaDescription:
      'Notix mění přednášky, PDF, videa z YouTube a hlasové nahrávky v přehledná shrnutí, kvízy a kartičky. Přepis, shrnutí a chat s poznámkami.',

    hero: {
      badge: 'Pomocník na učení pro iPhone',
      titleLead: 'Změň to, co se učíš, v poznámky, které',
      titleEmphasis: 'tě samy učí',
      subtitle:
        'Nahraj přednášku, vlož PDF nebo odkaz z YouTube. Notix udělá přepis, napíše přehledné shrnutí a vyrobí z něj kvízy a kartičky — aby ses učil, ne pořád dokola četl.',
      cta: 'Stáhnout v App Store',
      ctaNote: 'Začni zdarma · iPhone',
    },

    valueStrip: [
      { title: 'Cokoliv na vstupu', note: 'audio, PDF, YouTube, web' },
      { title: 'Poznámky za pár vteřin', note: 'přepis a shrnutí' },
      { title: 'Ověříš si to', note: 'kvízy, kartičky, AI chat' },
      { title: '6 jazyků', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Zní ti to povědomě?',
      title: 'Učení je těžší, než by muselo být',
      items: [
        '„Po dvaceti minutách přednášky vypnu — a uteče mi půlka toho, co bude u zkoušky.“',
        '„Čtu tuhle kapitolu potřetí a pořád si z ní nic nepamatuju.“',
        '„Poznámky mám rozházené ve dvou sešitech a pěti aplikacích.“',
        '„Půlnoc před zkouškou, ničemu nerozumím a není se koho zeptat.“',
      ],
      pivot:
        'Jde to i jinak. Notix mění přednášky, PDF a videa v systém na učení — sám od sebe.',
    },

    how: {
      title: 'Jak to funguje — jednodušeji to nejde',
      steps: [
        {
          title: 'Nahraj cokoliv',
          text: 'Nahraj přednášku, vlož audio nebo dokument, anebo odkaz na video či článek.',
        },
        {
          title: 'Notix odvede práci',
          text: 'Automatický přepis a přehledné, uspořádané shrnutí — během pár vteřin.',
        },
        {
          title: 'Nauč se to pořádně',
          text: 'Vyzkoušej se kvízy a kartičkami nebo se svých poznámek zeptej v AI chatu.',
        },
      ],
    },

    features: {
      title: 'Nahraj, pochop a zapamatuj si — v jedné aplikaci',
      items: [
        {
          title: 'Ve výuce ti nic neuteče',
          text: 'Zapni nahrávání a klidně poslouchej. Přepis a uspořádané poznámky na tebe čekají po přednášce.',
        },
        {
          title: 'Padesát slajdů, jedno shrnutí',
          text: 'Vlož PDF, prezentaci nebo článek a za pár vteřin máš přehledné, uspořádané shrnutí.',
        },
        {
          title: 'YouTube a odkazy',
          text: 'Vlož odkaz a Notix změní video nebo stránku v poznámky, ve kterých se dá hledat.',
        },
        {
          title: 'Najdi mezery dřív než zkoušející',
          text: 'Udělej z každé poznámky otázky — vybavování si funguje líp než čtení dokola.',
        },
        {
          title: 'Aby to zůstalo v hlavě',
          text: 'Kartičky rovnou z tvých poznámek, připravené na rychlé opakování kdekoliv.',
        },
        {
          title: 'Poznámky, které odpovídají',
          text: 'Ptej se na jednu poznámku i na celou knihovnu — každá odpověď odkazuje na zdroj.',
        },
        {
          title: 'Všechno na jednom místě',
          text: 'Složky, vyhledávání a synchronizace mezi zařízeními — každý fakt z každé přednášky najdeš za pár vteřin.',
        },
        {
          title: 'Mluví tvým jazykem',
          text: 'Angličtina, španělština, francouzština, němčina, ruština a polština — shrnutí a kvízy v tvém jazyce.',
        },
        {
          title: 'Sdílej to jako PDF',
          text: 'Vyexportuj libovolnou poznámku do úhledného PDF pro spolužáky nebo kolegy.',
        },
      ],
    },

    testimonials: {
      title: 'Co o Notix říkají studenti',
      items: [
        {
          quote:
            '„Nahrávám každou přednášku a Notix z toho udělá poznámky, ze kterých se opravdu učím. Známky mi ten semestr šly nahoru.“',
          author: 'Maya R. · Studentka',
        },
        {
          quote:
            '„Opakování před zkouškou je teď mnohem rychlejší. Prostě hledám v poznámkách místo přeposlouchávání hodin nahrávek.“',
          author: 'Daniel K. · Student',
        },
        {
          quote:
            '„Ideální, když jdou přednášky za sebou. Zapnu nahrávání, soustředím se na výklad a shrnutí už na mě čeká.“',
          author: 'Priya S. · Studentka',
        },
      ],
    },

    whatIs: {
      title: 'Co je Notix?',
      paragraphs: [
        'Notix je aplikace, která si dělá poznámky za tebe. Nahraješ přednášku, schůzku nebo rozhovor, vložíš PDF či dokument, nebo vložíš odkaz — video z YouTube, článek, příspěvek z TikToku nebo Instagramu — a Notix z toho udělá přepis, napíše přehledné, uspořádané shrnutí a promění ho v kvízy a kartičky, když si látku potřebuješ opravdu zapamatovat.',
        'Není to diktafon a není to nástroj na přepis. Diktafon ti vrátí tu samou hodinu audia, kterou si musíš poslechnout znovu. Nástroj na přepis ti vrátí stěnu textu. Notix vrátí to, co sis stejně chtěl zapsat: uspořádané poznámky, ve kterých je podstatné oddělené od vaty.',
        'Všechno přistane na jednom místě. Nahrávky, dokumenty, videa, články i příspěvky se stanou jednou knihovnou s vyhledáváním — takže když potřebuješ, co padlo v březnu, hledáš ve vlastních poznámkách, a ne v šesti aplikacích.',
        'Notix běží na iPhonu a začít můžeš zdarma.',
      ],
    },

    faqTitle: 'Časté dotazy',

    finalCta: {
      title: 'Už ti nic důležitého neuteče',
      text: 'Z tvojí příští přednášky můžou sami od sebe vzniknout přehledné poznámky, kvíz a balíček kartiček.',
      cta: 'Stáhnout v App Store',
      note: 'Začni zdarma · iPhone',
    },
  },

  faq: [
    {
      q: 'Jak nahrát přednášku a udělat z ní poznámky?',
      a: 'Notix nahraje zvuk, udělá přepis a sám napíše uspořádané shrnutí — ty jen spustíš nahrávání a odložíš telefon. Až skončí, přepis i shrnutí už čekají a kvíz nebo balíček kartiček z nich uděláš jedním klepnutím. Jestli už máš audio soubor odjinud, můžeš ho nahrát místo živého nahrávání.',
    },
    {
      q: 'Jak přesný je přepis audia do textu?',
      a: 'Notix přepisuje dost přesně na to, aby se s tím dalo pracovat, a každý týden je to lepší — na rychlosti a kvalitě pracujeme nejvíc a obojí se za poslední měsíce výrazně zlepšilo. Zřetelná řeč v běžné místnosti se vrací téměř doslovně. Hlučná aula, vzdálený mikrofon nebo silný přízvuk jsou těžší a chyby se nejčastěji hromadí u odborných termínů a jmen — takže než se opřeš o konkrétní číslo nebo jméno, vyplatí se mrknout do přepisu.',
    },
    {
      q: 'Zvládne Notix shrnutí PDF a dokumentů?',
      a: 'Ano. Vlož PDF, wordový dokument, textový soubor nebo tabulku — podporované jsou PDF, DOCX, TXT, RTF, CSV, XLS a XLSX — a Notix udělá uspořádané shrnutí, ve kterém můžeš hledat, zkoušet se z něj kvízy nebo z něj udělat kartičky. Prezentace vyexportované do PDF fungují obzvlášť dobře, protože shrnutí doplní souvislosti, které slajdy vynechávají.',
    },
    {
      q: 'Jak udělat poznámky z videa na YouTube nebo z článku?',
      a: 'Notix dělá poznámky i z videí na YouTube a z článků na webu. Vlož odkaz na video nebo adresu článku a Notix z toho udělá poznámky, kvízy a kartičky — úplně stejně jako z audia, které sis nahrál sám. Shrnutí videí vzniká z titulků, takže video s vypnutými titulky zatím shrnout nejde.',
    },
    {
      q: 'Umí Notix shrnout příspěvky ze sociálních sítí?',
      a: 'Ano. Vlož odkaz na příspěvek z TikToku, Instagramu, X nebo Redditu a Notix z něj vytáhne, co v něm doopravdy je — přepíše zvuk videa, přečte text z obrázků a slajdů, přidá popisek — a napíše shrnutí, které ti zůstane. Je to způsob, jak si nechat něco užitečného, co ti proletělo pod prsty, místo odkazu, který už nikdy neotevřeš.',
    },
    {
      q: 'Co se děje s mými nahrávkami a soubory?',
      a: 'Zvuková nahrávka zůstává v tvém zařízení — na našich serverech ji nedržíme. Nahraný dokument z našich serverů mizí hned, jak se zpracuje; zůstává jen výsledek: přepis a shrnutí. Když poznámku smažeš, z knihovny zmizí okamžitě a natrvalo ji mažeme po 30 dnech — to okno je tu proto, aby se dalo omylem smazané vrátit. Tvůj obsah nikdy neslouží k trénování AI modelů a nikdy ho neprodáváme.',
    },
    {
      q: 'Funguje Notix offline?',
      a: 'Přepis a shrnutí počítáme na našich serverech, takže na proměnu audia nebo PDF v poznámky potřebuješ připojení. Všechno, co už vzniklo, je uložené v zařízení, takže poznámky, shrnutí, kvízy i kartičky si přečteš offline — v letadle nebo ve sklepě bez signálu tvoje knihovna pořád je.',
    },
    {
      q: 'Je Notix zdarma?',
      a: 'Notix můžeš začít používat zdarma: nahráváš, tvoříš poznámky, děláš kvízy a kartičky bez placení. Notix Pro sundá limity — neomezené hodiny nahrávání, neomezené otázky v kvízech a shrnutí PDF i videí. Je měsíční plán se 3denním zkušebním obdobím a roční se 7denním — přesnou cenu ve své měně uvidíš v App Storu. Před koncem zkušebního období se nic nestrhne.',
    },
    {
      q: 'Můžu předplatné kdykoliv zrušit?',
      a: 'Ano. Předplatné běží přes tvoje Apple ID v App Storu a tam ho taky kdykoliv zrušíš na pár klepnutí. Zrušení zastaví další platbu; Pro funguje do konce už zaplaceného období a poznámky ti v knihovně zůstanou tak jako tak.',
    },
    {
      q: 'Jaké jazyky Notix podporuje?',
      a: 'Rozhraní aplikace je v angličtině, španělštině, francouzštině, němčině, ruštině a polštině. Přepis se na těch šest jazyků neomezuje — Notix zvládá hlavní světové jazyky a shrnutí i kvízy se vracejí v jazyce, který si vybereš, takže můžeš nahrávat v jednom jazyce a číst poznámky v jiném.',
    },
  ],

  support: {
    seoTitle: 'Podpora — Notix',
    seoDescription:
      'Pomoc s Notix: napiš nám, nahlas chybu nebo se zeptej na předplatné.',
    title: 'Podpora',
    replyTime: 'Obvykle odpovídáme do 1–2 pracovních dnů.',
    contactCardTitle: 'Napiš nám',
    contactCardText: 'S jakýmkoliv dotazem, chybou nebo nápadem:',

    reportingTitle: 'Nahlášení problému',
    reportingIntro: 'Ať to opravíme rychleji, přidej:',
    reportingItems: [
      'Model zařízení a verzi iOS',
      'Verzi Notix, pokud ji znáš',
      'Co jsi dělal, co jsi čekal a co se stalo místo toho',
      'Snímek nebo záznam obrazovky, pokud to jde',
    ],

    billingTitle: 'Předplatné a platby',
    billingTextLead:
      'Notix Pro se platí přes tvoje Apple ID. Předplatné můžeš kdykoliv spravovat nebo zrušit v nastavení zařízení:',
    billingSettingsPath: 'Nastavení → tvoje jméno → Předplatné',
    billingRefundsLead:
      'Vrácení peněz za nákupy v App Storu řeší Apple — požádat o něj můžeš na',

    accountTitle: 'Účet a data',
    accountTextLead: 'Účet i všechna související data smažeš přímo v aplikaci:',
    accountSettingsPath: 'Settings → Account details → Delete account',
    accountTextTail:
      'Účet a data mažeme natrvalo po 30 dnech; když se v té době znovu přihlásíš, smazání se zruší.',
    accountPrivacyLead: 'Na dotazy k datům odpovídají naše',
    accountPrivacyLink: 'zásady ochrany soukromí',
    accountPrivacyTail: 'nebo nám napiš.',

    recordingTitle: 'Nahrávání přednášek a schůzek',
    recordingText:
      'Notix ti pomáhá zachytit materiál, který zachytit smíš. Pravidla nahrávání se liší mezi školami, firmami i zeměmi a někde musí souhlasit všichni v místnosti — takže než zapneš nahrávání, ověř si pravidla, která platí pro tebe.',
  },

  notFound: {
    seoTitle: 'Stránka nenalezena — Notix',
    seoDescription:
      'Stránka nenalezena — Notix. Stránka, kterou hledáš, neexistuje nebo se přesunula.',
    titleLead: '404 — tahle stránka si',
    titleEmphasis: 'nic nezapsala',
    text: 'Stránka, kterou hledáš, neexistuje nebo se přesunula.',
    cta: 'Zpět na hlavní stránku',
  },

  resetPassword: {
    seoTitle: 'Obnovení hesla — Notix',
    seoDescription:
      'Otevři tenhle odkaz v telefonu, kde máš nainstalovaný Notix, a nastav si nové heslo.',
    title: 'Otevři tenhle odkaz v telefonu',
    text: 'Heslo se mění uvnitř aplikace Notix. Otevři odkaz z e-mailu na iPhonu nebo androidím telefonu, kde je Notix nainstalovaný — dostaneš se rovnou na obrazovku nového hesla.',
    noAppText:
      'Ještě nemáš telefon s Notix? Nejdřív nainstaluj aplikaci a pak na odkaz klepni znovu. Odkaz platí 30 minut.',
    cta: 'Stáhnout v App Store',
  },
} satisfies Dictionary;
