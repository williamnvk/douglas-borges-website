import {
  VStack,
  Heading,
  Text,
  Box,
  Badge,
  HStack,
} from "@chakra-ui/react";

export function ProcessSteps() {
  const steps = [
    {
      step: "1º Passo",
      title: "Compreensão Estratégica do Papel do Comportamento",
      description:
        "O primeiro passo para uma gestão eficiente de pessoas é entender que o desempenho de um colaborador vai além da técnica. Nem sempre quem 'sabe fazer' está emocionalmente preparado para 'querer fazer' ou 'conseguir fazer' sob pressão, conflito ou mudanças.",
    },
    {
      step: "2º Passo",
      title: "Escolha do Plano",
      description:
        "Selecione o plano mais adequado às suas necessidades através do nosso site ou entre em contato conosco para orientação personalizada.",
    },
    {
      step: "3º Passo",
      title: "Engenharia de Assessment",
      description:
        "Agende a reunião com o psicólogo para definir o perfil comportamental esperado para a função, estabelecendo claramente as expectativas do gestor.",
    },
    {
      step: "4º Passo",
      title: "Envio dos Dados dos Colaboradores",
      description:
        "Forneça os dados necessários (nome completo, CPF, e-mail e WhatsApp) dos colaboradores que serão avaliados, garantindo a confidencialidade do processo.",
    },
    {
      step: "5º Passo",
      title: "Aplicação da Avaliação",
      description:
        "A avaliação individual será conduzida 100% online, de forma assistida e profissional, pela equipe do Psicólogo Douglas Borges.",
    },
    {
      step: "6º Passo",
      title: "Análise Detalhada",
      description:
        "Elaboração do estudo comparativo entre as expectativas da função (definidas pelo gestor) e os resultados reais do perfil de cada colaborador avaliado.",
    },
    {
      step: "7º Passo",
      title: "Devolutiva Estratégica",
      description:
        "Entrega do relatório técnico completo e reunião de devolutiva com o gestor, incluindo explicações claras, gráficos e recomendações práticas para decisões assertivas.",
    },
  ];

  return (
    <VStack
      as="section"
      w="full"
      align="flex-start"
      gap={{ base: 6, sm: 8 }}
      py={{ base: 4, sm: 6, md: 12 }}
    >
      <VStack align="flex-start" gap={{ base: 2, sm: 3 }}>
        <Heading
          as="h2"
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        >
          Etapas do Processo
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          color="fg.muted"
        >
          Nosso processo estruturado garante resultados precisos e úteis
          para sua tomada de decisão:
        </Text>
      </VStack>

      <VStack
        w="full"
        gap={0}
        borderWidth={2}
        borderRadius={{ base: "lg", md: "md" }}
        overflow="hidden"
        borderColor="gray.100"
      >
        {steps.map((etapa, index) => (
          <Box
            key={index}
            w="full"
            p={{ base: 3, sm: 4, md: 4, lg: 6 }}
            borderBottomWidth={1}
            borderBottomColor={"gray.100"}
            bg={index === 0 ? "blue.50" : "white"}
            _last={{
              borderBottomWidth: 0,
            }}
          >
            <VStack align="flex-start" gap={{ base: 2, sm: 3, md: 4 }}>
              <HStack flexWrap="wrap" gap={{ base: 2, md: 3 }}>
                <Badge
                  colorPalette={index === 0 ? "blue" : "gray"}
                  fontSize={{ base: "xs", sm: "sm" }}
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  {etapa.step}
                </Badge>
                <Heading
                  as="h3"
                  fontSize={{
                    base: "sm",
                    sm: "md",
                    md: "lg",
                    lg: "xl",
                  }}
                >
                  {etapa.title}
                </Heading>
              </HStack>
              <Text
                color="gray.700"
                lineHeight="1.6"
                fontSize={{ base: "xs", sm: "sm", md: "md" }}
              >
                {etapa.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </VStack>

      {/* Cronograma Resumido */}
      <HStack gap={{ base: 3, sm: 4 }} w="full" flexWrap="wrap">
        <Heading flex={1} fontSize={{ base: "sm", sm: "md", md: "lg" }}>
          Cronograma Estimado
        </Heading>
        <VStack gap={0} align="stretch">
          <Text
            fontWeight="600"
            color="blue.600"
            fontSize={{ base: "xs", sm: "sm" }}
          >
            Prazo Total
          </Text>
          <Text
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            fontWeight="bold"
          >
            5 a 7 dias úteis
          </Text>
        </VStack>
        <VStack gap={0} align="stretch">
          <Text
            fontWeight="600"
            color="blue.600"
            fontSize={{ base: "xs", sm: "sm" }}
          >
            Processo
          </Text>
          <Text
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            fontWeight="bold"
          >
            100% Online
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}