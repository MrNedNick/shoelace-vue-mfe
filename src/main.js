import { defineCustomElement } from 'vue'
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js'
import '@shoelace-style/shoelace/dist/components/card/card.js'
import '@shoelace-style/shoelace/dist/components/rating/rating.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/themes/light.css'
import Widget from './Widget.vue'

// Shoelace loads its icon assets from this path at runtime.
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/dist/')

const ShoelaceWidget = defineCustomElement(Widget)

customElements.define('shoelace-mfe-widget', ShoelaceWidget)
