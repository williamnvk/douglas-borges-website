import {
  VStack,
  Box,
  Badge,
  Heading,
  Text,
  SimpleGrid,
  Container,
  Stack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Icon from "@/components/shared/DynamicIcon";
import { HeartCrackIcon } from "lucide-react";

// Problem type
interface Problem {
  icon: string;
  title: string;
  description: string;
  stat: string;
  numericValue: number;
  gradient: string;
  bgGradient: string;
  iconBg: string;
  priority: string;
}

// Individual problem card component
function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <Box
      p={{ base: 4, md: 6, lg: 8 }}
      borderRadius="2xl"
      bgGradient={problem.bgGradient}
      borderWidth="2px"
      position="relative"
      overflow="hidden"
    >
      <VStack align="start" gap={5} h="full" position="relative" zIndex={1}>
        <HStack justify="space-between" w="full" align="start">
          <Box
            w={14}
            h={14}
            borderRadius="xl"
            bg={problem.iconBg}
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            boxShadow="lg"
          >
            <Icon name={problem.icon as never} size={28} />
          </Box>

          <VStack align="end" gap={0}>
            <Text
              textStyle="3xl"
              fontWeight="black"
              bgGradient={problem.gradient}
              bgClip="text"
              lineHeight="1"
            >
              {problem.stat}
            </Text>
            {problem.priority === "critical" && (
              <Badge
                bg="red.700"
                color="white"
                textStyle="xs"
                px={2}
                py={1}
                fontWeight="bold"
              >
                CRÍTICO
              </Badge>
            )}
          </VStack>
        </HStack>

        <VStack align="start" gap={3} flex={1}>
          <Heading
            textStyle={{ base: "md", lg: "lg" }}
            color="gray.900"
            fontFamily="heading"
            fontWeight="bold"
            lineHeight="1.3"
          >
            {problem.title}
          </Heading>
          <Text
            color="gray.600"
            textStyle="sm"
            lineHeight="1.5"
            fontWeight="medium"
          >
            {problem.description}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}

export function ProblemsSection() {
  const problems = [
    {
      icon: "triangle-alert",
      title: "80% dos colaboradores se sentem esgotados",
      description:
        "Burnout é hoje a principal causa de afastamentos no trabalho",
      stat: "80%",
      numericValue: 80,
      gradient: "linear-gradient(35deg, {colors.red.400}, {colors.red.600})",
      bgGradient: "linear-gradient(35deg, {colors.red.50}, transparent)",
      iconBg: "red.700",
      priority: "critical",
    },
    {
      icon: "trending-down",
      title: "Produtividade em queda",
      description: "Equipes exaustas produzem menos e com menor qualidade",
      stat: "↓35%",
      numericValue: 35,
      gradient:
        "linear-gradient(35deg, {colors.orange.400}, {colors.orange.600})",
      bgGradient: "linear-gradient(35deg, {colors.orange.50}, transparent)",
      iconBg: "orange.500",
      priority: "high",
    },
    {
      icon: "user",
      title: "Rotatividade elevada",
      description: "Clima pesado gera demissões e aumenta custos de reposição",
      stat: "+150%",
      numericValue: 150,
      gradient:
        "linear-gradient(35deg, {colors.yellow.500}, {colors.orange.500})",
      bgGradient: "linear-gradient(35deg, {colors.yellow.50}, transparent)",
      iconBg: "orange.500",
      priority: "high",
    },
    {
      icon: "clock",
      title: "Absenteísmo crescente",
      description: "Funcionários faltam mais por questões de saúde mental",
      stat: "+60%",
      numericValue: 60,
      gradient: "linear-gradient(35deg, {colors.red.700}, {colors.red.500} )",
      bgGradient: "linear-gradient(35deg, {colors.red.50}, transparent)",
      iconBg: "red.700",
      priority: "medium",
    },
  ];

  const leadershipPains = [
    "Sente-se sobrecarregado e sem tempo para si mesmo",
    "Dificuldade em desconectar do trabalho",
    "Pressão constante por resultados",
    "Insônia e ansiedade relacionadas ao negócio",
    "Relacionamentos pessoais prejudicados",
    "Medo de delegar e perder controle",
  ];

  return (
    <Box
      as="section"
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="8xl" position="relative" zIndex={1}>
        <VStack gap={16}>
          {/* Header da seção */}
          <VStack gap={6} textAlign="center" maxW="900px" mx="auto">
            <Badge
              bg="red.50"
              color="red.700"
              px={4}
              py={2}
              borderRadius="full"
              textStyle="sm"
              fontWeight="semibold"
              border="1px solid"
              borderColor="red.200"
            >
              Alerta crítico
            </Badge>

            <Heading
              textStyle={{ base: "4xl", md: "6xl" }}
              color="gray.900"
              fontFamily="heading"
              fontWeight="black"
              textAlign="center"
              lineHeight="1.1"
            >
              O custo do esgotamento{" "}
              <Text as="span" color="red.700">
                está devastando
              </Text>{" "}
              sua empresa
            </Heading>

            <Text
              textStyle={{ base: "lg", md: "xl" }}
              color="gray.600"
              textAlign="center"
              maxW="700px"
              lineHeight="1.6"
              fontWeight="medium"
            >
              Dados alarmantes revelam que a{" "}
              <Text as="span" color="red.700" fontWeight="bold">
                crise de saúde mental
              </Text>{" "}
              no ambiente corporativo alcançou proporções{" "}
              <Text as="span" color="red.700" fontWeight="bold">
                devastadoras
              </Text>
              . E isso está custando muito mais do que você imagina.
            </Text>
          </VStack>

          {/* Cards de problemas/estatísticas */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            gap={{ base: 2, md: 8 }}
            w="full"
          >
            {problems.map((problem, index) => (
              <ProblemCard key={`problem-${index}`} problem={problem} />
            ))}
          </SimpleGrid>

          {/* Seção específica para líderes */}
          <Box w="full" mt={16}>
            <Stack
              direction={{ base: "column", lg: "row" }}
              gap={{ base: 10, lg: 20 }}
              align="center"
            >
              <VStack flex={1} align="start" gap={8}>
                <VStack align="start" gap={4}>
                  <Badge
                    bg="orange.100"
                    color="orange.700"
                    px={4}
                    py={2}
                    borderRadius="full"
                    textStyle="sm"
                    fontWeight="semibold"
                    border="1px solid"
                    borderColor="orange.200"
                  >
                    E você, líder?
                  </Badge>

                  <Heading
                    textStyle={{ base: "3xl", md: "5xl" }}
                    color="gray.900"
                    fontFamily="heading"
                    fontWeight="black"
                    lineHeight="1.1"
                  >
                    Reconhece{" "}
                    <Text as="span" color="orange.500">
                      algum desses sinais
                    </Text>{" "}
                    em você?
                  </Heading>

                  <Text
                    textStyle="lg"
                    color="gray.600"
                    lineHeight="1.6"
                    fontWeight="medium"
                  >
                    A pressão da liderança pode ser{" "}
                    <Text as="span" color="orange.500" fontWeight="bold">
                      devastadora
                    </Text>
                    . Você não está sozinho nessa jornada, e buscar ajuda é um{" "}
                    <Text as="span" color="orange.500" fontWeight="bold">
                      sinal de força
                    </Text>
                    , não fraqueza.
                  </Text>
                </VStack>

                <Flex
                  flexWrap="wrap"
                  align="start"
                  gap={{ base: 2, md: 4 }}
                  w="full"
                >
                  {leadershipPains.map((pain, index) => (
                    <HStack
                      key={`pain-${index}`}
                      align="start"
                      gap={4}
                      animation={`pulse ${index + 1 * 1}s ease-in-out infinite`}
                    >
                      <Box
                        w={3}
                        h={3}
                        borderRadius="full"
                        bgGradient="linear-gradient(90deg, {colors.orange.400}, {colors.red.600})"
                        mt={2}
                        flexShrink={0}
                      />
                      <Text
                        textStyle="md"
                        color="gray.700"
                        fontWeight="medium"
                        lineHeight="1.5"
                      >
                        {pain}
                      </Text>
                    </HStack>
                  ))}
                </Flex>
              </VStack>
            </Stack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
