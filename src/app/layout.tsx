import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV BAIQ PUTRIA - Solusi Industrial Terpercaya",
  description: "Perusahaan yang bergerak di bidang Perdagangan Besar Mesin, Peralatan, dan Perlengkapan Teknis yang berkomitmen menghadirkan solusi industrial yang inovatif, berkualitas, dan berstandar internasional",
  keywords: ["CV BAIQ PUTRIA", "mesin industri", "peralatan teknik", "industrial supply", "sparepart", "perlengkapan teknis", "konstruksi", "manufaktur", "Sulawesi Tenggara"],
  authors: [{ name: "CV BAIQ PUTRIA" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CV BAIQ PUTRIA - Solusi Industrial Terpercaya",
    description: "Perdagangan Besar Mesin, Peralatan, dan Perlengkapan Teknis berkualitas internasional",
    url: "https://cvbaiqputria.com",
    siteName: "CV BAIQ PUTRIA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV BAIQ PUTRIA - Solusi Industrial Terpercaya",
    description: "Perdagangan Besar Mesin, Peralatan, dan Perlengkapan Teknis berkualitas internasional",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="ewo05nwekp0j1ypl3h0btjpjnma1ve" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <script
          src="/scripts/animations.js"
          async
        />
      </body>
    </html>
  );
}
