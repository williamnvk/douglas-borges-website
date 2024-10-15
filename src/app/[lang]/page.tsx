import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Divider,
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
import { QuoteIcon } from "lucide-react";

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
  const h = "72px";

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const groupedItems = chunkArray(intl.testimonials.items, 3);

  return (
    <>
      <Box
        h={`calc(100vh - ${h})`}
        bg="#f9f8f6"
        alignContent="center"
        backgroundImage="url(/assets/hero/1.webp)"
        backgroundSize="auto 100%"
        backgroundRepeat="no-repeat"
        backgroundPosition="center right"
        filter="grayscale(1)"
      >
        <Container maxW="container.xl">
          <VStack maxW="container.md" align="flex-start" gap={8}>
            <Heading fontSize="7xl">
              <WordTransition words={intl.home.transition} />{" "}
              {intl.home.subtitle}
            </Heading>
            <Button size="lg">DE O PRIMEIRO PASSO</Button>
            <Box pr={16}>
              <QuoteIcon style={{ position: "absolute" }} />
              <Text ml={8}>{intl.home.bible.content}</Text>
              <Text ml={8}>{intl.home.bible.verse}</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Box
        style={{
          backgroundImage: "url(/assets/douglas-borges.png)",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          backgroundSize: `auto calc(100vh - ${h})`,
        }}
        filter="grayscale(1)"
        h={`calc(100vh - ${h})`}
        alignContent="center"
      >
        <Container maxW="container.xl">
          <VStack maxW="container.md" align="flex-start" gap={4}>
            <Heading maxW="450px" fontSize="7xl">
              {intl.home.about.title}
            </Heading>
            <Text>CRP/PR 08-21013 · CRP/SC 12-13884</Text>
            {intl.home.about.description.map((p, i) => (
              <Text fontSize="larger" key={`home-about-${i}`}>
                {p}
              </Text>
            ))}
            <Text fontSize="smaller">{intl.home.about.subtitle}</Text>
            <Divider my={8} />
            <HStack gap={16} w="full">
              {intl.home.counting.map((c, i) => (
                <VStack key={`home-counting-${i}`} align="flex-start">
                  <Heading fontSize="3xl">{c.title}</Heading>
                  <Text fontSize="small">{c.description}</Text>
                </VStack>
              ))}
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Box alignContent="center">
        <Container
          maxW="container.xl"
          my={16}
          p={16}
          bg="white"
          borderRadius={6}
          borderColor="gray.100"
          borderWidth={1}
        >
          <Heading fontSize="6xl">
            <WordTransition
              words={intl.home.person.fellings.map((f) => f.title)}
            />
          </Heading>
          <Text fontSize="4xl">
            <WordTransition
              words={intl.home.person.fellings.map((f) => f.description)}
            />
          </Text>
          <Text fontSize="xl">
            <WordTransition
              inline={false}
              words={intl.home.person.fellings.map((f) => f.text)}
            />
          </Text>

          <br />
          <br />
          <br />

          <VStack w="full" gap={8} align="flex-start">
            <Heading>{intl.home.services.title}</Heading>
            <SimpleGrid templateColumns="repeat(3, 1fr)" spacing={4}>
              {intl.home.services.items.map((s, i) => (
                <VStack
                  key={`home-services-${i}`}
                  w="full"
                  align="flex-start"
                  justify="flex-start"
                  borderRadius={6}
                  p={4}
                  bg="gray.50"
                >
                  <Heading fontSize="2xl">{s.title}</Heading>
                  <Text fontSize="smaller">{s.description}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>

        <Container
          maxW="container.xl"
          mb={16}
          borderRadius={6}
          borderColor="gray.100"
          borderWidth={1}
          bg="white"
          p={16}
        >
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
                  <Box
                    w="full"
                    borderRadius={4}
                    h="180px"
                    style={{
                      backgroundImage: `url(${s.image})`,
                      backgroundPosition: "top center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: `100% 100%`,
                    }}
                    filter="grayscale(1)"
                  />
                  <Heading fontSize="2xl">{s.title}</Heading>
                  <Text fontSize="smaller">{s.description}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Box py={16} alignContent="center" bg="orange.100">
        <Container maxW="container.xl">
          <VStack gap={0} w="full" mb={{ base: 4, md: 8 }}>
            <Tag>{intl.testimonials.span}</Tag>
            <Heading fontSize="3xl">{intl.testimonials.title}</Heading>
            <Text>{intl.testimonials.subtitle}</Text>
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
                        <Text fontSize="smaller">{t.name}</Text>
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

      <Container maxW="container.xl">
        <VStack gap={8} w="full">
          <Heading fontSize="xl">{intl.faq.title}</Heading>
          <Accordion w="full">
            {intl.faq.questions.map((q) => (
              <AccordionItem key={`faq-q-${q.title}`}>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {q.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>{q.description}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Container>

      <Box bg="gray.100" py={16}>
        <Container maxW="container.xl">
          <HStack w="full">
            <VStack gap={2} flex={1} align="flex-start">
              <Heading>
                Como as mudanças que você quer vão realmente acontecer?
              </Heading>
              <Text>
                Entre em contato agora conosco e crie uma parceria pela
                construção de um novo caminho para sua carreira!
              </Text>
            </VStack>
            <Button>Entrar em contato</Button>
          </HStack>
        </Container>
      </Box>
    </>
  );
}
