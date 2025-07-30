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
import { WordTransition } from "./components/WordTransition";
import {
  ClockIcon,
  PlusIcon,
  ArrowRightIcon,
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
            description: "Como cristão, minha missão é apoiar líderes a alcançarem equilíbrio emocional e a prosperarem em suas jornadas, capacitando-os a gerar empregos e garantir o sustento de inúmeras famílias. Ao promover ambientes de trabalho saudáveis e harmonizar suas próprias vidas pessoais, esses líderes inspiram futuras gerações a enxergarem a sucessão de forma positiva, leve e sustentável, moldando um legado de liderança saudável e comprometida com o futuro.",
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
        rounded={{ base: "none", lg: "3xl" }}
        maxW={{ base: "full", lg: "calc(100vw - 80px)" }}
        aria-labelledby="hero-title"
        bgGradient="linear-gradient(180deg, {colors.gray.50}, {colors.gray.100})"
        position="relative"
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
              <Badge
                bg="blue.50"
                color="blue.600"
                px={4}
                py={2}
                textStyle="sm"
                fontWeight="semibold"
                border="1px solid"
                borderColor="blue.200"
                borderRadius="full"
              >
                Consultoria Psicológica Empresarial
              </Badge>

              <Heading
                id="hero-title"
                textStyle={{ base: "4xl", md: "6xl", xl: "7xl" }}
                fontWeight="black"
                color="gray.900"
                fontFamily="heading"
                lineHeight="1"
                m={0}
              >
                <WordTransition inline typewriter words={["Desenvolvendo", "Aconselhando", "Ajudando", "Encorajando", "Incentivando"]} />
                <br />
                <WordTransition
                  typewriter
                  words={["empresários", "executivos", "líderes", "profissionais", "empreendedores"]}
                  delay={5000}
                  inline
                />
              </Heading>

              <Heading
                mt={-4}
                pt={-4}
                textStyle={{ base: "4xl", md: "4xl", xl: "5xl" }}
                as="span"
                color="blue.600"
              >
                {" "}
                a encontrar equilíbrio entre <br />
                <WordTransition inline typewriter words={["empresa", "trabalho", "negócios"]} />,
                família e propósito
              </Heading>

              <Text
                textStyle={{ base: "lg", md: "xl" }}
                color="fg.muted"
                maxW="500px"
                fontFamily="body"
              >
                Transforme a pressão em performance sustentável. Há mais de 10
                anos ajudando líderes a prosperarem sem sacrificar o que
                realmente importa.
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
                    Para minha empresa →
                  </Button>
                </Link>

                <Link href="/contato">
                  <Button
                    variant="outline"
                    size="lg"
                    px={8}
                    py={6}
                    textStyle="lg"
                    fontWeight="semibold"
                    _hover={{ bg: "gray.50" }}
                    transition="all 0.3s"
                    w="full"
                  >
                    Agendar Conversa
                  </Button>
                </Link>
              </Stack>

              {/* Social Proof */}
              <HStack gap={6} flexWrap="wrap">
                <Text textStyle="sm" color="fg.muted" fontWeight="semibold">
                  +1000 pessoas transformadas
                </Text>
                <Text textStyle="sm" color="fg.muted" fontWeight="semibold">
                  +90 empresas atendidas
                </Text>
              </HStack>
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
                { title: "1000", description: "Pessoas atendidas" },
                { title: "90", description: "Empresas atendidas" },
                { title: "10", description: "Anos de experiência" }
              ].map((stat, i) => {
                const positions = [
                  { top: "160px", left: "40px" },
                  { top: "190px", right: "-40px" },
                  { bottom: "140px", left: "-40px" },
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
                    <VStack gap={2}>
                      <Heading
                        textStyle="3xl"
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
                        textStyle="sm"
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

      {/* Services Section */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="8xl">
          <VStack gap={16}>
            <VStack gap={6} textAlign="center" maxW="800px" mx="auto">
              <Badge
                bg="blue.50"
                color="blue.600"
                px={4}
                py={2}
                borderRadius="full"
                textStyle="sm"
                fontWeight="semibold"
                border="1px solid"
                borderColor="blue.200"
              >
                Nossos Serviços
              </Badge>
              <Heading
                textStyle={{ base: "4xl", md: "5xl" }}
                color="gray.900"
                fontFamily="heading"
                fontWeight="bold"
                textAlign="center"
              >
                Juntos, podemos criar um ambiente mais saudável e equilibrado.
              </Heading>
              <Text
                textStyle="lg"
                color="fg.muted"
                textAlign="center"
                maxW="600px"
              >
                Soluções personalizadas para desenvolver liderança equilibrada e
                sustentável
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {[
                {
                  icon: "handshake",
                  title: "Programas de Inteligência Emocional para Equipes",
                  description: "Fortaleça a coesão e o desempenho da sua equipe, promovendo um ambiente de trabalho mais ético, colaborativo e equilibrado."
                },
                {
                  icon: "quote",
                  title: "Aconselhamento para Alta Performance Pessoal e Profissional",
                  description: "Um acompanhamento focado para empresários que buscam gerenciar o estresse, aprimorar seu desempenho e manter uma visão de longo prazo."
                },
                {
                  icon: "plus",
                  title: "Workshops In-Company",
                  description: "Capacite líderes e equipes com treinamentos práticos, fundamentados em valores cristãos, em temas como inteligência emocional, produtividade e gestão de conflitos."
                },
                {
                  icon: "scale",
                  title: "Consultoria para o Equilíbrio Vida-Trabalho",
                  description: "Apoio na construção de uma cultura organizacional onde o bem-estar pessoal, familiar e profissional caminham juntos, maximizando o desempenho a longo prazo."
                },
                {
                  icon: "user",
                  title: "Coaching Executivo",
                  description: "Desenvolvimento de liderança fundamentado em princípios bíblicos, aprimorando a tomada de decisões empresariais com propósito e resiliência."
                },
                {
                  icon: "lightbulb",
                  title: "Mentoria para Planejamento de Carreira com Propósito",
                  description: "Ajuda a alinhar suas metas profissionais com seu propósito de vida, para alcançar uma carreira significativa e equilibrada."
                }
              ].slice(0, 6).map((service, i) => (
                <Box
                  key={`service-${i}`}
                  bg="white"
                  p={8}
                  borderRadius="lg"
                  boxShadow="lg"
                  border="1px solid"
                  borderColor="border.muted"
                  h="full"
                >
                  <VStack align="start" gap={6} h="full">
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
                  color="blue.600"
                  px={4}
                  py={2}
                  borderRadius="full"
                  textStyle="sm"
                  fontWeight="semibold"
                  border="1px solid"
                  borderColor="blue.200"
                >
                  Sobre Douglas Borges
                </Badge>
                <Heading
                  textStyle={{ base: "4xl", md: "5xl" }}
                  color="gray.900"
                  fontFamily="heading"
                  fontWeight="bold"
                >
                  Um propósito uma missão
                </Heading>
              </VStack>

              <VStack align="start" gap={6}>
                {[
                  "Como cristão, minha missão é apoiar líderes a alcançarem equilíbrio emocional e a prosperarem em suas jornadas, capacitando-os a gerar empregos e garantir o sustento de inúmeras famílias. Ao promover ambientes de trabalho saudáveis e harmonizar suas próprias vidas pessoais, esses líderes inspiram futuras gerações a enxergarem a sucessão de forma positiva, leve e sustentável, moldando um legado de liderança saudável e comprometida com o futuro.",
                  "Há 10 anos, ajudo líderes empresariais a superar a exaustão emocional, promovendo equilíbrio entre Empresa, Família e Propósito de Vida."
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
                textStyle={{ base: "4xl", md: "5xl" }}
                color="white"
                fontFamily="heading"
                fontWeight="bold"
              >
                Resultados que ajudei a criar
              </Heading>
              <Text textStyle="lg" color="gray.300" maxW="600px">
                Ouça o que meus clientes dizem sobre mim
              </Text>
            </VStack>

            <Box w="full">
              <Testimonials items={[
                {
                  image: "/assets/testmonials/william-n.webp",
                  name: "William Novak",
                  city: "União da Vitória, PR",
                  description: "Desde a primeira sessão, senti uma clareza incrível sobre meus objetivos e uma paz que há tempos não experimentava. A consultoria me ajudou a reorganizar minhas prioridades e, pela primeira vez, consegui equilibrar meu trabalho com minha vida pessoal."
                },
                {
                  image: null,
                  name: "Dr. Gustavo Coronel, CEO da Clinica Yluma",
                  city: "União da Vitória, PR",
                  description: "Meu maior ganho foi a clareza. Cheguei aos encontros de consultoria com problemas acumulados, me sentindo sempre em débito com todos. Hoje, sei onde quero chegar e como quero viver, e cada decisão tem sido mais consciente. Esse equilíbrio que encontrei reflete diretamente nos resultados do meu trabalho e com a família."
                },
                {
                  image: "/assets/testmonials/thyago-b-de-lima.webp",
                  name: "Thyago B. de Lima, Empresário e Palestrante",
                  city: "Curitiba, PR",
                  description: "A abordagem cristã da consultoria fez toda a diferença para mim. Encontrar alguém que entende meus valores e me ajuda a aplicá-los no dia a dia foi transformador. Hoje, tenho mais paz e confiança em minhas decisões como líder e como pai."
                }
              ]} />
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
                  title: "Ensinando a Ensinar, Aprendendo a Aprender e Aprendendo a Ensinar",
                  description: "Explora métodos práticos para desenvolver habilidades de ensino e aprendizado contínuo, fortalecendo a troca de conhecimento.",
                  duration: "1h",
                  format: "Presencial ou Online"
                },
                {
                  image: "/assets/palestras/ansiedade.jpg",
                  slug: "palestra-controlar-ansiedade",
                  title: "Como controlar a ansiedade",
                  description: "Combinando conteúdos práticos e ferramentas exclusivas usadas em orientações psicológicas, conheça às técnicas para controlar a Ansiedade.",
                  duration: "2h",
                  format: "Presencial"
                },
                {
                  image: "/assets/palestras/problema.webp",
                  slug: "palestra-viva-sua-historia",
                  title: "O que eu faço com um PROBLEMA",
                  description: "Existe todo um processo mental quando se trata de um problema. Seja para percebê-lo e/ou para resolvê-lo. O mais importante de tudo é saber que para ser chamado de problema!",
                  duration: "1h30m",
                  format: "Presencial ou Online"
                },
                {
                  image: "/assets/palestras/protocolos-comportamentais.jpg",
                  slug: "novos-protocolos-comportamentais",
                  title: "Novos Protocolos Comportamentais",
                  description: "apresenta uma abordagem inovadora para aprimorar a comunicação interpessoal, focada em empatia, clareza e compreensão mútua.",
                  duration: "1h",
                  format: "Presencial ou Online"
                }
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

      <Container maxW="8xl" mt={{ base: 4, md: 8, lg: 16 }}>
        <Box
          bgGradient="linear-gradient(135deg, {colors.blue.600}, {colors.blue.500})"
          color="white"
          borderRadius="xl"
          p={{ base: 8, md: 16 }}
          textAlign="center"
        >
          <VStack gap={8} maxW="600px" mx="auto">
            <VStack gap={4}>
              <Heading
                textStyle={{ base: "4xl", md: "5xl" }}
                fontWeight="black"
                fontFamily="heading"
              >
                Como as mudanças que você quer vão realmente acontecer?
              </Heading>
              <Text textStyle={{ base: "lg", md: "xl" }} opacity="0.9">
                Entre em contato agora conosco e crie uma parceria pela construção de um novo caminho para sua carreira!
              </Text>
            </VStack>

            <Button
              as="a"
              // @ts-expect-error: Type compatibility issue
              href="https://wa.me/5542988381261?text=Olá!%20Vim%20através%20do%20site%20do%20Douglas%20Borges."
              target="_blank"
              size="lg"
              bg="white"
              color="blue.600"
              px={8}
              py={6}
              textStyle="lg"
              fontWeight="bold"
              _hover={{ bg: "gray.50", transform: "translateY(-2px)" }}
              transition="all 0.3s"
            >
              Entrar em contato
              <ArrowRightIcon size={20} />
            </Button>
          </VStack>
        </Box>
      </Container>
    </>
  );
}
