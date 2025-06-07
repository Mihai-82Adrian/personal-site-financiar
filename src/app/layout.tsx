import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Site Personal Financiar-Contabil | Germania 2025",
  description: "Servicii financiar-contabile inovatoare în Germania. Calculatoare fiscale, consultanță business și instrumente financiare moderne.",
  keywords: "finanzbuchhalter, germania, calculator impozite, consultanta financiara, business planning",
  authors: [{ name: "Personal Financial Services" }],
  openGraph: {
    title: "Site Personal Financiar-Contabil | Germania 2025",
    description: "Servicii financiar-contabile inovatoare în Germania",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
