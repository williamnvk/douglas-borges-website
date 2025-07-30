import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  SimpleGrid,
  Badge,
  HStack,
  Accordion,
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import { siteUrl } from "@/data/site-constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Douglas Borges | Psicólogo",
  description: "Fazer terapia é investir em você e na sua capacidade de lidar com os desafios. Com o suporte de um especialista, você pode construir um equilíbrio verdadeiro entre empresa, família e propósito.",
  openGraph: {
    title: "Serviços | Douglas Borges | Psicólogo",
    description: "Fazer terapia é investir em você e na sua capacidade de lidar com os desafios. Com o suporte de um especialista, você pode construir um equilíbrio verdadeiro entre empresa, família e propósito.",
    type: "website",
    url: `${siteUrl}/servicos`,
    locale: "pt_BR",
    siteName: "Douglas Borges - Psicólogo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços | Douglas Borges | Psicólogo",
    description: "Fazer terapia é investir em você e na sua capacidade de lidar com os desafios. Com o suporte de um especialista, você pode construir um equilíbrio verdadeiro entre empresa, família e propósito.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: `${siteUrl}/servicos`,
  },
};

export default function Services() {
  return (
    <main>
      <Header />
      <Container
        as="section"
        maxW={{ base: "full", md: "8xl" }}
        mt={HEADER_NAVBAR_HEIGHT}
        pt={{ base: 4, md: 8 }}
      >
        <VStack gap={{ base: 4, md: 8 }} w="full">
          <Stack
            as="section"
            flexDir={{ base: "column-reverse", md: "row" }}
            w="full"
            gap={{ base: 2, md: 16 }}
            align="stretch"
            justify="stretch"
          >
            <VStack gap={2} flex={1} align="flex-start">
              <Badge fontWeight="light" aria-label="Seção de Serviços">
                Serviços
              </Badge>

              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl" }}
                
              >
                Supere o Estresse e Redescubra o Equilíbrio Entre Empresa, Família e Propósito!
              </Heading>
              <Text fontSize={{ base: "lg", md: "lg" }} my={2}>
                A psicoterapia é uma jornada para redefinir sua perspectiva, criando novas soluções para os desafios de uma rotina intensa. Vamos juntos construir o caminho para uma vida equilibrada e produtiva.
              </Text>
              <Button
                asChild
                variant="outline"
                size="lg"
                w={{ base: "full", md: "auto" }}
                aria-label="Saiba mais sobre atendimento presencial e online"
              >
                <a href="#presencial-ou-online">Qual modalidade você prefere?</a>
              </Button>
            </VStack>
            <Box
              role="img"
              aria-label="Ilustração de atendimento psicológico"
              w={{ base: "full", md: "640px" }}
              h={{ base: "400px", md: "auto" }}
              mx={{ base: "auto", md: "0" }}
              borderRadius="lg"
              display="block"
              style={{
                backgroundImage: "url(/assets/desktop.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto 100%",
                backgroundPosition: "center center",
              }}
            ></Box>
          </Stack>

          <SimpleGrid
            as="section"
            id="presencial-ou-online"
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={{ base: 4, md: 8 }}
            aria-label="Comparação entre atendimento presencial e online"
          >
            <VStack
              gap={4}
              flex={1}
              align="flex-start"
              bg="gray.900"
              p={{ base: 4, md: 16 }}
              borderRadius="lg"
              justify="flex-end"
              color="bg.subtle"
              pt={{ base: 8, md: 32 }}
              role="region"
              aria-labelledby="presential-title"
            >
              <Heading
                id="presential-title"
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="bold"
              >
                Sessões Presenciais
              </Heading>
              <Text fontSize="xl">Imersão e Conexão Direta</Text>
              <Text fontSize="smaller">
                oferece uma experiência focada e profunda para quem valoriza a conexão direta. Em um espaço tranquilo e acolhedor, você tem a oportunidade de mergulhar nas suas questões, encontrar novas perspectivas e desenvolver habilidades para se tornar um líder mais completo e equilibrado. A terapia presencial traz um impacto direto no seu dia a dia, facilitando transformações reais e duradouras.
              </Text>
              <Flex gap={{ base: 1, md: 2 }} flexWrap="wrap" role="list">
                {["Conexão pessoal", "Foco Total", "Experiência Sensorial Completa", "Ritmo mais Intenso"].map((i) => (
                  <Badge
                    role="listitem"
                    p={1.5}
                    fontWeight="light"
                    key={i}
                    bg="gray.800"
                    color="gray.100"
                  >
                    {i}
                  </Badge>
                ))}
              </Flex>
            </VStack>
            <VStack
              gap={4}
              flex={1}
              align="flex-start"
              bg="white"
              borderWidth={4}
              p={{ base: 4, md: 16 }}
              borderRadius="lg"
              justify="flex-end"
              
              pt={{ base: 8, md: 32 }}
              role="region"
              aria-labelledby="online-title"
            >
              <Heading id="online-title" fontSize="6xl" fontWeight="bold">
                Online
              </Heading>
              <Text fontSize="xl">Conveniência e Cuidado Onde Você Estiver</Text>
              <Text fontSize="smaller">Ela é ideal para quem busca um equilíbrio emocional sem complicações, podendo ser realizada onde você estiver. Sem deixar a rotina de lado, você ainda recebe o suporte necessário para lidar com o estresse, fortalecer sua autoconfiança e descobrir novas estratégias para ser um líder mais eficaz.</Text>
              <Flex gap={{ base: 1, md: 2 }} flexWrap="wrap" role="list">
                {["Praticidade para encaixar na rotina", "Conforto do Seu Espaço", "Agilidade e Acesso Facilitado", "Continuidade, Onde Estiver"].map((i) => (
                  <Badge role="listitem" p={1.5} fontWeight="light" key={i}>
                    {i}
                  </Badge>
                ))}
              </Flex>
            </VStack>
          </SimpleGrid>

          <VStack
            as="section"
            w="full"
            borderWidth={4}
            borderColor="gray.100"
            borderRadius="lg"
            role="table"
            aria-label="Comparação detalhada entre atendimento presencial e online"
          >
            <HStack
              w="full"
              borderBottomWidth={1}
              borderBottomColor="gray.100"
              px={{ base: 2, md: 3 }}
              py={{ base: 4, md: 6 }}
              align="center"
              justify="center"
              role="row"
            >
              <Text
                w={{ base: "full", md: "300px" }}
                fontWeight="bold"
                display={{ base: "none", md: "block" }}
                role="columnheader"
              >
                Aspecto
              </Text>
              <HStack flex={1} align="center" justify="center">
                <Text flex={1} fontWeight="bold" role="columnheader">
                  Benefícios do Atendimento Presencial
                </Text>
                <Text flex={1} fontWeight="bold" role="columnheader">
                  Benefícios do Atendimento Online
                </Text>
              </HStack>
            </HStack>
            {[
              {
                aspect: "Conexão",
                benefits: {
                  presential: "Conexão pessoal e acolhedora",
                  online: "Conexão digital, mas com suporte total"
                }
              },
              {
                aspect: "Praticidade",
                benefits: {
                  presential: "Ambiente focado",
                  online: "Flexibilidade para a sua rotina"
                }
              },
              {
                aspect: "Profundidade",
                benefits: {
                  presential: "Reflexões profundas",
                  online: "Ferramentas práticas e aplicáveis"
                }
              },
              {
                aspect: "Transformação",
                benefits: {
                  presential: "Estratégias personalizadas",
                  online: "Autogestão e equilíbrio emocional"
                }
              },
              {
                aspect: "Impacto na Vida",
                benefits: {
                  presential: "Aprendizados para uma vida plena",
                  online: "Benefícios práticos e sustentáveis"
                }
              }
            ].map((t, i) => (
              <Stack
                flexDir={{ base: "column", md: "row" }}
                key={`services-${i}`}
                w="full"
                align="center"
                justify="center"
                borderBottomWidth={1}
                borderBottomColor="gray.100"
                p={{ base: 2, md: 3 }}
                role="row"
              >
                <Heading
                  as="h3"
                  w={{ base: "full", md: "300px" }}
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign={{ base: "center", md: "left" }}
                  role="rowheader"
                >
                  {t.aspect}
                </Heading>
                <HStack flex={1}>
                  <Text flex={1} role="cell">
                    {t.benefits.presential}
                  </Text>
                  <Text flex={1} role="cell">
                    {t.benefits.online}
                  </Text>
                </HStack>
              </Stack>
            ))}
          </VStack>
        </VStack>

        <HStack
          as="section"
          mt={{ base: 4, md: 8 }}
          gap={8}
          w="full"
          align="stretch"
          justify="stretch"
          flexDir={{ base: "column", md: "row" }}
        >
          <VStack
            flex={1}
            align={{ base: "flex-start", md: "flex-start" }}
            p={{ base: 4, md: 8 }}
            borderWidth={4}
            borderRadius="lg"
            justify="flex-end"
          >
            <Text fontSize="md">Alguns Benefícios da psicoterapia</Text>
            <Heading as="h2" fontSize="4xl">
              Ambiente seguro, respeitoso, sigiloso e livre de julgamentos
            </Heading>
            <Text fontSize="sm">A psicoterapia proporciona ao paciente o alcance de inúmeros benefícios, tais como; controle das emoções, melhora nas relações interpessoais, diminuição da agressividade e entre outros.</Text>
          </VStack>
          <VStack flex={{ base: 1, md: 2 }} align="flex-start" gap={4}>
            <Heading as="h2" fontSize="xl">
              Perguntas Frequentes
            </Heading>

            <Accordion.Root collapsible>
              {[
                {
                  title: "Por que fazer terapia pode ajudar na minha carreira?",
                  description: "A terapia ajuda você a desenvolver ferramentas emocionais para lidar com o estresse, tomar decisões mais claras e equilibrar as demandas da vida profissional e pessoal. Isso contribui diretamente para uma liderança mais eficaz e uma vida mais harmoniosa."
                },
                {
                  title: "Qual é a diferença entre o atendimento presencial e o online?",
                  description: "No atendimento presencial, você tem um espaço físico dedicado para uma imersão mais profunda. Já o atendimento online oferece flexibilidade e praticidade, mantendo o foco no seu bem-estar, onde você estiver."
                },
                {
                  title: "Com que frequência devo fazer as sessões?",
                  description: "A frequência recomendada depende dos seus objetivos. Para um desenvolvimento contínuo, sessões semanais são ideais, mas o ritmo pode ser ajustado conforme a necessidade e o progresso."
                },
                {
                  title: "Como posso ter certeza de que a terapia terá resultados?",
                  description: "Cada pessoa responde à terapia de forma única, mas muitos clientes começam a notar mudanças logo nas primeiras sessões. Nosso foco é fornecer orientações práticas e aplicáveis para um impacto positivo e rápido."
                },
                {
                  title: "Qual é o valor da sessão individual?",
                  description: "O valor de uma sessão individual é de R$ 500,00, com duração entre 50 minutos e 1 hora. Esse investimento reflete a experiência, dedicação e abordagem personalizada para ajudar você a alcançar equilíbrio emocional e clareza. Em relação ao período de tratamento existe a necessidade de avaliação caso a caso."
                },
                {
                  title: "Quais são as formas de pagamento aceitas?",
                  description: "Aceito pagamentos via PIX, dinheiro e cartão de débito/crédito. Embora não trabalhe com convênios, forneço nota fiscal para reembolso em planos de saúde que oferecem essa cobertura para consultas psicológicas."
                },
                {
                  title: "As sessões são confidenciais?",
                  description: "Sim, todas as sessões são totalmente confidenciais. A segurança e privacidade são uma prioridade para garantir que você se sinta confortável e seguro ao compartilhar suas experiências."
                }
              ].map((q) => (
                <Accordion.Item key={`faq-q-${q.title}`} value={q.title}>
                  <Accordion.ItemTrigger>
                    <Box
                      as="span"
                      pr={{ base: 4, md: 8 }}
                      flex="1"
                      textAlign="left"
                    >
                      {q.title}
                    </Box>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody
                      pb={4}
                      fontSize={{ base: "smaller", md: "sm" }}
                    >
                      {q.description}
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </VStack>
        </HStack>
      </Container>

      <Container
        as="section"
        maxW="8xl"
        pb={{ base: 4, md: 12 }}
        pt={{ base: 0, md: 12 }}
      >
        <VStack
          mx={{ base: 0, md: "auto" }}
          p={{ base: 8, md: 24 }}
          maxW="8xl"
          bg="bg.subtle"
          borderRadius="lg"
          flex={1}
          align={{ base: "flex-start", md: "flex-start" }}
          justify={{ base: "center", md: "flex-end" }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "6xl" }}
            
          >
            Pronto para dar o próximo passo?
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" my={2}>
            Experimente uma sessão! Agende sua primeira sessão comigo e comece a trilhar o caminho para um equilíbrio emocional mais saudável e uma vida mais produtiva.
          </Text>
          <Button
            asChild
            variant="outline"
            size="lg"
            w={{ base: "full", md: "auto" }}
            aria-label="Agendar consulta via WhatsApp"
          >
            <a
              href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar uma sessão
            </a>
          </Button>
        </VStack>
      </Container>
    </main>
  );
}
