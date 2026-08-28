# shoelace-vue-mfe

A tiny example of a **micro-frontend**: a Vue 3 component compiled to a
framework-agnostic [custom element](https://vuejs.org/guide/extras/web-components.html),
styled with [Shoelace](https://shoelace.style/) web components. The build
output is one `<script type="module">` tag that any host page can drop in —
no Vue required on the host side, no build-time coupling between host and
widget.

## Stack

- Vue 3 (`defineCustomElement`, single-file component compiled with
  `customElement: true`)
- Shoelace 2 (`sl-card`, `sl-rating`, `sl-button`)
- Vite (library build mode, ES module output)

## Run it

```bash
npm install
npm run dev
```

Opens `index.html` — a plain HTML page with no Vue on it — which loads
`src/main.js` and renders `<shoelace-mfe-widget>`.

## Build

```bash
npm run build
```

Outputs `dist/shoelace-vue-mfe.js`, a single ES module a host page can load
directly:

```html
<shoelace-mfe-widget></shoelace-mfe-widget>
<script type="module" src="/shoelace-vue-mfe.js"></script>
```

Verified working with Node 20 / npm 11 (`npm install && npm run build`
succeeds, `dist/shoelace-vue-mfe.js` is emitted).

## What this is (and isn't)

This is a from-scratch demo built to match the repo name, not a real
production integration — there's a single widget (a star-rating feedback
card) with no routing, state management, or inter-widget communication.
It's meant to show the mechanics of packaging Vue as a portable custom
element alongside Shoelace, which is what the repository name promised.
