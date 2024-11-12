import {
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Box,
  Button,
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
      <Container maxW="container.xl" p={5} mt={HEADER_NAVBAR_HEIGHT}>
        <VStack gap={8} w="full">
          <Heading fontSize="2xl" textAlign="center">
            {intl.about.title}
          </Heading>
          <Text fontSize="lg" textAlign="center">
            {intl.about.entry}
          </Text>

          <Box borderWidth={1} borderRadius="lg" p={4} boxShadow="md">
            <Heading size="md" textAlign="center">
              {intl.about.exp.title}
            </Heading>
            <HStack spacing={4} justify="center">
              {intl.about.exp.items.map((e) => (
                <VStack
                  key={`about-exp-${e.title}`}
                  borderWidth={1}
                  borderRadius="md"
                  p={3}
                  boxShadow="sm"
                >
                  <Text fontWeight="bold">{e.title}</Text>
                  <Text>{e.description}</Text>
                </VStack>
              ))}
            </HStack>
          </Box>

          <Box borderWidth={1} borderRadius="lg" p={4} boxShadow="md">
            <Heading size="md" textAlign="center">
              {intl.about.approaches.title}
            </Heading>
            <Text textAlign="center">{intl.about.approaches.entry}</Text>
            <HStack spacing={4} justify="center">
              {intl.about.approaches.items.map((a) => (
                <VStack key={`about-approaches-${a.title}`}>
                  <Text fontWeight="bold">{a.title}</Text>
                  <Text>{a.description}</Text>
                </VStack>
              ))}
            </HStack>
          </Box>

          <Box borderWidth={1} borderRadius="lg" p={4} boxShadow="md">
            <Heading size="md" textAlign="center">
              {intl.about.mission.title}
            </Heading>
            <Text textAlign="center">{intl.about.mission.entry}</Text>
          </Box>

          <Button colorScheme="teal" size="lg" mt={5}>
            Learn More
          </Button>
        </VStack>
      </Container>
    </>
  );
}
