/**
 * Испанский словарь (нейтральный испанский: Испания + Латинская Америка).
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под реальные испанские запросы. По данным Google Ads (авг. 2026)
 * категорийные формулировки на порядок объёмнее «фирменных»:
 *   transcribir audio a texto — 27 100/мес (ES) и 27 100/мес (MX)
 *   resumir textos — 3600 (ES) · resumir pdf — 1300 (ES) / 2400 (MX)
 *   resumir videos de youtube — 480 (ES) / 5400 (MX) · ia para estudiar — 1600 (MX)
 *   apuntes — 8100 (MX) · tarjetas de estudio — 590 (ES) / 720 (MX)
 * Поэтому в title/description/h1 вынесены «apuntes», «transcribir audio a texto»,
 * «resumir PDF» и «videos de YouTube», а не дословные кальки с английского.
 *
 * Тон: обращение на «tú», короткие фразы, без канцелярита. Формы «vosotros» и сугубо
 * иберийские или сугубо мексиканские обороты не используются; «video», не «vídeo».
 *
 * Терминология выдержана единообразно: apuntes (заметки), resumen (конспект),
 * transcripción, cuestionarios (тесты), tarjetas de estudio (карточки).
 */
import type { Dictionary } from './en';

export const es = {
  path: 'es',
  hreflang: 'es',
  nativeName: 'Español',

  nav: {
    features: 'Funciones',
    faq: 'Preguntas',
    examples: 'Ejemplos',
    support: 'Soporte',
    getApp: 'Descargar',
    menu: 'Menú',
    language: 'Idioma',
  },

  footer: {
    privacy: 'Política de privacidad',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Esta página está disponible en {language}',
    cta: 'Cambiar',
    dismiss: 'Cerrar',
  },

  home: {
    seoTitle:
      'Notix — apuntes con IA: transcribir audio a texto, resumir PDF y videos',
    seoDescription:
      'Notix graba tus clases y reuniones, transcribe el audio a texto y resume PDF, artículos y videos de YouTube. Cuestionarios y tarjetas de estudio, automáticos. Empieza gratis.',
    ogTitle: 'Notix — apuntes con IA',
    ogDescription:
      'Convierte clases, PDF y videos de YouTube en apuntes, cuestionarios y tarjetas de estudio. Pregúntale a tus apuntes y llega listo al examen.',
    ogImageAlt: 'Notix — convierte lo que estudias en apuntes que te enseñan',
    schemaDescription:
      'Notix convierte clases, PDF, videos de YouTube y grabaciones de voz en apuntes claros, cuestionarios y tarjetas de estudio. Transcribe, resume y conversa con tus apuntes.',

    hero: {
      badge: 'Estudiar con IA, desde tu iPhone',
      titleLead: 'Convierte lo que estudias en apuntes que',
      titleEmphasis: 'te enseñan',
      subtitle:
        'Graba una clase, sube un PDF o pega un enlace de YouTube. Notix lo transcribe, escribe un resumen claro y lo convierte en cuestionarios y tarjetas — para que estudies en vez de releer.',
      cta: 'Descargar en el App Store',
      ctaNote: 'Gratis para empezar · iPhone',
    },

    valueStrip: [
      { title: 'Todo entra', note: 'audio, PDF, YouTube, web' },
      { title: 'Apuntes en segundos', note: 'transcripción y resumen' },
      { title: 'Y sale aprendido', note: 'cuestionarios, tarjetas, chat IA' },
      { title: '6 idiomas', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: '¿Te suena?',
      title: 'Estudiar cuesta más de lo que debería',
      items: [
        '“A los veinte minutos de clase me desconecto — y me pierdo justo lo que entra en el examen.”',
        '“He leído este capítulo tres veces y sigo sin recordar nada.”',
        '“Mis apuntes están repartidos entre dos cuadernos y cinco apps distintas.”',
        '“Es medianoche antes del examen, no entiendo nada y no hay a quién preguntar.”',
      ],
      pivot:
        'Hay una forma mejor. Notix convierte clases, PDF y videos en un sistema de estudio — solo.',
    },

    how: {
      title: 'Cómo funciona: es simple',
      steps: [
        {
          title: 'Captura lo que sea',
          text: 'Graba una clase, sube audio o un documento, o pega un enlace de YouTube o de una web.',
        },
        {
          title: 'Notix hace el trabajo',
          text: 'Transcripción automática y un resumen claro y estructurado — listo en segundos.',
        },
        {
          title: 'Apréndelo de verdad',
          text: 'Ponte a prueba con cuestionarios y tarjetas, o pregúntale lo que sea a tus apuntes en el chat con IA.',
        },
      ],
    },

    features: {
      title: 'Grabar, entender y recordar — en una sola app',
      items: [
        {
          title: 'No te pierdas nada en clase',
          text: 'Pulsa grabar y escucha tranquilo. La transcripción y los apuntes te esperan al terminar.',
        },
        {
          title: 'Cincuenta diapositivas, un resumen claro',
          text: 'Sube PDF, presentaciones o artículos y recibe un resumen claro y estructurado en segundos.',
        },
        {
          title: 'YouTube y enlaces web',
          text: 'Pega un enlace y Notix convierte el video o la página en apuntes con buscador.',
        },
        {
          title: 'Encuentra tus lagunas antes del examen',
          text: 'Convierte cualquier apunte en preguntas de práctica — recordar activo gana a releer, siempre.',
        },
        {
          title: 'Que se te quede',
          text: 'Tarjetas de estudio creadas desde tus apuntes, listas para repasar donde estés.',
        },
        {
          title: 'Tus apuntes te responden',
          text: 'Pregunta sobre un apunte o sobre toda tu biblioteca — cada respuesta enlaza a su fuente.',
        },
        {
          title: 'Todo en un solo lugar',
          text: 'Carpetas, buscador y sincronización entre dispositivos — cualquier dato de cualquier clase en segundos.',
        },
        {
          title: 'Habla tu idioma',
          text: 'Inglés, español, francés, alemán, ruso y polaco — los resúmenes y cuestionarios siguen tu idioma.',
        },
        {
          title: 'Compártelo en PDF',
          text: 'Exporta cualquier apunte como un PDF cuidado para tus compañeros o tu equipo.',
        },
      ],
    },

    testimonials: {
      title: 'Qué dicen los estudiantes de Notix',
      items: [
        {
          quote:
            '“Grabo todas las clases y Notix las convierte en apuntes decentes con los que de verdad estudio. Este semestre subí las notas.”',
          author: 'Maya R. · Estudiante',
        },
        {
          quote:
            '“Repasar antes de los exámenes es mucho más rápido. Busco en mis apuntes en vez de volver a ver horas de grabación.”',
          author: 'Daniel K. · Estudiante',
        },
        {
          quote:
            '“Perfecto cuando tienes clases seguidas. Pulso grabar, me concentro en la clase y el resumen ya está esperándome.”',
          author: 'Priya S. · Estudiante',
        },
      ],
    },

    whatIs: {
      title: '¿Qué es Notix?',
      paragraphs: [
        'Notix es una app que toma apuntes por ti con IA. Grabas una clase, una reunión o una entrevista, subes un PDF o un documento, o pegas un enlace — un video de YouTube, un artículo, una publicación de TikTok o Instagram — y Notix lo transcribe, escribe un resumen claro y estructurado, y convierte ese resumen en cuestionarios y tarjetas de estudio cuando de verdad necesitas recordarlo.',
        'No es una grabadora de voz ni una herramienta de transcripción. Una grabadora te devuelve la misma hora de audio que tendrás que escuchar otra vez. Una herramienta de transcripción te devuelve un muro de texto. Notix te devuelve lo que ibas a escribir de todos modos: apuntes ordenados, con las ideas clave separadas de la paja.',
        'Todo llega a un solo lugar. Grabaciones, documentos, videos, artículos y publicaciones forman una única biblioteca con buscador — así, cuando necesitas lo que se dijo en marzo, buscas en tus propios apuntes en vez de rastrear seis apps.',
        'Notix es gratis para empezar y funciona en iPhone.',
      ],
    },

    faqTitle: 'Preguntas frecuentes',

    finalCta: {
      title: 'No vuelvas a perderte lo importante',
      text: 'Tu próxima clase puede convertirse en apuntes claros, un cuestionario y un mazo de tarjetas — sola.',
      cta: 'Descargar en el App Store',
      note: 'Gratis para empezar · iPhone',
    },
  },

  faq: [
    {
      q: '¿Cómo grabo una clase y la convierto en apuntes?',
      a: 'Notix graba el audio, lo transcribe y escribe un resumen estructurado automáticamente — tú inicias la grabación y dejas el teléfono. Al terminar, la transcripción y el resumen ya están listos, y puedes generar un cuestionario o un mazo de tarjetas de estudio a partir de ellos con un toque. Si ya tienes un archivo de audio de otro sitio, puedes subirlo en vez de grabar en directo.',
    },
    {
      q: '¿Es precisa la transcripción de audio a texto?',
      a: 'Notix transcribe con precisión suficiente para trabajar con el resultado, y mejora cada semana: la velocidad y la calidad son lo que más trabajamos, y ambas han mejorado bastante en los últimos meses. Una voz clara en una sala normal vuelve casi palabra por palabra. Un aula ruidosa, un micrófono lejano o un acento marcado son más difíciles, y los errores se concentran en los términos técnicos y los nombres propios — así que conviene echar un vistazo a la transcripción antes de fiarte de una cifra o un nombre concretos.',
    },
    {
      q: '¿Puedo resumir PDF y documentos con IA?',
      a: 'Sí. Sube un PDF, un documento de Word, un archivo de texto o una hoja de cálculo — se admiten PDF, DOCX, TXT, RTF, CSV, XLS y XLSX — y Notix genera un resumen estructurado que puedes buscar, convertir en cuestionario o pasar a tarjetas de estudio. Las presentaciones exportadas como PDF funcionan especialmente bien, porque el resumen rellena las conexiones que las diapositivas se dejan fuera.',
    },
    {
      q: '¿Puedo hacer apuntes de videos de YouTube y artículos web?',
      a: 'Sí. Pega un enlace de YouTube o la URL de un artículo y Notix lo convierte en apuntes, cuestionarios y tarjetas de estudio, igual que hace con el audio que grabas tú. Los resúmenes de YouTube se construyen a partir de los subtítulos del video, así que un video con los subtítulos desactivados todavía no se puede resumir.',
    },
    {
      q: '¿Notix puede resumir publicaciones de redes sociales?',
      a: 'Sí. Pega el enlace de una publicación de TikTok, Instagram, X o Reddit y Notix extrae lo que hay dentro: transcribe el audio del video, lee el texto de las imágenes y las diapositivas, y suma el pie de publicación — luego escribe un resumen que te queda guardado. Es la forma de conservar algo útil que viste pasando el dedo, sin dejarte un enlace que no vas a volver a abrir.',
    },
    {
      q: '¿Qué pasa con mis grabaciones y archivos?',
      a: 'Tu grabación de audio se queda en tu dispositivo — no se guarda en nuestros servidores. Un documento que subes se borra de nuestros servidores en cuanto termina de procesarse; lo que queda es el resultado: la transcripción y el resumen. Cuando borras un apunte, desaparece de tu biblioteca al momento y se elimina de forma definitiva a los 30 días — ese margen existe para que un borrado accidental todavía se pueda deshacer. Tu contenido nunca se usa para entrenar modelos de IA, y nunca lo vendemos.',
    },
    {
      q: '¿Notix funciona sin conexión?',
      a: 'La transcripción y el resumen se procesan en nuestros servidores, así que necesitas conexión para convertir audio o un PDF en apuntes. Todo lo que ya está generado queda guardado en tu dispositivo, así que tus apuntes, resúmenes, cuestionarios y tarjetas se leen sin conexión — en un avión o en un sótano sin cobertura, tu biblioteca sigue ahí.',
    },
    {
      q: '¿Notix es gratis?',
      a: 'Notix es gratis para empezar: puedes grabar, crear apuntes y hacer cuestionarios y tarjetas de estudio sin pagar. Notix Pro quita los límites — horas de grabación ilimitadas, preguntas de cuestionario ilimitadas y resúmenes de PDF y video — por 17,99 $ al mes con 3 días de prueba gratis, o 99,99 $ al año con 7 días de prueba gratis. No se cobra nada antes de que termine la prueba.',
    },
    {
      q: '¿Puedo cancelar cuando quiera?',
      a: 'Sí. La suscripción se gestiona desde tu Apple ID en el App Store, y puedes cancelarla ahí en cualquier momento con un par de toques. Cancelar detiene el siguiente cobro; Pro sigue activo hasta el final del periodo que ya pagaste, y tus apuntes se quedan en tu biblioteca en cualquier caso.',
    },
    {
      q: '¿Qué idiomas admite Notix?',
      a: 'La interfaz de la app está disponible en inglés, español, francés, alemán, ruso y polaco. La transcripción no se limita a esos seis — Notix maneja los principales idiomas del mundo, y tus resúmenes y cuestionarios llegan en el idioma que hayas elegido, así que puedes grabar en un idioma y leer los apuntes en otro.',
    },
  ],

  support: {
    seoTitle: 'Soporte — Notix',
    seoDescription:
      'Ayuda con Notix: escribe a nuestro equipo de soporte, informa de un error o resuelve dudas sobre tu suscripción.',
    title: 'Soporte',
    replyTime: 'Solemos responder en 1–2 días hábiles.',
    contactCardTitle: 'Escríbenos',
    contactCardText: 'Para cualquier duda, error o idea:',

    reportingTitle: 'Informar de un problema',
    reportingIntro: 'Para arreglarlo más rápido, incluye:',
    reportingItems: [
      'El modelo de tu dispositivo y la versión de iOS',
      'La versión de la app (Ajustes → Acerca de)',
      'Qué hiciste, qué esperabas y qué pasó en su lugar',
      'Una captura o grabación de pantalla, si puedes',
    ],

    billingTitle: 'Suscripciones y pagos',
    billingTextLead:
      'Las suscripciones a Notix Pro se cobran a través de tu Apple ID. Puedes gestionarla o cancelarla cuando quieras desde los ajustes de tu dispositivo:',
    billingSettingsPath: 'Ajustes → tu nombre → Suscripciones',
    billingRefundsLead:
      'Los reembolsos de compras del App Store los gestiona Apple — puedes solicitarlo en',

    accountTitle: 'Cuenta y datos',
    accountTextLead:
      'Puedes eliminar tu cuenta y todos sus datos directamente en la app:',
    accountSettingsPath: 'Ajustes → Datos de la cuenta → Eliminar cuenta',
    accountTextTail:
      'Tu cuenta y tus datos se eliminan de forma definitiva a los 30 días; si vuelves a iniciar sesión dentro de ese plazo, la eliminación se cancela.',
    accountPrivacyLead: 'Para dudas sobre datos, consulta nuestra',
    accountPrivacyLink: 'Política de privacidad',
    accountPrivacyTail: 'o escríbenos.',

    recordingTitle: 'Grabar clases y reuniones',
    recordingText:
      'Notix te ayuda a guardar el material que tienes derecho a guardar. Las normas sobre grabación cambian según el centro de estudios, la empresa y el país, y en algunos sitios todos los presentes deben dar su permiso antes de empezar — así que revisa las normas que te aplican antes de pulsar grabar.',
  },

  notFound: {
    seoTitle: 'Página no encontrada — Notix',
    seoDescription:
      'Página no encontrada — Notix. La página que buscas no existe o ha cambiado de sitio.',
    titleLead: '404 — esta página no tomó',
    titleEmphasis: 'ni un apunte',
    text: 'La página que buscas no existe o ha cambiado de sitio.',
    cta: 'Volver al inicio',
  },

  resetPassword: {
    seoTitle: 'Restablecer tu contraseña — Notix',
    seoDescription:
      'Abre este enlace en el teléfono donde tengas instalada la app de Notix para crear una contraseña nueva.',
    title: 'Abre este enlace en tu teléfono',
    text: 'La contraseña se cambia dentro de la app de Notix. Abre el enlace del correo en el iPhone o el teléfono Android donde tengas Notix instalado — te llevará directo a la pantalla de contraseña nueva.',
    noAppText:
      '¿Todavía no tienes un teléfono con Notix? Instala la app y vuelve a tocar el enlace. El enlace funciona durante 30 minutos.',
    cta: 'Descargar en el App Store',
  },
} satisfies Dictionary;
