import {
  Box,
  VStack,
  Badge,
  Heading,
  Text,
  SimpleGrid,
  Button,
  HStack,
} from "@chakra-ui/react";
import { CalendarIcon, CreditCardIcon, ShieldCheckIcon } from "lucide-react";

export function InvestmentPlans() {
  return (
    <Box
      as="section"
      id="investimento"
      py={{ base: 8, sm: 12, md: 20 }}
      w="full"
      aria-labelledby="investment-heading"
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
            id="investment-heading"
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
              asChild
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
              <a href="https://buy.stripe.com/fZu14p5BD2ehgO3fDCaIM00" target="_blank" rel="noopener noreferrer">
                Contratar Agora
              </a>
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
              asChild
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
              <a href="https://buy.stripe.com/3cIdRbaVXaKN2Xd9feaIM01" target="_blank" rel="noopener noreferrer">
                Contratar Agora
              </a>
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
              asChild
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
              <a href="https://buy.stripe.com/cNi00lfcdf13fJZfDCaIM02" target="_blank" rel="noopener noreferrer">
                Contratar Agora
              </a>
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
              asChild
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
              <a href="https://buy.stripe.com/dRmaEZd451ad8hx2QQaIM03" target="_blank" rel="noopener noreferrer">
                Contratar Agora
              </a>
            </Button>
          </VStack>
        </SimpleGrid>

        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          gap={{ base: 4, sm: 6, md: 8 }}
          w="auto"
        >
          <HStack gap={{ base: 2, md: 4 }}>
            <CalendarIcon size={24} />
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
          </HStack>
          <HStack gap={{ base: 2, md: 4 }}>
            <CreditCardIcon size={24} />
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
          </HStack>
          <HStack gap={{ base: 2, md: 4 }}>
            <ShieldCheckIcon size={24} />
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
          </HStack>
        </SimpleGrid>
      </VStack>
    </Box>
  );
}