import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import listCard from '../listCard.vue'

describe('List Card Tests', () => {

    it('list card props check', () => {
        const wrapper = mount(listCard, { global: { plugins: [ createTestingPinia({ createSpy: vi.fn, }) ] }, props: {
            item: {
                title: 'stackoverflow',
                link: 'https://stackoverflow.com/',
                voteCount: 10,
                createdAt: Date.now()
            }
        } })

        expect(wrapper.element.getElementsByClassName('listTitle')[0].innerHTML).eq("stackoverflow")
        expect(wrapper.element.getElementsByClassName('listLink')[0].innerHTML).eq("https://stackoverflow.com/")
        expect(wrapper.element.getElementsByClassName('listCountBold')[0].innerHTML).eq("10")
    })

    it('list card modal close in the beginning', () => {
        const wrapper = mount(listCard, { global: { plugins: [ createTestingPinia({ createSpy: vi.fn, }) ] }, props: {
            item: {
                title: 'stackoverflow',
                link: 'https://stackoverflow.com/',
                voteCount: 10,
                createdAt: Date.now()
            }
        } })

        expect(wrapper.vm.showModal).eq(false)
    })

})
