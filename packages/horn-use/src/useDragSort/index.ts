// // interface UseDragSortOptions {}
// const queue = []
// let touchX: number
// let touchY: number
// let domWidth: number
// let domheight: number
// let dragDom
// const touchStart = (dom) => (e) => {
//   dragDom = dom
//   domWidth = dom.offsetWidth
//   domheight = dom.offsetHeight
//   dragDom.style.position = 'fixed'
//   touchMove(e)
// }
// const touchMove = function (e) {
//   console.log(e)
//   touchX = e.touches[0].clientX
//   touchY = e.touches[0].clientY
//   dragDom.style.left = touchX - domWidth / 2 + 'px'
//   dragDom.style.top = touchY - domheight / 2 + 'px'
//   e.stopPropagation()
//   e.preventDefault()
// }
// const touchEnd = function (e) {
//   console.log(e)
// }
// const bindTouch = function (dom: Element) {
//   console.dir(dom)
//   dom.addEventListener('touchstart', touchStart(dom))
//   dom.addEventListener('touchmove', touchMove)
//   dom.addEventListener('touchend', touchEnd)
//   queue.push(dom)
// }
// export const useDragSort = (dom: any) => {
//   if (dom.length) {
//     Array.prototype.map.call(dom, (item) => {
//       bindTouch(item)
//     })
//   } else {
//     bindTouch(dom)
//   }
// }

import { ref } from 'vue'

interface UseDragSortOptions {}

export const useDragSort = (options: UseDragSortOptions) => {
  console.log('options => ', options)
  const handleTouchStart = (event: TouchEvent) => {
    const { clientX, clientY } = event.touches[0]
    console.log('handleTouchStart => ', clientX, clientY)
    x.value = clientX
    y.value = clientY
  }
  const handleTouchMove = (event: TouchEvent) => {
    const { clientX, clientY } = event.touches[0]
    console.log('handleTouchMove => ', clientX, clientY)
    x.value = clientX
    y.value = clientY
  }
  const handleTouchEnd = (event: TouchEvent) => {
    console.log('handleTouchEnd => ', event)
  }

  const x = ref<number>(0)
  const y = ref<number>(0)

  return {
    x,
    y,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}
