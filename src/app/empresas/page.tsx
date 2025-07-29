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
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Button,
  Stack,
  List,
  ListItem,
  ListIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "@/theme/consts";
import { siteUrl } from "@/data/dictionaries";
import { Metadata } from "next";
// Icons are now replaced with simple text symbols to avoid client component issues

export const metadata: Metadata = {
  title: "Comportamental Estratégico para Empresas | Douglas Borges | Psicólogo",
  description: "Assessment comportamental estratégico para gestores que precisam tomar decisões importantes sobre pessoas. Análise psicológica precisa e científica com base no Big Five, MBTI, DISC e Eneagrama.",
  openGraph: {
    title: "Comportamental Estratégico para Empresas | Douglas Borges | Psicólogo",
    description: "Assessment comportamental estratégico para gestores que precisam tomar decisões importantes sobre pessoas. Análise psicológica precisa e científica.",
    type: "website",
    url: `${siteUrl}/empresas`,
    locale: "pt_BR",
    siteName: "Douglas Borges - Psicólogo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comportamental Estratégico para Empresas | Douglas Borges | Psicólogo",
    description: "Assessment comportamental estratégico para gestores que precisam tomar decisões importantes sobre pessoas.",
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
    canonical: `${siteUrl}/empresas`,
  },
  keywords: [
    "assessment comportamental",
    "avaliação psicológica empresarial",
    "Big Five",
    "MBTI",
    "DISC",
    "Eneagrama",
    "psicólogo empresarial",
    "consultoria empresarial",
    "i-Treebo",
    "gestão de pessoas",
    "liderança",
  ],
};

export default function EmpresasPage() {
  const faqData = [
    {
      question: "Como inicio o processo?",
      answer: "Acesse o site douglasborgespsicologo.com.br/empresas e selecione o plano desejado. Você será automaticamente direcionado para agendar a entrevista com o psicólogo e iniciar o processo."
    },
    {
      question: "O que eu, gestor, preciso fazer?",
      answer: "Na reunião inicial, você irá definir o perfil comportamental desejado para a função (Engenharia de Assessment) e enviar os dados dos colaboradores a serem avaliados. Todo o restante é conduzido por mim."
    },
    {
      question: "O colaborador terá acesso ao resultado?",
      answer: "Não. O relatório é enviado exclusivamente ao gestor. O processo é ético e conduzido conforme as normas da psicologia organizacional. O colaborador participa de uma reunião online comigo, onde aplico os instrumentos de forma assistida."
    },
    {
      question: "O relatório é técnico ou fácil de entender?",
      answer: "É técnico, mas escrito em linguagem acessível, com gráficos explicativos e análise estratégica. Um modelo real pode ser consultado no site antes da contratação."
    },
    {
      question: "Você me orienta na decisão?",
      answer: "Não presto consultoria operacional. Entrego um diagnóstico completo para que você, gestor, tenha clareza sobre as características e limitações do colaborador e decida com mais segurança."
    },
    {
      question: "Atende presencial ou online?",
      answer: "Atendimento 100% online, com cobertura para todo o Brasil."
    }
  ];

  const metodologiaItems = [
    { name: "Big Five / NEO PI-R", description: "Base científica consolidada para análise de personalidade" },
    { name: "MBTI (Jung)", description: "Classificação de tipos psicológicos e preferências cognitivas" },
    { name: "DISC", description: "Análise comportamental focada em ambiente de trabalho" },
    { name: "Belbin", description: "Identificação de papéis em equipe e dinâmicas colaborativas" },
    { name: "Eneagrama", description: "Compreensão profunda de motivações e padrões comportamentais" }
  ];

  const etapas = [
    {
      step: "1º Passo",
      title: "Compreensão Estratégica do Papel do Comportamento",
      description: "O primeiro passo para uma gestão eficiente de pessoas é entender que o desempenho de um colaborador vai além da técnica. Nem sempre quem 'sabe fazer' está emocionalmente preparado para 'querer fazer' ou 'conseguir fazer' sob pressão, conflito ou mudanças."
    },
    {
      step: "2º Passo", 
      title: "Escolha do Plano",
      description: "Selecione o plano desejado no site: www.douglasborgespsicologo.com.br/empresas"
    },
    {
      step: "3º Passo",
      title: "Engenharia de Assessment",
      description: "Agende a reunião com o psicólogo para definir o perfil comportamental esperado para a função (expectativas do gestor)."
    },
    {
      step: "4º Passo",
      title: "Envio dos Dados dos Colaboradores", 
      description: "Forneça os dados necessários (nome completo, CPF, e-mail e WhatsApp) dos colaboradores que serão avaliados."
    },
    {
      step: "5º Passo",
      title: "Aplicação da Avaliação",
      description: "A avaliação individual será conduzida 100% online, de forma assistida, pela equipe do Psicólogo Douglas Borges."
    },
    {
      step: "6º Passo",
      title: "Análise Detalhada",
      description: "Elaboração do estudo comparativo entre as expectativas da função (definidas pelo gestor) e os resultados reais do perfil de cada avaliado."
    },
    {
      step: "7º Passo",
      title: "Devolutiva Estratégica",
      description: "Entrega do relatório técnico completo e reunião de devolutiva com o gestor, com explicações claras, gráficos e recomendações práticas para decisões assertivas."
    }
  ];

  const whenToUse = [
    "Ao cogitar promoções, remanejamentos ou desligamentos",
    "Em casos de conflitos interpessoais ou desempenho abaixo do esperado", 
    "Quando há dúvidas sobre contratação ou potencial de liderança",
    "Para compreender o funcionamento emocional e social de um colaborador"
  ];

  const entregaveis = [
    "Aplicação assistida do NEO PI-R / Big Five",
    "Comparativo com as expectativas da função (Engenharia de Assessment)",
    "Relatórios visuais com gráficos, análise textual e recomendações",
    "Classificações em MBTI, DISC, Belbin e Eneagrama, interpretadas tecnicamente",
    "Devolutiva estratégica com o gestor para esclarecimento e decisão"
  ];

  const diferenciais = [
    "Diagnóstico técnico e estratégico, não genérico",
    "Conduzido exclusivamente por psicólogo empresarial experiente", 
    "Foco total na realidade e na tomada de decisão do gestor",
    "Integração entre ciência do comportamento e gestão de pessoas",
    "Relatórios visuais, práticos e acionáveis"
  ];

  return (
    <main>
      <Header page="empresas" />
      <Container
        as="section"
        maxW={{ base: "full", md: "container.xl" }}
        mt={HEADER_NAVBAR_HEIGHT}
        pt={{ base: 4, md: 8 }}
      >
        {/* Hero Section */}
        <VStack gap={{ base: 4, md: 8 }} w="full">
          <Stack
            as="section"
            flexDir={{ base: "column", md: "row" }}
            w="full"
            gap={{ base: 4, md: 16 }}
            align="center"
            justify="space-between"
          >
            <VStack gap={4} flex={1} align="flex-start" maxW={{ base: "full", md: "600px" }}>
              <Badge fontWeight="light" colorScheme="blue">Comportamental Estratégico</Badge>
              
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                color="gray.900"
                lineHeight="1.2"
                data-aos="fade-up"
              >
                Assessment Comportamental para Empresas
              </Heading>
              
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Diagnóstico psicológico estratégico para gestores que precisam tomar decisões importantes sobre pessoas. Análise precisa, ética e científica baseada no Big Five.
              </Text>

              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.500"
                fontStyle="italic"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Por Douglas Borges | Psicólogo Empresarial | i‑Treebo
              </Text>

              <Button
                as="a"
                href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Assessment%20Comportamental%20Estratégico."
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                colorScheme="blue"
                w={{ base: "full", md: "auto" }}
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Solicitar Orçamento
              </Button>
            </VStack>

            <Box
              w={{ base: "full", md: "500px" }}
              h={{ base: "300px", md: "400px" }}
              borderRadius="lg"
              bg="gray.100"
              style={{
                backgroundImage: "url(/assets/escritório.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Stack>

          {/* About i-Treebo */}
          <Box
            as="section"
            bg="gray.50"
            p={{ base: 6, md: 8 }}
            borderRadius="lg"
            w="full"
            data-aos="fade-up"
          >
            <VStack align="flex-start" gap={4}>
              <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} color="gray.900">
                Sobre a i‑Treebo (Tree Business Optimization)
              </Heading>
              <Text color="gray.700">
                A i‑Treebo é uma consultoria fundada em Curitiba/PR, especializada em otimização de negócios com foco em desempenho humano, branding estratégico e processos comerciais.
              </Text>
              <Text color="gray.700">
                Comandada por três irmãos — Douglas Borges (psicólogo empresarial), Thyago Borges (especialista em alta performance comercial) e Wagner Borges (branding e marketing) — a i‑Treebo une ciência do comportamento, identidade organizacional e geração de resultados práticos para empresas.
              </Text>
              <Button
                as="a"
                href="https://itreebo.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="link"
                colorScheme="blue"
                size="sm"
              >
                Saiba mais sobre a i‑Treebo →
              </Button>
            </VStack>
          </Box>

          {/* Propósito da Atuação */}
          <VStack as="section" w="full" align="flex-start" gap={6} py={{ base: 4, md: 8 }}>
            <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="gray.900">
              Propósito da Atuação
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
              Como psicólogo empresarial, atendo sob demanda gestores que precisam tomar decisões importantes sobre pessoas.
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
              O Assessment Comportamental Estratégico oferece uma leitura precisa, ética e científica do perfil psicológico e comportamental de colaboradores, com base nas expectativas da liderança.
            </Text>
          </VStack>

          {/* Quando Utilizar */}
          <SimpleGrid
            as="section"
            columns={{ base: 1, md: 2 }}
            gap={{ base: 4, md: 8 }}
            w="full"
          >
            <VStack align="flex-start" gap={4}>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="gray.900">
                Quando Utilizar o Diagnóstico
              </Heading>
              <List spacing={3}>
                {whenToUse.map((item, index) => (
                  <ListItem key={index} display="flex" alignItems="flex-start">
                    <Text color="blue.500" mr={2} mt={1}>🎯</Text>
                    <Text>{item}</Text>
                  </ListItem>
                ))}
              </List>
            </VStack>

            <VStack align="flex-start" gap={4}>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="gray.900">
                Entregáveis e Benefícios
              </Heading>
              <List spacing={3}>
                {entregaveis.map((item, index) => (
                  <ListItem key={index} display="flex" alignItems="flex-start">
                    <Text color="green.500" mr={2} mt={1}>✓</Text>
                    <Text>{item}</Text>
                  </ListItem>
                ))}
              </List>
            </VStack>
          </SimpleGrid>

          {/* Metodologia Científica */}
          <VStack as="section" w="full" align="flex-start" gap={6} py={{ base: 4, md: 8 }}>
            <VStack align="flex-start" gap={2}>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="gray.900">
                Metodologia Científica
              </Heading>
              <Text color="gray.600">
                Instrumentos utilizados para uma análise contextualizada, respeitando a cultura organizacional e os objetivos estratégicos da empresa:
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
              {metodologiaItems.map((item, index) => (
                <Box
                  key={index}
                  p={4}
                  borderWidth={1}
                  borderColor="gray.200"
                  borderRadius="lg"
                  _hover={{ borderColor: "blue.300", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <VStack align="flex-start" gap={2}>
                    <Heading as="h3" fontSize="lg" color="gray.900">
                      {item.name}
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      {item.description}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Etapas do Processo */}
          <VStack as="section" w="full" align="flex-start" gap={6} py={{ base: 4, md: 8 }}>
            <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="gray.900">
              Etapas do Processo
            </Heading>
            
            <VStack w="full" gap={4}>
              {etapas.map((etapa, index) => (
                <Box
                  key={index}
                  w="full"
                  p={6}
                  borderWidth={2}
                  borderColor={index === 0 ? "blue.300" : "gray.200"}
                  borderRadius="lg"
                  bg={index === 0 ? "blue.50" : "white"}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <VStack align="flex-start" gap={3}>
                    <HStack>
                      <Badge colorScheme={index === 0 ? "blue" : "gray"} fontSize="sm">
                        {etapa.step}
                      </Badge>
                      <Heading as="h3" fontSize="lg" color="gray.900">
                        {etapa.title}
                      </Heading>
                    </HStack>
                    <Text color="gray.700">{etapa.description}</Text>
                  </VStack>
                </Box>
              ))}
            </VStack>
          </VStack>

          {/* Cronograma e Investimento */}
          <SimpleGrid
            as="section"
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 6, md: 8 }}
            w="full"
            py={{ base: 4, md: 8 }}
          >
            {/* Cronograma */}
            <VStack align="flex-start" gap={4}>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="gray.900">
                Cronograma Estimado
              </Heading>
              <TableContainer w="full">
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Etapa</Th>
                      <Th>Prazo</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Entrevista com o gestor</Td>
                      <Td>Conforme agendamento</Td>
                    </Tr>
                    <Tr>
                      <Td>Aplicação da avaliação</Td>
                      <Td>Assim que os dados forem enviados</Td>
                    </Tr>
                    <Tr>
                      <Td>Elaboração do relatório</Td>
                      <Td>2 a 3 dias úteis após conclusão</Td>
                    </Tr>
                    <Tr>
                      <Td>Entrega final</Td>
                      <Td>Até 1 dia útil após análise</Td>
                    </Tr>
                    <Tr>
                      <Td>Devolutiva estratégica</Td>
                      <Td>Conforme agenda do gestor</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <Text fontSize="sm" color="blue.600" fontWeight="medium">
                Prazo total estimado: 5 a 7 dias úteis
              </Text>
            </VStack>

            {/* Investimento */}
            <VStack align="flex-start" gap={4}>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="gray.900">
                Investimento
              </Heading>
              <Text color="gray.600" mb={2}>
                Diagnóstico completo com relatório técnico e devolutiva:
              </Text>
              <VStack w="full" gap={3}>
                <Box w="full" p={4} borderWidth={1} borderColor="gray.200" borderRadius="lg">
                  <HStack justify="space-between">
                    <Text fontWeight="medium">1 colaborador</Text>
                    <Text fontSize="lg" fontWeight="bold" color="green.600">R$ 700,00</Text>
                  </HStack>
                </Box>
                <Box w="full" p={4} borderWidth={1} borderColor="gray.200" borderRadius="lg">
                  <HStack justify="space-between">
                    <Text fontWeight="medium">3 colaboradores</Text>
                    <Text fontSize="lg" fontWeight="bold" color="green.600">R$ 1.750,00</Text>
                  </HStack>
                </Box>
                <Box w="full" p={4} borderWidth={2} borderColor="blue.300" borderRadius="lg" bg="blue.50">
                  <HStack justify="space-between">
                    <Text fontWeight="medium">5 colaboradores</Text>
                    <VStack align="flex-end" gap={0}>
                      <Text fontSize="lg" fontWeight="bold" color="green.600">R$ 2.205,00</Text>
                      <Badge colorScheme="blue" fontSize="xs">10% desconto</Badge>
                    </VStack>
                  </HStack>
                </Box>
                <Box w="full" p={4} borderWidth={2} borderColor="green.300" borderRadius="lg" bg="green.50">
                  <HStack justify="space-between">
                    <Text fontWeight="medium">10 colaboradores</Text>
                    <VStack align="flex-end" gap={0}>
                      <Text fontSize="lg" fontWeight="bold" color="green.600">R$ 3.570,00</Text>
                      <Badge colorScheme="green" fontSize="xs">15% desconto</Badge>
                    </VStack>
                  </HStack>
                </Box>
              </VStack>
              <VStack align="flex-start" gap={1} pt={2}>
                <Text fontSize="sm" color="gray.600">
                  <strong>Pagamento:</strong> via PIX ou boleto bancário – à vista
                </Text>
                <Text fontSize="sm" color="gray.600">
                  <strong>Validade da proposta:</strong> 10 dias úteis
                </Text>
              </VStack>
            </VStack>
          </SimpleGrid>

          {/* FAQ */}
          <VStack as="section" w="full" align="flex-start" gap={6} py={{ base: 4, md: 8 }}>
            <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="gray.900">
              Perguntas Frequentes (FAQ do Gestor)
            </Heading>
            
            <Accordion w="full" allowToggle>
              {faqData.map((faq, index) => (
                <AccordionItem key={index}>
                  <h3>
                    <AccordionButton py={4}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight="medium"
                        fontSize={{ base: "md", md: "lg" }}
                      >
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} fontSize={{ base: "sm", md: "md" }} color="gray.700">
                    {faq.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </VStack>

          {/* Diferenciais */}
          <VStack as="section" w="full" align="flex-start" gap={6} py={{ base: 4, md: 8 }}>
            <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="gray.900">
              Diferenciais i‑Treebo & Douglas Borges
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
              {diferenciais.map((diferencial, index) => (
                <Box
                  key={index}
                  p={4}
                  borderWidth={1}
                  borderColor="gray.200"
                  borderRadius="lg"
                  bg="white"
                  _hover={{ borderColor: "blue.300", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <HStack align="flex-start">
                    <Text color="blue.500" mr={2} mt={1}>🛡️</Text>
                    <Text color="gray.700">{diferencial}</Text>
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Sobre o Psicólogo */}
          <Box
            as="section"
            bg="gray.900"
            color="white"
            p={{ base: 6, md: 8 }}
            borderRadius="lg"
            w="full"
            data-aos="fade-up"
          >
            <VStack align="flex-start" gap={4}>
              <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} color="white">
                Sobre o Psicólogo
              </Heading>
              <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} color="blue.300">
                Douglas Borges
              </Heading>
              <Text fontSize="sm" color="gray.300">
                Psicólogo Empresarial – CRP 12/13884
              </Text>
              <Text color="gray.100">
                Especialista em avaliação de personalidade e desempenho humano.
              </Text>
              <Text color="gray.100">
                Há mais de 10 anos ajudo empresas a tomarem decisões mais inteligentes sobre pessoas, por meio de diagnósticos estratégicos, leitura comportamental profunda e escuta qualificada.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* CTA Final */}
      <Container
        as="section"
        maxW="container.xl"
        pb={{ base: 4, md: 12 }}
        pt={{ base: 4, md: 12 }}
      >
        <VStack
          mx={{ base: 0, md: "auto" }}
          p={{ base: 8, md: 24 }}
          maxW="container.xl"
          bg="blue.50"
          borderRadius="lg"
          flex={1}
          align={{ base: "center", md: "center" }}
          justify="center"
          textAlign="center"
          data-aos="fade-up"
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="gray.900"
            data-aos="fade-up"
          >
            Pronto para tomar decisões mais assertivas?
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            my={4}
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Conte com um diagnóstico estratégico e científico para sua gestão de pessoas.
          </Text>
          <HStack gap={4} flexWrap="wrap" justify="center">
            <Button
              as="a"
              href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Gostaria%20de%20contratar%20o%20Assessment%20Comportamental%20Estratégico."
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="blue"
              size="lg"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Solicitar Orçamento
            </Button>
            <Button
              as="a"
              href="https://douglasborgespsicologo.com.br/empresas"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              Conhecer Planos
            </Button>
          </HStack>
        </VStack>
      </Container>
    </main>
  );
}
