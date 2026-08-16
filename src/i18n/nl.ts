/**
 * Nederlands woordenboek.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-нидерландски (проверено по объёмам
 * запросов Google Ads, NL): «transcriberen» и «audio omzetten naar tekst» вместо
 * кальки с transcription, «notities app» и «aantekeningen» вместо note taking,
 * «samenvatting maken» вместо summary. AI-термины оставлены по-английски там, где
 * английская формулировка ищется лучше нидерландской («AI Note Taker», «flashcards»).
 *
 * Остальное — перевод с сохранением тона: короткие фразы, обращение на «je»,
 * без канцелярита. Язык нейтральный: понятен и в Нидерландах, и во Фландрии.
 *
 * «Notix» не склоняется и не переводится, как и «Notix Pro», «App Store»,
 * «Apple ID» и «YouTube».
 */
import type { Dictionary } from './en';

export const nl = {
  path: 'nl',
  hreflang: 'nl',
  nativeName: 'Nederlands',

  nav: {
    features: 'Functies',
    faq: 'FAQ',
    examples: 'Voorbeelden',
    support: 'Support',
    getApp: 'App downloaden',
    menu: 'Menu',
    language: 'Taal',
  },

  footer: {
    privacy: 'Privacybeleid',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Deze pagina is beschikbaar in het {language}',
    cta: 'Overschakelen',
    dismiss: 'Sluiten',
  },

  home: {
    seoTitle:
      'Notix — AI Note Taker: colleges opnemen, transcriberen en samenvatten, met oefenvragen en flashcards',
    seoDescription:
      'Notix neemt colleges en gesprekken op, transcribeert audio en maakt een samenvatting van je PDF of YouTube-video. Oefenvragen en flashcards maakt de app er zelf bij. Gratis te proberen op iPhone.',
    ogTitle: 'Notix — AI Note Taker',
    ogDescription:
      'Zet colleges, PDF-bestanden en YouTube-video’s om in notities, oefenvragen en flashcards. Stel vragen aan je aantekeningen en wees sneller klaar voor je tentamen.',
    ogImageAlt: 'Notix — maakt van alles wat je leert notities die jou iets leren',
    schemaDescription:
      'Notix zet colleges, PDF-bestanden, YouTube-video’s en spraakopnames om in heldere notities, oefenvragen en flashcards. Transcriberen, samenvatten en vragen stellen aan je aantekeningen.',

    hero: {
      badge: 'AI-studiemaatje voor iPhone',
      titleLead: 'Van college, PDF of video naar aantekeningen die',
      titleEmphasis: 'jou iets leren',
      subtitle:
        'Neem een college op, upload een PDF of plak een YouTube-link. Notix transcribeert het, schrijft een heldere samenvatting en maakt er oefenvragen en flashcards van — zodat je leert in plaats van herleest.',
      cta: 'Download in de App Store',
      ctaNote: 'Gratis te proberen · iPhone',
    },

    valueStrip: [
      { title: 'Alles kan erin', note: 'audio, PDF, YouTube, web' },
      { title: 'Notities in seconden', note: 'transcript + samenvatting' },
      { title: 'Actief leren', note: 'oefenvragen, flashcards, AI-chat' },
      { title: '6 talen', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Herkenbaar?',
      title: 'Leren kost meer moeite dan nodig',
      items: [
        '“Na twintig minuten college haak ik af — en mis ik precies de helft die op het tentamen komt.”',
        '“Ik heb dit hoofdstuk drie keer gelezen en onthoud er nog steeds niets van.”',
        '“Mijn aantekeningen staan verspreid over twee schriften en vijf verschillende apps.”',
        '“Het is middernacht voor het tentamen, ik snap er niets van en er is niemand om het aan te vragen.”',
      ],
      pivot:
        'Het kan anders. Notix maakt van colleges, PDF-bestanden en video’s een studiesysteem — vanzelf.',
    },

    how: {
      title: 'Zo werkt het',
      steps: [
        {
          title: 'Neem alles op',
          text: 'Neem een college op, upload audio of een document, of plak een YouTube- of weblink.',
        },
        {
          title: 'Notix doet het werk',
          text: 'Automatisch transcriberen en een heldere, gestructureerde samenvatting — klaar in seconden.',
        },
        {
          title: 'Leer het echt',
          text: 'Overhoor jezelf met oefenvragen en flashcards, of vraag je aantekeningen alles via de AI-chat.',
        },
      ],
    },

    features: {
      title: 'Opnemen, snappen en onthouden — in één app',
      items: [
        {
          title: 'Mis niets meer in de collegezaal',
          text: 'Druk op opnemen en luister rustig. Het transcript en de gestructureerde notities staan na afloop voor je klaar.',
        },
        {
          title: 'Vijftig slides, één heldere samenvatting',
          text: 'Zet er PDF-bestanden, slides of artikelen in en krijg in seconden een heldere, gestructureerde samenvatting.',
        },
        {
          title: 'YouTube en weblinks',
          text: 'Plak een link en Notix maakt van de video of pagina doorzoekbare notities.',
        },
        {
          title: 'Vind je gaten voordat het tentamen ze vindt',
          text: 'Maak van elke notitie oefenvragen — actief ophalen werkt altijd beter dan herlezen.',
        },
        {
          title: 'Zodat het blijft hangen',
          text: 'Flashcards rechtstreeks uit je eigen notities, klaar om overal even door te nemen.',
        },
        {
          title: 'Aantekeningen die antwoord geven',
          text: 'Stel vragen over één notitie of over je hele bibliotheek — elk antwoord verwijst naar de bron.',
        },
        {
          title: 'Alles op één plek',
          text: 'Mappen, zoeken en synchronisatie tussen apparaten — elk feit uit elk college vind je in seconden.',
        },
        {
          title: 'Spreekt jouw taal',
          text: 'Engels, Spaans, Frans, Duits, Russisch en Pools — samenvattingen en oefenvragen volgen jouw taal.',
        },
        {
          title: 'Deel het als PDF',
          text: 'Exporteer elke notitie als een verzorgde PDF voor medestudenten of collega’s.',
        },
      ],
    },

    testimonials: {
      title: 'Wat studenten over Notix zeggen',
      items: [
        {
          quote:
            '“Ik neem elk college op en Notix maakt er nette notities van waar ik ook echt uit leer. Mijn cijfers zijn dit semester omhooggegaan.”',
          author: 'Maya R. · Student',
        },
        {
          quote:
            '“Herhalen voor tentamens gaat nu veel sneller. Ik zoek gewoon in mijn notities in plaats van uren opnames terug te kijken.”',
          author: 'Daniel K. · Student',
        },
        {
          quote:
            '“Ideaal als je colleges achter elkaar hebt. Ik druk op opnemen, focus op het college en de samenvatting staat daarna klaar.”',
          author: 'Priya S. · Student',
        },
      ],
    },

    whatIs: {
      title: 'Wat is Notix?',
      paragraphs: [
        'Notix is een AI note taker. Je neemt een college, vergadering of interview op, uploadt een PDF of een document, of plakt een link — een YouTube-video, een artikel, een TikTok- of Instagram-post — en Notix transcribeert het, schrijft een heldere gestructureerde samenvatting en maakt daar oefenvragen en flashcards van zodra je de stof echt moet onthouden.',
        'Het is geen voicerecorder en geen transcriptietool. Een recorder geeft je een uur audio terug dat je opnieuw moet uitzitten. Een transcriptietool geeft je een muur van tekst. Notix geeft je waar je toch al mee bezig was: geordende aantekeningen, waarin de kern van de bijzaken is gescheiden.',
        'Alles komt op één plek terecht. Opnames, documenten, video’s, artikelen en posts worden één doorzoekbare bibliotheek — dus als je wilt weten wat er in maart gezegd is, zoek je in je eigen notities in plaats van in zes apps.',
        'Notix is gratis te proberen en werkt op iPhone.',
      ],
    },

    faqTitle: 'Veelgestelde vragen',

    finalCta: {
      title: 'Mis nooit meer wat ertoe doet',
      text: 'Je volgende college kan een set heldere notities, een reeks oefenvragen en een stapel flashcards worden — vanzelf.',
      cta: 'Download in de App Store',
      note: 'Gratis te proberen · iPhone',
    },
  },

  faq: [
    {
      q: 'Hoe neem ik een college op en maak ik er notities van?',
      a: 'Notix neemt de audio op, transcribeert die en schrijft automatisch een gestructureerde samenvatting — jij start de opname en legt je telefoon weg. Als het afgelopen is, staan het transcript en de samenvatting klaar, en maak je er met één tik oefenvragen of een set flashcards van. Heb je al een audiobestand van ergens anders, dan kun je dat uploaden in plaats van live op te nemen.',
    },
    {
      q: 'Hoe nauwkeurig zet Notix audio om naar tekst?',
      a: 'Notix transcribeert nauwkeurig genoeg om ermee te werken, en wordt elke week beter — snelheid en kwaliteit zijn waar we het meest aan werken, en allebei zijn ze de afgelopen maanden flink vooruitgegaan. Duidelijke spraak in een normale ruimte komt vrijwel woordelijk terug. Een rumoerige zaal, een microfoon op afstand of een zwaar accent zijn lastiger, en fouten zitten vooral in vaktermen en eigennamen — het is dus verstandig om het transcript even na te lopen voordat je op een specifiek getal of een naam vertrouwt.',
    },
    {
      q: 'Kan ik PDF-bestanden en documenten laten samenvatten?',
      a: 'Ja. Upload een PDF, Word-document, tekstbestand of spreadsheet — PDF, DOCX, TXT, RTF, CSV, XLS en XLSX worden allemaal ondersteund — en Notix maakt er een gestructureerde samenvatting van die je kunt doorzoeken, waarmee je jezelf kunt overhoren of die je omzet in flashcards. Slides die als PDF zijn geëxporteerd werken bijzonder goed, omdat de samenvatting het verband invult dat de slides weglaten.',
    },
    {
      q: 'Kan ik notities maken van YouTube-video’s en artikelen op het web?',
      a: 'Ja. Plak een YouTube-link of de URL van een artikel, en Notix maakt er notities, oefenvragen en flashcards van — net zoals bij audio die je zelf hebt opgenomen. Samenvattingen van YouTube worden opgebouwd uit de ondertiteling van de video, dus een video waarbij ondertiteling is uitgeschakeld kan nog niet samengevat worden.',
    },
    {
      q: 'Kan Notix posts van sociale media samenvatten?',
      a: 'Ja. Plak een link naar een post op TikTok, Instagram, X of Reddit en Notix haalt eruit wat er werkelijk in zit — het transcribeert het geluid van een video, leest de tekst op afbeeldingen en slides en neemt het bijschrift mee — en schrijft daarna een samenvatting die je houdt. Zo bewaar je iets nuttigs waar je langs scrolde, zonder jezelf een link achter te laten die je toch nooit opent.',
    },
    {
      q: 'Wat gebeurt er met mijn opnames en bestanden?',
      a: 'Je audio-opname blijft op je apparaat — die bewaren we niet op onze servers. Een document dat je uploadt wordt van onze servers verwijderd zodra het verwerkt is; wat overblijft is het resultaat: het transcript en de samenvatting. Verwijder je een notitie, dan verdwijnt die meteen uit je bibliotheek en wordt hij na 30 dagen definitief gewist — dat venster bestaat zodat een per ongeluk verwijderde notitie nog terug te halen is. Jouw materiaal wordt nooit gebruikt om AI-modellen te trainen, en we verkopen het nooit.',
    },
    {
      q: 'Werkt Notix offline?',
      a: 'Transcriberen en samenvatten gebeurt op onze servers, dus je hebt verbinding nodig om audio of een PDF in notities om te zetten. Alles wat al gemaakt is, staat opgeslagen op je apparaat: je notities, samenvattingen, oefenvragen en flashcards zijn offline te lezen — in het vliegtuig of in een kelder zonder bereik staat je bibliotheek er gewoon.',
    },
    {
      q: 'Is Notix gratis?',
      a: 'Notix is gratis te proberen: je kunt opnemen, notities maken en oefenvragen en flashcards genereren zonder te betalen. Notix Pro haalt de limieten weg — onbeperkt opnemen, onbeperkt oefenvragen, en samenvattingen van PDF-bestanden en video’s — voor $ 17,99 per maand met 3 dagen gratis proefperiode, of $ 99,99 per jaar met 7 dagen gratis proefperiode. Er wordt niets afgeschreven voordat de proefperiode afloopt.',
    },
    {
      q: 'Kan ik altijd opzeggen?',
      a: 'Ja. Het abonnement loopt via je Apple ID in de App Store, en daar zeg je het op elk moment op met een paar tikken. Opzeggen stopt de volgende betaling; Pro blijft actief tot het einde van de periode die je al betaald hebt, en je notities blijven hoe dan ook in je bibliotheek staan.',
    },
    {
      q: 'Welke talen ondersteunt Notix?',
      a: 'De app is beschikbaar in het Engels, Spaans, Frans, Duits, Russisch en Pools. Transcriberen is niet beperkt tot die zes — Notix kan overweg met de grote wereldtalen, en je samenvattingen en oefenvragen komen terug in de taal die je hebt gekozen, zodat je in de ene taal kunt opnemen en de notities in een andere kunt lezen.',
    },
  ],

  support: {
    seoTitle: 'Support — Notix',
    seoDescription:
      'Hulp bij Notix — AI Note Taker. Neem contact op met support, meld een bug of stel een vraag over je abonnement.',
    title: 'Support',
    replyTime: 'We reageren meestal binnen 1–2 werkdagen.',
    contactCardTitle: 'Mail ons',
    contactCardText: 'Voor elke vraag, bugmelding of tip:',

    reportingTitle: 'Een probleem melden',
    reportingIntro: 'Zodat we het sneller kunnen oplossen, stuur je mee:',
    reportingItems: [
      'Je apparaat en iOS-versie',
      'De Notix-versie, als je die weet',
      'Wat je deed, wat je verwachtte en wat er in plaats daarvan gebeurde',
      'Een screenshot of schermopname, als dat lukt',
    ],

    billingTitle: 'Abonnement en betaling',
    billingTextLead:
      'Notix Pro wordt afgerekend via je Apple ID. Je kunt je abonnement op elk moment beheren of opzeggen in de instellingen van je apparaat:',
    billingSettingsPath: 'Instellingen → je naam → Abonnementen',
    billingRefundsLead:
      'Terugbetalingen voor aankopen in de App Store regelt Apple — aanvragen kan op',

    accountTitle: 'Account en gegevens',
    accountTextLead: 'Je kunt je account en alle bijbehorende gegevens direct in de app verwijderen:',
    accountSettingsPath: 'Instellingen → Accountgegevens → Account verwijderen',
    accountTextTail:
      'Je account en gegevens worden na 30 dagen definitief verwijderd; log je binnen die periode weer in, dan gaat de verwijdering niet door.',
    accountPrivacyLead: 'Vragen over gegevens? Lees ons',
    accountPrivacyLink: 'privacybeleid',
    accountPrivacyTail: 'of mail ons.',

    recordingTitle: 'Colleges en vergaderingen opnemen',
    recordingText:
      'Notix helpt je vastleggen wat je mag vastleggen. Regels over opnemen verschillen per opleiding, werkgever en land, en op sommige plekken moet iedereen in de ruimte er vooraf mee instemmen — check dus welke regels voor jou gelden voordat je op opnemen drukt.',
  },

  notFound: {
    seoTitle: 'Pagina niet gevonden — Notix',
    seoDescription:
      'Pagina niet gevonden — Notix. De pagina die je zoekt bestaat niet of is verplaatst.',
    titleLead: '404 — deze pagina heeft',
    titleEmphasis: 'niets opgeschreven',
    text: 'De pagina die je zoekt bestaat niet of is verplaatst.',
    cta: 'Terug naar home',
  },

  resetPassword: {
    seoTitle: 'Wachtwoord opnieuw instellen — Notix',
    seoDescription:
      'Open deze link op de telefoon waarop de Notix-app staat om een nieuw wachtwoord in te stellen.',
    title: 'Open deze link op je telefoon',
    text: 'Je wachtwoord stel je opnieuw in binnen de Notix-app. Open de link uit de e-mail op de iPhone of Android-telefoon waarop Notix staat — je komt dan meteen op het scherm voor je nieuwe wachtwoord.',
    noAppText:
      'Nog geen telefoon met Notix? Installeer eerst de app en tik daarna opnieuw op de link. De link werkt 30 minuten.',
    cta: 'Download in de App Store',
  },
} satisfies Dictionary;
