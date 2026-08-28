<template>
  <sl-card class="widget">
    <div slot="header">Feedback widget</div>
    <p>Built with Vue 3, styled with Shoelace, shipped as one <code>&lt;script type="module"&gt;</code> tag.</p>
    <sl-rating v-model="rating" @sl-change="onRate"></sl-rating>
    <p v-if="submitted">Thanks — rated {{ rating }}/5.</p>
    <sl-button v-else slot="footer" variant="primary" :disabled="!rating" @click="submit">
      Submit
    </sl-button>
  </sl-card>
</template>

<script setup>
import { ref } from 'vue'

const rating = ref(0)
const submitted = ref(false)

function onRate(event) {
  rating.value = event.target.value
}

function submit() {
  submitted.value = true
}
</script>

<style>
.widget {
  max-width: 320px;
  font-family: var(--sl-font-sans);
}
</style>
