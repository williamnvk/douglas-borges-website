"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";
import Icon from "@/components/shared/DynamicIcon";
import { useRef } from "react";

export default function Services({
  slidesPerView = 3.5,
  list,
  isDark = true,
}: {
  slidesPerView?: number;
  list: Array<{ icon: string; title: string; description: string }>;
  isDark?: boolean;
}) {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
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
        {list.map((s, i) => (
          <SwiperSlide key={`list-${i}`}>
            <VStack
              align="flex-start"
              borderRadius={6}
              p={8}
              bg="white"
              minH="320px"
            >
              <VStack align="flex-start" color="gray.900">
                <Icon size={32} name={s.icon as never} />
                <Heading fontSize="3xl" w="full">
                  {s.title}
                </Heading>
                <Text color="gray.800" fontSize="small" my={4}>
                  {s.description}
                </Text>
              </VStack>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>

      <Container maxW="container.xl" mt={4} pos="relative" h="48px">
        <Flex w="full" justify="flex-end" gap={4}>
          <Button
            className="button__prev"
            variant={isDark ? "icon" : "outline"}
            borderRadius="50%"
            w="48px"
            h="48px"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            className="button__next"
            variant={isDark ? "icon" : "outline"}
            borderRadius="50%"
            w="48px"
            h="48px"
          >
            <ChevronRight size={24} />
          </Button>
        </Flex>
      </Container>
    </>
  );
}
