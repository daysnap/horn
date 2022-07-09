import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { HorCell } from '../index'

const LABEL = '单元格'
const VALUE = '内容'

describe('HorCell', () => {
  it('render common', () => {
    const wrapper = mount(HorCell, {
      props: { label: LABEL, value: VALUE },
    })
    expect(wrapper.find('.hor-cell-label').text()).toEqual(LABEL)
    expect(wrapper.find('.hor-cell-value').text()).toEqual(VALUE)
  })

  it('render arrow', () => {
    const wrapper = mount(HorCell, {
      props: { arrow: true }
    })
    expect(wrapper.classes()).toContain('is-arrow')
    expect(wrapper.)
  })


})
