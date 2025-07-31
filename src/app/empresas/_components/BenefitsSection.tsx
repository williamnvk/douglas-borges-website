import {
  VStack,
  Box,
  Badge,
  Heading,
  Text,
  SimpleGrid,
  Container,
  HStack,
  Stack,
  Flex,
} from "@chakra-ui/react";
import Icon from "@/components/shared/DynamicIcon";

export function BenefitsSection() {
  const tangibleBenefits = [
    {
      icon: "trending-up",
      title: "Aumento de Produtividade",
      metric: "+35%",
      description:
        "Equipes saudáveis mentalmente produzem mais e com maior qualidade",
    },
    {
      icon: "user-minus",
      title: "Redução de Afastamentos",
      metric: "-60%",
      description:
        "Menos licenças médicas por questões relacionadas ao estresse",
    },
    {
      icon: "user-check",
      title: "Retenção de Talentos",
      metric: "+80%",
      description: "Colaboradores permanecem mais tempo em ambientes saudáveis",
    },
    {
      icon: "dollar-sign",
      title: "Redução de Custos",
      metric: "-40%",
      description:
        "Economia com reposições, treinamentos e processos seletivos",
    },
  ];

  const intangibleBenefits = [
    {
      icon: "heart",
      title: "Melhoria do Clima Organizacional",
      description:
        "Ambiente de trabalho mais positivo, colaborativo e motivador",
    },
    {
      icon: "award",
      title: "Fortalecimento da Liderança",
      description:
        "Líderes mais equilibrados e conscientes tomam melhores decisões",
    },
    {
      icon: "shield",
      title: "Marca Empregadora Fortalecida",
      description: "Empresa reconhecida como um bom lugar para trabalhar",
    },
    {
      icon: "target",
      title: "Maior Engajamento",
      description: "Colaboradores mais motivados e alinhados com os objetivos",
    },
    {
      icon: "lightbulb",
      title: "Cultura de Inovação",
      description:
        "Mentes saudáveis são mais criativas e propõem soluções inovadoras",
    },
    {
      icon: "handshake",
      title: "Melhor Relacionamento Interpessoal",
      description:
        "Comunicação mais eficaz e redução significativa de conflitos",
    },
  ];

  return (
    <Box as="section" py={{ base: 16, md: 24 }}>
      <Container maxW="8xl">
        <VStack gap={16}>
          {/* Header da seção */}
          <VStack gap={6} textAlign="center" maxW="800px" mx="auto">
            <Badge
              bg="green.50"
              color="green.600"
              px={4}
              py={2}
              borderRadius="full"
              textStyle="sm"
              fontWeight="semibold"
              border="1px solid"
              borderColor="green.200"
            >
              Benefícios Comprovados
            </Badge>
            <Heading
              textStyle={{ base: "4xl", md: "5xl" }}
              color="gray.900"
              fontFamily="heading"
              fontWeight="bold"
              textAlign="center"
            >
              O que sua empresa ganha investindo em saúde mental
            </Heading>
            <Text
              textStyle={{ base: "sm", md: "md", lg: "lg" }}
              color="fg.muted"
              textAlign="center"
              maxW="700px"
            >
              Investir no bem-estar mental não é apenas um ato de cuidado, é uma
              estratégia inteligente que gera resultados tangíveis e transforma
              positivamente toda a organização.
            </Text>
          </VStack>

          {/* Benefícios tangíveis com métricas */}
          <Box w="full">
            <VStack gap={8} mb={12}>
              <Heading
                textStyle={{ base: "2xl", md: "3xl" }}
                color="gray.900"
                fontFamily="heading"
                fontWeight="bold"
                textAlign="center"
              >
                Resultados Mensuráveis
              </Heading>

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 4 }}
                gap={{ base: 2, md: 6 }}
                w="full"
              >
                {tangibleBenefits.map((benefit, index) => (
                  <Box
                    key={`tangible-${index}`}
                    bg="linear-gradient(35deg, {colors.green.50},transparent, transparent,  transparent)"
                    p={{ base: 4, md: 8 }}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="green.200"
                    textAlign="center"
                  >
                    <VStack gap={{ base: 2, md: 4 }}>
                      <Box
                        w={16}
                        h={16}
                        borderRadius="full"
                        bg="green.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        mx="auto"
                      >
                        <Icon name={benefit.icon as never} size={32} />
                      </Box>

                      <Text
                        textStyle="3xl"
                        fontWeight="black"
                        color="green.600"
                      >
                        {benefit.metric}
                      </Text>

                      <VStack gap={2}>
                        <Heading
                          textStyle="lg"
                          color="gray.900"
                          fontFamily="heading"
                          fontWeight="semibold"
                          textAlign="center"
                        >
                          {benefit.title}
                        </Heading>
                        <Text
                          textStyle="sm"
                          color="gray.600"
                          textAlign="center"
                          lineHeight="1.5"
                        >
                          {benefit.description}
                        </Text>
                      </VStack>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Benefícios intangíveis */}
          <Box w="full">
            <VStack gap={8}>
              <Heading
                textStyle={{ base: "2xl", md: "3xl" }}
                color="gray.900"
                fontFamily="heading"
                fontWeight="bold"
                textAlign="center"
              >
                Transformações Qualitativas
              </Heading>

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                gap={{ base: 2, md: 6 }}
                w="full"
              >
                {intangibleBenefits.map((benefit, index) => (
                  <Box
                    key={`intangible-${index}`}
                    bg="white"
                    p={6}
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="border.muted"
                  >
                    <HStack align="start" gap={4}>
                      <Box
                        w={12}
                        h={12}
                        borderRadius="lg"
                        bg="blue.100"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="blue.600"
                        flexShrink={0}
                      >
                        <Icon name={benefit.icon as never} size={24} />
                      </Box>

                      <VStack align="start" gap={2} flex={1}>
                        <Heading
                          textStyle="md"
                          color="gray.900"
                          fontFamily="heading"
                          fontWeight="semibold"
                          lineHeight="1.3"
                        >
                          {benefit.title}
                        </Heading>
                        <Text textStyle="sm" color="fg.muted" lineHeight="1.5">
                          {benefit.description}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Seção de ROI */}
          <Box
            w="full"
            bg="blue.900"
            color="white"
            p={{ base: 8, md: 12 }}
            borderRadius="2xl"
            position="relative"
            overflow="hidden"
          >
            <VStack gap={8} textAlign="center" position="relative" zIndex={1}>
              <VStack gap={4}>
                <Badge
                  bg="yellow.400"
                  color="gray.900"
                  px={4}
                  py={2}
                  borderRadius="full"
                  textStyle="sm"
                  fontWeight="bold"
                >
                  ROI Comprovado
                </Badge>
                <Heading
                  textStyle={{ base: "2xl", md: "3xl" }}
                  fontFamily="heading"
                  fontWeight="bold"
                >
                  Para cada R$ 1,00 investido em saúde mental
                </Heading>
              </VStack>

              <Stack
                direction={{ base: "column", md: "row" }}
                gap={8}
                align="center"
              >
                <Box textAlign="center">
                  <Text textStyle="5xl" fontWeight="black" color="yellow.400">
                    R$ 3,68
                  </Text>
                  <Text textStyle="lg" opacity="0.9">
                    de retorno para a empresa
                  </Text>
                  <Text textStyle="sm" opacity="0.7" mt={1}>
                    Fonte: Harvard Business Review
                  </Text>
                </Box>

                <Box
                  w="2px"
                  h="60px"
                  bg="whiteAlpha.300"
                  display={{ base: "none", md: "block" }}
                />
                <Box
                  w="full"
                  h="2px"
                  bg="whiteAlpha.300"
                  display={{ base: "block", md: "none" }}
                />

                <VStack
                  gap={4}
                  textAlign={{ base: "center", md: "left" }}
                  p={{ base: 4, md: 0 }}
                >
                  <Flex flexWrap="wrap" gap={{ base: 2, md: 4 }} w="full">
                    <Text
                      textStyle={{ base: "sm", md: "md", lg: "lg" }}
                      fontWeight="semibold"
                      textAlign={{ base: "center", md: "left" }}
                    >
                      Em cargos de gestão o retorno pode chegar a:
                    </Text>
                    <Text
                      textAlign={{ base: "center", md: "left" }}
                      w="full"
                      textStyle="3xl"
                      fontWeight="bold"
                      color="yellow.400"
                    >
                      R$ 6,30
                    </Text>
                  </Flex>

                  <Flex
                    flexWrap="wrap"
                    align={{ base: "center", md: "start" }}
                    gap={{ base: 2, md: 4 }}
                  >
                    <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} opacity="0.9">✓ Estrategicamente inteligente</Text>
                    <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} opacity="0.9">✓ Financeiramente rentável</Text>
                    <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} opacity="0.9">✓ Socialmente responsável</Text>
                  </Flex>
                </VStack>
              </Stack>
            </VStack>

            {/* Elementos decorativos */}
            <Box
              position="absolute"
              top="-40px"
              right="-40px"
              w="120px"
              h="120px"
              borderRadius="full"
              bg="whiteAlpha.100"
              filter="blur(40px)"
            />
            <Box
              position="absolute"
              bottom="-20px"
              left="-20px"
              w="80px"
              h="80px"
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
