import { defineConfig, ConfigEnv, loadEnv } from "vite"
import { setupPlugin, useParseEnv, usePath } from "./build/vite"

export default ({ mode /* command */ }: ConfigEnv) => {
  // const isBuild = command === "build"

  // const isPro = mode === "production"
  const env = loadEnv(mode, process.cwd())
  const viteEnv = useParseEnv(env)

  return defineConfig({
    server: {
      host: true,
      port: 8080,
    },

    plugins: setupPlugin(mode as Env, viteEnv),
    resolve: {
      alias: {
        "@": usePath("src"),
      },
    },
  })
}
