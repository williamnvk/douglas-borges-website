"use client";

import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const CardStack: FC<{
  cards: Array<{
    icon: string;
    title: string;
    description: string;
    text: string;
  }>;
}> = ({ cards }) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const offsetTop = containerRef.current.offsetTop;
      const newScrollY = window.scrollY - offsetTop;
      setScrollY(newScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateTransform = useCallback(
    (index: number) => {
      const progress =
        (scrollY - index * window.innerHeight) / window.innerHeight;

      const scale =
        index < Math.ceil(scrollY / window.innerHeight)
          ? Math.max(.75, 1 - Math.abs(progress) * 0.15)
          : 1;
      const translateY = Math.min(0, -progress * 25);

      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
      };
    },
    [scrollY]
  );

  return (
    <VStack ref={containerRef} w="full" pos="relative" gap={12} p={0} m={0}>
      {cards.map((card, index) => (
        <Box
          key={card.title}
          p={32}
          borderRadius={16}
          bg={`gray.${100 * index}`}
          style={{
            ...calculateTransform(index),
            position: "sticky",
            top: "140px",
            zIndex: 10 + index,
            transformOrigin: "center top",
            transition: "transform 500ms ease-in-out",
            
          }}
          borderWidth={5}
          borderColor="white"
          boxShadow="lg"
        >
          <Heading>{card.title}</Heading>
          <Text>{card.description}</Text>
          <Text>{card.text}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default CardStack;
