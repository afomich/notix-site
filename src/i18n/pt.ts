/**
 * Португальский словарь (бразильский португальский — основной рынок Бразилия).
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под реальные бразильские запросы. По данным Google Ads
 * (Бразилия, pt, авг. 2026) объём сидит в родных глаголах, а не в английских
 * AI-формулировках:
 *   transcrever áudio — 90 500/мес · transcrever áudio em texto — 40 500
 *   converter áudio em texto — 6600 · transcrição de áudio — 1900
 *   ia para estudar — 8100 · resumo de texto — 2900 · resumir pdf — 1900
 *   aplicativo de anotações — 720 · app de anotações — 480
 *   resumir vídeo do youtube — 170 · ai note taker — 320 (мертво)
 * Отдельно: «flashcards» по-английски — 27 100, а «cartões de memorização» — 210,
 * поэтому карточки остаются flashcards. «Quiz» — 301 000 против «questionário»
 * 12 100 (и то в значении «анкета»), поэтому тест — это quiz.
 *
 * Тон: обращение на «você», короткие фразы, без канцелярита.
 *
 * Терминология выдержана единообразно: anotações (заметки), resumo (конспект),
 * transcrição (расшифровка), quiz (тест), flashcards (карточки).
 */
import type { Dictionary } from './en';

export const pt = {
  path: 'pt',
  hreflang: 'pt-BR',
  nativeName: 'Português',

  nav: {
    features: 'Recursos',
    faq: 'Dúvidas',
    examples: 'Exemplos',
    support: 'Suporte',
    getApp: 'Baixar app',
    menu: 'Menu',
    language: 'Idioma',
  },

  footer: {
    privacy: 'Política de Privacidade',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Esta página também está no seu idioma',
    cta: 'Trocar',
    dismiss: 'Fechar',
  },

  home: {
    seoTitle:
      'Notix — IA para estudar: transcrever áudio em texto, resumir PDF e vídeos',
    seoDescription:
      'O Notix grava suas aulas e reuniões, transcreve o áudio em texto e resume PDF, artigos e vídeos do YouTube. Quiz e flashcards prontos, automaticamente. Comece grátis.',
    ogTitle: 'Notix — anotações com IA',
    ogDescription:
      'Transforme aulas, PDF e vídeos do YouTube em anotações, quiz e flashcards. Converse com suas anotações e chegue pronto na prova.',
    ogImageAlt: 'Notix — transforme o que você estuda em anotações que te ensinam',
    schemaDescription:
      'O Notix transforma aulas, PDF, vídeos do YouTube e gravações de voz em anotações claras, quiz e flashcards. Transcreve, resume e conversa com suas anotações.',

    hero: {
      badge: 'Estudar com IA, direto do iPhone',
      titleLead: 'Transforme o que você estuda em anotações que',
      titleEmphasis: 'te ensinam',
      subtitle:
        'Grave uma aula, envie um PDF ou cole um link do YouTube. O Notix transcreve, escreve um resumo claro e transforma tudo em quiz e flashcards — para você estudar em vez de reler.',
      cta: 'Baixar na App Store',
      ctaNote: 'Comece grátis · iPhone',
    },

    valueStrip: [
      { title: 'Tudo entra', note: 'áudio, PDF, YouTube, web' },
      { title: 'Anotações em segundos', note: 'transcrição e resumo' },
      { title: 'E sai aprendido', note: 'quiz, flashcards, chat com IA' },
      { title: '6 idiomas', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Soa familiar?',
      title: 'Estudar dá mais trabalho do que deveria',
      items: [
        '“Vinte minutos de aula e eu já desliguei — e perco justamente o que cai na prova.”',
        '“Li este capítulo três vezes e continuo sem lembrar de nada.”',
        '“Minhas anotações estão espalhadas em dois cadernos e cinco apps diferentes.”',
        '“É meia-noite antes da prova, eu não entendo nada e não tem a quem perguntar.”',
      ],
      pivot:
        'Existe um jeito melhor. O Notix transforma aulas, PDF e vídeos em um sistema de estudo — sozinho.',
    },

    how: {
      title: 'Como funciona — é simples',
      steps: [
        {
          title: 'Capture qualquer coisa',
          text: 'Grave uma aula, envie um áudio ou um documento, ou cole um link do YouTube ou de um site.',
        },
        {
          title: 'O Notix faz o trabalho',
          text: 'Transcrição automática e um resumo claro e estruturado — pronto em segundos.',
        },
        {
          title: 'Aprenda de verdade',
          text: 'Teste-se com quiz e flashcards, ou pergunte o que quiser às suas anotações no chat com IA.',
        },
      ],
    },

    features: {
      title: 'Gravar, entender e lembrar — em um app só',
      items: [
        {
          title: 'Não perca nada na aula',
          text: 'Toque em gravar e fique presente. A transcrição e as anotações estruturadas te esperam no fim da aula.',
        },
        {
          title: 'Cinquenta slides, um resumo claro',
          text: 'Envie PDF, slides ou artigos e receba um resumo claro e estruturado em segundos.',
        },
        {
          title: 'YouTube e links da web',
          text: 'Cole um link e o Notix transforma o vídeo ou a página em anotações com busca.',
        },
        {
          title: 'Descubra suas falhas antes da prova',
          text: 'Transforme qualquer anotação em perguntas de treino — lembrar ativamente vence reler, sempre.',
        },
        {
          title: 'Para não esquecer mais',
          text: 'Flashcards criados a partir das suas anotações, prontos para revisar em qualquer lugar.',
        },
        {
          title: 'Suas anotações respondem',
          text: 'Pergunte sobre uma anotação ou sobre a biblioteca inteira — cada resposta leva à fonte.',
        },
        {
          title: 'Tudo em um lugar só',
          text: 'Pastas, busca e sincronização entre dispositivos — qualquer detalhe de qualquer aula em segundos.',
        },
        {
          title: 'Fala a sua língua',
          text: 'Inglês, espanhol, francês, alemão, russo e polonês — os resumos e os quizzes seguem o seu idioma.',
        },
        {
          title: 'Compartilhe em PDF',
          text: 'Exporte qualquer anotação como um PDF caprichado para colegas ou para o time.',
        },
      ],
    },

    testimonials: {
      title: 'O que os estudantes dizem do Notix',
      items: [
        {
          quote:
            '“Gravo todas as aulas e o Notix transforma em anotações decentes, com as quais eu realmente estudo. Minhas notas subiram neste semestre.”',
          author: 'Maya R. · Estudante',
        },
        {
          quote:
            '“Revisar antes das provas ficou muito mais rápido. Eu busco nas minhas anotações em vez de rever horas de gravação.”',
          author: 'Daniel K. · Estudante',
        },
        {
          quote:
            '“Perfeito para aulas emendadas. Toco em gravar, presto atenção na aula e o resumo já está me esperando.”',
          author: 'Priya S. · Estudante',
        },
      ],
    },

    whatIs: {
      title: 'O que é o Notix?',
      paragraphs: [
        'O Notix é um app que faz anotações por você com IA. Você grava uma aula, uma reunião ou uma entrevista, envia um PDF ou um documento, ou cola um link — um vídeo do YouTube, um artigo, um post do TikTok ou do Instagram — e o Notix transcreve, escreve um resumo claro e estruturado, e transforma esse resumo em quiz e flashcards quando você precisa mesmo memorizar.',
        'Não é um gravador de voz nem uma ferramenta de transcrição. Um gravador te devolve a mesma hora de áudio que você vai ter que ouvir de novo. Uma ferramenta de transcrição te devolve um paredão de texto. O Notix te devolve o que você ia escrever de qualquer jeito: anotações organizadas, com as ideias principais separadas da enrolação.',
        'Tudo cai em um lugar só. Gravações, documentos, vídeos, artigos e posts viram uma única biblioteca com busca — então, quando você precisa do que foi dito em março, você busca nas suas próprias anotações em vez de caçar em seis apps.',
        'O Notix é grátis para começar e funciona no iPhone.',
      ],
    },

    faqTitle: 'Perguntas frequentes',

    finalCta: {
      title: 'Nunca mais perca o que importa',
      text: 'Sua próxima aula pode virar anotações claras, um quiz e um baralho de flashcards — automaticamente.',
      cta: 'Baixar na App Store',
      note: 'Comece grátis · iPhone',
    },
  },

  faq: [
    {
      q: 'Como gravar uma aula e transformar em anotações?',
      a: 'O Notix grava o áudio, transcreve e escreve um resumo estruturado automaticamente — você começa a gravação e larga o celular. Quando termina, a transcrição e o resumo já estão prontos, e você gera um quiz ou um baralho de flashcards a partir deles com um toque. Se você já tem um arquivo de áudio de outro lugar, dá para enviar esse arquivo em vez de gravar na hora.',
    },
    {
      q: 'A transcrição de áudio em texto é precisa?',
      a: 'O Notix transcreve com precisão suficiente para você trabalhar em cima, e melhora toda semana: velocidade e qualidade são o que mais trabalhamos, e as duas avançaram bastante nos últimos meses. Fala clara numa sala normal volta quase palavra por palavra. Um auditório barulhento, um microfone distante ou um sotaque carregado são mais difíceis, e os erros se concentram em termos técnicos e nomes próprios — então vale dar uma olhada na transcrição antes de confiar em um número ou um nome específico.',
    },
    {
      q: 'Dá para resumir PDF e documentos com IA?',
      a: 'Sim. Envie um PDF, um documento do Word, um arquivo de texto ou uma planilha — PDF, DOCX, TXT, RTF, CSV, XLS e XLSX são aceitos — e o Notix gera um resumo estruturado que você pode buscar, virar quiz ou transformar em flashcards. Apresentações exportadas em PDF funcionam especialmente bem, porque o resumo preenche as ligações que os slides deixam de fora.',
    },
    {
      q: 'Dá para fazer resumo de vídeos do YouTube e artigos da web?',
      a: 'Sim. Cole um link do YouTube ou a URL de um artigo e o Notix transforma em anotações, quiz e flashcards — do mesmo jeito que faz com o áudio que você gravou. Os resumos do YouTube são montados a partir das legendas do vídeo, então um vídeo com as legendas desativadas ainda não dá para resumir.',
    },
    {
      q: 'O Notix resume posts de redes sociais?',
      a: 'Sim. Cole o link de um post do TikTok, Instagram, X ou Reddit e o Notix tira o que tem dentro: transcreve o áudio do vídeo, lê o texto das imagens e dos slides, e junta a legenda — depois escreve um resumo que fica guardado com você. É o jeito de salvar algo útil que passou na rolagem, sem deixar para você mesmo um link que nunca mais vai abrir.',
    },
    {
      q: 'O que acontece com minhas gravações e arquivos?',
      a: 'Sua gravação de áudio fica no seu aparelho — ela não é guardada nos nossos servidores. Um documento que você envia é apagado dos nossos servidores assim que termina de ser processado; o que fica é o resultado: a transcrição e o resumo. Quando você exclui uma anotação, ela some da sua biblioteca na hora e é apagada em definitivo depois de 30 dias — essa janela existe para que uma exclusão acidental ainda possa ser desfeita. Seu conteúdo nunca é usado para treinar modelos de IA, e nunca vendemos nada disso.',
    },
    {
      q: 'O Notix funciona offline?',
      a: 'A transcrição e o resumo rodam nos nossos servidores, então você precisa de conexão para transformar áudio ou um PDF em anotações. Tudo que já foi gerado fica salvo no seu aparelho, então suas anotações, resumos, quizzes e flashcards podem ser lidos offline — no avião ou num subsolo sem sinal, sua biblioteca continua ali.',
    },
    {
      q: 'O Notix é gratuito?',
      a: 'O Notix é grátis para começar: você pode gravar, criar anotações e fazer quiz e flashcards sem pagar nada. O Notix Pro tira os limites — horas de gravação ilimitadas, perguntas de quiz ilimitadas e resumo de PDF e de vídeo. São dois planos, mensal e anual: o mensal vem com 3 dias de teste grátis e o anual com 7 dias. Nada é cobrado antes do teste terminar, e o preço em reais aparece na página do Notix na App Store.',
    },
    {
      q: 'Posso cancelar quando quiser?',
      a: 'Sim. A assinatura é gerenciada pelo seu Apple ID na App Store, e você pode cancelar por lá a qualquer momento em dois toques. Cancelar interrompe a próxima cobrança; o Pro continua ativo até o fim do período que você já pagou, e suas anotações ficam na sua biblioteca de qualquer forma.',
    },
    {
      q: 'Quais idiomas o Notix suporta?',
      a: 'A interface do app está disponível em inglês, espanhol, francês, alemão, russo e polonês. A transcrição não se limita a esses seis — o Notix dá conta dos principais idiomas do mundo, e seus resumos e quizzes voltam no idioma que você escolheu, então dá para gravar em um idioma e ler as anotações em outro.',
    },
  ],

  support: {
    seoTitle: 'Suporte — Notix',
    seoDescription:
      'Ajuda com o Notix: fale com nosso time de suporte, relate um erro ou tire dúvidas sobre sua assinatura.',
    title: 'Suporte',
    replyTime: 'Costumamos responder em 1–2 dias úteis.',
    contactCardTitle: 'Escreva para a gente',
    contactCardText: 'Para qualquer dúvida, erro ou sugestão:',

    reportingTitle: 'Relatar um problema',
    reportingIntro: 'Para consertarmos mais rápido, inclua:',
    reportingItems: [
      'O modelo do seu aparelho e a versão do iOS',
      'A versão do Notix, se você souber',
      'O que você fez, o que esperava e o que aconteceu no lugar',
      'Uma captura ou gravação de tela, se der',
    ],

    billingTitle: 'Assinaturas e cobrança',
    billingTextLead:
      'As assinaturas do Notix Pro são cobradas pelo seu Apple ID. Você pode gerenciar ou cancelar quando quiser nos ajustes do seu aparelho:',
    billingSettingsPath: 'Ajustes → seu nome → Assinaturas',
    billingRefundsLead:
      'Os reembolsos de compras na App Store são tratados pela Apple — você pode solicitar em',

    accountTitle: 'Conta e dados',
    accountTextLead:
      'Você pode excluir sua conta e todos os dados associados direto no app:',
    accountSettingsPath: 'Ajustes → Dados da conta → Excluir conta',
    accountTextTail:
      'Sua conta e seus dados são excluídos em definitivo depois de 30 dias; se você entrar de novo dentro desse prazo, a exclusão é cancelada.',
    accountPrivacyLead: 'Para dúvidas sobre dados, veja nossa',
    accountPrivacyLink: 'Política de Privacidade',
    accountPrivacyTail: 'ou escreva para a gente.',

    recordingTitle: 'Gravar aulas e reuniões',
    recordingText:
      'O Notix ajuda você a guardar o material que você tem direito de guardar. As regras sobre gravação mudam de escola para escola, de empresa para empresa e de país para país, e em alguns lugares todo mundo na sala precisa concordar antes de começar — então confira as regras que valem para você antes de tocar em gravar.',
  },

  notFound: {
    seoTitle: 'Página não encontrada — Notix',
    seoDescription:
      'Página não encontrada — Notix. A página que você procura não existe ou mudou de lugar.',
    titleLead: '404 — esta página não fez',
    titleEmphasis: 'nenhuma anotação',
    text: 'A página que você procura não existe ou mudou de lugar.',
    cta: 'Voltar ao início',
  },

  resetPassword: {
    seoTitle: 'Redefinir sua senha — Notix',
    seoDescription:
      'Abra este link no celular em que o app Notix está instalado para criar uma senha nova.',
    title: 'Abra este link no seu celular',
    text: 'A senha é redefinida dentro do app Notix. Abra o link do e-mail no iPhone ou no celular Android em que o Notix está instalado — ele leva direto para a tela de senha nova.',
    noAppText:
      'Ainda não tem um celular com o Notix? Instale o app e toque no link de novo. O link funciona por 30 minutos.',
    cta: 'Baixar na App Store',
  },
} satisfies Dictionary;
