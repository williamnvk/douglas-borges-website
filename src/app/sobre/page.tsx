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
import language, { siteDescription, siteUrl } from "@/data/dictionaries";
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
  const intl = language;

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
                {intl.about.title}
              </Heading>
              <Text fontSize="smaller">{intl.about.entry}</Text>
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
            {intl.about.exp.items.map((e) => (
              <VStack
                key={`about-exp-${e.title}`}
                w="full"
                align="flex-start"
                bg="white"
                border
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
            <Heading size="md">{intl.about.approaches.title}</Heading>
            <Text>{intl.about.approaches.entry}</Text>
          </VStack>

          <SimpleGrid
            gap={{ base: 2, md: 6 }}
            w="full"
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            }}
          >
            {intl.about.approaches.items.map((a) => (
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
            <Badge fontWeight="light">{intl.about.specialty.title}</Badge>
            <Text>{intl.about.specialty.description}</Text>
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
            <Badge fontWeight="light">{intl.about.focus.title}</Badge>
            {intl.about.focus.description.map((d, i) => (
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
            <Badge fontWeight="light">{intl.about.mission.title}</Badge>
            <Heading fontSize={{ base: "xl", md: "4xl" }} fontStyle="italic">
              {intl.about.mission.subtitle}
            </Heading>
            <Text fontSize={{ base: "sm", md: "2xl" }} fontStyle="italic">
              {intl.about.mission.description}
            </Text>
          </VStack>
        </VStack>
      </Container>
    </main>
  );
}
