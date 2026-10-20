import type {
  LearningObjective,
  TimelineEvent,
  ConceptDeepDive,
  AIType,
  SectorApplication,
  EducationalBenefit,
  EducationalLimitation,
  TeacherVsAIPillar,
  TeacherFunction,
  AITool,
  TuringScenario,
  ClassificationScenario,
  EthicalDilemma,
  QuizQuestion,
  BibliographicReference
} from '../types/index.ts';

export const COURSE_INFO = {
  trainingTitle: "Inteligência Artificial na Educação: Estratégias, Ferramentas e Práticas Pedagógicas",
  moduleTitle: "Módulo 1: Fundamentos da Inteligência Artificial (IA)",
  subtitle: "Transcrição Integral de Conteúdo e Guia de Estudo — Curso Inteligência Artificial na Educação",
  author: "Carla Oliveira",
  creationDate: "14 de janeiro de 2026",
  originalTitle: "inteligenciaartificialmod1 (Genially)",
  pdfFileUrl: "./recurso-modulo1-fundamentos-ia.pdf",
  originalPdfAssetUrl: "./assets/aistudio/ACFrOgDPjsi1z6paGFDyZ35r7ZBwiWdt-wpBoLRqWyz_XPypIOepm1cdDf-mBKtidfe9MrRETgdV0IKpZGxKB1WsSLkr-8YS2rWC5tp_czLiCNrCDvQGpxYLWk_wUq9DduLWzl2WaZiGrxBeYhxh_5f43ac52.pdf"
};

export const LEARNING_OBJECTIVES: LearningObjective[] = [
  {
    id: 1,
    text: "Reconhecer a evolução histórica da Inteligência Artificial.",
    iconName: "History"
  },
  {
    id: 2,
    text: "Compreender os conceitos essenciais da Inteligência Artificial.",
    iconName: "Brain"
  },
  {
    id: 3,
    text: "Diferenciar a IA analítica (tradicional) da IA generativa.",
    iconName: "GitCompare"
  },
  {
    id: 4,
    text: "Identificar os benefícios e as limitações da IA na Educação.",
    iconName: "CheckCircle2"
  }
];

export const AI_DEFINITION = {
  title: "Conceito de Inteligência Artificial (IA)",
  exactText: "A Inteligência Artificial (IA) é uma área da informática dedicada ao desenvolvimento de sistemas capazes de executar tarefas que normalmente exigem capacidades associadas à inteligência humana, como reconhecer padrões, interpretar linguagem, aprender a partir de dados ou apoiar a tomada de decisões. Os sistemas de IA utilizam diferentes técnicas computacionais, incluindo aprendizagem automática (machine learning), redes neuronais artificiais e processamento de linguagem natural, para analisar grandes volumes de dados e identificar padrões."
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1950",
    milestone: "Proposta do Teste de Turing",
    description: "Introdução do conceito de máquina inteligente por Alan Turing.",
    category: "foundations",
    impactInEducation: "Origem do debate sobre o que distingue a cognição humana da simulação mecânica."
  },
  {
    year: "1956",
    milestone: "Conferência de Dartmouth",
    description: "O termo Artificial Intelligence foi formalmente utilizado, marcando o ponto de partida científico do campo.",
    category: "foundations",
    impactInEducation: "Consolidação académica da área de investigação."
  },
  {
    year: "1960–1970",
    milestone: "Primeiros Programas de IA",
    description: "Desenvolvimento de sistemas baseados em regras e símbolos para simular formas de raciocínio humano.",
    category: "symbolic",
    impactInEducation: "Primeiras tentativas de ensino assistido por computador com lógica dedutiva e sequências de instrução programada."
  },
  {
    year: "1980–1990",
    milestone: "Sistemas Especialistas",
    description: "Sistemas computacionais para apoiar decisões em áreas específicas (medicina, engenharia) com bases de conhecimento.",
    category: "symbolic",
    impactInEducation: "Sistemas tutores inteligentes pioneiros baseados em regras rígidas de 'se-então'."
  },
  {
    year: "1997",
    milestone: "Máquina vence Ser Humano",
    description: "O computador Deep Blue (IBM) venceu o campeão mundial de xadrez Garry Kasparov num encontro oficial.",
    category: "ml",
    impactInEducation: "Demonstração pública de que a força bruta computacional e a avaliação heurística superam o campeão mundial em domínios delimitados."
  },
  {
    year: "2000–2010",
    milestone: "Expansão da Aprendizagem Automática",
    description: "Aumento da capacidade computacional e disponibilidade de dados impulsionam algoritmos de machine learning.",
    category: "ml",
    impactInEducation: "Início das plataformas de análise de desempenho escolar e sistemas de recomendação de exercícios."
  },
  {
    year: "2012",
    milestone: "Revolução do Deep Learning",
    description: "Modelos de redes neuronais profundas demonstram melhorias significativas no reconhecimento de imagem e voz.",
    category: "deeplearning",
    impactInEducation: "Aparecimento de transcrição automática de voz, reconhecimento ótico e ferramentas de acessibilidade."
  },
  {
    year: "2020 - ...",
    milestone: "IA Generativa",
    description: "Modelos de grande dimensão passam a gerar texto, imagem, áudio e código com base em padrões aprendidos.",
    category: "generative",
    impactInEducation: "Revolução na criação de materiais pedagógicos, co-criação didática, tutores de linguagem natural e novos desafios de avaliação."
  }
];

export const CONCEPT_DEEP_DIVES: ConceptDeepDive[] = [
  {
    title: "Teste de Turing",
    subtitle: "Conceito Histórico e Filosófico (Alan Turing, 1950)",
    description: "Ideia apresentada por Alan Turing (não um teste realizado na prática) com o objetivo de perceber se uma máquina conseguia comunicar e comportar-se de forma semelhante a uma pessoa. Na teoria, uma pessoa conversava por escrito com dois participantes sem os ver (um ser humano e uma máquina); se a máquina respondesse de forma tão natural que a pessoa não conseguisse perceber a diferença, a máquina podia ser considerada inteligente.",
    pedagogicalContext: "Na educação, levanta a questão fulcral: falar fluentemente significa compreender de verdade? A IA reproduz sintaxe e probabilidade estatística, mas não possui intencionalidade ou consciência pedagógica.",
    keyPoints: [
      "Comunicação exclusivamente por escrito para evitar influência física ou visual.",
      "Avaliação de comportamento indistinguível do humano.",
      "Experimento mental de Alan Turing publicado na revista 'Mind' (1950)."
    ]
  },
  {
    title: "Deep Learning (Aprendizagem Profunda)",
    subtitle: "Fundamento das Redes Neuronais Profundas",
    description: "Área da IA que permite aos computadores aprenderem a partir de grandes quantidades de dados, de forma semelhante ao modo como o cérebro humano processa informação. É utilizado em tecnologias do dia a dia como reconhecimento facial, assistentes virtuais, tradução automática, recomendação de conteúdos e análise de imagens médicas.",
    pedagogicalContext: "Alimenta os assistentes modernos, a tradução em tempo real para alunos estrangeiros e a síntese de documentos complexos.",
    keyPoints: [
      "Inspirado na estrutura em camadas das redes neuronais biológicas.",
      "Processa dados não estruturados (áudio, imagem, linguagem natural).",
      "É a base científica que permitiu o salto da IA Generativa recente."
    ]
  }
];

export const AI_TYPES: AIType[] = [
  {
    id: "ani",
    name: "IA Fraca / Estreita",
    fullName: "ANI - Artificial Narrow Intelligence",
    definition: "Único tipo de IA existente atualmente. Sistemas desenvolvidos para executar tarefas específicas (reconhecimento de voz, classificação de imagens, recomendações). Não possuem compreensão geral nem transferem conhecimento.",
    currentState: "Único tipo existente atualmente na prática (inclui ChatGPT, tradutores, motores de recomendação).",
    references: "Russell & Norvig (2016): É limitada a tarefas específicas e não transfere conhecimento para outros domínios.",
    pedagogicalRelevance: "Todas as ferramentas que os professores utilizam hoje são ANI: excelentes na sua tarefa, mas desprovidas de bom senso ou compreensão global.",
    statusBadge: "Realidade Atual (100%)"
  },
  {
    id: "agi",
    name: "IA Forte / Geral",
    fullName: "AGI - Artificial General Intelligence",
    definition: "IA teórica que ainda não existe. Teria a capacidade de aprender, adaptar-se a situações novas, resolver problemas variados e aplicar conhecimentos em diferentes áreas como o cérebro humano.",
    currentState: "Conceito teórico em investigação; ainda não foi alcançado.",
    references: "Russell & Norvig (2016) e Kurzweil (2005): Sistemas capazes de aprender, generalizar e adaptar flexivelmente sem reprogramação.",
    pedagogicalRelevance: "Capacidade de ensinar qualquer matéria adaptando-se a qualquer contexto como um humano faria, transferindo competências.",
    statusBadge: "Teórico / Em Investigação"
  },
  {
    id: "asi",
    name: "IA Superinteligente",
    fullName: "ASI - Artificial Superintelligence",
    definition: "Conceito hipotético que descreve uma IA capaz de ultrapassar a inteligência humana em todas as áreas (raciocínio, criatividade, decisão). Abordada em contextos teóricos, éticos e filosóficos.",
    currentState: "Hipotético / Especulativo a longo prazo.",
    references: "Bostrom (2014) e Kurzweil (2005): Analisam a Singularidade e os riscos/oportunidades pedagógicos e existenciais.",
    pedagogicalRelevance: "Gera debates éticos sobre o futuro da humanidade, da autonomia do pensamento e da governação educativa.",
    statusBadge: "Hipotético / Futuro"
  }
];

export const ANALYTICAL_VS_GENERATIVE = {
  analytical: {
    title: "IA Analítica (Tradicional)",
    references: "Segundo Mitchell (1997) e Bishop (2006)",
    description: "Desenvolveu-se principalmente para analisar dados e apoiar a tomada de decisão, recorrendo a técnicas de aprendizagem automática e de reconhecimento de padrões.",
    keyActions: [
      "Classificar e agrupar dados existentes",
      "Fazer previsões e identificar anomalias",
      "Reconhecer imagens, voz e tabelas numéricas",
      "Apoiar decisões baseadas em correlações estatísticas"
    ],
    schoolExample: "Sistema que prevê risco de abandono escolar analisando faltas e notas, ou detetor de plágio que compara texto com bases de dados."
  },
  generative: {
    title: "IA Generativa",
    references: "Segundo Brown et al. (2020) e Bommasani et al. (2021)",
    description: "Corresponde a uma fase recente da IA, assente em modelos de grande dimensão treinados com grandes volumes de dados, permitindo gerar conteúdos originais (texto, imagem, áudio, código) a partir dos padrões aprendidos.",
    keyActions: [
      "Criar novo texto explicativo, narrativo ou instrucional",
      "Gerar ilustrações, diagramas e materiais visuais",
      "Sintetizar, reescrever e adaptar para diferentes níveis de leitura",
      "Criar código informático, tabelas e rubricas de avaliação"
    ],
    schoolExample: "ChatGPT gerando um plano de aula diferenciado para o 7.º ano ou Diffit adaptando um texto científico para alunos com necessidades educativas."
  }
};

export const SECTOR_APPLICATIONS: SectorApplication[] = [
  {
    id: "seguranca",
    sector: "Segurança",
    icon: "ShieldCheck",
    utility: "Prevenir riscos e detetar ameaças no mundo físico e digital, analisando dados para identificar padrões suspeitos.",
    examples: [
      "Reconhecimento facial",
      "Deteção de fraudes financeiras",
      "Proteção contra ataques informáticos"
    ],
    educationConnection: "Proteção de redes escolares, integridade de acessos e segurança cibernética dos dados dos alunos."
  },
  {
    id: "saude",
    sector: "Saúde",
    icon: "HeartPulse",
    utility: "Apoiar profissionais no diagnóstico precoce, análise de imagens médicas, cirurgias robóticas, triagem hospitalar e acompanhamento.",
    examples: [
      "Apoio ao diagnóstico clínico",
      "Sistemas automáticos de apoio a pacientes",
      "Antecipação de surtos/doenças"
    ],
    educationConnection: "Deteção precoce de dificuldades cognitivas, apoio fonoaudiológico e saúde mental na comunidade escolar."
  },
  {
    id: "transportes",
    sector: "Transportes",
    icon: "Car",
    utility: "Mobilidade mais segura e eficiente através de veículos autónomos, navegação inteligente e gestão urbana de tráfego.",
    examples: [
      "Carros com condução assistida",
      "Otimização de rotas em tempo real",
      "Controlo inteligente de semáforos"
    ],
    educationConnection: "Otimização das rotas de transporte escolar e gestão de frotas de autocarros escolares."
  },
  {
    id: "comercio",
    sector: "Comércio / Serviços",
    icon: "ShoppingBag",
    utility: "Melhorar a experiência do cliente, analisar comportamentos de compra, recomendar produtos e automatizar atendimento.",
    examples: [
      "Recomendações em lojas online",
      "Chatbots de suporte ao cliente",
      "Previsão de vendas e gestão de stocks"
    ],
    educationConnection: "Sistemas de recomendação de livros em bibliotecas escolares e secretarias digitais com chatbots informativos."
  },
  {
    id: "industria",
    sector: "Indústria",
    icon: "Factory",
    utility: "Aumentar a eficiência e segurança produtiva, prevendo falhas em máquinas, otimizando linhas e aplicando robótica.",
    examples: [
      "Manutenção preditiva de equipamentos",
      "Robôs industriais colaborativos",
      "Controlo automático de qualidade"
    ],
    educationConnection: "Formação técnica/profissional, simuladores de oficinas digitais e laboratórios virtuais de aprendizagem."
  },
  {
    id: "agricultura",
    sector: "Agricultura",
    icon: "Wheat",
    utility: "Agricultura de precisão na monitorização de culturas, previsão de colheitas e redução de desperdícios.",
    examples: [
      "Deteção de pragas agrícolas",
      "Uso de drones para análise de campos",
      "Otimização do consumo de água"
    ],
    educationConnection: "Educação ambiental e científica, projetos STEM sobre sustentabilidade e hortas escolares inteligentes."
  },
  {
    id: "educacao",
    sector: "Educação",
    icon: "GraduationCap",
    utility: "Aprendizagem personalizada ao ritmo do aluno, criação rápida de recursos interativos e apoio à avaliação.",
    examples: [
      "Plataformas adaptativas de aprendizagem",
      "Correção automática e orientadora de exercícios",
      "Assistentes virtuais de estudo e tutoria"
    ],
    educationConnection: "Foco principal da nossa formação: potencializar o professor e transformar as práticas pedagógicas."
  },
  {
    id: "entretenimento",
    sector: "Entretenimento",
    icon: "Film",
    utility: "Recomendar conteúdos multimédia, gerar música/imagens/vídeos e analisar preferências do público.",
    examples: [
      "Sugestões de filmes e músicas em streaming",
      "Criação automática de conteúdos multimédia",
      "Edição inteligente de vídeo e som"
    ],
    educationConnection: "Gamificação didática, criação de narrativas interativas (storytelling) e podcasts educativos para os alunos."
  }
];

export const EDUCATIONAL_BENEFITS: EducationalBenefit[] = [
  {
    number: 1,
    title: "Personalização da aprendizagem",
    summary: "Adapta atividades, explicações e exercícios ao ritmo e às dificuldades de cada aluno.",
    teacherPractice: "Permite reforçar conteúdos onde cada aluno tem mais dificuldade; o professor continua a decidir, mas com mais informação.",
    allowsTeacher: "Diferenciar percursos formativos sem sobrecarga extrema de tempo.",
    studentImpact: "Aprender no seu próprio ritmo, sem frustração por desfasamento de nível.",
    badge: "Diferenciação Pedagógica"
  },
  {
    number: 2,
    title: "Criação de conteúdos de forma rápida e eficiente",
    summary: "Automatiza tarefas repetitivas (planeamento, preparação de materiais, criação de rubricas), reduzindo a carga administrativa.",
    teacherPractice: "Permite criar materiais mais rapidamente, em diferentes formatos, focando-se mais na interação direta com os alunos.",
    allowsTeacher: "Focar o tempo docente na mediação humana e na tutoria pedagógica.",
    studentImpact: "Materiais mais ricos, contextualizados, atualizados e multimodais.",
    badge: "Eficiência Docente"
  },
  {
    number: 3,
    title: "Feedback mais rápido e orientador",
    summary: "Fornece feedback imediato, ajudando os alunos a identificar erros e a melhorar no processo.",
    teacherPractice: "Permite dar feedback com maior frequência, acompanhar continuamente o trabalho e valorizar o processo de aprendizagem.",
    allowsTeacher: "Intervir a tempo de apoiar a superação de dificuldades e não apenas na nota final.",
    studentImpact: "Auto-regulação da aprendizagem e correção imediata do erro.",
    badge: "Avaliação Formativa"
  },
  {
    number: 4,
    title: "Inclusão e acessibilidade",
    summary: "Torna os conteúdos mais acessíveis para alunos com dificuldades de leitura, línguas ou necessidades educativas especiais.",
    teacherPractice: "Permite apoiar alunos com necessidades especiais, criar conteúdos em vários formatos e promover equidade no acesso.",
    allowsTeacher: "Acomodar múltiplos estilos e barreiras linguísticas na mesma turma.",
    studentImpact: "Acesso democratizado ao currículo e maior autonomia em sala de aula.",
    badge: "Equidade & NEE"
  },
  {
    number: 5,
    title: "Aprendizagem interativa com assistentes virtuais",
    summary: "Promove a aprendizagem ativa através do diálogo, exploração e interação constante.",
    teacherPractice: "Permite estimular a curiosidade e o pensamento crítico, apoiar o estudo autónomo e oferecer apoio imediato sem substituir o docente.",
    allowsTeacher: "Orientar pesquisas guiadas e desafiar os alunos a interrogar as respostas da IA.",
    studentImpact: "Diálogo socrático, exploração de hipóteses e estudo autónomo orientado.",
    badge: "Metodologias Ativas"
  }
];

export const EDUCATIONAL_LIMITATIONS: EducationalLimitation[] = [
  {
    id: "pedagogicas",
    dimension: "Limitações Pedagógicas",
    problemDescription: "A IA não entende a intencionalidade pedagógica nem os contextos sociais, emocionais ou culturais dos alunos; apenas gera respostas prováveis com base em dados.",
    pedagogicalChallenge: "A mediação do professor é indispensável para garantir a qualidade pedagógica.",
    severity: "critica",
    practicalExample: "Uma IA pode gerar uma atividade gramatical correta, mas sem qualquer ligação com a vivência real da turma ou com a intenção pedagógica do docente."
  },
  {
    id: "feedback",
    dimension: "Feedback Automatizado: Alcance e Limites",
    problemDescription: "Rápido, mas tende a ser genérico e baseado em padrões linguísticos. Tem dificuldade em avaliar o pensamento crítico, a criatividade e o processo.",
    pedagogicalChallenge: "Risco pedagógico de confundir rapidez de resposta com qualidade pedagógica.",
    severity: "alta",
    practicalExample: "Elogiar um texto fluente gerado mecanicamente ignorando se o aluno realmente construiu o raciocínio ou articulou uma visão pessoal."
  },
  {
    id: "dependencia",
    dimension: "Dependência e Empobrecimento Cognitivo",
    problemDescription: "O uso excessivo pode reduzir o esforço intelectual dos alunos, fragilizando competências essenciais como a escrita, a argumentação e a resolução de problemas.",
    pedagogicalChallenge: "Questão central: Como usar a IA sem substituir o próprio processo de aprender?",
    severity: "critica",
    practicalExample: "Alunos copiarem resumos inteiros gerados sem lerem o livro, atrofiando a capacidade de síntese e a concentração em textos longos."
  },
  {
    id: "cognitivas",
    dimension: "Limitações Cognitivas e Produção do Conhecimento",
    problemDescription: "Pode gerar informação incorreta ou desatualizada (alucinações), não valida a veracidade e não compreende relações causais.",
    pedagogicalChallenge: "A IA simula conhecimento, mas não o compreende nem o constrói verdadeiramente.",
    severity: "alta",
    practicalExample: "A IA inventar citações bibliográficas falsas ou misturar factos históricos com total aparente convicção e fluência."
  },
  {
    id: "eticas",
    dimension: "Limitações Éticas",
    problemDescription: "Os modelos refletem e amplificam preconceitos culturais, estereótipos sociais e desigualdades estruturais dos dados com que foram treinados.",
    pedagogicalChallenge: "Exige análise crítica dos outputs e discussão ética orientada pelo professor.",
    severity: "alta",
    practicalExample: "Imagens geradas associando certas profissões apenas a determinados géneros ou etnias, reproduzindo vieses históricos da Internet."
  },
  {
    id: "rgpd",
    dimension: "Privacidade e Proteção de Dados (RGPD)",
    problemDescription: "Riscos na recolha de dados pessoais, armazenamento fora da UE e utilização de dados de menores para treino futuro de modelos.",
    pedagogicalChallenge: "Necessidade estrita de cumprimento do Regulamento Geral sobre a Proteção de Dados (RGPD / Regulamento UE 2016/679).",
    severity: "critica",
    practicalExample: "Colocar nomes completos, notas, relatórios clínicos de alunos ou fotografias em plataformas de IA públicas sem enquadramento legal."
  },
  {
    id: "avaliacao",
    dimension: "Limitações na Avaliação",
    problemDescription: "Dificuldade em garantir a autoria dos alunos, avaliar o processo de aprendizagem e determinar quando o apoio da IA se torna excessivo.",
    pedagogicalChallenge: "Exige repensar as práticas avaliativas (foco na avaliação formativa e na oralidade).",
    severity: "alta",
    practicalExample: "Avaliar apenas o produto final (trabalho escrito em casa) em vez de avaliar as defesas orais, o rascunho em aula e o processo de pesquisa."
  },
  {
    id: "contextuais",
    dimension: "Limitações Contextuais e Profissionais",
    problemDescription: "Desigualdade no acesso à tecnologia e às competências digitais entre alunos e escolas.",
    pedagogicalChallenge: "Risco de acentuar desigualdades educativas e sociais já existentes.",
    severity: "moderada",
    practicalExample: "Alunos com acesso a ferramentas pagas e ligação rápida têm vantagens substanciais face a alunos sem conectividade em casa."
  }
];

export const TEACHER_VS_AI_PILLARS: TeacherVsAIPillar[] = [
  {
    id: "afeto",
    pilar: "Conexões & Afeto",
    icon: "Heart",
    professorHuman: "Estabelece conexões, ajusta o ensino ao contexto emocional e liga o conteúdo aos interesses dos alunos.",
    aiTool: "Fornece ferramentas e identifica erros com base em dados de desempenho, mas não compreende o contexto emocional nem oferece afeto.",
    keyReflection: "Um algoritmo reconhece a resposta errada; o professor percebe que o aluno está triste, inseguro ou a viver um momento difícil."
  },
  {
    id: "interpessoal",
    pilar: "Competências Interpessoais",
    icon: "Users",
    professorHuman: "Ajuda ativamente no desenvolvimento de empatia, comunicação eficaz, colaboração e resolução de conflitos.",
    aiTool: "Foca-se no conteúdo cognitivo e teórico. É incapaz de ensinar competências emocionais ou modelar o comportamento social.",
    keyReflection: "Aprender a cooperar em grupo, ouvir opiniões divergentes e gerir frustrações só se aprende na convivência humana orientada."
  },
  {
    id: "etica",
    pilar: "Ética & Pensamento Crítico",
    icon: "Compass",
    professorHuman: "Ensina a questionar fontes, refletir criticamente e utilizar a tecnologia com responsabilidade e consciência ética.",
    aiTool: "Fornece respostas instantâneas como base de dados, mas não possui consciência ética, reflexão nem validação crítica da informação.",
    keyReflection: "A IA entrega a resposta 'pronta'; o professor ensina a duvidar, a verificar evidências e a debater valores morais."
  },
  {
    id: "holistico",
    pilar: "Acompanhamento Holístico",
    icon: "Eye",
    professorHuman: "Observa o progresso para além dos números, valorizando o esforço e atuando como modelo inspirador e motivacional.",
    aiTool: "Avalia apenas dados quantitativos e métricas numéricas. Mede respostas corretas, mas não avalia a dedicação nem inspira.",
    keyReflection: "A IA pontua de 0 a 100; o professor reconhece a superação do aluno que saiu do 10 para o 50 com esforço heroico."
  }
];

export const TEACHER_FUNDAMENTAL_FUNCTIONS: TeacherFunction[] = [
  {
    number: 1,
    title: "Orientar com intencionalidade o processo de aprendizagem",
    description: "Definir os objetivos educativos, a progressão das ideias e o sentido de cada tarefa que os alunos realizam."
  },
  {
    number: 2,
    title: "Promover o pensamento crítico e a literacia da informação",
    description: "Capacitar os estudantes para interrogar, comparar fontes, identificar falhas e nunca aceitar saídas de IA acriticamente."
  },
  {
    number: 3,
    title: "Desenvolver competências sociais e emocionais nos alunos",
    description: "Construir empatia, resiliência, escuta ativa, diálogo democrático e trabalho de equipa em ambiente de sala de aula."
  },
  {
    number: 4,
    title: "Apoiar os alunos na utilização ética, segura e responsável da tecnologia",
    description: "Proteger os dados dos estudantes (RGPD), combater a fraude académica e sensibilizar para os impactos sociais da tecnologia."
  }
];

export const AI_TOOLS: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT (OpenAI)",
    category: "planeamento",
    pedagogicalApplications: "Criar planos de aula, exercícios, sumarização e explicação de textos.",
    howToUseInClass: "Apoio ao professor na preparação prévia: gerar analogias explicativas, criar conjuntos de questões com diferentes graus de dificuldade e simular contra-argumentos.",
    promptExample: "Atua como professor de História. Cria 3 exercícios diferenciados sobre a Expansão Marítima Portuguesa para alunos do 7.º ano com rubrica de avaliação.",
    url: "https://chatgpt.com",
    badge: "LLM Multifunções"
  },
  {
    id: "canva",
    name: "Canva com IA",
    category: "conteudo-visual",
    pedagogicalApplications: "Criar apresentações, infográficos e vídeos educativos interativos.",
    howToUseInClass: "Geração de recursos visuais acessíveis para quadros interativos e fichas ilustradas para apoiar a retenção visual de conceitos.",
    promptExample: "Gera um infográfico com o tema 'Ciclo da Água na Natureza' com legendas claras e linguagem simples para o 1.º ciclo.",
    url: "https://www.canva.com",
    badge: "Design Educativo"
  },
  {
    id: "magicschool",
    name: "MagicSchool.ai",
    category: "planeamento",
    pedagogicalApplications: "Criar automaticamente materiais pedagógicos (testes, perguntas, rubricas).",
    howToUseInClass: "Plataforma desenhada especificamente para professores com mais de 60 assistentes direcionados ao contexto escolar.",
    promptExample: "Seleciona o assistente de Rubricas: Cria uma rubrica de avaliação para debate em sala de aula de Cidadania e Desenvolvimento.",
    url: "https://www.magicschool.ai",
    badge: "Foco Exclusivo Docente"
  },
  {
    id: "diffit",
    name: "Diffit",
    category: "adaptacao",
    pedagogicalApplications: "Adaptar e diferenciar textos para diferentes níveis de leitura e compreensão.",
    howToUseInClass: "Introduzir um tema ou artigo e obter versões ajustadas (nível de leitura adaptado) com vocabulário de apoio, perguntas e resumos para inclusão.",
    promptExample: "Introduz um artigo científico ou texto complexo sobre as alterações climáticas e gera uma versão adaptada a nível de leitura de 6.º ano com glossário.",
    url: "https://web.diffit.me",
    badge: "Diferenciação & Inclusão"
  },
  {
    id: "curipod",
    name: "Curipod",
    category: "interacao-avaliacao",
    pedagogicalApplications: "Criar apresentações interativas com participação dos alunos em tempo real.",
    howToUseInClass: "Lançar perguntas no ecrã com votação ao vivo, desenhos dos alunos e feedback com recurso a IA para promover a participação ativa.",
    promptExample: "Cria uma aula interativa de 15 minutos sobre 'Energias Renováveis' com 2 momentos de sondagem e 1 momento de desenho participativo.",
    url: "https://curipod.com",
    badge: "Apresentações Ativas"
  },
  {
    id: "gamma",
    name: "Gamma / Ai Gallery",
    category: "conteudo-visual",
    pedagogicalApplications: "Geração automática de apresentações e criação de imagens ilustrativas.",
    howToUseInClass: "Estruturar blocos de conteúdo pedagógico e converter notas de aula em páginas web ou diapositivos modernos num clique.",
    promptExample: "Gera uma apresentação de 8 diapositivos sobre 'Ecossistemas e Cadeias Tróficas' com visual limpo e minimalista.",
    url: "https://gamma.app",
    badge: "Slides & Docs IA"
  },
  {
    id: "teachmateai",
    name: "TeachMateAI",
    category: "planeamento",
    pedagogicalApplications: "Planear aulas e estruturar recursos alinhados ao currículo.",
    howToUseInClass: "Assistente focado em economizar horas na elaboração de planos curriculares e documentação letiva.",
    promptExample: "Planificação de unidade didática com objetivos de aprendizagem, momentos de avaliação diagnóstica e tarefas de consolidação.",
    url: "https://teachmateai.com",
    badge: "Planeamento Curricular"
  },
  {
    id: "quizizz",
    name: "Quizizz / Quizlet com IA",
    category: "interacao-avaliacao",
    pedagogicalApplications: "Gerar quizzes e cartões de estudo automáticos a partir de documentos.",
    howToUseInClass: "Carregar um texto ou excerto e converter imediatamente em jogo de perguntas para avaliação diagnóstica formativa na turma.",
    promptExample: "Gera um quiz de 10 perguntas de escolha múltipla a partir das notas da aula sobre 'A Revolução Francesa'.",
    url: "https://quizizz.com",
    badge: "Gamificação & Quizzes"
  },
  {
    id: "ttsfree",
    name: "TTSFree.com / Vidnoz",
    category: "conteudo-visual",
    pedagogicalApplications: "Transformar texto em voz (narração) e gerar vídeos educativos com avatares.",
    howToUseInClass: "Criar narrações acessíveis para alunos com dislexia ou apoio na aprendizagem de línguas estrangeiras e Português Língua Não Materna (PLNM).",
    promptExample: "Converter o guião de introdução à aula num ficheiro áudio de voz clara em Português de Portugal para reprodução na aula.",
    url: "https://ttsfree.com",
    badge: "Voz & Avatares"
  },
  {
    id: "chatpdf",
    name: "ChatPDF / AlsoAsked",
    category: "pesquisa-analise",
    pedagogicalApplications: "Interrogar documentos PDF e criar mapas mentais de perguntas exploratórias.",
    howToUseInClass: "Submeter um regulamento escolar, orientações curriculares ou artigo longo e formular perguntas diretas para encontrar passagens específicas.",
    promptExample: "Qual a metodologia recomendada neste documento para o desenvolvimento de projetos interdisciplinares?",
    url: "https://www.chatpdf.com",
    badge: "Análise de Documentos"
  },
  {
    id: "notebooklm",
    name: "NotebookLM (Google)",
    category: "pesquisa-analise",
    pedagogicalApplications: "Analisar documentos, sintetizar fontes, responder a dúvidas e criar resumos.",
    howToUseInClass: "Ambiente fundamentado com citações diretas das fontes enviadas pelo professor, ideal para preparar sínteses e debates sem alucinações livres da web.",
    promptExample: "Analisa os 3 capítulos carregados e cria um guia de estudo com perguntas de revisão e conceitos essenciais.",
    url: "https://notebooklm.google.com",
    badge: "Estudo Fundamentado"
  },
  {
    id: "decktoys",
    name: "Deck.Toys / Figjam / SchoolHub",
    category: "interacao-avaliacao",
    pedagogicalApplications: "Percursos gamificados, quadros colaborativos e chatbots educacionais.",
    howToUseInClass: "Criar percursos didáticos (escape games pedagógicos) e quadros colaborativos para debate e tempestade de ideias em sala de aula.",
    promptExample: "Construir um percurso com 5 etapas intermédias em que os alunos só avançam após resolverem um desafio matemático em grupo.",
    url: "https://deck.toys",
    badge: "Gamificação Colaborativa"
  },
  {
    id: "futuretools",
    name: "Future Tools",
    category: "pesquisa-analise",
    pedagogicalApplications: "Plataforma agregadora para pesquisar ferramentas de IA segundo necessidades específicas.",
    howToUseInClass: "Exploração e descoberta de novidades no ecossistema de inteligência artificial categorizadas por utilidade e modelo de acesso.",
    promptExample: "Filtrar por 'Education' + 'Free' para identificar novas ferramentas de apoio ao ensino.",
    url: "https://www.futuretools.io",
    badge: "Diretório de Ferramentas"
  }
];

export const BIBLIOGRAPHIC_REFERENCES: BibliographicReference[] = [
  {
    id: "bishop2006",
    citation: "Bishop, C. M. (2006). Pattern recognition and machine learning. Springer.",
    focus: "Fundamentos teóricos de aprendizagem automática e reconhecimento de padrões para IA analítica."
  },
  {
    id: "bommasani2021",
    citation: "Bommasani, R. et al. (2021). On the opportunities and risks of foundation models. Stanford University.",
    focus: "Impacto, oportunidades e riscos dos modelos fundacionais (Foundation Models) e IA generativa."
  },
  {
    id: "bostrom2014",
    citation: "Bostrom, N. (2014). Superintelligence: Paths, dangers, strategies. Oxford University Press.",
    focus: "Análise filosófica da Superinteligência (ASI), caminhos tecnológicos e dilemas existenciais."
  },
  {
    id: "brown2020",
    citation: "Brown, T. B. et al. (2020). Language models are few-shot learners. Advances in Neural Information Processing Systems.",
    focus: "Marco da IA Generativa moderna e demonstração da capacidade de grandes modelos de linguagem (LLMs)."
  },
  {
    id: "kurzweil2005",
    citation: "Kurzweil, R. (2005). The singularity is near: When humans transcend biology. Viking.",
    focus: "Exploração teórica da Singularidade Tecnológica e progressão para AGI/ASI."
  },
  {
    id: "oecd2021",
    citation: "OECD (2021). Artificial intelligence in education: Challenges and opportunities. OECD Publishing.",
    focus: "Recomendações internacionais sobre oportunidades e desafios pedagógicos da IA nas escolas."
  },
  {
    id: "rgpd2016",
    citation: "RGPD: Regulamento (UE) 2016/679 (Regulamento Geral sobre a Proteção de Dados).",
    focus: "Marco legal europeu imperativo de salvaguarda da privacidade e dados de menores na UE."
  },
  {
    id: "russell2020",
    citation: "Russell, S., & Norvig, P. (2020). Artificial intelligence: A modern approach (4th ed.). Pearson.",
    focus: "A obra de referência mundial sobre agentes inteligentes, distinção ANI/AGI e arquiteturas de IA."
  },
  {
    id: "turing1950",
    citation: "Turing, A. M. (1950). Computing machinery and intelligence. Mind, 59(236), 433–460.",
    focus: "Artigo pioneiro onde Alan Turing propôs o 'Jogo da Imitação' (Teste de Turing)."
  },
  {
    id: "unesco2021",
    citation: "UNESCO (2021). AI and education: Guidance for policy-makers.",
    focus: "Linhas orientadoras da UNESCO para políticas públicas educativas com inteligência artificial."
  },
  {
    id: "unesco2023",
    citation: "UNESCO (2023). Guidance for generative AI in education and research. Paris: UNESCO.",
    focus: "Orientações fundamentais sobre o uso ético da IA generativa no ensino e investigação."
  }
];

export const TURING_SCENARIOS: TuringScenario[] = [
  {
    id: 1,
    prompt: "Professor formando faz a pergunta: «Como explicarias a um aluno de 10 anos que tem medo de errar a importância do erro na matemática?»",
    context: "Teste de Turing (1950): Duas entidades respondem por escrito sem se verem. Uma é um professor humano experiente; a outra é uma IA com modelo de linguagem estatístico.",
    responseA: {
      text: "Eu sentava-me ao lado dele e dizia-lhe com um sorriso: «Sabes, Martim, o teu cérebro só cresce quando tropeça! Se acertasses sempre à primeira, não estavas a aprender nada novo, estavas só a repetir o que já sabias.» Depois mostrava-lhe o meu próprio rascunho cheio de riscos e dizia: «O erro aqui é apenas a pista que nos mostra onde está o tesouro. Vamos caçar a pista juntos?»",
      isHuman: true,
      analysis: "Humanidade evidente: linguagem afetiva, ancoragem situacional com nome e sorriso ('Martim'), empatia expressa, partilha da sua própria vulnerabilidade ('o meu rascunho cheio de riscos') e conexão calorosa."
    },
    responseB: {
      text: "Para explicar a importância do erro a um aluno de 10 anos, pode-se utilizar a seguinte abordagem estruturada em 4 pontos: 1) Normalizar o erro como parte natural do processo cognitivo; 2) Explicar o conceito de neuroplasticidade em linguagem simplificada; 3) Apresentar exemplos históricos de descobertas científicas que resultaram de falhas prévias; 4) Implementar uma metodologia de correção formativa sem penalização numérica imediata.",
      isHuman: false,
      analysis: "IA Generativa clássica: resposta altamente estruturada, neutra, enciclopédica e procedimental, sem intencionalidade afetiva individual nem calor humano de sala de aula."
    },
    alanTuringLesson: "Segundo Alan Turing (1950), o teste avalia se uma máquina consegue comunicar como uma pessoa por escrito. Na prática pedagógica, o calor da relação humana e a partilha da vulnerabilidade são os maiores contrastes face à geração estatística fria."
  },
  {
    id: 2,
    prompt: "Pergunta ao interlocutor: «Lembras-te do cheiro a giz e do silêncio que se faz na sala quando a turma está concentrada num teste?»",
    context: "Avaliação da vivência sensorial e corporal versus processamento de texto.",
    responseA: {
      text: "Sim, esse cenário evoca a atmosfera típica das salas de aula tradicionais. O silêncio durante uma avaliação expressa a concentração dos estudantes e reduz as distrações acústicas. O giz é composto quimicamente por sulfato de cálcio ou carbonato de cálcio, que liberta partículas com odor característico quando raspado contra a superfície do quadro negro.",
      isHuman: false,
      analysis: "IA Generativa: recorre a factos químicos e descrições externas, pois não tem corpo, sentidos ou memórias reais de vivência em sala de aula."
    },
    responseB: {
      text: "Nossa, se me lembro... Aquele pó branco que nos ficava agarrado aos dedos e na manga da camisola. E aquele silêncio é curioso: ouve-se apenas o roçar das canetas no papel e o relógio da parede a bater. Dá sempre um misto de ansiedade e orgulho por vê-los tão focados.",
      isHuman: true,
      analysis: "Humano: memória sensorial nostálgica ('pó branco na manga', 'roçar das canetas', 'misto de ansiedade e orgulho')."
    },
    alanTuringLesson: "A IA pode descrever a química do giz, mas nunca sentiu o pó nos dedos. As conexões emocionais docentes e as memórias corporais são exclusivamente humanas."
  },
  {
    id: 3,
    prompt: "Pergunta: «Um aluno desata a chorar porque tirou negativa e diz que não serve para nada. O que fazes nos primeiros 30 segundos?»",
    context: "Reação a crise emocional súbita em contexto educativo.",
    responseA: {
      text: "Recomenda-se a seguinte sequência protocolar: 1. Isolar o aluno dos colegas para preservar a privacidade; 2. Aplicar técnicas de regulação respiratória; 3. Desconstruir a crença irracional de incapacidade pessoal; 4. Agendar sessão com o gabinete de psicologia escolar.",
      isHuman: false,
      analysis: "IA: sequencial, burocrática, com linguagem de manual de procedimentos clínicos."
    },
    responseB: {
      text: "Nos primeiros segundos ignoro totalmente a nota e o teste. Abaixo-me para ficar à altura dos olhos dele, dou-lhe um lenço se precisar e digo baixinho: «Respira fundo comigo. Esta nota é apenas um número num papel hoje, não define quem tu és nem o teu valor. Estou aqui contigo e vamos resolver isto.»",
      isHuman: true,
      analysis: "Humano: postura corporal física ('abaixo-me para ficar à altura dos olhos'), afeto desinteressado, priorização imediata da pessoa antes da matéria."
    },
    alanTuringLesson: "Como destaca o PDF na pág. 5 (O Papel do Professor): o Pilar 'Conexões & Afeto' não pode ser exercido por ferramentas algorítmicas, pois estas não compreendem o contexto emocional nem oferecem afeto."
  }
];

export const CLASSIFICATION_SCENARIOS: ClassificationScenario[] = [
  {
    id: 1,
    scenario: "Um sistema escolar analisa o registo de faltas, as notas dos últimos 3 anos e a morada dos estudantes para alertar o conselho de turma sobre alunos em risco iminente de abandono escolar.",
    correctType: "analitica",
    explanation: "Trata-se de IA Analítica (Tradicional). Segundo Mitchell (1997) e Bishop (2006), foca-se em analisar grandes volumes de dados existentes, identificar correlações estatísticas e apoiar a tomada de decisão sem criar novo conteúdo.",
    citation: "Mitchell (1997) & Bishop (2006)"
  },
  {
    id: 2,
    scenario: "O professor introduz as palavras-chave de uma aula de ciências e a ferramenta escreve uma história de ficção científica original com três finais alternativos para os alunos debaterem.",
    correctType: "generativa",
    explanation: "Trata-se de IA Generativa. Segundo Brown et al. (2020) e Bommasani et al. (2021), baseia-se em modelos de fundação treinados para produzir novos artefactos originais (texto, histórias, código, imagens).",
    citation: "Brown et al. (2020) & Bommasani et al. (2021)"
  },
  {
    id: 3,
    scenario: "Uma plataforma deteta automaticamente plágio num ensaio comparando sequências de n-gramas com uma base de dados de teses e artigos científicos.",
    correctType: "analitica",
    explanation: "Trata-se de IA Analítica: reconhecimento de padrões e classificação de semelhança textual.",
    citation: "Bishop (2006)"
  },
  {
    id: 4,
    scenario: "Um professor pede a uma aplicação para adaptar um texto histórico sobre a Revolução Industrial para o nível de compreensão de um aluno com dificuldades acentuadas de leitura (Diffit).",
    correctType: "generativa",
    explanation: "Trata-se de IA Generativa: o modelo reescreve ativamente o texto, simplifica sintaxe e gera novas definições contextuais sob medida.",
    citation: "Bommasani et al. (2021)"
  },
  {
    id: 5,
    scenario: "A câmara à entrada do pavilhão gimnodesportivo faz o reconhecimento facial dos alunos para validar a assiduidade na aula de Educação Física.",
    correctType: "analitica",
    explanation: "Trata-se de IA Analítica: classificação e correspondência de padrões visuais biométricos com base de registo prévio.",
    citation: "Russell & Norvig (2016)"
  },
  {
    id: 6,
    scenario: "O docente utiliza o Canva ou Midjourney para criar uma ilustração inédita de um ecossistema marinho com animais específicos solicitados pela turma.",
    correctType: "generativa",
    explanation: "Trata-se de IA Generativa: síntese de novos pixeis e representação visual inédita com base no prompt em linguagem natural.",
    citation: "Brown et al. (2020)"
  }
];

export const ETHICAL_DILEMMAS: EthicalDilemma[] = [
  {
    id: 1,
    title: "Dilema 1: Privacidade e RGPD com Dados de Menores",
    dimension: "Privacidade e Proteção de Dados (RGPD)",
    situation: "Para poupar tempo na preparação de relatórios individuais, um professor está a pensar copiar para o ChatGPT os nomes completos dos alunos, os relatórios médicos de NEE e as notas para pedir que a IA redija as sínteses de avaliação formativa.",
    regulatoryContext: "Regulamento (UE) 2016/679 (RGPD) e orientações do Módulo 1 (pág. 5).",
    options: [
      {
        id: "a",
        text: "Pode fazer, desde que coloque que o ChatGPT é privado e não partilhe com outros professores.",
        pedagogicalFeedback: "INCORRETO E GRAVE VIOLAÇÃO DA LEI. Os servidores de modelos públicos podem armazenar dados fora da UE e utilizá-los para treino futuro. A partilha de dados de saúde ou identificação de menores viola grosseiramente o RGPD.",
        isRecommended: false
      },
      {
        id: "b",
        text: "Anonimizar rigorosamente todos os dados (ex: 'Aluno X, 12 anos, diagnóstico genérico de dislexia'), sem qualquer nome, morada ou dado pessoal identificável.",
        pedagogicalFeedback: "CORRETO E ÉTICO. O cumprimento do RGPD exige anonimização absoluta antes de qualquer inserção em modelos abertos. Nenhuma informação pessoal de menores deve ser enviada para a nuvem de plataformas de IA.",
        isRecommended: true
      },
      {
        id: "c",
        text: "Pedir autorização verbal ao delegado de turma antes de colar os relatórios.",
        pedagogicalFeedback: "INCORRETO. Uma autorização verbal de alunos não substitui o consentimento expresso dos encarregados de educação nem sana a ilegalidade de processar dados sensíveis de saúde em ferramentas não homologadas.",
        isRecommended: false
      }
    ]
  },
  {
    id: 2,
    title: "Dilema 2: Alucinação Cognitiva em Recursos Didáticos",
    dimension: "Limitações Cognitivas e Produção do Conhecimento",
    situation: "O docente pediu a uma ferramenta de IA generativa para criar um questionário com factos históricos sobre o 25 de Abril. O teste gerado inclui uma citação de uma figura histórica com data e livro fictício, inventados pela IA mas redigidos de forma muito credível.",
    regulatoryContext: "PDF Módulo 1 (pág. 4: A IA simula conhecimento, mas não o compreende nem o constrói verdadeiramente).",
    options: [
      {
        id: "a",
        text: "Imprimir e aplicar o teste diretamente, pois o modelo tem uma base de dados global que certamente sabe mais do que a memória do professor.",
        pedagogicalFeedback: "ERRO GRAVE. As IAs generativas sofrem de alucinações cognitivas e geram respostas prováveis com base em probabilidades de texto, sem validação factual.",
        isRecommended: false
      },
      {
        id: "b",
        text: "Validar, verificar cada citação e data em fontes bibliográficas fidedignas antes de aplicar, e transformar o erro da IA numa atividade de aula sobre verificação de factos e literacia da informação.",
        pedagogicalFeedback: "EXCELENTE PRÁTICA PEDAGÓGICA. O papel do professor é a mediação indispensável (pág. 4 e 5). Ao detetar a alucinação, o professor ensina aos alunos a necessidade de cruzar fontes e pensar criticamente.",
        isRecommended: true
      },
      {
        id: "c",
        text: "Proibir completamente o uso de qualquer computador ou IA na escola para sempre.",
        pedagogicalFeedback: "INEFICAZ. A proibição cega isola os alunos do mundo real. O desafio pedagógico é ensinar o uso crítico, ético e informado da tecnologia.",
        isRecommended: false
      }
    ]
  },
  {
    id: 3,
    title: "Dilema 3: Autoria e Dependência Cognitiva na Avaliação",
    dimension: "Limitações na Avaliação & Empobrecimento Cognitivo",
    situation: "Vários alunos entregaram redações com vocabulário muito sofisticado, idêntico na estrutura e sem marcas de raciocínio próprio. Os alunos admitem que pediram ao assistente de IA para escrever a redação inteira a partir de um tema curto.",
    regulatoryContext: "PDF Módulo 1 (pág. 4 e 5: 'Como usar a IA sem substituir o próprio processo de aprender? Foco na avaliação formativa e na oralidade').",
    options: [
      {
        id: "a",
        text: "Dar nota zero a todos com base na suspeita de plágio sem os ouvir.",
        pedagogicalFeedback: "INSUFICIENTE. Não desenvolve aprendizagem nem resolve o dilema pedagógico, podendo gerar injustiças e conflitos.",
        isRecommended: false
      },
      {
        id: "b",
        text: "Repensar a avaliação: realizar uma sessão de discussão oral em aula, onde cada aluno defende as suas ideias, explica as escolhas lexicais e compara o seu próprio rascunho com a sugestão da IA.",
        pedagogicalFeedback: "RESPOSTA MODELAR. Vai ao encontro exato da prescrição do PDF (pág. 5: 'Exige repensar as práticas avaliativas com foco na avaliação formativa e oralidade'). Desloca o peso do produto final para o processo cognitivo.",
        isRecommended: true
      },
      {
        id: "c",
        text: "Passar a exigir apenas testes de escolha múltipla sem qualquer espaço para escrita ou redação.",
        pedagogicalFeedback: "INADEQUADO. Reduzir a avaliação a cruzes empobrece as competências de argumentação e escrita que a escola pública tem por missão cultivar.",
        isRecommended: false
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Segundo o Módulo 1, o que é a Inteligência Artificial (IA)?",
    options: [
      "Uma ferramenta que já ultrapassou a consciência humana em todas as esferas existenciais.",
      "Uma área da informática dedicada ao desenvolvimento de sistemas capazes de executar tarefas que normalmente exigem capacidades associadas à inteligência humana.",
      "Um algoritmo estritamente matemático desenhado apenas para calcular matrizes sem relação com a linguagem.",
      "Um sistema autista de computação que não aprende a partir de dados nem identifica padrões."
    ],
    correctIndex: 1,
    explanation: "Conforme o texto exato da pág. 1: «A Inteligência Artificial (IA) é uma área da informática dedicada ao desenvolvimento de sistemas capazes de executar tarefas que normalmente exigem capacidades associadas à inteligência humana, como reconhecer padrões, interpretar linguagem, aprender a partir de dados ou apoiar a tomada de decisões.»",
    pdfSection: "Pág. 1 — Conceito de IA"
  },
  {
    id: 2,
    question: "Em que ano e por quem foi proposta a ideia do 'Teste de Turing'?",
    options: [
      "1956, por John McCarthy na Conferência de Dartmouth.",
      "1997, pela equipa do Deep Blue da IBM.",
      "1950, por Alan Turing, com o objetivo de perceber se uma máquina comunicava de forma indistinguível de um ser humano.",
      "2012, no avanço das redes neuronais profundas de Geoffrey Hinton."
    ],
    correctIndex: 2,
    explanation: "Linha do tempo (pág. 2): Em 1950, Alan Turing propôs o teste (experimento mental) na revista Mind para avaliar se uma pessoa conversando por escrito conseguia distinguir se falava com um humano ou com uma máquina.",
    pdfSection: "Pág. 2 — Linha do Tempo e Teste de Turing"
  },
  {
    id: 3,
    question: "Qual dos seguintes tipos de Inteligência Artificial é o ÚNICO que existe atualmente na prática?",
    options: [
      "IA Fraca / Estreita (ANI - Narrow Artificial Intelligence)",
      "IA Forte / Geral (AGI - General Artificial Intelligence)",
      "IA Superinteligente (ASI - Artificial Superintelligence)",
      "Inteligência Sintética Consciente Universal (ISCU)"
    ],
    correctIndex: 0,
    explanation: "Pág. 2: «IA Fraca / Estreita (ANI - Narrow): Único tipo de IA existente atualmente. Sistemas desenvolvidos para executar tarefas específicas... AGI e ASI são conceitos teóricos ou hipotéticos que ainda não existem.»",
    pdfSection: "Pág. 2 — Tipos de IA"
  },
  {
    id: 4,
    question: "Como se diferenciam a IA Analítica e a IA Generativa segundo a literatura citada no documento?",
    options: [
      "A IA Analítica gera imagens e a IA Generativa analisa folhas de cálculo.",
      "A IA Analítica (Mitchell 1997, Bishop 2006) analisa dados e apoia decisões; a IA Generativa (Brown 2020, Bommasani 2021) gera conteúdos originais (texto, imagem, áudio, código) a partir de padrões aprendidos.",
      "Não existe diferença, ambos os termos são sinónimos comerciais criados em 2023.",
      "A IA Analítica só funciona em computadores quânticos e a Generativa em telemóveis."
    ],
    correctIndex: 1,
    explanation: "Pág. 3: A IA Analítica focou-se em analisar dados e reconhecimento de padrões para apoio à decisão; a IA Generativa é a fase recente assente em modelos de grande escala capazes de gerar novos artefactos originais.",
    pdfSection: "Pág. 3 — IA Analítica vs. IA Generativa"
  },
  {
    id: 5,
    question: "Qual das seguintes afirmações sobre os Benefícios da IA na Educação está correta?",
    options: [
      "Substitui a totalidade das reuniões pedagógicas e das decisões do professor.",
      "Garante que os alunos nunca mais precisam de ler livros nem de exercitar a memória de trabalho.",
      "Permite ao professor personalizar atividades, criar conteúdos rapidamente, fornecer feedback imediato e reforçar a inclusão e acessibilidade.",
      "Transforma a escola num ambiente onde o professor apenas observa e o algoritmo define o currículo nacional."
    ],
    correctIndex: 2,
    explanation: "Pág. 4: Os 5 benefícios destacados são: Personalização, Criação rápida de conteúdos, Feedback rápido e orientador, Inclusão e acessibilidade, e Aprendizagem interativa com assistentes.",
    pdfSection: "Pág. 4 — Benefícios da IA na Educação"
  },
  {
    id: 6,
    question: "O que representa o risco de 'Alucinação Cognitiva' na utilização da IA Generativa?",
    options: [
      "O computador desligar-se por sobreaquecimento da memória RAM.",
      "A IA gerar informação incorreta, dados fictícios ou desatualizados com total aparência de veracidade, pois simula conhecimento sem compreender relações causais.",
      "O aluno sentir dores de cabeça por olhar demasiado tempo para o monitor.",
      "Um ataque de vírus informático à rede da escola."
    ],
    correctIndex: 1,
    explanation: "Pág. 4 (Limitações Cognitivas): «Pode gerar informação incorreta ou desatualizada (alucinações), não valida a veracidade e não compreende relações causais. A IA simula conhecimento, mas não o compreende nem o constrói verdadeiramente.»",
    pdfSection: "Pág. 4 — Limitações da IA"
  },
  {
    id: 7,
    question: "Em relação ao RGPD (Regulamento UE 2016/679), que cuidado essencial os professores devem observar?",
    options: [
      "Devem carregar as fichas de saúde de todos os alunos para a IA analisar diagnósticos.",
      "Não precisam de se preocupar, porque a IA tem imunidade legal nas escolas.",
      "Não colocar dados pessoais ou identificáveis de menores em plataformas abertas na nuvem sem garantias estritas e armazenamento em conformidade europeia.",
      "Partilhar a password da rede da escola com os alunos para facilitar os downloads."
    ],
    correctIndex: 2,
    explanation: "Pág. 5 (RGPD): O Regulamento Geral sobre a Proteção de Dados exige estrito cumprimento na proteção de dados pessoais e de menores contra o armazenamento ilícito ou treino em servidores externos fora da UE.",
    pdfSection: "Pág. 5 — Privacidade e RGPD"
  },
  {
    id: 8,
    question: "A IA vai substituir o professor? Qual é a conclusão inequívoca do Módulo 1?",
    options: [
      "SIM, dentro de 5 anos todos os professores serão substituídos por hologramas.",
      "NÃO. A IA é uma ferramenta de apoio. As conexões humanas, o afeto, a mediação ética, o acompanhamento holístico e as competências interpessoais são insubstituíveis.",
      "SIM, apenas nos primeiros ciclos do ensino básico.",
      "TALVEZ, se os computadores forem fabricados pela União Europeia."
    ],
    correctIndex: 1,
    explanation: "Pág. 5: «A IA vai substituir o professor? NÃO. A IA funciona como uma ferramenta de apoio, mas não substitui o papel pedagógico do professor. A comparação entre capacidades humanas e limitações demonstra a insubstituibilidade do docente.»",
    pdfSection: "Pág. 5 — O Papel do Professor na Era da IA"
  },
  {
    id: 9,
    question: "Qual das seguintes ferramentas citadas no módulo é especificamente indicada para 'Adaptar e diferenciar textos para diferentes níveis de leitura e compreensão'?",
    options: [
      "Diffit",
      "Vidnoz",
      "Deep Blue",
      "AlsoAsked"
    ],
    correctIndex: 0,
    explanation: "Pág. 5 (Tabela de Ferramentas): «Diffit: Adaptar e diferenciar textos para diferentes níveis de leitura e compreensão.»",
    pdfSection: "Pág. 5 — Ferramentas de IA"
  },
  {
    id: 10,
    question: "Para que serve a ferramenta Google NotebookLM mencionada na pág. 6 do recurso de Carla Oliveira?",
    options: [
      "Para jogar xadrez contra o Deep Blue da IBM.",
      "Para analisar documentos, sintetizar fontes, responder a dúvidas com citações e criar resumos fundamentados.",
      "Para instalar sistemas operativos em computadores antigos da escola.",
      "Para recolher os emails de todos os encarregados de educação sem autorização."
    ],
    correctIndex: 1,
    explanation: "Pág. 6: «NotebookLM (Google): Analisar documentos, sintetizar fontes, responder a dúvidas e criar resumos.»",
    pdfSection: "Pág. 6 — Ferramentas de IA"
  }
];
