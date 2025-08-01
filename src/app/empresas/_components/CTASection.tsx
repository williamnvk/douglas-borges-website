import {
  VStack,
  Box,
  Heading,
  Text,
  Button,
  Container,
  Stack,
  HStack,
  Image,
} from "@chakra-ui/react";
import Icon from "@/components/shared/DynamicIcon";

export function CTASection() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }}>
      <Container maxW="8xl">
        <VStack gap={16}>
          {/* CTA Principal */}
          <Box
            w="full"
            bgGradient="linear-gradient(35deg, {colors.blue.900}, {colors.gray.900})"
            color="white"
            borderRadius="3xl"
            p={{ base: 8, md: 16 }}
            position="relative"
            overflow="hidden"
          >
            <Stack
              direction={{ base: "column", lg: "row" }}
              gap={{ base: 8, lg: 12 }}
              align="center"
              position="relative"
              zIndex={1}
            >
              <VStack flex={1} align="start" gap={8}>
                <VStack align="start" gap={4}>
                  <Heading
                    textStyle={{ base: "3xl", md: "5xl" }}
                    fontWeight="black"
                    fontFamily="heading"
                    lineHeight="1.1"
                  >
                    O bem-estar da sua equipe começa por você
                  </Heading>
                  <Text
                    textStyle={{ base: "lg", md: "xl" }}
                    opacity="0.9"
                    lineHeight="1.6"
                  >
                    Como líder, você tem o poder de transformar não apenas
                    resultados, mas vidas. Comece hoje mesmo essa jornada de
                    transformação.
                  </Text>
                </VStack>

                <VStack align="start" gap={3} w="full">
                  <Text textStyle="md" fontWeight="semibold" opacity="0.9">
                    Na nossa primeira conversa, vamos:
                  </Text>
                  {[
                    "Fazer um diagnóstico da sua situação atual",
                    "Identificar as principais necessidades da sua empresa",
                    "Desenhar um plano personalizado de acompanhamento",
                    "Definir métricas de sucesso claras e mensuráveis",
                  ].map((item, index) => (
                    <HStack
                      key={`cta-item-${index}`}
                      align="center"
                      gap={{ base: 2, md: 4 }}
                    >
                      <Box
                        w={2}
                        h={2}
                        borderRadius="full"
                        bg="yellow.300"
                        flexShrink={0}
                      />
                      <Text textStyle="md" opacity="0.9">
                        {item}
                      </Text>
                    </HStack>
                  ))}
                </VStack>

                <Stack
                  direction={{ base: "column", sm: "row" }}
                  gap={4}
                  w="full"
                >
                  <Button
                    as="a"
                    // @ts-expect-error: Type compatibility issue
                    href="https://wa.me/5542988381261?text=Olá%20Douglas!%20Sou%20empresário(a)%20e%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20psicologia%20corporativa%20para%20minha%20empresa."
                    target="_blank"
                    size="lg"
                    variant="solid"
                    colorPalette="yellow"
                    w={{ base: "full", sm: "auto" }}
                  >
                    <Icon name="message-circle" size={20} />
                    Agendar Conversa
                  </Button>
                </Stack>
              </VStack>

              <Box
                w={{ base: "full", lg: "400px" }}
                h={{ base: "300px", lg: "450px" }}
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                flexShrink={0}
              >
                <Image
                  src="/assets/douglas-borges-em-pe.webp"
                  alt="Douglas Borges - Psicólogo Empresarial"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 400px"
                  w="full"
                  h="full"
                />
              </Box>
            </Stack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
