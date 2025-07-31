import {
  VStack,
  Box,
  Badge,
  Heading,
  Text,
  SimpleGrid,
  Container,
  HStack,
} from "@chakra-ui/react";
import Icon from "@/components/shared/DynamicIcon";

export function ServicesSection() {
  const services = [
    {
      icon: "user-check",
      title: "Atendimento Psicológico Individual",
      subtitle: "Para Líderes e Executivos",
      description:
        "Sessões individuais focadas na saúde mental de líderes. Trabalho com questões como ansiedade, burnout, tomada de decisões e equilíbrio vida-trabalho.",
      highlights: [
        "Confidencial e personalizado",
        "Foco em liderança saudável",
        "Online ou presencial",
      ],
    },
    {
      icon: "presentation",
      title: "Palestras e Workshops",
      subtitle: "Para Equipes e Organizações",
      description:
        "Conteúdo especializado sobre temas como inteligência emocional, gestão do estresse, prevenção ao burnout e comunicação eficaz.",
      highlights: [
        "Conteúdo prático",
        "Metodologia interativa",
        "Resultados mensuráveis",
      ],
    },
    {
      icon: "users",
      title: "Psicoterapia Breve para Equipes",
      subtitle: "Dinâmicas de Grupo",
      description:
        "Sessões em grupo para melhorar relacionamentos interpessoais, resolver conflitos e fortalecer a coesão da equipe.",
      highlights: [
        "Melhoria no clima",
        "Redução de conflitos",
        "Maior colaboração",
      ],
    },
    {
      icon: "shield-check",
      title: "Programas de Prevenção",
      subtitle: "Ao Adoecimento Mental",
      description:
        "Implementação de estratégias preventivas para identificar precocemente sinais de esgotamento e criar ambientes mais saudáveis.",
      highlights: [
        "Identificação precoce",
        "Estratégias preventivas",
        "Ambiente saudável",
      ],
    },
    {
      icon: "trending-up",
      title: "Consultoria em Clima Organizacional",
      subtitle: "Diagnóstico e Intervenção",
      description:
        "Análise do ambiente de trabalho, identificação de fatores de risco psicossociais e desenvolvimento de planos de melhoria.",
      highlights: [
        "Diagnóstico completo",
        "Plano de ação",
        "Acompanhamento contínuo",
      ],
    },
    {
      icon: "brain",
      title: "Desenvolvimento de Inteligência Emocional",
      subtitle: "Para Lideranças",
      description:
        "Capacitação de líderes para desenvolver competências emocionais essenciais para uma gestão mais humana e eficaz.",
      highlights: [
        "Liderança consciente",
        "Gestão humanizada",
        "Resultados sustentáveis",
      ],
    },
  ];

  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="8xl">
        <VStack gap={16}>
          {/* Header da seção */}
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
              Soluções completas para o bem-estar da sua empresa
            </Heading>
            <Text
              textStyle="lg"
              color="fg.muted"
              textAlign="center"
              maxW="700px"
            >
              Oferecemos um conjunto abrangente de serviços psicológicos
              especialmente desenvolvidos para o ambiente corporativo,
              priorizando tanto líderes quanto equipes.
            </Text>
          </VStack>

          {/* Grid de serviços */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={{ base: 2, md: 2, lg: 4, xl: 8 }}
            w="full"
          >
            {services.map((service, index) => (
              <Box
                key={`service-${index}`}
                bg="white"
                p={{ base: 4, md: 4, lg: 6, xl: 8 }}
                borderRadius="xl"
                border="1px solid"
                borderColor="border.muted"
                h="full"
              >
                <VStack align="start" gap={{ base: 4, md: 6 }} h="full">
                  {/* Ícone */}
                  <Box
                    w={16}
                    h={16}
                    borderRadius="xl"
                    bg="blue.500"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                  >
                    <Icon name={service.icon as never} size={32} />
                  </Box>

                  {/* Conteúdo */}
                  <VStack align="start" gap={3} flex={1}>
                    <VStack align="start" gap={1}>
                      <Heading
                        textStyle="xl"
                        color="gray.900"
                        fontFamily="heading"
                        fontWeight="semibold"
                        lineHeight="1.3"
                      >
                        {service.title}
                      </Heading>
                      <Text
                        textStyle="sm"
                        color="blue.600"
                        fontWeight="semibold"
                      >
                        {service.subtitle}
                      </Text>
                    </VStack>

                    <Text color="fg.muted" textStyle="md" lineHeight="1.6">
                      {service.description}
                    </Text>

                    {/* Destaques */}
                    <VStack align="start" gap={2} w="full" pt={2}>
                      {service.highlights.map((highlight, idx) => (
                        <HStack key={`highlight-${idx}`} align="start" gap={2}>
                          <Box
                            w={1.5}
                            h={1.5}
                            borderRadius="full"
                            bg="blue.500"
                            mt={2}
                            flexShrink={0}
                          />
                          <Text
                            textStyle="sm"
                            color="gray.600"
                            fontWeight="medium"
                          >
                            {highlight}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Seção de destaque especial */}
          <Box
            w="full"
            bg="blue.600"
            color="white"
            p={{ base: 8, md: 12 }}
            borderRadius="2xl"
            position="relative"
            overflow="hidden"
          >
            <VStack
              gap={6}
              textAlign="center"
              maxW="600px"
              mx="auto"
              position="relative"
              zIndex={1}
            >
              <Box
                w={20}
                h={20}
                borderRadius="full"
                bg="whiteAlpha.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx="auto"
              >
                <Icon name="heart-handshake" size={40} />
              </Box>

              <VStack gap={4}>
                <Heading
                  textStyle={{ base: "xl", md: "3xl" }}
                  fontFamily="heading"
                  fontWeight="bold"
                >
                  Abordagem Integrada e Humana
                </Heading>
                <Text
                  textStyle={{ base: "xs", md: "md", lg: "lg" }}
                  opacity="0.9"
                  lineHeight="1.6"
                >
                  Todos os nossos serviços são fundamentados em uma abordagem
                  cristã, que valoriza o ser humano em sua integralidade.
                  Acreditamos que empresas saudáveis nascem de lideranças
                  equilibradas e propositivas.
                </Text>
              </VStack>

              <HStack gap={8} flexWrap="wrap" justify="center">
                <VStack gap={1}>
                  <Text textStyle="xl" fontWeight="bold">
                    +1000
                  </Text>
                  <Text textStyle="sm" opacity="0.8">
                    Pessoas impactadas
                  </Text>
                </VStack>
                <VStack gap={1}>
                  <Text textStyle="xl" fontWeight="bold">
                    +90
                  </Text>
                  <Text textStyle="sm" opacity="0.8">
                    Empresas transformadas
                  </Text>
                </VStack>
                <VStack gap={1}>
                  <Text textStyle="xl" fontWeight="bold">
                    10 anos
                  </Text>
                  <Text textStyle="sm" opacity="0.8">
                    De experiência
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            {/* Elementos decorativos */}
            <Box
              position="absolute"
              top="-50px"
              right="-50px"
              w="150px"
              h="150px"
              borderRadius="full"
              bg="whiteAlpha.100"
              filter="blur(40px)"
            />
            <Box
              position="absolute"
              bottom="-30px"
              left="-30px"
              w="100px"
              h="100px"
              borderRadius="full"
              bg="whiteAlpha.100"
              filter="blur(30px)"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
