import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { HorCellGroup } from '../index'

describe('HorCellGroup', () => {
  it('create', () => {
    const wrapper = mount(HorCellGroup, {
      props: { },
    })
  })
})
