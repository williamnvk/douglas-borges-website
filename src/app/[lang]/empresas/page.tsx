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
import Testimonials from "./Testimonials";
import {
  ArrowBigRight,
  ClipboardPenIcon,
  LightbulbIcon,
  MedalIcon,
} from "lucide-react";
import MotionText from "./MotionText";
import ChallengesAndBenefits from "./ChallengesAndBenefits";
import Services from "../components/Services";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);
  // const h = "72px";

  const testimonials = intl.testimonials.items;

  return (
    <>
      <Box
        bg="gray.900"
        // bg="blue.800"
        // display="flex"
        // flexDir="column"
        // alignContent="center"
        // justifyContent="center"
        // filter="grayscale(1)"
        // backgroundImage="url(/assets/business-bg.jpg)"
        // backgroundBlendMode="multiply"
        // backgroundSize={`100% auto`}
        // backgroundRepeat="no-repeat"
        // backgroundPosition={{
        //   base: "center right",
        //   md: "center center",
        //   "2xl": "center center",
        // }}
        // backgroundAttachment="fixed"
        // animation="scaling 30s infinite alternate ease-in-out"
        // sx={{
        //   "@keyframes scaling": {
        //     "0%": { backgroundSize: "100% auto" },
        //     "100%": { backgroundSize: "300% auto" },
        //   },
        // }}
      >
        <Container maxW="container.xl" py={{ base: 4, md: 16, "2xl": 24 }}>
          <VStack w="container.md" align="flex-start" justify="center" gap={0}>
            <Badge color="black" bg="white" data-aos="fade-up">
              Projeto
            </Badge>
            <HStack align="center" justify="center">
              <Heading fontSize="220px" fontWeight="extrabold" color="white">
                <WordTransition words={["Life", "Work"]} typewriter />
              </Heading>

              <Heading fontSize="32px" fontWeight="light" color="white" mt="lg">
                &
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

        {/* <Heading>Um processo comprovado em 3 etapas</Heading> */}

        <Box pos="relative" py={24}>
          <MotionText />
        </Box>

        <Container maxW="container.xl" py={16}>
          <ChallengesAndBenefits />
        </Container>

        <SimpleGrid
          templateColumns="repeat(3, 1fr)"
          spacing={4}
          maxW="container.xl"
          mx="auto"
          color="white"
          my={16}
        >
          <HStack align="flex-start" gap={6}>
            <ClipboardPenIcon size={48} />
            <VStack align="flex-start" flex={1} gap={4}>
              <Heading fontSize="4xl">Análise Inicial</Heading>
              <Text fontSize="sm" color="gray.200">
                Começamos com uma entrevista aprofundada para entender os
                desafios e objetivos específicos de cada cliente. A partir
                disso, definimos metas claras e criamos um plano personalizado
                que atenda tanto às necessidades profissionais quanto ao
                equilíbrio pessoal.
              </Text>
            </VStack>
          </HStack>
          <HStack align="flex-start" gap={6}>
            <LightbulbIcon size={48} />
            <VStack align="flex-start" flex={1} gap={4}>
              <Heading fontSize="4xl">Desenvolvimento</Heading>
              <Text fontSize="sm" color="gray.200">
                Em seguida, trabalhamos com 2 a 6 sessões estruturadas, com
                exercícios práticos e um acompanhamento contínuo. A cada sessão,
                focamos em construir habilidades e novos hábitos que ajudem o
                cliente a lidar com as pressões do dia a dia e a melhorar seu
                bem-estar geral.
              </Text>
            </VStack>
          </HStack>
          <HStack align="flex-start" gap={6}>
            <MedalIcon size={48} />
            <VStack align="flex-start" flex={1} gap={4}>
              <Heading fontSize="4xl">Consolidação</Heading>
              <Text fontSize="sm" color="gray.200">
                Por fim, avaliamos os resultados obtidos e celebramos as
                conquistas. Um plano de continuidade é criado para garantir que
                os progressos alcançados sejam mantidos, fortalecendo o
                equilíbrio entre a vida profissional e pessoal.
              </Text>
            </VStack>
          </HStack>
        </SimpleGrid>

        <Services slidesPerView={5.5} list={intl.company.method} />

        <Container
          maxW="container.xl"
          position="relative"
          py={16}
          color="gray.50"
        >
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

        <Container maxW="container.md" py={32}>
          <VStack
            gap={2}
            flex={1}
            align="center"
            justify="center"
            color="gray.50"
          >
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
      </Box>
    </>
  );
}
