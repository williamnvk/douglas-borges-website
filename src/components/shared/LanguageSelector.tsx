"use client";

import { Locale } from "@/app/[lang]/dictionaries";
import { LANGUAGES, LanguageType } from "@/consts/langs";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ButtonGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LanguageSelector = ({
  lang,
  inline = false,
}: {
  lang: LanguageType;
  inline?: boolean;
}) => {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  if (inline) {
    return (
      <ButtonGroup gap={0}>
        {LANGUAGES.map((l) => (
          <Button
            size="xs"
            key={`lang-${l.key}`}
            as={Link}
            href={redirectedPathname(l.key as unknown as Locale)}
            isDisabled={lang === l.key}
            variant={lang === l.key ? "link" : "ghost"}
          >
            {l.title}
          </Button>
        ))}
      </ButtonGroup>
    );
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="link"
        _hover={{
          textDecor: "none",
        }}
      >
        {LANGUAGES.find((l) => l.key === lang)?.name}
      </MenuButton>
      <MenuList>
        {LANGUAGES.map((l) => (
          <MenuItem
            key={`menu-lang-${l.key}`}
            as={Link}
            href={redirectedPathname(l.key as unknown as Locale)}
            command={l.name}
            pointerEvents={lang === l.key ? "none" : "all"}
          >
            {l.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
