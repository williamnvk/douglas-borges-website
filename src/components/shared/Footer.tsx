import { LanguageType } from "@/consts/langs";
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
} from "@chakra-ui/react";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { LanguageSelector } from "./LanguageSelector";
import { getDictionary } from "@/app/[lang]/dictionaries";

async function Footer({ lang }: { lang: LanguageType }) {
  const intl = await getDictionary(lang as never);

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
          <MailIcon size={48} />
          <VStack flex={1} align="flex-start" gap={0}>
            <Text fontSize="lg" fontWeight="bold">
              {intl.footer.newsletter.title}
            </Text>
            <Text fontSize="smaller">{intl.footer.newsletter.description}</Text>
          </VStack>
          <VStack flex={1} align="flex-start">
            <Flex gap={4} align="center" w="full">
              <Input rounded={6} type="email" flex={1} />
              <Button>Enviar</Button>
            </Flex>
            <Flex gap={2}>
              <Checkbox />
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
        <Flex mt={8} w="full" justifyContent="space-between">
          <Text fontSize="xs">
            &copy; {new Date().getFullYear()} Douglas Borges. {intl.footer.copy}
          </Text>
          <Flex>
            <LanguageSelector inline lang={lang} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
