import { Header } from "@/components/shared/Header";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import language, {
  siteDescription,
  siteImage,
  siteUrl,
} from "@/data/dictionaries";
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import {
  Container,
  HStack,
  Text,
  VStack,
  Link,
  Box,
  Heading,
} from "@chakra-ui/react";
import {
  HomeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description: siteDescription,
  openGraph: {
    title: "Links",
    description: siteDescription,
    type: "website",
    images: [siteImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl + "/links",
  },
};

export default function LinksPage() {
  return (
    <>
      <Header />

      <Container maxW="container.md">
        <VStack
          align="center"
          justify="center"
          minH={{ base: "50vh", md: `calc(80vh - ${HEADER_NAVBAR_HEIGHT})` }}
          py={{ base: 0, md: 16 }}
        >
          <Box
            mt={HEADER_NAVBAR_HEIGHT}
            as="section"
            w={{ base: "full", md: "full" }}
            h={{ base: "160px", md: "320px" }}
            mx={{ base: "auto", md: "0" }}
            display="block"
            borderRadius="md"
            backgroundPosition={{
              base: "center -252px",
              md: "center -540px",
            }}
            style={{
              backgroundImage: "url(/assets/falando.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            role="img"
            aria-label={"Foto de perfil"}
            position="relative"
          >
            <Heading
              fontSize="md"
              py={2}
              textAlign="left"
              fontWeight="400"
              bg="white"
              
              borderRadius="md"
              px={2}
              position="absolute"
              bottom={2}
              left={2}
            >
              Atendimento <strong>presencial e online</strong>
            </Heading>
          </Box>

          <HStack
            as={Link}
            // @ts-ignore
            href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo."
            target="_blank"
            rel="noopener noreferrer"
            w="full"
            p={4}
            gap={4}
            align="center"
            bg="gray.900"
            color="white"
            borderRadius="md"
            isExternal
            aria-label="Entrar em contato pelo WhatsApp"
            role="link"
          >
            <WhatsAppIcon width={22} height={22} />
            <VStack flex={1} align="start" gap={0}>
              <Text fontSize="lg" fontWeight="bold">
                Entrar em contato
              </Text>
              <Text fontSize="x-small">+55 (42) 98838-1261</Text>
            </VStack>
          </HStack>

          <HStack
            as={Link}
            // @ts-ignore
            href="/"
            w="full"
            p={4}
            align="center"
            gap={4}
            bg="bg.subtle"
            borderRadius="md"
            aria-label="Página Inicial do Site"
            role="link"
          >
            <HomeIcon size={22} />
            <VStack flex={1} align="start" gap={0}>
              <Text fontSize="sm" fontWeight="bold">
                Página Inicial do Site
              </Text>
            </VStack>
          </HStack>

          <HStack
            as={Link}
            // @ts-ignore
            href={language.contact.mapsCuritiba}
            w="full"
            p={4}
            gap={4}
            align="center"
            justify="center"
            bg="bg.subtle"
            borderRadius="md"
            aria-label="Veja meu endereço no mapa"
            role="link"
            isExternal
          >
            <MapPinIcon size={22} />
            <VStack flex={1} align="start" gap={0}>
              <Text fontWeight="bold" flex={1}>
                Curitiba - PR
              </Text>
              <address>
                {language.contact.addressCuritiba.map((item) => (
                  <Text key={item} fontSize="x-small">
                    {item}
                  </Text>
                ))}
              </address>
            </VStack>
          </HStack>

          <HStack
            as={Link}
            // @ts-ignore
            href={language.contact.maps}
            w="full"
            p={4}
            gap={4}
            align="center"
            justify="center"
            bg="bg.subtle"
            borderRadius="md"
            aria-label="Veja meu endereço no mapa"
            role="link"
            isExternal
          >
            <MapPinIcon size={22} />
            <VStack flex={1} align="start" gap={0}>
              <Text fontWeight="bold" lineHeight="1">
                União da Vitória,
                <br />
                Porto União e Região
              </Text>
              <address>
                {language.contact.address.map((item) => (
                  <Text key={item} fontSize="x-small">
                    {item}
                  </Text>
                ))}
              </address>
            </VStack>
          </HStack>

          <HStack
            as={Link}
            // @ts-ignore
            href={`mailto:${language.contact.email}`}
            w="full"
            p={4}
            gap={4}
            align="center"
            justify="center"
            bg="bg.subtle"
            borderRadius="md"
            aria-label="Enviar um e-mail"
            role="link"
          >
            <MailIcon size={22} />
            <VStack flex={1} align="start" gap={0}>
              <Text fontWeight="bold">Enviar um e-mail</Text>

              <Text fontSize="x-small">{language.contact.email}</Text>
            </VStack>
          </HStack>

          <HStack
            as={Link}
            // @ts-ignore
            href={language.contact.linkedin}
            w="full"
            p={4}
            gap={4}
            align="center"
            justify="center"
            bg="bg.subtle"
            borderRadius="md"
            aria-label="Acessar meu perfil no LinkedIn"
            role="link"
            isExternal
          >
            <LinkedinIcon size={22} />
            <VStack flex={1} align="start" gap={0}>
              <Text fontWeight="bold">Acessar meu perfil no LinkedIn</Text>
              <Text fontSize="x-small">{language.contact.linkedin}</Text>
            </VStack>
          </HStack>

          <HStack
            as={Link}
            // @ts-ignore
            href={language.contact.instagram}
            w="full"
            p={4}
            gap={4}
            align="center"
            justify="center"
            bg="bg.subtle"
            borderRadius="md"
            aria-label="Acessar meu perfil no Instagram"
            role="link"
            isExternal
          >
            <InstagramIcon size={22} />
            <VStack flex={1} align="start" gap={0}>
              <Text fontWeight="bold">Instagram</Text>
              <Text fontSize="x-small">@{language.contact.instagram}</Text>
            </VStack>
          </HStack>
        </VStack>
      </Container>
    </>
  );
}
