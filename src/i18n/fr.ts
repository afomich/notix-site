/**
 * Словарь французского.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как реально ищут по-французски. Опорные объёмы
 * (Google Ads, Франция, авг. 2026): «transcription audio en texte» — 27 100/мес,
 * «fiches de révision» — 14 800, «flashcards» — 12 100, «application pour réviser» —
 * 720, «application prise de notes» — 480, «transformer audio en texte» — 480,
 * «résumer une vidéo youtube» — 110, «résumer un pdf» — 70.
 *
 * Поэтому flashcards на сайте — «fiches de révision» (в интерфейсе приложения принято
 * короткое «cartes»): на сайте выигрывает поисковая формулировка, в UI — короткая.
 *
 * Обращение — «tu». Апострофы типографские (’), чтобы строки в одинарных кавычках не
 * требовали экранирования. Перед «:» и «?» — обычный пробел, как принято во французской
 * типографике.
 */
import type { Dictionary } from './en';

export const fr = {
  path: 'fr',
  hreflang: 'fr',
  nativeName: 'Français',

  nav: {
    features: 'Fonctionnalités',
    faq: 'FAQ',
    examples: 'Exemples',
    support: 'Aide',
    getApp: 'Télécharger',
    menu: 'Menu',
    language: 'Langue',
  },

  footer: {
    privacy: 'Politique de confidentialité',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Cette page est disponible en {language}',
    cta: 'Changer',
    dismiss: 'Fermer',
  },

  home: {
    seoTitle:
      'Notix — transcription audio en texte, résumés de PDF et de vidéos, quiz et fiches de révision',
    seoDescription:
      'Notix enregistre tes cours et tes réunions, transcrit l’audio en texte et résume tes PDF et tes vidéos YouTube. Quiz et fiches de révision générés automatiquement. Gratuit pour commencer.',
    ogTitle: 'Notix — prise de notes par IA',
    ogDescription:
      'Transforme tes cours, tes PDF et tes vidéos YouTube en notes, quiz et fiches de révision. Interroge tes notes et sois prêt pour l’examen plus vite.',
    ogImageAlt:
      'Notix — transforme ce que tu apprends en notes qui t’apprennent en retour',
    schemaDescription:
      'Notix transforme les cours, les PDF, les vidéos YouTube et les enregistrements vocaux en notes claires, en quiz et en fiches de révision. Transcription, résumé et chat avec tes notes.',

    hero: {
      badge: 'L’assistant de révision sur iPhone',
      titleLead: 'Transforme ce que tu apprends en notes qui',
      titleEmphasis: 't’apprennent en retour',
      subtitle:
        'Enregistre un cours, charge un PDF ou colle un lien YouTube. Notix le transcrit, en écrit un résumé clair et le transforme en quiz et en fiches — pour que tu révises au lieu de relire.',
      cta: 'Télécharger dans l’App Store',
      ctaNote: 'Gratuit pour commencer · iPhone',
    },

    valueStrip: [
      { title: 'Tout en entrée', note: 'audio, PDF, YouTube, web' },
      { title: 'Des notes en secondes', note: 'transcription + résumé clair' },
      { title: 'Mémorisation active', note: 'quiz, fiches, chat IA' },
      { title: '6 langues', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Ça te parle ?',
      title: 'Réviser ne devrait pas être aussi dur',
      items: [
        '« Au bout de vingt minutes de cours je décroche — et je rate la moitié de ce qui tombe à l’examen. »',
        '« J’ai lu ce chapitre trois fois et je n’en retiens toujours rien. »',
        '« Mes notes sont éparpillées entre deux cahiers et cinq applis. »',
        '« Il est minuit avant l’examen, je ne comprends rien et je n’ai personne à qui demander. »',
      ],
      pivot:
        'Il y a mieux. Notix transforme tes cours, tes PDF et tes vidéos en méthode de révision — tout seul.',
    },

    how: {
      title: 'Comment ça marche',
      steps: [
        {
          title: 'Capture n’importe quoi',
          text: 'Enregistre un cours, charge un audio ou un document, colle un lien YouTube ou une page web.',
        },
        {
          title: 'Notix fait le travail',
          text: 'Transcription automatique et résumé clair et structuré — prêt en quelques secondes.',
        },
        {
          title: 'Retiens pour de bon',
          text: 'Teste-toi avec des quiz et des fiches, ou pose tes questions à tes notes dans le chat IA.',
        },
      ],
    },

    features: {
      title: 'Enregistrer, comprendre et retenir — dans une seule app',
      items: [
        {
          title: 'Ne rien rater en cours',
          text: 'Appuie sur enregistrer et écoute tranquillement. La transcription et les notes structurées t’attendent après le cours.',
        },
        {
          title: 'Cinquante diapos, un résumé clair',
          text: 'Dépose un PDF, des diapos ou un article et reçois un résumé clair et structuré en quelques secondes.',
        },
        {
          title: 'YouTube et liens web',
          text: 'Colle un lien et Notix transforme la vidéo ou la page en notes où tu peux chercher.',
        },
        {
          title: 'Repère tes lacunes avant l’examen',
          text: 'Transforme n’importe quelle note en questions — se tester marche mieux que relire.',
        },
        {
          title: 'Pour que ça reste',
          text: 'Des fiches de révision créées directement à partir de tes notes, prêtes à réviser n’importe où.',
        },
        {
          title: 'Tes notes te répondent',
          text: 'Pose tes questions sur une note ou sur toute ta bibliothèque — chaque réponse renvoie à sa source.',
        },
        {
          title: 'Tout au même endroit',
          text: 'Dossiers, recherche et synchronisation — retrouve n’importe quel détail de n’importe quel cours en quelques secondes.',
        },
        {
          title: 'Parle ta langue',
          text: 'Anglais, espagnol, français, allemand, russe et polonais — les résumés et les quiz suivent ta langue.',
        },
        {
          title: 'Partage en PDF',
          text: 'Exporte n’importe quelle note en PDF soigné pour tes camarades ou tes collègues.',
        },
      ],
    },

    testimonials: {
      title: 'Ce que les étudiants disent de Notix',
      items: [
        {
          quote:
            '« J’enregistre tous mes cours et Notix en fait des notes propres avec lesquelles je révise vraiment. Mes notes ont grimpé ce semestre. »',
          author: 'Maya R. · Étudiante',
        },
        {
          quote:
            '« Réviser avant les examens va beaucoup plus vite. Je cherche dans mes notes au lieu de réécouter des heures d’enregistrement. »',
          author: 'Daniel K. · Étudiant',
        },
        {
          quote:
            '« Parfait quand les cours s’enchaînent. J’appuie sur enregistrer, je suis le cours, et le résumé m’attend après. »',
          author: 'Priya S. · Étudiante',
        },
      ],
    },

    whatIs: {
      title: 'Qu’est-ce que Notix ?',
      paragraphs: [
        'Notix prend des notes à ta place. Tu enregistres un cours, une réunion ou un entretien, tu charges un PDF ou un document, ou tu colles un lien — une vidéo YouTube, un article, un post TikTok ou Instagram — et Notix le transcrit, écrit un résumé clair et structuré, puis transforme ce résumé en quiz et en fiches de révision quand il faut vraiment le retenir.',
        'Ce n’est ni un dictaphone ni un outil de transcription. Un dictaphone te rend l’heure d’audio qu’il faudra réécouter. Un outil de transcription te rend un mur de texte. Notix te rend ce que tu allais noter de toute façon : des notes organisées, où l’essentiel est séparé du remplissage.',
        'Tout arrive au même endroit. Enregistrements, documents, vidéos, articles et posts deviennent une seule bibliothèque où tu peux chercher — alors quand tu as besoin de ce qui a été dit en mars, tu cherches dans tes propres notes au lieu de fouiller six applis.',
        'Notix est gratuit pour commencer et fonctionne sur iPhone.',
      ],
    },

    faqTitle: 'Questions fréquentes',

    finalCta: {
      title: 'Ne rate plus jamais l’essentiel',
      text: 'Ton prochain cours peut devenir des notes claires, un quiz et un jeu de fiches — tout seul.',
      cta: 'Télécharger dans l’App Store',
      note: 'Gratuit pour commencer · iPhone',
    },
  },

  faq: [
    {
      q: 'Comment enregistrer un cours et en faire des notes ?',
      a: 'Notix enregistre l’audio, le transcrit et écrit un résumé structuré tout seul — tu lances l’enregistrement et tu poses ton téléphone. À la fin, la transcription et le résumé t’attendent, et tu peux en tirer un quiz ou un jeu de fiches en un geste. Si tu as déjà un fichier audio venu d’ailleurs, tu peux le charger au lieu d’enregistrer en direct.',
    },
    {
      q: 'La transcription audio en texte est-elle fiable ?',
      a: 'Notix transcrit assez précisément pour qu’on puisse travailler dessus, et ça s’améliore chaque semaine — la vitesse et la qualité sont ce sur quoi nous travaillons le plus, et les deux ont nettement progressé ces derniers mois. Une parole claire dans une pièce normale revient presque mot pour mot. Un amphi bruyant, un micro éloigné ou un accent marqué sont plus difficiles, et c’est sur les termes techniques et les noms propres que les erreurs se concentrent — un coup d’œil à la transcription vaut donc mieux avant de t’appuyer sur un chiffre ou un nom précis.',
    },
    {
      q: 'Peut-on résumer un PDF ou un document ?',
      a: 'Oui. Charge un PDF, un document Word, un fichier texte ou un tableur — PDF, DOCX, TXT, RTF, CSV, XLS et XLSX sont pris en charge — et Notix produit un résumé structuré dans lequel tu peux chercher, te tester ou faire des fiches. Les diaporamas exportés en PDF marchent particulièrement bien, parce que le résumé rétablit les liens que les diapos laissent de côté.',
    },
    {
      q: 'Peut-on faire des notes à partir de vidéos YouTube et d’articles web ?',
      a: 'Oui. Colle un lien YouTube ou l’adresse d’un article, et Notix en fait des notes, des quiz et des fiches — exactement comme pour un audio que tu as enregistré toi-même. Les résumés YouTube sont construits à partir des sous-titres de la vidéo, donc une vidéo dont les sous-titres sont désactivés ne peut pas encore être résumée.',
    },
    {
      q: 'Notix peut-il résumer un post TikTok ou Instagram ?',
      a: 'Oui. Colle un lien vers un post TikTok, Instagram, X ou Reddit et Notix en extrait ce qu’il contient vraiment — il transcrit l’audio d’une vidéo, lit le texte des images et des diapos, et intègre la légende — puis écrit un résumé que tu gardes. C’est la façon de sauver quelque chose d’utile croisé en scrollant sans te laisser un lien que tu ne rouvriras jamais.',
    },
    {
      q: 'Que deviennent mes enregistrements et mes fichiers ?',
      a: 'Ton enregistrement audio reste sur ton appareil — il n’est pas conservé sur nos serveurs. Un document que tu charges est supprimé de nos serveurs dès qu’il a été traité ; ce qui reste, c’est le résultat : la transcription et le résumé. Quand tu supprimes une note, elle disparaît de ta bibliothèque immédiatement et est effacée définitivement après 30 jours — ce délai existe pour qu’une suppression accidentelle puisse encore être annulée. Ton contenu n’est jamais utilisé pour entraîner des modèles d’IA, et nous ne le vendons jamais.',
    },
    {
      q: 'Notix fonctionne-t-il hors ligne ?',
      a: 'La transcription et le résumé tournent sur nos serveurs, il faut donc une connexion pour transformer un audio ou un PDF en notes. Tout ce qui est déjà généré est enregistré sur ton appareil : tes notes, tes résumés, tes quiz et tes fiches se lisent hors ligne — dans un avion ou dans un sous-sol sans réseau, ta bibliothèque est toujours là.',
    },
    {
      q: 'Notix est-il gratuit ?',
      a: 'Notix est gratuit pour commencer : tu peux enregistrer, créer des notes et faire des quiz et des fiches sans payer. Notix Pro lève les limites — heures d’enregistrement illimitées, questions de quiz illimitées, et résumé des PDF et des vidéos — à 17,99 $ par mois avec un essai gratuit de 3 jours, ou 99,99 $ par an avec un essai gratuit de 7 jours. Rien n’est débité avant la fin de l’essai.',
    },
    {
      q: 'Peut-on annuler l’abonnement à tout moment ?',
      a: 'Oui. L’abonnement est géré via ton Apple ID dans l’App Store, et tu peux l’annuler là-bas à tout moment en deux gestes. Annuler arrête le prochain paiement ; Pro reste actif jusqu’à la fin de la période déjà payée, et tes notes restent dans ta bibliothèque dans tous les cas.',
    },
    {
      q: 'Quelles langues Notix prend-il en charge ?',
      a: 'L’interface de l’app est disponible en anglais, espagnol, français, allemand, russe et polonais. La transcription ne se limite pas à ces six langues — Notix gère les grandes langues du monde, et tes résumés et tes quiz reviennent dans la langue que tu as choisie, tu peux donc enregistrer dans une langue et lire les notes dans une autre.',
    },
  ],

  support: {
    seoTitle: 'Aide et support — Notix',
    seoDescription:
      'Besoin d’aide avec Notix ? Contacte le support, signale un bug ou pose une question sur ton abonnement.',
    title: 'Aide',
    replyTime: 'Nous répondons en général sous 1 à 2 jours ouvrés.',
    contactCardTitle: 'Écris-nous',
    contactCardText: 'Pour toute question, tout bug ou toute idée :',

    reportingTitle: 'Signaler un problème',
    reportingIntro: 'Pour qu’on répare plus vite, indique :',
    reportingItems: [
      'Ton modèle d’appareil et ta version d’iOS',
      'La version de l’app (Réglages → À propos)',
      'Ce que tu as fait, ce que tu attendais et ce qui s’est passé à la place',
      'Une capture ou un enregistrement d’écran, si possible',
    ],

    billingTitle: 'Abonnement et paiement',
    billingTextLead:
      'Notix Pro est facturé via ton Apple ID. Tu peux gérer ou annuler ton abonnement à tout moment dans les réglages de ton appareil :',
    billingSettingsPath: 'Réglages → ton nom → Abonnements',
    billingRefundsLead:
      'Les remboursements des achats App Store sont gérés par Apple — tu peux en demander un sur',

    accountTitle: 'Compte et données',
    accountTextLead:
      'Tu peux supprimer ton compte et toutes les données associées directement dans l’app :',
    accountSettingsPath: 'Réglages → Détails du compte → Supprimer le compte',
    accountTextTail:
      'Ton compte et tes données sont supprimés définitivement après 30 jours ; te reconnecter pendant ce délai annule la suppression.',
    accountPrivacyLead: 'Pour les questions sur les données, vois notre',
    accountPrivacyLink: 'politique de confidentialité',
    accountPrivacyTail: 'ou écris-nous.',

    recordingTitle: 'Enregistrer des cours et des réunions',
    recordingText:
      'Notix t’aide à garder ce que tu as le droit de garder. Les règles d’enregistrement diffèrent selon les établissements, les entreprises et les pays, et à certains endroits tout le monde doit être d’accord avant que tu commences — vérifie donc les règles qui s’appliquent à toi avant d’appuyer sur enregistrer.',
  },

  notFound: {
    seoTitle: 'Page introuvable — Notix',
    seoDescription:
      'Page introuvable — Notix. La page que tu cherches n’existe pas ou a été déplacée.',
    titleLead: '404 — cette page n’a',
    titleEmphasis: 'rien noté',
    text: 'La page que tu cherches n’existe pas ou a été déplacée.',
    cta: 'Retour à l’accueil',
  },

  resetPassword: {
    seoTitle: 'Réinitialiser ton mot de passe — Notix',
    seoDescription:
      'Ouvre ce lien sur le téléphone où l’app Notix est installée pour définir un nouveau mot de passe.',
    title: 'Ouvre ce lien sur ton téléphone',
    text: 'Le mot de passe se change dans l’app Notix. Ouvre le lien de l’e-mail sur l’iPhone ou le téléphone Android où Notix est installé — il t’emmène directement à l’écran du nouveau mot de passe.',
    noAppText:
      'Pas encore de téléphone avec Notix ? Installe l’app, puis touche le lien à nouveau. Le lien est valable 30 minutes.',
    cta: 'Télécharger dans l’App Store',
  },
} satisfies Dictionary;
