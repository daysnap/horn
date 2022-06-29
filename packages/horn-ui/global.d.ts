
declare module 'vue' {
  export interface GlobalComponents {
    HorCell: typeof import('@daysnap/horn-ui')['HorCell']
    HorPicker: typeof import('@daysnap/horn-ui')['HorPicker']
  }
}

export {}