import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { getDictionary, Locale } from "../dictionaries";
import { WordTransition } from "../components/WordTransition";
import Icon from "@/components/shared/DynamicIcon";
import WorkLifeIdentification from "./components";
import Testimonials from "./Testimonials";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);
  const h = "72px";

  const testimonials = intl.testimonials.items;

  return (
    <>
      <Box
        bg="blue"
        display="flex"
        flexDir="column"
        alignContent="center"
        justifyContent="center"
        filter="grayscale(1)"
        backgroundImage="url(/assets/business-bg.jpg)"
        backgroundBlendMode="multiply"
        backgroundSize={`100% auto`}
        backgroundRepeat="no-repeat"
        backgroundPosition={{
          base: "center right",
          md: "center center",
          "2xl": "center center",
        }}
        backgroundAttachment="fixed"
        animation="scaling 30s infinite alternate ease-in-out"
        sx={{
          "@keyframes scaling": {
            "0%": { backgroundSize: "100% auto" },
            "100%": { backgroundSize: "300% auto" },
          },
        }}
      >
        <Container maxW="container.xl" py={{ base: 4, md: 48, "2xl": 32 }}>
          <VStack
            w="container.md"
            align="flex-start"
            justify="center"
            gap={0}
            mb={16}
          >
            <Badge color="black" bg="white" data-aos="fade-up">
              Projeto
            </Badge>
            <HStack align="center" justify="center">
              <Heading fontSize="220px" fontWeight="extrabold" color="white">
                <WordTransition words={["Life", "Work"]} typewriter />
              </Heading>

              <Heading fontSize="32px" fontWeight="light" color="white" mt="lg">
                -
              </Heading>
              <Heading fontSize="80px" fontWeight="light" color="white" mt="lg">
                <WordTransition
                  words={["Work", "Life"]}
                  delay={2000}
                  typewriter
                />
              </Heading>
            </HStack>

            <Heading color="white" fontSize="4xl" fontWeight="light">
              <Heading color="white" fontSize="4xl" fontWeight="bold" as="span">
                Equilibre Liderança e Vida Pessoal.
              </Heading>
              <br />
              Método exclusivo para executivos e C-Levels desenvolverem alta
              performance sustentável
            </Heading>
          </VStack>
        </Container>
        <Testimonials testimonials={testimonials} />

        <Container maxW="container.xl" py={16}>
          <HStack>
            <VStack flex={1}>
              <Heading>Você se identifica?</Heading>

              <Text>Solidão nas decisões difíceis</Text>
              <Text>Pressão constante por resultados</Text>
              <Text>Sacrifício da vida pessoal</Text>

              <Text>Dificuldade em desconectar</Text>

              <Text>Estresse crônico</Text>
            </VStack>
            <VStack flex={1}>
              <Heading>O Método Work/Life oferece</Heading>

              <Text>Equilíbrio sustentável</Text>
              <Text>Decisões mais conscientes</Text>
              <Text>Qualidade de vida preservada</Text>
              <Text>Maior presença familiar</Text>
              <Text>Performance otimizada</Text>
            </VStack>
          </HStack>
        </Container>
      </Box>

      <Box
        pos="relative"
        bg="black"
        _after={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100%",
          backgroundImage:
            "radial-gradient(circle at top center, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.3) 50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        color="white"
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
                  bg="black"
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

      <Container maxW="container.xl" py={16}>
        <VStack gap={8} w="full">
          <Heading fontSize="xl">{intl.faq.title}</Heading>
          <Accordion w="full" variant="custom">
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
