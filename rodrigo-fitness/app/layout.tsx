import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodrigo Diaz",
  description: "Personal Trainer y Entrenador Funcional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
