"use client";

import {
  Button,
  HStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { LanguageSelector } from "./LanguageSelector";
import Link from "next/link";
import { Locale } from "@/app/[lang]/dictionaries";
import { Building2Icon, MenuIcon, User2Icon } from "lucide-react";

export const Header = ({ page, lang }: { page: string; lang: Locale }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const intl: {
    [key in Locale]: {
      nav: {
        [key: string]: string;
      };
      personal: string;
      company: string;
      cta: string;
    };
  } = {
    pt: {
      personal: "Para você",
      company: "Para sua empresa",
      cta: "Entre em contato",
      nav: {
        home: "Home",
        services: "Serviços",
        about: "Sobre",
        events: "Eventos e Palestras",
        blog: "Blog",
      },
    },
    en: {
      personal: "For you",
      company: "For your company",
      cta: "Contact",
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        events: "Events",
        blog: "Blog",
      },
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
      bg="white"
    >
      <HStack gap={4}>
        <Link href="/">
          <h1>
            <span>
              <strong>Douglas</strong>
            </span>
            &nbsp;<span>Borges</span>
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
            variant={page === "home" ? "outline" : "link"}
            as={Link}
            href="/"
          >
            {intl[lang].personal}
          </Button>
          <Button
            variant={page === "company" ? "outline" : "link"}
            as={Link}
            href="/empresas"
          >
            {intl[lang].company}
          </Button>
        </HStack>
      </HStack>

      {/* Menu hamburguer para dispositivos móveis */}
      <HStack gap={4}>
        <IconButton
          borderRadius="full"
          aria-label="Open menu"
          icon={<MenuIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        />
        <HStack display={{ base: "none", md: "flex" }} gap={4}>
          <Button variant="link">{intl[lang].nav.home}</Button>
          <Button variant="link" as={Link} href="/servicos">
            {intl[lang].nav.services}
          </Button>
          <Button
            variant={page === "about" ? "outline" : "link"}
            as={Link}
            href="/sobre"
          >
            {intl[lang].nav.about}
          </Button>
          <Button variant="link">{intl[lang].nav.events}</Button>
          {/* <Button variant="link">{intl[lang].nav.blog}</Button> */}
        </HStack>

        <Button
          display={{ base: "none", md: "inline-flex" }}
          as="a"
          href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges."
          target="_blank"
          referrerPolicy="no-referrer"
        >
          {intl[lang].cta}
        </Button>

        <Box display={{ base: "none", md: "inline-flex" }}>
          <LanguageSelector lang={lang} />
        </Box>
      </HStack>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody p={0}>
            <VStack align="start" h="full" w="full">
              <VStack align="start" spacing={4} flex={1} w="full" p={6}>
                <h1>
                  <span>
                    <strong>Douglas</strong>
                  </span>
                  &nbsp;<span>Borges</span>
                </h1>

                <Button
                  variant="outline"
                  as={Link}
                  w="full"
                  size="lg"
                  href="/"
                  leftIcon={<User2Icon />}
                >
                  {intl[lang].personal}
                </Button>
                <Button
                  variant={"outline"}
                  as={Link}
                  size="lg"
                  w="full"
                  href="/empresas"
                  leftIcon={<Building2Icon />}
                >
                  {intl[lang].company}
                </Button>

                <Button variant="link" as={Link} href="/" onClick={onClose}>
                  {intl[lang].nav.home}
                </Button>
                <Button
                  variant="link"
                  as={Link}
                  href="/servicos"
                  onClick={onClose}
                >
                  {intl[lang].nav.services}
                </Button>
                <Button
                  variant="link"
                  as={Link}
                  href="/sobre"
                  onClick={onClose}
                >
                  {intl[lang].nav.about}
                </Button>
                <Button
                  variant="link"
                  as={Link}
                  href="/events"
                  onClick={onClose}
                >
                  {intl[lang].nav.events}
                </Button>
                {/* <Button variant="link" as={Link} href="/blog" onClick={onClose}>
                  {intl[lang].nav.blog}
                </Button> */}
                <Box mt={4}>
                  <LanguageSelector lang={lang} inline />
                </Box>
              </VStack>
              <Box p={6} w="full">
                <Button
                  onClick={onClose}
                  w="full"
                  size="lg"
                  as="a"
                  href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges."
                >
                  {intl[lang].cta}
                </Button>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};
