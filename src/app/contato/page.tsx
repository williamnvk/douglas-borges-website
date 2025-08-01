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
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import MessageForm from "./MessageForm";
import { siteImage, siteUrl } from "@/data/site-constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Atendo em todo o Brasil, oferecendo consultas online e presenciais. Embora minha base esteja localizada em União da Vitória - PR, estou disponível para atender clientes de qualquer lugar do país. Se você precisar de assistência, não hesite em entrar em contato!",
  openGraph: {
    title: "Contato | Douglas Borges",
    description: "Atendo em todo o Brasil, oferecendo consultas online e presenciais. Embora minha base esteja localizada em União da Vitória - PR, estou disponível para atender clientes de qualquer lugar do país. Se você precisar de assistência, não hesite em entrar em contato!",
    images: [siteImage],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/contato`,
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      <Box as="main" mt={HEADER_NAVBAR_HEIGHT} bg="bg.subtle" minH="100vh">
        <Container
          maxW="8xl"
          py={{ base: 8, md: 16 }}
          as="section"
          aria-label="Entre em Contato"
        >
          <Stack gap={12}>
            <VStack align="start" gap={4}>
              <Heading as="h1" size="2xl">
                Entre em Contato
              </Heading>
              <Text fontSize="md" color="fg.muted">
                Atendo em todo o Brasil, oferecendo consultas online e presenciais. Embora minha base esteja localizada em União da Vitória - PR, estou disponível para atender clientes de qualquer lugar do país. Se você precisar de assistência, não hesite em entrar em contato!
              </Text>
            </VStack>

            <Stack
              direction={{ base: "column", md: "row" }}
              gap={8}
              as="section"
              aria-label="Informações de Contato"
            >
              <VStack align="start" gap={4} flex={1}>
                <Heading size="md">Informações de Contato</Heading>
                <HStack gap={4} align="center" justify="center">
                  <Phone size={28} />
                  <Link
                    href="https://wa.me/5542988381261"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    fontSize="sm"
                  >
                    +55 (42) 98838-1261
                  </Link>
                </HStack>

                <HStack gap={4} align="center" justify="center">
                  <Mail size={28} />
                  <Link href="mailto:contato@douglasborgespsicologo.com.br" fontSize="sm">
                    contato@douglasborgespsicologo.com.br
                  </Link>
                </HStack>

                <HStack gap={4} align="center" justify="center">
                  <Instagram size={28} />
                  <Link
                    href="https://instagram.com/douglasborgespsicologo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @douglasborgespsicologo
                  </Link>
                </HStack>

                <HStack gap={4} align="center" justify="center">
                  <Linkedin size={28} />
                  <Link
                    href="https://linkedin.com/in/douglasborgespsicologo"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    {["Nex Coworking | Casa de Pedra", "Alameda Pres. Taunay, 130, Batel", "Curitiba · PR"].map((item) => (
                      <Text key={item}>{item}</Text>
                    ))}
                  </address>
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
                    {["Clínica Iluminary", "Rua Germano Unger, 20, Cidade Nova", "Porto União · SC"].map((item) => (
                      <Text key={item}>{item}</Text>
                    ))}
                  </address>
                </HStack>
              </VStack>

              <Box flex={1}>
                <VStack
                  align="stretch"
                  gap={6}
                  bg="white"
                  p={{ base: 4, md: 8 }}
                  borderRadius="lg"
                  boxShadow="md"
                >
                  <Heading size="md">Envie uma mensagem</Heading>

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
