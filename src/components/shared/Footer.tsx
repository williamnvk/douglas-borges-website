import {
  Container,
  Flex,
  Text,
  Box,
  HStack,
  Link,
  VStack,
  Button,
  SimpleGrid,
  Heading,
  Icon,
  Separator,
} from "@chakra-ui/react";
import {
  InstagramIcon,
  Linkedin,
  MailIcon,
  MapPin,
  PhoneIcon,
  HeartIcon,
  CalendarIcon,
} from "lucide-react";

import GoToTop from "./GoToTop";

function Footer() {
  const bgColor = "gray.900";
  const textColor = "gray.300";
  const accentColor = "blue.400";

  return (
    <Box
      as="footer"
      bg={bgColor}
      mt={16}
      role="contentinfo"
      position="relative"
    >
      {/* Gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-br, gray.900, gray.800)"
        opacity={0.9}
      />

      <Container
        maxW="container.xl"
        py={{ base: 12, md: 16 }}
        position="relative"
        zIndex={1}
      >
        <VStack gap={{ base: 12, md: 16 }} align="stretch">
          {/* Appointment Section */}
          <Box
            bg="gray.800"
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.700"
            position="relative"
            overflow="hidden"
          >
            {/* Subtle background pattern */}
            <Box
              position="absolute"
              top={-2}
              right={-2}
              w={20}
              h={20}
              bg={accentColor}
              opacity={0.1}
              borderRadius="full"
              filter="blur(20px)"
            />

            <HStack
              flexDirection={{ base: "column", md: "row" }}
              w="full"
              justify="space-between"
              align="center"
              gap={{ base: 6, md: 8 }}
            >
              <VStack flex={1} align="flex-start" justify="center" gap={4}>
                <Heading
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="700"
                  textAlign="left"
                  lineHeight="1.2"
                  color="white"
                >
                  Atendimento
                  <br />
                  <Heading
                    as="span"
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="300"
                    color={accentColor}
                  >
                    Online e Presencial
                  </Heading>
                </Heading>
                <Text color={textColor} fontSize={{ base: "md", md: "lg" }}>
                  Flexibilidade para melhor atender você, onde estiver.
                </Text>
              </VStack>
              <Button
                as={Link}
                // @ts-expect-error: Type compatibility issue
                href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo%20e%20gostaria%20de%20agendar%20um%20atendimento."
                leftIcon={<CalendarIcon size={20} />}
                colorPalette="blue"
                size="lg"
                w={{ base: "full", md: "auto" }}
                px={8}
                py={6}
                fontSize="md"
                fontWeight="semibold"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                }}
                transition="all 0.3s"
                aria-label="Agendar consulta"
                isExternal
                boxShadow="0 4px 15px rgba(59, 130, 246, 0.2)"
              >
                Agendar Consulta
              </Button>
            </HStack>
          </Box>

          <Separator borderColor="gray.700" />

          {/* Contact Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={{ base: 8, md: 12 }}
            py={{ base: 4, md: 6 }}
          >
            {/* Social Links */}
            <VStack align="flex-start" gap={6} flex={1}>
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "xl" }}
                color="white"
                mb={2}
              >
                Redes Sociais
              </Text>

              <VStack align="flex-start" gap={4} w="full">
                <HStack
                  as={Link}
                  // @ts-expect-error: Type compatibility issue
                  href="https://instagram.com/douglasborgespsicologo"
                  isExternal
                  gap={3}
                  color={textColor}
                  p={3}
                  borderRadius="md"
                  w="full"
                  _hover={{
                    color: accentColor,
                    transform: "translateX(8px)",
                    bg: "gray.800",
                  }}
                  transition="all 0.3s"
                  aria-label="Perfil do Instagram"
                >
                  <InstagramIcon size={22} />
                  <Text fontSize="md" fontWeight="medium">
                    @douglasborgespsicologo
                  </Text>
                </HStack>

                <HStack
                  as={Link}
                  // @ts-expect-error: Type compatibility issue
                  href="https://linkedin.com/in/douglasborgespsicologo"
                  isExternal
                  gap={3}
                  color={textColor}
                  p={3}
                  borderRadius="md"
                  w="full"
                  _hover={{
                    color: accentColor,
                    transform: "translateX(8px)",
                    bg: "gray.800",
                  }}
                  transition="all 0.3s"
                  aria-label="Perfil do LinkedIn"
                >
                  <Linkedin size={22} />
                  <Text fontSize="md" fontWeight="medium">
                    Douglas Borges
                  </Text>
                </HStack>
              </VStack>

              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "xl" }}
                color="white"
                mt={4}
                mb={2}
              >
                Contato
              </Text>

              <VStack align="flex-start" gap={4} w="full">
                <HStack
                  as={Link}
                  // @ts-expect-error: Type compatibility issue
                  href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo."
                  isExternal
                  gap={3}
                  color={textColor}
                  p={3}
                  borderRadius="md"
                  w="full"
                  _hover={{
                    color: accentColor,
                    transform: "translateX(8px)",
                    bg: "gray.800",
                  }}
                  transition="all 0.3s"
                  aria-label="Ligar para telefone"
                >
                  <PhoneIcon size={22} />
                  <Text fontSize="md" fontWeight="medium">
                    +55 (42) 98838-1261
                  </Text>
                </HStack>

                <HStack
                  as={Link}
                  // @ts-expect-error: Type compatibility issue
                  href="mailto:contato@douglasborgespsicologo.com.br"
                  isExternal
                  gap={3}
                  color={textColor}
                  p={3}
                  borderRadius="md"
                  w="full"
                  _hover={{
                    color: accentColor,
                    transform: "translateX(8px)",
                    bg: "gray.800",
                  }}
                  transition="all 0.3s"
                  aria-label="Enviar email"
                >
                  <MailIcon size={22} />
                  <Text fontSize="md" fontWeight="medium">
                    contato@douglasborgespsicologo.com.br
                  </Text>
                </HStack>
              </VStack>
            </VStack>

            {/* Addresses */}
            <VStack
              align="flex-start"
              gap={6}
              flex={1}
              gridColumn={{ base: 1, md: "span 2" }}
            >
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "xl" }}
                color="white"
                mb={2}
              >
                Localização
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                <VStack
                  as={Link}
                  // @ts-expect-error: Type compatibility issue
                  href="https://maps.app.goo.gl/X3jS4dC17Q1TtKC86"
                  isExternal
                  align="flex-start"
                  gap={3}
                  p={6}
                  bg="gray.800"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.700"
                  w="full"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                    borderColor: accentColor,
                  }}
                  transition="all 0.3s"
                  aria-label="Endereço em Curitiba"
                >
                  <HStack color={accentColor} mb={2}>
                    <MapPin size={22} />
                    <Text fontSize="md" fontWeight="semibold">
                      Curitiba - PR
                    </Text>
                  </HStack>
                  <address>
                    {[
                      "Nex Coworking | Casa de Pedra",
                      "Alameda Pres. Taunay, 130, Batel",
                      "Curitiba · PR",
                    ].map((item) => (
                      <Text
                        key={item}
                        fontSize="sm"
                        color={textColor}
                        lineHeight="1.5"
                      >
                        {item}
                      </Text>
                    ))}
                  </address>
                </VStack>

                <VStack
                  as={Link}
                  // @ts-expect-error: Type compatibility issue
                  href="https://goo.gl/maps/CeckryQb4Z6s6rRr7"
                  isExternal
                  align="flex-start"
                  gap={3}
                  p={6}
                  bg="gray.800"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.700"
                  w="full"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                    borderColor: accentColor,
                  }}
                  transition="all 0.3s"
                  aria-label="Endereço em Porto União"
                >
                  <HStack color={accentColor} mb={2}>
                    <MapPin size={22} />
                    <Text fontSize="md" fontWeight="semibold">
                      Gêmeas do Iguaçu e Região
                    </Text>
                  </HStack>
                  <address>
                    {[
                      "Clínica Iluminary",
                      "Rua Germano Unger, 20, Cidade Nova",
                      "Porto União · SC",
                    ].map((item) => (
                      <Text
                        key={item}
                        fontSize="sm"
                        color={textColor}
                        lineHeight="1.5"
                      >
                        {item}
                      </Text>
                    ))}
                  </address>
                </VStack>
              </SimpleGrid>
            </VStack>
          </SimpleGrid>

          <Separator borderColor="gray.700" />

          {/* Footer Bottom */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={4}
            pt={4}
          >
            <HStack gap={2}>
              <Text fontSize="sm" color={textColor}>
                &copy; {new Date().getFullYear()} Douglas Borges. Todos os
                direitos reservados.
              </Text>
              <HeartIcon />
            </HStack>

            <GoToTop />
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}

export default Footer;
