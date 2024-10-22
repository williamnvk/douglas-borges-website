import { LanguageType } from "@/consts/langs";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Header } from "./Header";

export const HeaderWrapper = async ({ lang }: { lang: LanguageType }) => {
  const intl = await getDictionary(lang as never);
  return <Header lang={lang} intl={intl} />;
};
