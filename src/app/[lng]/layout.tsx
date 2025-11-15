import { Radio_Canada, Geist_Mono } from "next/font/google";

import Nav from "./components/Navbar";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Footer from "./components/Footer";

import { HeroUIProvider } from "@heroui/react";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

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
}) {
  const { lng } = await params;

  if (!routing.locales.includes(lng)) {
    notFound();
  }


  return (
    <html lang={lng} dir='ltr'>
      <body className={`${radio.className}`}>
        <NextIntlClientProvider>
          <Nav lng={lng} />
          <LanguageSwitcher lng={lng} />
          {children}
          <Footer lng={lng} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
