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

export const LanguageSelector = ({
  lang,
  inline = false
}: {
  lang: LanguageType;
  inline?: boolean;
}) => {
  if (inline) {
    return (
      <ButtonGroup gap={0}>
        {LANGUAGES.map((l) => (
          <Button
            size="xs"
            key={`lang-${l.key}`}
            as={Link}
            href={`/${l.key}`}
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link">
        {LANGUAGES.find((l) => l.key === lang)?.name}
      </MenuButton>
      <MenuList>
        {LANGUAGES.map((l) => (
          <MenuItem
            key={`menu-lang-${l.key}`}
            as={Link}
            href={`/${l.key}`}
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
