import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://a2-privcomp.github.io/",
  base: "/a2-privcomp",
  integrations: [tailwind(), icon()],
});
