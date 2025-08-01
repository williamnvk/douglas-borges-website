import { Metadata } from "next";
import {
  Container,
  Box,
  Text,
  HStack,
  Heading,
  Button,
  VStack,
  Tag,
  Grid,
} from "@chakra-ui/react";
import { HEADER_NAVBAR_HEIGHT } from "../../theme/consts";
import { INSIGHTS } from "@/data";
import { ClockIcon } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { siteImage, siteUrl } from "@/data/site-constants";
import Image from "next/image";
import { Tooltip } from "../components/ui/tooltip";

interface Props {
  searchParams: {
    pagina?: string;
    tag?: string;
  };
}

const description =
  "Reflexões inspiradoras, insights práticos sobre inteligência emocional, liderança estratégica com propósito e como alcançar equilíbrio entre sua vida pessoal, familiar e empresarial";

export const metadata: Metadata = {
  title: "Insights e Reflexões",
  description,
  openGraph: {
    title: "Insights e Reflexões | Douglas Borges",
    description,
    type: "website",
    images: [siteImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl + "/insights",
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
    name: "Insights e Reflexões | Douglas Borges",
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
      <Header />
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
            <Tag.Root as="span" fontSize="lg" color="fg.muted" ml={2} mb={8}>
              <Tag.Label>#{selectedTag}</Tag.Label>
            </Tag.Root>
          )}

          <Grid
            as="section"
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={6}
            aria-label="Blog posts grid"
          >
            {currentPosts.map((post) => (
              <article key={post.slug}>
                <VStack
                  align="flex-start"
                  as={Link}
                  // @ts-expect-error: Type compatibility issue
                  href={`/${post.slug}`}
                  p={6}
                  borderRadius="lg"
                  bg="bg.subtle"
                  _hover={{ bg: "gray.100" }}
                  transition="background 0.2s"
                >
                  {post && post?.cover && (
                    <Box w="full" borderRadius="lg" overflow="hidden">
                      <Image
                        src={post?.cover || ""}
                        alt={post.title}
                        width={1000}
                        height={1000}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                  )}
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="light"
                    mb={4}
                  >
                    {post.title}
                  </Text>
                  <HStack gap={4} w="full">
                    <Box w="auto">
                      <Tooltip content="Tempo de leitura">
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
                      gap={0}
                      flexWrap="wrap"
                    >
                      {post.tags.map((tag: string) => (
                        <Link key={tag} href={`/insights?tag=${tag}`}>
                          <Text
                            fontSize="sm"
                            color="gray.300"
                            _hover={{ color: "fg.muted" }}
                            mr={2}
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
          </Grid>

          {totalPages > 1 && (
            <nav role="navigation" aria-label="Pagination">
              <HStack gap={2} justify="center" mt={8}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <Button
                      key={pageNum}
                      as={Link}
                      // @ts-expect-error: Type compatibility issue
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
