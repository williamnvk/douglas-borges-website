import {
  VStack,
  Box,
  Heading,
  Text,
  HStack,
  Button,
  Stack,
  Container,
} from "@chakra-ui/react";

interface HeroSectionProps {
  keyBenefits: string[];
}

export function HeroSection({ keyBenefits }: HeroSectionProps) {
  return (
    <Box
      as="section"
      bg="black"
      color="white"
      w="full"
      borderRadius={{ base: "none", md: "3xl" }}
      p={{ base: 6, sm: 8, md: 16 }}
      position="relative"
      overflow="hidden"
      aria-labelledby="hero-heading"
    >
      {/* Video Background */}
      <Box
        as="video"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        w="full"
        h="full"
        objectFit="cover"
        // @ts-expect-error: Type compatibility issue
        autoPlay
        muted
        loop
        playsInline
        zIndex="0"
        opacity="0.4"
        filter="grayscale(100%) brightness(0.5)"
      >
        <source src="/assets/videos/bg.mp4" type="video/mp4" />
      </Box>

      {/* Dark Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="gray.900"
        opacity="0.7"
        zIndex="1"
      />

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(135deg, gray.900 0%, transparent 50%, gray.900 100%)"
        opacity="0.8"
        zIndex="2"
      />

      <Container maxW="8xl">
        <Stack
          flexDir={{ base: "column", md: "row" }}
          w="full"
          gap={{ base: 6, sm: 8, md: 16 }}
          align="center"
          justify="space-between"
          position="relative"
          zIndex="3"
        >
          <VStack
            gap={{ base: 6, sm: 7, md: 8 }}
            flex={1}
            align="stretch"
            maxW={{ base: "full", md: "800px" }}
          >
            <Heading
              as="h1"
              id="hero-heading"
              fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "7xl" }}
              color="white"
              lineHeight="1.2"
              fontWeight="800"
            >
              Assessment Comportamental Empresarial:{" "}
              <Heading
                as="span"
                fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "7xl" }}
              >
                Decisões Baseadas em Ciência
              </Heading>
            </Heading>

            <Text
              fontSize={{ base: "md", sm: "lg", md: "xl" }}
              color="gray.200"
              fontWeight="400"
              lineHeight="1.25"
            >
              Assessment comportamental que oferece uma análise científica e
              objetiva do perfil psicológico dos seus colaboradores,
              fundamentando decisões importantes sobre pessoas. Conheça também
              nossos{" "}
              <Text
                as="a"
                asChild
                color="blue.300"
                textDecoration="underline"
                _hover={{ color: "blue.100" }}
              >
                <a href="/servicos">outros serviços psicológicos</a>
              </Text>
              .
            </Text>

            <HStack gap={{ base: 2, sm: 4 }} flexWrap="wrap" w="full">
              <Button
                as="a"
                asChild
                size={{ base: "lg", md: "xl" }}
                variant="solid"
                px={{ base: 6, sm: 8 }}
                py={{ base: 3, sm: 4 }}
                bg="blue.500"
                fontSize={{ base: "md", sm: "lg", md: "xl" }}
                fontWeight="700"
                w={{ base: "full", md: "fit-content" }}
                _hover={{
                  bg: "blue.400",
                  transform: "translateY(-2px)",
                  boxShadow: "2xl",
                }}
                transition="all 0.3s"
              >
                <a href="#investimento">Ver Planos e Investimento</a>
              </Button>
              <Button
                as="a"
                asChild
                variant="outline"
                w={{ base: "full", md: "fit-content" }}
                px={{ base: 6, sm: 8 }}
                py={{ base: 3, sm: 4 }}
                size={{ base: "lg", md: "xl" }}
                borderColor="transparent"
                color="white"
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20um%20exemplo%20de%20relat%C3%B3rio%20do%20Assessment%20Comportamental."
                >
                  Exemplo de Relatório
                </a>
              </Button>
            </HStack>

            <VStack align="flex-start" gap={{ base: 2, sm: 3 }} w="full">
              {keyBenefits.map((benefit, index) => (
                <Text
                  key={index}
                  fontSize={{ base: "sm", sm: "md" }}
                  color="gray.300"
                  fontWeight="500"
                >
                  {benefit}
                </Text>
              ))}
            </VStack>
          </VStack>

          <Box
            w={{ base: "full", md: "450px" }}
            h={{ base: "250px", sm: "300px", md: "500px" }}
            borderRadius={{ base: "xl", md: "2xl" }}
            boxShadow="2xl"
            border="4px solid"
            borderColor="gray.700"
            role="img"
            aria-label="Escritório profissional para assessment comportamental empresarial em Curitiba - Douglas Borges Psicólogo"
            style={{
              backgroundImage: "url(/assets/escritório.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
