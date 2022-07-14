export const useComposition = () => {
  const handleCompositionstart = (e: CompositionEvent) => {
    ;(e.target as any).composing = true
  }
  const handleCompositionend = (e: CompositionEvent) => {
    ;(e.target as any).composing = false
    e.target?.dispatchEvent(new InputEvent('input'))
  }
  return {
    handleCompositionstart,
    handleCompositionend,
  }
}
