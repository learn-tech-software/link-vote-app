import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import list from '../list.vue'

describe('List Tests', () => {

    it('list check items empty in beginning', () => {
        const wrapper = mount(list, { global: { plugins: [ createTestingPinia({ createSpy: vi.fn, }) ] } })
        expect(wrapper.findAll('list-card')).toHaveLength(0)

    })

})
