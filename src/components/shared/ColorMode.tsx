"use client";
import { Moon, Sun } from "lucide-react";
import { Button, useColorMode } from "@chakra-ui/react";

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} variant="ghost">
      {colorMode === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}

export default ColorMode;
