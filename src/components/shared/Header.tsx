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
            as={Link}
            href="/"
            variant={isCurrentPage("personal") ? "outline" : "ghost"}
          >
            {intl.personal}
          </Button>
          <Button
            variant={isCurrentPage("company") ? "outline" : "ghost"}
            as={Link}
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
            as={Link}
            href="/servicos"
          >
            {intl.nav.services}
          </Button>
          <Button
            // @ts-ignore
            variant={isCurrentPage("about") ? "outline" : "ghost"}
            as={Link}
            href="/sobre"
          >
            {intl.nav.about}
          </Button>
          <Button
            // @ts-ignore
            variant={isCurrentPage("events") ? "outline" : "ghost"}
            as={Link}
            href="/palestras-e-eventos"
          >
            {intl.nav.events}
          </Button>
          <Button
            // @ts-ignore
            variant={isCurrentPage("insights") ? "outline" : "ghost"}
            as={Link}
            href="/insights"
          >
            {intl.nav.insights}
          </Button>
          <Button
            // @ts-ignore
            variant={isCurrentPage("contact") ? "outline" : "ghost"}
            as={Link}
            href="/contato"
          >
            {intl.nav.contact}
          </Button>
        </HStack>

        <Button
          display={{ base: "none", md: "inline-flex" }}
          as="a"
          href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo."
          target="_blank"
          referrerPolicy="no-referrer"
          colorPalette="blue"
          variant="solid"
        >
          {intl.cta}
        </Button>
      </HStack>

      <Drawer.Root open={open} onOpenChange={onToggle}>
        <Drawer.Backdrop />
        <Drawer.Content bg="white" color="black">
          <Drawer.CloseTrigger aria-label="Close menu" />
          <Drawer.Body p={0}>
            <VStack align="start" h="full" w="full">
              <VStack align="start" gap={4} flex={1} w="full" p={6}>
                <h1>
                  <span>
                    <strong>Douglas</strong>
                  </span>
                  &nbsp;<span>Borges</span>
                  {" | "}
                  <span>Psicólogo</span>
                </h1>

                <Button
                  variant={isCurrentPage("home") ? "solid" : "ghost"}
                  // @ts-ignore
                  as={Link}
                  w="full"
                  size="lg"
                  // @ts-ignore
                  href="/"
                  leftIcon={<User2Icon />}
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
                >
                  {intl.company}
                </Button>

                <Button
                  variant={isCurrentPage("home") ? "solid" : "ghost"}
                  // @ts-ignore
                  as={Link}
                  // @ts-ignore
                  href="/"
                  onClick={onClose}
                >
                  {intl.nav.home}
                </Button>
                <Button
                  // @ts-ignore
                  variant={isCurrentPage("services") ? "solid" : "outline"}
                  // @ts-ignore
                  as={Link}
                  // @ts-ignore
                  href="/servicos"
                  onClick={onClose}
                >
                  {intl.nav.services}
                </Button>
                <Button
                  // @ts-ignore
                  variant={isCurrentPage("about") ? "solid" : "outline"}
                  // @ts-ignore
                  as={Link}
                  // @ts-ignore
                  href="/sobre"
                  onClick={onClose}
                >
                  {intl.nav.about}
                </Button>
                <Button
                  // @ts-ignore
                  variant={isCurrentPage("events") ? "solid" : "outline"}
                  // @ts-ignore
                  as={Link}
                  // @ts-ignore
                  href="/palestras-e-eventos"
                  onClick={onClose}
                >
                  {intl.nav.events}
                </Button>
                <Button
                  // @ts-ignore
                  variant={isCurrentPage("insights") ? "solid" : "outline"}
                  // @ts-ignore
                  as={Link}
                  // @ts-ignore
                  href="/insights"
                  onClick={onClose}
                >
                  {intl.nav.insights}
                </Button>
                <Button
                  // @ts-ignore
                  variant={isCurrentPage("contact") ? "solid" : "outline"}
                  // @ts-ignore
                  as={Link}
                  // @ts-ignore
                  href="/contato"
                  onClick={onClose}
                >
                  {intl.nav.contact}
                </Button>
              </VStack>
              <Box p={6} w="full">
                <Button
                  onClick={onClose}
                  w="full"
                  size="lg"
                  variant="solid"
                  as="a"
                  // @ts-ignore
                  href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo."
                >
                  {intl.cta}
                </Button>
              </Box>
            </VStack>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </HStack>
  );
};
