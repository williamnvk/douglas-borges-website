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
} from "@chakra-ui/react";
import { CheckIcon, SquareCheckIcon, SquareIcon } from "lucide-react";

export default function ChallengesAndBenefits() {
  const relations = [
    {
      challenge: "Solidão nas decisões difíceis",
      benefit:
        "Confiança nas escolhas, com apoio emocional e clareza nas decisões",
    },
    {
      challenge: "Pressão constante por resultados",
      benefit: "Decisões mais conscientes e desempenho equilibrado sob pressão",
    },
    {
      challenge: "Sacrifício da vida pessoal",
      benefit: "Equilíbrio sustentável entre vida profissional e pessoal",
    },
    {
      challenge: "Dificuldade em desconectar",
      benefit: "Qualidade de vida preservada com momentos de descanso real",
    },
    {
      challenge: "Estresse crônico",
      benefit:
        "Bem-estar contínuo com técnicas de controle emocional e gestão do estresse",
    },
    {
      challenge: "Sobrecarga de responsabilidades",
      benefit:
        "Autonomia para delegar e priorizar, com foco em objetivos de longo prazo",
    },
    {
      challenge: "Perda de conexão com a família",
      benefit: "Presença familiar fortalecida e relações pessoais revigoradas",
    },
    {
      challenge: "Dificuldade em manter a motivação",
      benefit:
        "Renovação constante da motivação, alinhando propósito e performance",
    },
  ];

  const [checkedItems, setCheckedItems] = useState(
    Array(relations.length).fill(false)
  );

  const handleCheck = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <VStack align="flex-start" w="full" gap={8}>
      <VStack w="full" align="flex-start" gap={2}>
        <Tag fontWeight="bold" bg="white">
          Você se Reconhece?
        </Tag>
        <Heading color="gray.50" fontSize="5xl">
          Explore as dificuldades que você enfrenta e veja como o método
          Work/Life pode transformar sua realidade.
        </Heading>
      </VStack>
      <SimpleGrid columns={3} spacing={2} flex={1} w="full">
        {relations.map((item, index) => (
          <HStack
            key={`challenge-${index}`}
            role="button"
            onClick={() => handleCheck(index)}
            cursor="pointer"
            p={4}
            gap={4}
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
            <Heading color="gray.50" fontSize="xl" flex={1}>
              {item.challenge}
            </Heading>
          </HStack>
        ))}
      </SimpleGrid>

      <SimpleGrid columns={3} spacing={2} flex={1} w="full">
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
