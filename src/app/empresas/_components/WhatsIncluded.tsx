import { VStack, Heading, Text, Box, HStack } from "@chakra-ui/react";
import { Check } from "lucide-react";

const includeItems = [
  "Relatório técnico completo com análise visual",
  "Aplicação de 5 metodologias científicas reconhecidas",
  "Comparativo com o perfil ideal da função",
  "Reunião de devolutiva exclusiva",
  "Recomendações práticas para tomada de decisão",
  "Total confidencialidade do processo",
];

export function WhatsIncluded() {
  return (
    <VStack
      as="section"
      w="full"
      mx="auto"
      align="flex-start"
      gap={{ base: 2, md: 4 }}
      p={{ base: 4, md: 16 }}
      bg="green.subtle"
      rounded="3xl"
      mb={{ base: 4, md: 16 }}
    >
      {/* Header */}
      <VStack align="flex-start" gap={2} w="full">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          fontWeight="700"
          color="gray.900"
          lineHeight="1.2"
        >
          O que está incluído
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.600"
          fontWeight="500"
        >
          Todos os planos incluem estes benefícios sem custo adicional
        </Text>
      </VStack>

      {/* Lista de items */}
      <VStack w="full" gap={0} align="flex-start">
        {includeItems.map((item, index) => (
          <HStack
            key={index}
            w="full"
            align="flex-start"
            gap={4}
            py={6}
            borderBottom={
              index < includeItems.length - 1 ? "1px solid" : "none"
            }
            borderColor="gray.100"
          >
            <Box
              as="span"
              w="6"
              h="6"
              bg="green.500"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
              mt={1}
            >
              <Check size={16} color="white" />
            </Box>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.800"
              fontWeight="500"
              lineHeight="1.6"
              flex="1"
            >
              {item}
            </Text>
          </HStack>
        ))}
      </VStack>

      <Text
        fontSize="sm"
        color="gray.600"
        textAlign="center"
        fontStyle="italic"
      >
        ✓ Todos estes elementos estão inclusos em qualquer plano escolhido
      </Text>
    </VStack>
  );
}
