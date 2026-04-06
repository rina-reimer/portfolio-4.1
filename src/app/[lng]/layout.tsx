import { Radio_Canada, Geist_Mono } from "next/font/google";

import Nav from "./components/Navbar";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Footer from "./components/Footer";

import { HeroUIProvider } from "@heroui/react";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

interface Lang {
  lng: "en" | "de";
}

const radio = Radio_Canada({
  variable: "--font-radio-canada",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rina Reimer",
  description: "data scientist and developer",
};

export default async function RootLayout({
  children, params
}: { children: React.ReactNode, params: Lang }) {
  const { lng } = await params;

  if (!routing.locales.includes(lng)) {
    notFound();
  }


  return (
    <html lang={lng} dir='ltr'>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className={`${radio.className} bg-light dark:bg-dark`}>
        <NextIntlClientProvider>
          <Nav />
          <LanguageSwitcher lng={lng} />
          {children}
          <Footer lng={lng} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
