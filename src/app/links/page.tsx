import { Header } from "@/components/shared/Header";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import language from "@/data/dictionaries";
import { HEADER_NAVBAR_HEIGHT } from "@/theme/consts";
import { Container, HStack, Text, VStack, Link, Box } from "@chakra-ui/react";
import {
  HomeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";

export default function LinksPage() {
  return (
    <>
      <Header page="links" />
      <Container maxW="container.md" mt={HEADER_NAVBAR_HEIGHT}>
        <VStack
          align="center"
          justify="center"
          minH={{ base: "50vh", md: `calc(80vh - ${HEADER_NAVBAR_HEIGHT})` }}
          py={{ base: 0, md: 16 }}
        >
          <VStack w="full" gap={2}>
            <Box
              as="section"
              w={{ base: "full", md: "full" }}
              h={{ base: "220px", md: "320px" }}
              mx={{ base: "auto", md: "0" }}
              borderRadius="lg"
              display="block"
              backgroundPosition={{
                base: "center -240px",
                md: "center -540px",
              }}
              style={{
                backgroundImage: "url(/assets/falando.webp)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              role="img"
              aria-label={"Foto de perfil"}
            ></Box>

            <HStack
              as={Link}
              href="/"
              w="full"
              p={4}
              align="center"
              gap={4}
              bg="gray.50"
              borderRadius="md"
              aria-label="Página Inicial do Site"
              role="link"
            >
              <HomeIcon size={22} />
              <VStack flex={1} align="start" gap={0}>
                <Text fontSize="sm" fontWeight="bold">
                  Página Inicial do Site
                </Text>
                <Text fontSize="x-small">Novidades no site</Text>
              </VStack>
            </HStack>
            <HStack
              as={Link}
              href="https://api.whatsapp.com/send/?phone=5542988381261&text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+site+do+Douglas+Borges.&type=phone_number&app_absent=0"
              w="full"
              p={8}
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
              href={`mailto:${language.contact.email}`}
              w="full"
              p={4}
              gap={4}
              align="center"
              justify="center"
              bg="gray.50"
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
              href={language.contact.linkedin}
              w="full"
              p={4}
              gap={4}
              align="center"
              justify="center"
              bg="gray.50"
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
              href={language.contact.instagram}
              w="full"
              p={4}
              gap={4}
              align="center"
              justify="center"
              bg="gray.50"
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

            <HStack
              as={Link}
              href={language.contact.maps}
              w="full"
              p={4}
              gap={4}
              align="center"
              justify="center"
              bg="gray.50"
              borderRadius="md"
              aria-label="Veja meu endereço no mapa"
              role="link"
              isExternal
            >
              <MapPinIcon size={22} />
              <VStack flex={1} align="start" gap={0}>
                <Text fontWeight="bold">Localização</Text>
                <address>
                  {language.contact.address.map((item) => (
                    <Text key={item} fontSize="x-small">
                      {item}
                    </Text>
                  ))}
                </address>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </>
  );
}
