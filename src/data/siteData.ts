export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  badge: string;
  iconName: 'Refrigerator' | 'WashingMachine' | 'Fan' | 'Flame' | 'Sparkles' | 'Radio';
  imageUrl: string;
  commonIssues: string[];
  benefits: string[];
  whatsappMessage: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Home' | 'Award' | 'ShieldCheck' | 'Clock' | 'CircleDollarSign' | 'Zap';
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
  iconName: 'Wrench' | 'Clock' | 'Star' | 'CheckCircle';
}

export const COMPANY_INFO = {
  name: "Jormaq Assistência Técnica",
  fullName: "Jormaq Assistência Técnica | Arapongas PR e Região",
  slogan: "Sua casa funcionando perfeitamente sem complicação",
  cep: "86707-760",
  address: "Rua mexeriqueiro, 29 - Columbia 4, Arapongas - PR, 86707-760",
  addressShort: "Rua Mexeriqueiro, 29 - Arapongas, PR",
  phoneRaw: "43996241292",
  phoneInternational: "5543996241292",
  phoneDisplay: "(43) 99624-1292",
  businessHours: "Segunda a Sábado: 08h às 18h",
  emergencyNote: "Atendimento de Urgência no Mesmo Dia",
  googleRating: "5.0",
  googleReviewCount: "31",
  instagram: "@jormaqassistencia",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+mexeriqueiro+29+Columbia+4+Arapongas+PR+86707-760",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Rua+mexeriqueiro,+29+-+Columbia+4,+Arapongas+-+PR,+86707-760&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

export const getWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${COMPANY_INFO.phoneInternational}?text=${encodeURIComponent(message)}`;
};

export const STATS: StatItem[] = [
  {
    value: "+3.000",
    label: "Aparelhos Consertados",
    detail: "Eletrodomésticos restaurados com segurança e garantia formal em Arapongas e região",
    iconName: "Wrench",
  },
  {
    value: "10+",
    label: "Anos de Experiência",
    detail: "Técnicos especialistas com amplo conhecimento prático nas principais marcas",
    iconName: "Clock",
  },
  {
    value: "5.0",
    label: "Estrelas no Google",
    detail: "Nota máxima baseada em 31 avaliações reais de clientes verificados",
    iconName: "Star",
  },
  {
    value: "100%",
    label: "Atendimento em Domicílio",
    detail: "Visita técnica no mesmo dia com horário agendado e sem transporte do seu aparelho",
    iconName: "CheckCircle",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "geladeiras",
    name: "Conserto e Manutenção de Geladeiras e Refrigeradores",
    shortDesc: "Solução imediata para geladeira que não gela, motor travado, vazamentos ou perda de gás.",
    badge: "Prioridade Urgente",
    iconName: "Refrigerator",
    imageUrl: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    commonIssues: [
      "Geladeira parou de gelar ou esfria pouco",
      "Congelador funcionando mas parte de baixo quente",
      "Motor fazendo barulho contínuo ou não liga",
      "Acúmulo de água no fundo ou vazando no chão",
      "Borracha de vedação gasta ou rasgada",
    ],
    benefits: [
      "Diagnóstico preciso e teste de vazamento de gás",
      "Troca de motor compressor e relés originais",
      "Conserto no próprio domicílio sem remover o móvel",
      "Garantia formal nas peças e no serviço",
    ],
    whatsappMessage: "Olá! Preciso de assistência técnica para: Conserto e Manutenção de Geladeiras e Refrigeradores. Poderiam me enviar um orçamento?",
  },
  {
    id: "lavadoras",
    name: "Manutenção de Máquinas de Lavar e Lava e Seca",
    shortDesc: "Reparo definitivo para lavadoras que não centrifugam, vazam água ou apresentam códigos de erro.",
    badge: "Atendimento no Dia",
    iconName: "WashingMachine",
    imageUrl: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    commonIssues: [
      "Máquina parou de centrifugar ou agitar",
      "Vazamento constante de água por baixo",
      "Barulho muito alto parecendo turbina de avião",
      "Painel digital piscando ou travado em ciclo",
      "Não enche ou não drena a água da lavagem",
    ],
    benefits: [
      "Troca de rolamentos, retentores e correias",
      "Reparo e programação de placa eletrônica",
      "Higienização mecânica e desobstrução de bomba",
      "Peças originais para Brastemp, Electrolux, Samsung e LG",
    ],
    whatsappMessage: "Olá! Preciso de assistência técnica para: Manutenção de Máquinas de Lavar e Lava e Seca. Poderiam me enviar um orçamento?",
  },
  {
    id: "ar-condicionado",
    name: "Manutenção e Instalação de Ar-Condicionado",
    shortDesc: "Climatização ideal com instalação padrão do fabricante, recarga de fluido e limpeza profunda.",
    badge: "Conforto Térmico",
    iconName: "Fan",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    commonIssues: [
      "Aparelho ligado mas não refrigera o ambiente",
      "Pingando água na parede interna",
      "Mau cheiro decorrente de fungos e bactérias",
      "Compressor externo não arma ou desarma rápido",
      "Display acusando código de erro no controle",
    ],
    benefits: [
      "Limpeza química e higienização antibacteriana",
      "Carga de gás refrigerante ecológico R410A e R32",
      "Instalação profissional e preventiva de vazamentos",
      "Manutenção em sistemas Split, Inverter e Cassete",
    ],
    whatsappMessage: "Olá! Preciso de assistência técnica para: Manutenção e Instalação de Ar-Condicionado. Poderiam me enviar um orçamento?",
  },
  {
    id: "fogoes",
    name: "Conserto de Fogões, Cooktops e Fornos",
    shortDesc: "Segurança total no conserto de queimadores, desentupimento de bicos e conversão de gás.",
    badge: "Segurança Residencial",
    iconName: "Flame",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    commonIssues: [
      "Chama fraca, amarela ou queimador entupido",
      "Cheiro de gás ou vazamento nos registros",
      "Acendimento elétrico automático não faisca",
      "Forno a gás ou elétrico que apaga sozinho",
      "Vidro ou puxador solto com necessidade de troca",
    ],
    benefits: [
      "Teste rigoroso de estanqueidade e segurança",
      "Conversão segura entre gás de botijão (GLP) e encanado (GN)",
      "Regulagem de pressão e troca de válvulas termopar",
      "Atendimento para fogões de piso, embutidos e cooktops",
    ],
    whatsappMessage: "Olá! Preciso de assistência técnica para: Conserto de Fogões, Cooktops e Fornos a Gás/Elétricos. Poderiam me enviar um orçamento?",
  },
  {
    id: "lava-loucas",
    name: "Conserto de Lava-Louças",
    shortDesc: "Recupere o tempo livre com a sua lava-louças higienizando perfeitamente sem vazamentos.",
    badge: "Praticidade Total",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&w=800&q=80",
    commonIssues: [
      "Louças saem engorduradas ou com resíduos",
      "Acúmulo de água suja retida no interior",
      "Porta com trava com defeito ou vazamento",
      "Bomba de circulação travada ou barulhenta",
      "Ciclo interrompido com aviso sonoro",
    ],
    benefits: [
      "Desobstrução de mangueiras e bombas de lavagem",
      "Troca de borrachas de vedação e travas de segurança",
      "Reparo de termostatos e resistências de aquecimento",
      "Suporte para modelos embutidos e de bancada",
    ],
    whatsappMessage: "Olá! Preciso de assistência técnica para: Conserto de Lava-Louças. Poderiam me enviar um orçamento?",
  },
  {
    id: "micro-ondas",
    name: "Conserto de Micro-ondas",
    shortDesc: "Reparo técnico qualificado para magnetron, painel touch e sistema de alta tensão.",
    badge: "Diagnóstico Imediato",
    iconName: "Radio",
    imageUrl: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80",
    commonIssues: [
      "Aparelho liga o visor mas não aquece a comida",
      "Faíscas internas e cheiro de queimado",
      "Prato giratório parou de rodar",
      "Painel numérico não responde aos toques",
      "Desarma o disjuntor da casa ao apertar Iniciar",
    ],
    benefits: [
      "Substituição segura de magnetron e capacitores de alta voltagem",
      "Reparo de teclados de membrana e placas lógicas",
      "Teste de blindagem e contenção de radiação",
      "Serviço rápido com peças testadas em laboratório",
    ],
    whatsappMessage: "Olá! Preciso de assistência técnica para: Conserto de Micro-ondas. Poderiam me enviar um orçamento?",
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: "domicilio",
    title: "Atendimento em Domicílio",
    description: "Visita técnica no conforto da sua residência ou empresa com horário agendado, sem o transtorno de transportar eletrodomésticos pesados.",
    iconName: "Home",
  },
  {
    id: "tecnicos",
    title: "Técnicos Certificados",
    description: "Equipe com mais de 10 anos de experiência prática constante, habilitada para consertar os modelos mais modernos do mercado.",
    iconName: "Award",
  },
  {
    id: "pecas",
    title: "Peças Originais e Genuínas",
    description: "Uso exclusivo de componentes certificados com procedência de fábrica, garantindo a durabilidade e o desempenho original do seu aparelho.",
    iconName: "ShieldCheck",
  },
  {
    id: "orcamento",
    title: "Orçamento Rápido e Transparente",
    description: "Diagnóstico detalhado e sem taxas escondidas. Você sabe exatamente o que precisa ser feito antes de autorizar o serviço.",
    iconName: "CircleDollarSign",
  },
  {
    id: "urgencia",
    title: "Atendimento no Mesmo Dia",
    description: "Urgência real para evitar prejuízos com alimentos estragados ou roupas acumuladas, atendendo Arapongas e cidades vizinhas com prontidão.",
    iconName: "Zap",
  },
  {
    id: "garantia",
    title: "Garantia Formal por Escrito",
    description: "Tranquilidade absoluta: emitimos comprovante de garantia formal cobrindo tanto as peças substituídas quanto a mão de obra especializada.",
    iconName: "Clock",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "João Pedro",
    location: "Arapongas - PR",
    rating: 5,
    text: "Minha máquina de lavar parou de centrifugar e o técnico resolveu no mesmo dia. Atendimento nota 10!",
    initials: "JP",
  },
  {
    id: "2",
    name: "Mariana Silva",
    location: "Arapongas - PR",
    rating: 5,
    text: "Consertaram minha geladeira que não estava gelando. Preço justo e muito profissionais. Super recomendo.",
    initials: "MS",
  },
  {
    id: "3",
    name: "Roberto Costa",
    location: "Arapongas - PR",
    rating: 5,
    text: "Chegaram no horário marcado, diagnosticaram o problema rápido e o serviço ficou perfeito.",
    initials: "RC",
  },
  {
    id: "4",
    name: "Luciana Ferreira",
    location: "Arapongas - PR",
    rating: 5,
    text: "Fizeram a manutenção da minha lava e seca e do ar-condicionado. Trabalho limpo, honesto e com garantia formal por escrito.",
    initials: "LF",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Vocês atendem em domicílio?",
    answer: "Sim! Nossos técnicos vão até a sua residência ou empresa com todas as ferramentas e peças de teste necessárias para diagnosticar e realizar o conserto no local, com total comodidade e segurança.",
  },
  {
    id: "faq-2",
    question: "O serviço tem garantia?",
    answer: "Sim, fornecemos garantia formal tanto para a mão de obra executada quanto para todas as peças originais substituídas, assegurando total tranquilidade após o reparo.",
  },
  {
    id: "faq-3",
    question: "Qual o valor da visita técnica?",
    answer: "O valor da visita de diagnóstico é abatido integralmente do orçamento final caso o conserto do eletrodoméstico seja aprovado por você.",
  },
  {
    id: "faq-4",
    question: "Quais marcas vocês atendem?",
    answer: "Atendemos todas as principais marcas do mercado nacional e internacional: Brastemp, Consul, Electrolux, Samsung, LG, Midea, Panasonic, Fischer, Philco, Continental, Bosch, GE, entre outras.",
  },
  {
    id: "faq-5",
    question: "Qual o tempo médio para realizar o conserto?",
    answer: "A maioria dos consertos é realizada no mesmo dia da visita técnica, diretamente na sua residência, pois trabalhamos com estoque rotativo das peças de maior demanda.",
  },
  {
    id: "faq-6",
    question: "Quais são as formas de pagamento?",
    answer: "Facilitamos o pagamento via Pix com confirmação instantânea, cartões de crédito (com possibilidade de parcelamento), cartão de débito e dinheiro à vista após a aprovação e conferência do conserto.",
  },
];

export const BRANDS_LIST = [
  "Brastemp",
  "Electrolux",
  "Consul",
  "Samsung",
  "LG",
  "Midea",
  "Panasonic",
  "Fischer",
  "Philco",
  "Continental",
];
