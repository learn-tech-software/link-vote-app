import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import navbar from '../navbar.vue'

describe('Navbar Tests', () => {

  it('navbar header text check', () => {
    const wrapper = mount(navbar)
    expect(wrapper.text()).toContain('Vote Challenge')
  })

  it('navbar image check', () => {
    const wrapper = mount(navbar)
    expect(wrapper.html()).toContain('assets/logo.png')
  })
  
})
