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
import { getDictionary, Locale } from "../dictionaries";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "@/theme/consts";

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

export default async function Home(props: Props) {
  const params = await props.params;

  const { lang } = params;

  const intl = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} page="about" />
      <Container maxW="container.xl" mt={HEADER_NAVBAR_HEIGHT}>
        <VStack gap={{ base: 4, md: 8 }} w="full">
          <Stack
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: 4, md: 8 }}
            align="stretch"
          >
            <Box
              w={{ base: "full", md: "400px" }}
              h={{ base: "400px", md: "400px" }}
              mx={{ base: "auto", md: "0" }}
              borderRadius="lg"
              display="block"
              style={{
                backgroundImage: "url(/assets/douglas-borges.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% auto",
              }}
            ></Box>

            <VStack
              gap={4}
              flex={1}
              align="flex-start"
              bg="gray.900"
              p={{ base: 4, md: 16 }}
              borderRadius="lg"
              justify="flex-end"
              color="gray.50"
            >
              <Heading fontSize="6xl" fontWeight="bold">
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
                borderColor="gray.900"
                borderWidth={4}
                p={{ base: 4, md: 8 }}
                borderRadius="lg"
                justify="flex-end"
                color="gray.900"
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
                bg="gray.50"
                p={{ base: 4, md: 8 }}
                align="flex-start"
                borderRadius="lg"
                justify="flex-end"
                color="gray.500"
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
            bg="gray.50"
            p={{ base: 4, md: 8 }}
            align="flex-start"
            borderRadius="lg"
            justify="flex-end"
            color="gray.500"
          >
            <Badge fontWeight="light">{intl.about.specialty.title}</Badge>
            <Text>{intl.about.specialty.description}</Text>
          </VStack>

          <VStack
            gap={2}
            w="full"
            bg="gray.50"
            p={{ base: 4, md: 8 }}
            align="flex-start"
            borderRadius="lg"
            justify="flex-end"
            color="gray.500"
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
            color="gray.50"
            borderRadius="lg"
          >
            <Badge fontWeight="light">{intl.about.mission.title}</Badge>
            <Heading fontSize="4xl" fontStyle="italic">
              {intl.about.mission.subtitle}
            </Heading>
            <Text fontSize="2xl" fontStyle="italic">
              {intl.about.mission.description}
            </Text>
          </VStack>
        </VStack>
      </Container>
    </>
  );
}
