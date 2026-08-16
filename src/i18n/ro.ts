/**
 * Dicționar român.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-румынски (Google Ads, Румыния, ro,
 * август 2026). Работают обычные категорийные слова: «notițe» (4400/мес),
 * «flashcards» (3600/мес, английское слово — румынских эквивалентов «carduri de
 * învățare», «fișe de învățare» не ищут вообще), «rezumat» (3600/мес), «quiz»
 * (4400/мес — тоже английское, румынского аналога с объёмом нет), «audio in
 * text» (880/мес), «transcriere» (320/мес), «transcriere audio in text»
 * (210/мес), «aplicatie inregistrare voce» (210/мес), «rezumat text» (170/мес),
 * «speech to text romana» (170/мес), «aplicatie pentru notite» (50/мес).
 * «ai note taker» — всего 70/мес, но это единственная форма AI-запроса с
 * объёмом: румынские кальки («notite ai») мертвы, поэтому AI-термин оставлен
 * по-английски в seoTitle/ogTitle, а нести заголовок он не может.
 *
 * ДИАКРИТИКА. Румыны почти всегда ищут без диакритики: формы «transcriere audio
 * în text» и «aplicație notițe» возвращают из Google Ads пустоту, а те же слова
 * без диакритики — 210 и 10/мес соответственно. Тексту это ничего не меняет:
 * Google нормализует диакритику при сопоставлении, а страница без ș/ț выглядит
 * безграмотно. Поэтому вся копия — с правильной диакритикой (ș, ț, ă, î, â), а
 * цифры выше приведены в той форме, в которой их отдаёт Google Ads.
 *
 * Остальное — перевод с сохранением тона: короткие фразы, обращение на «tu»,
 * без канцелярита. «Notix» не склоняется — это имя продукта.
 */
import type { Dictionary } from './en';

export const ro = {
  path: 'ro',
  hreflang: 'ro',
  nativeName: 'Română',

  nav: {
    features: 'Funcții',
    faq: 'Întrebări',
    examples: 'Exemple',
    support: 'Asistență',
    getApp: 'Descarcă',
    menu: 'Meniu',
    language: 'Limbă',
  },

  footer: {
    privacy: 'Politica de confidențialitate',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Această pagină este disponibilă și în limba ta',
    cta: 'Schimbă',
    dismiss: 'Închide',
  },

  home: {
    seoTitle:
      'Notix — AI note taker: notițe din cursuri, audio în text, rezumat PDF și YouTube',
    seoDescription:
      'Notix înregistrează cursurile și ședințele, transformă audio în text și face rezumat din PDF-uri, videoclipuri YouTube și articole. Quiz-urile și flashcards se creează singure. Aplicație de notițe pentru iPhone.',
    ogTitle: 'Notix — AI note taker',
    ogDescription:
      'Cursurile, PDF-urile și videoclipurile devin notițe, quiz-uri și flashcards. Întreabă-ți notițele și ajungi pregătit la examen.',
    ogImageAlt: 'Notix — transformă ce înveți în notițe care te învață',
    schemaDescription:
      'Notix transformă cursurile, PDF-urile, videoclipurile de pe YouTube și înregistrările vocale în notițe clare, quiz-uri și flashcards. Transcriere, rezumat și chat cu notițele tale.',

    hero: {
      badge: 'Asistent de studiu pentru iPhone',
      titleLead: 'Transformă ce înveți în notițe care',
      titleEmphasis: 'te învață',
      subtitle:
        'Înregistrează un curs, încarcă un PDF sau lipește un link de YouTube. Notix face transcrierea, scrie un rezumat clar și scoate din el quiz-uri și flashcards — ca să înveți, nu să recitești.',
      cta: 'Descarcă din App Store',
      ctaNote: 'Începi gratis · iPhone',
    },

    valueStrip: [
      { title: 'Orice la intrare', note: 'audio, PDF, YouTube, web' },
      { title: 'Notițe în câteva secunde', note: 'transcriere și rezumat' },
      { title: 'Recapitulare activă la ieșire', note: 'quiz-uri, flashcards, chat AI' },
      { title: '6 limbi', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Îți sună cunoscut?',
      title: 'Învățatul e mai greu decât ar trebui',
      items: [
        '„După douăzeci de minute de curs îmi zboară mintea — și pierd exact jumătatea care pică la examen.”',
        '„Am citit capitolul ăsta de trei ori și tot nu-mi amintesc nimic din el.”',
        '„Notițele mele sunt împrăștiate în două caiete și cinci aplicații diferite.”',
        '„E miezul nopții înainte de examen, nu înțeleg nimic și nu am pe cine să întreb.”',
      ],
      pivot:
        'Se poate și altfel. Notix transformă cursurile, PDF-urile și videoclipurile într-un sistem de învățat — singur.',
    },

    how: {
      title: 'Cum funcționează — simplu',
      steps: [
        {
          title: 'Înregistrează orice',
          text: 'Înregistrează un curs, încarcă un fișier audio sau un document, lipește un link de YouTube sau de articol.',
        },
        {
          title: 'Notix face treaba',
          text: 'Transcriere automată și un rezumat clar, structurat — gata în câteva secunde.',
        },
        {
          title: 'Învață pe bune',
          text: 'Testează-te cu quiz-uri și flashcards sau întreabă-ți notițele orice în chatul AI.',
        },
      ],
    },

    features: {
      title: 'Înregistrează, înțelege și ține minte — într-o singură aplicație',
      items: [
        {
          title: 'La curs nu-ți mai scapă nimic',
          text: 'Apeși înregistrare și ești prezent. Transcrierea și notițele ordonate te așteaptă după curs.',
        },
        {
          title: 'Cincizeci de slide-uri, un rezumat clar',
          text: 'Încarcă PDF-uri, slide-uri sau articole și primești un rezumat structurat în câteva secunde.',
        },
        {
          title: 'YouTube și linkuri web',
          text: 'Lipește un link și Notix transformă videoclipul sau pagina în notițe prin care poți căuta.',
        },
        {
          title: 'Îți vezi lipsurile înaintea examenului',
          text: 'Scoate întrebări din orice notiță — recapitularea activă bate recitirea de fiecare dată.',
        },
        {
          title: 'Ca să-ți rămână în cap',
          text: 'Flashcards create direct din notițele tale, gata de o recapitulare rapidă oriunde.',
        },
        {
          title: 'Notițele tale îți răspund',
          text: 'Întreabă despre o notiță sau despre toată biblioteca — fiecare răspuns trimite la sursă.',
        },
        {
          title: 'Totul într-un singur loc',
          text: 'Foldere, căutare și sincronizare — găsești orice detaliu din orice curs în câteva secunde.',
        },
        {
          title: 'Vorbește limba ta',
          text: 'Engleză, spaniolă, franceză, germană, rusă și poloneză — rezumatele și quiz-urile urmează limba ta.',
        },
        {
          title: 'Trimite-l ca PDF',
          text: 'Exportă orice notiță într-un PDF îngrijit, pentru colegi de facultate sau de birou.',
        },
      ],
    },

    testimonials: {
      title: 'Ce spun studenții despre Notix',
      items: [
        {
          quote:
            '„Înregistrez fiecare curs, iar Notix îl transformă în notițe clare din care chiar învăț. Semestrul ăsta mi-au crescut notele.”',
          author: 'Maya R. · Studentă',
        },
        {
          quote:
            '„Recapitularea înainte de examene e mult mai rapidă acum. Caut prin notițe în loc să reascult ore de înregistrări.”',
          author: 'Daniel K. · Student',
        },
        {
          quote:
            '„Perfect când ai cursuri unul după altul. Apăs înregistrare, mă concentrez la curs, iar rezumatul mă așteaptă gata.”',
          author: 'Priya S. · Studentă',
        },
      ],
    },

    whatIs: {
      title: 'Ce este Notix?',
      paragraphs: [
        'Notix este o aplicație care ia notițe în locul tău. Înregistrezi un curs, o ședință sau un interviu, încarci un PDF sau un document ori lipești un link — un videoclip de pe YouTube, un articol, o postare de pe TikTok sau Instagram — iar Notix face transcrierea, scrie un rezumat clar și structurat și îl transformă în quiz-uri și flashcards atunci când chiar trebuie să ții minte materialul.',
        'Nu este un reportofon și nu este un serviciu de transcriere. Un reportofon îți dă înapoi o oră de audio pe care trebuie să o asculți din nou. Un serviciu de transcriere îți dă un zid de text. Notix îți dă exact lucrul pe care oricum aveai de gând să-l scrii: notițe ordonate, cu ideile importante separate de umplutură.',
        'Totul ajunge într-un singur loc. Înregistrările, documentele, videoclipurile, articolele și postările devin o singură bibliotecă prin care poți căuta — așa că, atunci când ai nevoie de ce s-a spus în martie, cauți prin notițele tale, nu prin șase aplicații.',
        'Notix e gratis la început și merge pe iPhone.',
      ],
    },

    faqTitle: 'Întrebări frecvente',

    finalCta: {
      title: 'Nu mai pierzi ce contează',
      text: 'Următorul tău curs poate deveni notițe clare, un quiz și un set de flashcards — de la sine.',
      cta: 'Descarcă din App Store',
      note: 'Începi gratis · iPhone',
    },
  },

  faq: [
    {
      q: 'Cum înregistrez un curs și îl transform în notițe?',
      a: 'Notix înregistrează audio, face transcrierea și scrie singur un rezumat structurat — tu pornești înregistrarea și lași telefonul jos. Când se termină, transcrierea și rezumatul sunt deja acolo, iar din ele poți genera un quiz sau un set de flashcards dintr-o atingere. Dacă ai deja un fișier audio înregistrat în altă parte, îl poți încărca în loc să înregistrezi pe loc.',
    },
    {
      q: 'Cât de exactă e transcrierea audio în text?',
      a: 'Notix transcrie destul de exact cât să poți lucra cu rezultatul și se îmbunătățește de la o săptămână la alta — viteza și calitatea sunt cele două lucruri la care lucrăm cel mai mult, iar amândouă au crescut serios în ultimele luni. O voce clară într-o încăpere obișnuită se întoarce aproape cuvânt cu cuvânt. O sală zgomotoasă, un microfon aflat departe sau un accent puternic sunt mai grele, iar greșelile se adună la termeni tehnici și nume proprii — așa că merită să arunci un ochi pe transcriere înainte să te bazezi pe o cifră sau pe un nume anume.',
    },
    {
      q: 'Pot face rezumat din PDF-uri și documente?',
      a: 'Da. Încarcă un PDF, un document Word, un fișier text sau un tabel — sunt acceptate PDF, DOCX, TXT, RTF, CSV, XLS și XLSX — iar Notix scoate un rezumat structurat prin care poți căuta, pe care te poți testa cu quiz-uri sau din care poți face flashcards. Prezentările exportate în PDF merg deosebit de bine, pentru că rezumatul completează legăturile pe care slide-urile le lasă pe dinafară.',
    },
    {
      q: 'Pot face notițe din videoclipuri de pe YouTube și din articole web?',
      a: 'Da. Lipește linkul unui videoclip de pe YouTube sau adresa unui articol, iar Notix îl transformă în notițe, quiz-uri și flashcards — la fel cum face cu audio înregistrat de tine. Rezumatele de pe YouTube se construiesc din subtitrările videoclipului, așa că un videoclip cu subtitrările dezactivate nu poate fi rezumat deocamdată.',
    },
    {
      q: 'Notix face rezumat la postări de pe rețelele sociale?',
      a: 'Da. Lipește linkul unei postări de pe TikTok, Instagram, X sau Reddit, iar Notix scoate ce e cu adevărat în ea: transcrie audio dintr-un videoclip, citește textul de pe imagini și slide-uri, adaugă și descrierea — apoi scrie un rezumat care îți rămâne. E felul în care salvezi ceva util pe lângă care ai dat scroll, fără să-ți lași un link pe care nu-l vei mai deschide niciodată.',
    },
    {
      q: 'Ce se întâmplă cu înregistrările și fișierele mele?',
      a: 'Înregistrarea audio rămâne pe dispozitivul tău — nu o păstrăm pe serverele noastre. Un document pe care îl încarci este șters de pe serverele noastre imediat ce a fost procesat; ce rămâne este rezultatul: transcrierea și rezumatul. Când ștergi o notiță, dispare pe loc din bibliotecă și este ștearsă definitiv după 30 de zile — fereastra asta există ca o ștergere din greșeală să mai poată fi anulată. Conținutul tău nu este folosit niciodată pentru antrenarea modelelor AI și nu îl vindem.',
    },
    {
      q: 'Notix funcționează offline?',
      a: 'Transcrierea și rezumatul se fac pe serverele noastre, deci ai nevoie de conexiune ca să transformi un audio sau un PDF în notițe. Tot ce a fost deja generat rămâne pe dispozitiv, așa că notițele, rezumatele, quiz-urile și flashcards se citesc offline — în avion sau într-o sală de la subsol fără semnal, biblioteca ta e tot acolo.',
    },
    {
      q: 'Notix e gratis?',
      a: 'Notix e gratis la început: poți înregistra, crea notițe și face quiz-uri și flashcards fără să plătești. Notix Pro scoate limitele — ore de înregistrare nelimitate, întrebări de quiz nelimitate și rezumate din PDF-uri și videoclipuri. Există un plan lunar cu 3 zile de probă gratuită și unul anual cu 7 zile de probă gratuită; prețul exact în moneda ta îl vezi în App Store. Nu se percepe nimic înainte să se termine perioada de probă.',
    },
    {
      q: 'Pot renunța oricând?',
      a: 'Da. Abonamentul este gestionat prin Apple ID în App Store și îl poți anula acolo oricând, din câteva atingeri. Anularea oprește plata următoare; Pro rămâne activ până la finalul perioadei pe care ai plătit-o deja, iar notițele tale rămân în bibliotecă în ambele cazuri.',
    },
    {
      q: 'Ce limbi acceptă Notix?',
      a: 'Interfața aplicației este disponibilă în engleză, spaniolă, franceză, germană, rusă și poloneză. Transcrierea nu se limitează la aceste șase — Notix se descurcă cu principalele limbi ale lumii, iar rezumatele și quiz-urile vin în limba pe care ai ales-o, așa că poți înregistra într-o limbă și citi notițele în alta.',
    },
  ],

  support: {
    seoTitle: 'Asistență — Notix',
    seoDescription:
      'Ajutor pentru Notix: cum scrii echipei de asistență, cum raportezi o problemă și cum îți gestionezi abonamentul.',
    title: 'Asistență',
    replyTime: 'De obicei răspundem în 1–2 zile lucrătoare.',
    contactCardTitle: 'Scrie-ne',
    contactCardText: 'Pentru orice întrebare, problemă sau idee:',

    reportingTitle: 'Cum raportezi o problemă',
    reportingIntro: 'Ca să rezolvăm mai repede, spune-ne și:',
    reportingItems: [
      'Modelul dispozitivului și versiunea de iOS',
      'Versiunea de Notix, dacă o știi',
      'Ce ai făcut, ce te așteptai să se întâmple și ce s-a întâmplat de fapt',
      'O captură de ecran sau o înregistrare a ecranului, dacă se poate',
    ],

    billingTitle: 'Abonament și plăți',
    billingTextLead:
      'Notix Pro se plătește prin Apple ID. Îți poți gestiona sau anula abonamentul oricând din setările dispozitivului:',
    billingSettingsPath: 'Setări → numele tău → Abonamente',
    billingRefundsLead:
      'Rambursările pentru achizițiile din App Store sunt gestionate de Apple — le poți cere la',

    accountTitle: 'Cont și date',
    accountTextLead:
      'Îți poți șterge contul și toate datele legate de el direct din aplicație:',
    accountSettingsPath: 'Settings → Account details → Delete account',
    accountTextTail:
      'Contul și datele sunt șterse definitiv după 30 de zile; dacă te autentifici din nou în acest interval, ștergerea se anulează.',
    accountPrivacyLead: 'Pentru întrebări despre date, vezi',
    accountPrivacyLink: 'politica de confidențialitate',
    accountPrivacyTail: 'sau scrie-ne.',

    recordingTitle: 'Înregistrarea cursurilor și a ședințelor',
    recordingText:
      'Notix te ajută să salvezi materialul pe care ai dreptul să îl salvezi. Regulile privind înregistrarea diferă de la o școală la alta, de la un loc de muncă la altul și de la o țară la alta, iar pe alocuri toți cei din încăpere trebuie să fie de acord înainte să începi — așa că verifică regulile care ți se aplică înainte să apeși înregistrare.',
  },

  notFound: {
    seoTitle: 'Pagină negăsită — Notix',
    seoDescription:
      'Pagină negăsită — Notix. Pagina pe care o cauți nu există sau a fost mutată.',
    titleLead: '404 — pagina asta nu și-a luat',
    titleEmphasis: 'nicio notiță',
    text: 'Pagina pe care o cauți nu există sau a fost mutată.',
    cta: 'Înapoi la pagina principală',
  },

  resetPassword: {
    seoTitle: 'Resetează-ți parola — Notix',
    seoDescription:
      'Deschide acest link pe telefonul pe care ai instalat aplicația Notix ca să setezi o parolă nouă.',
    title: 'Deschide linkul pe telefon',
    text: 'Parola se schimbă în aplicația Notix. Deschide linkul din e-mail pe iPhone-ul sau pe telefonul Android pe care ai instalat Notix — te duce direct la ecranul de parolă nouă.',
    noAppText:
      'Încă nu ai un telefon cu Notix? Instalează întâi aplicația, apoi atinge linkul din nou. Linkul e valabil 30 de minute.',
    cta: 'Descarcă din App Store',
  },
} satisfies Dictionary;
