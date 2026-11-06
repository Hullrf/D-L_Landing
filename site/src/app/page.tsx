import { readdirSync } from "node:fs";
import path from "node:path";
import Landing from "@/components/landing";

// Imágenes de fondo de la portada: se detectan al compilar. Basta con soltar archivos en public/img/hero/.
function heroImages(): string[] {
  try {
    return readdirSync(path.join(process.cwd(), "public", "img", "hero"))
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/img/hero/${f}`);
  } catch {
    return [];
  }
}

export default function Home() {
  return <Landing heroImages={heroImages()} />;
}
