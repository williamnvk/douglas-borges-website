import { getInsightBySlug } from "@/data";
import { notFound } from "next/navigation";
import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import Link from "next/link";
import { Metadata } from "next";
import { ClockIcon } from "lucide-react";
import { siteImage, siteUrl } from "@/data/dictionaries";
import Image from "next/image";
import { Tooltip } from "../components/ui/tooltip";

interface Props {
  params: {
    insights: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { current } = getInsightBySlug(params.insights);

  if (!current) {
    return {
      title: "Insight não encontrado",
    };
  }

  const title = `${current.title} | Insights e Reflexões`;
  const description = current.content[0].substring(0, 155);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: current.publishedAt,
      authors: "Douglas Borges",
      images: [current.cover || siteImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [current.cover || siteImage],
    },
    alternates: {
      canonical: `${siteUrl}/${params.insights}`,
    },
  };
}

export default function InsightPage({ params }: Props) {
  const { current, next, previous } = getInsightBySlug(params.insights);
  const bgColors = [
    "blue.100",
    "green.100",
    "purple.100",
    "pink.100",
    "orange.100",
  ];
  const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  if (!current) {
    notFound();
  }

  return (
    <>
      <Header />
      <Container
        maxW="container.lg"
        mt={HEADER_NAVBAR_HEIGHT}
        py={{ base: 4, md: 16, "2xl": 24 }}
        as="article"
      >
        <Box borderRadius="lg" bg={randomColor} p={{ base: 4, md: 8, xl: 16 }}>
          <Heading
            as="h1"
            size={{ base: "2xl", md: "4xl" }}
            fontWeight="light"
            mb={8}
          >
            {current.title}
          </Heading>
          <HStack justify="center" align="center" gap={4}>
            <Box w="auto">
              <Tooltip content="Tempo de leitura">
                <HStack
                  w="full"
                  align="center"
                  justify="flex-start"
                  color="gray.300"
                >
                  <ClockIcon size={22} />
                  <Text fontSize="small">{current.timeToRead}</Text>
                </HStack>
              </Tooltip>
            </Box>
            <HStack
              gap={2}
              flex={1}
              align="flex-start"
              justify="flex-start"
              borderLeft="solid 1px"
              borderLeftColor="gray.100"
              pl={2}
            >
              {current.tags.map((tag) => (
                <Link key={tag} href={`/insights?tag=${tag}`}>
                  <Text
                    fontSize="sm"
                    color="gray.300"
                    _hover={{ color: "fg.muted" }}
                  >
                    #{tag}
                  </Text>
                </Link>
              ))}
            </HStack>
          </HStack>
        </Box>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: current.title,
              description: current.content[0],
              timeRequired: `PT${current.timeToRead}M`,
            }),
          }}
        />

        {current.cover && (
          <Box w="full" mt={8} borderRadius="lg" overflow="hidden">
            <Image
              src={current.cover}
              alt={current.title}
              width={1000}
              height={1000}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        )}

        <VStack
          gap={{ base: 2, md: 4 }}
          w="full"
          align="flex-start"
          mt={{ base: 4, md: 8 }}
        >
          {current.content.map((paragraph, index) => (
            <Text
              key={index}
              fontSize={{ base: "sm", md: "medium" }}
              as={index === 0 ? "strong" : "p"}
            >
              {paragraph}
            </Text>
          ))}
        </VStack>
      </Container>
      <Container maxW="container.lg" py={{ base: 4, md: 8 }} mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Leia também
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={4}
          mt={8}
          as="nav"
          aria-label="Post navigation"
        >
          {previous && (
            <Box
              as={Link}
              // @ts-ignore
              href={`/${previous.slug}`}
              rel="prev"
              bg="bg.subtle"
              borderRadius="lg"
              p={{ base: 4, md: 8 }}
            >
              <Text fontWeight="bold">{previous.title}</Text>
              <Tooltip content="Tempo de leitura">
                <HStack
                  w="full"
                  align="center"
                  justify="flex-start"
                  color="gray.300"
                >
                  <ClockIcon size={22} />
                  <Text fontSize="small">{previous.timeToRead}</Text>
                </HStack>
              </Tooltip>
            </Box>
          )}
          {next && (
            <Box
              as={Link}
              // @ts-ignore
              href={`/${next.slug}`}
              rel="next"
              bg="bg.subtle"
              borderRadius="lg"
              p={{ base: 4, md: 8 }}
            >
              <Text fontWeight="bold">{next.title}</Text>
              <Tooltip content="Tempo de leitura">
                <HStack
                  w="full"
                  align="center"
                  justify="flex-start"
                  color="gray.300"
                >
                  <ClockIcon size={22} />
                  <Text fontSize="small">{next.timeToRead}</Text>
                </HStack>
              </Tooltip>
            </Box>
          )}
        </SimpleGrid>
      </Container>
    </>
  );
}
