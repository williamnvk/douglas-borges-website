export const LANG_PT = "pt";
export const LANG_EN = "en";

export const LANGS = [LANG_PT, LANG_EN];

export type LanguageType = typeof LANG_PT | typeof LANG_EN | string;

export const LANGUAGES = [
  { key: LANG_PT, name: "pt-BR", title: "Português" },
  { key: LANG_EN, name: "en-US", title: "Inglês" },
];
