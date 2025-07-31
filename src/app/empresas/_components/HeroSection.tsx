import {
  VStack,
  Box,
  Badge,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Container,
} from "@chakra-ui/react";

export function HeroSection() {
  return (
    <Box
      as="section"
      bgGradient="linear-gradient(135deg, {colors.gray.950}, {colors.blue.900})"
      color="white"
      w="full"
      borderRadius={{ base: "none", md: "3xl" }}
      position="relative"
      overflow="hidden"
      aria-labelledby="hero-heading"
    >
      <Container
        maxW="8xl"
        py={{ base: 16, md: 24 }}
        position="relative"
        zIndex="1"
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 12, lg: 20 }}
          align="center"
          justify="space-between"
          minH={{ base: "auto", lg: "70vh" }}
        >
          <VStack
            flex={1}
            align="flex-start"
            gap={8}
            maxW={{ base: "full", lg: "600px" }}
          >
            {/* Badge */}
            <Badge
              bg="yellow.50/10"
              color="yellow.600"
              px={4}
              py={2}
              textStyle="sm"
              fontWeight="semibold"
              borderRadius="full"
            >
              Psicologia Corporativa
            </Badge>

            {/* Título Principal */}
            <Heading
              id="hero-heading"
              textStyle={{ base: "4xl", md: "5xl", lg: "6xl", xl: "7xl" }}
              fontWeight="black"
              fontFamily="heading"
              lineHeight="1"
            >
              Saúde mental nas empresas começa pela
              <Box as="span" color="yellow.300">
                {" "}
                liderança
              </Box>
            </Heading>

            {/* Subtítulo provocativo */}
            <Heading
              textStyle={{ base: "xl", md: "lg", lg: "2xl", xl: "3xl" }}
              fontWeight="medium"
              opacity="0.9"
              fontFamily="body"
            >
              Sua equipe está produtiva, ou apenas exausta?
            </Heading>

            <Text
              textStyle={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
              opacity="0.8"
              maxW="600px"
              fontFamily="body"
            >
              Como líder, você tem o poder de transformar não apenas sua
              empresa, mas as vidas de todos que trabalham com você. Comece
              cuidando da sua própria saúde mental.
            </Text>

            <Button
              w="full"
              as="a"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              href="https://wa.me/5542988381261?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20psicologia%20corporativa."
              target="_blank"
              size="lg"
              colorPalette="yellow"
              px={8}
              py={10}
              textStyle="lg"
              fontWeight="bold"
              _hover={{ transform: "translateY(-2px)" }}
              transition="all 0.3s"
            >
              Agendar Atendimento →
            </Button>

            {/* Estatísticas */}
            <Stack direction={{ base: "column", sm: "row" }} gap={6} pt={4}>
              <VStack align="start" gap={1}>
                <Text textStyle="2xl" fontWeight="bold">
                  +1000
                </Text>
                <Text textStyle="sm" opacity="0.8">
                  Líderes transformados
                </Text>
              </VStack>
              <VStack align="start" gap={1}>
                <Text textStyle="2xl" fontWeight="bold">
                  +90
                </Text>
                <Text textStyle="sm" opacity="0.8">
                  Empresas atendidas
                </Text>
              </VStack>
              <VStack align="start" gap={1}>
                <Text textStyle="2xl" fontWeight="bold">
                  10 anos
                </Text>
                <Text textStyle="sm" opacity="0.8">
                  De experiência
                </Text>
              </VStack>
            </Stack>
          </VStack>

          {/* Imagem */}
          <Box
            w={{ base: "full", lg: "500px" }}
            h={{ base: "400px", lg: "600px" }}
            position="relative"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="2xl"
          >
            <Image
              src="/assets/douglas-borges-atendimento.webp"
              alt="Douglas Borges - Psicólogo Empresarial em atendimento"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 500px"
              w="full"
              h="full"
            />

            {/* Badge flutuante */}
            <Box
              position="absolute"
              top={4}
              left={4}
              right={4}
              bg="rgba(255, 255, 255, 0.95)"
              backdropFilter="blur(10px)"
              borderRadius="xl"
              p={4}
              boxShadow="lg"
            >
              <VStack align="start" gap={1}>
                <Text textStyle="sm" fontWeight="bold" color="gray.900">
                  Douglas Borges
                </Text>
                <Text textStyle="xs" color="gray.600" fontWeight="medium">
                  Psicólogo Empresarial • CRP/PR 08-21013
                </Text>
                <Badge colorPalette="green" size="sm" fontWeight="bold">
                  ✓ Especialista em Liderança
                </Badge>
              </VStack>
            </Box>
          </Box>
        </Stack>
      </Container>

      {/* Elementos decorativos */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="whiteAlpha.100"
        filter="blur(100px)"
        zIndex="0"
      />
      <Box
        position="absolute"
        bottom="-20%"
        left="-10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="whiteAlpha.100"
        filter="blur(80px)"
        zIndex="0"
      />
    </Box>
  );
}
