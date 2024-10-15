import { Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { getDictionary, Locale } from "../dictionaries";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function About({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);
  return (
    <>
      <Container maxW="container.xl">
        <VStack gap={8} w="full">
          <Heading fontSize="xl">{intl.about.title}</Heading>
          <Text>{intl.about.entry}</Text>

          <Heading>{intl.about.exp.title}</Heading>
          <HStack>
            {intl.about.exp.items.map((e) => (
              <VStack key={`about-exp-${e.title}`}>
                <Text fontWeight="bold">{e.title}</Text>
                <Text>{e.description}</Text>
              </VStack>
            ))}
          </HStack>

          <Heading>{intl.about.approaches.title}</Heading>
          <Text>{intl.about.approaches.entry}</Text>
          <HStack>
            {intl.about.approaches.items.map((a) => (
              <VStack key={`about-approaches-${a.title}`}>
                <Text fontWeight="bold">{a.title}</Text>
                <Text>{a.description}</Text>
              </VStack>
            ))}
          </HStack>

          <Heading>{intl.about.mission.title}</Heading>
          <Text>{intl.about.mission.entry}</Text>
        </VStack>
      </Container>
    </>
  );
}
