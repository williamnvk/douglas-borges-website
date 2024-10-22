"use client";

import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";

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
  const animationRef = useRef<number>();

  const handleScroll = () => {
    if (containerRef.current) {
      const offsetTop = containerRef.current.offsetTop;
      const newScrollY = window.scrollY - offsetTop;
      setScrollY(newScrollY);
    }
    animationRef.current = requestAnimationFrame(handleScroll);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(handleScroll);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

  const calculateTransform = useCallback(
    (index: number) => {
      const progress =
        (scrollY - index * window.innerHeight) / window.innerHeight;
      const easedProgress = easeOutCubic(Math.min(Math.max(progress, 0), 1));

      const scale =
        index < Math.ceil(scrollY / window.innerHeight)
          ? Math.max(0.75, 1 - easedProgress * 0.15)
          : 1;
      const translateY = Math.min(0, -easedProgress * 25);

      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: 1 - easedProgress * 0.5,
      };
    },
    [scrollY]
  );

  return (
    <VStack ref={containerRef} w="full" pos="relative" gap={4} p={0} m={0}>
      {cards.map((card, index) => (
        <HStack
          w="full"
          key={card.title}
          p={16}
          borderRadius={16}
          bg={card.bg}
          align="center"
          justify="center"
          style={{
            ...calculateTransform(index),
            position: "sticky",
            top: "140px",
            zIndex: 10 + index,
            transformOrigin: "center top",
            transition:
              "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease-out",
          }}
          borderWidth={4}
          borderColor="white"
          data-aos="fade-up"
        >
          <VStack flex={1} align="start" justify="center">
            <Heading fontSize="7xl" data-aos="fade-left">
              {card.title}
            </Heading>
            <Text fontSize="xl" data-aos="fade-left">
              {card.description}
            </Text>
          </VStack>
          <Text flex={1} data-aos="fade-right">
            {card.text}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default CardStack;
