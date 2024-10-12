// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "PixiJS 6 Examples",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      defaultLocale: "zh-CN",
      locales: {
        "zh-CN": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      sidebar: [],
			customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
