import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { getDictionary, Locale } from "./dictionaries";
import { WordTransition } from "./components/WordTransition";
import EmblaCarousel from "@/components/ui/Carousel/Carousel";
import { ArrowBigRight, PlusIcon, QuoteIcon } from "lucide-react";
import CardStack from "./components/CardStack";
import Services from "./components/Services";

type Props = {
  params: {
    lang: Locale;
  };
};

const chunkArray = (arr: string | never[], size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const groupedItems = chunkArray(intl.testimonials.items, 3);

  return (
    <>
      <Box
        bg="#f9f8f6"
        filter="grayscale(1)"
        display="flex"
        alignContent="center"
        justifyContent="center"
        backgroundImage="url(/assets/hero/1.webp)"
        backgroundSize={`auto 100%`}
        backgroundRepeat="no-repeat"
        backgroundPosition={{
          base: "center right",
          md: "400px 50px",
          "2xl": "center right",
        }}
        backgroundAttachment="fixed"
      >
        <Container
          maxW="container.xl"
          my={{ base: 4, md: 8, "2xl": 32 }}
          py={0}
        >
          <VStack w="container.md" align="flex-start" gap={8} mb={16} p={0}>
            <Heading fontSize="6xl" fontWeight="light">
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
            <Button size="lg" data-aos="fade-up">
              De o Primeiro Passo
            </Button>
            <Box position="relative" data-aos="fade-up">
              <QuoteIcon size={32} style={{ position: "absolute", right: 0 }} />
              <Text fontSize="smaller" fontStyle="italic">
                {intl.home.bible.content}
              </Text>
              <Text fontSize="smaller" fontStyle="italic">
                {intl.home.bible.verse}
              </Text>
            </Box>
            <SimpleGrid gap={4} w="full" templateColumns="repeat(4, 1fr)">
              {intl.home.counting.map((c, i) => (
                <VStack
                  key={`home-counting-${i}`}
                  align="flex-start"
                  p={6}
                  borderRadius={20}
                  bg="white"
                  data-aos="fade-up"
                  data-aos-delay={i * 200}
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

            <Box mt={`25vh`}>
              <Tag>{intl.home.about.pre}</Tag>
              <Heading maxW="450px" fontSize="7xl" data-aos="fade-up">
                {intl.home.about.title}
              </Heading>
            </Box>

            {intl.home.about.description.map((p, i) => (
              <Text
                fontSize="larger"
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
      </Box>

      <Container maxW="container.xl" mt={-24} pb={16}>
        <CardStack cards={intl.home.person.fellings} />
      </Container>

      <Container
        maxW="container.xl"
        position="relative"
        py={16}
        color="gray.900"
      >
        <VStack
          w="full"
          gap={16}
          align="flex-start"
          position="relative"
          zIndex={1}
        >
          <VStack gap={0} w="full" align="flex-start">
            <Tag>{intl.home.services.title}</Tag>
            <Heading fontSize="6xl">{intl.home.services.subtitle}</Heading>
          </VStack>
        </VStack>
      </Container>
      <Services services={intl.home.services.items} isDark={false} />

      <Container maxW="container.xl" py={24}>
        <VStack w="full" gap={8} align="flex-start">
          <HStack w="full">
            <Heading flex={1}>{intl.topics.title}</Heading>
            <HStack gap={4}>
              <Button>CONTRATE</Button>
              <Button variant="link">Saiba mais</Button>
            </HStack>
          </HStack>
          <SimpleGrid templateColumns="repeat(3, 1fr)" spacing={8}>
            {intl.topics.items.map((s, i) => (
              <VStack
                key={`home-topics-${i}`}
                w="full"
                align="flex-start"
                justify="flex-start"
                gap={4}
              >
                <VStack flex={1} w="full" align="flex-start">
                  <Box
                    w="full"
                    borderRadius={4}
                    h="180px"
                    style={{
                      backgroundImage: `url(${s.image})`,
                      backgroundPosition: "top center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% auto",
                      transition: "all 0.3s ease-in-out",
                    }}
                    filter="grayscale(1)"
                    _hover={{
                      filter: "grayscale(0)",
                    }}
                  />
                  <Heading fontSize="2xl">{s.title}</Heading>
                  <Text fontSize="smaller">{s.description}</Text>
                </VStack>
                <Button>Veja</Button>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
      <Box py={16} alignContent="center" bg="gray.900">
        <Container maxW="container.xl">
          <VStack gap={0} w="full" mb={{ base: 4, md: 8 }}>
            <Tag>{intl.testimonials.span}</Tag>
            <Heading fontSize="5xl" color="gray.50">
              {intl.testimonials.title}
            </Heading>
            <Text color="gray.50">{intl.testimonials.subtitle}</Text>
          </VStack>

          <EmblaCarousel
            slides={
              <>
                {groupedItems.map((group, index) => (
                  <HStack
                    key={`testimonials-group-${index}`}
                    spacing={8}
                    w="full"
                    align="flex-start"
                    justify="flex-start"
                  >
                    {/** @ts-expect-error eslint-disable @typescript-eslint/ban-ts-comment */}
                    {group.map((t) => (
                      <VStack
                        key={`testimonials-item-${t.name}`}
                        spacing={4}
                        flex={1}
                        pos="relative"
                      >
                        <Text
                          fontSize="medium"
                          fontStyle="italic"
                          p={8}
                          bg="white"
                          rounded={6}
                          boxShadow="lg"
                          _after={{
                            content: '""', // Pseudo-elemento para o triângulo
                            position: "absolute",
                            bottom: "94px", // Posiciona logo abaixo do Text
                            left: "50%",
                            transform: "translateX(-50%)",
                            borderWidth: "12px",
                            borderStyle: "solid",
                            borderColor:
                              "white transparent transparent transparent",
                          }}
                        >
                          {t.description}
                        </Text>
                        <Box
                          rounded="50%"
                          overflow="hidden"
                          w="64px"
                          h="64px"
                          backgroundImage={`url(${t.image})`}
                          backgroundSize="auto 100%"
                          backgroundRepeat="no-repeat"
                          backgroundPosition="center"
                          filter="grayscale(1)"
                        />
                        <Text fontSize="smaller" color="gray.50">
                          {t.name}
                        </Text>
                      </VStack>
                    ))}
                  </HStack>
                ))}
              </>
            }
            options={{ dragFree: true, loop: false }}
          />
        </Container>
      </Box>

      <Container maxW="container.md" my={32}>
        <VStack gap={2} flex={1} align="center" justify="center">
          <ArrowBigRight size={48} />
          <Heading textAlign="center">
            Como as mudanças que você quer vão realmente acontecer?
          </Heading>
          <Text textAlign="center">
            Entre em contato agora conosco e crie uma parceria pela construção
            de um novo caminho para sua carreira!
          </Text>
          <Button size="lg">Entrar em contato</Button>
        </VStack>
      </Container>
    </>
  );
}
