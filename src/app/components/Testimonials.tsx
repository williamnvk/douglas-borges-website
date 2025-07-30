"use client";

import { FC } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, User2Icon } from "lucide-react";
import {
  Button,
  Flex,
  Text,
  VStack,
  Container,
  useMediaQuery,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useRef } from "react";

const Testimonials: FC<{
  items: Array<{
    name: string;
    image: string | null;
    description: string;
    city: string;
  }>;
}> = ({ items }) => {
  const [isMobile] = useMediaQuery(["(max-width: 1024px)"]);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={isMobile ? 1 : 3}
        centeredSlides={false}
        spaceBetween={24}
        loop={true}
        navigation={{
          prevEl: ".button__prev",
          nextEl: ".button__next",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        style={{ overflow: "hidden" }}
      >
        {items.map((t, i) => (
          <SwiperSlide key={`list-${i}`}>
            <VStack
              key={`testimonials-item-${t.name}`}
              gap={4}
              flex={1}
              pos="relative"
            >
              <Text
                fontSize="medium"
                fontStyle="italic"
                p={8}
                bg="white"
                borderRadius="lg"
                boxShadow="lg"
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "56px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderWidth: "12px",
                  borderStyle: "solid",
                  borderColor: "white transparent transparent transparent",
                }}
              >
                {t.description}
              </Text>
              <HStack align="center" justify="center" gap={4}>
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
                    borderColor="fg.muted"
                  />
                ) : (
                  <Flex
                    borderRadius="50%"
                    overflow="hidden"
                    w="64px"
                    h="64px"
                    color="fg.muted"
                    justify="center"
                    align="center"
                    bg="gray.800"
                    border="2px solid"
                    borderColor="fg.muted"
                  >
                    <User2Icon size={32} />
                  </Flex>
                )}
                <VStack align="flex-start" gap={0}>
                  <Text fontSize="smaller" color="bg.subtle">
                    {t.name}
                  </Text>
                  <Text fontSize="x-small" color="gray.200">
                    {t.city}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container maxW="8xl" mt={4} pos="relative" h="48px">
        <Flex w="full" justify="flex-end" gap={4}>
          <Button
            title="<"
            className="button__prev"
            variant="outline"
            borderRadius="50%"
            w="48px"
            h="48px"
          >
            <ChevronLeft size={24} color="white" />
          </Button>
          <Button
            className="button__next"
            variant="outline"
            borderRadius="50%"
            w="48px"
            h="48px"
            title=">"
          >
            <ChevronRight size={24} color="white" />
          </Button>
        </Flex>
      </Container>
    </>
  );
};

export default Testimonials;
