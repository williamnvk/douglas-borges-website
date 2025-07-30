import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import { siteUrl } from "@/data/site-constants";

export const metadata = {
  title: "Palestras e Eventos",
  description: "Conteúdo especializado para transformar sua organização",
  openGraph: {
    title: "Palestras e Eventos",
    description: "Conteúdo especializado para transformar sua organização",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/palestras-e-eventos`,
  },
};

export default function EventsPage() {
  const events = [
    {
      image: "/assets/palestras/ensinando-a-ensinar.jpg",
      slug: "ensinando-a-ensinar-aprendendo-a-aprender-aprenendo-a-ensinar",
      title: "Ensinando a Ensinar, Aprendendo a Aprender e Aprendendo a Ensinar",
      description: "Explora métodos práticos para desenvolver habilidades de ensino e aprendizado contínuo, fortalecendo a troca de conhecimento.",
      duration: "1h",
      format: "Presencial ou Online"
    },
    {
      image: "/assets/palestras/ansiedade.jpg",
      slug: "palestra-controlar-ansiedade",
      title: "Como controlar a ansiedade",
      description: "Combinando conteúdos práticos e ferramentas exclusivas usadas em orientações psicológicas, conheça às técnicas para controlar a Ansiedade.",
      duration: "2h",
      format: "Presencial"
    },
    {
      image: "/assets/palestras/problema.webp",
      slug: "palestra-viva-sua-historia",
      title: "O que eu faço com um PROBLEMA",
      description: "Existe todo um processo mental quando se trata de um problema. Seja para percebê-lo e/ou para resolvê-lo. O mais importante de tudo é saber que para ser chamado de problema!",
      duration: "1h30m",
      format: "Presencial ou Online"
    },
    {
      image: "/assets/palestras/protocolos-comportamentais.jpg",
      slug: "novos-protocolos-comportamentais",
      title: "Novos Protocolos Comportamentais",
      description: "apresenta uma abordagem inovadora para aprimorar a comunicação interpessoal, focada em empatia, clareza e compreensão mútua.",
      duration: "1h",
      format: "Presencial ou Online"
    }
  ];

  return (
    <>
      <Header />

      <Container
        maxW="8xl"
        py={{ base: 8, md: 16 }}
        mt={HEADER_NAVBAR_HEIGHT}
      >
        <VStack w="full" align="flex-start" gap={8}>
          <VStack align="flex-start" gap={2}>
            <Heading size="2xl">Palestras e Eventos</Heading>
            <Text fontSize="lg" color="fg.muted">
              Conteúdo especializado para transformar sua organização
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={{ base: 4, md: 8 }}
            w="full"
          >
            {events.map((event, index) => (
              <VStack
                key={`event-${index}`}
                // p={{ base: 4, md: 8 }}
                // bg="bg.subtle"
                borderRadius="lg"
                align="flex-start"
                gap={4}
                data-aos="fade-up"
              >
                <Box
                  w="full"
                  h="300px"
                  borderRadius="lg"
                  backgroundImage={`url(${event.image})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
                <Heading size="lg">{event.title}</Heading>
                <Text>{event.description}</Text>
                <HStack gap={4}>
                  <Text fontSize="sm" color="fg.muted">
                    Duração: {event.duration}
                  </Text>
                  <Text fontSize="sm" color="fg.muted">
                    {event.format}
                  </Text>
                </HStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Container
        maxW="8xl"
        pb={{ base: 4, md: 12 }}
        pt={{ base: 0, md: 12 }}
      >
        <VStack
          mx={{ base: 0, md: "auto" }}
          p={{ base: 8, md: 24 }}
          maxW="8xl"
          bg="bg.subtle"
          borderRadius="lg"
          flex={1}
          align={{ base: "flex-start", md: "flex-start" }}
          justify={{ base: "center", md: "flex-end" }}
        >
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
          >
            Interessado em uma palestra?
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            my={2}
          >
            Entre em contato para mais informações sobre valores e disponibilidade.
          </Text>
          <Button
            as="a"
            // @ts-expect-error: Type compatibility issue
            href="https://wa.me/5542988381261?text=Olá!%20Estou%20interessado(a)%20em%20contratar%20uma%20das%20palestras%20do%20Douglas%20Borges."
            target="_blank"
            referrerPolicy="no-referrer"
            variant="outline"
            size="lg"
            w={{ base: "full", md: "auto" }}
          >
                          Agendar Palestra
          </Button>
        </VStack>
      </Container>
    </>
  );
}
