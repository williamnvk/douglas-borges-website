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
import language, { siteUrl } from "@/data/dictionaries";

export const metadata = {
  title: language.services.title,
  description: language.services.subtitle,
  openGraph: {
    title: language.services.title,
    description: language.contact.subtitle,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/palestras-e-eventos`,
  },
};

export default function EventsPage() {
  const intl = language;
  const events = intl.topics.items;

  return (
    <>
      <Header page="events" />

      <Container
        maxW="container.xl"
        py={{ base: 8, md: 16 }}
        mt={HEADER_NAVBAR_HEIGHT}
      >
        <VStack w="full" align="flex-start" spacing={8}>
          <VStack align="flex-start" spacing={2}>
            <Heading size="2xl">{intl.topics.title}</Heading>
            <Text fontSize="lg" color="gray.600">
              {intl.topics.subtitle}
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 4, md: 8 }}
            w="full"
          >
            {events.map((event, index) => (
              <VStack
                key={`event-${index}`}
                // p={{ base: 4, md: 8 }}
                // bg="gray.50"
                borderRadius="lg"
                align="flex-start"
                spacing={4}
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
        </VStack>
      </Container>

      <Container
        maxW="container.xl"
        pb={{ base: 4, md: 12 }}
        pt={{ base: 0, md: 12 }}
      >
        <VStack
          mx={{ base: 0, md: "auto" }}
          p={{ base: 8, md: 24 }}
          maxW="container.xl"
          bg="gray.50"
          borderRadius="lg"
          flex={1}
          align={{ base: "flex-start", md: "flex-start" }}
          justify={{ base: "center", md: "flex-end" }}
          data-aos="fade-up"
        >
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            color="gray.900"
            data-aos="fade-up"
          >
            {intl.topics.cta.title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            my={2}
            data-aos="fade-up"
          >
            {intl.topics.cta.subtitle}
          </Text>
          <Button
            as="a"
            href="https://wa.me/5542988381261?text=Olá!%20Estou%20interessado(a)%20em%20contratar%20uma%20das%20palestras%20do%20Douglas%20Borges."
            target="_blank"
            referrerPolicy="no-referrer"
            variant="outline"
            size="lg"
            w={{ base: "full", md: "auto" }}
            data-aos="fade-up"
          >
            {intl.topics.cta.button}
          </Button>
        </VStack>
      </Container>
    </>
  );
}
