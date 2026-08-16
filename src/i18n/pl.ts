/**
 * Polski słownik.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-польски. Польские AI-формулировки
 * («notatki ai», «notatnik ai») практически не ищут — работают обычные категорийные
 * слова («aplikacja do notatek», «zamiana mowy na tekst», «transkrypcja audio»),
 * а AI-термины поляки набирают по-английски («ai note taker»). Отсюда смешанные
 * заголовки. Остальное — перевод с сохранением тона: короткие фразы, обращение
 * на «ty», без канцелярита.
 *
 * «Notix» не склоняется — это имя продукта.
 */
import type { Dictionary } from './en';

export const pl = {
  path: 'pl',
  hreflang: 'pl',
  nativeName: 'Polski',

  nav: {
    features: 'Funkcje',
    faq: 'FAQ',
    examples: 'Przykłady',
    support: 'Pomoc',
    getApp: 'Pobierz',
    menu: 'Menu',
    language: 'Język',
  },

  footer: {
    privacy: 'Polityka prywatności',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Ta strona jest dostępna także w Twoim języku',
    cta: 'Przełącz',
    dismiss: 'Zamknij',
  },

  home: {
    seoTitle:
      'Notix — AI note taker: transkrypcja audio, notatki z wykładów, PDF i YouTube',
    seoDescription:
      'Notix nagrywa wykłady i spotkania, robi transkrypcję audio (zamiana mowy na tekst) i podsumowania z PDF-ów oraz filmów z YouTube. Quizy i fiszki powstają same. Aplikacja do notatek na iPhone’a.',
    ogTitle: 'Notix — AI note taker',
    ogDescription:
      'Wykłady, PDF-y i filmy zamieniają się w podsumowania, quizy i fiszki. Pytaj swoje notatki i przygotuj się szybciej.',
    ogImageAlt: 'Notix — zamienia to, czego się uczysz, w notatki, które same cię uczą',
    schemaDescription:
      'Notix zamienia wykłady, PDF-y, filmy z YouTube i nagrania głosowe w czytelne podsumowania, quizy i fiszki. Transkrypcja, podsumowanie i czat z notatkami.',

    hero: {
      badge: 'Pomocnik w nauce na iPhone’a',
      titleLead: 'Zamień to, czego się uczysz, w notatki, które',
      titleEmphasis: 'same cię uczą',
      subtitle:
        'Nagraj wykład, wrzuć PDF albo wklej link z YouTube. Notix zrobi transkrypcję, napisze czytelne podsumowanie i przerobi je na quizy i fiszki — nauka zamiast czytania w kółko.',
      cta: 'Pobierz w App Store',
      ctaNote: 'Zacznij za darmo · iPhone',
    },

    valueStrip: [
      { title: 'Cokolwiek na wejściu', note: 'audio, PDF, YouTube, web' },
      { title: 'Notatki w sekundy', note: 'transkrypcja i podsumowanie' },
      { title: 'Sprawdzasz się', note: 'quizy, fiszki, czat AI' },
      { title: '6 języków', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Znasz to?',
      title: 'Nauka jest trudniejsza, niż powinna być',
      items: [
        '„Po dwudziestu minutach wykładu odpływam — i tracę połowę tego, co będzie na egzaminie”.',
        '„Czytam ten rozdział trzeci raz i dalej nic z niego nie pamiętam”.',
        '„Notatki mam rozrzucone po dwóch zeszytach i pięciu aplikacjach”.',
        '„Północ przed egzaminem, nic nie rozumiem i nie ma kogo zapytać”.',
      ],
      pivot:
        'Da się inaczej. Notix zamienia wykłady, PDF-y i filmy w system nauki — sam z siebie.',
    },

    how: {
      title: 'Jak to działa — prościej się nie da',
      steps: [
        {
          title: 'Nagraj cokolwiek',
          text: 'Nagraj wykład, wrzuć audio albo dokument, wklej link do filmu lub strony.',
        },
        {
          title: 'Notix robi robotę',
          text: 'Automatyczna transkrypcja i czytelne, uporządkowane podsumowanie — w kilka sekund.',
        },
        {
          title: 'Naucz się na serio',
          text: 'Sprawdź się quizami i fiszkami albo zapytaj swoje notatki w czacie AI.',
        },
      ],
    },

    features: {
      title: 'Nagraj, zrozum i zapamiętaj — w jednej aplikacji',
      items: [
        {
          title: 'Nic ci nie umknie na zajęciach',
          text: 'Naciśnij nagrywanie i słuchaj spokojnie. Transkrypcja i uporządkowane notatki czekają po wykładzie.',
        },
        {
          title: 'Pięćdziesiąt slajdów, jedno podsumowanie',
          text: 'Wrzuć PDF-y, slajdy albo artykuły i dostań czytelne, uporządkowane podsumowanie w kilka sekund.',
        },
        {
          title: 'YouTube i linki',
          text: 'Wklej link, a Notix zamieni film albo stronę w notatki, po których da się szukać.',
        },
        {
          title: 'Znajdź luki, zanim znajdzie je egzamin',
          text: 'Zrób z każdej notatki pytania — aktywne przypominanie bije czytanie w kółko.',
        },
        {
          title: 'Żeby zostało w głowie',
          text: 'Fiszki prosto z twoich notatek, gotowe do szybkiej powtórki gdziekolwiek.',
        },
        {
          title: 'Notatki, które odpowiadają',
          text: 'Pytaj o jedną notatkę albo o całą bibliotekę — każda odpowiedź z linkiem do źródła.',
        },
        {
          title: 'Wszystko w jednym miejscu',
          text: 'Foldery, wyszukiwanie i synchronizacja — każdy fakt z każdego wykładu znajdziesz w sekundy.',
        },
        {
          title: 'Mówi twoim językiem',
          text: 'Angielski, hiszpański, francuski, niemiecki, rosyjski i polski — podsumowania i quizy w twoim języku.',
        },
        {
          title: 'Udostępnij jako PDF',
          text: 'Wyeksportuj dowolną notatkę do zgrabnego PDF-a dla grupy albo współpracowników.',
        },
      ],
    },

    testimonials: {
      title: 'Co studenci mówią o Notix',
      items: [
        {
          quote:
            '„Nagrywam każdy wykład, a Notix robi z tego notatki, z których naprawdę się uczę. Oceny w tym semestrze poszły w górę”.',
          author: 'Maya R. · Studentka',
        },
        {
          quote:
            '„Powtórka przed egzaminem idzie dużo szybciej. Po prostu szukam w notatkach, zamiast odsłuchiwać godziny nagrań”.',
          author: 'Daniel K. · Student',
        },
        {
          quote:
            '„Idealne, gdy zajęcia idą jedne po drugich. Włączam nagrywanie, słucham wykładu, a podsumowanie już czeka”.',
          author: 'Priya S. · Studentka',
        },
      ],
    },

    whatIs: {
      title: 'Czym jest Notix?',
      paragraphs: [
        'Notix to aplikacja, która robi notatki za ciebie. Nagrywasz wykład, spotkanie albo wywiad, wrzucasz PDF lub dokument, wklejasz link — film z YouTube, artykuł, post z TikToka czy Instagrama — a Notix robi transkrypcję, pisze czytelne, uporządkowane podsumowanie i zamienia je w quizy i fiszki, kiedy materiał trzeba naprawdę zapamiętać.',
        'To nie dyktafon i nie narzędzie do transkrypcji. Dyktafon oddaje ci tę samą godzinę audio, której trzeba wysłuchać jeszcze raz. Narzędzie do transkrypcji oddaje ścianę tekstu. Notix oddaje to, co i tak trzeba było zapisać: uporządkowane notatki, w których najważniejsze jest oddzielone od waty.',
        'Wszystko trafia w jedno miejsce. Nagrania, dokumenty, filmy, artykuły i posty stają się jedną biblioteką z wyszukiwaniem — więc gdy potrzebujesz tego, co padło w marcu, szukasz we własnych notatkach, a nie w sześciu aplikacjach.',
        'Notix możesz zacząć za darmo i działa na iPhonie.',
      ],
    },

    faqTitle: 'Najczęstsze pytania',

    finalCta: {
      title: 'Nie przegap już tego, co ważne',
      text: 'Twój następny wykład może stać się czytelnymi notatkami, quizem i talią fiszek — sam z siebie.',
      cta: 'Pobierz w App Store',
      note: 'Zacznij za darmo · iPhone',
    },
  },

  faq: [
    {
      q: 'Jak nagrać wykład i zamienić go w notatki?',
      a: 'Notix nagrywa dźwięk, robi transkrypcję i sam pisze uporządkowane podsumowanie — ty tylko włączasz nagrywanie i odkładasz telefon. Gdy się skończy, transkrypcja i podsumowanie już czekają, a quiz albo talię fiszek zrobisz z nich jednym dotknięciem. Jeśli masz już gotowy plik audio skądinąd, możesz go wrzucić zamiast nagrywać na żywo.',
    },
    {
      q: 'Jak dokładna jest transkrypcja audio?',
      a: 'Notix robi transkrypcję na tyle dokładnie, żeby dało się z niej pracować, i jest coraz lepiej z tygodnia na tydzień — szybkość i jakość to dwie rzeczy, nad którymi pracujemy najwięcej, i obie mocno urosły przez ostatnie miesiące. Wyraźna mowa w zwykłym pomieszczeniu wraca niemal słowo w słowo. Głośna sala, daleki mikrofon albo silny akcent są trudniejsze, a błędy najczęściej zbierają się na terminach i nazwiskach — więc zanim oprzesz się na konkretnej liczbie albo nazwisku, warto zerknąć do transkrypcji.',
    },
    {
      q: 'Czy zrobię streszczenie z PDF-a i dokumentów?',
      a: 'Tak. Wrzuć PDF, dokument Word, plik tekstowy albo arkusz — obsługiwane są PDF, DOCX, TXT, RTF, CSV, XLS i XLSX — a Notix zrobi uporządkowane podsumowanie, po którym możesz szukać, sprawdzać się quizami albo zamienić je w fiszki. Prezentacje wyeksportowane do PDF-a działają szczególnie dobrze, bo podsumowanie dopisuje to, co slajdy pomijają.',
    },
    {
      q: 'Jak zrobić notatki z filmu na YouTube albo artykułu?',
      a: 'Notix robi notatki także z filmów na YouTube i z artykułów w sieci. Wklej link do filmu albo adres artykułu, a Notix zamieni go w notatki, quizy i fiszki — tak samo jak audio nagrane przez ciebie. Podsumowania filmów powstają z napisów, więc filmu z wyłączonymi napisami nie da się jeszcze podsumować.',
    },
    {
      q: 'Czy Notix podsumowuje posty z mediów społecznościowych?',
      a: 'Tak. Wklej link do posta z TikToka, Instagrama, X albo Reddita, a Notix wyciągnie to, co w nim faktycznie jest — zrobi transkrypcję dźwięku z filmu, odczyta tekst z obrazków i slajdów, dołoży opis — i napisze podsumowanie, które ci zostanie. To sposób, żeby zachować coś wartościowego z przewijanej tablicy, bez zostawiania sobie linku, którego już nigdy nie otworzysz.',
    },
    {
      q: 'Co dzieje się z moimi nagraniami i plikami?',
      a: 'Nagranie audio zostaje na twoim urządzeniu — nie trzymamy go na naszych serwerach. Wrzucony dokument znika z naszych serwerów zaraz po przetworzeniu; zostaje tylko wynik: transkrypcja i podsumowanie. Gdy usuwasz notatkę, znika z biblioteki od razu, a trwale kasujemy ją po 30 dniach — to okno jest po to, żeby przypadkowe usunięcie dało się cofnąć. Twoje treści nigdy nie służą do trenowania modeli AI i nigdy ich nie sprzedajemy.',
    },
    {
      q: 'Czy Notix działa offline?',
      a: 'Transkrypcja i podsumowania liczą się na naszych serwerach, więc do zamiany audio albo PDF-a w notatki potrzebne jest połączenie. Wszystko, co już powstało, zostaje na urządzeniu, więc notatki, podsumowania, quizy i fiszki czytasz offline — w samolocie albo w piwnicy bez zasięgu twoja biblioteka nadal jest z tobą.',
    },
    {
      q: 'Czy Notix jest darmowy?',
      a: 'Notix możesz zacząć za darmo: nagrywasz, tworzysz notatki, robisz quizy i fiszki bez płacenia. Notix Pro zdejmuje limity — nielimitowane godziny nagrań, nielimitowane pytania w quizach oraz podsumowania PDF-ów i filmów. Jest plan miesięczny z 3-dniowym okresem próbnym i roczny z 7-dniowym — dokładną cenę w swojej walucie zobaczysz w App Store. Przed końcem okresu próbnego nic nie zostaje pobrane.',
    },
    {
      q: 'Czy mogę anulować subskrypcję w każdej chwili?',
      a: 'Tak. Subskrypcja jest obsługiwana przez twoje Apple ID w App Store i tam też anulujesz ją w kilka dotknięć. Anulowanie zatrzymuje kolejną płatność; Pro działa do końca już opłaconego okresu, a notatki tak czy inaczej zostają w twojej bibliotece.',
    },
    {
      q: 'Jakie języki obsługuje Notix?',
      a: 'Interfejs aplikacji jest dostępny po angielsku, hiszpańsku, francusku, niemiecku, rosyjsku i polsku. Transkrypcja nie ogranicza się do tych sześciu — Notix radzi sobie z głównymi językami świata, a podsumowania i quizy wracają w języku, który wybierzesz, więc możesz nagrywać w jednym języku, a czytać notatki w innym.',
    },
  ],

  support: {
    seoTitle: 'Pomoc — Notix',
    seoDescription:
      'Pomoc do Notix: napisz do nas, zgłoś błąd albo zapytaj o subskrypcję.',
    title: 'Pomoc',
    replyTime: 'Zwykle odpowiadamy w ciągu 1–2 dni roboczych.',
    contactCardTitle: 'Napisz do nas',
    contactCardText: 'W każdej sprawie, z błędem albo pomysłem:',

    reportingTitle: 'Zgłaszanie problemu',
    reportingIntro: 'Żeby naprawić szybciej, dołącz:',
    reportingItems: [
      'Model urządzenia i wersję iOS',
      'Wersję Notix, jeśli ją znasz',
      'Co robisz, czego oczekujesz i co dzieje się zamiast tego',
      'Zrzut ekranu albo nagranie ekranu, jeśli się da',
    ],

    billingTitle: 'Subskrypcja i płatności',
    billingTextLead:
      'Notix Pro jest opłacany przez twoje Apple ID. Subskrypcją zarządzisz i anulujesz ją w każdej chwili w ustawieniach urządzenia:',
    billingSettingsPath: 'Ustawienia → twoje imię → Subskrypcje',
    billingRefundsLead:
      'Zwrotami za zakupy w App Store zajmuje się Apple — poprosisz o niego na',

    accountTitle: 'Konto i dane',
    accountTextLead: 'Konto razem ze wszystkimi danymi usuniesz prosto w aplikacji:',
    accountSettingsPath: 'Ustawienia → Dane konta → Usuń konto',
    accountTextTail:
      'Konto i dane kasujemy trwale po 30 dniach; ponowne zalogowanie w tym czasie anuluje usunięcie.',
    accountPrivacyLead: 'Pytania o dane — zajrzyj do',
    accountPrivacyLink: 'polityki prywatności',
    accountPrivacyTail: 'albo napisz do nas.',

    recordingTitle: 'Nagrywanie wykładów i spotkań',
    recordingText:
      'Notix pomaga zachować materiał, który masz prawo zachować. Zasady nagrywania różnią się między uczelniami, firmami i krajami, a gdzieniegdzie zgodzić się muszą wszyscy w pomieszczeniu — więc zanim naciśniesz nagrywanie, sprawdź zasady, które obowiązują u ciebie.',
  },

  notFound: {
    seoTitle: 'Nie znaleziono strony — Notix',
    seoDescription:
      'Nie znaleziono strony — Notix. Strona, której szukasz, nie istnieje albo została przeniesiona.',
    titleLead: '404 — ta strona',
    titleEmphasis: 'nic nie zanotowała',
    text: 'Strona, której szukasz, nie istnieje albo została przeniesiona.',
    cta: 'Wróć na stronę główną',
  },

  resetPassword: {
    seoTitle: 'Resetowanie hasła — Notix',
    seoDescription:
      'Otwórz ten link na telefonie z zainstalowanym Notix, żeby ustawić nowe hasło.',
    title: 'Otwórz ten link na telefonie',
    text: 'Hasło zmienia się w aplikacji Notix. Otwórz link z e-maila na iPhonie albo telefonie z Androidem, gdzie Notix jest zainstalowany — trafisz prosto na ekran nowego hasła.',
    noAppText:
      'Nie masz jeszcze telefonu z Notix? Zainstaluj aplikację i kliknij link ponownie. Link działa przez 30 minut.',
    cta: 'Pobierz w App Store',
  },
} satisfies Dictionary;
