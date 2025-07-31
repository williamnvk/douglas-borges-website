import { Container, VStack } from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import { siteUrl } from "@/data/site-constants";
import { Metadata } from "next";
import {
  HeroSection,
  ComparisonSection,
  InvestmentPlans,
  WhatsIncluded,
  ScientificMethodology,
  ProcessSteps,
  FAQSection,
  ProfessionalInfo,
  ITreeboInfo,
  FinalCTA,
} from "./_components";

export const metadata: Metadata = {
  title:
    "Assessment Comportamental Empresarial Curitiba | Psicólogo Douglas Borges | RH e Gestão de Pessoas",
  description:
    "Assessment comportamental científico em Curitiba/PR. Psicólogo Douglas Borges CRP 12/13884 ✓ 1000+ avaliações ✓ Big Five, DISC, MBTI ✓ Resultados 5-7 dias ✓ R$ 700. Decisões sobre pessoas baseadas em ciência para sua empresa.",
  openGraph: {
    title:
      "Assessment Comportamental Empresarial Curitiba | Decisões RH Baseadas em Ciência",
    description:
      "Assessment comportamental científico em Curitiba. Psicólogo empresarial Douglas Borges. 1000+ pessoas avaliadas, 90+ empresas atendidas. Big Five, DISC, MBTI. A partir de R$ 700.",
    type: "website",
    url: `${siteUrl}/empresas`,
    locale: "pt_BR",
    siteName: "Douglas Borges - Psicólogo Empresarial Curitiba",
    images: [
      {
        url: `${siteUrl}/assets/escritório.webp`,
        width: 1200,
        height: 630,
        alt: "Assessment Comportamental Empresarial - Escritório Douglas Borges Psicólogo Curitiba",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Assessment Comportamental Empresarial Curitiba | Psicólogo Douglas Borges",
    description:
      "Assessment científico para empresas. Big Five, DISC, MBTI. 1000+ avaliações. Resultados em 5-7 dias. Curitiba/PR.",
    images: [`${siteUrl}/assets/escritório.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${siteUrl}/empresas`,
  },
  keywords: [
    "assessment comportamental Curitiba",
    "avaliação psicológica empresarial Curitiba",
    "psicólogo empresarial Curitiba",
    "gestão de pessoas Curitiba",
    "consultoria RH Curitiba",
    "Big Five assessment",
    "DISC empresarial",
    "MBTI organizacional",
    "avaliação perfil comportamental",
    "Douglas Borges psicólogo",
    "CRP 12/13884",
    "assessment Big Five Paraná",
    "psicologia organizacional Curitiba",
    "consultoria comportamental empresas",
    "avaliação psicológica colaboradores",
    "testes psicológicos empresariais",
    "perfil comportamental funcionários",
    "decisões RH baseadas dados",
    "i-Treebo consultoria",
    "psicólogo empresas Curitiba PR"
  ],
};

// Dados estruturados para SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Assessment Comportamental Empresarial",
  "description": "Serviço de assessment comportamental científico para empresas que precisam tomar decisões estratégicas sobre pessoas. Análise psicológica baseada em 5 metodologias reconhecidas mundialmente.",
  "url": `${siteUrl}/empresas`,
  "image": `${siteUrl}/assets/escritório.webp`,
  "provider": {
    "@type": "Person",
    "name": "Douglas Borges",
    "jobTitle": "Psicólogo Empresarial",
    "description": "Psicólogo especializado em assessment comportamental com mais de 10 anos de experiência e 1000+ pessoas avaliadas",
    "url": siteUrl,
    "image": `${siteUrl}/assets/perfil.webp`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Conselho Regional de Psicologia de Santa Catarina"
        },
        "identifier": "CRP/SC 12-13884"
      }
    ]
  },
  "serviceType": "Assessment Comportamental",
  "category": "Psicologia Organizacional",
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Empresas e Gestores",
    "description": "Gestores que precisam tomar decisões importantes sobre pessoas baseadas em dados científicos"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Assessment Individual",
      "description": "Assessment comportamental para 1 colaborador",
      "price": "700",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Assessment Equipe",
      "description": "Assessment comportamental para 3 colaboradores",
      "price": "1750",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Assessment Departamento",
      "description": "Assessment comportamental para 5 colaboradores",
      "price": "2205",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Assessment Corporativo",
      "description": "Assessment comportamental para 10 colaboradores",
      "price": "3570",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Planos de Assessment Comportamental",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Metodologias Científicas",
          "description": "Big Five, DISC, Belbin, Eneagrama, MBTI"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "90",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export default function EmpresasPage() {
  const keyBenefits = [
    "✓ Resultados em 5-7 dias úteis",
    "✓ Atendimento 100% online",
    "✓ Mais de 1000 pessoas avaliadas",
    "✓ 90+ empresas atendidas",
    "✓ 10 anos de experiência comprovada",
  ];

  const commonChallenges = [
    "Contratações que não atendem às expectativas",
    "Conflitos interpessoais recorrentes",
    "Baixo desempenho sem causas claras",
    "Dificuldades em processos de promoção",
    "Alta rotatividade de pessoal",
    "Decisões sobre pessoas baseadas em intuição",
  ];

  const expectedResults = [
    "Contratações mais assertivas e alinhadas",
    "Redução significativa de conflitos",
    "Economia com reposições desnecessárias",
    "Decisões fundamentadas em dados científicos",
    "Equipes mais produtivas e engajadas",
    "Maior segurança nas decisões de RH",
  ];

  const faqData = [
    {
      question: "Como posso iniciar o processo?",
      answer:
        "Entre em contato pelo WhatsApp, escolha o plano mais adequado às suas necessidades, e agendaremos uma reunião para definir os objetivos da avaliação. Todo o processo é conduzido de forma profissional e ética.",
    },
    {
      question: "O que eu, gestor, preciso fazer?",
      answer:
        "Na reunião inicial, você irá definir o perfil comportamental desejado para a função (Engenharia de Assessment) e enviar os dados dos colaboradores a serem avaliados. Todo o restante é conduzido por mim.",
    },
    {
      question: "O colaborador terá acesso ao resultado?",
      answer:
        "Não. O relatório é enviado exclusivamente ao gestor. O processo é ético e conduzido conforme as normas da psicologia organizacional. O colaborador participa de uma reunião online comigo, onde aplico os instrumentos de forma assistida.",
    },
    {
      question: "O relatório é técnico ou fácil de entender?",
      answer:
        "É técnico, mas escrito em linguagem acessível, com gráficos explicativos e análise estratégica. Um modelo real pode ser consultado no site antes da contratação.",
    },
    {
      question: "Você me orienta na decisão?",
      answer:
        "Não presto consultoria operacional. Entrego um diagnóstico completo para que você, gestor, tenha clareza sobre as características e limitações do colaborador e decida com mais segurança.",
    },
    {
      question: "Atende presencial ou online?",
      answer: "Atendimento 100% online, com cobertura para todo o Brasil.",
    },
  ];

  return (
    <main>
      {/* Dados estruturados JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Header />
      <Container
        as="section"
        maxW={{ base: "full", md: "full" }}
        mt={HEADER_NAVBAR_HEIGHT}
        px={{ base: 0, sm: 6, md: 8 }}
      >
        <VStack gap={{ base: 4, sm: 6, md: 10 }} w="full">
          <HeroSection keyBenefits={keyBenefits} />

          <Container as="section" maxW={{ base: "full", md: "8xl" }}>
            <ComparisonSection 
              commonChallenges={commonChallenges} 
              expectedResults={expectedResults} 
            />

            <InvestmentPlans />

            <WhatsIncluded />

            <ScientificMethodology />

            <ProcessSteps />

            <FAQSection faqData={faqData} />

            <ProfessionalInfo />

            <ITreeboInfo />

            <FinalCTA />
          </Container>
        </VStack>
      </Container>
    </main>
  );
}