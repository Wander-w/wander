import AutoImport from "unplugin-auto-import/vite"
import Component from "unplugin-vue-components/vite"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

export function configAutoImportPlugin() {
  return [
    // {prefix}-{collection}-{icon} -> icon-mdi-account
    Icons(),

    Component({
      resolvers: [ElementPlusResolver(), IconsResolver({ prefix: "icon" })],
      dts: "./src/components.d.ts",
      directoryAsNamespace: true,
    }),

    AutoImport({
      dts: "./src/auto-imports.d.ts",
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: "Icon",
          extension: "jsx",
        }),
      ],
      // dirs: [],
      // imports: [],
    }),
  ]
}
