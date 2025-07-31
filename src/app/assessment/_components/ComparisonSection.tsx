import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  Heading,
  Text,
  Alert,
} from "@chakra-ui/react";
import { CheckIcon, FlagIcon, XIcon } from "lucide-react";

interface ComparisonSectionProps {
  commonChallenges: string[];
  expectedResults: string[];
}

export function ComparisonSection({
  commonChallenges,
  expectedResults,
}: ComparisonSectionProps) {
  return (
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
  );
}