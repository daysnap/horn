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
    expect(wrapper.find('.hor-cell-arrow').exists()).toBeTruthy()
  })

  it('render left icon', () => {
    const wrapper = mount(HorCell, {
      props: { icon: 'setting-o' }
    })
    expect(wrapper.find('.hor-cell-icon').exists()).toBeTruthy()
  })

  it('text ellipsis', () => {
    const wrapper = mount(HorCell, {
      props: { ellipsis: true }
    })
    expect(wrapper.classes()).toContain('is-ellipsis')
  })

  it('text line clamp', () => {
    const wrapper = mount(HorCell, {
      props: { lineClamp: 2 },
    })
    expect(wrapper.classes()).toContain('is-line-clamp')
    expect(wrapper.attributes().style).toContain(wrapper.props('lineClamp'))
  })

  it('render required', () => {
    const wrapper = mount(HorCell, {
      props: { required: true }
    })
    expect(wrapper.classes()).toContain('is-required')
  })

  it('render direction column', () => {
    const wrapper = mount(HorCell, {
      props: { direction: 'column' }
    })
    expect(wrapper.classes()).toContain('is-column')
  })
})
