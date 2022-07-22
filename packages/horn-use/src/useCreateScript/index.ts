interface UseCreateScriptOptions {
  src: string
  key: string
}

export const useCreateScript = (options: UseCreateScriptOptions) =>
  new Promise((reslove, reject) => {
    const { src, key } = options
    const id = `ucs_${key}`
    if (document.getElementById(id)) {
      return
    }
    const d = window.document
    const script = d.createElement('script')
    script.setAttribute('id', id)
    script.setAttribute('src', src)
    script.setAttribute('type', 'text/javascript')
    console.log(script)
    d.head.appendChild(script)
    script.onload = reslove
    script.onerror = reject
  })
