import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { HorField } from '../index'

describe('HorField', () => {
  it('create', () => {
    const wrapper = mount(HorField, {
      props: { },
    })
  })
})
