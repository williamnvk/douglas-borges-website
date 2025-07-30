import type { Metadata, Viewport } from "next";
import { Provider } from "@/app/components/ui/provider";
import Footer from "@/components/shared/Footer";
import { AOSInit } from "./components/AOS";
import {
  siteTitle,
  siteDescription,
  siteImage,
  siteUrl,
} from "@/data/site-constants";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  metadataBase: new URL(siteUrl),
  other: {
    developer: "William Novak <williamnvk@gmail.com>",
    language: "pt-BR",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
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
      <GoogleTagManager gtmId="GTM-N8DHV67" />
      <GoogleAnalytics gaId="G-5QM28K26ND" />
      <body>
        <Provider>
          <AOSInit />
          {children}
          <Footer />
          <SpeedInsights />
        </Provider>
      </body>
    </html>
  );
}
