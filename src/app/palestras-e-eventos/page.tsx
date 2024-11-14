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
import { HEADER_NAVBAR_HEIGHT } from "@/theme/consts";

export default function EventsPage() {
  const events = [
    {
      title: "Liderança Transformadora",
      description:
        "Como desenvolver uma liderança que inspira e transforma equipes",
      image: "/assets/palestras/ansiedade.jpg",
      duration: "1h30",
      format: "Presencial ou Online",
    },
    {
      title: "Cultura Organizacional",
      description:
        "Construindo uma cultura forte e alinhada com os valores da empresa",
      image: "/assets/palestras/ensinando-a-ensinar.jpg",
      duration: "2h",
      format: "Presencial ou Online",
    },
    {
      title: "Gestão de Mudanças",
      description: "Estratégias para conduzir transformações organizacionais",
      image: "/assets/palestras/problema.webp",
      duration: "1h30",
      format: "Presencial ou Online",
    },
    {
      title: "Desenvolvimento de Times",
      description:
        "Técnicas para formar e desenvolver equipes de alta performance",
      image: "/assets/palestras/protocolos-comportamentais.jpg",
      duration: "2h",
      format: "Presencial ou Online",
    },
  ];

  return (
    <>
      <Header page="events" />
      <Box mt={HEADER_NAVBAR_HEIGHT}>
        <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
          <VStack w="full" align="flex-start" spacing={8}>
            <VStack align="flex-start" spacing={2}>
              <Heading size="2xl">Palestras e Eventos</Heading>
              <Text fontSize="lg" color="gray.600">
                Conteúdo especializado para transformar sua organização
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {events.map((event, index) => (
                <VStack
                  key={`event-${index}`}
                  p={8}
                  bg="gray.50"
                  borderRadius="lg"
                  align="flex-start"
                  spacing={4}
                >
                  <Box
                    w="full"
                    h="200px"
                    borderRadius="lg"
                    backgroundImage={`url(${event.image})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                  />
                  <Heading size="lg">{event.title}</Heading>
                  <Text>{event.description}</Text>
                  <HStack spacing={4}>
                    <Text fontSize="sm" color="gray.500">
                      Duração: {event.duration}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {event.format}
                    </Text>
                  </HStack>
                </VStack>
              ))}
            </SimpleGrid>

            <VStack
              w="full"
              p={8}
              bg="gray.900"
              borderRadius="lg"
              spacing={4}
              align="flex-start"
            >
              <Heading color="white" size="lg">
                Interessado em uma palestra?
              </Heading>
              <Text color="gray.300">
                Entre em contato para mais informações sobre valores e
                disponibilidade.
              </Text>
              <Button
                as="a"
                href="https://wa.me/5542988381261?text=Olá!%20Estou%20interessado(a)%20em%20contratar%20uma%20das%20palestras%20do%20Douglas%20Borges."
                target="_blank"
                size="lg"
                colorScheme="whiteAlpha"
              >
                Agendar Palestra
              </Button>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
