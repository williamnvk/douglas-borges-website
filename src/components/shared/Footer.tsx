import {
  Container,
  Flex,
  Text,
  Box,
  Stack,
  HStack,
  Link,
} from "@chakra-ui/react";
import {
  InstagramIcon,
  Linkedin,
  MailIcon,
  MapPin,
  PhoneIcon,
} from "lucide-react";
import language from "@/data/dictionaries";
import GoToTop from "./GoToTop";

function Footer() {
  const intl = language;

  return (
    <Box as="footer">
      <Container maxW="container.xl" py={8}>
        <Text
          fontSize="smaller"
          w="full"
          borderBottom="4px solid"
          borderColor="gray.50"
          pb={4}
          fontStyle="italic"
          color="gray.400"
          aria-label="Frase do Douglas Borges"
        >
          &quot;A terapia e a consultoria são ferramentas valiosas que podem te
          ajudar a aprimorar comportamentos, hábitos e pensamentos. Elas
          permitem conhecer melhor seus limites, compreender suas emoções e
          promovem um maior autoconhecimento e inteligência emocional.&quot;
          <br />- Douglas Borges
        </Text>
        {/* <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          justifyContent="flex-start"
          w="full"
          pb={8}
          gap={8}
        >
          <HStack gap={4} flex={1}>
            <MailIcon size={48} />
            <VStack flex={1} align="flex-start" gap={{ base: 2, md: 0 }}>
              <Text fontSize="lg" fontWeight="bold">
                {intl.footer.newsletter.title}
              </Text>
              <Text fontSize="smaller">
                {intl.footer.newsletter.description}
              </Text>
            </VStack>
          </HStack>
          <VStack flex={1} align="flex-start">
            <Flex gap={4} align="center" w="full">
              <Input rounded={6} type="email" flex={1} title="E-mail" />
              <Button variant="light">Enviar</Button>
            </Flex>
            <Flex gap={2}>
              <Checkbox title="Autorizo o envio de comunicações por e-mail" />
              <Text fontSize="xs">
                Autorizo o envio de comunicações por e-mail ou qualquer outro
                meio e concordo com os Termos e{" "}
                <Link
                  href="/politica-privacidade"
                  style={{ textDecoration: "underline" }}
                >
                  Políticas de Privacidade
                </Link>
                .
              </Text>
            </Flex>
          </VStack>
        </Stack> */}
        <Stack
          flexDir={{ base: "column", md: "row" }}
          w="full"
          py={4}
          gap={{ base: 2, md: 4, xl: 8 }}
        >
          <HStack
            as={Link}
            href={`tel:${intl.contact.whatsapp}`}
            gap={4}
            align="center"
            justify="flex-start"
            aria-label="WhatsApp"
          >
            <PhoneIcon size={24} />
            <Text fontSize="smaller" color="gray.400">
              +55 (42) 98838-1261
            </Text>
          </HStack>

          <HStack
            as={Link}
            href={`mailto:${intl.contact.email}`}
            gap={4}
            align="center"
            justify="flex-start"
            aria-label="E-mail"
          >
            <MailIcon size={28} />
            <Text fontSize="smaller" color="gray.400">
              {intl.contact.email}
            </Text>
          </HStack>

          <HStack
            gap={4}
            as={Link}
            href={`https://instagram.com/${intl.contact.instagram}`}
            isExternal
            align="center"
            justify="flex-start"
            aria-label="Instagram"
          >
            <InstagramIcon size={28} />
            <Text fontSize="smaller" color="gray.400">
              @{intl.contact.instagram}
            </Text>
          </HStack>

          <HStack
            gap={4}
            as={Link}
            href={`https://linkedin.com/in/${intl.contact.linkedin}`}
            isExternal
            align="center"
            justify="flex-start"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
            <Text fontSize="smaller" color="gray.400">
              Douglas Borges
            </Text>
          </HStack>

          <HStack
            gap={4}
            align="center"
            justify="flex-start"
            as={Link}
            href={language.contact.maps}
            isExternal
            aria-label="Endereço"
          >
            <MapPin size={28} />
            <address>
              {intl.contact.address.map((item) => (
                <Text key={item} fontSize="smaller" color="gray.400" lineHeight={1.1}>
                  {item}
                </Text>
              ))}
            </address>
          </HStack>
        </Stack>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          w="full"
          gap={2}
          borderTop="4px solid"
          borderColor="gray.50"
          pt={4}
          justifyContent={{ base: "flex-start", md: "space-between" }}
        >
          <Text
            fontSize="small"
            color="gray.400"
            aria-label="Copyright"
            flex={1}
          >
            &copy; {new Date().getFullYear()} Douglas Borges. {intl.footer.copy}
          </Text>
          <Flex
            flex={1}
            align="center"
            justify={{ base: "center", md: "flex-end" }}
          >
            <GoToTop />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
