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
import language, { siteUrl } from "@/data/dictionaries";

export const metadata = {
  title: language.topics.title,
  description: language.topics.subtitle,
  openGraph: {
    title: language.topics.title,
    description: language.topics.subtitle,
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
  const intl = language;
  const events = intl.topics.items;

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
            <Heading size="2xl">{intl.topics.title}</Heading>
            <Text fontSize="lg" color="fg.muted">
              {intl.topics.subtitle}
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
            {intl.topics.cta.title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            my={2}
          >
            {intl.topics.cta.subtitle}
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
            {intl.topics.cta.button}
          </Button>
        </VStack>
      </Container>
    </>
  );
}
