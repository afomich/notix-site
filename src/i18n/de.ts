/**
 * Deutsches Wörterbuch.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-немецки. Дословные кальки английских
 * AI-формулировок в Германии не ищут («ki notizen» — 70 запросов в месяц), зато
 * работают родные категорийные слова («notizen app», «transkription»,
 * «audio transkribieren», «zusammenfassen», «karteikarten») и английские
 * AI-термины как есть («ai note taker» — 390/мес). Остальное — перевод с
 * сохранением тона: короткие фразы, обращение на «du», без канцелярита.
 *
 * «Notix» не склоняется — это имя продукта.
 */
import type { Dictionary } from './en';

export const de = {
  path: 'de',
  hreflang: 'de',
  nativeName: 'Deutsch',

  nav: {
    features: 'Funktionen',
    faq: 'FAQ',
    examples: 'Beispiele',
    support: 'Support',
    getApp: 'App holen',
    menu: 'Menü',
    language: 'Sprache',
  },

  footer: {
    privacy: 'Datenschutz',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Diese Seite gibt es auch in deiner Sprache',
    cta: 'Wechseln',
    dismiss: 'Schließen',
  },

  home: {
    seoTitle:
      'Notix — AI Note Taker: Vorlesungen aufnehmen, transkribieren, PDFs zusammenfassen',
    seoDescription:
      'Notix nimmt Vorlesungen und Meetings auf, transkribiert das Audio und fasst PDFs, YouTube-Videos und Artikel zusammen — mit Quiz und Karteikarten. Kostenlos starten, fürs iPhone.',
    ogTitle: 'Notix — AI Note Taker',
    ogDescription:
      'Aus Vorlesungen, PDFs und YouTube-Videos werden Notizen, Quiz und Karteikarten. Frag deine Notizen und sei schneller prüfungsbereit.',
    ogImageAlt: 'Notix — aus allem, was du lernst, werden Notizen, die dich abfragen',
    schemaDescription:
      'Notix verwandelt Vorlesungen, PDFs, YouTube-Videos und Sprachaufnahmen in klare Notizen, Quiz und Karteikarten. Transkribieren, zusammenfassen und mit den eigenen Notizen chatten.',

    hero: {
      badge: 'Lern-Assistent fürs iPhone',
      titleLead: 'Aus allem, was du lernst, werden Notizen,',
      titleEmphasis: 'die dich abfragen',
      subtitle:
        'Vorlesung aufnehmen, PDF hochladen oder YouTube-Link einfügen. Notix transkribiert, schreibt eine klare Zusammenfassung und macht daraus Quiz und Karteikarten — damit du lernst statt nochmal liest.',
      cta: 'Im App Store laden',
      ctaNote: 'Kostenlos starten · iPhone',
    },

    valueStrip: [
      { title: 'Alles rein', note: 'Audio, PDF, YouTube, Web' },
      { title: 'Notizen in Sekunden', note: 'Transkript + Zusammenfassung' },
      { title: 'Aktiv abrufen', note: 'Quiz, Karteikarten, KI-Chat' },
      { title: '6 Sprachen', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Kommt dir bekannt vor?',
      title: 'Lernen ist anstrengender, als es sein müsste',
      items: [
        '„Nach zwanzig Minuten Vorlesung bin ich weg — und verpasse die Hälfte, die in der Prüfung drankommt."',
        '„Ich habe das Kapitel dreimal gelesen und weiß trotzdem nichts mehr."',
        '„Meine Notizen liegen in zwei Heften und fünf verschiedenen Apps."',
        '„Mitternacht vor der Prüfung, ich verstehe nichts, und fragen kann ich niemanden."',
      ],
      pivot:
        'Es geht auch anders. Notix macht aus Vorlesungen, PDFs und Videos ein Lernsystem — automatisch.',
    },

    how: {
      title: 'So funktioniert es',
      steps: [
        {
          title: 'Alles aufnehmen',
          text: 'Vorlesung aufnehmen, Audio oder Dokument hochladen oder einen YouTube- bzw. Web-Link einfügen.',
        },
        {
          title: 'Notix macht die Arbeit',
          text: 'Automatische Transkription und eine klare, strukturierte Zusammenfassung — in Sekunden fertig.',
        },
        {
          title: 'Wirklich behalten',
          text: 'Teste dich mit Quiz und Karteikarten oder frag deine Notizen im KI-Chat.',
        },
      ],
    },

    features: {
      title: 'Aufnehmen, verstehen, behalten — in einer App',
      items: [
        {
          title: 'In der Vorlesung nichts verpassen',
          text: 'Auf Aufnahme tippen und zuhören. Transkript und strukturierte Notizen warten danach auf dich.',
        },
        {
          title: 'Fünfzig Folien, eine klare Zusammenfassung',
          text: 'PDFs, Folien oder Artikel hochladen und in Sekunden eine klare, strukturierte Zusammenfassung bekommen.',
        },
        {
          title: 'YouTube & Web-Links',
          text: 'Link einfügen — Notix macht aus dem Video oder der Seite durchsuchbare Notizen.',
        },
        {
          title: 'Lücken finden, bevor die Prüfung sie findet',
          text: 'Aus jeder Notiz werden Übungsfragen — aktives Abrufen schlägt Nochmal-Lesen jedes Mal.',
        },
        {
          title: 'Damit es hängen bleibt',
          text: 'Karteikarten direkt aus deinen Notizen — überall schnell wiederholen.',
        },
        {
          title: 'Notizen, die antworten',
          text: 'Frag zu einer Notiz oder deiner ganzen Bibliothek — jede Antwort verlinkt ihre Quelle.',
        },
        {
          title: 'Alles an einem Ort',
          text: 'Ordner, Suche und Sync über alle Geräte — jedes Detail aus jeder Vorlesung in Sekunden finden.',
        },
        {
          title: 'Spricht deine Sprache',
          text: 'Englisch, Spanisch, Französisch, Deutsch, Russisch und Polnisch — Zusammenfassungen und Quiz folgen deiner Sprache.',
        },
        {
          title: 'Als PDF teilen',
          text: 'Jede Notiz als sauberes PDF exportieren — für Kommilitonen oder Kollegen.',
        },
      ],
    },

    testimonials: {
      title: 'Das sagen Studierende über Notix',
      items: [
        {
          quote:
            '„Ich nehme jede Vorlesung auf, und Notix macht daraus saubere Notizen, mit denen ich wirklich lerne. Meine Noten sind dieses Semester besser geworden."',
          author: 'Maya R. · Studentin',
        },
        {
          quote:
            '„Die Prüfungsvorbereitung geht jetzt viel schneller. Ich suche in meinen Notizen, statt stundenlange Aufnahmen nochmal anzuhören."',
          author: 'Daniel K. · Student',
        },
        {
          quote:
            '„Perfekt, wenn die Vorlesungen direkt aufeinander folgen. Aufnahme starten, zuhören — und die Zusammenfassung wartet danach."',
          author: 'Priya S. · Studentin',
        },
      ],
    },

    whatIs: {
      title: 'Was ist Notix?',
      paragraphs: [
        'Notix ist ein AI Note Taker. Du nimmst eine Vorlesung, ein Meeting oder ein Interview auf, lädst ein PDF oder ein Dokument hoch oder fügst einen Link ein — ein YouTube-Video, einen Artikel, einen TikTok- oder Instagram-Post — und Notix transkribiert das, schreibt eine klare strukturierte Zusammenfassung und macht daraus Quiz und Karteikarten, wenn du den Stoff wirklich behalten musst.',
        'Es ist kein Diktiergerät und kein Transkriptions-Tool. Ein Diktiergerät gibt dir eine Stunde Audio zurück, die du dir nochmal anhören musst. Ein Transkriptions-Tool gibt dir eine Wand aus Text. Notix gibt dir das, was du ohnehin aufschreiben wolltest: geordnete Notizen, in denen das Wichtige vom Füllmaterial getrennt ist.',
        'Alles landet an einem Ort. Aufnahmen, Dokumente, Videos, Artikel und Posts werden zu einer einzigen durchsuchbaren Bibliothek — wenn du also wissen willst, was im März gesagt wurde, suchst du in deinen eigenen Notizen statt in sechs Apps.',
        'Notix ist kostenlos zum Starten und läuft auf dem iPhone.',
      ],
    },

    faqTitle: 'Häufige Fragen',

    finalCta: {
      title: 'Nie wieder das Wichtige verpassen',
      text: 'Deine nächste Vorlesung könnte ein Satz klarer Notizen, ein Quiz und ein Stapel Karteikarten sein — automatisch.',
      cta: 'Im App Store laden',
      note: 'Kostenlos starten · iPhone',
    },
  },

  faq: [
    {
      q: 'Wie nehme ich eine Vorlesung auf und mache Notizen daraus?',
      a: 'Notix nimmt das Audio auf, transkribiert es und schreibt automatisch eine strukturierte Zusammenfassung — du startest die Aufnahme und legst das Handy weg. Wenn sie endet, warten Transkript und Zusammenfassung auf dich, und du machst daraus mit einem Tipp ein Quiz oder einen Karteikarten-Stapel. Wenn du eine Audiodatei schon woanders hast, kannst du sie hochladen statt live aufzunehmen.',
    },
    {
      q: 'Wie genau ist die Transkription?',
      a: 'Notix transkribiert genau genug, um damit zu arbeiten, und wird jede Woche besser — Geschwindigkeit und Qualität sind das, woran wir am meisten arbeiten, und beides hat sich in den letzten Monaten deutlich verbessert. Klare Sprache in einem normalen Raum kommt fast wortgetreu zurück. Ein lauter Hörsaal, ein weit entferntes Mikrofon oder ein starker Akzent sind schwieriger, und Fehler häufen sich bei Fachbegriffen und Eigennamen — ein Blick ins Transkript lohnt sich also, bevor du dich auf eine bestimmte Zahl oder einen Namen verlässt.',
    },
    {
      q: 'Kann ich PDFs und Dokumente zusammenfassen lassen?',
      a: 'Ja. Lade ein PDF, ein Word-Dokument, eine Textdatei oder eine Tabelle hoch — PDF, DOCX, TXT, RTF, CSV, XLS und XLSX werden unterstützt — und Notix erstellt eine strukturierte Zusammenfassung, die du durchsuchen, per Quiz abfragen oder in Karteikarten verwandeln kannst. Als PDF exportierte Foliensätze funktionieren besonders gut, weil die Zusammenfassung die Zusammenhänge ergänzt, die auf den Folien fehlen.',
    },
    {
      q: 'Kann ich Notizen aus YouTube-Videos und Artikeln machen?',
      a: 'Ja. Füge einen YouTube-Link oder die URL eines Artikels ein, und Notix macht daraus Notizen, Quiz und Karteikarten — genauso wie bei selbst aufgenommenem Audio. YouTube-Zusammenfassungen entstehen aus den Untertiteln des Videos, ein Video mit deaktivierten Untertiteln lässt sich also noch nicht zusammenfassen.',
    },
    {
      q: 'Kann Notix Social-Media-Posts zusammenfassen?',
      a: 'Ja. Füge einen Link zu einem TikTok-, Instagram-, X- oder Reddit-Post ein, und Notix holt heraus, was wirklich drinsteckt — es transkribiert das Audio eines Videos, liest den Text auf Bildern und Folien und nimmt die Bildunterschrift dazu — und schreibt dann eine Zusammenfassung, die dir bleibt. So bewahrst du etwas Nützliches, an dem du vorbeigescrollt bist, ohne dir einen Link zu speichern, den du nie wieder öffnest.',
    },
    {
      q: 'Was passiert mit meinen Aufnahmen und Dateien?',
      a: 'Deine Audioaufnahme bleibt auf deinem Gerät — sie wird nicht auf unseren Servern gespeichert. Ein hochgeladenes Dokument wird von unseren Servern gelöscht, sobald es verarbeitet ist; was bleibt, ist das Ergebnis: Transkript und Zusammenfassung. Wenn du eine Notiz löschst, verschwindet sie sofort aus deiner Bibliothek und wird nach 30 Tagen endgültig gelöscht — dieses Fenster gibt es, damit sich ein versehentliches Löschen rückgängig machen lässt. Deine Inhalte werden nie zum Training von KI-Modellen verwendet, und wir verkaufen sie nicht.',
    },
    {
      q: 'Funktioniert Notix offline?',
      a: 'Transkription und Zusammenfassung laufen auf unseren Servern, du brauchst also eine Verbindung, um Audio oder ein PDF in Notizen zu verwandeln. Alles bereits Erstellte liegt auf deinem Gerät, deine Notizen, Zusammenfassungen, Quiz und Karteikarten sind also offline lesbar — im Flugzeug oder im Kellerraum ohne Empfang ist deine Bibliothek trotzdem da.',
    },
    {
      q: 'Ist Notix kostenlos?',
      a: 'Notix ist kostenlos zum Starten: Du kannst aufnehmen, Notizen erstellen und Quiz und Karteikarten machen, ohne zu zahlen. Notix Pro hebt die Limits auf — unbegrenzte Aufnahmestunden, unbegrenzte Quizfragen sowie Zusammenfassungen von PDFs und Videos. Es gibt ein Monats-Abo mit 3 Tagen kostenlos und ein Jahres-Abo mit 7 Tagen kostenlos — den genauen Preis in deiner Währung siehst du im App Store. Vor dem Ende des Testzeitraums wird nichts abgebucht.',
    },
    {
      q: 'Kann ich jederzeit kündigen?',
      a: 'Ja. Das Abo läuft über deine Apple ID im App Store, und du kannst es dort jederzeit mit ein paar Tipps kündigen. Die Kündigung stoppt die nächste Zahlung; Pro bleibt bis zum Ende des bereits bezahlten Zeitraums aktiv, und deine Notizen bleiben so oder so in deiner Bibliothek.',
    },
    {
      q: 'Welche Sprachen unterstützt Notix?',
      a: 'Die App-Oberfläche gibt es auf Englisch, Spanisch, Französisch, Deutsch, Russisch und Polnisch. Die Transkription ist nicht auf diese sechs beschränkt — Notix versteht die großen Weltsprachen, und deine Zusammenfassungen und Quiz kommen in der Sprache zurück, die du gewählt hast. Du kannst also in einer Sprache aufnehmen und die Notizen in einer anderen lesen.',
    },
  ],

  support: {
    seoTitle: 'Support und Hilfe — Notix',
    seoDescription:
      'Hilfe zu Notix — AI Note Taker. Schreib unserem Support, melde einen Fehler oder klär Fragen zu deinem Abo.',
    title: 'Support',
    replyTime: 'Wir antworten normalerweise innerhalb von 1–2 Werktagen.',
    contactCardTitle: 'Schreib uns',
    contactCardText: 'Für jede Frage, jeden Fehler und jedes Feedback:',

    reportingTitle: 'Ein Problem melden',
    reportingIntro: 'Damit wir es schneller beheben können, schick uns bitte:',
    reportingItems: [
      'Dein Gerätemodell und die iOS-Version',
      'Die Notix-Version, falls du sie kennst',
      'Was du getan hast, was du erwartet hast und was stattdessen passiert ist',
      'Einen Screenshot oder eine Bildschirmaufnahme, wenn möglich',
    ],

    billingTitle: 'Abo & Zahlung',
    billingTextLead:
      'Notix Pro wird über deine Apple ID abgerechnet. Du kannst dein Abo jederzeit in den Geräteeinstellungen verwalten oder kündigen:',
    billingSettingsPath: 'Einstellungen → dein Name → Abonnements',
    billingRefundsLead:
      'Rückerstattungen für App-Store-Käufe wickelt Apple ab — anfragen kannst du sie unter',

    accountTitle: 'Konto & Daten',
    accountTextLead:
      'Du kannst dein Konto samt allen Daten direkt in der App löschen:',
    accountSettingsPath: 'Einstellungen → Kontodetails → Konto löschen',
    accountTextTail:
      'Konto und Daten werden nach 30 Tagen endgültig gelöscht; wenn du dich in dieser Zeit wieder anmeldest, wird die Löschung abgebrochen.',
    accountPrivacyLead: 'Fragen zu Daten beantwortet unsere',
    accountPrivacyLink: 'Datenschutzerklärung',
    accountPrivacyTail: 'oder schreib uns.',

    recordingTitle: 'Vorlesungen und Meetings aufnehmen',
    recordingText:
      'Notix hilft dir, festzuhalten, was du festhalten darfst. Die Regeln für Aufnahmen unterscheiden sich je nach Hochschule, Arbeitgeber und Land, und mancherorts müssen alle im Raum vorher zustimmen — prüf also die Regeln, die für dich gelten, bevor du die Aufnahme startest.',
  },

  notFound: {
    seoTitle: 'Seite nicht gefunden — Notix',
    seoDescription:
      'Seite nicht gefunden — Notix. Die gesuchte Seite existiert nicht oder ist umgezogen.',
    titleLead: '404 — diese Seite hat sich',
    titleEmphasis: 'nichts notiert',
    text: 'Die Seite, die du suchst, existiert nicht oder ist umgezogen.',
    cta: 'Zur Startseite',
  },

  resetPassword: {
    seoTitle: 'Passwort zurücksetzen — Notix',
    seoDescription:
      'Öffne diesen Link auf dem Handy, auf dem die Notix App installiert ist, um ein neues Passwort zu setzen.',
    title: 'Öffne diesen Link auf deinem Handy',
    text: 'Das Passwort wird in der Notix App geändert. Öffne den Link aus der E-Mail auf dem iPhone oder Android-Handy, auf dem Notix installiert ist — er führt dich direkt zum Bildschirm für das neue Passwort.',
    noAppText:
      'Noch kein Handy mit Notix? Installier zuerst die App und tipp dann den Link nochmal an. Der Link ist 30 Minuten gültig.',
    cta: 'Im App Store laden',
  },
} satisfies Dictionary;
