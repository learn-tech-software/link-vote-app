import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import submitCard from '../submitCard.vue'

describe('Submit Card Tests', () => {

    it('submit card text check', () => {
        const wrapper = mount(submitCard)
        expect(wrapper.text()).toContain('SUBMIT A LINK')
    })

})
