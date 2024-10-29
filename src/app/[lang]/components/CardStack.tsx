"use client";

import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";

const CardStack: FC<{
  cards: Array<{
    bg: string;
    title: string;
    description: string;
    text: string;
  }>;
}> = ({ cards }) => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (containerRef.current) {
        const offsetTop = containerRef.current.offsetTop;
        const newScrollY = window.scrollY - offsetTop;
        setScrollY(newScrollY);
      }
      animationRef.current = requestAnimationFrame(handleScroll);
    };

    animationRef.current = requestAnimationFrame(handleScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

  const calculateTransform = useCallback(
    (index: number) => {
      const progress = (scrollY - index * windowHeight) / windowHeight;
      const easedProgress = easeOutCubic(Math.min(Math.max(progress, 0), 1));

      const scale =
        index < Math.ceil(scrollY / windowHeight)
          ? Math.max(0.75, 1 - easedProgress * 0.15)
          : 1;
      const translateY = Math.min(0, -easedProgress * 25);

      return {
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: 1 - easedProgress * 0.5,
      };
    },
    [scrollY, windowHeight]
  );

  return (
    <VStack ref={containerRef} w="full" pos="relative" gap={4} p={0} m={0}>
      {cards.map((card, index) => (
        <HStack
          w="full"
          key={card.title}
          p={16}
          gap={16}
          borderRadius={20}
          bg={card.bg}
          align="center"
          justify="center"
          style={{
            ...calculateTransform(index),
            position: "sticky",
            top: "140px",
            zIndex: 1 + index,
            transformOrigin: "center top",
            transition:
              "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease-out",
          }}
          data-aos="fade-up"
        >
          <Heading flex={2} fontSize="6xl" data-aos="fade-up">
            {card.description}
          </Heading>

          <VStack flex={1} align="start" justify="center">
            <Text fontSize="large" fontWeight="light" data-aos="fade-up">
              {card.title.toUpperCase()}
            </Text>
            <Text flex={1} data-aos="fade-up" fontSize="sm">
              {card.text}
            </Text>
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default CardStack;
