import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  trailingSlash: "always",
  site: "https://www.idexpraxis.nl",
  integrations: [sitemap()],
});
