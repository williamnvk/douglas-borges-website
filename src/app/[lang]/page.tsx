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
import { PlusIcon, QuoteIcon } from "lucide-react";
import CardStack from "./components/CardStack";
import Icon from "@/components/shared/DynamicIcon";

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
        pt={h}
        bg="#f9f8f6"
        display="flex"
        alignContent="center"
        justifyContent="center"
        backgroundImage="url(/assets/hero/1.webp)"
        backgroundSize={`auto 100vh`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center right"
        backgroundAttachment="fixed"
      >
        <Container maxW="container.xl" my={32}>
          <VStack w="container.md" align="flex-start" gap={8} mb={16}>
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
              DE O PRIMEIRO PASSO
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
                  p={4}
                  borderRadius={4}
                  bg="white"
                  data-aos="fade-up"
                  data-aos-delay={i * 200}
                >
                  <Heading letterSpacing={2} fontSize="4xl">
                    <PlusIcon style={{ display: "inline" }} />
                    {c.title}
                  </Heading>
                  <Text fontSize="x-small" textTransform="uppercase">
                    {c.description}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>

            <Heading maxW="450px" fontSize="7xl" mt={`25vh`} data-aos="fade-up">
              {intl.home.about.title}
            </Heading>

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

      <Box
        pos="relative"
        _after={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100%",
          backgroundImage:
            "radial-gradient(circle at bottom center, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.3) 50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Container maxW="container.xl" position="relative" py={16}>
          <VStack
            w="full"
            gap={16}
            align="flex-start"
            position="relative"
            zIndex={1}
          >
            <VStack gap={0} w="full" align="flex-start ">
              <Heading fontSize="6xl">{intl.home.services.title}</Heading>
              <Text>{intl.home.services.subtitle}</Text>
            </VStack>
            <SimpleGrid templateColumns="repeat(3, 1fr)" spacing={4}>
              {intl.home.services.items.map((s, i) => (
                <VStack
                  key={`home-services-${i}`}
                  w="full"
                  align="flex-start"
                  borderRadius={6}
                  p={8}
                  bg="white"
                >
                  <VStack flex={1} w="full" align="flex-start">
                    <Icon size={32} name={s.icon as never} />
                    <Heading fontSize="4xl">{s.title}</Heading>
                    <Text color="gray.400" fontSize="small" my={4}>
                      {s.description}
                    </Text>
                  </VStack>
                  <Button variant="outline">Saiba +</Button>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

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

      {/* <Container maxW="container.xl">
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
      </Container> */}

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
