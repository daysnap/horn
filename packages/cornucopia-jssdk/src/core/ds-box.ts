
export declare var DsBox:{
  call<T> (
    success: (res: { code: number, message?: string, data: T }) => void,
    fail: (err: { code?: number, message?: string }) => void,
    service: string,
    action: string,
    params: any
  ): void
}
