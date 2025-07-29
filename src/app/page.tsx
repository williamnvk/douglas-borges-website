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
  CheckIcon,
  StarIcon,
  TrendingUpIcon,
} from "lucide-react";
import Icon from "@/components/shared/DynamicIcon";
import QuoteIcon from "./components/QuoteIcon";
import { Header } from "@/components/shared/Header";
import Testimonials from "./components/Testimonials";
import { HEADER_NAVBAR_HEIGHT } from "../theme/consts";

import language, {
  siteDescription,
  siteTitle,
  siteImage,
  siteUrl,
} from "@/data/dictionaries";
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
  const intl = language;

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
            description: intl.home.about.description[0],
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
      <Box
        as="main"
        mt={HEADER_NAVBAR_HEIGHT}
        role="main"
        aria-labelledby="hero-title"
        bgGradient="linear(to-br, gray.50, white)"
        position="relative"
        overflow="hidden"
      >
        {/* Background decoration */}
        <Box
          position="absolute"
          top="0"
          right="0"
          w="50%"
          h="100%"
          bgGradient="linear(45deg, blue.50, transparent)"
          opacity="0.3"
          zIndex="0"
        />

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
              maxW={{ base: "full", lg: "600px" }}
            >
              {/* Badge/Tag */}
              <Badge
                bg="blue.50"
                color="blue.600"
                px={4}
                py={2}
                fontSize="sm"
                fontWeight="medium"
                border="1px solid"
                borderColor="blue.200"
              >
                Consultoria Psicológica Empresarial
              </Badge>

              <Heading
                id="hero-title"
                fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
                lineHeight="1"
                fontWeight="800"
              >
                <Box as="span" display="block" mb={2} lineHeight="1">
                  <WordTransition typewriter words={intl.home.how} />
                </Box>
                <Box
                  as="span"
                  display="block"
                  mb={2}
                  color="blue.600"
                  lineHeight="1"
                >
                  <WordTransition
                    typewriter
                    words={intl.home.who}
                    delay={5000}
                  />
                </Box>
                <Box
                  as="span"
                  fontSize={{ base: "2xl", md: "4xl", xl: "5xl" }}
                  lineHeight="1"
                >
                  a encontrar equilíbrio entre{" "}
                  <Box as="span" lineHeight="1">
                    <WordTransition typewriter words={intl.home.where} />
                  </Box>
                  , família e propósito
                </Box>
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                maxW="500px"
                lineHeight="1.4"
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
                    fontSize="lg"
                    _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
                    transition="all 0.3s"
                    w="full"
                  >
                    Atendimento para minha empresa →
                  </Button>
                </Link>

                <Link href="/contato">
                  <Button
                    variant="outline"
                    size="lg"
                    px={8}
                    py={6}
                    fontSize="lg"
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
                <Text fontSize="sm" color="gray.600" fontWeight="medium">
                  +1000 pessoas transformadas
                </Text>
                <Text fontSize="sm" color="gray.600" fontWeight="medium">
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
              {/* Os balões são posicionados absolutamente sobre a imagem */}
              {intl.home.counting.map((stat, i) => {
                // Array de posições predefinidas para os balões (top, left)
                // Ajuste os valores conforme necessário para melhor visual
                const positions = [
                  { top: '160px', left: '40px' },
                  { top: '190px', right: '-40px' },
                  { bottom: '140px', left: '-40px' },
                  { bottom: '80px', right: '80px' }
                ];
                // Garante que sempre haja uma posição para cada balão
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
                    px={{ base: 2, md: 4}}
                    py={{ base: 2, md: 6}}
                    textAlign="center"
                    _hover={{ transform: "scale(1.07)", shadow: "3xl" }}
                    transition="all 0.3s"
                  >
                    <VStack gap={2}>
                      <Heading
                        fontSize="3xl"
                        fontWeight="900"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                        color="blue.600"
                      >
                        <PlusIcon size={28} />
                        {stat.title}
                      </Heading>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
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
                    <Text fontSize="sm" fontWeight="bold">
                      Douglas Borges
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      Psicólogo • CRP/PR 08-21013
                    </Text>
                  </VStack>
                  <Box
                    bg="green.100"
                    color="green.700"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                  >
                    ✓ Disponível
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box bg="gray.50" py={{ base: 16, md: 24 }}>
        <Container maxW="8xl">
          <VStack gap={16}>
            <VStack gap={6} textAlign="center" maxW="800px" mx="auto">
              <Box
                bg="blue.50"
                color="blue.600"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="medium"
                border="1px solid"
                borderColor="blue.200"
              >
                Nossos Serviços
              </Box>
              <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.2">
                {intl.home.services.title}
              </Heading>
              <Text fontSize="lg" color="gray.600" lineHeight="1.7">
                Soluções personalizadas para desenvolver liderança equilibrada e
                sustentável
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {intl.home.services.items.slice(0, 6).map((service, i) => (
                <Box
                  key={`service-${i}`}
                  bg="white"
                  p={8}
                  borderRadius="lg"
                  boxShadow="lg"
                  border="1px solid"
                  borderColor="gray.100"
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
                      <Heading fontSize="xl" lineHeight="1.3">
                        {service.title}
                      </Heading>
                      <Text color="gray.600" lineHeight="1.6">
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
                <Box
                  bg="blue.50"
                  color="blue.600"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="medium"
                  border="1px solid"
                  borderColor="blue.200"
                >
                  Sobre Douglas Borges
                </Box>
                <Heading fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.2">
                  {intl.home.about.title}
                </Heading>
              </VStack>

              <VStack align="start" gap={6}>
                {intl.home.about.description.map((p, i) => (
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color="gray.600"
                    lineHeight="1.7"
                    key={`home-about-${i}`}
                  >
                    {p}
                  </Text>
                ))}
              </VStack>

              <VStack align="start" gap={3}>
                <Text fontSize="lg" fontWeight="medium">
                  {intl.home.about.subtitle}
                </Text>
                <Text fontSize="sm" color="gray.500" fontWeight="medium">
                  CRP/PR 08-21013 · CRP/SC 12-13884
                </Text>
              </VStack>

              <Button
                as="a"
                href="/sobre"
                variant="outline"
                size="lg"
                rightIcon={<ArrowRightIcon size={20} />}
              >
                Conheça minha história
              </Button>
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
              <Box
                bg="blue.500"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="medium"
              >
                Depoimentos
              </Box>
              <Heading fontSize={{ base: "4xl", md: "5xl" }} color="white">
                {intl.testimonials.title}
              </Heading>
              <Text fontSize="lg" color="gray.300" maxW="600px">
                {intl.testimonials.subtitle}
              </Text>
            </VStack>

            <Box w="full">
              <Testimonials items={intl.testimonials.items} />
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
                <Heading fontSize={{ base: "3xl", md: "4xl" }}>
                  {intl.topics.title}
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Conteúdo especializado para transformar sua organização
                </Text>
              </VStack>

              <HStack gap={4}>
                <Button
                  as="a"
                  href="https://wa.me/5542988381261?text=Olá!%20Estou%20interessado(a)%20em%20contratar%20uma%20das%20palestras%20do%20Douglas%20Borges."
                  target="_blank"
                  colorPalette="blue"
                  size="lg"
                >
                  {intl.topics.cta.button}
                </Button>
                <Button
                  as="a"
                  href="/palestras-e-eventos"
                  variant="outline"
                  size="lg"
                >
                  {intl.topics.link}
                </Button>
              </HStack>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
              {intl.topics.items.map((topic, i) => (
                <Box
                  key={`topic-${i}`}
                  as="a"
                  href="/palestras-e-eventos"
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="lg"
                  _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
                  transition="all 0.3s"
                  h="full"
                  textDecoration="none"
                  _focus={{ outline: "none" }}
                >
                  <Box
                    h="200px"
                    bgImage={`url(${topic.image})`}
                    bgPosition="center"
                    bgSize="cover"
                    filter="grayscale(0.3)"
                    _hover={{ filter: "grayscale(0)" }}
                    transition="filter 0.3s"
                  />
                  <Box p={6}>
                    <VStack align="start" gap={3}>
                      <Heading fontSize="lg" noOfLines={2}>
                        {topic.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.600" noOfLines={3}>
                        {topic.description}
                      </Text>
                      <HStack gap={2}>
                        <Box
                          bg="blue.100"
                          color="blue.800"
                          px={2}
                          py={1}
                          borderRadius="md"
                          fontSize="xs"
                        >
                          {topic.duration}
                        </Box>
                        <Box
                          bg="gray.100"
                          color="gray.700"
                          px={2}
                          py={1}
                          borderRadius="md"
                          fontSize="xs"
                        >
                          {topic.format}
                        </Box>
                      </HStack>
                    </VStack>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Insights Section */}
      <Box bg="gray.50" py={{ base: 16, md: 20 }}>
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
                <Heading fontSize={{ base: "3xl", md: "4xl" }}>
                  Insights e Reflexões
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Conteúdo exclusivo sobre liderança e equilíbrio de vida
                </Text>
              </VStack>

              <Button
                as="a"
                href="/insights"
                variant="outline"
                size="lg"
                rightIcon={<ArrowRightIcon size={16} />}
              >
                Ver todos
              </Button>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              {INSIGHTS_HIGHLIGHTS.slice(0, 3).map((insight, index) => (
                <Box
                  key={`highlight-${index}`}
                  as="a"
                  href={`/${insight.slug}`}
                  bg="white"
                  p={8}
                  borderRadius="lg"
                  boxShadow="lg"
                  _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
                  transition="all 0.3s"
                  h="full"
                  textDecoration="none"
                  _focus={{ outline: "none" }}
                >
                  <VStack align="start" gap={6} h="full">
                    <VStack align="start" gap={3} flex={1}>
                      <Heading fontSize="xl" noOfLines={2}>
                        {insight.title}
                      </Heading>
                      <Text color="gray.600" noOfLines={4} lineHeight="1.6">
                        {insight.content[0]}
                      </Text>
                    </VStack>

                    <HStack
                      justify="space-between"
                      w="full"
                      pt={4}
                      borderTop="1px"
                      borderColor="gray.100"
                    >
                      <HStack gap={2}>
                        <ClockIcon size={16} color="#9CA3AF" />
                        <Text fontSize="sm" color="gray.500">
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
                            fontSize="xs"
                          >
                            #{tag}
                          </Box>
                        ))}
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
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
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="800"
                lineHeight="1.2"
              >
                {intl.home.cta.title}
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                opacity="0.9"
                lineHeight="1.6"
              >
                {intl.home.cta.subtitle}
              </Text>
            </VStack>

            <Button
              as="a"
              href="https://wa.me/5542988381261?text=Olá!%20Vim%20através%20do%20site%20do%20Douglas%20Borges."
              target="_blank"
              size="lg"
              bg="white"
              color="blue.600"
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="bold"
              _hover={{ bg: "gray.50", transform: "translateY(-2px)" }}
              transition="all 0.3s"
              rightIcon={<ArrowRightIcon size={20} />}
            >
              {intl.home.cta.button}
            </Button>
          </VStack>
        </Box>
      </Container>
    </>
  );
}
