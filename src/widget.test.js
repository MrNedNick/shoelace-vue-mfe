import { describe, expect, it } from 'vitest'
import { defineCustomElement } from 'vue'
import Widget from './Widget.vue'

const WidgetElement = defineCustomElement(Widget)
if (!customElements.get('test-shoelace-mfe-widget')) {
  customElements.define('test-shoelace-mfe-widget', WidgetElement)
}

function mount() {
  const el = document.createElement('test-shoelace-mfe-widget')
  document.body.appendChild(el)
  return el
}

describe('shoelace-mfe-widget public API', () => {
  it('accepts rating and disabled as attributes', async () => {
    const el = document.createElement('test-shoelace-mfe-widget')
    el.setAttribute('rating', '3')
    el.setAttribute('disabled', '')
    document.body.appendChild(el)
    await new Promise((resolve) => requestAnimationFrame(resolve))

    expect(el.rating).toBe(3)
    expect(el.hasAttribute('disabled')).toBe(true)

    const rating = el.shadowRoot.querySelector('sl-rating')
    expect(rating.hasAttribute('disabled')).toBe(true)

    el.remove()
  })

  it('dispatches a rating-submit CustomEvent with the chosen rating', async () => {
    const el = mount()
    el.rating = 4
    await new Promise((resolve) => requestAnimationFrame(resolve))

    const eventPromise = new Promise((resolve) => {
      el.addEventListener('rating-submit', (event) => resolve(event), { once: true })
    })

    const button = el.shadowRoot.querySelector('sl-button')
    button.click()

    const event = await eventPromise
    expect(event).toBeInstanceOf(CustomEvent)
    expect(event.detail[0]).toEqual({ rating: 4 })

    el.remove()
  })
})
