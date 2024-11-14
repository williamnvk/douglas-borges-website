import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { WordTransition } from "./components/WordTransition";
import { PlusIcon, QuoteIcon } from "lucide-react";
import { Header } from "@/components/shared/Header";
import CardStack from "./components/CardStack";
import Testimonials from "./components/Testimonials";
import Icon from "@/components/shared/DynamicIcon";
import { HEADER_NAVBAR_HEIGHT } from "@/theme/consts";
import language from "@/data/dictionaries";
import { INSIGHTS_HIGHLIGHTS } from "@/data";
import Link from "next/link";

export default function Home() {
  const intl = language;

  return (
    <>
      <Header page="home" />
      <Box bgGradient="linear(to-t, white, gray.100)" mt={HEADER_NAVBAR_HEIGHT}>
        <Container maxW="container.xl" py={0}>
          <Stack
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: 4, md: 16 }}
            align="center"
            justify="center"
          >
            <VStack
              flex={1}
              align="flex-start"
              justify="center"
              gap={{ base: 4, md: 8 }}
              h={`calc(100vh - ${HEADER_NAVBAR_HEIGHT})`}
            >
              <Heading
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="normal"
              >
                <strong>
                  <WordTransition typewriter words={intl.home.firstWord} />
                </strong>
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
                  as="a"
                  href="/empresas"
                  size="lg"
                  data-aos="fade-up"
                  w={{ base: "full", md: "auto" }}
                >
                  {intl.home.button}
                </Button>
              </Flex>

              <Box
                position="relative"
                data-aos="fade-up"
                mt={{ base: 2, md: 0 }}
              >
                <QuoteIcon
                  size={32}
                  style={{ position: "absolute", right: 0 }}
                />
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
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
              >
                {intl.home.counting.map((c, i) => (
                  <VStack
                    key={`home-counting-${i}`}
                    align="flex-start"
                    p={{ base: 4, md: 5 }}
                    borderRadius="lg"
                    bg="white"
                    data-aos="fade-up"
                    data-aos-delay={i * 200}
                    boxShadow="2xl"
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
            <Box
              w={{ base: "full", md: "400px" }}
              h={{ base: "400px", md: "600px" }}
              mx={{ base: "auto", md: "0" }}
              borderRadius="lg"
              display="block"
              style={{
                backgroundImage: "url(/assets/rindo.webp)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "100% auto",
              }}
            ></Box>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <VStack
          w={{ base: "full", md: "full" }}
          align="flex-start"
          gap={{ base: 4, md: 8 }}
          py={{ base: 4, md: 32 }}
        >
          <Heading
            // maxW={{ base: "full", md: "450px" }}
            fontSize={{ base: "4xl", md: "7xl" }}
            data-aos="fade-up"
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

        <CardStack cards={intl.home.person.fellings} />

        <VStack
          gap={0}
          w="full"
          minH={{ base: "auto", md: `calc(100vh - ${HEADER_NAVBAR_HEIGHT})` }}
          py={{ base: 8, md: 16 }}
          align={{ base: "flex-start", md: "flex-start" }}
          justify={{ base: "center", md: "center" }}
        >
          <Heading
            color="gray.900"
            fontSize={{ base: "2xl", md: "4xl" }}
            data-aos="fade-up"
          >
            {intl.home.services.title}
          </Heading>
          <SimpleGrid
            gap={{ base: 2, md: 6 }}
            mt={{ base: 8, md: 16 }}
            w="full"
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          >
            {intl.home.services.items.map((s, i) => (
              <VStack
                key={`slider-list-${i}`}
                align="flex-start"
                borderRadius="lg"
                p={8}
                bg="white"
                boxShadow="2xl"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <VStack align="flex-start" color="gray.900">
                  <HStack align="center" justify="center" gap={4}>
                    <Flex
                      borderRadius="full"
                      w="64px"
                      h="64px"
                      mx="auto"
                      bg="gray.900"
                      align="center"
                      justify="center"
                      color="white"
                      boxShadow="xl"
                    >
                      <Icon size={32} name={s.icon as never} />
                    </Flex>

                    <Heading fontSize={{ base: "xl", md: "2xl" }} flex={1}>
                      {s.title}
                    </Heading>
                  </HStack>
                  <Text color="gray.800" fontSize="small" my={4}>
                    {s.description}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Box alignContent="center" bg="gray.900" py={{ base: 12, md: 0 }}>
        <Container maxW="container.xl">
          <VStack
            gap={0}
            w="full"
            minH={{ base: "auto", md: `calc(100vh - ${HEADER_NAVBAR_HEIGHT})` }}
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
              <Button
                as="a"
                target="_blank"
                href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Estou%20interessado(a)%20em%20contratar%20uma%20das%20palestras%20do%20Douglas%20Borges."
                referrerPolicy="no-referrer"
                variant="outline"
              >
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

      <Container maxW="container.xl" py={{ base: 4, md: 12 }}>
        <VStack w="full" align="flex-start" gap={8}>
          <HStack w="full" justify="space-between" align="center">
            <Heading fontSize={{ base: "2xl", md: "4xl" }}>
              Insights e Reflexões
            </Heading>
            <Button
              as="a"
              href="/insights"
              variant="ghost"
              rightIcon={<PlusIcon size={16} />}
            >
              Ver todos
            </Button>
          </HStack>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 4, md: 8 }}
            w="full"
          >
            {INSIGHTS_HIGHLIGHTS.slice(0, 3).map((insight, index) => (
              <VStack
                key={`highlight-${index}`}
                as="a"
                href={`/${insight.slug}`}
                align="flex-start"
                p={8}
                bg="gray.50"
                borderRadius="lg"
                transition="all 0.2s"
                _hover={{ bg: "gray.100" }}
              >
                <Heading size="md" mb={2}>
                  {insight.title}
                </Heading>
                <Text fontSize="sm" noOfLines={3}>
                  {insight.content[0]}
                </Text>
                <HStack mt={4}>
                  {insight.tags.map((tag: string) => (
                    <Link key={tag} href={`/insights?tag=${tag}`}>
                      <Text fontSize="xs" color="gray.500">
                        #{tag}
                      </Text>
                    </Link>
                  ))}
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
            {intl.home.cta.title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            my={2}
            data-aos="fade-up"
          >
            {intl.home.cta.subtitle}
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
            {intl.home.cta.button}
          </Button>
        </VStack>
      </Container>
    </>
  );
}
