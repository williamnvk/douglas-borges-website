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
  HStack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight, User2Icon } from "lucide-react";
import QuoteIcon from "../components/QuoteIcon";

export default function Testimonials({
  testimonials,
}: {
  testimonials: Array<{
    image: string | null;
    city: string;
    name: string;
    description: string;
  }>;
}) {
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  return (
    <Box pos="relative">
      <Swiper
        modules={[Navigation]}
        slidesPerView={isMobile ? 1.2 : 2.4}
        centeredSlides={true}
        spaceBetween={isMobile ? 2 : 16}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
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
          <SwiperSlide key={t.name} style={{ padding: "8px" }}>
            {({ isActive }) => (
              <HStack
                key={t.name}
                borderRadius="lg"
                bg="gray.800"
                gap={4}
                p={{ base: 6, md: 8 }}
                opacity={isActive ? 1 : 0.2}
                transition="opacity 0.3s, transform 0.3s, background 0.5s"
                align="flex-start"
                _hover={{
                  cursor: "default",
                  opacity: 1,
                  transform: "scale(1.05)",
                  bg: "gray.700",
                }}
                pos="relative"
                boxShadow="2xl"
              >
                <Box
                  color="gray.600"
                  position="absolute"
                  left={{ base: 3, md: 4 }}
                  top={{ base: 3, md: 4 }}
                >
                  <QuoteIcon />
                </Box>
                <VStack flex={1} gap={4} zIndex={10} w="full">
                  <Text
                    as="blockquote"
                    fontSize={{ base: "sm", md: "xl", xl: "2xl" }}
                    fontWeight="semibold"
                    color="gray.200"
                  >
                    {t.description}
                  </Text>
                  <HStack w="full" align="center" justify="flex-start">
                    {t.image ? (
                      <Box
                        borderRadius="50%"
                        overflow="hidden"
                        w="64px"
                        h="64px"
                        backgroundImage={`url(${t.image})`}
                        backgroundSize="auto 100%"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                        filter="grayscale(1)"
                        border="2px solid"
                        borderColor="gray.500"
                      />
                    ) : (
                      <Flex
                        borderRadius="50%"
                        overflow="hidden"
                        w="64px"
                        h="64px"
                        color="gray.500"
                        justify="center"
                        align="center"
                        bg="gray.800"
                        border="2px solid"
                        borderColor="gray.500"
                      >
                        <User2Icon size={32} />
                      </Flex>
                    )}
                    <VStack align="flex-start" gap={0} flex={1}>
                      <Text fontSize="smaller" color="gray.50">
                        {t.name}
                      </Text>
                      <Text fontSize="x-small" color="gray.200">
                        {t.city}
                      </Text>
                    </VStack>
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
