/**
 * Suomenkielinen sanakirja.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-фински (проверено по объёмам Google Ads,
 * Finland, fi): «litterointi» (1300/мес) и глагол «litteroida» вместо кальки с
 * transcription, «muistiinpanot» (2400) вместо note taking, «tiivistelmä» (320) —
 * учебный конспект — вместо «yhteenveto» (590), который в финском тяготеет к
 * протоколу собрания.
 *
 * Финский агглютинативный: запросы идут в падежных формах, поэтому в заголовках
 * стоит та форма, которую реально набирают («puheesta tekstiksi», 140; «äänestä
 * tekstiksi» / «ääni tekstiksi», по 110), а не именительный падеж.
 *
 * Английские термины оставлены там, где финский эквивалент означает другое:
 * «flashcards» (880) против «muistikortit» (210) — последнее в финском прежде
 * всего карта памяти для камеры, отсюда и HIGH-конкуренция интернет-магазинов.
 * «AI Note Taker» (70) держится только как категория бренда в ogTitle; вести на
 * него заголовок в Финляндии нечего.
 *
 * Остальное — перевод с сохранением тона: короткие фразы, обращение на «sinä»,
 * без канцелярита.
 *
 * «Notix» не переводится, как и «Notix Pro», «App Store», «Apple ID» и «YouTube».
 * Английское «flashcards» при склонении получает финский носитель:
 * «flashcards-kortit».
 */
import type { Dictionary } from './en';

export const fi = {
  path: 'fi',
  hreflang: 'fi',
  nativeName: 'Suomi',

  nav: {
    features: 'Ominaisuudet',
    faq: 'FAQ',
    examples: 'Esimerkit',
    support: 'Tuki',
    getApp: 'Lataa sovellus',
    menu: 'Valikko',
    language: 'Kieli',
  },

  footer: {
    privacy: 'Tietosuojaseloste',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Tämä sivu on saatavilla myös sinun kielelläsi',
    cta: 'Vaihda',
    dismiss: 'Sulje',
  },

  home: {
    seoTitle:
      'Notix — AI Note Taker: litteroi luennot, tiivistä PDF ja YouTube, tee harjoituskysymykset ja flashcards',
    seoDescription:
      'Notix nauhoittaa luennot ja palaverit, litteroi puheesta tekstiksi ja tekee tiivistelmän PDF:stä tai YouTube-videosta. Harjoituskysymykset ja flashcards syntyvät samalla. Aloitus ilmaiseksi iPhonella.',
    ogTitle: 'Notix — AI Note Taker',
    ogDescription:
      'Tee luennoista, PDF-tiedostoista ja YouTube-videoista muistiinpanot, harjoituskysymykset ja flashcards. Kysy muistiinpanoiltasi ja ole valmiina tenttiin nopeammin.',
    ogImageAlt: 'Notix — luennoista ja PDF-tiedostoista muistiinpanot, joista oikeasti opit',
    schemaDescription:
      'Notix tekee luennoista, PDF-tiedostoista, YouTube-videoista ja äänitallenteista selkeät muistiinpanot, harjoituskysymykset ja flashcards. Litteroi, tiivistä ja kysy muistiinpanoiltasi.',

    hero: {
      badge: 'Tekoälykaveri opiskeluun iPhonella',
      titleLead: 'Luennosta, PDF:stä tai videosta muistiinpanot, joista',
      titleEmphasis: 'oikeasti opit',
      subtitle:
        'Nauhoita luento, lataa PDF tai liitä YouTube-linkki. Notix litteroi sen, kirjoittaa selkeän tiivistelmän ja tekee siitä harjoituskysymykset ja flashcards — niin opiskelet sen sijaan että luet samaa uudelleen.',
      cta: 'Lataa App Storesta',
      ctaNote: 'Aloitus ilmaiseksi · iPhone',
    },

    valueStrip: [
      { title: 'Kaikki sisään', note: 'ääni, PDF, YouTube, verkko' },
      { title: 'Muistiinpanot sekunneissa', note: 'litterointi + tiivistelmä' },
      { title: 'Aktiivinen kertaus ulos', note: 'kysymykset, flashcards, AI-chat' },
      { title: '6 kieltä', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Kuulostaako tutulta?',
      title: 'Opiskelu tuntuu raskaammalta kuin sen pitäisi',
      items: [
        '”Kahdenkymmenen minuutin jälkeen ajatus lähtee harhailemaan — ja juuri se puolikas tulee tenttiin.”',
        '”Olen lukenut tämän luvun kolmesti enkä muista siitä yhtään mitään.”',
        '”Muistiinpanoni ovat hajallaan kahdessa vihkossa ja viidessä eri sovelluksessa.”',
        '”Kello on keskiyö tenttiä edeltävänä iltana, mikään ei aukea eikä ole ketään keneltä kysyä.”',
      ],
      pivot:
        'Toisinkin voi tehdä. Notix tekee luennoista, PDF-tiedostoista ja videoista opiskelujärjestelmän — automaattisesti.',
    },

    how: {
      title: 'Näin se toimii',
      steps: [
        {
          title: 'Ota talteen mitä vain',
          text: 'Nauhoita luento, lataa ääni tai dokumentti tai liitä YouTube- tai verkkolinkki.',
        },
        {
          title: 'Notix tekee työn',
          text: 'Automaattinen litterointi ja selkeä, jäsennelty tiivistelmä — valmiina sekunneissa.',
        },
        {
          title: 'Opi se oikeasti',
          text: 'Testaa itseäsi harjoituskysymyksillä ja flashcards-korteilla tai kysy muistiinpanoiltasi mitä vain AI-chatissa.',
        },
      ],
    },

    features: {
      title: 'Nauhoita, ymmärrä ja muista — samassa sovelluksessa',
      items: [
        {
          title: 'Älä missaa mitään luennolla',
          text: 'Paina nauhoitusta ja ole läsnä. Litterointi ja valmiit muistiinpanot odottavat, kun luento loppuu.',
        },
        {
          title: 'Viisikymmentä diaa, yksi selkeä tiivistelmä',
          text: 'Lisää PDF-tiedostoja, dioja tai artikkeleita ja saat jäsennellyn tiivistelmän sekunneissa.',
        },
        {
          title: 'YouTube ja verkkolinkit',
          text: 'Liitä linkki, niin Notix tekee videosta tai sivusta muistiinpanot, joista voit hakea.',
        },
        {
          title: 'Löydä aukot ennen kuin tentti löytää',
          text: 'Tee mistä tahansa muistiinpanosta harjoituskysymyksiä — itsensä testaaminen voittaa uudelleen lukemisen joka kerta.',
        },
        {
          title: 'Jotta se jää mieleen',
          text: 'Flashcards suoraan omista muistiinpanoistasi, valmiina kerrattavaksi missä vain.',
        },
        {
          title: 'Muistiinpanot, jotka vastaavat',
          text: 'Kysy yhdestä muistiinpanosta tai koko kirjastostasi — jokainen vastaus linkittää lähteeseensä.',
        },
        {
          title: 'Kaikki yhdessä paikassa',
          text: 'Kansiot, haku ja synkronointi laitteiden välillä — löydä mikä tahansa yksityiskohta miltä tahansa luennolta sekunneissa.',
        },
        {
          title: 'Puhuu sinun kieltäsi',
          text: 'Englanti, espanja, ranska, saksa, venäjä ja puola — tiivistelmät ja kysymykset tulevat valitsemallasi kielellä.',
        },
        {
          title: 'Jaa se PDF:nä',
          text: 'Vie mikä tahansa muistiinpano siistinä PDF-tiedostona kurssikavereille tai kollegoille.',
        },
      ],
    },

    testimonials: {
      title: 'Mitä opiskelijat sanovat Notixista',
      items: [
        {
          quote:
            '”Nauhoitan jokaisen luennon, ja Notix tekee siitä selkeät muistiinpanot, joista oikeasti luen. Arvosanani nousivat tänä lukukautena.”',
          author: 'Maya R. · Opiskelija',
        },
        {
          quote:
            '”Tenttiin kertaaminen on nyt paljon nopeampaa. Haen vain muistiinpanoistani sen sijaan että katsoisin tuntikausia tallenteita uudelleen.”',
          author: 'Daniel K. · Opiskelija',
        },
        {
          quote:
            '”Täydellinen, kun luennot ovat peräkkäin. Painan nauhoitusta, keskityn luentoon, ja tiivistelmä odottaa jälkeenpäin.”',
          author: 'Priya S. · Opiskelija',
        },
      ],
    },

    whatIs: {
      title: 'Mikä Notix on?',
      paragraphs: [
        'Notix on AI Note Taker eli tekoälyllä toimiva muistiinpanosovellus. Nauhoitat luennon, palaverin tai haastattelun, lataat PDF:n tai dokumentin tai liität linkin — YouTube-videon, artikkelin, TikTok- tai Instagram-julkaisun — ja Notix litteroi sen, kirjoittaa selkeän jäsennellyn tiivistelmän ja tekee tiivistelmästä harjoituskysymykset ja flashcards silloin kun sinun täytyy oikeasti muistaa se.',
        'Se ei ole sanelin eikä litterointityökalu. Sanelin antaa takaisin tunnin ääntä, joka pitää kuunnella uudestaan. Litterointityökalu antaa seinällisen tekstiä. Notix antaa sen, minkä olisit joka tapauksessa kirjoittanut ylös: järjestetyt muistiinpanot, joissa olennainen on erotettu täytteestä.',
        'Kaikki päätyy samaan paikkaan. Nauhoitukset, dokumentit, videot, artikkelit ja julkaisut muodostavat yhden haettavan kirjaston — kun tarvitset sen mitä maaliskuussa sanottiin, haet omista muistiinpanoistasi etkä kaiva kuutta sovellusta läpi.',
        'Notixin voi ottaa käyttöön ilmaiseksi, ja se toimii iPhonella.',
      ],
    },

    faqTitle: 'Usein kysytyt kysymykset',

    finalCta: {
      title: 'Älä missaa enää sitä mikä merkitsee',
      text: 'Seuraavasta luennostasi voi tulla selkeät muistiinpanot, harjoituskysymykset ja pakka flashcards-kortteja — automaattisesti.',
      cta: 'Lataa App Storesta',
      note: 'Aloitus ilmaiseksi · iPhone',
    },
  },

  faq: [
    {
      q: 'Miten nauhoitan luennon ja teen siitä muistiinpanot?',
      a: 'Notix nauhoittaa äänen, litteroi sen ja kirjoittaa automaattisesti jäsennellyn tiivistelmän — sinä käynnistät nauhoituksen ja lasket puhelimen pöydälle. Kun luento loppuu, litterointi ja tiivistelmä odottavat valmiina, ja teet niistä harjoituskysymykset tai pakan flashcards-kortteja yhdellä napautuksella. Jos sinulla on jo valmis äänitiedosto muualta, voit ladata sen sovellukseen sen sijaan että nauhoittaisit paikan päällä.',
    },
    {
      q: 'Kuinka tarkasti Notix litteroi puheesta tekstiksi?',
      a: 'Notix litteroi riittävän tarkasti, jotta tuloksella pystyy työskentelemään, ja tarkkuus paranee viikko viikolta — nopeus ja laatu ovat ne kaksi asiaa, joihin käytämme eniten aikaa, ja molemmat ovat parantuneet selvästi viime kuukausina. Selkeä puhe tavallisessa huoneessa palaa lähes sanatarkasti. Meluisa sali, kaukana oleva mikrofoni tai vahva aksentti ovat vaikeampia, ja virheet kasautuvat ammattitermeihin ja erisnimiin — siksi kannattaa vilkaista litterointia ennen kuin luotat yksittäiseen lukuun tai nimeen.',
    },
    {
      q: 'Voinko tehdä tiivistelmän PDF-tiedostoista ja muista dokumenteista?',
      a: 'Kyllä. Lataa PDF, Word-tiedosto, tekstitiedosto tai taulukko — PDF, DOCX, TXT, RTF, CSV, XLS ja XLSX ovat kaikki tuettuja — niin Notix tekee jäsennellyn tiivistelmän, josta voit hakea, jonka pohjalta voit testata itseäsi ja josta saat flashcards-kortit. PDF:ksi tallennetut diat toimivat erityisen hyvin, koska tiivistelmä täydentää ne yhteydet, jotka dioista puuttuvat.',
    },
    {
      q: 'Voinko tehdä muistiinpanot YouTube-videosta tai verkkoartikkelista?',
      a: 'Kyllä. Liitä YouTube-linkki tai artikkelin osoite, niin Notix tekee siitä muistiinpanot, harjoituskysymykset ja flashcards-kortit — samalla tavalla kuin itse nauhoittamastasi äänestä. YouTube-tiivistelmät rakentuvat videon tekstityksistä, joten videota, jonka tekstitykset on poistettu käytöstä, ei vielä pysty tiivistämään.',
    },
    {
      q: 'Osaako Notix tiivistää somejulkaisuja?',
      a: 'Kyllä. Liitä linkki TikTok-, Instagram-, X- tai Reddit-julkaisuun, niin Notix poimii siitä sen mitä siinä oikeasti on — litteroi videon äänen, lukee kuvien ja diojen tekstit ja ottaa kuvatekstin mukaan — ja kirjoittaa tiivistelmän, joka jää sinulle. Näin saat talteen jotain hyödyllistä, jonka ohi scrollasit, ilman että jätät itsellesi linkin jota et koskaan avaa.',
    },
    {
      q: 'Mitä nauhoituksilleni ja tiedostoilleni tapahtuu?',
      a: 'Äänitallenteesi pysyy laitteellasi — sitä ei säilytetä palvelimillamme. Lataamasi dokumentti poistetaan palvelimiltamme heti kun se on käsitelty; jäljelle jää tulos eli litterointi ja tiivistelmä. Kun poistat muistiinpanon, se katoaa kirjastostasi heti ja tuhoutuu lopullisesti 30 päivän kuluttua — tuo aikaikkuna on olemassa siksi, että vahingossa poistetun saa vielä takaisin. Sisältöäsi ei koskaan käytetä tekoälymallien kouluttamiseen, emmekä myy sitä.',
    },
    {
      q: 'Toimiiko Notix ilman verkkoyhteyttä?',
      a: 'Litterointi ja tiivistäminen tehdään palvelimillamme, joten äänen tai PDF:n muuttamiseen muistiinpanoiksi tarvitset yhteyden. Kaikki jo valmis on tallessa laitteellasi, joten muistiinpanot, tiivistelmät, harjoituskysymykset ja flashcards-kortit voi lukea ilman verkkoa — lentokoneessa tai kellarissa ilman kenttää kirjastosi on yhä paikallaan.',
    },
    {
      q: 'Onko Notix ilmainen?',
      a: 'Notixin voi ottaa käyttöön ilmaiseksi: voit nauhoittaa, tehdä muistiinpanoja ja luoda harjoituskysymyksiä ja flashcards-kortteja maksamatta mitään. Notix Pro poistaa rajat — rajattomasti nauhoitustunteja, rajattomasti harjoituskysymyksiä sekä PDF- ja videotiivistelmät. Tarjolla on kuukausitilaus, jossa on 3 päivän ilmainen kokeilujakso, ja vuositilaus, jossa kokeilujakso on 7 päivää — tarkan hinnan omassa valuutassasi näet App Storesta. Mitään ei veloiteta ennen kuin kokeilujakso päättyy.',
    },
    {
      q: 'Voinko perua tilauksen milloin tahansa?',
      a: 'Kyllä. Tilausta hallitaan Apple ID:si kautta App Storessa, ja siellä voit perua sen milloin tahansa parilla napautuksella. Peruminen pysäyttää seuraavan veloituksen; Pro on voimassa jo maksamasi jakson loppuun, ja muistiinpanosi säilyvät kirjastossasi joka tapauksessa.',
    },
    {
      q: 'Mitä kieliä Notix tukee?',
      a: 'Sovelluksen käyttöliittymä on saatavilla englanniksi, espanjaksi, ranskaksi, saksaksi, venäjäksi ja puolaksi. Litterointi ei rajoitu näihin kuuteen — Notix ymmärtää maailman suuret kielet, ja tiivistelmät ja harjoituskysymykset tulevat sillä kielellä jonka olet valinnut, joten voit nauhoittaa yhdellä kielellä ja lukea muistiinpanot toisella.',
    },
  ],

  support: {
    seoTitle: 'Tuki — Notix',
    seoDescription:
      'Apua Notixin käyttöön — AI Note Taker. Ota yhteyttä tukeen, ilmoita virheestä tai kysy tilauksestasi.',
    title: 'Tuki',
    replyTime: 'Vastaamme yleensä 1–2 arkipäivässä.',
    contactCardTitle: 'Lähetä sähköpostia',
    contactCardText: 'Kaikissa kysymyksissä, virheilmoituksissa ja palautteessa:',

    reportingTitle: 'Ongelmasta ilmoittaminen',
    reportingIntro: 'Jotta korjaus löytyy nopeammin, kerro viestissä:',
    reportingItems: [
      'Puhelimesi malli ja iOS-versio',
      'Notixin versio, jos tiedät sen',
      'Mitä teit, mitä odotit ja mitä sen sijaan tapahtui',
      'Kuvakaappaus tai näytön tallenne, jos mahdollista',
    ],

    billingTitle: 'Tilaukset ja laskutus',
    billingTextLead:
      'Notix Pro veloitetaan Apple ID:si kautta. Voit hallita tai perua tilauksen milloin tahansa laitteesi asetuksista:',
    billingSettingsPath: 'Asetukset → nimesi → Tilaukset',
    billingRefundsLead:
      'App Store -ostojen hyvitykset hoitaa Apple — hyvitystä haetaan osoitteessa',

    accountTitle: 'Tili ja tiedot',
    accountTextLead: 'Voit poistaa tilisi ja kaikki siihen liittyvät tiedot suoraan sovelluksessa:',
    accountSettingsPath: 'Settings → Account details → Delete account',
    accountTextTail:
      'Tilisi ja tietosi poistetaan lopullisesti 30 päivän kuluttua; jos kirjaudut sisään tuona aikana, poisto peruuntuu.',
    accountPrivacyLead: 'Tietoja koskevissa kysymyksissä lue',
    accountPrivacyLink: 'tietosuojaseloste',
    accountPrivacyTail: 'tai lähetä meille sähköpostia.',

    recordingTitle: 'Luentojen ja palaverien nauhoittaminen',
    recordingText:
      'Notix auttaa tallentamaan sen, minkä tallentamiseen sinulla on oikeus. Nauhoittamisen säännöt vaihtelevat oppilaitoksittain, työpaikoittain ja maittain, ja joissakin paikoissa kaikkien huoneessa olevien on suostuttava ennen aloitusta — tarkista siis sinua koskevat säännöt ennen kuin painat nauhoitusta.',
  },

  notFound: {
    seoTitle: 'Sivua ei löytynyt — Notix',
    seoDescription:
      'Sivua ei löytynyt — Notix. Etsimääsi sivua ei ole olemassa tai se on siirtynyt.',
    titleLead: '404 — tämä sivu ei tehnyt',
    titleEmphasis: 'muistiinpanoja',
    text: 'Etsimääsi sivua ei ole olemassa tai se on siirtynyt.',
    cta: 'Takaisin etusivulle',
  },

  resetPassword: {
    seoTitle: 'Palauta salasanasi — Notix',
    seoDescription:
      'Avaa tämä linkki puhelimella, johon Notix on asennettu, ja aseta uusi salasana.',
    title: 'Avaa tämä linkki puhelimellasi',
    text: 'Salasanan vaihto tapahtuu Notix-sovelluksessa. Avaa sähköpostin linkki sillä iPhonella tai Android-puhelimella, johon Notix on asennettu — pääset suoraan uuden salasanan näkymään.',
    noAppText:
      'Eikö Notixia ole vielä puhelimessa? Asenna sovellus ensin ja napauta linkkiä sitten uudelleen. Linkki toimii 30 minuuttia.',
    cta: 'Lataa App Storesta',
  },
} satisfies Dictionary;
