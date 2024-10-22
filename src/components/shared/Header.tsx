import { LanguageType } from "@/consts/langs";
import { Button, HStack } from "@chakra-ui/react";
import { LanguageSelector } from "./LanguageSelector";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

export const Header = async ({ lang }: { lang: LanguageType }) => {
  const intl = await getDictionary(lang as never);

  const isCompany = false;

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
      <HStack gap={8}>
        <Link href="/">
          <h1>
            <span>
              <strong>Douglas</strong>
            </span>
            &nbsp;<span>Borges</span>
          </h1>
        </Link>
        <HStack gap={4} border={1} borderRadius={4} borderColor="gray.100">
          <Button
            variant={!isCompany ? "solid" : "link"}
            as={Link}
            href="/voce"
          >
            {intl.header.personal}
          </Button>
          <Button
            variant={isCompany ? "solid" : "link"}
            as={Link}
            href="/empresas"
          >
            {intl.header.business}
          </Button>
        </HStack>
      </HStack>

      <HStack gap={8}>
        <HStack gap={4}>
          <Button variant="link">{intl.header.nav.home}</Button>
          <Button variant="link">{intl.header.nav.services}</Button>
          <Button variant="link" as={Link} href="/sobre">
            {intl.header.nav.about}
          </Button>
          <Button variant="link">{intl.header.nav.events}</Button>
          <Button variant="link">{intl.header.nav.blog}</Button>
        </HStack>

        <Button>{intl.header.cta}</Button>

        <LanguageSelector lang={lang} />
      </HStack>
    </HStack>
  );
};
