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
import { Building2Icon, MenuIcon, User2Icon } from "lucide-react";

export const Header = ({
  page,
  isDark,
}: {
  page: string;
  isDark?: boolean;
}) => {
  const { open, onOpen, onClose, onToggle } = useDisclosure();

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

  return (
    <HStack
      as="nav"
      w="full"
      p={4}
      justifyContent="space-between"
      pos="fixed"
      left={0}
      top={0}
      zIndex={100}
      bg={isDark ? "black" : "white"}
      color={isDark ? "white" : "black"}
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
          borderColor={isDark ? "whiteAlpha.200" : "gray.100"}
        >
          <Button
            // @ts-ignore
            variant={
              page === "home"
                ? isDark
                  ? "outlinedInverted"
                  : "outline"
                : isDark
                  ? "linkInverted"
                  : "link"
            }
            as={Link}
            href="/"
          >
            {intl.personal}
          </Button>
          <Button
            // @ts-ignore
            variant={
              page === "company"
                ? isDark
                  ? "outlineInverted"
                  : "outline"
                : isDark
                  ? "linkInverted"
                  : "link"
            }
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
            // @ts-ignore
            variant={
              page === "services" ? "outline" : isDark ? "linkInverted" : "link"
            }
            as={Link}
            href="/servicos"
          >
            {intl.nav.services}
          </Button>
          <Button
            // @ts-ignore
            variant={
              page === "about" ? "outline" : isDark ? "linkInverted" : "link"
            }
            as={Link}
            href="/sobre"
          >
            {intl.nav.about}
          </Button>
          <Button
            // @ts-ignore
            variant={
              page === "events" ? "outline" : isDark ? "linkInverted" : "link"
            }
            as={Link}
            href="/palestras-e-eventos"
          >
            {intl.nav.events}
          </Button>
          <Button
            // @ts-ignore
            variant={
              page === "insights" ? "outline" : isDark ? "linkInverted" : "link"
            }
            as={Link}
            href="/insights"
          >
            {intl.nav.insights}
          </Button>
          <Button
            // @ts-ignore
            variant={
              page === "contact" ? "outline" : isDark ? "linkInverted" : "link"
            }
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
          // @ts-ignore
          variant={isDark ? "solidInverted" : "solid"}
        >
          {intl.cta}
        </Button>
      </HStack>

      <Drawer.Root open={open} onOpenChange={onToggle}>
        <Drawer.Backdrop />
        <Drawer.Content
          bg={isDark ? "black" : "white"}
          color={isDark ? "white" : "black"}
        >
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
                  // @ts-ignore
                  variant={isDark ? "outlineInverted" : "outline"}
                  as={Link}
                  w="full"
                  size="lg"
                  href="/"
                  leftIcon={<User2Icon />}
                >
                  {intl.personal}
                </Button>
                <Button
                  // @ts-ignore
                  variant={isDark ? "outlineInverted" : "outline"}
                  as={Link}
                  size="lg"
                  w="full"
                  href="/empresas"
                  leftIcon={<Building2Icon />}
                >
                  {intl.company}
                </Button>

                <Button
                  // @ts-ignore
                  variant={isDark ? "linkInverted" : "link"}
                  as={Link}
                  href="/"
                  onClick={onClose}
                >
                  {intl.nav.home}
                </Button>
                <Button
                  // @ts-ignore
                  variant={isDark ? "linkInverted" : "outline"}
                  as={Link}
                  href="/servicos"
                  onClick={onClose}
                >
                  {intl.nav.services}
                </Button>
                <Button
                  // @ts-ignore
                  variant={isDark ? "linkInverted" : "outline"}
                  as={Link}
                  href="/sobre"
                  onClick={onClose}
                >
                  {intl.nav.about}
                </Button>
                <Button
                  // @ts-ignore
                  variant={isDark ? "linkInverted" : "outline"}
                  as={Link}
                  href="/palestras-e-eventos"
                  onClick={onClose}
                >
                  {intl.nav.events}
                </Button>
                <Button
                  // @ts-ignore
                  variant={isDark ? "linkInverted" : "outline"}
                  as={Link}
                  href="/insights"
                  onClick={onClose}
                >
                  {intl.nav.insights}
                </Button>
                <Button
                  // @ts-ignore
                  variant={isDark ? "linkInverted" : "outline"}
                  as={Link}
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
                  // @ts-ignore
                  variant={isDark ? "solidInverted" : "solid"}
                  as="a"
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
