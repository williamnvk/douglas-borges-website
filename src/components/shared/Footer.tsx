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

function Footer() {
  const intl = language;

  return (
    <Box as="footer">
      <Container maxW="container.xl" py={8}>
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
          pb={4}
          gap={{ base: 2, md: 8 }}
        >
          <HStack
            as={Link}
            href={`tel:${intl.contact.whatsapp}`}
            gap={4}
            align="center"
            justify="flex-start"
          >
            <PhoneIcon size={24} />
            <Text fontSize="smaller" color="gray.400">
              {intl.contact.whatsapp}
            </Text>
          </HStack>

          <HStack
            as={Link}
            href={`mailto:${intl.contact.email}`}
            gap={4}
            align="center"
            justify="flex-start"
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
          >
            <MapPin size={28} />
            <address>
              {intl.contact.address.map((item) => (
                <Text key={item} fontSize="smaller" color="gray.400">
                  {item}
                </Text>
              ))}
            </address>
          </HStack>
        </Stack>
        <Flex
          flexDir={{ base: "column-reverse", md: "row" }}
          w="full"
          gap={2}
          borderTop="4px solid"
          borderColor="gray.50"
          pt={4}
          justifyContent={{ base: "flex-start", md: "space-between" }}
        >
          <Text fontSize="small" color="gray.400">
            &copy; {new Date().getFullYear()} Douglas Borges. {intl.footer.copy}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
