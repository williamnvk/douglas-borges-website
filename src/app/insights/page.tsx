import { Metadata } from "next";
import {
  Container,
  SimpleGrid,
  Box,
  Text,
  HStack,
  Heading,
  Button,
  VStack,
  Tooltip,
  Tag,
} from "@chakra-ui/react";
import { HEADER_NAVBAR_HEIGHT } from "@/theme/consts";
import { INSIGHTS } from "@/data";
import { ClockIcon } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/shared/Header";

interface Props {
  searchParams: {
    pagina?: string;
    tag?: string;
  };
}

const title = "Insights e Reflexões | Douglas Borges";
const description =
  "Reflexões inspiradoras, insights práticos sobre inteligência emocional, liderança estratégica com propósito e como alcançar equilíbrio entre sua vida pessoal, familiar e empresarial";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function InsightsPage({ searchParams }: Props) {
  const currentPage = Number(searchParams.pagina) || 1;
  const selectedTag = searchParams.tag;
  const postsPerPage = 10;

  // Filter posts by tag if one is selected
  const filteredPosts = selectedTag
    ? INSIGHTS.filter((post) => post.tags.includes(selectedTag))
    : INSIGHTS;

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: title,
    description: description,
    blogPost: currentPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      keywords: post.tags.join(","),
      timeRequired: post.timeToRead,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}`,
    })),
  };

  return (
    <>
      <Header page="insights" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main role="main">
        <Container
          maxW="container.lg"
          mt={HEADER_NAVBAR_HEIGHT}
          py={{ base: 4, md: 16, "2xl": 24 }}
        >
          <Heading as="h1" size="2xl" mb={8}>
            Insights e Reflexões
          </Heading>

          {selectedTag && (
            <Tag as="span" fontSize="lg" color="gray.500" ml={2} mb={8}>
              #{selectedTag}
            </Tag>
          )}

          <SimpleGrid
            as="section"
            columns={{ base: 1, md: 2 }}
            spacing={6}
            aria-label="Blog posts grid"
          >
            {currentPosts.map((post) => (
              <article key={post.slug}>
                <VStack
                  align="flex-start"
                  as={Link}
                  href={`/${post.slug}`}
                  p={6}
                  borderRadius="lg"
                  bg="gray.50"
                  _hover={{ bg: "gray.100" }}
                  transition="background 0.2s"
                >
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="light"
                    mb={4}
                  >
                    {post.title}
                  </Text>
                  <HStack spacing={4} w="full">
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
                          <Text fontSize="small">{post.timeToRead}</Text>
                        </HStack>
                      </Tooltip>
                    </Box>
                    <HStack
                      flex={1}
                      borderLeft="solid 1px"
                      borderLeftColor="gray.100"
                      pl={2}
                    >
                      {post.tags.map((tag: string) => (
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
                </VStack>
              </article>
            ))}
          </SimpleGrid>

          {totalPages > 1 && (
            <nav role="navigation" aria-label="Pagination">
              <HStack spacing={2} justify="center" mt={8}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <Button
                      key={pageNum}
                      as={Link}
                      href={`/insights?pagina=${pageNum}${
                        selectedTag ? `&tag=${selectedTag}` : ""
                      }`}
                      variant={pageNum === currentPage ? "solid" : "outline"}
                      size="sm"
                    >
                      {pageNum}
                    </Button>
                  )
                )}
              </HStack>
            </nav>
          )}
        </Container>
      </main>
    </>
  );
}
