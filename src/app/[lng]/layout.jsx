import { Radio_Canada } from "next/font/google";

import Nav from "./components/Navbar";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Footer from "./components/Footer";

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
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

  const messages = await getMessages();


  return (
    <html lang={lng} dir='ltr'>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className={`${radio.className} bg-light dark:bg-dark`}>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <LanguageSwitcher lng={lng} />
          {children}
          <Footer lng={lng} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
