declare global {
  interface ImportMeta {
    env: ImportMetaEnv
  }

  interface ImportMetaEnv extends ViteEnv {
    [key: string]: unknown
  }

  type Env = "development" | "production"

  type ViteEnv = {
    VITE_APP_TITLE: string
    VITE_APP_TIMEOUT: number
  }
}
export {}
