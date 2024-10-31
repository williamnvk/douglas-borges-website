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
        slidesPerView={2.5}
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
                gap={4}
                p={8}
                opacity={isActive ? 1 : 0.2}
                transition="opacity 0.3s, transform 0.3s"
                align="flex-start"
                _hover={{
                  cursor: "default",
                  opacity: 1,
                  transform: "scale(1.05)",
                }}
              >
                <Box color="gray.500">
                  <QuoteIcon />
                </Box>
                <VStack flex={1} gap={4}>
                  <Heading
                    as="blockquote"
                    fontSize="2xl"
                    fontWeight="semibold"
                    color="gray.200"
                  >
                   {t.description.slice(0, 200)}...
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
        <Flex w="full" justify="flex-end" gap={4}>
          <Button
            className="button__prev"
            variant="icon"
            borderRadius="50%"
            w="48px"
            h="48px"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            className="button__next"
            variant="icon"
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
