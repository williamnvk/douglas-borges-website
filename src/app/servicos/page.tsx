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
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "@/theme/consts";
import language from "@/data/dictionaries";

export default function Services() {
  const intl = language;

  return (
    <>
      <Header page="services" />
      <Container
        maxW={{ base: "full", md: "container.xl" }}
        mt={HEADER_NAVBAR_HEIGHT}
        pt={{ base: 4, md: 8 }}
      >
        <VStack gap={{ base: 4, md: 8 }} w="full">
          <Stack
            flexDir={{ base: "column-reverse", md: "row" }}
            w="full"
            gap={{ base: 2, md: 16 }}
            align="stretch"
            justify="stretch"
          >
            <VStack gap={2} flex={1} align="flex-start">
              <Badge fontWeight="light">{intl.services.title}</Badge>

              <Heading
                fontSize={{ base: "4xl", md: "6xl" }}
                color="gray.900"
                data-aos="fade-up"
              >
                {intl.services.hero.title}
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "lg" }}
                color="gray.600"
                my={2}
                data-aos="fade-up"
              >
                {intl.services.hero.subtitle}
              </Text>
              <Button
                as="a"
                href="#presencial-ou-online"
                variant="outline"
                size="lg"
                w={{ base: "full", md: "auto" }}
              >
                {intl.services.hero.button}
              </Button>
            </VStack>
            <Box
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
            id="presencial-ou-online"
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={{ base: 4, md: 8 }}
          >
            <VStack
              gap={4}
              flex={1}
              align="flex-start"
              bg="gray.900"
              p={{ base: 4, md: 16 }}
              borderRadius="lg"
              justify="flex-end"
              color="gray.50"
              pt={{ base: 8, md: 32 }}
            >
              <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold">
                {intl.services.presential.title}
              </Heading>
              <Text fontSize="xl">{intl.services.presential.subtitle}</Text>
              <Text fontSize="smaller">
                {intl.services.presential.description}
              </Text>
              <Flex gap={{ base: 1, md: 2 }} flexWrap="wrap">
                {intl.services.presential.items.map((i) => (
                  <Badge
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
              borderColor="gray.900"
              p={{ base: 4, md: 16 }}
              borderRadius="lg"
              justify="flex-end"
              color="gray.900"
              pt={{ base: 8, md: 32 }}
            >
              <Heading fontSize="6xl" fontWeight="bold">
                {intl.services.online.title}
              </Heading>
              <Text fontSize="xl">{intl.services.online.subtitle}</Text>
              <Text fontSize="smaller">{intl.services.online.description}</Text>
              <Flex gap={{ base: 1, md: 2 }} flexWrap="wrap">
                {intl.services.online.items.map((i) => (
                  <Badge p={1.5} fontWeight="light" key={i}>
                    {i}
                  </Badge>
                ))}
              </Flex>
            </VStack>
          </SimpleGrid>

          <VStack
            w="full"
            borderWidth={4}
            borderColor="gray.100"
            borderRadius="lg"
          >
            <HStack
              w="full"
              borderBottomWidth={1}
              borderBottomColor="gray.100"
              px={{ base: 2, md: 3 }}
              py={{ base: 4, md: 6 }}
              align="center"
              justify="center"
            >
              <Text
                w={{ base: "full", md: "300px" }}
                fontWeight="bold"
                display={{ base: "none", md: "block" }}
              >
                Aspecto
              </Text>
              <HStack flex={1} align="center" justify="center">
                <Text flex={1} fontWeight="bold">
                  Benefícios do Atendimento Presencial
                </Text>
                <Text flex={1} fontWeight="bold">
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
              >
                <Heading
                  w={{ base: "full", md: "300px" }}
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign={{ base: "center", md: "left" }}
                >
                  {t.aspect}
                </Heading>
                <HStack flex={1}>
                  <Text flex={1}>{t.benefits.presential}</Text>
                  <Text flex={1}>{t.benefits.online}</Text>
                </HStack>
              </Stack>
            ))}
          </VStack>
        </VStack>

        <VStack
          mt={{ base: 4, md: 8 }}
          gap={8}
          w="full"
          align={{ base: "flex-start", md: "flex-start" }}
        >
          <Heading fontSize="xl">{intl.services.faq.title}</Heading>
          <Accordion w="full" variant="light">
            {intl.services.faq.questions.map((q) => (
              <AccordionItem key={`faq-q-${q.title}`}>
                <AccordionButton>
                  <Box
                    as="span"
                    pr={{ base: 4, md: 8 }}
                    flex="1"
                    textAlign="left"
                  >
                    {q.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={{ base: "smaller", md: "sm" }}>
                  {q.description}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
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
            {intl.services.cta.title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            my={2}
            data-aos="fade-up"
          >
            {intl.services.cta.subtitle}
          </Text>
          <Button
            as="a"
            href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges."
            target="_blank"
            referrerPolicy="no-referrer"
            variant="outline"
            size="lg"
            w={{ base: "full", md: "auto" }}
            data-aos="fade-up"
          >
            {intl.services.cta.button}
          </Button>
        </VStack>
      </Container>
    </>
  );
}
