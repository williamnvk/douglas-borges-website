"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import QuoteIcon from "../components/QuoteIcon";

export default function Testimonials({
  testimonials,
}: {
  testimonials: Array<{
    image: string;
    name: string;
    description: string;
  }>;
}) {
  return (

    <Box pos="relative">
      <Swiper
        modules={[Navigation]}
        slidesPerView={4.5}
        centeredSlides={true}
        spaceBetween={24}
        loop={true}
        navigation={{
          prevEl: ".button__prev",
          nextEl: ".button__next",
        }}
        pagination={{
          clickable: true,
        }}
        style={{ overflow: "hidden" }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name} style={{ padding: "8px"}}>
            {({ isActive }) => (
              <HStack
                key={t.name}
                borderRadius={20}
                bg="gray.800"
                gap={8}
                p={10}
                opacity={isActive ? 1 : 0.2}
                transition="opacity 0.3s, transform 0.3s"
                align="flex-start"
                _hover={{
                  cursor: "default",
                  opacity: 1,
                  transform: "scale(1.05)",
                }}
              >
                <Box color="gray.800">
                  <QuoteIcon />
                </Box>
                <VStack flex={1} gap={4}>
                  <Heading
                    as="blockquote"
                    fontSize="2xl"
                    fontWeight="semibold"
                    color="gray.200"
                  >
                    Equilibre Liderança e Vida Pessoal. Método exclusivo para
                    executivos e C-Levels desenvolverem alta performance
                    sustentável Slide 1
                  </Heading>
                  <HStack w="full" align="center" justify="flex-start">
                    <Box
                      rounded="50%"
                      overflow="hidden"
                      w="48px"
                      h="48px"
                      backgroundImage={`url(${t.image})`}
                      backgroundSize="auto 100%"
                      backgroundRepeat="no-repeat"
                      backgroundPosition="center"
                      filter="grayscale(1)"
                    />
                    <Text color="gray.200">{t.name}</Text>
                  </HStack>
                </VStack>
              </HStack>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <Container maxW="container.xl" mt={4} pos="relative" h="48px">
        <Flex w="full" justify="flex-end">
          <Button
            className="button__prev"
            variant="ghost"
            borderRadius="50%"
            w="48px"
            h="48px"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            className="button__next"
            variant="ghost"
            borderRadius="50%"
            w="48px"
            h="48px"
          >
            <ChevronRight size={24} />
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
