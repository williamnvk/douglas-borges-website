import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { GraduationCapIcon, BarChartIcon, ClockIcon } from "lucide-react";

export function ProfessionalInfo() {
  return (
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
          <Text
            as="a"
            asChild
            color="blue.300"
            textDecoration="underline"
            _hover={{ color: "blue.100" }}
            fontWeight="bold"
          >
            <a href="/sobre">Douglas Borges</a>
          </Text>{" "}
          é psicólogo empresarial especializado em avaliação de
          personalidade e desempenho humano. Fundador da i-Treebo, tem
          experiência consolidada em assessments comportamentais para
          organizações de diversos portes e segmentos. Conheça mais{" "}
          <Text
            as="a"
            asChild
            color="blue.300"
            textDecoration="underline"
            _hover={{ color: "blue.100" }}
          >
            <a href="/sobre">sobre sua trajetória profissional</a>
          </Text>.
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
  );
}