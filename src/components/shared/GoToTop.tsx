"use client";

import { Box } from "@chakra-ui/react";
import { ArrowUpIcon } from "lucide-react";

function GoToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      role="button"
      onClick={scrollToTop}
      color="gray.200"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <ArrowUpIcon />
    </Box>
  );
}

export default GoToTop;
