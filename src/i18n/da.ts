/**
 * Dansk ordbog.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-датски (объёмы Google Ads, Denmark, da,
 * проверено 16.08.2026): «transskribering» (1600) и «transskription» (720) вместо
 * английского transcribe, «resumé» (5400) вместо summary, «noter» (5400) вместо
 * note taking, «quiz» (9900) — датское слово, переводить нечего.
 *
 * Гипотеза про английские термины подтвердилась так же, как в шведском:
 * «ai note taker» (210) ищут, а «ai noter», «ai opsummering» и «ai transskription»
 * не ищут вовсе (0). «flashcards» (1600) против датского «huskekort» (30) —
 * англицизм выигрывает в полсотни раз. Эти два термина оставлены по-английски.
 * Всё, что касается расшифровки и конспектов, наоборот, ищут по-датски.
 *
 * Отброшено при подборе: «lyd til tekst» (170) слабее «tale til tekst» (390),
 * «opsummering» (720) слабее «resumé», «ai referat» (30) — мимо.
 *
 * Остальное — перевод с сохранением тона: короткие фразы, обращение на «du»,
 * без канцелярита. Кавычки — датские »…«.
 *
 * «Notix» не переводится и не склоняется, как и «Notix Pro», «App Store»,
 * «Apple ID» и «YouTube».
 */
import type { Dictionary } from './en';

export const da = {
  path: 'da',
  hreflang: 'da',
  nativeName: 'Dansk',

  nav: {
    features: 'Funktioner',
    faq: 'FAQ',
    examples: 'Eksempler',
    support: 'Support',
    getApp: 'Hent appen',
    menu: 'Menu',
    language: 'Sprog',
  },

  footer: {
    privacy: 'Privatlivspolitik',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Denne side findes også på dit sprog',
    cta: 'Skift',
    dismiss: 'Luk',
  },

  home: {
    seoTitle:
      'Notix — AI Note Taker: transskribering af forelæsninger, resumé af PDF og YouTube, quiz og flashcards',
    seoDescription:
      'Notix optager forelæsninger og møder, transskriberer tale til tekst og laver et resumé af din PDF eller YouTube-video. Quiz og flashcards laver appen selv. Gratis at starte på iPhone.',
    ogTitle: 'Notix — AI Note Taker',
    ogDescription:
      'Lav forelæsninger, PDF-filer og YouTube-videoer om til noter, quiz og flashcards. Stil spørgsmål til dine noter og bliv klar til eksamen hurtigere.',
    ogImageAlt: 'Notix — lav det, du læser, om til noter, der lærer dig noget tilbage',
    schemaDescription:
      'Notix laver forelæsninger, PDF-filer, YouTube-videoer og lydoptagelser om til klare noter, quiz og flashcards. Transskribér, lav resumé og stil spørgsmål til dine noter.',

    hero: {
      badge: 'AI-studiemakker til iPhone',
      titleLead: 'Fra forelæsning, PDF eller video til noter, der',
      titleEmphasis: 'lærer dig noget tilbage',
      subtitle:
        'Optag en forelæsning, upload en PDF eller indsæt et YouTube-link. Notix transskriberer det, skriver et klart resumé og laver quiz og flashcards ud af det — så du lærer i stedet for at læse det hele igen.',
      cta: 'Hent i App Store',
      ctaNote: 'Gratis at starte · iPhone',
    },

    valueStrip: [
      { title: 'Alt kan komme ind', note: 'lyd, PDF, YouTube, web' },
      { title: 'Noter på sekunder', note: 'transskription + resumé' },
      { title: 'Aktiv læring ud', note: 'quiz, flashcards, AI-chat' },
      { title: '6 sprog', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Lyder det bekendt?',
      title: 'At studere tager mere energi, end det burde',
      items: [
        '»Efter tyve minutter til forelæsningen falder jeg ud — og misser lige præcis den halvdel, der kommer til eksamen.«',
        '»Jeg har læst det her kapitel tre gange og kan stadig ikke huske noget af det.«',
        '»Mine noter ligger spredt i to blokke og fem forskellige apps.«',
        '»Klokken er midnat aftenen før eksamen, jeg forstår ingenting, og der er ingen at spørge.«',
      ],
      pivot:
        'Det kan gøres anderledes. Notix laver forelæsninger, PDF-filer og videoer om til et læsesystem — helt automatisk.',
    },

    how: {
      title: 'Sådan virker det',
      steps: [
        {
          title: 'Fang hvad som helst',
          text: 'Optag en forelæsning, upload lyd eller et dokument, eller indsæt et YouTube- eller weblink.',
        },
        {
          title: 'Notix gør arbejdet',
          text: 'Automatisk transskribering og et klart, struktureret resumé — klar på sekunder.',
        },
        {
          title: 'Lær det for alvor',
          text: 'Hør dig selv med quiz og flashcards, eller spørg dine noter om hvad som helst i AI-chatten.',
        },
      ],
    },

    features: {
      title: 'Optag, forstå og husk — i én app',
      items: [
        {
          title: 'Mis ingenting til forelæsningen',
          text: 'Tryk på optag, og vær til stede. Transskriptionen og de færdige noter venter, når du er færdig.',
        },
        {
          title: 'Halvtreds slides, ét klart resumé',
          text: 'Læg PDF-filer, slides eller artikler ind, og få et klart, struktureret resumé på sekunder.',
        },
        {
          title: 'YouTube og weblinks',
          text: 'Indsæt et link, så laver Notix videoen eller siden om til noter, du kan søge i.',
        },
        {
          title: 'Find hullerne, før eksamen gør det',
          text: 'Lav quizspørgsmål ud af en hvilken som helst note — at høre sig selv slår at læse igen, hver gang.',
        },
        {
          title: 'Så det sidder fast',
          text: 'Flashcards direkte ud af dine egne noter, klar til en hurtig runde, uanset hvor du er.',
        },
        {
          title: 'Noter, der svarer igen',
          text: 'Stil spørgsmål til en enkelt note eller til hele dit bibliotek — hvert svar linker til sin kilde.',
        },
        {
          title: 'Det hele ét sted',
          text: 'Mapper, søgning og synk mellem enheder — find en hvilken som helst detalje fra en hvilken som helst forelæsning på sekunder.',
        },
        {
          title: 'Taler dit sprog',
          text: 'Engelsk, spansk, fransk, tysk, russisk og polsk — resuméer og quiz følger dit sprog.',
        },
        {
          title: 'Del den som PDF',
          text: 'Eksportér en hvilken som helst note som en pæn PDF til medstuderende eller kolleger.',
        },
      ],
    },

    testimonials: {
      title: 'Det siger studerende om Notix',
      items: [
        {
          quote:
            '»Jeg optager hver eneste forelæsning, og Notix laver rene noter, som jeg faktisk læser på. Mine karakterer gik op i det her semester.«',
          author: 'Maya R. · Studerende',
        },
        {
          quote:
            '»At repetere før eksamen går så meget hurtigere nu. Jeg søger bare i mine noter i stedet for at se timevis af optagelser igen.«',
          author: 'Daniel K. · Studerende',
        },
        {
          quote:
            '»Perfekt når forelæsningerne ligger lige efter hinanden. Jeg trykker på optag, koncentrerer mig om forelæsningen, og resuméet venter bagefter.«',
          author: 'Priya S. · Studerende',
        },
      ],
    },

    whatIs: {
      title: 'Hvad er Notix?',
      paragraphs: [
        'Notix er en AI Note Taker. Du optager en forelæsning, et møde eller et interview, uploader en PDF eller et dokument, eller indsætter et link — en YouTube-video, en artikel, et opslag på TikTok eller Instagram — og Notix transskriberer det, skriver et klart struktureret resumé og laver quiz og flashcards ud af resuméet, når du for alvor skal huske indholdet.',
        'Det er ikke en diktafon, og det er ikke et transskriptionsværktøj. En diktafon giver dig en times lyd tilbage, som du skal sidde igennem en gang til. Et transskriptionsværktøj giver dig en mur af tekst. Notix giver dig det, du alligevel ville have skrevet ned: ordnede noter, hvor det vigtige er skilt fra fyldet.',
        'Det hele lander ét sted. Optagelser, dokumenter, videoer, artikler og opslag bliver til ét søgbart bibliotek — så når du skal bruge det, der blev sagt i marts, søger du i dine egne noter i stedet for at lede i seks apps.',
        'Notix er gratis at starte med og kører på iPhone.',
      ],
    },

    faqTitle: 'Ofte stillede spørgsmål',

    finalCta: {
      title: 'Mis aldrig det, der betyder noget',
      text: 'Din næste forelæsning kan blive til klare noter, en quiz og en bunke flashcards — helt automatisk.',
      cta: 'Hent i App Store',
      note: 'Gratis at starte · iPhone',
    },
  },

  faq: [
    {
      q: 'Hvordan optager jeg noget og laver noter ud af det?',
      a: 'Notix optager lyden, transskriberer den og skriver automatisk et struktureret resumé — du starter optagelsen og lægger telefonen fra dig. Når den slutter, venter transskriptionen og resuméet, og du kan lave en quiz eller en bunke flashcards ud af dem med ét tryk. Har du allerede en lydfil et andet sted fra, kan du uploade den i stedet for at optage live.',
    },
    {
      q: 'Hvor godt transskriberer Notix tale til tekst?',
      a: 'Notix transskriberer godt nok til, at du kan arbejde videre med resultatet, og det bliver bedre hver uge — hastighed og kvalitet er det, vi bruger mest tid på, og begge dele er forbedret markant de seneste måneder. Tydelig tale i et almindeligt lokale kommer tilbage næsten ordret. En larmende sal, en mikrofon på afstand eller en kraftig accent er sværere, og fejlene samler sig i fagudtryk og egennavne — så det er et hurtigt blik på transskriptionen værd, før du stoler på et bestemt tal eller navn.',
    },
    {
      q: 'Kan jeg lave resuméer af PDF-filer og dokumenter?',
      a: 'Ja. Upload en PDF, et Word-dokument, en tekstfil eller et regneark — PDF, DOCX, TXT, RTF, CSV, XLS og XLSX er alle understøttet — så laver Notix et struktureret resumé, du kan søge i, høre dig selv i eller lave flashcards ud af. Slides eksporteret som PDF fungerer særligt godt, fordi resuméet fylder de sammenhænge ud, som sliden springer over.',
    },
    {
      q: 'Kan jeg lave noter ud af YouTube-videoer og artikler på nettet?',
      a: 'Ja. Indsæt et YouTube-link eller adressen på en artikel, så laver Notix noter, quiz og flashcards ud af den — præcis som med lyd, du selv har optaget. Resuméer af YouTube bygger på videoens undertekster, så en video med underteksterne slået fra kan endnu ikke resumeres.',
    },
    {
      q: 'Kan Notix lave resumé af opslag på sociale medier?',
      a: 'Ja. Indsæt et link til et opslag på TikTok, Instagram, X eller Reddit, så trækker Notix ud, hvad der faktisk er i det — transskriberer lyden i en video, læser teksten på billeder og slides og tager billedteksten med — og skriver derefter et resumé, du kan beholde. Det er måden at gemme noget brugbart, du scrollede forbi, uden at efterlade dig selv et link, du aldrig åbner igen.',
    },
    {
      q: 'Hvad sker der med mine optagelser og filer?',
      a: 'Din lydoptagelse bliver på din enhed — vi gemmer den ikke på vores servere. Et dokument, du uploader, bliver slettet fra vores servere, så snart det er behandlet; det, der bliver tilbage, er resultatet: transskriptionen og resuméet. Når du sletter en note, forsvinder den fra dit bibliotek med det samme og slettes permanent efter 30 dage — det vindue findes, så en note, du kom til at slette, stadig kan reddes. Dit indhold bliver aldrig brugt til at træne AI-modeller, og vi sælger det aldrig.',
    },
    {
      q: 'Virker Notix offline?',
      a: 'Transskribering og resumé kører på vores servere, så du skal have forbindelse for at lave lyd eller en PDF om til noter. Alt, der allerede er lavet, ligger gemt på din enhed, så dine noter, resuméer, quiz og flashcards kan læses offline — i et fly eller i en kælder uden dækning er dit bibliotek der stadig.',
    },
    {
      q: 'Er Notix gratis?',
      a: 'Notix er gratis at starte med: du kan optage, lave noter og lave quiz og flashcards uden at betale. Notix Pro fjerner grænserne — ubegrænsede optagelsestimer, ubegrænset antal quizspørgsmål og resuméer af PDF-filer og videoer. Der er et månedsabonnement med 3 dages gratis prøveperiode og et årsabonnement med 7 dages gratis prøveperiode — den præcise pris i din valuta står i App Store. Der bliver ikke trukket noget, før prøveperioden er slut.',
    },
    {
      q: 'Kan jeg opsige når som helst?',
      a: 'Ja. Abonnementet styres via dit Apple ID i App Store, og der kan du opsige det når som helst med et par tryk. En opsigelse stopper næste betaling; Pro kører videre til slutningen af den periode, du allerede har betalt for, og dine noter bliver i biblioteket under alle omstændigheder.',
    },
    {
      q: 'Hvilke sprog understøtter Notix?',
      a: 'Appens brugerflade findes på engelsk, spansk, fransk, tysk, russisk og polsk. Transskriberingen er ikke begrænset til de seks — Notix klarer de store verdenssprog, og dine resuméer og quiz kommer tilbage på det sprog, du har valgt, så du kan optage på ét sprog og læse noterne på et andet.',
    },
  ],

  support: {
    seoTitle: 'Support — Notix',
    seoDescription:
      'Hjælp til Notix — AI Note Taker. Kontakt supporten, rapportér en fejl, eller spørg om dit abonnement.',
    title: 'Support',
    replyTime: 'Vi svarer som regel inden for 1–2 hverdage.',
    contactCardTitle: 'Skriv til os',
    contactCardText: 'Til alle spørgsmål, fejlrapporter og forslag:',

    reportingTitle: 'Rapportér et problem',
    reportingIntro: 'Så vi kan rette det hurtigere, må du gerne skrive med:',
    reportingItems: [
      'Din telefonmodel og iOS-version',
      'Hvilken version af Notix du har, hvis du ved det',
      'Hvad du gjorde, hvad du forventede, og hvad der skete i stedet',
      'Et skærmbillede eller en skærmoptagelse, hvis det kan lade sig gøre',
    ],

    billingTitle: 'Abonnement og betaling',
    billingTextLead:
      'Notix Pro bliver betalt via dit Apple ID. Du kan administrere eller opsige abonnementet når som helst i enhedens indstillinger:',
    billingSettingsPath: 'Indstillinger → dit navn → Abonnementer',
    billingRefundsLead:
      'Refusion af køb i App Store håndteres af Apple — du kan søge om en på',

    accountTitle: 'Konto og data',
    accountTextLead: 'Du kan slette din konto og alle tilhørende data direkte i appen:',
    accountSettingsPath: 'Settings → Account details → Delete account',
    accountTextTail:
      'Din konto og dine data slettes permanent efter 30 dage; logger du ind igen inden for den periode, annulleres sletningen.',
    accountPrivacyLead: 'Spørgsmål om data? Læs vores',
    accountPrivacyLink: 'privatlivspolitik',
    accountPrivacyTail: 'eller skriv til os.',

    recordingTitle: 'Optagelse af forelæsninger og møder',
    recordingText:
      'Notix hjælper dig med at fange det, du har lov til at fange. Reglerne for optagelse er forskellige fra uddannelsessted til uddannelsessted, fra arbejdsplads til arbejdsplads og fra land til land, og nogle steder skal alle i lokalet sige ja, før du går i gang — så tjek de regler, der gælder for dig, før du trykker på optag.',
  },

  notFound: {
    seoTitle: 'Siden blev ikke fundet — Notix',
    seoDescription:
      'Siden blev ikke fundet — Notix. Siden, du leder efter, findes ikke eller er flyttet.',
    titleLead: '404 — denne side tog',
    titleEmphasis: 'ingen noter',
    text: 'Siden, du leder efter, findes ikke eller er flyttet.',
    cta: 'Tilbage til forsiden',
  },

  resetPassword: {
    seoTitle: 'Nulstil din adgangskode — Notix',
    seoDescription:
      'Åbn dette link på den telefon, hvor Notix-appen er installeret, for at vælge en ny adgangskode.',
    title: 'Åbn dette link på din telefon',
    text: 'Adgangskoden nulstilles inde i Notix-appen. Åbn linket fra mailen på den iPhone eller Android-telefon, hvor Notix er installeret — så kommer du direkte til skærmen med ny adgangskode.',
    noAppText:
      'Ingen telefon med Notix endnu? Installér appen først, og tryk så på linket igen. Linket virker i 30 minutter.',
    cta: 'Hent i App Store',
  },
} satisfies Dictionary;
