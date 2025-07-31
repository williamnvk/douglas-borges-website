import { Container } from "@chakra-ui/react";
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import { siteUrl } from "@/data/site-constants";
import { Metadata } from "next";
import { HeroSection } from "./_components/HeroSection";
import { ProblemsSection } from "./_components/ProblemsSection";
import { ServicesSection } from "./_components/ServicesSection";
import { BenefitsSection } from "./_components/BenefitsSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { CTASection } from "./_components/CTASection";
import { Header } from "@/components/shared/Header";

export const metadata: Metadata = {
  title:
    "Psicologia Corporativa | Saúde Mental nas Empresas | Douglas Borges Psicólogo",
  description:
    "🏆 Transforme sua empresa com serviços de psicologia corporativa. Atendimento individual para líderes, palestras, workshops e consultoria em saúde mental empresarial. Psicólogo Douglas Borges CRP/PR 08-21013 ✓ +1000 pessoas atendidas ✓ +90 empresas.",
  openGraph: {
    title: "Psicologia Corporativa | Saúde Mental Para Empresas e Liderança",
    description:
      "Serviços de psicologia corporativa focados na saúde mental de líderes e equipes. Atendimento individual, palestras, workshops e consultoria organizacional com Douglas Borges.",
    type: "website",
    url: `${siteUrl}/empresas`,
    locale: "pt_BR",
    siteName: "Douglas Borges - Psicólogo Empresarial",
    images: [
      {
        url: `${siteUrl}/assets/escritório.webp`,
        width: 1200,
        height: 630,
        alt: "Psicologia Corporativa - Douglas Borges Psicólogo Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Psicologia Corporativa | Saúde Mental nas Empresas | Douglas Borges",
    description:
      "Transforme sua empresa com psicologia corporativa. Atendimento para líderes, palestras e consultoria em saúde mental empresarial.",
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
    "psicologia corporativa",
    "saúde mental empresas",
    "psicólogo empresarial",
    "atendimento psicológico líderes",
    "consultoria saúde mental",
    "burnout executivos",
    "bem-estar organizacional",
    "psicologia organizacional",
    "coaching executivo",
    "equilibrio vida trabalho",
    "Douglas Borges psicólogo",
    "CRP PR 08-21013",
    "palestras empresariais",
    "workshops saúde mental",
    "consultoria psicológica empresas",
    "consultoria comportamental para empresários",
    "inteligência emocional empresas",
    "gestão estresse corporativo",
    "liderança saudável",
    "clima organizacional",
    "produtividade sustentável",
  ],
};

// Dados estruturados para SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Psicologia Corporativa - Douglas Borges",
  description:
    "Serviços especializados de psicologia corporativa para empresas que valorizam o bem-estar de seus líderes e equipes. Atendimento individual, palestras, workshops e consultoria organizacional.",
  url: `${siteUrl}/empresas`,
  image: `${siteUrl}/assets/escritório.webp`,
  provider: {
    "@type": "Person",
    name: "Douglas Borges",
    jobTitle: "Psicólogo e Consultor Empresarial",
    description:
      "Psicólogo especializado em saúde mental corporativa com mais de 10 anos de experiência",
    url: siteUrl,
    image: `${siteUrl}/assets/perfil.webp`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "União da Vitória",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional License",
        recognizedBy: {
          "@type": "Organization",
          name: "Conselho Regional de Psicologia do Paraná",
        },
        identifier: "CRP/PR 08-21013",
      },
    ],
  },
  serviceType: "Psicologia Corporativa",
  category: "Saúde Mental Empresarial",
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Empresários e Líderes",
    description:
      "Empresários, CEOs, executivos e líderes que buscam equilíbrio e bem-estar",
  },
  serviceOutput: [
    "Redução de burnout em líderes",
    "Melhoria do clima organizacional",
    "Aumento da produtividade sustentável",
    "Fortalecimento da liderança",
    "Equilíbrio vida-trabalho",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "90",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function EmpresasPage() {
  return (
    <main>
      <Header />
      {/* Dados estruturados JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Container
        as="section"
        maxW={{ base: "full", md: "full" }}
        mt={HEADER_NAVBAR_HEIGHT}
        px={{ base: 0, sm: 6, md: 8 }}
      >
        <HeroSection />
      </Container>

      <Container as="section" maxW={{ base: "full", md: "8xl" }}>
        <ProblemsSection />
      </Container>

      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
