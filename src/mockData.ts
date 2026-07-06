import { Service, Testimonial, FAQItem, GalleryItem, BeforeAfterItem, Differentiator, TeamMember } from './types';

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Limpeza Semanal Integrada',
    description: 'Manutenção completa programada para manter sua piscina sempre convidativa e segura.',
    detail: 'Inclui escovação completa das paredes e fundo, aspiração minuciosa, peneiramento de folhas e detritos suspensos, limpeza da borda com produtos biodegradáveis e retrolavagem periódica do filtro para garantir máxima eficácia de filtragem.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Tratamento Químico Avançado',
    description: 'Equilíbrio perfeito de pH, alcalinidade, cloro livre e controle de metais na água.',
    detail: 'Análise laboratorial no local com reagentes de precisão. Ajuste minucioso do pH e alcalinidade, dosagem científica de cloro orgânico (estabilizado), algicidas de manutenção para prevenir o surgimento de algas, e decantação seletiva apenas quando estritamente necessária.',
    iconName: 'Droplet',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Aspiração e Peneiramento',
    description: 'Remoção mecânica de todas as impurezas acumuladas no fundo e na superfície.',
    detail: 'Uso de aspiradores profissionais de alta sucção acoplados a sistemas de filtragem auxiliar quando necessário (evitando o desperdício de água por drenagem). Limpeza completa de skimmers (coadores) e do pré-filtro da moto-bomba.',
    iconName: 'Trash2',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Recuperação de Piscinas Verdes',
    description: 'Transformação radical de águas escuras ou esverdeadas em águas azuis cristalinas em até 24h.',
    detail: 'Tratamento de choque de alta performance. Aplicação de cloro ativo concentrado, algicidas de choque biodegradáveis, floculação intensiva de partículas e aspiração direta para o esgoto com desinfecção total das superfícies e lavagem química do filtro.',
    iconName: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Troca de Areia do Filtro',
    description: 'Substituição periódica do elemento filtrante para garantir máxima retenção de micropartículas.',
    detail: 'A areia do filtro deve ser trocada a cada 2 ou 3 anos. Removemos o elemento saturado acumulador de biofilme, inspecionamos as crepinas internas do filtro e instalamos nova areia de quartzo com granulometria calibrada, restaurando 100% do poder de purificação.',
    iconName: 'RefreshCw',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Manutenção Preventiva',
    description: 'Inspeção mecânica e elétrica rigorosa para evitar quebras ou vazamentos custosos.',
    detail: 'Verificação do aperto de conexões, testes de pressão das tubulações, lubrificação de anéis de vedação (O-rings), medição de corrente elétrica da moto-bomba para prevenir queima e testes de funcionamento das válvulas seletoras.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    title: 'Assistência Técnica de Bombas',
    description: 'Diagnóstico e reparo rápido de motores, filtros, aquecedores e painéis elétricos.',
    detail: 'Atendimento emergencial para bombas travadas, rolamentos barulhentos, vazamentos no selo mecânico e falhas de partida elétrica. Nossa equipe resolve no local ou providencia a retirada e reinstalação imediata do equipamento revisado.',
    iconName: 'Settings',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    title: 'Automação e Equipamentos',
    description: 'Instalação de aquecedores, iluminação LED RGB, geradores de cloro por sal e robôs.',
    detail: 'Modernize seu lazer. Projetamos e instalamos trocadores de calor ecológicos, painéis solares para piscina, sistemas inteligentes de automação por aplicativo, geradores de cloro por sal que evitam olhos vermelhos e robôs aspiradores autônomos.',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518098268026-4e43a1a009de?auto=format&fit=crop&w=800&q=80'
  }
];

export const beforeAfterData: BeforeAfterItem[] = [
  {
    id: 1,
    title: 'Tratamento de Choque de Algas',
    beforeImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80', // Will be tinted green via CSS for "before"
    afterImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    description: 'Recuperação intensiva de piscina residencial abandonada por 4 meses. Água com forte infestação de algas verdes e mosquitos, restabelecida para transparência absoluta em apenas 18 horas.'
  },
  {
    id: 2,
    title: 'Tratamento de Água Turva e Calcificada',
    beforeImage: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80', // Will be desaturated/clouded via CSS
    afterImage: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80',
    description: 'Correção de alcalinidade extrema em piscina de condomínio clube. Água leitosa que impedia a visualização do fundo, recuperada sem necessidade de esvaziamento, poupando 120 mil litros de água.'
  }
];

export const differentiatorsData: Differentiator[] = [
  {
    id: 1,
    title: 'Produtos Certificados Anvisa',
    description: 'Trabalhamos apenas com defensivos de primeira linha e homologados, protegendo a saúde da sua família e preservando os equipamentos.',
    iconName: 'Award'
  },
  {
    id: 2,
    title: 'Equipe Certificada & Treinada',
    description: 'Nossos técnicos passam por reciclagens mensais e possuem certificações em química de tratamento de águas de recreação.',
    iconName: 'Users'
  },
  {
    id: 3,
    title: 'Atendimento Ágil',
    description: 'Plantão aos sábados e suporte emergencial em até 4 horas para problemas críticos em bombas ou vazamentos.',
    iconName: 'Zap'
  },
  {
    id: 4,
    title: 'Garantia de Água Cristalina',
    description: 'Se a água apresentar turbidez ou coloração anômala em até 48h após a visita, retornamos e reaplicamos o tratamento sem custos extras.',
    iconName: 'CheckCircle'
  },
  {
    id: 5,
    title: 'Equipamentos de Ponta',
    description: 'Utilizamos fotômetros digitais para medição precisa de parâmetros químicos e aspiradores silenciosos com turbina autônoma.',
    iconName: 'Wrench'
  },
  {
    id: 6,
    title: 'Relatório Digital de Visita',
    description: 'Após cada serviço, você recebe em seu WhatsApp os níveis químicos medidos, produtos aplicados e uma foto da piscina finalizada.',
    iconName: 'ClipboardList'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Limpeza de Bordas e Rejuntes',
    category: 'limpeza',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80',
    caption: 'Remoção química de incrustações de protetor solar e gordura das bordas de pastilhas.'
  },
  {
    id: 2,
    title: 'Instalação de LEDs RGB Premium',
    category: 'manutencao',
    image: 'https://images.unsplash.com/photo-1518098268026-4e43a1a009de?auto=format&fit=crop&w=800&q=80',
    caption: 'Modernização de sistema de iluminação subaquática controlado por aplicativo móvel.'
  },
  {
    id: 3,
    title: 'Análise de Parâmetros Digitais',
    category: 'tratamento',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    caption: 'Medição eletrônica de cloro, ácido cianúrico e alcalinidade para dosagem exata de insumos.'
  },
  {
    id: 4,
    title: 'Piscina de Condomínio Residencial',
    category: 'limpeza',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    caption: 'Contrato de manutenção integrada com visitas periódicas de 3 vezes por semana.'
  },
  {
    id: 5,
    title: 'Aquecedor Trocador de Calor',
    category: 'manutencao',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    caption: 'Instalação de bomba de calor de alta eficiência para aquecimento de raia olímpica.'
  },
  {
    id: 6,
    title: 'Tratamento por Sal Integrado',
    category: 'tratamento',
    image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800&q=80',
    caption: 'Implantação de gerador de cloro automático a partir de sal marinho especial.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Roberto de Souza',
    role: 'Síndico do Residencial Royal Park',
    rating: 5,
    text: 'A PiscinaClean mudou totalmente o patamar do nosso condomínio. Antes tínhamos reclamações constantes de moradores com olhos vermelhos ou piscina verde no final de semana. Agora, a água está sempre impecável e os relatórios digitais pós-visita nos dão total tranquilidade.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 2,
    name: 'Cláudia Mendes',
    role: 'Proprietária de Residência em Alphaville',
    rating: 5,
    text: 'Profissionais extremamente educados, pontuais e atenciosos. É maravilhoso chegar em casa na sexta-feira e encontrar a piscina um espelho d\'água de tão limpa. Recomendo de olhos fechados o plano de manutenção semanal!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 3,
    name: 'Dr. Fernando Henrique',
    role: 'Diretor de Patrimônio do Clube Campestre',
    rating: 5,
    text: 'Contratamos a PiscinaClean para reestruturar nossa casa de máquinas e realizar o tratamento diário das piscinas olímpicas e infantis. A competência técnica deles na troca de filtros e na automação dos aquecedores reduziu nossa conta de energia em 25%.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 4,
    name: 'Juliana Silveira',
    role: 'Arquiteta e Designer de Exteriores',
    rating: 5,
    text: 'Como arquiteta, o acabamento e a iluminação são cruciais nos meus projetos. Sempre indico a equipe da PiscinaClean para fazer a instalação dos refletores de LED, cascatas e sistemas de sal dos meus clientes de alto padrão. O acabamento deles é impecável.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const faqsData: FAQItem[] = [
  {
    id: 1,
    question: 'Com que frequência minha piscina deve ser limpa?',
    answer: 'Para piscinas residenciais de uso moderado, recomendamos uma manutenção completa de 1 a 2 vezes por semana. Para condomínios, clubes ou piscinas comerciais de alto fluxo, o ideal é uma frequência de 3 a 6 vezes por semana, atendendo estritamente às normas de saúde e vigilância sanitária.'
  },
  {
    id: 2,
    question: 'O cloro salgado (gerador de cloro por sal) é melhor do que o cloro tradicional?',
    answer: 'Sim, o gerador de sal produz cloro natural de forma contínua através de eletrólise. Isso elimina a necessidade de armazenar cloro concentrado, reduz drasticamente o odor forte, previne o ressecamento da pele e cabelos, e evita olhos vermelhos, mantendo um teor de sal semelhante ao de uma lágrima humana.'
  },
  {
    id: 3,
    question: 'Quanto tempo leva para recuperar uma piscina que ficou totalmente verde?',
    answer: 'Na imensa maioria dos casos, conseguimos recuperar a cristalinidade total em até 24 horas usando nosso tratamento de choque intensivo. Em situações extremas de águas com matéria orgânica densa de meses, pode levar entre 48 a 72 horas para a filtração final de partículas microscópicas em suspensão.'
  },
  {
    id: 4,
    question: 'Vocês atendem condomínios residenciais e emitem nota fiscal?',
    answer: 'Sim, somos especializados no atendimento corporativo a condomínios de todos os portes e clubes de recreação. Emitimos Nota Fiscal de Prestação de Serviços, temos seguro de responsabilidade civil, engenheiro químico responsável e toda nossa equipe trabalha uniformizada e munida de EPIs adequados.'
  },
  {
    id: 5,
    question: 'De quanto em quanto tempo devo trocar a areia do filtro?',
    answer: 'A areia de quartzo interna do filtro deve ser substituída a cada 2 a 3 anos em piscinas residenciais, e anualmente em piscinas coletivas ou comerciais. Com o tempo, os grãos de areia ficam arredondados pelo atrito e acumulam um biofilme bacteriano resistente, perdendo a capacidade de filtragem de sujeiras finas.'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Marcos Oliveira',
    role: 'Fundador & Químico Responsável (CRQ)',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80',
    certification: 'Especialista em Tratamento Químico Sanitário'
  },
  {
    id: 2,
    name: 'Tiago Santos',
    role: 'Coordenador Técnico de Equipamentos',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
    certification: 'Certificado em Termo-Hidráulica e Motores'
  },
  {
    id: 3,
    name: 'Ana Carolina Viana',
    role: 'Gestora de Qualidade e Atendimento',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
    certification: 'Auditora de Sistemas de Lazer Saudável'
  }
];
