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

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);
  const h = "72px";

  const groupedItems = chunkArray(intl.testimonials.items, 3);

  return (
    <>
      <Box h={`calc(100vh - ${h})`} alignContent="center">
        <Container maxW="container.xl">
          <VStack maxW="container.md" align="flex-start" gap={8}>
            <Heading fontSize="7xl">
              <WordTransition words={intl.home.transition} />{" "}
              {intl.home.subtitle}
            </Heading>
            <Button size="lg">DE O PRIMEIRO PASSO</Button>
            <Box pr={16}>
              <QuoteIcon style={{position: "absolute"}} />
              <Text>{intl.home.bible.content}</Text>
              <Text>{intl.home.bible.verse}</Text>
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
        bg="gray.100"
        h={`calc(100vh - ${h})`}
        alignContent="center"
      >
        <Container maxW="container.xl">
          <VStack maxW="container.md" align="flex-start" gap={4}>
            <Heading maxW="container.sm" fontSize="7xl">
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

      <Container maxW="container.xl" my={32} bg="gray.50" borderRadius={6}>
        {/* <Heading>{intl.home.services.title}</Heading> */}
        <SimpleGrid templateColumns="repeat(3, 1fr)" spacing={8}>
          {intl.home.services.items.map((s, i) => (
            <VStack
              key={`home-services-${i}`}
              w="full"
              align="flex-start"
              justify="flex-start"
            >
              <Heading fontSize="2xl">{s.title}</Heading>
              <Text fontSize="smaller">{s.description}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>

      <Box h={`calc(100vh - ${h})`} alignContent="center" bg="orange.100">
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
    </>
  );
}
