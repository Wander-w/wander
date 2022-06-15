import dayjs from "dayjs"
import { createHtmlPlugin } from "vite-plugin-html"

export function configHtmlPlugin(viteEnv: ViteEnv) {
  return createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        title: viteEnv.VITE_APP_TITLE,
        release: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        env: viteEnv.VITE_APP_TITLE,
      },
    },
  })
}
