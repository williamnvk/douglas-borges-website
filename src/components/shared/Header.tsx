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
import { BrainIcon, Building2Icon, MenuIcon, User2Icon } from "lucide-react";

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
  if (pathname === "/assessment") return "assessment";
  // For dynamic insight pages (individual insight posts)
  if (pathname.match(/^\/[^\/]+$/) && pathname !== "/") return "insights";
  return "";
};

export const Header = () => {
  const { open, onOpen, onClose, onToggle } = useDisclosure();
  const pathname = usePathname();
  const currentPage = getCurrentPage(pathname);

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
      <HStack gap={{ base: 0, md: 1, lg: 4, xl: 4 }}>
        <Link href="/">
          <Heading as="h1" size="md" fontWeight="bold">
            <span>
              <strong>Douglas</strong>
            </span>
            &nbsp;<span>Borges</span>
           
            <Heading as="span" size="md" fontWeight="light"> {" | "}Psicólogo</Heading>
          </Heading>
        </Link>
        <HStack
          display={{ base: "none", md: "flex" }}
          gap={0}
          border={1}
        >
          <Button
            as={Link}
             size="sm"
            // @ts-expect-error: Type compatibility issue
            href="/"
            variant={isCurrentPage("personal") ? "outline" : "ghost"}
          >
            Para você
          </Button>
          <Button
          size="sm"
            variant={isCurrentPage("company") ? "outline" : "ghost"}
            as={Link}
            // @ts-expect-error: Type compatibility issue
            href="/empresas"
          >
            Para empresários
          </Button>
          <Button
            variant={isCurrentPage("assessment") ? "outline" : "ghost"}
            as={Link}
             size="sm"
            // @ts-expect-error: Type compatibility issue
            href="/assessment"
          >
            Para empresas
          </Button>
        </HStack>
      </HStack>

      <HStack gap={{ base: 0, md: 1, lg: 1, xl: 4 }}>
        <IconButton
          borderRadius="full"
          aria-label="Open menu"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        >
          <Icon as={MenuIcon} />
        </IconButton>
        <HStack display={{ base: "none", md: "flex" }} gap={{ base: 0, md: 1, lg: 1, xl: 4 }}>
          <Button
            size="sm"
            variant={isCurrentPage("services") ? "outline" : "ghost"}
            as={Link}
            // @ts-expect-error: Type compatibility issue
            href="/servicos"
          >
            Serviços
          </Button>
          <Button
            size="sm"
            variant={isCurrentPage("about") ? "outline" : "ghost"}
            as={Link}
            // @ts-expect-error: Type compatibility issue
            href="/sobre"
          >
            Sobre
          </Button>
          <Button
            size="sm"
            variant={isCurrentPage("events") ? "outline" : "ghost"}
            as={Link}
            // @ts-expect-error: Type compatibility issue
            href="/palestras-e-eventos"
          >
            Palestras
          </Button>
          <Button
            size="sm"
            variant={isCurrentPage("insights") ? "outline" : "ghost"}
            as={Link}
            // @ts-expect-error: Type compatibility issue
            href="/insights"
          >
            Insights
          </Button>
          <Button
            size="sm"
            variant={isCurrentPage("contact") ? "outline" : "ghost"}
            as={Link}
            // @ts-expect-error: Type compatibility issue
            href="/contato"
          >
            Contato
          </Button>
        </HStack>

        <Button
          display={{ base: "none", md: "inline-flex" }}
          as="a"
          // @ts-expect-error: Type compatibility issue
          href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo."
          target="_blank"
          referrerPolicy="no-referrer"
          colorPalette="blue"
          variant="solid"
          size="sm"
        >
          Entrar em contato
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
                    <Heading as="span" size="2xl" fontWeight="strong">
                      Douglas
                    </Heading>
                    &nbsp;<span>Borges</span>
                    {" | "}
                    <span>Psicólogo</span>
                  </Heading>

                  {/* Seção Principal */}
                  <VStack align="start" gap={1} w="full">
                    <Button
                      variant={isCurrentPage("personal") ? "solid" : "ghost"}
                      as={Link}
                      w="full"
                      size="lg"
                      // @ts-expect-error: Type compatibility issue
                      href="/"
                      leftIcon={<User2Icon />}
                      onClick={onClose}
                      colorPalette={isCurrentPage("personal") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      Para você
                    </Button>
                    <Button
                      variant={isCurrentPage("company") ? "solid" : "ghost"}
                      as={Link}
                      size="lg"
                      w="full"
                      // @ts-expect-error: Type compatibility issue
                      href="/empresas"
                      leftIcon={<Building2Icon />}
                      onClick={onClose}
                      colorPalette={isCurrentPage("company") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      Para sua empresa
                    </Button>
                    <Button
                      variant={isCurrentPage("assessment") ? "solid" : "ghost"}
                      as={Link}
                      w="full"
                      // @ts-expect-error: Type compatibility issue
                      href="/assessment"
                      leftIcon={<BrainIcon />}
                      onClick={onClose}
                      colorPalette={
                        isCurrentPage("assessment") ? "blue" : "gray"
                      }
                      justifyContent="flex-start"
                    >
                      Assessment Comportamental
                    </Button>
                  </VStack>

                  {/* Separador */}
                  <Box w="full" h="1px" bg="gray.200" my={4} />

                  {/* Menu de Navegação */}
                  <VStack align="start" gap={2} w="full">
                    <Button
                      variant={isCurrentPage("services") ? "solid" : "ghost"}
                      as={Link}
                      w="full"
                      size="md"
                      // @ts-expect-error: Type compatibility issue
                      href="/servicos"
                      onClick={onClose}
                      colorPalette={isCurrentPage("services") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      Serviços
                    </Button>
                    <Button
                      variant={isCurrentPage("about") ? "solid" : "ghost"}
                      as={Link}
                      w="full"
                      size="md"
                      // @ts-expect-error: Type compatibility issue
                      href="/sobre"
                      onClick={onClose}
                      colorPalette={isCurrentPage("about") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      Sobre
                    </Button>
                    <Button
                      variant={isCurrentPage("events") ? "solid" : "ghost"}
                      as={Link}
                      w="full"
                      size="md"
                      // @ts-expect-error: Type compatibility issue
                      href="/palestras-e-eventos"
                      onClick={onClose}
                      colorPalette={isCurrentPage("events") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      Palestras
                    </Button>
                    <Button
                      variant={isCurrentPage("insights") ? "solid" : "ghost"}
                      as={Link}
                      w="full"
                      size="md"
                      // @ts-expect-error: Type compatibility issue
                      href="/insights"
                      onClick={onClose}
                      colorPalette={isCurrentPage("insights") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      Insights
                    </Button>
                    <Button
                      variant={isCurrentPage("contact") ? "solid" : "ghost"}
                      as={Link}
                      w="full"
                      size="md"
                      // @ts-expect-error: Type compatibility issue
                      href="/contato"
                      onClick={onClose}
                      colorPalette={isCurrentPage("contact") ? "blue" : "gray"}
                      justifyContent="flex-start"
                    >
                      Contato
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
                    // @ts-expect-error: Type compatibility issue
                    href="https://wa.me/5542988381261?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Douglas%20Borges%20|%20Psic%C3%B3logo."
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    Entrar em contato
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
