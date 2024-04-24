import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "app/components/organisms/Header/Header";
import { Footer } from "app/components/organisms/Footer/Footer";
import HomeCarousel from "app/components/molecules/HomeCarousel";
import SessionAuthProvider from "app/context/SessionAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SessionAuthProvider>
          <Header />
          {children}
          <Footer />
        </SessionAuthProvider>
      </body>
    </html>
  );
}
