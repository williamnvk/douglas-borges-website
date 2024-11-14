"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function PersonalFellings({
  fellings,
}: {
  fellings: Array<{
    title: string;
    description: string;
    text: string;
  }>;
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <HStack>
      <VStack borderRightWidth={1}>
        {fellings.map((felling, index) => (
          <Text
            key={index}
            w="200px"
            p={4}
            m={2}
            cursor="pointer"
            onClick={() => handleToggle(index)}
            fontWeight="bold"
            fontSize="lg"
          >
            {felling.title}
          </Text>
        ))}
      </VStack>

      <Box flex={1}>
        <Text>{fellings[activeIndex].text}</Text>
      </Box>
    </HStack>
  );
}
