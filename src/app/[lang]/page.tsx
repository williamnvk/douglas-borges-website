import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { getDictionary, Locale } from "./dictionaries";
import { WordTransition } from "./components/WordTransition";
import { ArrowBigRight, PlusIcon, QuoteIcon } from "lucide-react";
import { Header } from "@/components/shared/Header";
import CardStack from "./components/CardStack";
import Testimonials from "./components/Testimonials";
import Icon from "@/components/shared/DynamicIcon";

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

export default async function Home(props: Props) {
  const params = await props.params;

  const { lang } = params;

  const intl = await getDictionary(lang);
  const header = "72px";

  return (
    <>
      <Header lang={lang} page="home" />
      <Box bg="gray.50">
        <Container maxW="container.xl" py={0}>
          <VStack
            w={{ base: "full", md: "container.md" }}
            align="center"
            justify="center"
            gap={{ base: 4, md: 8 }}
            mb={{ base: 4, md: 16 }}
            p={0}
            minH={`calc(100vh - ${header})`}
          >
            <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="light">
              <WordTransition typewriter words={intl.home.firstWord} />
              <br />
              <strong>
                <WordTransition
                  typewriter
                  words={intl.home.secondWord}
                  delay={5000}
                />
              </strong>{" "}
              {intl.home.subtitle}
            </Heading>

            <Flex w="full" align="flex-start" my={{ base: 4, md: 0 }}>
              <Button
                size="lg"
                data-aos="fade-up"
                w={{ base: "full", md: "auto" }}
              >
                {intl.home.button}
              </Button>
            </Flex>

            <Box position="relative" data-aos="fade-up" mt={{ base: 2, md: 0 }}>
              <QuoteIcon size={32} style={{ position: "absolute", right: 0 }} />
              <Text
                fontSize="sm"
                fontStyle="italic"
                fontWeight="light"
                pr={16}
                color="gray.800"
              >
                {intl.home.bible.content}
              </Text>
              <Text fontSize="smaller" fontStyle="italic" color="gray.400">
                {intl.home.bible.verse}
              </Text>
            </Box>

            <SimpleGrid
              gap={4}
              w="full"
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            >
              {intl.home.counting.map((c, i) => (
                <VStack
                  key={`home-counting-${i}`}
                  align="flex-start"
                  p={{ base: 4, md: 6 }}
                  borderRadius="lg"
                  bg="white"
                  data-aos="fade-up"
                  data-aos-delay={i * 200}
                  boxShadow="md"
                >
                  <Heading letterSpacing={2} fontSize="4xl">
                    <PlusIcon style={{ display: "inline" }} />
                    {c.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.300">
                    {c.description}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <VStack
          w={{ base: "full", md: "container.md" }}
          align="flex-start"
          gap={{ base: 4, md: 8 }}
          mb={{ base: 4, md: 16 }}
          p={0}
          minH={`calc(100vh - ${header})`}
        >
          <Heading
            maxW={{ base: "full", md: "450px" }}
            fontSize={{ base: "4xl", md: "7xl" }}
            data-aos="fade-up"
            mt={{ base: 8, md: "25vh" }}
          >
            {intl.home.about.title}
          </Heading>

          {intl.home.about.description.map((p, i) => (
            <Text
              fontSize={{ base: "sm", md: "larger" }}
              key={`home-about-${i}`}
              data-aos="fade-up"
            >
              {p}
            </Text>
          ))}
          <Text data-aos="fade-up">{intl.home.about.subtitle}</Text>
          <Text fontSize="small" data-aos="fade-up">
            CRP/PR 08-21013 · CRP/SC 12-13884
          </Text>
        </VStack>
      </Container>

      <Container maxW="container.xl">
        <CardStack cards={intl.home.person.fellings} />
      </Container>

      <Container maxW="container.xl">
        <VStack
          gap={0}
          w="full"
          minH={`calc(100vh - ${header})`}
          py={{ base: 6, md: 12 }}
          align={{ base: "flex-start", md: "flex-start" }}
          justify={{ base: "center", md: "center" }}
        >
          <Heading
            color="gray.900"
            fontSize={{ base: "4xl", md: "6xl" }}
            my={{ base: 6, md: 0 }}
          >
            {intl.home.services.title}
          </Heading>
          <Box w="full" mt={{ base: 4, md: 16 }}>
            <SimpleGrid
              gap={{ base: 2, md: 6 }}
              w="full"
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            >
              {intl.home.services.items.map((s, i) => (
                <VStack
                  key={`slider-list-${i}`}
                  align="flex-start"
                  borderRadius="lg"
                  p={{ base: 4, md: 8 }}
                  bg="white"
                  minH={{ base: "auto", md: "320px" }}
                  boxShadow="md"
                >
                  <VStack align="flex-start" color="gray.900">
                    <Icon size={32} name={s.icon as never} />
                    <Heading fontSize="3xl" w="full">
                      {s.title}
                    </Heading>
                    <Text color="gray.800" fontSize="small" my={4}>
                      {s.description}
                    </Text>
                  </VStack>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>

      <Box alignContent="center" bg="gray.900">
        <Container maxW="container.xl">
          <VStack
            gap={0}
            w="full"
            h={`calc(100vh - ${header})`}
            align={{ base: "flex-start", md: "flex-start" }}
            justify={{ base: "center", md: "center" }}
          >
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              color="gray.50"
              pr={{ base: 12, md: "0" }}
            >
              {intl.testimonials.title}
            </Heading>
            <Text color="gray.50">{intl.testimonials.subtitle}</Text>
            <Box w="full" mt={{ base: 4, md: 16 }}>
              <Testimonials items={intl.testimonials.items} />
            </Box>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
        <VStack w="full" gap={8} align="flex-start">
          <HStack w="full">
            <Heading flex={1}>{intl.topics.title}</Heading>
            <HStack gap={4}>
              <Button as="a" href="/contato" variant="outline">
                {intl.topics.cta}
              </Button>
              <Button as="a" href="/palestras" variant="link">
                {intl.topics.link}
              </Button>
            </HStack>
          </HStack>
          <SimpleGrid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            spacing={{ base: 4, md: 8 }}
          >
            {intl.topics.items.map((s, i) => (
              <VStack
                as="a"
                href="/"
                key={`home-topics-${i}`}
                w="full"
                align="flex-start"
                justify="flex-start"
                gap={4}
              >
                <VStack flex={1} w="full" align="flex-start">
                  <Box
                    w="full"
                    borderRadius="lg"
                    h={{ base: "110px", md: "200px" }}
                    style={{
                      backgroundImage: `url(${s.image})`,
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      transition: "all 0.3s ease-in-out",
                    }}
                    backgroundSize={{ base: "100% auto", md: "auto 100%" }}
                    filter="grayscale(1)"
                    _hover={{
                      filter: "grayscale(0)",
                    }}
                  />
                  <Heading
                    fontSize={{ base: "xl", md: "2xl" }}
                    h={{ base: "auto", md: "90x" }}
                  >
                    {s.title}
                  </Heading>
                  <Text fontSize="smaller">{s.description}</Text>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Container maxW="container.md" my={{ base: 8, md: 32 }}>
        <VStack
          minH={`calc(50vh - ${header})`}
          flex={1}
          align={{ base: "flex-start", md: "center" }}
          justify={{ base: "center", md: "center" }}
        >
          <ArrowBigRight size={48} />
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            textAlign={{ base: "left", md: "center" }}
          >
            {intl.home.cta.title}
          </Heading>
          <Text
            textAlign={{ base: "left", md: "center" }}
            fontSize={{ base: "sm", md: "xl" }}
          >
            {intl.home.cta.subtitle}
          </Text>
          <Button size="lg" w={{ base: "full", md: "auto" }}>
            {intl.home.cta.button}
          </Button>
        </VStack>
      </Container>
    </>
  );
}
