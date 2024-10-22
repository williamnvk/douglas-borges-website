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
        pt={h}
        bg="#f9f8f6"
        display="flex"
        alignContent="center"
        justifyContent="center"
        backgroundImage="url(/assets/hero/empresas.webp)"
        backgroundSize={`100% auto`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundAttachment="fixed"
      >
        <Container maxW="container.xl" my={32}>
          <VStack w="container.md" align="flex-start" gap={0} mb={16}>
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
            <Text
              fontSize="xl"
              fontWeight="light"
              color="white"
              data-aos="fade-up"
            >
              Aplicação de método para equilibrar a vida profissional e pessoal
              para profissionais de alto nível e alta performance.
            </Text>

            <SimpleGrid
              gap={4}
              w="full"
              templateColumns="repeat(2, 1fr)"
              mt={8}
            >
              <VStack
                align="flex-start"
                p={4}
                borderRadius={4}
                bg="white"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <Heading letterSpacing={2} fontSize="4xl">
                  equilíbrio entre suas vidas profissionais e pessoais
                </Heading>
                <Text fontSize="x-small" textTransform="uppercase">
                  sdsd
                </Text>
              </VStack>

              <VStack
                align="flex-start"
                p={4}
                borderRadius={4}
                bg="white"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <Heading letterSpacing={2} fontSize="4xl">
                  desafios da gestão corporativa com a qualidade de vida
                </Heading>
                <Text fontSize="x-small" textTransform="uppercase">
                  sdsd
                </Text>
              </VStack>
            </SimpleGrid>
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
    </>
  );
}
