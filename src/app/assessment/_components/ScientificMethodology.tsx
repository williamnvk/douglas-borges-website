import { HStack, VStack, Heading, Text, SimpleGrid } from "@chakra-ui/react";

export function ScientificMethodology() {
  const methodologies = [
    { name: "Big Five", desc: "Padrão científico mundial" },
    { name: "DISC", desc: "Comportamento profissional" },
    { name: "Belbin", desc: "Papéis em equipe" },
    { name: "Eneagrama", desc: "Motivações profundas" },
    { name: "MBTI", desc: "Jung" },
  ];

  return (
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
        <Heading as="h2" fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}>
          Base Científica das Avaliações
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
          color="fg.muted"
        >
          Utilizamos <strong>5 metodologias reconhecidas mundialmente</strong>{" "}
          para garantir precisão e confiabilidade:
        </Text>
      </VStack>

      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 3 }}
        gap={{ base: 1, sm: 4, md: 1 }}
        flex={1}
      >
        {methodologies.map((method, index) => (
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
  );
}
