import {
  Button,
  Checkbox,
  Container,
  Flex,
  Input,
  Text,
  VStack,
  Box,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import language from "@/data/dictionaries";

function Footer() {
  const intl = language;

  return (
    <Box as="footer">
      <Container maxW="container.xl" py={8} gap={16}>
        <Stack
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
        </Stack>
        <Flex
          flexDir={{ base: "column-reverse", md: "row" }}
          mt={{ base: 4, md: 8 }}
          w="full"
          gap={2}
          justifyContent={{ base: "flex-start", md: "space-between" }}
        >
          <Text fontSize="small">
            &copy; {new Date().getFullYear()} Douglas Borges. {intl.footer.copy}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
