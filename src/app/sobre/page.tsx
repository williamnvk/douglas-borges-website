import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  SimpleGrid,
  Badge,
  Stack,
} from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import { siteDescription, siteUrl } from "@/data/site-constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: siteDescription,
  openGraph: {
    title: "Sobre",
    description: siteDescription,
    images: [siteUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl + "/sobre",
  },
};

export default function About() {
  return (
    <main>
      <Header />
      <Container maxW="8xl" mt={HEADER_NAVBAR_HEIGHT}>
        <VStack gap={{ base: 4, md: 8 }} w="full">
          <Stack
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: 4, md: 8 }}
            align="stretch"
          >
            <Box
              as="section"
              w={{ base: "full", md: "400px" }}
              h={{ base: "300px", md: "500px" }}
              mx={{ base: "auto", md: "0" }}
              borderRadius="lg"
              display="block"
              style={{
                backgroundImage: "url(/assets/perfil.webp)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              bgSize={{ base: "110% auto", md: "150% auto" }}
              role="img"
              aria-label={"Foto de perfil"}
            ></Box>

            <VStack
              gap={4}
              flex={1}
              align="flex-start"
              bg="gray.900"
              p={{ base: 4, md: 16 }}
              borderRadius="lg"
              justify="flex-end"
              color="bg.subtle"
              pt={{ base: 12, md: 0 }}
            >
              <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold">
                Douglas Borges
              </Heading>
              <Text fontSize="smaller">Psicólogo e psicanalista com quase 10 anos de experiência, especializado em consultoria psicológica e inteligência emocional. Ele se dedica a ajudar profissionais de alto nível, como CEOs e executivos, a equilibrar suas vidas pessoais e profissionais. Sua abordagem visa alinhar os desafios da gestão corporativa com a qualidade de vida, promovendo um equilíbrio saudável entre as exigências do trabalho e os compromissos pessoais.</Text>
            </VStack>
          </Stack>

          <SimpleGrid
            gap={{ base: 4, md: 8 }}
            w="full"
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
          >
            {[
              {
                title: "Psicólogo",
                description: "Douglas possui registro profissional (CRP/PR 08-21013 e CRP/SC 12-13884) e tem experiência em diversas áreas da psicologia, incluindo a terapia cognitiva comportamental, analítica e psicanalítica."
              },
              {
                title: "Consultoria Organizacional",
                description: "Ele atua como psicólogo organizacional, oferecendo treinamento e desenvolvimento para líderes e equipes nas empresas."
              }
            ].map((e) => (
              <VStack
                key={`about-exp-${e.title}`}
                w="full"
                align="flex-start"
                bg="bg.subtle"
                borderWidth={4}
                p={{ base: 4, md: 8 }}
                borderRadius="lg"
                justify="flex-end"
                
              >
                <Heading
                  fontWeight="bold"
                  fontSize="4xl"
                  mt={{ base: 4, md: 8 }}
                >
                  {e.title}
                </Heading>
                <Text fontSize="smaller">{e.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>

          <VStack gap={2} w="full" align="flex-start">
            <Heading size="md">Abordagens de Trabalho</Heading>
            <Text>Douglas utiliza uma variedade de métodos terapêuticos para atender às necessidades de seus clientes:</Text>
          </VStack>

          <SimpleGrid
            gap={{ base: 2, md: 6 }}
            w="full"
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            }}
          >
            {[
              {
                title: "Psicoterapia",
                description: "Oferece sessões terapêuticas focadas na análise de questões emocionais e comportamentais, com o objetivo de promover autoconhecimento e mudanças positivas."
              },
              {
                title: "Orientação Psicológica",
                description: "Ajuda indivíduos a resolver conflitos pessoais ou profissionais, desenvolver autoconfiança e equilibrar a ansiedade."
              },
              {
                title: "Análise de Perfil Comportamental",
                description: "Realiza análises para compatibilizar perfis emocionais de colaboradores com as expectativas organizacionais."
              }
            ].map((a) => (
              <VStack
                key={`about-approaches-${a.title}`}
                bg="bg.subtle"
                p={{ base: 4, md: 8 }}
                align="flex-start"
                borderRadius="lg"
                justify="flex-end"
                color="fg.muted"
              >
                <Heading
                  fontWeight="bold"
                  fontSize="lg"
                  mt={{ base: 4, md: 8 }}
                >
                  {a.title}
                </Heading>
                <Text>{a.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>

          <VStack
            gap={2}
            w="full"
            bg="bg.subtle"
            p={{ base: 4, md: 8 }}
            align="flex-start"
            borderRadius="lg"
            justify="flex-end"
            color="fg.muted"
          >
            <Badge fontWeight="light">Especialidade</Badge>
            <Text>Psicoterapia Individual através da Terapia Cognitiva Comportamental</Text>
          </VStack>

          <VStack
            gap={2}
            w="full"
            bg="bg.subtle"
            p={{ base: 4, md: 8 }}
            align="flex-start"
            borderRadius="lg"
            justify="flex-end"
            color="fg.muted"
          >
            <Badge fontWeight="light">Foco</Badge>
            {[
              "Através dos atendimentos individuais (online), ajudo jovens e adultos que buscam um estilo de vida saudável, equilibrado, mas se veem sabotados pelas mais diversas dificuldades emocionais - baixa autoestima, rejeição, ansiedade, falta de motivação, sentimento de incapacidade, entre outros.",
              "A psicoterapia é um passo assertivo em direção a um estilo de vida saudável e com sentido, sendo sempre fiel a sua essência."
            ].map((d, i) => (
              <Text key={`focus-${i}`}>{d}</Text>
            ))}
          </VStack>

          <VStack
            gap={2}
            w="full"
            align="flex-start"
            p={{ base: 8, md: 16 }}
            bg="gray.900"
            color="bg.subtle"
            borderRadius="lg"
          >
            <Badge fontWeight="light">Missão</Badge>
            <Heading fontSize={{ base: "xl", md: "4xl" }} fontStyle="italic">
              Como cristão, minha missão é apoiar líderes a alcançarem equilíbrio emocional e a prosperarem em suas jornadas, capacitando-os a gerar empregos e garantir o sustento de inúmeras famílias.
            </Heading>
            <Text fontSize={{ base: "sm", md: "2xl" }} fontStyle="italic">
              Ao promover ambientes de trabalho saudáveis e harmonizar suas próprias vidas pessoais, esses líderes inspiram futuras gerações a enxergarem a sucessão de forma positiva, leve e sustentável, moldando um legado de liderança saudável e comprometida com o futuro.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </main>
  );
}
