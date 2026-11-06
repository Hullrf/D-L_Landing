import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const heading = Bricolage_Grotesque({
  variable: "--font-heading-face",
  subsets: ["latin"],
  display: "swap",
});

const body = Figtree({
  variable: "--font-body-face",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Consultoría en sistemas de gestión de calidad, seguridad y salud en el trabajo, ambiente, seguridad de la información y formación. Acompañamos a su organización en toda Colombia.";

export const metadata: Metadata = {
  title: "D&L Quality Consulting | Sistemas de gestión y HSEQ",
  description,
  openGraph: {
    title: "D&L Quality Consulting",
    description,
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${heading.variable} ${body.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
