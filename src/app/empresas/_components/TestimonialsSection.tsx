import { VStack, Box, Badge, Heading, Text, Container } from "@chakra-ui/react";
import Testimonials from "@/app/components/Testimonials";

export function TestimonialsSection() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="gray.900" color="white">
      <Container maxW="8xl">
        <VStack gap={16}>
          {/* Header da seção */}
          <VStack gap={6} textAlign="center" maxW="800px" mx="auto">
            <Badge
              bg="blue.500"
              color="white"
              px={4}
              py={2}
              borderRadius="full"
              textStyle="sm"
              fontWeight="semibold"
            >
              Depoimentos
            </Badge>
            <Heading
              textStyle={{ base: "4xl", md: "5xl" }}
              color="white"
              fontFamily="heading"
              fontWeight="bold"
              textAlign="center"
            >
              Líderes que transformaram suas empresas
            </Heading>
            <Text
              textStyle="lg"
              color="gray.300"
              textAlign="center"
              maxW="700px"
            >
              Conheça as histórias reais de empresários que investiram em saúde
              mental e viram resultados extraordinários em suas organizações e
              vidas pessoais.
            </Text>
          </VStack>

          <Box w="full">
            <Testimonials
              items={[
                {
                  image: "/assets/testmonials/william-n.webp",
                  name: "William Novak",
                  city: "União da Vitória, PR",
                  description:
                    "Desde a primeira sessão, senti uma clareza incrível sobre meus objetivos e uma paz que há tempos não experimentava. A consultoria me ajudou a reorganizar minhas prioridades e, pela primeira vez, consegui equilibrar meu trabalho com minha vida pessoal.",
                },
                {
                  image: null,
                  name: "Dr. Gustavo Coronel, CEO da Clinica Yluma",
                  city: "União da Vitória, PR",
                  description:
                    "Meu maior ganho foi a clareza. Cheguei aos encontros de consultoria com problemas acumulados, me sentindo sempre em débito com todos. Hoje, sei onde quero chegar e como quero viver, e cada decisão tem sido mais consciente. Esse equilíbrio que encontrei reflete diretamente nos resultados do meu trabalho e com a família.",
                },
                {
                  image: "/assets/testmonials/thyago-b-de-lima.webp",
                  name: "Thyago B. de Lima, Empresário e Palestrante",
                  city: "Curitiba, PR",
                  description:
                    "A abordagem cristã da consultoria fez toda a diferença para mim. Encontrar alguém que entende meus valores e me ajuda a aplicá-los no dia a dia foi transformador. Hoje, tenho mais paz e confiança em minhas decisões como líder e como pai.",
                },
              ]}
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
