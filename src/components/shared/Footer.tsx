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
  const bgColor = "bg.subtle";
  const textColor = "fg.muted";
  const quoteColor = "fg.muted";

  return (
    <Box as="footer" bg={bgColor} mt={16} role="contentinfo">
      <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
        <VStack gap={{ base: 6, md: 8 }} align="stretch">
          {/* Appointment Section */}

          <HStack
            flexDirection={{ base: "column", md: "row" }}
            w="full"
            justify="space-between"
            align="center"
          >
            <VStack flex={1} align="flex-start" justify="center">
              <Heading
                fontSize={{ base: "lg", md: "4xl" }}
                fontWeight="100"
                textAlign="left"
                lineHeight="1.2"
              >
                Atendimento
                <br />
                <Heading
                  as="span"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="bold"
                >
                  Online e Presencial
                </Heading>
              </Heading>
              <Text color="gray.400" mb={4}>
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
              _hover={{ transform: "translateY(-2px)" }}
              transition="all 0.2s"
              aria-label="Agendar consulta"
              isExternal
            >
              Agendar Consulta
            </Button>
          </HStack>

          {/* Contact Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={{ base: 8, md: 12 }}
            py={{ base: 6, md: 8 }}
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontStyle="italic"
              color={quoteColor}
              lineHeight="tall"
              textAlign="left"
              aria-label="Citação inspiradora do Douglas Borges sobre terapia"
            >
              &quot;A terapia e a consultoria são ferramentas valiosas que podem
              te ajudar a aprimorar comportamentos, hábitos e pensamentos. Elas
              permitem conhecer melhor seus limites, compreender suas emoções e
              promovem um maior autoconhecimento e inteligência emocional.&quot;
              <Text as="span" display="block" mt={3} fontWeight="bold">
                - Douglas Borges
              </Text>
            </Text>
            {/* Social Links */}
            <VStack align="flex-start" gap={4} flex={1}>
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "lg" }}
                color={textColor}
              >
                Redes Sociais
              </Text>

              <HStack
                as={Link}
                // @ts-expect-error: Type compatibility issue
                href="https://instagram.com/douglasborgespsicologo"
                isExternal
                gap={3}
                color={textColor}
                _hover={{ color: "blue.500", transform: "translateX(4px)" }}
                transition="all 0.2s"
                aria-label="Perfil do Instagram"
              >
                <InstagramIcon size={20} />
                <Text fontSize="sm">@douglasborgespsicologo</Text>
              </HStack>

              <HStack
                as={Link}
                // @ts-expect-error: Type compatibility issue
                href="https://linkedin.com/in/douglasborgespsicologo"
                isExternal
                gap={3}
                color={textColor}
                _hover={{ color: "blue.500", transform: "translateX(4px)" }}
                transition="all 0.2s"
                aria-label="Perfil do LinkedIn"
              >
                <Linkedin size={20} />
                <Text fontSize="sm">Douglas Borges</Text>
              </HStack>

              <br />

              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "lg" }}
                color={textColor}
              >
                Contato
              </Text>

              <HStack
                as={Link}
                // @ts-expect-error: Type compatibility issue
                href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo."
                isExternal
                gap={3}
                color={textColor}
                _hover={{ color: "blue.500", transform: "translateX(4px)" }}
                transition="all 0.2s"
                aria-label="Ligar para telefone"
              >
                <PhoneIcon size={20} />
                <Text fontSize="sm">+55 (42) 98838-1261</Text>
              </HStack>

              <HStack
                as={Link}
                // @ts-expect-error: Type compatibility issue
                href="mailto:contato@douglasborgespsicologo.com.br"
                isExternal
                gap={3}
                color={textColor}
                _hover={{ color: "blue.500", transform: "translateX(4px)" }}
                transition="all 0.2s"
                aria-label="Enviar email"
              >
                <MailIcon size={20} />
                <Text fontSize="sm">contato@douglasborgespsicologo.com.br</Text>
              </HStack>
            </VStack>

            {/* Addresses */}
            <VStack align="flex-start" gap={4} flex={1}>
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl", md: "lg" }}
                color={textColor}
              >
                Localização
              </Text>

              <VStack
                as={Link}
                // @ts-expect-error: Type compatibility issue
                href="https://maps.app.goo.gl/X3jS4dC17Q1TtKC86"
                isExternal
                align="flex-start"
                gap={2}
                p={4}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                w="full"
                _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
                transition="all 0.2s"
                aria-label="Endereço em Curitiba"
              >
                <HStack color={textColor}>
                  <MapPin size={20} />
                  <Text fontSize="sm" fontWeight="semibold">
                    Curitiba - PR
                  </Text>
                </HStack>
                <address>
                  {["Nex Coworking | Casa de Pedra", "Alameda Pres. Taunay, 130, Batel", "Curitiba · PR"].map((item) => (
                    <Text key={item} fontSize="sm" color={textColor}>
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
                gap={2}
                p={{ base: 4, md: 6 }}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                w="full"
                _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
                transition="all 0.2s"
                aria-label="Endereço em Irati"
              >
                <HStack color={textColor}>
                  <MapPin size={20} />
                  <Text fontSize="sm" fontWeight="semibold">
                    Gemeas do Iguaçu e Região
                  </Text>
                </HStack>
                <address>
                  {["Clínica Iluminary", "Rua Germano Unger, 20, Cidade Nova", "Porto União · SC"].map((item) => (
                    <Text key={item} fontSize="sm" color={textColor}>
                      {item}
                    </Text>
                  ))}
                </address>
              </VStack>
            </VStack>
          </SimpleGrid>

          {/* Footer Bottom */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "center", md: "center" }}
            gap={4}
          >
            <Text fontSize="sm">
              &copy; {new Date().getFullYear()} Douglas Borges.{" "}
              Todos os direitos reservados.
            </Text>

            <HeartIcon
              aria-label="Ícone de coração"
              color="var(--chakra-colors-red-400)"
              width={4}
              height={4}
            />
            <GoToTop />
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}

export default Footer;
