import {
  Container,
  Flex,
  Text,
  Box,
  HStack,
  Link,
  VStack,
  SimpleGrid,
  Separator,
} from "@chakra-ui/react";
import {
  InstagramIcon,
  Linkedin,
  MailIcon,
  MapPin,
  PhoneIcon,
} from "lucide-react";

function Footer() {
  return (
    <Box
      as="footer"
      bg="white"
      borderTop="1px solid"
      borderColor="gray.200"
      mt={16}
      role="contentinfo"
    >
      <Container
        maxW="container.xl"
        py={{ base: 8, md: 12 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={{ base: 8, md: 12 }}
          mb={8}
        >
          {/* Contato */}
          <VStack align="flex-start" gap={4}>
            <Text
              fontWeight="600"
              fontSize="lg"
              color="gray.900"
              mb={2}
            >
              Contato
            </Text>
            
            <Link
              href="tel:+5542988381261"
              color="gray.600"
              fontSize="sm"
              _hover={{ color: "blue.600" }}
              display="flex"
              alignItems="center"
              gap={2}
              aria-label="Telefone para contato"
            >
              <PhoneIcon size={16} />
              (42) 98838-1261
            </Link>
            
            <Link
              href="mailto:contato@douglasborgespsicologo.com.br"
              color="gray.600"
              fontSize="sm"
              _hover={{ color: "blue.600" }}
              display="flex"
              alignItems="center"
              gap={2}
              aria-label="Email para contato"
            >
              <MailIcon size={16} />
              contato@douglasborgespsicologo.com.br
            </Link>
          </VStack>

          {/* Redes Sociais */}
          <VStack align="flex-start" gap={4}>
            <Text
              fontWeight="600"
              fontSize="lg"
              color="gray.900"
              mb={2}
            >
              Redes Sociais
            </Text>
            
            <Link
              href="https://instagram.com/douglasborgespsicologo"
              isExternal
              color="gray.600"
              fontSize="sm"
              _hover={{ color: "blue.600" }}
              display="flex"
              alignItems="center"
              gap={2}
              aria-label="Instagram do Douglas Borges"
            >
              <InstagramIcon size={16} />
              @douglasborgespsicologo
            </Link>
            
            <Link
              href="https://linkedin.com/in/douglasborgespsicologo"
              isExternal
              color="gray.600"
              fontSize="sm"
              _hover={{ color: "blue.600" }}
              display="flex"
              alignItems="center"
              gap={2}
              aria-label="LinkedIn do Douglas Borges"
            >
              <Linkedin size={16} />
              Douglas Borges
            </Link>
          </VStack>

          {/* Localização */}
          <VStack align="flex-start" gap={4}>
            <Text
              fontWeight="600"
              fontSize="lg"
              color="gray.900"
              mb={2}
            >
              Localização
            </Text>
            
            <Box>
              <Link
                href="https://maps.app.goo.gl/X3jS4dC17Q1TtKC86"
                isExternal
                color="gray.600"
                fontSize="sm"
                _hover={{ color: "blue.600" }}
                display="flex"
                alignItems="flex-start"
                gap={2}
                mb={3}
                aria-label="Endereço em Curitiba"
              >
                <MapPin size={16} style={{ marginTop: '2px', flexShrink: 0 }} />
                <Box>
                  <Text fontWeight="500" color="gray.700">Curitiba - PR</Text>
                  <address style={{ fontStyle: 'normal' }}>
                    <Text fontSize="xs" color="gray.500" lineHeight="1.4">
                      Nex Coworking | Casa de Pedra<br />
                      Alameda Pres. Taunay, 130, Batel
                    </Text>
                  </address>
                </Box>
              </Link>
            </Box>
            
            <Box>
              <Link
                href="https://goo.gl/maps/CeckryQb4Z6s6rRr7"
                isExternal
                color="gray.600"
                fontSize="sm"
                _hover={{ color: "blue.600" }}
                display="flex"
                alignItems="flex-start"
                gap={2}
                aria-label="Endereço em Porto União"
              >
                <MapPin size={16} style={{ marginTop: '2px', flexShrink: 0 }} />
                <Box>
                  <Text fontWeight="500" color="gray.700">Porto União - SC</Text>
                  <address style={{ fontStyle: 'normal' }}>
                    <Text fontSize="xs" color="gray.500" lineHeight="1.4">
                      Clínica Iluminary<br />
                      Rua Germano Unger, 20, Cidade Nova
                    </Text>
                  </address>
                </Box>
              </Link>
            </Box>
          </VStack>
        </SimpleGrid>

        <Separator borderColor="gray.200" mb={6} />

        {/* Footer Bottom */}
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify={{ base: "center", sm: "space-between" }}
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color="gray.500" textAlign={{ base: "center", sm: "left" }}>
            &copy; {new Date().getFullYear()} Douglas Borges - Psicólogo. Todos os direitos reservados.
          </Text>
          
          <HStack gap={4} fontSize="sm">
            <Link
              href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20agendar%20um%20atendimento."
              isExternal
              color="blue.600"
              fontWeight="500"
              _hover={{ color: "blue.700" }}
              aria-label="Agendar consulta pelo WhatsApp"
            >
              Agendar Consulta
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
