import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mobiliario Demo | Diseño y Calidad",
    template: "%s | Mobiliario Demo",
  },
  description: "Descubre nuestra colección exclusiva de sofás, sillones y descanso. Diseño contemporáneo y fabricación artesanal para tu hogar.",
  keywords: ["muebles", "sofás", "decoración", "interiorismo", "diseño", "hogar"],
  authors: [{ name: "Tu Marca" }],
  creator: "Tu Marca",
  openGraph: {
    title: "Mobiliario Demo | Diseño y Calidad",
    description: "Muebles de diseño para espacios exclusivos. Calidad artesanal y estética atemporal.",
    url: "https://demo-mobiliario.vercel.app", // Placeholder URL
    siteName: "Mobiliario Demo",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200", // Using one of our hero images as default OG
        width: 1200,
        height: 630,
        alt: "Colección de Mobiliario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobiliario Demo | Diseño y Calidad",
    description: "Descubre nuestra colección exclusiva de sofás y muebles de diseño.",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased custom-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
