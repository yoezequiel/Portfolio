import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
    site: "https://yoezequiel.netlify.app/",
    integrations: [
        sitemap(),
        robotsTxt({
            sitemap: [
                "https://yoezequiel.netlify.app/sitemap-index.xml",
                "https://yoezequiel.netlify.app/sitemap-0.xml",
            ],
        }),
        solidJs(),
        UnoCSS({ injectReset: true }),
        icon(),
    ],
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    output: "server",
    adapter: netlify(),
});
