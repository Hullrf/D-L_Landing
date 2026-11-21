// Hostinger: el servidor tiene una glibc antigua y no carga el SWC nativo de Next,
// así que se publica como sitio estático (`STATIC_EXPORT=1 npm run build` -> carpeta `out/`).
// Config en .mjs (no .ts) para que Next no tenga que transpilarla al cargarla en ese host.
const isStaticExport = process.env.STATIC_EXPORT === "1";

/** @type {import("next").NextConfig} */
const nextConfig = {
  // trailingSlash: genera cursos/index.html para que Apache/LiteSpeed sirva /cursos/ sin reglas extra.
  // PPR no es compatible con `output: "export"`: solo se activa en modo servidor.
  ...(isStaticExport
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : { cacheComponents: true, partialPrefetching: true }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
