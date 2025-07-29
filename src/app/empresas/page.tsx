import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  SimpleGrid,
  Badge,
  HStack,
  Accordion,
  Button,
  Stack,
  Alert,
  Flex,
} from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import { siteUrl } from "@/data/dictionaries";
import { Metadata } from "next";
import {
  BarChartIcon,
  Brain,
  CheckIcon,
  ClockIcon,
  FlagIcon,
  GraduationCapIcon,
  LineChartIcon,
  PaletteIcon,
  XIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Assessment Comportamental Empresarial | Decisões Estratégicas Sobre Pessoas | Douglas Borges",
  description:
    "Assessment comportamental científico para gestores que precisam tomar decisões importantes sobre pessoas. Análise psicológica baseada em metodologias reconhecidas mundialmente. Resultados em 5-7 dias.",
  openGraph: {
    title:
      "Assessment Comportamental Empresarial | Decisões Estratégicas Sobre Pessoas",
    description:
      "Assessment comportamental científico para gestores. Análise psicológica profissional em 5-7 dias. A partir de R$ 700.",
    type: "website",
    url: `${siteUrl}/empresas`,
    locale: "pt_BR",
    siteName: "Douglas Borges - Psicólogo",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Assessment Comportamental Empresarial | Decisões Estratégicas Sobre Pessoas",
    description:
      "Assessment comportamental científico para gestores. Análise psicológica profissional em 5-7 dias.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: `${siteUrl}/empresas`,
  },
  keywords: [
    "assessment comportamental",
    "avaliação psicológica empresarial",
    "gestão de pessoas",
    "psicólogo empresarial",
    "Big Five",
    "MBTI empresarial",
    "consultoria RH",
    "Douglas Borges",
  ],
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

  const whatIsIncluded = [
    "Relatório técnico completo com análise visual",
    "Aplicação de 5 metodologias científicas reconhecidas",
    "Comparativo com o perfil ideal da função",
    "Reunião de devolutiva exclusiva",
    "Recomendações práticas para tomada de decisão",
    "Total confidencialidade do processo",
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
      <Header />
      <Container
        as="section"
        maxW={{ base: "full", md: "full" }}
        mt={HEADER_NAVBAR_HEIGHT}
        px={{ base: 0, sm: 6, md: 8 }}
      >
        <VStack gap={{ base: 4, sm: 6, md: 10 }} w="full">
          {/* Hero Section - Black Premium Design */}
          <Box
            as="section"
            bg="gray.900"
            color="white"
            w="full"
            borderRadius={{ base: "none", md: "3xl" }}
            p={{ base: 6, sm: 8, md: 16 }}
            position="relative"
            overflow="hidden"
          >
            {/* Video Background */}
            <Box
              as="video"
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              w="full"
              h="full"
              objectFit="cover"
              autoPlay
              muted
              loop
              playsInline
              zIndex="0"
              opacity="0.4"
              filter="grayscale(100%)"
            >
              <source src="/assets/videos/bg.mp4" type="video/mp4" />
            </Box>

            {/* Dark Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="gray.900"
              opacity="0.7"
              zIndex="1"
            />

            {/* Gradient Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bgGradient="linear(135deg, gray.900 0%, transparent 50%, gray.900 100%)"
              opacity="0.8"
              zIndex="2"
            />

            <Stack
              flexDir={{ base: "column", md: "row" }}
              w="full"
              gap={{ base: 6, sm: 8, md: 16 }}
              align="center"
              justify="space-between"
              position="relative"
              zIndex="3"
            >
              <VStack
                gap={{ base: 6, sm: 7, md: 8 }}
                flex={1}
                align="stretch"
                maxW={{ base: "full", md: "800px" }}
              >
                <Badge
                  colorPalette="blue"
                  fontSize={{ base: "xs", sm: "sm" }}
                  px={3}
                  py={1}
                  w="fit-content"
                  bg="blue.500"
                  color="white"
                  fontWeight="600"
                  letterSpacing="wider"
                  textTransform="uppercase"
                >
                  Assessment Comportamental Empresarial
                </Badge>

                <Heading
                  as="h1"
                  fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "7xl" }}
                  color="white"
                  lineHeight="0.9"
                  fontWeight="800"
                >
                  Decisões Estratégicas{" "}
                  <Box as="span" color="blue.400" display="block">
                    Baseadas em Ciência
                  </Box>
                </Heading>

                <Text
                  fontSize={{ base: "md", sm: "lg", md: "xl" }}
                  color="gray.200"
                  fontWeight="400"
                  lineHeight="1.25"
                >
                  Assessment comportamental que oferece uma análise científica e
                  objetiva do perfil psicológico dos seus colaboradores,
                  fundamentando decisões importantes sobre pessoas.
                </Text>

                <HStack gap={{ base: 2, sm: 4 }} flexWrap="wrap" w="full">
                  <Button
                    as="a"
                    asChild
                    size={{ base: "lg", md: "xl" }}
                    variant="solid"
                    px={{ base: 6, sm: 8 }}
                    py={{ base: 3, sm: 4 }}
                    bg="blue.500"
                    fontSize={{ base: "md", sm: "lg", md: "xl" }}
                    fontWeight="700"
                    w={{ base: "full", md: "fit-content" }}
                    _hover={{
                      bg: "blue.400",
                      transform: "translateY(-2px)",
                      boxShadow: "2xl",
                    }}
                    transition="all 0.3s"
                  >
                    <a href="#investimento">Ver Planos e Investimento</a>
                  </Button>
                  <Button
                    as="a"
                    asChild
                    variant="outline"
                    w={{ base: "full", md: "fit-content" }}
                    px={{ base: 6, sm: 8 }}
                    py={{ base: 3, sm: 4 }}
                    size={{ base: "lg", md: "xl" }}
                    borderColor="transparent"
                    color="white"
                    fontSize={{ base: "sm", sm: "md", md: "lg" }}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20um%20exemplo%20de%20relatório%20do%20Assessment%20Comportamental."
                    >
                      Exemplo de Relatório
                    </a>
                  </Button>
                </HStack>

                <VStack align="flex-start" gap={{ base: 2, sm: 3 }} w="full">
                  {keyBenefits.map((benefit, index) => (
                    <Text
                      key={index}
                      fontSize={{ base: "sm", sm: "md" }}
                      color="gray.300"
                      fontWeight="500"
                    >
                      {benefit}
                    </Text>
                  ))}
                </VStack>
              </VStack>

              <Box
                w={{ base: "full", md: "450px" }}
                h={{ base: "250px", sm: "300px", md: "500px" }}
                borderRadius={{ base: "xl", md: "2xl" }}
                boxShadow="2xl"
                border="4px solid"
                borderColor="gray.700"
                style={{
                  backgroundImage: "url(/assets/escritório.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Stack>
          </Box>

          <Container as="section" maxW={{ base: "full", md: "8xl" }}>
            <Box
              as="section"
              w="full"
              borderRadius={{ base: "2xl", md: "3xl" }}
              overflow="hidden"
              borderWidth={2}
              borderColor="gray.200"
             
              p={0}
            >
              <SimpleGrid columns={{ base: 1, md: 2 }} w="full" gap={0}>
                {/* Lado A: Sem Assessment */}
                <VStack
                  align="stretch"
                  bgGradient="linear-gradient(190deg, transparent, {colors.red.100})"
                  p={{ base: 4, sm: 6, md: 12 }}
                  gap={{ base: 4, sm: 6, md: 8 }}
                  h="100%"
                  minH={{ base: "auto", md: "420px" }}
                  position="relative"
                >
                  <HStack>
                    <Box
                      as="span"
                      color="red.500"
                      fontSize={{ base: "xl", md: "2xl" }}
                      mr={2}
                      p={2}
                      rounded="full"
                      bg="red.200"
                    >
                      <XIcon />
                    </Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                      color="red.700"
                      fontWeight="extrabold"
                      textAlign="center"
                    >
                      Gestão Tradicional
                    </Heading>
                  </HStack>
                  <VStack align="flex-start" gap={{ base: 3, sm: 4, md: 5 }}>
                    {commonChallenges.map((challenge, index) => (
                      <HStack key={index} align="flex-start" gap={3}>
                        <Box
                          fontSize={{ base: "lg", md: "xl" }}
                          color="red.400"
                          pt={0.5}
                        >
                          <FlagIcon />
                        </Box>
                        <Text
                          fontSize={{ base: "sm", sm: "md", md: "lg" }}
                          color="red.700"
                          fontWeight="600"
                          lineHeight="1.5"
                        >
                          {challenge}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                  <Alert.Root
                    status="error"
                    borderRadius={{ base: "lg", md: "xl" }}
                    p={{ base: 3, sm: 4, md: 5 }}
                    bgGradient="linear-gradient(190deg, {colors.red.100}, {colors.red.200})"
                    alignItems="flex-start"
                  >
                    <Alert.Indicator color="red.400" />
                    <VStack align="flex-start" gap={1}>
                      <Text
                        fontWeight="bold"
                        fontSize={{ base: "sm", sm: "md", md: "lg" }}
                        color="red.800"
                      >
                        Prejuízo Financeiro:{" "}
                        <Box as="span" color="red.600" fontWeight="extrabold">
                          Até R$ 100.000 por contratação inadequada
                        </Box>
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm", md: "md" }}
                        color="red.700"
                        lineHeight="1.6"
                      >
                        Salários, benefícios, treinamentos e custos de reposição
                        pesam no orçamento.
                      </Text>
                    </VStack>
                  </Alert.Root>
                  <Box
                    position="absolute"
                    display={{ base: "none", md: "block" }}
                    top={{ base: 2, md: 4 }}
                    right={{ base: 2, md: 4 }}
                    bg="red.200"
                    color="red.800"
                    px={{ base: 2, md: 3 }}
                    py={1}
                    borderRadius="full"
                    fontWeight="bold"
                    fontSize={{ base: "xs", md: "sm" }}
                    letterSpacing="wider"
                    boxShadow="md"
                  >
                    Sem Assessment
                  </Box>
                </VStack>

                {/* Lado B: Com Assessment */}
                <VStack
                  align="stretch"
                   bgGradient="linear-gradient(190deg, transparent, {colors.green.100})"
                  p={{ base: 4, sm: 6, md: 12 }}
                  gap={{ base: 4, sm: 6, md: 8 }}
                  h="100%"
                  minH={{ base: "auto", md: "420px" }}
                  position="relative"
                >
                  <HStack>
                    <Box
                      as="span"
                      color="green.500"
                      fontSize={{ base: "xl", md: "2xl" }}
                      mr={2}
                      p={2}
                      rounded="full"
                      bg="green.200"
                    >
                      <CheckIcon size={24} />
                    </Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                      color="green.700"
                      fontWeight="extrabold"
                      textAlign="center"
                    >
                      Gestão com Assessment
                    </Heading>
                  </HStack>
                  <VStack align="flex-start" gap={{ base: 3, sm: 4, md: 5 }}>
                    {expectedResults.map((result, index) => (
                      <HStack key={index} align="flex-start" gap={3}>
                        <Box
                          fontSize={{ base: "lg", md: "xl" }}
                          color="green.400"
                          pt={0.5}
                        >
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 6.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414 0l-3.182-3.182a1 1 0 111.414-1.414l2.475 2.475 5.657-5.657a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                        <Text
                          fontSize={{ base: "sm", sm: "md", md: "lg" }}
                          color="green.700"
                          fontWeight="600"
                          lineHeight="1.5"
                        >
                          {result}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                  <Alert.Root
                    status="success"
                    borderRadius={{ base: "lg", md: "xl" }}
                    p={{ base: 3, sm: 4, md: 5 }}
                    bgGradient="linear-gradient(190deg, {colors.green.100}, {colors.green.300})"
                    boxShadow="md"
                    alignItems="flex-start"
                  >
                    <Alert.Indicator color="green.400" />
                    <VStack align="flex-start" gap={1}>
                      <Text
                        fontWeight="bold"
                        fontSize={{ base: "sm", sm: "md", md: "lg" }}
                        color="green.800"
                      >
                        Solução Inteligente:{" "}
                        <Box as="span" color="green.600" fontWeight="extrabold">
                          Decisões baseadas em dados, economia e equipes de alta
                          performance
                        </Box>
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm", md: "md" }}
                        color="green.700"
                        lineHeight="1.6"
                      >
                        Assessment comportamental transforma desafios em
                        resultados concretos.
                      </Text>
                    </VStack>
                  </Alert.Root>
                  <Box
                    position="absolute"
                    display={{ base: "none", md: "block" }}
                    top={{ base: 2, md: 4 }}
                    right={{ base: 2, md: 4 }}
                    bg="green.200"
                    color="green.800"
                    px={{ base: 2, md: 3 }}
                    py={1}
                    borderRadius="full"
                    fontWeight="bold"
                    fontSize={{ base: "xs", md: "sm" }}
                    letterSpacing="wider"
                    boxShadow="md"
                  >
                    Com Assessment
                  </Box>
                  <Box mt={{ base: 2, md: 4 }} textAlign="center" w="full">
                    <Text
                      fontSize={{ base: "md", sm: "lg", md: "xl" }}
                      color="green.700"
                      fontWeight="bold"
                      letterSpacing="0.5px"
                    >
                      O Assessment é a diferença entre o risco e o sucesso.
                    </Text>
                  </Box>
                </VStack>
              </SimpleGrid>
            </Box>

            {/* Planos de Investimento - Premium Typography */}
            <Box
              as="section"
              id="investimento"
              py={{ base: 8, sm: 12, md: 20 }}
              w="full"
            >
              <VStack gap={{ base: 8, sm: 10, md: 12 }}>
                <VStack gap={{ base: 4, sm: 6 }} textAlign="center">
                  <Badge
                    colorPalette="blue"
                    fontSize={{ base: "sm", md: "md" }}
                    py={2}
                    px={4}
                    fontWeight="600"
                    letterSpacing="wider"
                    textTransform="uppercase"
                  >
                    Planos de Investimento
                  </Badge>
                  <Heading
                    as="h2"
                    fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                    fontWeight="700"
                  >
                    Escolha o Plano Adequado às{" "}
                    <Box as="span" color="blue.600">
                      Suas Necessidades
                    </Box>
                  </Heading>
                  <Text
                    fontSize={{ base: "sm", sm: "md", md: "xl" }}
                    color="fg.muted"
                    maxW="2xl"
                    fontWeight="400"
                  >
                    Todos os planos incluem relatório completo, aplicação das
                    metodologias científicas e reunião de devolutiva.
                  </Text>
                </VStack>

                <SimpleGrid
                  columns={{ base: 1, sm: 2, md: 4, lg: 4 }}
                  gap={{ base: 4, sm: 6, md: 4, lg: 8 }}
                  w="full"
                >
                  {/* Plano 1 Colaborador */}
                  <VStack
                    p={{ base: 8, sm: 6, md: 4, lg: 8 }}
                    borderWidth={2}
                    borderColor="gray.100"
                    bg="bg.subtle"
                    borderRadius={{ base: "xl", md: "2xl" }}
                    position="relative"
                    _hover={{
                      transform: "translateY(-5px)",
                      boxShadow: "2xl",
                      borderColor: "blue.300",
                    }}
                    transition="all 0.3s"
                    gap={2}
                  >
                    <Heading
                      fontSize={{ base: "2xl", sm: "3xl" }}
                      fontWeight="700"
                    >
                      Individual
                    </Heading>
                    <Text
                      fontSize={{ base: "4xl", sm: "5xl" }}
                      fontWeight="900"
                      color="blue.600"
                    >
                      R$ 700
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "sm", sm: "md" }}
                    >
                      Ideal para avaliar <br /> um colaborador específico
                    </Text>

                    <VStack
                      align="flex-start"
                      w="full"
                      gap={2}
                      py={{ base: 4, sm: 6 }}
                      flex={1}
                    >
                      <Text
                        fontSize={{ base: "md", sm: "lg" }}
                        fontWeight="600"
                      >
                        ✓{" "}
                        <Box as="span" fontWeight="700">
                          1 colaborador
                        </Box>
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Relatório técnico completo
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ 5 metodologias científicas
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Reunião de devolutiva
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Entrega em 5-7 dias úteis
                      </Text>
                    </VStack>

                    <Button
                      as="a"
                      href="https://wa.me/5542988381261?text=Gostaria%20de%20contratar%20o%20assessment%20individual%20(1%20colaborador)%20por%20R$700"
                      target="_blank"
                      rel="noopener noreferrer"
                      w="full"
                      colorPalette="blue"
                      size={{ base: "md", sm: "lg" }}
                      borderRadius="xl"
                      fontWeight="700"
                      fontSize={{ base: "md", sm: "lg" }}
                      py={{ base: 4, sm: 6 }}
                      _hover={{ transform: "translateY(-2px)" }}
                      transition="all 0.3s"
                    >
                      Contratar Agora
                    </Button>
                  </VStack>

                  {/* Plano 3 Colaboradores */}
                  <VStack
                    p={{ base: 8, sm: 6, md: 4, lg: 8 }}
                    borderWidth={2}
                    borderColor="gray.100"
                    bg="bg.subtle"
                    borderRadius={{ base: "xl", md: "2xl" }}
                    position="relative"
                    _hover={{
                      transform: "translateY(-5px)",
                      boxShadow: "2xl",
                      borderColor: "blue.300",
                    }}
                    transition="all 0.3s"
                    gap={2}
                  >
                    <Heading
                      fontSize={{ base: "2xl", sm: "3xl" }}
                      fontWeight="700"
                    >
                      Equipe
                    </Heading>
                    <Text
                      fontSize={{ base: "4xl", sm: "5xl" }}
                      fontWeight="900"
                      color="blue.600"
                    >
                      R$ 1.750
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "sm", sm: "md" }}
                    >
                      Perfeito para pequenas equipes
                    </Text>

                    <VStack
                      align="flex-start"
                      w="full"
                      gap={2}
                      py={{ base: 4, sm: 6 }}
                      flex={1}
                    >
                      <Text
                        fontSize={{ base: "md", sm: "lg" }}
                        fontWeight="600"
                      >
                        ✓{" "}
                        <Box as="span" fontWeight="700">
                          3 colaboradores
                        </Box>
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Relatórios individuais
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Análise comparativa dos perfis
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Reunião de devolutiva detalhada
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Recomendações de gestão
                      </Text>
                    </VStack>

                    <Button
                      as="a"
                      href="https://wa.me/5542988381261?text=Gostaria%20de%20contratar%20o%20assessment%20para%20equipe%20(3%20colaboradores)%20por%20R$1.750"
                      target="_blank"
                      rel="noopener noreferrer"
                      w="full"
                      colorPalette="blue"
                      size={{ base: "md", sm: "lg" }}
                      borderRadius="xl"
                      fontWeight="700"
                      fontSize={{ base: "md", sm: "lg" }}
                      py={{ base: 4, sm: 6 }}
                      _hover={{ transform: "translateY(-2px)" }}
                      transition="all 0.3s"
                    >
                      Contratar Agora
                    </Button>
                  </VStack>

                  {/* Plano 5 Colaboradores - MAIS PROCURADO */}
                  <VStack
                    p={{ base: 8, sm: 6, md: 4, lg: 8 }}
                    borderWidth={2}
                    borderColor="green.100"
                    bg="green.50"
                    borderRadius={{ base: "xl", md: "2xl" }}
                    position="relative"
                    _hover={{
                      transform: "translateY(-5px)",
                      boxShadow: "2xl",
                      borderColor: "green.300",
                    }}
                    transition="all 0.3s"
                    gap={2}
                  >
                    <Badge
                      position="absolute"
                      top={{ base: "-12px", md: "-15px" }}
                      colorPalette="green"
                      fontSize={{ base: "xs", sm: "sm" }}
                      px={{ base: 4, sm: 6 }}
                      py={2}
                      borderRadius="full"
                      fontWeight="700"
                      letterSpacing="wider"
                      textTransform="uppercase"
                    >
                      Mais Procurado
                    </Badge>

                    <Heading
                      fontSize={{ base: "2xl", sm: "3xl" }}
                      fontWeight="700"
                      mt={2}
                    >
                      Departamento
                    </Heading>
                    <VStack gap={1}>
                      <Text
                        fontSize={{ base: "md", sm: "lg" }}
                        color="fg.muted"
                        textDecoration="line-through"
                        fontWeight="500"
                      >
                        De R$ 2.450
                      </Text>
                      <Text
                        fontSize={{ base: "4xl", sm: "5xl" }}
                        fontWeight="900"
                        color="green.600"
                      >
                        R$ 2.205
                      </Text>
                      <Badge
                        colorPalette="green"
                        fontSize={{ base: "xs", sm: "sm" }}
                        fontWeight="600"
                      >
                        Economia de R$ 245
                      </Badge>
                    </VStack>
                    <Text
                      textAlign="center"
                      fontWeight="500"
                      fontSize={{ base: "sm", sm: "md" }}
                    >
                      Solução completa para departamentos
                    </Text>

                    <VStack
                      align="flex-start"
                      w="full"
                      gap={2}
                      pb={{ base: 4, sm: 6 }}
                      flex={1}
                    >
                      <Text
                        fontSize={{ base: "md", sm: "lg" }}
                        fontWeight="600"
                      >
                        ✓{" "}
                        <Box as="span" fontWeight="700">
                          5 colaboradores
                        </Box>
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Relatórios individuais detalhados
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Mapa de competências da equipe
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Sugestões de desenvolvimento
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Reunião estendida de devolutiva
                      </Text>
                    </VStack>

                    <Button
                      as="a"
                      href="https://wa.me/5542988381261?text=Gostaria%20de%20contratar%20o%20assessment%20para%20departamento%20(5%20colaboradores)%20por%20R$2.205"
                      target="_blank"
                      rel="noopener noreferrer"
                      w="full"
                      colorPalette="green"
                      size={{ base: "md", sm: "lg" }}
                      borderRadius="xl"
                      fontWeight="700"
                      fontSize={{ base: "md", sm: "lg" }}
                      py={{ base: 4, sm: 6 }}
                      _hover={{ transform: "translateY(-2px)" }}
                      transition="all 0.3s"
                    >
                      Contratar Agora
                    </Button>
                  </VStack>

                  {/* Plano 10 Colaboradores - MELHOR CUSTO-BENEFÍCIO */}
                  <VStack
                    p={{ base: 8, sm: 6, md: 4, lg: 8 }}
                    borderWidth={2}
                    borderColor="blue.100"
                    bg="blue.50"
                    borderRadius={{ base: "xl", md: "2xl" }}
                    position="relative"
                    _hover={{
                      transform: "translateY(-5px)",
                      boxShadow: "2xl",
                      borderColor: "blue.300",
                    }}
                    transition="all 0.3s"
                    gap={2}
                  >
                    <Badge
                      position="absolute"
                      top={{ base: "-12px", md: "-15px" }}
                      colorPalette="blue"
                      fontSize={{ base: "xs", sm: "sm" }}
                      px={{ base: 4, sm: 6 }}
                      py={2}
                      borderRadius="full"
                      fontWeight="700"
                      letterSpacing="wider"
                      textTransform="uppercase"
                    >
                      Melhor Custo-Benefício
                    </Badge>

                    <Heading
                      fontSize={{ base: "2xl", sm: "3xl" }}
                      fontWeight="700"
                      mt={2}
                    >
                      Corporativo
                    </Heading>
                    <VStack gap={1} flex={1}>
                      <Text
                        fontSize={{ base: "md", sm: "lg" }}
                        color="fg.muted"
                        textDecoration="line-through"
                        fontWeight="500"
                      >
                        De R$ 4.200
                      </Text>
                      <Text
                        fontSize={{ base: "4xl", sm: "5xl" }}
                        fontWeight="900"
                        color="blue.600"
                      >
                        R$ 3.570
                      </Text>
                      <Badge
                        colorPalette="blue"
                        fontSize={{ base: "xs", sm: "sm" }}
                        fontWeight="600"
                      >
                        Economia de R$ 630
                      </Badge>
                    </VStack>
                    <Text
                      textAlign="center"
                      fontWeight="500"
                      fontSize={{ base: "sm", sm: "md" }}
                    >
                      Para organizações que buscam resultados abrangentes
                    </Text>

                    <VStack
                      align="flex-start"
                      w="full"
                      gap={2}
                      py={{ base: 4, sm: 6 }}
                      flex={1}
                    >
                      <Text
                        fontSize={{ base: "md", sm: "lg" }}
                        fontWeight="600"
                      >
                        ✓{" "}
                        <Box as="span" fontWeight="700">
                          10 colaboradores
                        </Box>
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Relatório executivo consolidado
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Análise organizacional completa
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Sessão de apresentação dos resultados
                      </Text>
                      <Text
                        fontSize={{ base: "xs", sm: "sm" }}
                        color="fg.muted"
                      >
                        ✓ Suporte pós-entrega por 30 dias
                      </Text>
                    </VStack>

                    <Button
                      as="a"
                      href="https://wa.me/5542988381261?text=Gostaria%20de%20contratar%20o%20assessment%20corporativo%20(10%20colaboradores)%20por%20R$3.570"
                      target="_blank"
                      rel="noopener noreferrer"
                      w="full"
                      colorPalette="blue"
                      size={{ base: "md", sm: "lg" }}
                      borderRadius="xl"
                      fontWeight="700"
                      fontSize={{ base: "md", sm: "lg" }}
                      py={{ base: 4, sm: 6 }}
                      _hover={{ transform: "translateY(-2px)" }}
                      transition="all 0.3s"
                    >
                      Contratar Agora
                    </Button>
                  </VStack>
                </SimpleGrid>

                <SimpleGrid
                  columns={{ base: 2, md: 3 }}
                  gap={{ base: 4, sm: 6, md: 8 }}
                  w="full"
                >
                  <VStack gap={0} align="stretch">
                    <Heading
                      fontSize={{ base: "sm", sm: "md" }}
                      fontWeight="700"
                    >
                      Prazo de Entrega
                    </Heading>
                    <Text
                      color="fg.muted"
                      fontSize={{ base: "xs", sm: "sm" }}
                      lineHeight="1.4"
                    >
                      5 a 7 dias úteis
                    </Text>
                  </VStack>
                  <VStack gap={0} align="stretch">
                    <Heading
                      fontSize={{ base: "sm", sm: "md" }}
                      fontWeight="700"
                    >
                      Forma de Pagamento
                    </Heading>
                    <Text
                      color="fg.muted"
                      fontSize={{ base: "xs", sm: "sm" }}
                      lineHeight="1.4"
                    >
                      PIX ou boleto bancário
                    </Text>
                  </VStack>
                  <VStack gap={0} align="stretch">
                    <Heading
                      fontSize={{ base: "sm", sm: "md" }}
                      fontWeight="700"
                    >
                      Confidencialidade
                    </Heading>
                    <Text
                      color="fg.muted"
                      fontSize={{ base: "xs", sm: "sm" }}
                      lineHeight="1.4"
                    >
                      Sigilo absoluto garantido
                    </Text>
                  </VStack>
                </SimpleGrid>
              </VStack>
            </Box>

            {/* O que está Incluído - Premium Typography */}
            <VStack
              as="section"
              w="full"
              align="flex-start"
              gap={{ base: 6, sm: 8, md: 10 }}
              py={{ base: 6, sm: 8, md: 16 }}
            >
              <VStack align="flex-start" gap={{ base: 3, sm: 4 }}>
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
                  fontWeight="800"
                  lineHeight="1.1"
                >
                  O que está incluído em{" "}
                  <Box as="span" color="blue.600">
                    todos os planos
                  </Box>
                </Heading>
                <Text
                  fontSize={{ base: "sm", sm: "md", md: "xl" }}
                  color="fg.muted"
                >
                  Cada assessment inclui todos estes elementos sem custo
                  adicional:
                </Text>
              </VStack>

              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 2 }}
                gap={{ base: 2, sm: 4, md: 2 }}
                w="full"
              >
                {whatIsIncluded.map((item, index) => (
                  <HStack
                    key={index}
                    p={{ base: 3, sm: 4, md: 4, lg: 6 }}
                    borderWidth={2}
                    borderColor="gray.200"
                    borderRadius={{ base: "lg", md: "2xl" }}
                  >
                    <CheckIcon size={24} />
                    <Text
                      fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                      fontWeight="600"
                      color="gray.800"
                    >
                      {item}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>

            {/* Metodologia Científica */}
            <HStack
              as="section"
              bg={{ base: "transparent", md: "bg.subtle" }}
              p={{ base: 0, sm: 6, md: 12 }}
              borderRadius={{ base: "xl", md: "2xl" }}
              w="full"
              flexDir={{ base: "column", md: "row" }}
              align={{ base: "stretch", md: "center" }}
              gap={{ base: 4, md: 6 }}
            >
              <VStack gap={{ base: 4, sm: 6 }} flex={1} align="stretch">
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
                >
                  Base Científica das Avaliações
                </Heading>
                <Text
                  fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                  color="fg.muted"
                >
                  Utilizamos{" "}
                  <strong>5 metodologias reconhecidas mundialmente</strong> para
                  garantir precisão e confiabilidade:
                </Text>
              </VStack>

              <SimpleGrid
                columns={{ base: 2, sm: 3, md: 3 }}
                gap={{ base: 1, sm: 4, md: 1 }}
                flex={1}
              >
                {[
                  { name: "Big Five", desc: "Padrão científico mundial" },
                  { name: "DISC", desc: "Comportamento profissional" },
                  { name: "Belbin", desc: "Papéis em equipe" },
                  { name: "Eneagrama", desc: "Motivações profundas" },
                ].map((method, index) => (
                  <VStack
                    key={index}
                    p={{ base: 4, sm: 4, md: 4, lg: 8 }}
                    bg={{ base: "bg.subtle", md: "white" }}
                    borderRadius={{ base: "lg", md: "md" }}
                    gap={0}
                    align="stretch"
                  >
                    <Text
                      fontSize={{ base: "md", sm: "lg" }}
                      fontWeight="bold"
                      color="blue.600"
                    >
                      {method.name}
                    </Text>
                    <Text fontSize={{ base: "xs", sm: "xs" }} color="fg.muted">
                      {method.desc}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </HStack>

            {/* Etapas do Processo */}
            <VStack
              as="section"
              w="full"
              align="flex-start"
              gap={{ base: 6, sm: 8 }}
              py={{ base: 4, sm: 6, md: 12 }}
            >
              <VStack align="flex-start" gap={{ base: 2, sm: 3 }}>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
                >
                  Etapas do Processo
                </Heading>
                <Text
                  fontSize={{ base: "sm", sm: "md", md: "lg" }}
                  color="fg.muted"
                >
                  Nosso processo estruturado garante resultados precisos e úteis
                  para sua tomada de decisão:
                </Text>
              </VStack>

              <VStack
                w="full"
                gap={0}
                borderWidth={2}
                borderRadius={{ base: "lg", md: "md" }}
                overflow="hidden"
                borderColor="gray.100"
              >
                {[
                  {
                    step: "1º Passo",
                    title: "Compreensão Estratégica do Papel do Comportamento",
                    description:
                      "O primeiro passo para uma gestão eficiente de pessoas é entender que o desempenho de um colaborador vai além da técnica. Nem sempre quem 'sabe fazer' está emocionalmente preparado para 'querer fazer' ou 'conseguir fazer' sob pressão, conflito ou mudanças.",
                  },
                  {
                    step: "2º Passo",
                    title: "Escolha do Plano",
                    description:
                      "Selecione o plano mais adequado às suas necessidades através do nosso site ou entre em contato conosco para orientação personalizada.",
                  },
                  {
                    step: "3º Passo",
                    title: "Engenharia de Assessment",
                    description:
                      "Agende a reunião com o psicólogo para definir o perfil comportamental esperado para a função, estabelecendo claramente as expectativas do gestor.",
                  },
                  {
                    step: "4º Passo",
                    title: "Envio dos Dados dos Colaboradores",
                    description:
                      "Forneça os dados necessários (nome completo, CPF, e-mail e WhatsApp) dos colaboradores que serão avaliados, garantindo a confidencialidade do processo.",
                  },
                  {
                    step: "5º Passo",
                    title: "Aplicação da Avaliação",
                    description:
                      "A avaliação individual será conduzida 100% online, de forma assistida e profissional, pela equipe do Psicólogo Douglas Borges.",
                  },
                  {
                    step: "6º Passo",
                    title: "Análise Detalhada",
                    description:
                      "Elaboração do estudo comparativo entre as expectativas da função (definidas pelo gestor) e os resultados reais do perfil de cada colaborador avaliado.",
                  },
                  {
                    step: "7º Passo",
                    title: "Devolutiva Estratégica",
                    description:
                      "Entrega do relatório técnico completo e reunião de devolutiva com o gestor, incluindo explicações claras, gráficos e recomendações práticas para decisões assertivas.",
                  },
                ].map((etapa, index) => (
                  <Box
                    key={index}
                    w="full"
                    p={{ base: 3, sm: 4, md: 4, lg: 6 }}
                    borderBottomWidth={1}
                    borderBottomColor={"gray.100"}
                    bg={index === 0 ? "blue.50" : "white"}
                    _last={{
                      borderBottomWidth: 0,
                    }}
                  >
                    <VStack align="flex-start" gap={{ base: 2, sm: 3, md: 4 }}>
                      <HStack flexWrap="wrap" gap={{ base: 2, md: 3 }}>
                        <Badge
                          colorPalette={index === 0 ? "blue" : "gray"}
                          fontSize={{ base: "xs", sm: "sm" }}
                          px={3}
                          py={1}
                          borderRadius="full"
                        >
                          {etapa.step}
                        </Badge>
                        <Heading
                          as="h3"
                          fontSize={{
                            base: "sm",
                            sm: "md",
                            md: "lg",
                            lg: "xl",
                          }}
                        >
                          {etapa.title}
                        </Heading>
                      </HStack>
                      <Text
                        color="gray.700"
                        lineHeight="1.6"
                        fontSize={{ base: "xs", sm: "sm", md: "md" }}
                      >
                        {etapa.description}
                      </Text>
                    </VStack>
                  </Box>
                ))}
              </VStack>

              {/* Cronograma Resumido */}
              <HStack gap={{ base: 3, sm: 4 }} w="full" flexWrap="wrap">
                <Heading flex={1} fontSize={{ base: "sm", sm: "md", md: "lg" }}>
                  Cronograma Estimado
                </Heading>
                <VStack gap={0} align="stretch">
                  <Text
                    fontWeight="600"
                    color="blue.600"
                    fontSize={{ base: "xs", sm: "sm" }}
                  >
                    Prazo Total
                  </Text>
                  <Text
                    fontSize={{ base: "sm", sm: "md", md: "lg" }}
                    fontWeight="bold"
                  >
                    5 a 7 dias úteis
                  </Text>
                </VStack>
                <VStack gap={0} align="stretch">
                  <Text
                    fontWeight="600"
                    color="blue.600"
                    fontSize={{ base: "xs", sm: "sm" }}
                  >
                    Processo
                  </Text>
                  <Text
                    fontSize={{ base: "sm", sm: "md", md: "lg" }}
                    fontWeight="bold"
                  >
                    100% Online
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            {/* Perguntas Frequentes */}
            <VStack
              as="section"
              w="full"
              align="flex-start"
              gap={{ base: 4, sm: 6 }}
              py={{ base: 4, sm: 6, md: 8 }}
            >
              <Heading as="h2" fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}>
                Perguntas Frequentes
              </Heading>

              <Box
                borderRadius={{ base: "lg", md: "md" }}
                overflow="hidden"
                borderWidth={2}
                borderColor="gray.100"
                w="full"
              >
                <Accordion.Root w="full">
                  {faqData.map((faq, index) => (
                    <Accordion.Item
                      key={index}
                      borderColor="gray.200"
                      border="none"
                      value={faq.question}
                    >
                      <h3>
                        <Accordion.ItemTrigger
                          py={{ base: 4, sm: 6 }}
                          px={{ base: 4, sm: 6 }}
                        >
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="600"
                            fontSize={{ base: "sm", sm: "md", md: "lg" }}
                          >
                            {faq.question}
                          </Box>
                          <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                      </h3>
                      <Accordion.ItemContent>
                        <Accordion.ItemBody
                          pb={{ base: 4, sm: 6 }}
                          px={{ base: 4, sm: 6 }}
                          fontSize={{ base: "xs", sm: "sm", md: "md" }}
                          color="gray.700"
                          lineHeight="1.6"
                        >
                          {faq.answer}
                        </Accordion.ItemBody>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </Box>
            </VStack>

            {/* Sobre o Profissional */}
            <Box
              as="section"
              bg="gray.900"
              color="white"
              p={{ base: 4, sm: 6, md: 12 }}
              borderRadius={{ base: "xl", md: "2xl" }}
              w="full"
              mb={{ base: 4, sm: 6, md: 12 }}
            >
              <VStack gap={{ base: 4, sm: 6 }}>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
                  color="white"
                  textAlign="center"
                >
                  Sobre o Profissional
                </Heading>

                <Text
                  textAlign="center"
                  color="gray.100"
                  mx="auto"
                  fontSize={{ base: "sm", sm: "md", md: "lg" }}
                  maxW={{ base: "full", md: "4xl" }}
                >
                  <strong>Douglas Borges</strong> é psicólogo empresarial
                  especializado em avaliação de personalidade e desempenho
                  humano. Fundador da i-Treebo, tem experiência consolidada em
                  assessments comportamentais para organizações de diversos
                  portes e segmentos.
                </Text>

                <SimpleGrid
                  columns={{ base: 1, sm: 3, md: 3 }}
                  gap={{ base: 4, sm: 6, md: 8 }}
                  w="full"
                >
                  <VStack gap={{ base: 2, sm: 3 }}>
                    <GraduationCapIcon width={24} height={24} />
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: "md", sm: "lg" }}
                      color="blue.300"
                    >
                      CRP 12/13884
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "xs", sm: "sm" }}
                      color="gray.100"
                    >
                      Psicólogo com registro ativo no Conselho Regional de
                      Psicologia
                    </Text>
                  </VStack>

                  <VStack gap={{ base: 2, sm: 3 }}>
                    <BarChartIcon width={24} height={24} />
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: "md", sm: "lg" }}
                      color="blue.300"
                    >
                      1000+ Avaliações
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "xs", sm: "sm" }}
                      color="gray.100"
                    >
                      Mais de mil pessoas avaliadas em empresas de diversos
                      segmentos
                    </Text>
                  </VStack>

                  <VStack gap={{ base: 2, sm: 3 }}>
                    <ClockIcon width={24} height={24} />
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: "md", sm: "lg" }}
                      color="blue.300"
                    >
                      10 Anos de Experiência
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "xs", sm: "sm" }}
                      color="gray.100"
                    >
                      Uma década dedicada à psicologia empresarial e assessment
                      comportamental
                    </Text>
                  </VStack>
                </SimpleGrid>
              </VStack>
            </Box>

            {/* Sobre a i-Treebo */}
            <Box
              as="section"
              bg="white"
              p={{ base: 4, sm: 6, md: 12 }}
              borderRadius={{ base: "xl", md: "2xl" }}
              w="full"
              borderWidth={1}
              borderColor="gray.200"
              mb={{ base: 4, sm: 6, md: 12 }}
            >
              <VStack gap={{ base: 4, sm: 6 }}>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
                  textAlign="center"
                >
                  Sobre a i‑Treebo
                </Heading>

                <Text
                  fontSize={{ base: "xs", sm: "sm" }}
                  color="blue.600"
                  fontWeight="600"
                  textAlign="center"
                  letterSpacing="wider"
                >
                  TREE BUSINESS OPTIMIZATION
                </Text>

                <Text
                  fontSize={{ base: "sm", sm: "md", md: "lg" }}
                  color="gray.700"
                  textAlign="center"
                  maxW="4xl"
                  lineHeight="1.6"
                >
                  A i‑Treebo é uma consultoria fundada em{" "}
                  <strong>Curitiba/PR</strong>, especializada em otimização de
                  negócios com foco em desempenho humano, branding estratégico e
                  processos comerciais.
                </Text>

                <SimpleGrid
                  columns={{ base: 1, sm: 3, md: 3 }}
                  gap={{ base: 4, sm: 6, md: 8 }}
                  w="full"
                  maxW="700px"
                >
                  <VStack gap={{ base: 2, sm: 3 }}>
                    <Box p={3} bg="blue.50" borderRadius="full">
                      <Brain width={24} height={24} />
                    </Box>
                    <Text
                      fontWeight="bold"
                      textAlign="center"
                      fontSize={{ base: "sm", sm: "md" }}
                    >
                      Douglas Borges
                    </Text>
                    <Text
                      fontSize={{ base: "xs", sm: "sm" }}
                      color="fg.muted"
                      textAlign="center"
                    >
                      Psicólogo Empresarial
                    </Text>
                  </VStack>

                  <VStack gap={{ base: 2, sm: 3 }}>
                    <Box p={3} bg="green.50" borderRadius="full">
                      <LineChartIcon width={24} height={24} />
                    </Box>
                    <Text
                      fontWeight="bold"
                      textAlign="center"
                      fontSize={{ base: "sm", sm: "md" }}
                    >
                      Thyago Borges
                    </Text>
                    <Text
                      fontSize={{ base: "xs", sm: "sm" }}
                      color="fg.muted"
                      textAlign="center"
                    >
                      Alta Performance Comercial
                    </Text>
                  </VStack>

                  <VStack gap={{ base: 2, sm: 3 }}>
                    <Box p={3} bg="purple.50" borderRadius="full">
                      <PaletteIcon width={24} height={24} />
                    </Box>
                    <Text
                      fontWeight="bold"
                      textAlign="center"
                      fontSize={{ base: "sm", sm: "md" }}
                    >
                      Wagner Borges
                    </Text>
                    <Text
                      fontSize={{ base: "xs", sm: "sm" }}
                      color="fg.muted"
                      textAlign="center"
                    >
                      Branding e Marketing
                    </Text>
                  </VStack>
                </SimpleGrid>

                <Text
                  fontSize={{ base: "xs", sm: "sm", md: "md" }}
                  color="gray.700"
                  textAlign="center"
                  maxW="3xl"
                  lineHeight="1.4"
                >
                  Comandada por <strong>três irmãos</strong>, a i‑Treebo une
                  ciência do comportamento, identidade organizacional e geração
                  de resultados práticos para empresas de diversos segmentos.
                </Text>

                <Button
                  as="a"
                  href="https://itreebo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  colorPalette="blue"
                  size={{ base: "md", sm: "lg" }}
                  fontSize={{ base: "sm", sm: "md" }}
                  py={{ base: 4, sm: 6 }}
                  px={{ base: 6, sm: 8 }}
                  borderRadius="xl"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                  transition="all 0.3s"
                >
                  Conheça a i‑Treebo →
                </Button>
              </VStack>
            </Box>

            {/* Call to Action Final */}
            <Box
              as="section"
              bg="red.50"
              p={{ base: 6, sm: 8, md: 16 }}
              borderRadius={{ base: "xl", md: "2xl" }}
              w="full"
              borderWidth={2}
              borderColor="red.200"
            >
              <VStack gap={{ base: 4, sm: 6 }} textAlign="center">
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
                  color="red.900"
                >
                  Cada dia sem decidir é dinheiro perdido
                </Heading>

                <Text
                  fontSize={{ base: "md", sm: "lg", md: "xl" }}
                  color="gray.700"
                  maxW="700px"
                >
                  Decisões sobre pessoas baseadas apenas em intuição podem
                  resultar em custos elevados. O assessment comportamental
                  oferece{" "}
                  <strong>dados objetivos para decisões mais seguras</strong>.
                </Text>

                <Flex gap={{ base: 3, sm: 4 }} flexWrap="wrap" justify="center">
                  <Button
                    as="a"
                    href="#investimento"
                    size={{ base: "lg", md: "xl" }}
                    colorPalette="blue"
                    fontSize={{ base: "md", sm: "lg", md: "xl" }}
                    py={{ base: 4, md: 8, xl: 8 }}
                    px={{ base: 4, md: 8, xl: 12 }}
                    borderRadius="xl"
                    _hover={{ transform: "translateY(-2px)" }}
                    transition="all 0.3s"
                  >
                    Ver Planos de Investimento
                  </Button>
                  <Button
                    as="a"
                    href="https://wa.me/5542988381261?text=Gostaria%20de%20mais%20informações%20sobre%20o%20Assessment%20Comportamental%20para%20minha%20empresa"
                    target="_blank"
                    rel="noopener noreferrer"
                    size={{ base: "lg", md: "xl" }}
                    variant="outline"
                    colorPalette="blue"
                    fontSize={{ base: "sm", sm: "md", md: "lg" }}
                    py={{ base: 4, md: 8 }}
                    px={{ base: 4, md: 8 }}
                    borderRadius="xl"
                  >
                    Falar com Douglas Borges
                  </Button>
                </Flex>

                <Text fontSize={{ base: "xs", sm: "sm" }} color="fg.muted">
                  <strong>Validade da proposta:</strong> 10 dias úteis |
                  <strong> Pagamento:</strong> PIX ou boleto à vista |
                  <strong> Sigilo:</strong> Confidencialidade total
                </Text>
              </VStack>
            </Box>
          </Container>
        </VStack>
      </Container>
    </main>
  );
}
