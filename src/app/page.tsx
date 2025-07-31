import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Image,
  Badge,
} from "@chakra-ui/react";
import {
  ClockIcon,
  PlusIcon,
  ArrowRightIcon,
  TargetIcon,
  ZapIcon,
  DollarSignIcon,
  CheckIcon,
  Building2Icon,
  TriangleAlertIcon,
} from "lucide-react";
import Icon from "@/components/shared/DynamicIcon";
import { Header } from "@/components/shared/Header";
import Testimonials from "./components/Testimonials";
import { HEADER_NAVBAR_HEIGHT } from "../theme/consts";

import {
  siteDescription,
  siteTitle,
  siteImage,
  siteUrl,
} from "@/data/site-constants";
import { INSIGHTS_HIGHLIGHTS } from "@/data";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
    type: "website",
    locale: "pt_BR",
    siteName: siteTitle,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl + "/",
  },
  keywords: [
    "psicólogo",
    "terapia",
    "saúde mental",
    "atendimento psicológico",
    "ansiedade",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: siteTitle,
            image: siteImage,
            description:
              "Como cristão, minha missão é apoiar líderes a alcançarem equilíbrio emocional e a prosperarem em suas jornadas, capacitando-os a gerar empregos e garantir o sustento de inúmeras famílias. Ao promover ambientes de trabalho saudáveis e harmonizar suas próprias vidas pessoais, esses líderes inspiram futuras gerações a enxergarem a sucessão de forma positiva, leve e sustentável, moldando um legado de liderança saudável e comprometida com o futuro.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "União da Vitória",
              addressRegion: "PR",
              addressCountry: "BR",
            },
            priceRange: "$$$",
            telephone: "++55-42-98838-1261",
            url: siteUrl,
          }),
        }}
      />

      <Header />

      {/* Hero Section */}
      <Container
        as="main"
        mx={{ base: 0, lg: 8 }}
        mt={HEADER_NAVBAR_HEIGHT}
        role="main"
        roundedTop={{ base: "none", lg: "3xl" }}
        maxW={{ base: "full", lg: "calc(100vw - 80px)" }}
        aria-labelledby="hero-title"
        bgGradient="linear-gradient(180deg, {colors.gray.50}, {colors.gray.100})"
        position="relative"
        overflow="hidden"
      >
        <Container
          maxW="8xl"
          py={{ base: 16, md: 24 }}
          position="relative"
          zIndex="1"
        >
          <Stack
            flexDir={{ base: "column", lg: "row" }}
            gap={{ base: 12, lg: 20 }}
            align="center"
            justify="space-between"
            minH={{ base: "auto", lg: "70vh" }}
          >
            <VStack
              flex={1}
              align="flex-start"
              gap={8}
              maxW={{ base: "full", lg: "800px" }}
            >
              {/* Badge/Tag */}
              <HStack
                bg="orange.50"
                color="orange.700"
                px={4}
                py={2}
                textStyle="sm"
                fontWeight="semibold"
                border="1px solid"
                borderColor="orange.200"
                borderRadius={{ base: "md", md: "full" }}
              >
                <TriangleAlertIcon size={16} />{" "}
                <Text>73% dos líderes empresariais sofrem com burnout</Text>
              </HStack>

              <Heading
                id="hero-title"
                textStyle={{ base: "4xl", md: "6xl", xl: "7xl" }}
                fontWeight="black"
                color="gray.900"
                fontFamily="heading"
                lineHeight="1"
                m={0}
              >
                Liderança que gera resultados{" "}
                <Box as="span" color="blue.600">
                  sem esgotar pessoas.
                </Box>
              </Heading>

              <Text
                textStyle={{ base: "lg", md: "xl" }}
                color="fg.muted"
                maxW="600px"
                fontFamily="body"
              >
                Consultoria especializada para{" "}
                <strong>CEOs, Diretores, Executivos e RH</strong> que precisam
                aumentar performance sem sacrificar o bem-estar das equipes.
                Metodologia comprovada em 90+ empresas.
              </Text>

              <Stack direction={{ base: "column", sm: "row" }} gap={4} w="full">
                <Link href="/empresas">
                  <Button
                    size="lg"
                    colorPalette="blue"
                    px={8}
                    py={6}
                    textStyle="lg"
                    fontWeight="semibold"
                    _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
                    transition="all 0.3s"
                    w="full"
                  >
                    Consultoria Empresarial →
                  </Button>
                </Link>

                <Link href="/assessment">
                  <Button
                    size="lg"
                    variant="outline"
                    colorPalette="blue"
                    px={8}
                    py={6}
                    textStyle="lg"
                    fontWeight="semibold"
                    _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
                    transition="all 0.3s"
                    w="full"
                  >
                    Assessment Comportamental →
                  </Button>
                </Link>
              </Stack>

              {/* Social Proof */}
              <VStack align="start" gap={3}>
                <HStack gap={6} flexWrap="wrap">
                  <HStack align="center" gap={2}>
                    <CheckIcon size={16} />
                    <Text textStyle="sm" color="fg.muted" fontWeight="semibold">
                      +1000 profissionais desenvolvidos
                    </Text>
                  </HStack>
                  <HStack align="center" gap={2}>
                    <Building2Icon size={16} />
                    <Text textStyle="sm" color="fg.muted" fontWeight="semibold">
                      90+ empresas transformadas
                    </Text>
                  </HStack>
                  <HStack align="center" gap={2}>
                    <ClockIcon size={16} />
                    <Text textStyle="sm" color="fg.muted" fontWeight="semibold">
                      10 anos de experiência
                    </Text>
                  </HStack>
                </HStack>
                <Text textStyle="xs" color="fg.subtle" fontStyle="italic">
                  &ldquo;Nossos clientes aumentam 40% a produtividade e reduzem
                  60% o turnover, criando ambientes de trabalho mais saudáveis e
                  lucrativos.&rdquo; - Douglas Borges, CRP 08-21013
                </Text>
              </VStack>
            </VStack>

            <Box
              w={{ base: "full", lg: "550px" }}
              h={{ base: "400px", lg: "650px" }}
              position="relative"
              borderRadius="3xl"
              boxShadow="2xl"
              transition="transform 0.5s ease"
            >
              <Image
                src="/assets/douglas-borges-atendimento.webp"
                alt="Douglas Borges em atendimento"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 550px"
                rounded="3xl"
              />

              {/* Balões de contagem aleatórios sobre a foto */}
              {[
                { title: "1000", description: "Profissionais desenvolvidos" },
                { title: "90", description: "Empresas atendidas" },
                { title: "10", description: "Anos de experiência" },
              ].map((stat, i) => {
                const positions = [
                  { top: "130px", left: "60px" },
                  { top: "340px", right: "-20px" },
                  { bottom: "40px", left: "-20px" },
                  { bottom: "80px", right: "80px" },
                ];
                const pos = positions[i % positions.length];
                return (
                  <Box
                    key={`stat-bubble-${i}`}
                    position="absolute"
                    zIndex={2}
                    {...pos}
                    bg="white"
                    borderRadius="2xl"
                    boxShadow="2xl"
                    border="2px solid"
                    borderColor="blue.500"
                    px={{ base: 2, md: 4 }}
                    py={{ base: 2, md: 6 }}
                    textAlign="center"
                    _hover={{ transform: "scale(1.07)", shadow: "3xl" }}
                    transition="all 0.3s"
                  >
                    <VStack gap={0}>
                      <Heading
                        textStyle={{ base: "xl", md: "3xl" }}
                        fontWeight="black"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                        color="blue.600"
                        fontFamily="heading"
                      >
                        <PlusIcon size={28} />
                        {stat.title}
                      </Heading>
                      <Text
                        textStyle={{ base: "xs", md: "sm" }}
                        fontWeight="semibold"
                        color="fg.muted"
                      >
                        {stat.description}
                      </Text>
                    </VStack>
                  </Box>
                );
              })}

              {/* Card flutuante fixo na base da imagem */}
              <Box
                position="absolute"
                top={8}
                left={6}
                right={6}
                bg="rgba(255, 255, 255, 0.9)"
                backdropFilter="blur(10px)"
                borderRadius="xl"
                boxShadow="xl"
                p={4}
                zIndex={3}
              >
                <HStack justify="space-between">
                  <VStack align="start" gap={1}>
                    <Text textStyle="sm" fontWeight="bold" color="gray.900">
                      Douglas Borges
                    </Text>
                    <Text textStyle="xs" color="fg.muted" fontWeight="medium">
                      Psicólogo • CRP/PR 08-21013
                    </Text>
                  </VStack>
                  <Badge colorPalette="green" fontWeight="bold">
                    ✓ Disponível
                  </Badge>
                </HStack>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Container>

      {/* Assessment Destacado */}

      <Container
        maxW={{ base: "full", lg: "calc(100vw - 80px)" }}
        bg="gray.900"
        py={{ base: 24, md: 20 }}
        roundedBottomLeft={{ base: "none", md: "3xl" }}
        roundedBottomRight={{ base: "none", md: "3xl" }}
        my={0}
      >
        <Container w="full">
          <VStack gap={12}>
            <VStack gap={6} textAlign="center" maxW="800px" mx="auto">
              <Badge
                bg="yellow.400"
                color="gray.900"
                px={4}
                py={2}
                borderRadius="full"
                textStyle="sm"
                fontWeight="bold"
              >
                NOSSO DIFERENCIAL COMPETITIVO
              </Badge>
              <Heading
                textStyle={{ base: "4xl", md: "5xl" }}
                color="white"
                fontFamily="heading"
                fontWeight="bold"
                textAlign="center"
              >
                Assessment Comportamental Científico
              </Heading>
              <Text
                textStyle="lg"
                color="gray.300"
                textAlign="center"
                maxW="700px"
              >
                A ferramenta que CEOs de grandes empresas usam para tomar
                decisões estratégicas sobre pessoas. Baseado em 5 metodologias
                científicas reconhecidas mundialmente.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              {[
                {
                  icon: <TargetIcon />,
                  title: "Elimine 89% dos Erros",
                  description:
                    "Pare de contratar por intuição. Nosso assessment científico identifica o perfil comportamental ideal para cada função.",
                  metric: "89% de assertividade",
                },
                {
                  icon: <ZapIcon />,
                  title: "Resultados em 5-7 Dias",
                  description:
                    "Análise completa de personalidade, competências e fit cultural. Relatório detalhado entregue rapidamente.",
                  metric: "5-7 dias úteis",
                },
                {
                  icon: <DollarSignIcon />,
                  title: "ROI Comprovado",
                  description:
                    "Uma contratação errada custa 3x o salário anual. O assessment custa R$ 700 e protege investimentos de até R$ 300k.",
                  metric: "ROI de 42.700%",
                },
              ].map((item, i) => (
                <Box
                  key={`assessment-feature-${i}`}
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="xl"
                  textAlign="center"
                  _hover={{ transform: "translateY(-4px)", shadow: "2xl" }}
                  transition="all 0.3s"
                >
                  <VStack gap={4}>
                    {item.icon}
                    <Heading
                      textStyle="xl"
                      color="gray.900"
                      fontFamily="heading"
                      fontWeight="bold"
                    >
                      {item.title}
                    </Heading>
                    <Text color="fg.muted" textStyle="md">
                      {item.description}
                    </Text>
                    <Badge colorPalette="blue" fontWeight="bold" textStyle="sm">
                      {item.metric}
                    </Badge>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>

            <Box textAlign="center">
              <VStack gap={4}>
                <Text color="gray.300" textStyle="lg" fontWeight="semibold">
                  Metodologias Científicas Utilizadas:
                </Text>
                <HStack
                  gap={{ base: 1, md: 4 }}
                  flexWrap="wrap"
                  justify="center"
                >
                  {["Big Five", "DISC", "MBTI", "Enneagram", "HEXACO"].map(
                    (method) => (
                      <Badge
                        key={method}
                        variant="outline"
                        colorPalette="blue"
                        px={3}
                        py={1}
                        fontWeight="semibold"
                        color="blue.300"
                        borderColor="blue.400"
                      >
                        {method}
                      </Badge>
                    )
                  )}
                </HStack>
              </VStack>
            </Box>

            <Box textAlign="center">
              <Link href="/assessment">
                <Button
                  size="xl"
                  colorPalette="blue"
                  px={10}
                  py={8}
                  textStyle={{ base: "sm", md: "xl" }}
                  fontWeight="bold"
                  _hover={{ transform: "translateY(-2px)", shadow: "2xl" }}
                  transition="all 0.3s"
                >
                  Solicitar Assessment Comportamental
                </Button>
              </Link>
              <Text textStyle="sm" color="gray.400" mt={2}>
                Resultados em 5-7 dias úteis | 100% confidencial | Suporte
                incluído
              </Text>
            </Box>
          </VStack>
        </Container>
      </Container>

      {/* Services Section */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="8xl">
          <VStack gap={16}>
            <VStack gap={6} textAlign="center" maxW="800px" mx="auto">
              <Badge
                bg="green.50"
                color="green.700"
                px={4}
                py={2}
                borderRadius="full"
                textStyle="sm"
                fontWeight="semibold"
                border="1px solid"
                borderColor="green.200"
              >
                SOLUÇÕES EMPRESARIAIS COMPROVADAS
              </Badge>
              <Heading
                textStyle={{ base: "4xl", md: "5xl" }}
                color="gray.900"
                fontFamily="heading"
                fontWeight="bold"
                textAlign="center"
              >
                Transforme Pressão em Performance.{" "}
                <Box as="span" color="green.600">
                  Lucre Mais, Estresse Menos.
                </Box>
              </Heading>
              <Text
                textStyle={{ base: "md", md: "lg" }}
                color="fg.muted"
                textAlign="center"
                maxW="700px"
              >
                <strong>73% dos líderes sofrem burnout.</strong> Nossos serviços
                aumentam produtividade em 40% enquanto reduzem turnover em 60%.
                Metodologia que transforma equipes e resultados.
              </Text>
            </VStack>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              gap={{ base: 2, md: 4 }}
            >
              {[
                {
                  icon: "handshake",
                  title: "Assessment Comportamental Científico",
                  description:
                    "Elimine 89% dos erros de contratação. Metodologias Big Five, DISC e MBTI para identificar talentos de alta performance. ROI comprovado de 42.700%.",
                  metric: "R$ 700 por avaliação",
                },
                {
                  icon: "quote",
                  title: "Coaching Executivo Anti-Burnout",
                  description:
                    "Líderes aumentam produtividade em 40% e reduzem estresse em 70%. Para Diretores, Executivos e Gestores que precisam entregar resultados sem se esgotar.",
                  metric: "40% mais produtividade",
                },
                {
                  icon: "plus",
                  title: "Consultoria em Inteligência Emocional",
                  description:
                    "Equipes com alta IE geram 25% mais receita. Treinamentos práticos que transformam conflitos em colaboração e pressão em performance.",
                  metric: "+25% de receita",
                },
                {
                  icon: "scale",
                  title: "Programa de Retenção de Talentos",
                  description:
                    "Reduza turnover em 60% e economize até R$ 500k anuais. Ideal para RH e Gestores que precisam manter talentos motivados e engajados.",
                  metric: "-60% turnover",
                },
                {
                  icon: "user",
                  title: "Desenvolvimento de Liderança Executiva",
                  description:
                    "Líderes treinados aumentam engajamento das equipes em 35%. Metodologia exclusiva baseada em 10 anos de experiência com C-Level.",
                  metric: "+35% engajamento",
                },
                {
                  icon: "lightbulb",
                  title: "Mentoria Estratégica para Liderança",
                  description:
                    "Tomada de decisão 50% mais assertiva. Acompanhamento 1:1 para Executivos e Diretores que precisam equilibrar crescimento empresarial com propósito de vida.",
                  metric: "+50% assertividade",
                },
              ]
                .slice(0, 6)
                .map((service, i) => (
                  <Box
                    key={`service-${i}`}
                    bg="white"
                    p={{ base: 4, md: 8 }}
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="border.muted"
                    h="full"
                  >
                    <VStack align="start" gap={6} h="full">
                      <HStack justify="space-between" w="full">
                        <Flex
                          w={16}
                          h={16}
                          borderRadius="xl"
                          bg="blue.500"
                          align="center"
                          justify="center"
                          color="white"
                        >
                          <Icon name={service.icon as never} size={32} />
                        </Flex>

                        <Badge
                          colorPalette="green"
                          fontWeight="bold"
                          textStyle="xs"
                          px={2}
                          py={1}
                        >
                          {service.metric}
                        </Badge>
                      </HStack>

                      <VStack align="start" gap={3} flex={1}>
                        <Heading
                          textStyle="xl"
                          color="gray.900"
                          fontFamily="heading"
                          fontWeight="semibold"
                        >
                          {service.title}
                        </Heading>
                        <Text color="fg.muted" textStyle="md">
                          {service.description}
                        </Text>
                      </VStack>
                    </VStack>
                  </Box>
                ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Box as="section" id="about" py={{ base: 16, md: 24 }}>
        <Container maxW="8xl">
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 12, lg: 20 }}
            align="center"
          >
            <VStack flex={1} align="start" gap={8}>
              <VStack align="start" gap={4}>
                <Badge
                  bg="blue.50"
                  color="blue.700"
                  px={4}
                  py={2}
                  borderRadius="full"
                  textStyle="sm"
                  fontWeight="semibold"
                  border="1px solid"
                  borderColor="blue.200"
                >
                  O PSICÓLOGO DA LIDERANÇA EMPRESARIAL
                </Badge>
                <Heading
                  textStyle={{ base: "4xl", md: "5xl" }}
                  color="gray.900"
                  fontFamily="heading"
                  fontWeight="bold"
                >
                  O especialista que líderes procuram{" "}
                  <Box as="span" color="blue.600">
                    para decisões estratégicas sobre pessoas
                  </Box>
                </Heading>
              </VStack>

              <VStack align="start" gap={6}>
                {[
                  "Fundador da i-Treebo, já realizei mais de 1.000 assessments comportamentais para 90+ empresas. Minha expertise ajuda Diretores, Executivos e profissionais de RH a tomar decisões estratégicas sobre pessoas com 89% de assertividade.",
                  "Há 10 anos, transformo equipes e lideranças: 40% aumentam produtividade, 60% reduzem turnover e 70% melhoram o equilíbrio vida-trabalho. Metodologia científica para quem precisa de resultados reais.",
                ].map((p, i) => (
                  <Text
                    textStyle={{ base: "lg", md: "xl" }}
                    color="fg.muted"
                    key={`home-about-${i}`}
                  >
                    {p}
                  </Text>
                ))}
              </VStack>

              <VStack align="start" gap={3}>
                <Text textStyle="lg" fontWeight="semibold" color="gray.900">
                  Douglas Borges, Marido, Pai, Psicólogo e Cristão
                </Text>
                <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
                  CRP/PR 08-21013 · CRP/SC 12-13884
                </Text>
              </VStack>

              <Link href="/sobre">
                <Button variant="outline" size="lg" fontWeight="semibold">
                  Conheça minha história
                  <ArrowRightIcon size={20} />
                </Button>
              </Link>
            </VStack>

            <Box
              w={{ base: "full", lg: "500px" }}
              h={{ base: "400px", lg: "600px" }}
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="xl"
            >
              <Image
                src="/assets/douglas-borges-em-pe.webp"
                alt="Douglas Borges"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        as="section"
        id="testimonials"
        bg="gray.900"
        py={{ base: 16, md: 24 }}
      >
        <Container maxW="8xl">
          <VStack gap={16}>
            <VStack gap={6} textAlign="center">
              <Badge
                bg="blue.500"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                textStyle="sm"
                fontWeight="semibold"
              >
                Depoimentos
              </Badge>
              <Heading
                textStyle={{ base: "5xl", md: "5xl" }}
                color="white"
                fontWeight="bold"
              >
                Resultados que ajudei a criar
              </Heading>
              <Text textStyle="md" color="gray.300" maxW="600px">
                Ouça o que meus clientes dizem sobre mim
              </Text>
            </VStack>

            <Box w="full">
              <Testimonials
                items={[
                  {
                    image: "/assets/testmonials/william-n.webp",
                    name: "William Novak",
                    city: "União da Vitória, PR",
                    description:
                      "Desde a primeira sessão, senti uma clareza incrível sobre meus objetivos e uma paz que há tempos não experimentava. A consultoria me ajudou a reorganizar minhas prioridades e, pela primeira vez, consegui equilibrar meu trabalho com minha vida pessoal.",
                  },
                  {
                    image: null,
                    name: "Dr. Gustavo Coronel, CEO da Clinica Yluma",
                    city: "União da Vitória, PR",
                    description:
                      "Meu maior ganho foi a clareza. Cheguei aos encontros de consultoria com problemas acumulados, me sentindo sempre em débito com todos. Hoje, sei onde quero chegar e como quero viver, e cada decisão tem sido mais consciente. Esse equilíbrio que encontrei reflete diretamente nos resultados do meu trabalho e com a família.",
                  },
                  {
                    image: "/assets/testmonials/thyago-b-de-lima.webp",
                    name: "Thyago B. de Lima, Empresário e Palestrante",
                    city: "Curitiba, PR",
                    description:
                      "A abordagem cristã da consultoria fez toda a diferença para mim. Encontrar alguém que entende meus valores e me ajuda a aplicá-los no dia a dia foi transformador. Hoje, tenho mais paz e confiança em minhas decisões como líder e como pai.",
                  },
                ]}
              />
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Topics/Lectures Section */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="8xl">
          <VStack gap={12}>
            <Stack
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align={{ base: "start", md: "center" }}
              w="full"
              gap={6}
            >
              <VStack align="start" gap={2}>
                <Heading
                  textStyle={{ base: "3xl", md: "4xl" }}
                  color="gray.900"
                  fontFamily="heading"
                  fontWeight="bold"
                >
                  Palestras e Eventos
                </Heading>
                <Text textStyle="lg" color="fg.muted">
                  Conteúdo especializado para transformar sua organização
                </Text>
              </VStack>

              <HStack gap={4}>
                <Button
                  as="a"
                  // @ts-expect-error: Type compatibility issue
                  href="https://wa.me/5542988381261?text=Olá!%20Estou%20interessado(a)%20em%20contratar%20uma%20das%20palestras%20do%20Douglas%20Borges."
                  target="_blank"
                  colorPalette="blue"
                  size="lg"
                  fontWeight="semibold"
                >
                  Agendar Palestra
                </Button>
                <Link href="/palestras-e-eventos">
                  <Button variant="outline" size="lg" fontWeight="semibold">
                    Saiba mais
                  </Button>
                </Link>
              </HStack>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
              {[
                {
                  image: "/assets/palestras/ensinando-a-ensinar.jpg",
                  slug: "ensinando-a-ensinar-aprendendo-a-aprender-aprenendo-a-ensinar",
                  title:
                    "Ensinando a Ensinar, Aprendendo a Aprender e Aprendendo a Ensinar",
                  description:
                    "Explora métodos práticos para desenvolver habilidades de ensino e aprendizado contínuo, fortalecendo a troca de conhecimento.",
                  duration: "1h",
                  format: "Presencial ou Online",
                },
                {
                  image: "/assets/palestras/ansiedade.jpg",
                  slug: "palestra-controlar-ansiedade",
                  title: "Como controlar a ansiedade",
                  description:
                    "Combinando conteúdos práticos e ferramentas exclusivas usadas em orientações psicológicas, conheça às técnicas para controlar a Ansiedade.",
                  duration: "2h",
                  format: "Presencial",
                },
                {
                  image: "/assets/palestras/problema.webp",
                  slug: "palestra-viva-sua-historia",
                  title: "O que eu faço com um PROBLEMA",
                  description:
                    "Existe todo um processo mental quando se trata de um problema. Seja para percebê-lo e/ou para resolvê-lo. O mais importante de tudo é saber que para ser chamado de problema!",
                  duration: "1h30m",
                  format: "Presencial ou Online",
                },
                {
                  image: "/assets/palestras/protocolos-comportamentais.jpg",
                  slug: "novos-protocolos-comportamentais",
                  title: "Novos Protocolos Comportamentais",
                  description:
                    "apresenta uma abordagem inovadora para aprimorar a comunicação interpessoal, focada em empatia, clareza e compreensão mútua.",
                  duration: "1h",
                  format: "Presencial ou Online",
                },
              ].map((topic, i) => (
                <Link key={`topic-${i}`} href="/palestras-e-eventos">
                  <Box
                    bg="white"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                    _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
                    transition="all 0.3s"
                    h="full"
                  >
                    <Box
                      h="200px"
                      backgroundImage={`url(${topic.image})`}
                      backgroundPosition="center"
                      backgroundSize="cover"
                      filter="grayscale(0.3)"
                      _hover={{ filter: "grayscale(0)" }}
                      transition="filter 0.3s"
                    />
                    <Box p={6}>
                      <VStack align="start" gap={3}>
                        <Heading
                          textStyle="lg"
                          color="gray.900"
                          fontFamily="heading"
                          fontWeight="semibold"
                          lineClamp={2}
                        >
                          {topic.title}
                        </Heading>
                        <Text textStyle="sm" color="fg.muted" lineClamp={3}>
                          {topic.description}
                        </Text>
                        <HStack gap={2}>
                          <Box
                            bg="blue.100"
                            color="blue.800"
                            px={2}
                            py={1}
                            borderRadius="md"
                            textStyle="xs"
                            fontWeight="semibold"
                          >
                            {topic.duration}
                          </Box>
                          <Box
                            bg="gray.100"
                            color="gray.700"
                            px={2}
                            py={1}
                            borderRadius="md"
                            textStyle="xs"
                            fontWeight="semibold"
                          >
                            {topic.format}
                          </Box>
                        </HStack>
                      </VStack>
                    </Box>
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Insights Section */}
      <Box bg="bg.subtle" py={{ base: 16, md: 20 }}>
        <Container maxW="8xl">
          <VStack gap={12}>
            <Stack
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align={{ base: "start", md: "center" }}
              w="full"
              gap={6}
            >
              <VStack align="start" gap={2}>
                <Heading
                  textStyle={{ base: "3xl", md: "4xl" }}
                  color="gray.900"
                  fontFamily="heading"
                  fontWeight="bold"
                >
                  Insights e Reflexões
                </Heading>
                <Text textStyle="lg" color="fg.muted">
                  Conteúdo exclusivo sobre liderança e equilíbrio de vida
                </Text>
              </VStack>

              <Link href="/insights">
                <Button variant="outline" size="lg" fontWeight="semibold">
                  Ver todos
                  <ArrowRightIcon size={16} />
                </Button>
              </Link>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              {INSIGHTS_HIGHLIGHTS.slice(0, 3).map((insight, index) => (
                <Link key={`highlight-${index}`} href={`/${insight.slug}`}>
                  <Box
                    bg="white"
                    p={8}
                    borderRadius="lg"
                    boxShadow="lg"
                    _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
                    transition="all 0.3s"
                    h="full"
                  >
                    <VStack align="start" gap={6} h="full">
                      <VStack align="start" gap={3} flex={1}>
                        <Heading
                          textStyle="xl"
                          color="gray.900"
                          fontFamily="heading"
                          fontWeight="semibold"
                          lineClamp={2}
                        >
                          {insight.title}
                        </Heading>
                        <Text color="fg.muted" lineClamp={4} textStyle="md">
                          {insight.content[0]}
                        </Text>
                      </VStack>

                      <HStack
                        justify="space-between"
                        w="full"
                        pt={4}
                        borderTop="1px"
                        borderColor="border.muted"
                      >
                        <HStack gap={2}>
                          <ClockIcon size={16} color="#9CA3AF" />
                          <Text textStyle="sm" color="fg.subtle">
                            {insight.timeToRead}
                          </Text>
                        </HStack>
                        <HStack gap={2}>
                          {insight.tags.slice(0, 2).map((tag: string) => (
                            <Box
                              key={tag}
                              bg="blue.100"
                              color="blue.800"
                              px={2}
                              py={1}
                              borderRadius="md"
                              textStyle="xs"
                              fontWeight="semibold"
                            >
                              #{tag}
                            </Box>
                          ))}
                        </HStack>
                      </HStack>
                    </VStack>
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Container
        maxW={{ base: "full", lg: "8xl" }}
        w="full"
        p={0}
        mt={{ base: 0, md: 8, lg: 16 }}
        mb={{ base: -16, md: 0 }}
      >
        <Box
          bgGradient="linear-gradient(135deg, {colors.blue.600}, {colors.blue.500})"
          color="white"
          borderRadius={{ base: "none", md: "3xl" }}
          p={{ base: 8, md: 16 }}
          textAlign="center"
        >
          <VStack gap={8} maxW={{ base: "700px", lg: "none" }} mx="auto">
            <VStack
              gap={4}
              w="full"
              align="stretch"
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading
                textStyle={{ base: "4xl", md: "7xl" }}
                fontWeight="black"
                fontFamily="heading"
                w="full"
              >
                Qual solução é ideal para sua empresa?
              </Heading>
              <Text
                textStyle={{ base: "lg", md: "xl" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Cada empresa tem necessidades únicas. Em uma{" "}
                <strong>conversa de 30 minutos</strong>, vou entender seus
                desafios e recomendar a melhor abordagem:
              </Text>
            </VStack>

            <Stack
              direction={{ base: "column", lg: "row" }}
              gap={{ base: 6, lg: 12 }}
              align="center"
              justify="space-between"
              w="full"
            >
              <VStack
                gap={3}
                textAlign="left"
                align="stretch"
                flex={1}
                maxW={{ base: "full", lg: "600px" }}
              >
                <Text textStyle="md" opacity="0.9">
                  <strong>Assessment Comportamental</strong> - Para decisões de
                  contratação e desenvolvimento
                </Text>
                <Text textStyle="md" opacity="0.9">
                  <strong>Consultoria Empresarial</strong> - Para transformação
                  de equipes e cultura
                </Text>
                <Text textStyle="md" opacity="0.9">
                  <strong>Atendimento Individual</strong> - Para desenvolvimento
                  de lideranças específicas
                </Text>
              </VStack>

              <VStack gap={4} flex="none">
                <Button
                  as="a"
                  // @ts-expect-error: Type compatibility issue
                  href="https://wa.me/5542988381261?text=Olá%20Douglas!%20Sou%20da%20área%20de%20[SEU_CARGO]%20e%20gostaria%20de%20conversar%20sobre%20as%20soluções%20para%20minha%20empresa.%20Quando%20podemos%20agendar%20uma%20conversa?"
                  target="_blank"
                  size="xl"
                  bg="white"
                  color="blue.600"
                  px={{ base: 4, md: 12 }}
                  py={{ base: 4, md: 8 }}
                  textStyle={{ base: "sm", md: "xl" }}
                  fontWeight="bold"
                  _hover={{ bg: "gray.50", transform: "translateY(-2px)" }}
                  transition="all 0.3s"
                  whiteSpace="nowrap"
                >
                  Agendar Conversa Estratégica (30min)
                </Button>

                <Text textStyle="sm" opacity="0.8" textAlign="center">
                  Conversa 100% confidencial | Online ou presencial
                </Text>
              </VStack>
            </Stack>
          </VStack>
        </Box>
      </Container>
    </>
  );
}
