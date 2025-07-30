import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Brain, LineChartIcon, PaletteIcon } from "lucide-react";

export function ITreeboInfo() {
  return (
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
          asChild
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
          <a
            href="https://itreebo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça a i‑Treebo →
          </a>
        </Button>
      </VStack>
    </Box>
  );
}