import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export const viewport: Viewport = {
  themeColor: "#fbfbfd",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dbit.inc"),
  title: {
    default: "Dbit, Inc. — Una idea. Muchas formas.",
    template: "%s | Dbit, Inc.",
  },
  description:
    "Dbit, Inc. es un conglomerado tecnológico de vanguardia enfocado en e-commerce de alto rendimiento, desarrollo de videojuegos con Dbit Games, infraestructura cloud, medios digitales (Mexica TV) y soluciones de software escalables.",
  keywords: [
    "Dbit",
    "Dbit Inc",
    "Dbit Games",
    "Mexica TV",
    "Hueyi Tech",
    "Desarrollo de Videojuegos",
    "Software Corporativo",
    "Cloud Computing",
    "Next-gen Gaming",
    "E-commerce",
  ],
  authors: [{ name: "Dbit, Inc." }],
  creator: "Dbit, Inc.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://dbit.inc",
    siteName: "Dbit, Inc.",
    title: "Dbit, Inc. | Innovación Tecnológica, Medios & Dbit Games",
    description:
      "Liderando la innovación tecnológica en software, medios de streaming, e-commerce y desarrollo de videojuegos con Dbit Games.",
    images: [
      {
        url: "/assets/media/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Dbit Inc. Headquarters & Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dbit, Inc. | Tecnología, Medios y Videojuegos",
    description:
      "Plataformas disruptivas, software corporativo, Mexica TV y el estudio Dbit Games.",
    images: ["/assets/media/hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dbit, Inc.",
    url: "https://dbit.inc",
    logo: "https://dbit.inc/assets/media/logo-1.png",
    description:
      "Conglomerado tecnológico líder en soluciones de software, medios digitales, e-commerce y desarrollo de videojuegos con Dbit Games.",
    sameAs: [
      "https://twitter.com/dbitinc",
      "https://linkedin.com/company/dbitinc",
      "https://youtube.com/@dbitinc",
    ],
  };

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#fbfbfd] text-[#1d1d1f] antialiased">
        {children}
      </body>
    </html>
  );
}
