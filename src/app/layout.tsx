import type { Metadata, Viewport } from "next";
import Head from "next/head";
import { Providers } from "./providers";
import Footer from "@/components/shared/Footer";
import { AOSInit } from "./components/AOS";

export const metaDataTitle = "Douglas Borges";
export const metaDataDescription =
  "Consultor de Inteligência Emocional para Liderança | Produtividade | Equilíbrio entre Empresa, Família e Propósito Vida";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "light",
  viewportFit: "auto",
};

export const metadata: Metadata = {
  title: {
    default: metaDataTitle,
    template: `%s | ${metaDataTitle}`,
  },
  description: metaDataDescription,
  applicationName: metaDataTitle,
  referrer: "origin-when-cross-origin",
  keywords:
    "psicologo,uniao da vitoria,porto uniao,consultoria,empresas,cristao",
  publisher: metaDataTitle,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: metaDataTitle,
    description: metaDataDescription,
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: metaDataTitle,

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
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
