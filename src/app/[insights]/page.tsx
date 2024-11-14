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
  Tooltip,
} from "@chakra-ui/react";
import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "@/theme/consts";
import Link from "next/link";
import { Metadata } from "next";
import { ClockIcon } from "lucide-react";

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
      title: "Insight Not Found",
    };
  }

  return {
    title: `${current.title} | Your Site Name`,
    description: current.content[0].substring(0, 155), // First paragraph as description, truncated
    openGraph: {
      title: current.title,
      description: current.content[0].substring(0, 155),
      type: "article",
      publishedTime: current.publishedAt,
      authors: "Douglas Borges",
    },
    twitter: {
      card: "summary_large_image",
      title: current.title,
      description: current.content[0].substring(0, 155),
    },
    alternates: {
      canonical: `https://yoursite.com/insights/${params.insights}`,
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
      <Header page="insights" />
      <Container
        maxW="container.lg"
        mt={HEADER_NAVBAR_HEIGHT}
        py={{ base: 4, md: 16, "2xl": 24 }}
        as="article"
      >
        <Box borderRadius="lg" bg={randomColor} p={{ base: 4, md: 32 }}>
          <Heading as="h1" size={{ base: "2xl", md: "4xl" 	}} fontWeight="light" mb={8}>
            {current.title}
          </Heading>
          <HStack justify="center" align="center" gap={4}>
            <Box w="auto">
              <Tooltip
                label="Tempo de leitura"
                gutter={16}
                hasArrow
                placement="left"
              >
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
            <HStack gap={2} flex={1} align="flex-start" justify="flex-start">
              {current.tags.map((tag) => (
                <Link key={tag} href={`/insights?tag=${tag}`}>
                  <Text
                    fontSize="sm"
                    color="gray.300"
                    _hover={{ color: "gray.500" }}
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
      <Container maxW="container.lg" py={{ base: 4, md: 8 }}>
        <Heading as="h2" size="lg" mb={4}>
          Leia também
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={4}
          mt={8}
          as="nav"
          aria-label="Post navigation"
        >
          {previous && (
            <Box
              as={Link}
              href={`/${previous.slug}`}
              rel="prev"
              bg="gray.50"
              borderRadius="lg"
              p={{ base: 4, md: 8 }}
            >
              <Text fontWeight="bold">{previous.title}</Text>
              <Tooltip
                label="Tempo de leitura"
                gutter={16}
                hasArrow
                placement="left"
              >
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
              href={`/${next.slug}`}
              rel="next"
              bg="gray.50"
              borderRadius="lg"
              p={{ base: 4, md: 8 }}
            >
              <Text fontWeight="bold">{next.title}</Text>
              <Tooltip
                label="Tempo de leitura"
                gutter={16}
                hasArrow
                placement="left"
              >
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
