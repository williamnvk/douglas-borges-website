"use client";

import React, { useState } from "react";
import {
  Box,
  Center,
  Text,
  VStack,
  Heading,
  Container,
} from "@chakra-ui/react";
import {
  Brain,
  Target,
  Clock,
  Heart,
  Battery,
  Lightbulb,
  Quote,
} from "lucide-react";

const RadialWorkLife = () => {
  const [activeSegment, setActiveSegment] = useState<number | null>(null);

  const challenges = [
    {
      id: 1,
      icon: <Brain />,
      challenge: "Solidão nas decisões",
      solution: "Mentoria Estratégica",
      color: "blue.500",
    },
    {
      id: 2,
      icon: <Target />,
      challenge: "Pressão por resultados",
      solution: "Performance Sustentável",
      color: "purple.500",
    },
    {
      id: 3,
      icon: <Clock />,
      challenge: "Sacrifício pessoal",
      solution: "Equilíbrio de tempo",
      color: "green.500",
    },
    {
      id: 4,
      icon: <Heart />,
      challenge: "Desconexão",
      solution: "Presença Consciente",
      color: "red.500",
    },
    {
      id: 5,
      icon: <Battery />,
      challenge: "Estresse crônico",
      solution: "Resiliência Emocional",
      color: "orange.500",
    },
  ];

  const calculatePosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  return (
    <Container maxW="4xl" p={8}>
      <Box position="relative" paddingBottom="100%">
        {/* Central Circle */}
        <Center
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="32"
          h="32"
          bg="white"
          borderRadius="full"
          boxShadow="lg"
          zIndex={10}
        >
          <VStack>
            <Box as={Quote} w={12} h={12} color="blue.600" mb={2} />
            <Text fontSize="sm" fontWeight="semibold">
              Work/Life
            </Text>
          </VStack>
        </Center>

        {/* Radial Items */}
        {challenges.map((item, index) => {
          const pos = calculatePosition(index, challenges.length, 140);
          const outerPos = calculatePosition(index, challenges.length, 240);

          return (
            <Box key={item.id}>
              {/* Challenge Circle */}
              <Center
                position="absolute"
                w="24"
                h="24"
                borderRadius="full"
                transition="all 0.3s"
                cursor="pointer"
                bg={item.color}
                color="white"
                top={`calc(50% + ${pos.y}px - 3rem)`}
                left={`calc(50% + ${pos.x}px - 3rem)`}
                transform={activeSegment === index ? "scale(1.1)" : "scale(1)"}
                boxShadow={activeSegment === index ? "lg" : "none"}
                onMouseEnter={() =>
                  setActiveSegment(index as unknown as number)
                }
                onMouseLeave={() => setActiveSegment(null as unknown as number)}
              >
                <VStack p={2}>
                  {/* <Box as={item.icon} w={6} h={6} /> */}
                  <Text fontSize="xs" textAlign="center" fontWeight="medium">
                    {item.challenge}
                  </Text>
                </VStack>
              </Center>

              {/* Solution Circle */}
              <Center
                position="absolute"
                w="28"
                h="28"
                bg="white"
                borderRadius="full"
                boxShadow="lg"
                transition="all 0.3s"
                opacity={activeSegment === index ? 1 : 0}
                transform={activeSegment === index ? "scale(1)" : "scale(0.95)"}
                top={`calc(50% + ${outerPos.y}px - 3.5rem)`}
                left={`calc(50% + ${outerPos.x}px - 3.5rem)`}
              >
                <VStack p={2}>
                  <Box as={Lightbulb} w={6} h={6} color="yellow.500" mb={1} />
                  <Text fontSize="xs" textAlign="center" fontWeight="medium">
                    {item.solution}
                  </Text>
                </VStack>
              </Center>

              {/* Connecting Line */}
              {activeSegment === index && (
                <Box
                  as="svg"
                  position="absolute"
                  top="0"
                  left="0"
                  w="full"
                  h="full"
                  pointerEvents="none"
                  zIndex={-1}
                >
                  <line
                    x1={`calc(50% + ${pos.x}px)`}
                    y1={`calc(50% + ${pos.y}px)`}
                    x2={`calc(50% + ${outerPos.x}px)`}
                    y2={`calc(50% + ${outerPos.y}px)`}
                    stroke={activeSegment === index ? "#CBD5E0" : "transparent"}
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      <VStack mt={8} maxW="md" mx="auto" textAlign="center">
        <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={2}>
          {activeSegment !== null
            ? challenges[activeSegment].solution
            : "Descubra soluções personalizadas"}
        </Heading>
        <Text color="gray.600">
          {activeSegment !== null
            ? "Desenvolvemos métodos específicos para transformar cada desafio em uma oportunidade de crescimento."
            : "Passe o mouse sobre cada desafio para descobrir nossa abordagem especializada."}
        </Text>
      </VStack>
    </Container>
  );
};

export default RadialWorkLife;
