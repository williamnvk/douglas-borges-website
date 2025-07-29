import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  SimpleGrid,
  Badge,
  HStack,
  Accordion,
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import language, { siteUrl } from "@/data/dictionaries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${language.services.title} | Douglas Borges | Psicólogo`,
  description: language.services.subtitle,
  openGraph: {
    title: `${language.services.title} | Douglas Borges | Psicólogo`,
    description: language.services.subtitle,
    type: "website",
    url: `${siteUrl}/servicos`,
    locale: "pt_BR",
    siteName: "Douglas Borges - Psicólogo",
  },
  twitter: {
    card: "summary_large_image",
    title: `${language.services.title} | Douglas Borges | Psicólogo`,
    description: language.services.subtitle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: `${siteUrl}/servicos`,
  },
};

export default function Services() {
  const intl = language;

  return (
    <main>
      <Header />
      <Container
        as="section"
        maxW={{ base: "full", md: "8xl" }}
        mt={HEADER_NAVBAR_HEIGHT}
        pt={{ base: 4, md: 8 }}
      >
        <VStack gap={{ base: 4, md: 8 }} w="full">
          <Stack
            as="section"
            flexDir={{ base: "column-reverse", md: "row" }}
            w="full"
            gap={{ base: 2, md: 16 }}
            align="stretch"
            justify="stretch"
          >
            <VStack gap={2} flex={1} align="flex-start">
              <Badge fontWeight="light" aria-label="Seção de Serviços">
                {intl.services.title}
              </Badge>

              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl" }}
                
              >
                {intl.services.hero.title}
              </Heading>
              <Text fontSize={{ base: "lg", md: "lg" }} my={2}>
                {intl.services.hero.subtitle}
              </Text>
              <Button
                asChild
                variant="outline"
                size="lg"
                w={{ base: "full", md: "auto" }}
                aria-label="Saiba mais sobre atendimento presencial e online"
              >
                <a href="#presencial-ou-online">{intl.services.hero.button}</a>
              </Button>
            </VStack>
            <Box
              role="img"
              aria-label="Ilustração de atendimento psicológico"
              w={{ base: "full", md: "640px" }}
              h={{ base: "400px", md: "auto" }}
              mx={{ base: "auto", md: "0" }}
              borderRadius="lg"
              display="block"
              style={{
                backgroundImage: "url(/assets/desktop.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto 100%",
                backgroundPosition: "center center",
              }}
            ></Box>
          </Stack>

          <SimpleGrid
            as="section"
            id="presencial-ou-online"
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={{ base: 4, md: 8 }}
            aria-label="Comparação entre atendimento presencial e online"
          >
            <VStack
              gap={4}
              flex={1}
              align="flex-start"
              bg="gray.900"
              p={{ base: 4, md: 16 }}
              borderRadius="lg"
              justify="flex-end"
              color="bg.subtle"
              pt={{ base: 8, md: 32 }}
              role="region"
              aria-labelledby="presential-title"
            >
              <Heading
                id="presential-title"
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="bold"
              >
                {intl.services.presential.title}
              </Heading>
              <Text fontSize="xl">{intl.services.presential.subtitle}</Text>
              <Text fontSize="smaller">
                {intl.services.presential.description}
              </Text>
              <Flex gap={{ base: 1, md: 2 }} flexWrap="wrap" role="list">
                {intl.services.presential.items.map((i) => (
                  <Badge
                    role="listitem"
                    p={1.5}
                    fontWeight="light"
                    key={i}
                    bg="gray.800"
                    color="gray.100"
                  >
                    {i}
                  </Badge>
                ))}
              </Flex>
            </VStack>
            <VStack
              gap={4}
              flex={1}
              align="flex-start"
              bg="white"
              borderWidth={4}
              border
              p={{ base: 4, md: 16 }}
              borderRadius="lg"
              justify="flex-end"
              
              pt={{ base: 8, md: 32 }}
              role="region"
              aria-labelledby="online-title"
            >
              <Heading id="online-title" fontSize="6xl" fontWeight="bold">
                {intl.services.online.title}
              </Heading>
              <Text fontSize="xl">{intl.services.online.subtitle}</Text>
              <Text fontSize="smaller">{intl.services.online.description}</Text>
              <Flex gap={{ base: 1, md: 2 }} flexWrap="wrap" role="list">
                {intl.services.online.items.map((i) => (
                  <Badge role="listitem" p={1.5} fontWeight="light" key={i}>
                    {i}
                  </Badge>
                ))}
              </Flex>
            </VStack>
          </SimpleGrid>

          <VStack
            as="section"
            w="full"
            borderWidth={4}
            borderColor="gray.100"
            borderRadius="lg"
            role="table"
            aria-label="Comparação detalhada entre atendimento presencial e online"
          >
            <HStack
              w="full"
              borderBottomWidth={1}
              borderBottomColor="gray.100"
              px={{ base: 2, md: 3 }}
              py={{ base: 4, md: 6 }}
              align="center"
              justify="center"
              role="row"
            >
              <Text
                w={{ base: "full", md: "300px" }}
                fontWeight="bold"
                display={{ base: "none", md: "block" }}
                role="columnheader"
              >
                Aspecto
              </Text>
              <HStack flex={1} align="center" justify="center">
                <Text flex={1} fontWeight="bold" role="columnheader">
                  Benefícios do Atendimento Presencial
                </Text>
                <Text flex={1} fontWeight="bold" role="columnheader">
                  Benefícios do Atendimento Online
                </Text>
              </HStack>
            </HStack>
            {intl.services.table.map((t, i) => (
              <Stack
                flexDir={{ base: "column", md: "row" }}
                key={`services-${i}`}
                w="full"
                align="center"
                justify="center"
                borderBottomWidth={1}
                borderBottomColor="gray.100"
                p={{ base: 2, md: 3 }}
                role="row"
              >
                <Heading
                  as="h3"
                  w={{ base: "full", md: "300px" }}
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign={{ base: "center", md: "left" }}
                  role="rowheader"
                >
                  {t.aspect}
                </Heading>
                <HStack flex={1}>
                  <Text flex={1} role="cell">
                    {t.benefits.presential}
                  </Text>
                  <Text flex={1} role="cell">
                    {t.benefits.online}
                  </Text>
                </HStack>
              </Stack>
            ))}
          </VStack>
        </VStack>

        <HStack
          as="section"
          mt={{ base: 4, md: 8 }}
          gap={8}
          w="full"
          align="stretch"
          justify="stretch"
          flexDir={{ base: "column", md: "row" }}
        >
          <VStack
            flex={1}
            align={{ base: "flex-start", md: "flex-start" }}
            p={{ base: 4, md: 8 }}
            borderWidth={4}
            border
            borderRadius="lg"
            justify="flex-end"
          >
            <Text fontSize="md">{intl.services.try.title}</Text>
            <Heading as="h2" fontSize="4xl">
              {intl.services.try.subtitle}
            </Heading>
            <Text fontSize="sm">{intl.services.try.description}</Text>
          </VStack>
          <VStack flex={{ base: 1, md: 2 }} align="flex-start" gap={4}>
            <Heading as="h2" fontSize="xl">
              {intl.services.faq.title}
            </Heading>

            <Accordion.Root collapsible>
              {intl.services.faq.questions.map((q) => (
                <Accordion.Item key={`faq-q-${q.title}`} value={q.title}>
                  <Accordion.ItemTrigger>
                    <Box
                      as="span"
                      pr={{ base: 4, md: 8 }}
                      flex="1"
                      textAlign="left"
                    >
                      {q.title}
                    </Box>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody
                      pb={4}
                      fontSize={{ base: "smaller", md: "sm" }}
                    >
                      {q.description}
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </VStack>
        </HStack>
      </Container>

      <Container
        as="section"
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
            as="h2"
            fontSize={{ base: "4xl", md: "6xl" }}
            
          >
            {intl.services.cta.title}
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" my={2}>
            {intl.services.cta.subtitle}
          </Text>
          <Button
            asChild
            variant="outline"
            size="lg"
            w={{ base: "full", md: "auto" }}
            aria-label="Agendar consulta via WhatsApp"
          >
            <a
              href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo."
              target="_blank"
              rel="noopener noreferrer"
            >
              {intl.services.cta.button}
            </a>
          </Button>
        </VStack>
      </Container>
    </main>
  );
}
