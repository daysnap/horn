interface Config {
  log?: ((...args: any[]) => void) | boolean
}

// 配置
export const config: Config = {
  log: true,
}

export const defineConfig = (cfg: Config) => Object.assign(config, cfg)
