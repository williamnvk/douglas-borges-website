"use client";

import { useState } from "react";
import {
  Heading,
  HStack,
  VStack,
  Box,
  SimpleGrid,
  Tag,
  Skeleton,
  theme,
} from "@chakra-ui/react";
import { CheckCircle2Icon, CheckIcon, SquareCheckIcon, SquareIcon } from "lucide-react";

export default function ChallengesAndBenefits({
  title,
  subtitle,
  relations,
}: {
  title: string;
  subtitle: string;
  relations: Array<{ challenge: string; benefit: string }>;
}) {
  const [checkedItems, setCheckedItems] = useState(
    Array(relations.length).fill(false)
  );

  const handleCheck = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

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
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2} flex={1} w="full">
        {relations.map((item, index) => (
          <>
            <HStack
              key={`challenge-${index}`}
              role="button"
              onClick={() => handleCheck(index)}
              cursor="pointer"
              p={{ base: 3, md: 4 }}
              gap={{ base: 3, md: 4 }}
              align="center"
              justify="center"
              borderRadius={8}
              border="2px solid"
              borderColor="gray.700"
              bg="gray.800"
              _hover={{
                bg: "gray.700",
                borderColor: "gray.500",
              }}
            >
              <Box color="gray.50">
                {checkedItems[index] ? (
                  <SquareCheckIcon size={24} />
                ) : (
                  <SquareIcon size={24} />
                )}
              </Box>
              <Heading
                color="gray.50"
                fontSize={{ base: "lg", md: "xl" }}
                flex={1}
              >
                {item.challenge}
              </Heading>
            </HStack>

            {checkedItems[index] && (
              <Box color="gray.100" display={{ base: "block", md: "none" }}>
                <HStack py={4}>
                  <Heading
                    color="gray.100"
                    fontSize={{ base: "lg", md: "xl" }}
                    flex={1}
                  >
                    {item.benefit}
                  </Heading>
                  <Box color="gray.100">
                    <CheckCircle2Icon color={theme.colors.green[500]} size={32} />
                  </Box>
                </HStack>
              </Box>
            )}
          </>
        ))}
      </SimpleGrid>

      <SimpleGrid
        columns={3}
        spacing={2}
        flex={1}
        w="full"
        display={{ base: "none", md: "grid" }}
      >
        {relations.map((item, index) => (
          <Box key={`benefit-${index}`}>
            {checkedItems.some((item) => item) ? (
              checkedItems[index] ? (
                <HStack p={6} borderRadius={8} bg="gray.800" h="120px">
                  <Heading color="gray.100" fontSize="xl" flex={1}>
                    {item.benefit}
                  </Heading>
                  <Box color="gray.100">
                    <CheckIcon size={32} />
                  </Box>
                </HStack>
              ) : (
                <Skeleton height="120px" borderRadius={8} />
              )
            ) : (
              <Skeleton height="120px" borderRadius={8} />
            )}
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
