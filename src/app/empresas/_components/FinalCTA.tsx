import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";

export function FinalCTA() {
  return (
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
          Interessado em outros serviços? Visite nossa{" "}
          <Text
            as="a"
            asChild
            color="blue.600"
            textDecoration="underline"
            _hover={{ color: "blue.500" }}
            fontWeight="600"
          >
            <a href="/contato">página de contato</a>
          </Text>.
        </Text>

        <Flex gap={{ base: 3, sm: 4 }} flexWrap="wrap" justify="center">
          <Button
            asChild
            size={{ base: "lg", md: "xl" }}
            colorPalette="blue"
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            py={{ base: 4, md: 8, xl: 8 }}
            px={{ base: 4, md: 8, xl: 12 }}
            borderRadius="xl"
            _hover={{ transform: "translateY(-2px)" }}
            transition="all 0.3s"
          >
            <a href="#investimento">Ver Planos de Investimento</a>
          </Button>
          <Button
            asChild
            size={{ base: "lg", md: "xl" }}
            variant="outline"
            colorPalette="blue"
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            py={{ base: 4, md: 8 }}
            px={{ base: 4, md: 8 }}
            borderRadius="xl"
          >
            <a
              href="https://wa.me/5542988381261?text=Gostaria%20de%20mais%20informações%20sobre%20o%20Assessment%20Comportamental%20para%20minha%20empresa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com Douglas Borges
            </a>
          </Button>
        </Flex>

        <Text fontSize={{ base: "xs", sm: "sm" }} color="fg.muted">
          <strong>Validade da proposta:</strong> 10 dias úteis |
          <strong> Pagamento:</strong> PIX ou boleto à vista |
          <strong> Sigilo:</strong> Confidencialidade total
        </Text>
      </VStack>
    </Box>
  );
}