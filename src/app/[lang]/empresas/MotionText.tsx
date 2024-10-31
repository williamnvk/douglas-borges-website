"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { Box, VStack } from "@chakra-ui/react";

const ScrollingText = () => {
  const { scrollY } = useScroll();
  const [mainTextSize, setMainTextSize] = useState(80);
  const [sideTextSize, setSideTextSize] = useState(20);
  const componentRef = useRef(null);
  const isInView = useInView(componentRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = scrollY.onChange((value) => {
      const currentScroll = value - 0;
      const scrollProgress = Math.min(currentScroll / 1500, 1);

      const newSideSize = 20 + (60 - 20) * Math.pow(scrollProgress, 1.1);
      setSideTextSize(newSideSize);

      const minSize = newSideSize * 0.1;
      const newMainSize = Math.max(
        minSize,
        80 - (60 - minSize) * Math.pow(scrollProgress, 1.2)
      );

      setMainTextSize(newMainSize);
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return controls.stop;
  }, [scrollY, isInView]);

  return (
    <Box position="relative">
      <VStack
        maxW="container.xl"
        mx="auto"
        ref={componentRef}
        position="sticky"
        top={0}
        align="flex-start"
        justify="flex-start"
      >
        <motion.div
          style={{
            flex: 1,
            color: "white",
            fontSize: `${mainTextSize}px`,
            transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Box
            as="span"
            fontFamily="heading"
            fontWeight="light"
            data-aos="fade-up"
          >
            Em um mundo onde a eficiência é a moeda mais valiosa, cada decisão,
            cada minuto, cada sacrifício representa um passo rumo ao sucesso.
            Estar à frente exige enfrentar uma carga constante de expectativas e
            resultados
          </Box>
        </motion.div>

        <motion.div
          style={{
            flex: 1,
            marginTop: "64px",
            color: "white",
            fontSize: `${sideTextSize}px`,
            transition: "all 600ms cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: sideTextSize > 25 ? 1 : 0.8,
          }}
        >
          <Box as="span" fontFamily="heading" fontWeight="light">
            Porém, é ao lado das pessoas que amamos e com os valores que
            carregamos que encontramos a verdadeira paz e propósito.{" "}
            <strong>
              É o equilíbrio entre conquistas e momentos significativos que
              define uma vida plena.
            </strong>
          </Box>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default ScrollingText;
