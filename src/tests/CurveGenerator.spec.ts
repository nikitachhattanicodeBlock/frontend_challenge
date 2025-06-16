import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CurveGenerator from '../components/CurveGenerator.vue'

describe('CurveGenerator.vue', () => {
  it('renders an SVG curve', () => {
    const wrapper = mount(CurveGenerator, { props: { spread: 50 } })
    const path = wrapper.find('path')
    expect(path.exists()).toBe(true)
    expect(path.attributes('d')).toContain('Q')
  })

  it('updates curve path when spread changes', async () => {
    const wrapper = mount(CurveGenerator, { props: { spread: 30 } })
    const oldPath = wrapper.find('path').attributes('d')
    await wrapper.setProps({ spread: 70 })
    const newPath = wrapper.find('path').attributes('d')
    expect(newPath).not.toBe(oldPath)
  })

  it('applies danger class when spread is below 30', () => {
    const wrapper = mount(CurveGenerator, { props: { spread: 25 } })
    const input = wrapper.get('[data-testid="spread-slider"]')
    expect(input.classes()).toContain('danger')
  })

  it('does not apply danger class when spread is 30 or more', () => {
    const wrapper = mount(CurveGenerator, { props: { spread: 30 } })
    const input = wrapper.get('[data-testid="spread-slider"]')
    expect(input.classes()).not.toContain('danger')
  })

  it('emits update:spread when slider is moved', async () => {
    const wrapper = mount(CurveGenerator, { props: { spread: 50 } })
    const input = wrapper.get('[data-testid="spread-slider"]')
    await input.setValue(70)
    expect(wrapper.emitted('update:spread')).toBeTruthy()
    expect(wrapper.emitted('update:spread')![0][0]).toBe(70)
  })
})
