import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import vueLegacy from "@vitejs/plugin-legacy"
import vueSetupExtend from "vite-plugin-vue-setup-extend"

import { Plugin } from "vite"
import { configAutoImportPlugin } from "./autoImport"
import { configHtmlPlugin } from "./html"

export function setupPlugin(env: Env, viteEnv: ViteEnv) {
  const plugins: (Plugin | Plugin[])[] = [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    vueLegacy({ targets: ["defaults", "not IE"] }),

    configAutoImportPlugin(),
    configHtmlPlugin(viteEnv),
  ]

  return plugins
}
