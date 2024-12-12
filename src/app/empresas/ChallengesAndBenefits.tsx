"use client";

import {
  Heading,
  HStack,
  VStack,
  Box,
  SimpleGrid,
  Tag,
} from "@chakra-ui/react";
import { CheckIcon } from "lucide-react";

export default function ChallengesAndBenefits({
  title,
  subtitle,
  relations,
}: {
  title: string;
  subtitle: string;
  relations: Array<{ challenge: string; benefit: string }>;
}) {
  return (
    <VStack align="flex-start" w="full" gap={{ base: 4, md: 8 }}>
      <VStack w="full" align="flex-start" gap={2}>
        <Tag fontWeight="bold" bg="white">
          {title}
        </Tag>
        <Heading color="gray.50" fontSize={{ base: "2xl", md: "5xl" }}>
          {subtitle}
        </Heading>
      </VStack>

      <SimpleGrid
        columns={3}
        spacing={2}
        flex={1}
        w="full"
        display={{ base: "none", md: "grid" }}
      >
        {relations.map((item, index) => (
          <Box key={`benefit-${index}`}>
            <HStack p={6} borderRadius={8} bg="gray.800" h="120px">
              <Heading color="gray.100" fontSize="xl" flex={1}>
                {item.benefit}
              </Heading>
              <Box color="gray.100">
                <CheckIcon size={32} />
              </Box>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
