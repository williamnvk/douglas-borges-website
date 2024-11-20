import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { WordTransition } from "../components/WordTransition";
import Testimonials from "./Testimonials";
import dynamic from "next/dynamic";
import Icon from "@/components/shared/DynamicIcon";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "@/theme/consts";
import language, { siteImage, siteUrl } from "@/data/dictionaries";
import { Metadata } from "next";

const DynamicChallengesAndBenefits = dynamic(
  () => import("./ChallengesAndBenefits"),
  {
    loading: () => <Skeleton w="full" h="50vh" />,
  }
);

export const metadata: Metadata = {
  title: "Work & Life - Consultoria Empresarial",
  description:
    "Transforme sua empresa com nossa consultoria especializada em gestão, liderança e desenvolvimento organizacional. Soluções personalizadas para impulsionar seu negócio.",
  openGraph: {
    title: "Work & Life - Consultoria Empresarial | Douglas Borges Psicólogo",
    description:
      "Transforme sua empresa com nossa consultoria especializada em gestão, liderança e desenvolvimento organizacional.",
    images: [siteImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Life - Consultoria Empresarial | Douglas Borges Psicólogo",
    description:
      "Transforme sua empresa com nossa consultoria especializada em gestão, liderança e desenvolvimento organizacional.",
    images: [siteImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl + "/empresas",
  },
};

export default async function Company() {
  const intl = language;

  const testimonials = intl.testimonials.items;

  return (
    <>
      <Header page="company" isDark />
      <Box mt={HEADER_NAVBAR_HEIGHT} bg="gray.900">
        <Container maxW="container.xl" py={{ base: 4, md: 16, "2xl": 24 }}>
          <Stack
            w="full"
            flexDir={{ base: "column-reverse", md: "row" }}
            gap={8}
            align="stretch"
            justify="center"
          >
            <VStack flex={1} align="flex-start" justify="center" gap={0}>
              <Heading
                as="h1"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="hairline"
                data-aos="fade-up"
                color="white"
              >
                {intl.company.title}
              </Heading>
              <HStack
                align="center"
                justify="center"
                minH={{ base: "auto", md: "264px" }}
              >
                <Heading
                  as="h2"
                  fontSize={{ base: "88px", md: "220px" }}
                  fontWeight="extrabold"
                  color="white"
                >
                  <WordTransition words={["Life", "Work"]} typewriter />
                </Heading>

                <Heading
                  as="h2"
                  fontSize="32px"
                  fontWeight="light"
                  color="white"
                  mt="lg"
                >
                  &
                </Heading>
                <Heading
                  as="h2"
                  fontSize={{ base: "56px", md: "88px" }}
                  fontWeight="light"
                  color="white"
                >
                  <WordTransition
                    words={["Life", "Work", "Life"]}
                    delay={5000}
                    typewriter
                  />
                </Heading>
              </HStack>

              <Heading
                as="h2"
                color="white"
                fontSize={{ base: "xl", md: "4xl" }}
                fontWeight="bold"
              >
                {intl.company.subtitle}
              </Heading>
              <Heading
                as="h3"
                mt={{ base: 2, md: 0 }}
                color="white"
                fontSize={{ base: "sm", md: "2xl" }}
                fontWeight="light"
              >
                {intl.company.description}
              </Heading>
            </VStack>

            <Box
              w={{ base: "full", md: "400px" }}
              h={{ base: "300px", md: "460px" }}
              mx={{ base: "auto", md: "0" }}
              borderRadius="lg"
              display="block"
              style={{
                backgroundImage: "url(/assets/douglas-borges-em-pe.webp)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "100% auto",
              }}
              role="img"
              aria-label="Douglas Borges - Consultor Empresarial"
            ></Box>
          </Stack>
        </Container>
        <Testimonials testimonials={testimonials} />
        <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
          <DynamicChallengesAndBenefits
            title={intl.company.form.title}
            subtitle={intl.company.form.subtitle}
            relations={intl.company.form.items}
          />
        </Container>
        <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
          <SimpleGrid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            spacing={{ base: 2, md: 4 }}
            maxW="container.xl"
            mx="auto"
            color="white"
          >
            {intl.company.steps.map((s) => (
              <HStack key={s.title} align="flex-start" gap={6}>
                <Icon size={48} name={s.icon as never} />
                <VStack align="flex-start" flex={1} gap={4}>
                  <Heading as="h3" fontSize={{ base: "2xl", md: "4xl" }}>
                    {s.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "smaller", md: "sm" }}
                    color="gray.200"
                  >
                    {s.content}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
        <Container maxW="container.xl">
          <VStack
            gap={0}
            w="full"
            py={{ base: 6, md: 12 }}
            align={{ base: "flex-start", md: "flex-start" }}
            justify={{ base: "center", md: "center" }}
          >
            <Heading
              as="h2"
              color="gray.50"
              fontSize={{ base: "4xl", md: "6xl" }}
              my={{ base: 6, md: 0 }}
            >
              {intl.company.services.title}
            </Heading>
            <Text color="gray.50">{intl.company.services.subtitle}</Text>
            <Box w="full" mt={{ base: 4, md: 16 }}>
              <SimpleGrid
                gap={{ base: 2, md: 4 }}
                w="full"
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
              >
                {intl.company.services.items.map((s) => (
                  <VStack
                    key={`service-${s.title}`}
                    align="flex-start"
                    borderRadius="lg"
                    p={{ base: 4, md: 6 }}
                    bg="white"
                    minH={{ base: "auto", md: "260px" }}
                    boxShadow="md"
                  >
                    <VStack
                      align="flex-start"
                      color="gray.900"
                      gap={{ base: 0, md: 2 }}
                    >
                      <Flex w="full" justify="center" align="center" gap={4}>
                        <Icon size={32} name={s.icon as never} />
                        <Heading
                          as="h3"
                          fontSize={{ base: "2xl", md: "3xl" }}
                          w="full"
                        >
                          {s.title}
                        </Heading>
                      </Flex>
                      <Text color="gray.800" fontSize="small" my={4}>
                        {s.description}
                      </Text>
                    </VStack>
                  </VStack>
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
        <Container
          maxW="container.xl"
          position="relative"
          py={{ base: 4, md: 12 }}
          color="gray.50"
        >
          <VStack
            gap={8}
            w="full"
            align={{ base: "flex-start", md: "flex-start" }}
          >
            <Heading as="h2" fontSize="xl">
              {intl.faq.title}
            </Heading>
            <Accordion w="full" variant="custom">
              {intl.faq.questions.map((q) => (
                <AccordionItem key={`faq-${q.title}`}>
                  <AccordionButton>
                    <Box
                      as="span"
                      pr={{ base: 4, md: 8 }}
                      flex="1"
                      textAlign="left"
                    >
                      {q.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel
                    pb={4}
                    fontSize={{ base: "smaller", md: "sm" }}
                  >
                    {q.description}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </VStack>
        </Container>
        <Container
          maxW="container.xl"
          pb={{ base: 4, md: 12 }}
          pt={{ base: 0, md: 12 }}
        >
          <VStack
            mx={{ base: 0, md: "auto" }}
            p={{ base: 8, md: 24 }}
            maxW="container.xl"
            bg="gray.800"
            borderRadius="lg"
            flex={1}
            align={{ base: "flex-start", md: "flex-start" }}
            justify={{ base: "center", md: "flex-end" }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "6xl" }}
              color="gray.50"
            >
              {intl.company.cta.title}
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.50" my={2}>
              {intl.company.cta.subtitle}
            </Text>
            <Button
              as="a"
              href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Por%20gentileza%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20projeto%20%22Work%26Life%22%20"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineInverted"
              size="lg"
              w={{ base: "full", md: "auto" }}
              aria-label="Entre em contato via WhatsApp"
            >
              {intl.company.cta.button}
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
