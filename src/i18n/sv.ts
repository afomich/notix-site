/**
 * Svensk ordbok.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-шведски (проверено по объёмам Google Ads,
 * Sweden, sv): «transkribera» (1900/мес) и «transkribering» (1600) вместо английского
 * «transcribe» (720), «sammanfattning» (3600) и «sammanfatta» вместо summary,
 * «anteckningar» (9900) и «anteckningar app» (480) вместо note taking.
 *
 * Гипотеза про английские термины подтвердилась выборочно: «AI Note Taker» (260)
 * ищут в шесть раз чаще, чем «ai anteckningar» (40), а «flashcards» (5400) —
 * общеупотребимое слово, шведского эквивалента с тем же смыслом нет («glosor» — это
 * только словарные слова). Эти два термина оставлены по-английски. Всё, что касается
 * расшифровки и конспектов, наоборот, ищут по-шведски — там английский не берём.
 *
 * Остальное — перевод с сохранением тона: короткие фразы, обращение на «du»,
 * без канцелярита.
 *
 * «Notix» не переводится и не склоняется, как и «Notix Pro», «App Store»,
 * «Apple ID» и «YouTube».
 */
import type { Dictionary } from './en';

export const sv = {
  path: 'sv',
  hreflang: 'sv',
  nativeName: 'Svenska',

  nav: {
    features: 'Funktioner',
    faq: 'FAQ',
    examples: 'Exempel',
    support: 'Support',
    getApp: 'Hämta appen',
    menu: 'Meny',
    language: 'Språk',
  },

  footer: {
    privacy: 'Integritetspolicy',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Den här sidan finns också på ditt språk',
    cta: 'Byt',
    dismiss: 'Stäng',
  },

  home: {
    seoTitle:
      'Notix — AI Note Taker: transkribera föreläsningar, sammanfatta PDF och YouTube, få quiz och flashcards',
    seoDescription:
      'Notix spelar in föreläsningar och möten, transkriberar ljud till text och gör en sammanfattning av din PDF eller YouTube-video. Quiz och flashcards skapar appen själv. Gratis att börja på iPhone.',
    ogTitle: 'Notix — AI Note Taker',
    ogDescription:
      'Gör föreläsningar, PDF-filer och YouTube-videor till anteckningar, quiz och flashcards. Ställ frågor till dina anteckningar och bli klar för tentan snabbare.',
    ogImageAlt: 'Notix — gör det du pluggar till anteckningar som lär dig något tillbaka',
    schemaDescription:
      'Notix gör föreläsningar, PDF-filer, YouTube-videor och röstinspelningar till tydliga anteckningar, quiz och flashcards. Transkribera, sammanfatta och ställ frågor till dina anteckningar.',

    hero: {
      badge: 'AI-studiekompis för iPhone',
      titleLead: 'Från föreläsning, PDF eller video till anteckningar som',
      titleEmphasis: 'lär dig något tillbaka',
      subtitle:
        'Spela in en föreläsning, ladda upp en PDF eller klistra in en YouTube-länk. Notix transkriberar det, skriver en tydlig sammanfattning och gör quiz och flashcards av den — så att du pluggar i stället för att läsa om.',
      cta: 'Ladda ner i App Store',
      ctaNote: 'Gratis att börja · iPhone',
    },

    valueStrip: [
      { title: 'Allt går in', note: 'ljud, PDF, YouTube, webb' },
      { title: 'Anteckningar på sekunder', note: 'transkript + sammanfattning' },
      { title: 'Aktiv inlärning ut', note: 'quiz, flashcards, AI-chatt' },
      { title: '6 språk', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Känner du igen dig?',
      title: 'Att plugga tar mer kraft än det borde',
      items: [
        '”Efter tjugo minuter på föreläsningen tappar jag fokus — och missar precis den halva som kommer på tentan.”',
        '”Jag har läst det här kapitlet tre gånger och minns fortfarande ingenting.”',
        '”Mina anteckningar ligger utspridda i två block och fem olika appar.”',
        '”Klockan är midnatt kvällen före tentan, jag fattar ingenting och det finns ingen att fråga.”',
      ],
      pivot:
        'Det går att göra annorlunda. Notix gör föreläsningar, PDF-filer och videor till ett pluggsystem — helt automatiskt.',
    },

    how: {
      title: 'Så funkar det',
      steps: [
        {
          title: 'Fånga vad som helst',
          text: 'Spela in en föreläsning, ladda upp ljud eller ett dokument, eller klistra in en YouTube- eller webblänk.',
        },
        {
          title: 'Notix gör jobbet',
          text: 'Automatisk transkribering och en tydlig, strukturerad sammanfattning — klar på sekunder.',
        },
        {
          title: 'Lär dig det på riktigt',
          text: 'Förhör dig själv med quiz och flashcards, eller fråga dina anteckningar vad du vill i AI-chatten.',
        },
      ],
    },

    features: {
      title: 'Spela in, förstå och kom ihåg — i en och samma app',
      items: [
        {
          title: 'Missa inget på föreläsningen',
          text: 'Tryck på inspelning och var närvarande. Transkriptet och de färdiga anteckningarna väntar när du är klar.',
        },
        {
          title: 'Femtio slides, en tydlig sammanfattning',
          text: 'Lägg in PDF-filer, slides eller artiklar och få en tydlig, strukturerad sammanfattning på sekunder.',
        },
        {
          title: 'YouTube och webblänkar',
          text: 'Klistra in en länk så gör Notix videon eller sidan till sökbara anteckningar.',
        },
        {
          title: 'Hitta luckorna före tentan gör det',
          text: 'Gör quizfrågor av vilken anteckning som helst — att förhöra sig själv slår att läsa om, varje gång.',
        },
        {
          title: 'Så att det fastnar',
          text: 'Flashcards direkt ur dina egna anteckningar, redo att nöta var du än är.',
        },
        {
          title: 'Anteckningar som svarar',
          text: 'Ställ frågor om en enskild anteckning eller hela ditt bibliotek — varje svar länkar till sin källa.',
        },
        {
          title: 'Allt på ett ställe',
          text: 'Mappar, sök och synk mellan enheter — hitta vilken detalj som helst från vilken föreläsning som helst på sekunder.',
        },
        {
          title: 'Talar ditt språk',
          text: 'Engelska, spanska, franska, tyska, ryska och polska — sammanfattningar och quiz följer ditt språk.',
        },
        {
          title: 'Dela den som PDF',
          text: 'Exportera vilken anteckning som helst som en snygg PDF till kurskompisar eller kollegor.',
        },
      ],
    },

    testimonials: {
      title: 'Det här säger studenter om Notix',
      items: [
        {
          quote:
            '”Jag spelar in varje föreläsning och Notix gör rena anteckningar som jag faktiskt pluggar på. Mina betyg gick upp den här terminen.”',
          author: 'Maya R. · Student',
        },
        {
          quote:
            '”Att repetera inför tentor går så mycket snabbare nu. Jag söker bara i mina anteckningar i stället för att se om timmar av inspelningar.”',
          author: 'Daniel K. · Student',
        },
        {
          quote:
            '”Perfekt när föreläsningarna ligger tätt. Jag trycker på inspelning, fokuserar på föreläsningen och sammanfattningen väntar efteråt.”',
          author: 'Priya S. · Student',
        },
      ],
    },

    whatIs: {
      title: 'Vad är Notix?',
      paragraphs: [
        'Notix är en AI Note Taker. Du spelar in en föreläsning, ett möte eller en intervju, laddar upp en PDF eller ett dokument, eller klistrar in en länk — en YouTube-video, en artikel, ett inlägg på TikTok eller Instagram — och Notix transkriberar det, skriver en tydlig strukturerad sammanfattning och gör quiz och flashcards av den när du verkligen behöver komma ihåg innehållet.',
        'Det är inte en röstinspelare och inte ett transkriberingsverktyg. En inspelare ger dig tillbaka en timme ljud som du måste sitta igenom en gång till. Ett transkriberingsverktyg ger dig en vägg av text. Notix ger dig det du ändå tänkte skriva ner: ordnade anteckningar, där det viktiga är skilt från utfyllnaden.',
        'Allt hamnar på ett ställe. Inspelningar, dokument, videor, artiklar och inlägg blir ett enda sökbart bibliotek — så när du behöver veta vad som sades i mars söker du i dina egna anteckningar i stället för att leta i sex appar.',
        'Notix är gratis att börja med och funkar på iPhone.',
      ],
    },

    faqTitle: 'Vanliga frågor',

    finalCta: {
      title: 'Missa aldrig det som betyder något',
      text: 'Din nästa föreläsning kan bli tydliga anteckningar, ett quiz och en hög flashcards — helt automatiskt.',
      cta: 'Ladda ner i App Store',
      note: 'Gratis att börja · iPhone',
    },
  },

  faq: [
    {
      q: 'Hur spelar jag in något och gör anteckningar av det?',
      a: 'Notix spelar in ljudet, transkriberar det och skriver automatiskt en strukturerad sammanfattning — du startar inspelningen och lägger ifrån dig telefonen. När den är slut väntar transkriptet och sammanfattningen, och du gör ett quiz eller en hög flashcards av dem med en tryckning. Har du redan en ljudfil från något annat håll kan du ladda upp den i stället för att spela in live.',
    },
    {
      q: 'Hur bra transkriberar Notix ljud till text?',
      a: 'Notix transkriberar tillräckligt bra för att du ska kunna jobba med resultatet, och det blir bättre varje vecka — hastighet och kvalitet är det vi lägger mest tid på, och båda har förbättrats rejält de senaste månaderna. Tydligt tal i ett vanligt rum kommer tillbaka nästan ordagrant. En stimmig sal, en mikrofon på avstånd eller en kraftig brytning är svårare, och felen samlas i facktermer och egennamn — så det är värt en snabb blick på transkriptet innan du litar på en viss siffra eller ett visst namn.',
    },
    {
      q: 'Kan jag göra sammanfattningar av PDF-filer och dokument?',
      a: 'Ja. Ladda upp en PDF, ett Word-dokument, en textfil eller ett kalkylblad — PDF, DOCX, TXT, RTF, CSV, XLS och XLSX stöds allihop — så gör Notix en strukturerad sammanfattning som du kan söka i, förhöra dig på eller göra flashcards av. Slides som exporterats som PDF fungerar särskilt bra, eftersom sammanfattningen fyller i sambanden som slidesen hoppar över.',
    },
    {
      q: 'Kan jag göra anteckningar av YouTube-videor och artiklar på webben?',
      a: 'Ja. Klistra in en YouTube-länk eller adressen till en artikel, så gör Notix anteckningar, quiz och flashcards av den — precis som med ljud du spelat in själv. Sammanfattningar av YouTube byggs på videons undertexter, så en video där undertexter är avstängda går ännu inte att sammanfatta.',
    },
    {
      q: 'Kan Notix sammanfatta inlägg från sociala medier?',
      a: 'Ja. Klistra in en länk till ett inlägg på TikTok, Instagram, X eller Reddit så plockar Notix fram det som faktiskt finns i det — transkriberar ljudet i en video, läser texten på bilder och slides och tar med bildtexten — och skriver sedan en sammanfattning som du får behålla. Det är sättet att spara något användbart du scrollade förbi, utan att lämna dig själv en länk du aldrig öppnar igen.',
    },
    {
      q: 'Vad händer med mina inspelningar och filer?',
      a: 'Din ljudinspelning stannar på din enhet — vi sparar den inte på våra servrar. Ett dokument du laddar upp raderas från våra servrar så snart det har behandlats; det som blir kvar är resultatet: transkriptet och sammanfattningen. När du raderar en anteckning försvinner den direkt ur ditt bibliotek och tas bort permanent efter 30 dagar — det fönstret finns för att en råkad radering ska gå att ångra. Ditt innehåll används aldrig för att träna AI-modeller, och vi säljer det aldrig.',
    },
    {
      q: 'Funkar Notix offline?',
      a: 'Transkribering och sammanfattning körs på våra servrar, så du behöver uppkoppling för att göra ljud eller en PDF till anteckningar. Allt som redan är skapat ligger sparat på din enhet, så dina anteckningar, sammanfattningar, quiz och flashcards går att läsa offline — på ett flygplan eller i en källare utan täckning finns ditt bibliotek kvar.',
    },
    {
      q: 'Är Notix gratis?',
      a: 'Notix är gratis att börja med: du kan spela in, skapa anteckningar och göra quiz och flashcards utan att betala. Notix Pro tar bort gränserna — obegränsat antal inspelningstimmar, obegränsat med quizfrågor och sammanfattningar av PDF-filer och videor. Det finns ett månadsabonnemang med 3 dagars gratis provperiod och ett årsabonnemang med 7 dagars gratis provperiod — exakt pris i din valuta ser du i App Store. Ingenting dras innan provperioden är slut.',
    },
    {
      q: 'Kan jag säga upp när som helst?',
      a: 'Ja. Abonnemanget sköts via ditt Apple ID i App Store, och där säger du upp det när som helst med ett par tryckningar. En uppsägning stoppar nästa betalning; Pro är kvar till slutet av den period du redan har betalat för, och dina anteckningar ligger kvar i biblioteket oavsett.',
    },
    {
      q: 'Vilka språk stöder Notix?',
      a: 'Appens gränssnitt finns på engelska, spanska, franska, tyska, ryska och polska. Transkriberingen är inte begränsad till de sex — Notix klarar de stora världsspråken, och dina sammanfattningar och quiz kommer tillbaka på det språk du har valt, så du kan spela in på ett språk och läsa anteckningarna på ett annat.',
    },
  ],

  support: {
    seoTitle: 'Support — Notix',
    seoDescription:
      'Hjälp med Notix — AI Note Taker. Kontakta supporten, rapportera en bugg eller ställ en fråga om ditt abonnemang.',
    title: 'Support',
    replyTime: 'Vi svarar oftast inom 1–2 arbetsdagar.',
    contactCardTitle: 'Mejla oss',
    contactCardText: 'För alla frågor, buggrapporter och tips:',

    reportingTitle: 'Rapportera ett problem',
    reportingIntro: 'För att vi ska hinna fixa det snabbare, skicka gärna med:',
    reportingItems: [
      'Din telefonmodell och iOS-version',
      'Vilken version av Notix du har, om du vet',
      'Vad du gjorde, vad du förväntade dig och vad som hände i stället',
      'En skärmbild eller skärminspelning, om det går',
    ],

    billingTitle: 'Abonnemang och betalning',
    billingTextLead:
      'Notix Pro debiteras via ditt Apple ID. Du kan hantera eller säga upp abonnemanget när som helst i enhetens inställningar:',
    billingSettingsPath: 'Inställningar → ditt namn → Prenumerationer',
    billingRefundsLead:
      'Återbetalningar för köp i App Store sköts av Apple — du ansöker om en på',

    accountTitle: 'Konto och data',
    accountTextLead: 'Du kan radera ditt konto och all tillhörande data direkt i appen:',
    accountSettingsPath: 'Inställningar → Kontouppgifter → Radera konto',
    accountTextTail:
      'Ditt konto och din data raderas permanent efter 30 dagar; loggar du in igen inom den perioden avbryts raderingen.',
    accountPrivacyLead: 'Frågor om data? Läs vår',
    accountPrivacyLink: 'integritetspolicy',
    accountPrivacyTail: 'eller mejla oss.',

    recordingTitle: 'Spela in föreläsningar och möten',
    recordingText:
      'Notix hjälper dig fånga det du har rätt att fånga. Reglerna för inspelning skiljer sig mellan lärosäten, arbetsplatser och länder, och på vissa håll måste alla i rummet säga ja innan du börjar — så kolla vilka regler som gäller för dig innan du trycker på inspelning.',
  },

  notFound: {
    seoTitle: 'Sidan hittades inte — Notix',
    seoDescription:
      'Sidan hittades inte — Notix. Sidan du letar efter finns inte eller har flyttat.',
    titleLead: '404 — den här sidan tog',
    titleEmphasis: 'inga anteckningar',
    text: 'Sidan du letar efter finns inte eller har flyttat.',
    cta: 'Tillbaka till startsidan',
  },

  resetPassword: {
    seoTitle: 'Återställ ditt lösenord — Notix',
    seoDescription:
      'Öppna den här länken på telefonen där Notix-appen är installerad för att välja ett nytt lösenord.',
    title: 'Öppna den här länken på din telefon',
    text: 'Lösenordet återställs inne i Notix-appen. Öppna länken från mejlet på den iPhone eller Android-telefon där Notix är installerad — du kommer direkt till skärmen för nytt lösenord.',
    noAppText:
      'Ingen telefon med Notix än? Installera appen först och tryck sedan på länken igen. Länken gäller i 30 minuter.',
    cta: 'Ladda ner i App Store',
  },
} satisfies Dictionary;
