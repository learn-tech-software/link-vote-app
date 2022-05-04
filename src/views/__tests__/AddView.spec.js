import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import AddView from '../AddView.vue'

describe('Add View Tests', () => {

  it('add view text check', () => {
    const wrapper = mount(AddView, { global: { plugins: [ createTestingPinia({ createSpy: vi.fn, }) ] } })
    expect(wrapper.element.getElementsByClassName('headerText')[0].innerHTML).eq("Add New Link")
    expect(wrapper.element.getElementsByClassName('inputHeaderText')[0].innerHTML).eq("Link Name:")
    expect(wrapper.element.getElementsByClassName('inputHeaderText')[1].innerHTML).eq("Link URL:")
  })

  it('add view form submit', () => {
    const wrapper = mount(AddView, { global: { plugins: [ createTestingPinia({ createSpy: vi.fn, }) ] } })

    wrapper.element.getElementsByClassName('form-control')[0].value = 'stackoverflow'
    wrapper.element.getElementsByClassName('form-control')[1].value = 'https://stackoverflow.com/'
    wrapper.find('button').trigger('click')
    
  })
  
})
