import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  SimpleGrid,
  Badge,
  Stack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import { siteUrl } from "@/data/site-constants";
import { Metadata } from "next";
import DynamicIcon from "@/components/shared/DynamicIcon";

export const metadata: Metadata = {
  title: "Sobre Douglas Borges - Psicólogo Especialista em Liderança",
  description: "Conheça Douglas Borges, psicólogo com 10 anos de experiência em Terapia Cognitiva Comportamental e consultoria organizacional. CRP/PR 08-21013 e CRP/SC 12-13884. Especialista em apoio a líderes e executivos.",
  keywords: "Douglas Borges, psicólogo, terapia cognitiva comportamental, consultoria organizacional, liderança, executivos, CRP, psicoterapia individual, inteligência emocional",
  openGraph: {
    title: "Sobre Douglas Borges - Psicólogo Especialista em Liderança",
    description: "Psicólogo com 10 anos de experiência em Terapia Cognitiva Comportamental e consultoria organizacional. Especialista em apoio a líderes e executivos.",
    images: ["/assets/perfil.webp"],
    type: "profile",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Douglas Borges - Psicólogo Especialista em Liderança",
    description: "Psicólogo com 10 anos de experiência em Terapia Cognitiva Comportamental e consultoria organizacional.",
    images: ["/assets/perfil.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl + "/sobre",
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Douglas Borges",
  "jobTitle": "Psicólogo Clínico e Consultor Organizacional",
  "description": "Psicólogo com 10 anos de experiência em Terapia Cognitiva Comportamental e consultoria organizacional, especialista em apoio a líderes e executivos.",
  "url": siteUrl + "/sobre",
  "image": siteUrl + "/assets/perfil.webp",
  "sameAs": [
    siteUrl
  ],
  "knowsAbout": [
    "Terapia Cognitiva Comportamental",
    "Consultoria Organizacional", 
    "Psicoterapia Individual",
    "Inteligência Emocional",
    "Liderança Executiva"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Conselho Regional de Psicologia do Paraná"
      },
      "identifier": "CRP/PR 08-21013"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "credentialCategory": "Professional License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Conselho Regional de Psicologia de Santa Catarina"
      },
      "identifier": "CRP/SC 12-13884"
    }
  ],
  "offers": [
    {
      "@type": "Service",
      "name": "Psicoterapia Individual",
      "description": "Atendimento psicológico individual através da Terapia Cognitiva Comportamental"
    },
    {
      "@type": "Service", 
      "name": "Consultoria Organizacional",
      "description": "Treinamento e desenvolvimento para líderes e equipes nas empresas"
    }
  ]
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main role="main" aria-label="Informações sobre Douglas Borges">
        <Header />
        
        {/* Skip Link para acessibilidade */}
        <Link
          href="#main-content"
          position="absolute"
          left="-999px"
          w="1px"
          h="1px"
          overflow="hidden"
          _focus={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            zIndex: 50,
            px: 4,
            py: 2,
            bg: "blue.600",
            color: "white",
            borderRadius: "md",
            w: "auto",
            h: "auto",
            overflow: "visible",
          }}
        >
          Pular para o conteúdo principal
        </Link>
        
        <Container maxW="8xl" mt={HEADER_NAVBAR_HEIGHT} id="main-content">
        <VStack gap={{ base: 6, md: 12 }} w="full" align="stretch">
          {/* Hero Section */}
          <section aria-labelledby="hero-heading">
          <Stack
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: 6, md: 8 }}
            align="stretch"
          >
            <Box
              w={{ base: "full", md: "400px" }}
              h={{ base: "400px", md: "500px" }}
              mx={{ base: "auto", md: "0" }}
              borderRadius="xl"
              border="2px solid"
              borderColor="gray.200"
              style={{
                backgroundImage: "url(/assets/perfil.webp)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              bgSize={{ base: "110% auto", md: "150% auto" }}
              role="img"
              aria-label="Foto profissional de Douglas Borges, psicólogo clínico especialista em terapia cognitiva comportamental e consultoria organizacional"
            ></Box>

            <VStack
              gap={6}
              flex={1}
              align="flex-start"
              bg="blue.900"
              p={{ base: 6, md: 16 }}
              borderRadius="xl"
              justify="center"
              color="white"
              border="2px solid"
              borderColor="blue.700"
            >
              <HStack gap={4}>
                <DynamicIcon name="user-round" size={48} color="var(--db-colors-blue-200)" aria-hidden="true" />
                <Heading
                  as="h1"
                  id="hero-heading"
                  fontSize={{ base: "3xl", md: "5xl" }}
                  fontWeight="bold"
                  color="white"
                  lineHeight="1.2"
                >
                  Douglas Borges
                </Heading>
              </HStack>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="blue.100"
                lineHeight="1.6"
                letterSpacing="0.01em"
                maxW="600px"
              >
                Psicólogo e psicanalista com quase 10 anos de experiência,
                especializado em consultoria psicológica e inteligência
                emocional. Dedica-se a ajudar profissionais de alto nível, como
                CEOs e executivos, a equilibrar suas vidas pessoais e
                profissionais.
              </Text>

              <HStack gap={4} flexWrap="wrap">
                <Badge
                  colorPalette="blue"
                  variant="outline"
                  size="md"
                  borderRadius="full"
                  px={4}
                  py={2}
                  borderColor="blue.300"
                  color="blue.200"
                  aria-label="Experiência profissional"
                >
                  <HStack gap={2}>
                    <DynamicIcon name="award" size={16} aria-hidden="true" />
                    <Text fontWeight="medium">10 anos de experiência</Text>
                  </HStack>
                </Badge>
                <Badge
                  colorPalette="green"
                  variant="outline"
                  size="md"
                  borderRadius="full"
                  px={4}
                  py={2}
                  borderColor="green.300"
                  color="green.200"
                  aria-label="Área de especialização"
                >
                  <HStack gap={2}>
                    <DynamicIcon name="users" size={16} aria-hidden="true" />
                    <Text fontWeight="medium">Especialista em liderança</Text>
                  </HStack>
                </Badge>
              </HStack>
            </VStack>
          </Stack>
          </section>

          {/* Especialidades Section */}
          <section aria-labelledby="especialidades-heading">
          <VStack gap={6} w="full">
            <Heading
              as="h2"
              id="especialidades-heading"
              size="xl"
              textAlign="center"
              color="gray.800"
              lineHeight="1.3"
              letterSpacing="-0.01em"
            >
              Especialidades Profissionais
            </Heading>

            <SimpleGrid
              gap={{ base: 6, md: 8 }}
              w="full"
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              }}
            >
              {[
                {
                  title: "Psicólogo Clínico",
                  icon: "brain",
                  description:
                    "Registro profissional CRP/PR 08-21013 e CRP/SC 12-13884. Experiência em terapia cognitiva comportamental, analítica e psicanalítica, com foco em resultados duradouros.",
                  color: "blue",
                },
                {
                  title: "Consultoria Organizacional",
                  icon: "building",
                  description:
                    "Atuação como psicólogo organizacional, oferecendo treinamento e desenvolvimento para líderes e equipes, promovendo ambientes de trabalho saudáveis.",
                  color: "green",
                },
              ].map((e) => (
                <Box
                  key={`about-exp-${e.title}`}
                  w="full"
                  bg="white"
                  borderWidth={2}
                  borderColor={`${e.color}.200`}
                  borderLeftWidth={6}
                  borderLeftColor={`${e.color}.500`}
                  p={{ base: 6, md: 8 }}
                  borderRadius="xl"
                  _hover={{
                    borderColor: `${e.color}.300`,
                    borderLeftColor: `${e.color}.600`,
                  }}
                  transition="all 0.3s ease"
                >
                  <VStack align="flex-start" gap={4}>
                    <HStack gap={3}>
                      <Box
                        p={3}
                        borderRadius="lg"
                        bg={`${e.color}.50`}
                        border="2px solid"
                        borderColor={`${e.color}.200`}
                        aria-hidden="true"
                      >
                        <DynamicIcon
                          name={e.icon as "brain" | "building"}
                          size={24}
                          color={`var(--db-colors-${e.color}-600)`}
                          aria-hidden="true"
                        />
                      </Box>
                      <Heading
                        as="h3"
                        fontWeight="bold"
                        fontSize={{ base: "xl", md: "2xl" }}
                        color="gray.800"
                        lineHeight="1.3"
                        letterSpacing="-0.01em"
                      >
                        {e.title}
                      </Heading>
                    </HStack>

                    <Text 
                      fontSize={{ base: "md", md: "lg" }} 
                      color="gray.600" 
                      lineHeight="1.6"
                      letterSpacing="0.01em"
                    >
                      {e.description}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
          </section>

          {/* Abordagens de Trabalho Section */}
          <section aria-labelledby="abordagens-heading">
          <VStack gap={6} w="full">
            <VStack gap={2} textAlign="center">
              <Heading
                as="h2"
                id="abordagens-heading"
                size="xl"
                color="gray.800"
                lineHeight="1.3"
                letterSpacing="-0.01em"
              >
                Abordagens de Trabalho
              </Heading>
              <Text 
                fontSize={{ base: "lg", md: "xl" }} 
                color="gray.600" 
                maxW="2xl"
                lineHeight="1.6"
                letterSpacing="0.01em"
              >
                Uma variedade de métodos terapêuticos personalizados para
                atender às necessidades específicas de cada cliente
              </Text>
            </VStack>

            <SimpleGrid
              gap={{ base: 4, md: 6 }}
              w="full"
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              {[
                {
                  title: "Psicoterapia",
                  icon: "heart-pulse",
                  description:
                    "Sessões terapêuticas focadas na análise de questões emocionais e comportamentais, promovendo autoconhecimento e mudanças positivas duradouras.",
                  color: "purple",
                },
                {
                  title: "Orientação Psicológica",
                  icon: "compass",
                  description:
                    "Suporte para resolver conflitos pessoais ou profissionais, desenvolver autoconfiança e equilibrar ansiedade em um ambiente acolhedor.",
                  color: "orange",
                },
                {
                  title: "Análise Comportamental",
                  icon: "search",
                  description:
                    "Análises detalhadas para compatibilizar perfis emocionais de colaboradores com expectativas organizacionais e metas corporativas.",
                  color: "teal",
                },
              ].map((a) => (
                <Box
                  key={`about-approaches-${a.title}`}
                  bg="white"
                  p={{ base: 5, md: 7 }}
                  borderRadius="lg"
                  borderWidth={1}
                  borderColor="gray.200"
                  borderLeft="4px solid"
                  borderLeftColor={`${a.color}.500`}
                  _hover={{
                    borderColor: `${a.color}.200`,
                    borderLeftColor: `${a.color}.600`,
                  }}
                  transition="all 0.3s ease"
                >
                  <VStack align="flex-start" gap={4}>
                    <HStack gap={3}>
                      <Box 
                        p={2} 
                        borderRadius="md" 
                        bg={`${a.color}.50`}
                        aria-hidden="true"
                      >
                        <DynamicIcon
                          name={a.icon as "heart-pulse" | "compass" | "search"}
                          size={20}
                          color={`var(--db-colors-${a.color}-600)`}
                          aria-hidden="true"
                        />
                      </Box>
                      <Heading
                        as="h3"
                        fontWeight="semibold"
                        fontSize={{ base: "lg", md: "xl" }}
                        color="gray.800"
                        lineHeight="1.3"
                        letterSpacing="-0.01em"
                      >
                        {a.title}
                      </Heading>
                    </HStack>

                    <Text 
                      fontSize={{ base: "sm", md: "md" }} 
                      color="gray.600" 
                      lineHeight="1.6"
                      letterSpacing="0.01em"
                    >
                      {a.description}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
          </section>

          {/* Especialidade Section */}
          <section aria-labelledby="especialidade-principal-heading">
            <Box
              w="full"
              bg="white"
              p={{ base: 6, md: 10 }}
              borderRadius="xl"
              borderWidth={2}
              borderColor="blue.200"
              borderLeft="6px solid"
              borderLeftColor="blue.500"
            >
              <HStack gap={4} mb={4}>
                <Box
                  p={3}
                  borderRadius="lg"
                  bg="blue.50"
                  border="2px solid"
                  borderColor="blue.200"
                >
                  <DynamicIcon name="graduation-cap" size={28} color="var(--db-colors-blue-600)" />
                </Box>
              <VStack align="flex-start" gap={1}>
                <Badge
                  colorPalette="blue"
                  variant="subtle"
                  size="md"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  Especialidade Principal
                </Badge>
                <Heading 
                  as="h3"
                  id="especialidade-principal-heading"
                  fontSize={{ base: "xl", md: "2xl" }} 
                  color="gray.800"
                  lineHeight="1.3"
                  letterSpacing="-0.01em"
                >
                  Psicoterapia Individual
                </Heading>
              </VStack>
              </HStack>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              lineHeight="1.6"
              letterSpacing="0.01em"
            >
              Especializado em <strong>Terapia Cognitiva Comportamental</strong>
              , oferecendo atendimento personalizado para transformar padrões de
              pensamento e comportamento.
            </Text>
            </Box>
          </section>

          {/* Foco Section */}
          <section aria-labelledby="foco-atuacao-heading">
            <Box
              w="full"
              bg="green.50"
              p={{ base: 6, md: 10 }}
              borderRadius="xl"
              borderWidth={2}
              borderColor="green.200"
              borderLeft="6px solid"
              borderLeftColor="green.500"
            >
            <HStack gap={4} mb={6}>
              <Box
                p={3}
                borderRadius="lg"
                bg="green.100"
                border="2px solid"
                borderColor="green.300"
                aria-hidden="true"
              >
                <DynamicIcon 
                  name="target" 
                  size={28} 
                  color="var(--db-colors-green-600)" 
                  aria-hidden="true"
                />
              </Box>
              <VStack align="flex-start" gap={1}>
                <Badge
                  colorPalette="green"
                  variant="subtle"
                  size="md"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  Foco de Atuação
                </Badge>
                <Heading 
                  as="h3"
                  id="foco-atuacao-heading"
                  fontSize={{ base: "xl", md: "2xl" }} 
                  color="gray.800"
                  lineHeight="1.3"
                  letterSpacing="-0.01em"
                >
                  Atendimento Online Personalizado
                </Heading>
              </VStack>
            </HStack>

            <VStack gap={4} align="flex-start">
              {[
                {
                  icon: "users",
                  text: "Atendimentos individuais online para jovens e adultos que buscam um estilo de vida saudável e equilibrado",
                },
                {
                  icon: "heart",
                  text: "Suporte especializado para superar dificuldades emocionais como baixa autoestima, rejeição, ansiedade e falta de motivação",
                },
                {
                  icon: "compass",
                  text: "A psicoterapia como um passo assertivo em direção a um estilo de vida saudável e com sentido, sempre fiel à sua essência",
                },
              ].map((item, i) => (
                <HStack key={`focus-${i}`} gap={3} align="flex-start">
                  <Box mt={1} aria-hidden="true">
                    <DynamicIcon
                      name={item.icon as "users" | "heart" | "compass"}
                      size={18}
                      color="green.600"
                      aria-hidden="true"
                    />
                  </Box>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.700"
                    lineHeight="1.6"
                    letterSpacing="0.01em"
                  >
                    {item.text}
                  </Text>
                </HStack>
              ))}
            </VStack>
            </Box>
          </section>

          {/* Missão Section */}
          <section aria-labelledby="missao-heading">
            <Box
              w="full"
              bg="gray.900"
              p={{ base: 8, md: 16 }}
              borderRadius="xl"
              color="white"
              borderWidth={2}
              borderColor="gray.700"
            >
            <VStack gap={6}>
              <HStack gap={4}>
                <Box
                  p={4}
                  borderRadius="xl"
                  bg="gray.800"
                  border="2px solid"
                  borderColor="gray.600"
                  aria-hidden="true"
                >
                  <DynamicIcon 
                    name="cross" 
                    size={32} 
                    color="var(--db-colors-white)" 
                    aria-hidden="true"
                  />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Badge
                    colorPalette="purple"
                    variant="solid"
                    size="md"
                    borderRadius="full"
                    px={4}
                    py={2}
                  >
                    Missão & Propósito
                  </Badge>
                  <Heading 
                    as="h2"
                    id="missao-heading"
                    fontSize={{ base: "2xl", md: "3xl" }} 
                    color="white"
                    lineHeight="1.3"
                    letterSpacing="-0.01em"
                  >
                    Liderança com Propósito
                  </Heading>
                </VStack>
              </HStack>

              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                fontStyle="italic"
                textAlign="center"
                lineHeight="1.5"
                letterSpacing="0.02em"
                color="gray.100"
                fontWeight="medium"
              >
                Como cristão, minha missão é apoiar líderes a alcançarem
                equilíbrio emocional e a prosperarem em suas jornadas,
                capacitando-os a gerar empregos e garantir o sustento de
                inúmeras famílias.
              </Text>

              <Box
                 w="full"
                 h="1px"
                 bg="gray.600"
                 role="separator"
                 aria-hidden="true"
               />

              <Text
                fontSize={{ base: "md", md: "xl" }}
                textAlign="center"
                lineHeight="1.6"
                letterSpacing="0.01em"
                color="gray.200"
              >
                Ao promover ambientes de trabalho saudáveis e harmonizar suas
                próprias vidas pessoais, esses líderes inspiram futuras gerações
                a enxergarem a sucessão de forma positiva, leve e sustentável,
                moldando um legado de liderança saudável e comprometida com o
                futuro.
              </Text>
            </VStack>
            </Box>
          </section>
        </VStack>
      </Container>
    </main>
    </>
  );
}
