"use client";

import {
  Button,
  HStack,
  IconButton,
  Drawer,
  VStack,
  useDisclosure,
  Box,
  Icon,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2Icon, MenuIcon, User2Icon } from "lucide-react";

// Function to determine the current page based on pathname
const getCurrentPage = (pathname: string): string => {
  if (pathname === "/") return "personal";
  if (pathname === "/empresas") return "company";
  if (pathname === "/servicos") return "services";
  if (pathname === "/sobre") return "about";
  if (pathname === "/palestras-e-eventos") return "events";
  if (pathname === "/insights") return "insights";
  if (pathname === "/contato") return "contact";
  if (pathname === "/links") return "links";
  // For dynamic insight pages (individual insight posts)
  if (pathname.match(/^\/[^\/]+$/) && pathname !== "/") return "insights";
  return "";
};

export const Header = () => {
  const { open, onOpen, onClose, onToggle } = useDisclosure();
  const pathname = usePathname();
  const currentPage = getCurrentPage(pathname);

  const intl = {
    personal: "Para você",
    company: "Para sua empresa",
    cta: "Entre em contato",
    nav: {
      home: "Home",
      services: "Serviços",
      about: "Sobre",
      events: "Palestras e Eventos",
      insights: "Insights",
      contact: "Contato",
    },
  };

  const isCurrentPage = (page: string) => {
    return currentPage === page;
  };

  return (
    <HStack
      as="nav"
      w="full"
      py={4}
      px={8}
      justifyContent="space-between"
      pos="fixed"
      left={0}
      top={0}
      zIndex={100}
      bg="white"
      color="black"
    >
      <HStack gap={4}>
        <Link href="/">
          <h1>
            <span>
              <strong>Douglas</strong>
            </span>
            &nbsp;<span>Borges</span>
            {" | "}
            <span>Psicólogo</span>
          </h1>
        </Link>
        <HStack
          display={{ base: "none", md: "flex" }}
          gap={4}
          border={1}
          borderRadius={4}
          borderColor="gray.100"
        >
          <Button
            // @ts-ignore
            as={Link}
            // @ts-ignore
            href="/"
            variant={isCurrentPage("personal") ? "outline" : "ghost"}
          >
            {intl.personal}
          </Button>
          <Button
            variant={isCurrentPage("company") ? "outline" : "ghost"}
            // @ts-ignore
            as={Link}
            // @ts-ignore
            href="/empresas"
          >
            {intl.company}
          </Button>
        </HStack>
      </HStack>

      <HStack gap={4}>
        <IconButton
          borderRadius="full"
          aria-label="Open menu"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        >
          <Icon as={MenuIcon} />
        </IconButton>
        <HStack display={{ base: "none", md: "flex" }} gap={4}>
          <Button
            variant={isCurrentPage("services") ? "outline" : "ghost"}
            // @ts-ignore
            as={Link}
            // @ts-ignore
            href="/servicos"
          >
            {intl.nav.services}
          </Button>
          <Button
            // @ts-ignore
            variant={isCurrentPage("about") ? "outline" : "ghost"}
            // @ts-ignore
            as={Link}
            // @ts-ignore
            href="/sobre"
          >
            {intl.nav.about}
          </Button>
          <Button
            // @ts-ignore
            variant={isCurrentPage("events") ? "outline" : "ghost"}
            // @ts-ignore
            as={Link}
            // @ts-ignore
            href="/palestras-e-eventos"
          >
            {intl.nav.events}
          </Button>
          <Button
            // @ts-ignore
            variant={isCurrentPage("insights") ? "outline" : "ghost"}
            // @ts-ignore
            as={Link}
            // @ts-ignore
            href="/insights"
          >
            {intl.nav.insights}
          </Button>
          <Button
            // @ts-ignore
            variant={isCurrentPage("contact") ? "outline" : "ghost"}
            // @ts-ignore
            as={Link}
            // @ts-ignore
            href="/contato"
          >
            {intl.nav.contact}
          </Button>
        </HStack>

        <Button
          display={{ base: "none", md: "inline-flex" }}
          // @ts-ignore
          as="a"
          // @ts-ignore
          href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo."
          // @ts-ignore
          target="_blank"
          // @ts-ignore
          referrerPolicy="no-referrer"
          colorPalette="blue"
          variant="solid"
        >
          {intl.cta}
        </Button>
      </HStack>

      <Drawer.Root open={open} onOpenChange={onToggle}>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.CloseTrigger aria-label="Close menu" />
          <Drawer.Content
            bg="white"
            color="black"
            maxW="90vw"
            w="90vw"
            h="100vh"
            maxH="100vh"
            m={0}
            borderRadius={0}
          >
            <Drawer.Body p={0} h="full">
              <VStack align="start" h="full" w="full" justify="space-between">
                <VStack align="start" gap={6} flex={1} w="full" p={6} pt={12}>
                  <Heading as="h1" size="2xl" fontWeight="light">
                    <Heading as="h1" size="2xl" as="span" fontWeight="strong">
                      Douglas
                    </Heading>
                    &nbsp;<span>Borges</span>
                    {" | "}
                    <span>Psicólogo</span>
                  </Heading>

                  {/* Seção Principal */}
                  <VStack align="start" gap={3} w="full">
                    <Button
                      variant={isCurrentPage("personal") ? "solid" : "ghost"}
                      // @ts-ignore
                      as={Link}
                      w="full"
                      size="lg"
                      // @ts-ignore
                      href="/"
                      leftIcon={<User2Icon />}
                      onClick={onClose}
                      colorPalette={isCurrentPage("personal") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      {intl.personal}
                    </Button>
                    <Button
                      variant={isCurrentPage("company") ? "solid" : "ghost"}
                      // @ts-ignore
                      as={Link}
                      size="lg"
                      w="full"
                      // @ts-ignore
                      href="/empresas"
                      leftIcon={<Building2Icon />}
                      onClick={onClose}
                      colorPalette={isCurrentPage("company") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      {intl.company}
                    </Button>
                  </VStack>

                  {/* Separador */}
                  <Box w="full" h="1px" bg="gray.200" my={4} />

                  {/* Menu de Navegação */}
                  <VStack align="start" gap={2} w="full">
                    <Button
                      // @ts-ignore
                      variant={isCurrentPage("services") ? "solid" : "ghost"}
                      // @ts-ignore
                      as={Link}
                      w="full"
                      size="md"
                      // @ts-ignore
                      href="/servicos"
                      onClick={onClose}
                      colorPalette={isCurrentPage("services") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      {intl.nav.services}
                    </Button>
                    <Button
                      // @ts-ignore
                      variant={isCurrentPage("about") ? "solid" : "ghost"}
                      // @ts-ignore
                      as={Link}
                      w="full"
                      size="md"
                      // @ts-ignore
                      href="/sobre"
                      onClick={onClose}
                      colorPalette={isCurrentPage("about") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      {intl.nav.about}
                    </Button>
                    <Button
                      // @ts-ignore
                      variant={isCurrentPage("events") ? "solid" : "ghost"}
                      // @ts-ignore
                      as={Link}
                      w="full"
                      size="md"
                      // @ts-ignore
                      href="/palestras-e-eventos"
                      onClick={onClose}
                      colorPalette={isCurrentPage("events") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      {intl.nav.events}
                    </Button>
                    <Button
                      // @ts-ignore
                      variant={isCurrentPage("insights") ? "solid" : "ghost"}
                      // @ts-ignore
                      as={Link}
                      w="full"
                      size="md"
                      // @ts-ignore
                      href="/insights"
                      onClick={onClose}
                      colorPalette={isCurrentPage("insights") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      {intl.nav.insights}
                    </Button>
                    <Button
                      // @ts-ignore
                      variant={isCurrentPage("contact") ? "solid" : "ghost"}
                      // @ts-ignore
                      as={Link}
                      w="full"
                      size="md"
                      // @ts-ignore
                      href="/contato"
                      onClick={onClose}
                      colorPalette={isCurrentPage("contact") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      {intl.nav.contact}
                    </Button>
                  </VStack>
                </VStack>

                {/* CTA Fixo na parte inferior */}
                <Box p={6} w="full" borderTop="1px" borderColor="gray.200">
                  <Button
                    onClick={onClose}
                    w="full"
                    size="lg"
                    variant="solid"
                    colorPalette="blue"
                    as="a"
                    // @ts-ignore
                    href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo."
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    {intl.cta}
                  </Button>
                </Box>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </HStack>
  );
};
