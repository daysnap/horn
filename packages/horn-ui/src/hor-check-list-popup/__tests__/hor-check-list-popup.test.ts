import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { HorCheckListPopup } from '../index'

describe('HorCheckListPopup', () => {
  it('create', () => {
    const wrapper = mount(HorCheckListPopup, {
      props: { },
    })
  })
})
