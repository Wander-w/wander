import { resolve } from "path"

// 路径处理
export function usePath(path: string) {
  return resolve(process.cwd(), path)
}

/* 解析环境变量 */
export function useParseEnv(env: Record<string, string>) {
  return Object.keys(env).reduce((pre, cur) => {
    const key = cur

    switch (key) {
      case "VITE_APP_TIMEOUT":
        pre[key] = Number(env[key])
        break
      default:
        pre[key] = env[key]
        break
    }

    return pre
  }, {} as ViteEnv)
}
