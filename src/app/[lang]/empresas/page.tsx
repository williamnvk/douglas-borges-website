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
import { FlagIcon, ScaleIcon } from "lucide-react";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);
  const h = "72px";

  return (
    <>
      <Box
        bg="#f9f8f6"
        filter="grayscale(1)"
        display="flex"
        h={`calc(100vh - ${h})`}
        alignContent="center"
        justifyContent="center"
        backgroundImage="url(/assets/hero/empresas.webp)"
        backgroundSize={`100% auto`}
        backgroundRepeat="no-repeat"
        backgroundPosition={{
          base: "center right",
          md: "center center",
          "2xl": "center right",
        }}
        backgroundAttachment="fixed"
      >
        <Container
          maxW="container.xl"
          py={{ base: 4, md: 48, "2xl": 32 }}
          px={{ base: 4, md: 16, "2xl": 32 }}
        >
          <VStack
            w="container.sm"
            align="flex-start"
            justify="center"
            gap={0}
            mb={16}
          >
            <Badge color="black" bg="white" data-aos="fade-up">
              Projeto
            </Badge>
            <HStack>
              <Heading fontSize="9xl" fontWeight="extrabold" color="white">
                <WordTransition words={["Life", "Work"]} typewriter />/
              </Heading>
              <Heading fontSize="9xl" fontWeight="light" color="white">
                <WordTransition
                  words={["Work", "Life"]}
                  delay={2000}
                  typewriter
                />
              </Heading>
            </HStack>
            <Box
              as="span"
              fontSize="3xl"
              fontFamily="heading"
              fontWeight="light"
              color="white"
              data-aos="fade-up"
            >
              <strong>Equilibre Liderança e Vida Pessoal</strong>. Método
              exclusivo para executivos e C-Levels desenvolverem alta
              performance sustentável
            </Box>

            <Button variant="outlineInverted" color="white" mt={8}>
              Agende uma Consulta Estratégica
            </Button>

            <VStack
              align="flex-start"
              borderRadius={6}
              w="200px"
              bg="white"
              pos="absolute"
              top={100}
              p={4}
              right={140}
              data-aos="fade-up"
              data-aos-delay={1000}
            >
              <HStack>
                <Heading letterSpacing={2} fontSize="xl" flex={1}>
                  Fé e Razão
                </Heading>
                <ScaleIcon size={32} />
              </HStack>

              <Text fontSize="x-small" textTransform="uppercase">
                Descubra como princípios cristãos podem iluminar suas decisões
                no mundo corporativo
              </Text>
            </VStack>

            <VStack
              align="flex-start"
              borderRadius={6}
              w="200px"
              bg="white"
              pos="absolute"
              top={300}
              p={4}
              right={240}
              data-aos="fade-up"
              data-aos-delay={2000}
            >
              <HStack>
                <Heading letterSpacing={2} fontSize="xl" flex={1}>
                  Liderança com Empatia
                </Heading>
                <FlagIcon size={32} />
              </HStack>

              <Text fontSize="x-small" textTransform="uppercase">
                Desenvolver líderes não é apenas sobre estratégia, mas também
                sobre empatia e propósito. Vamos transformar sua abordagem à
                liderança
              </Text>
            </VStack>

            <VStack
              align="flex-start"
              borderRadius={6}
              w="200px"
              bg="black"
              color="white"
              pos="absolute"
              top={260}
              p={4}
              right={4}
              boxShadow="2xl"
              border="1px solid"
              borderColor="white"
              data-aos="fade-up"
              data-aos-delay={3000}
            >
              <HStack>
                <Heading letterSpacing={2} fontSize="xl" flex={1}>
                  O Poder da Mente
                </Heading>
                <FlagIcon size={32} />
              </HStack>

              <Text fontSize="x-small" textTransform="uppercase">
                Vamos juntos cultivar um pensamento saudável e produtivo!
              </Text>
            </VStack>
          </VStack>
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

      <WorkLifeIdentification />

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
    </>
  );
}
