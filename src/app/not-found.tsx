"use client";

import { Header } from "@/components/shared/Header";
import { HEADER_NAVBAR_HEIGHT } from "../theme/consts";
import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.log(error);
  return (
    <>
      <Header />
      <Container maxW="8xl" mt={HEADER_NAVBAR_HEIGHT}>
        <VStack
          align="center"
          justify="center"
          minH={{ base: "50vh", md: `calc(80vh - ${HEADER_NAVBAR_HEIGHT})` }}
        >
          <Heading>Página não encontrada</Heading>
          <Text>A página que você está procurando não foi encontrada.</Text>
          <Button
            as={Link} // @ts-expect-error: Type compatibility issue
            href={"/"}
          >
            Ir para página inicial
          </Button>
        </VStack>
      </Container>
    </>
  );
}
