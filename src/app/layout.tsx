import type { Metadata, Viewport } from "next";
import Head from "next/head";
import { Providers } from "./providers";
import Footer from "@/components/shared/Footer";
import { AOSInit } from "./components/AOS";
import {
  siteTitle,
  siteDescription,
  siteImage,
  siteUrl,
} from "@/data/dictionaries";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "light",
  viewportFit: "auto",
};

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: siteTitle,
  referrer: "origin-when-cross-origin",
  keywords:
    "psicologo,uniao da vitoria,porto uniao,consultoria,empresas,cristao,douglas borges,produtividade,inteligencia emocional,equilíbrio,empresa,familia,propósito,vida",
  publisher: "Douglas Borges",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [siteImage],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  const { children } = props;

  const lang = "pt-BR";

  return (
    <html lang={lang} suppressHydrationWarning suppressContentEditableWarning>
      <Head>
        <meta name="language" content={lang} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Providers>
          <AOSInit />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
