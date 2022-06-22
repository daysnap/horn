import { App } from 'vue'

export type WithInstall<T> = T & {
  install(app: App): void
}

export const withInstall = <T>(options: any): WithInstall<T> => {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options
    app.component(name, options)
  }
  return options
}
