import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { PrefsProvider } from "@/components/prefs";

// Fija el tema antes de pintar para evitar parpadeo: elección guardada o preferencia del sistema.
const themeScript = `try{var t=localStorage.getItem("dyl-theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}`;

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
    <html lang="es" suppressHydrationWarning className={`${heading.variable} ${body.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <PrefsProvider>{children}</PrefsProvider>
      </body>
    </html>
  );
}
