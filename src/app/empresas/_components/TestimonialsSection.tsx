import {
  VStack,
  Box,
  Badge,
  Heading,
  Text,
  SimpleGrid,
  Container,
  HStack,
  Image,
} from "@chakra-ui/react";
import QuoteIcon from "@/app/components/QuoteIcon";
import Testimonials from "@/app/components/Testimonials";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Eduardo Silva",
      position: "CEO",
      company: "TechSolutions Brasil",
      location: "São Paulo, SP",
      photo: null, // Placeholder para foto
      testimonial:
        "Contratei o Douglas depois de perceber que estava levando minha empresa ao sucesso, mas perdendo minha família no processo. Em 6 meses de acompanhamento, consegui reestruturar minha rotina e hoje sou um líder mais presente tanto na empresa quanto em casa. Minha equipe também notou a diferença.",
      highlight: "Líder mais presente e equilibrado",
    },
    {
      name: "Maria Fernanda Costa",
      position: "Diretora de RH",
      company: "Grupo Inovare",
      location: "Curitiba, PR",
      photo: null,
      testimonial:
        "O programa de inteligência emocional que o Douglas desenvolveu para nossa equipe de gestores foi transformador. Reduzimos em 70% os conflitos interpessoais e nossa pesquisa de clima organizacional teve a melhor avaliação dos últimos 5 anos. Recomendo sem hesitação.",
      highlight: "70% menos conflitos interpessoais",
    },
    {
      name: "Roberto Machado",
      position: "Fundador",
      company: "Construtora Horizonte",
      location: "Florianópolis, SC",
      photo: null,
      testimonial:
        "Estava no limite do burnout quando procurei o Douglas. Como empresário cristão, encontrei nele alguém que entende nossos valores e desafios. Hoje dirijo minha empresa com mais sabedoria e propósito, e meus colaboradores dizem que o ambiente ficou muito mais saudável.",
      highlight: "Liderança com propósito e sabedoria",
    },
    {
      name: "Ana Paula Mendes",
      position: "Gerente Geral",
      company: "Logística Express",
      location: "Porto Alegre, RS",
      photo: null,
      testimonial:
        "As palestras do Douglas sobre gestão do estresse foram um divisor de águas para nossa equipe operacional. Nossos indicadores de produtividade melhoraram 40% e as licenças médicas por stress diminuíram drasticamente. Investimento que se paga rapidamente.",
      highlight: "40% de melhoria na produtividade",
    },
    {
      name: "Luiz Fernando Santos",
      position: "CEO",
      company: "Agência Criativa Digital",
      location: "Rio de Janeiro, RJ",
      photo: null,
      testimonial:
        "O acompanhamento psicológico que faço com o Douglas me ajudou a tomar uma das decisões mais difíceis da minha carreira: expandir a empresa para outros estados. Hoje tenho clareza mental e emocional para liderar com confiança. Minha equipe percebe a diferença na minha liderança.",
      highlight: "Clareza para decisões estratégicas",
    },
    {
      name: "Patrícia Rodrigues",
      position: "Diretora Executiva",
      company: "Clínica Saúde Integral",
      location: "Belo Horizonte, MG",
      photo: null,
      testimonial:
        "Como líder de uma clínica médica, sei a importância da saúde mental. O trabalho do Douglas com nossa equipe médica e administrativa foi excepcional. Criamos protocolos de bem-estar que hoje são referência na nossa região. Nossa rotatividade caiu 80%.",
      highlight: "80% de redução na rotatividade",
    },
  ];

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
