import { mountComponent } from '../utils/mount-component'
import Component from './index.vue'
import { HorKeyboardProps } from './type'
import { HorKeyboardInstance } from './index'
export const KeyBoard = function (option: Partial<HorKeyboardProps>) {
  const { instance } = mountComponent(Component)
  return (instance as HorKeyboardInstance).show(option)
}
