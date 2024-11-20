import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "@/theme/consts";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import MessageForm from "./MessageForm";
import language, { siteUrl } from "@/data/dictionaries";

export const metadata = {
  title: "Contato",
  description: language.contact.subtitle,
  openGraph: {
    title: "Contato | Douglas Borges",
    description: language.contact.subtitle,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/contato`,
  },
};

export default function Contact() {
  const intl = language;

  return (
    <>
      <Header page="contact" />
      <Box as="main" mt={HEADER_NAVBAR_HEIGHT} bg="gray.50" minH="100vh">
        <Container
          maxW="container.xl"
          py={{ base: 8, md: 16 }}
          as="section"
          aria-label={intl.contact.title}
        >
          <Stack spacing={12}>
            <VStack align="start" spacing={4}>
              <Heading as="h1" size="2xl">
                {intl.contact.title}
              </Heading>
              <Text fontSize="md" color="gray.600">
                {intl.contact.subtitle}
              </Text>
            </VStack>

            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={8}
              as="section"
              aria-label={intl.contact.contactInfoTitle}
            >
              <VStack align="start" spacing={4} flex={1}>
                <Heading size="md">{intl.contact.contactInfoTitle}</Heading>
                <HStack gap={4} align="center" justify="center">
                  <Phone size={28} />
                  <Link
                    href={`https://wa.me/${intl.contact.whatsapp}`}
                    isExternal
                    aria-label="WhatsApp"
                    fontSize="sm"
                  >
                    +55 (42) 98838-1261
                  </Link>
                </HStack>

                <HStack gap={4} align="center" justify="center">
                  <Mail size={28} />
                  <Link href={`mailto:${intl.contact.email}`} fontSize="sm">
                    {intl.contact.email}
                  </Link>
                </HStack>

                <HStack gap={4} align="center" justify="center">
                  <Instagram size={28} />
                  <Link
                    href={`https://instagram.com/${intl.contact.instagram}`}
                    isExternal
                  >
                    @{intl.contact.instagram}
                  </Link>
                </HStack>

                <HStack gap={4} align="center" justify="center">
                  <Linkedin size={28} />
                  <Link
                    href={`https://linkedin.com/in/${intl.contact.linkedin}`}
                    isExternal
                    fontSize="sm"
                  >
                    Douglas Borges
                  </Link>
                </HStack>

                <HStack
                  gap={4}
                  align="center"
                  justify="center"
                  aria-label="Endereço"
                  fontSize="sm"
                >
                  <MapPin size={28} />
                  <address>
                    {intl.contact.address.map((item) => (
                      <Text key={item}>{item}</Text>
                    ))}
                  </address>
                </HStack>
              </VStack>

              <Box flex={1}>
                <VStack
                  align="stretch"
                  spacing={6}
                  bg="white"
                  p={{ base: 4, md: 8 }}
                  borderRadius="lg"
                  boxShadow="md"
                >
                  <Heading size="md">{intl.contact.messageTitle}</Heading>

                  <MessageForm />
                </VStack>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
