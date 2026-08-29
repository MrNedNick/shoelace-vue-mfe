<template>
  <sl-card class="widget">
    <div slot="header">Feedback widget</div>
    <p>Built with Vue 3, styled with Shoelace, shipped as one <code>&lt;script type="module"&gt;</code> tag.</p>
    <sl-rating v-model="currentRating" :disabled="disabled" @sl-change="onRate"></sl-rating>
    <p v-if="submitted">Thanks — rated {{ currentRating }}/5.</p>
    <sl-button
      v-else
      slot="footer"
      variant="primary"
      :disabled="disabled || !currentRating"
      @click="submit"
    >
      Submit
    </sl-button>
  </sl-card>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  rating: { type: Number, default: 0 },
  disabled: { type: Boolean, default: false },
})

const emit = defineEmits(['rating-submit'])

const currentRating = ref(props.rating)
const submitted = ref(false)

watch(
  () => props.rating,
  (value) => {
    currentRating.value = value
  },
)

function onRate(event) {
  currentRating.value = event.target.value
}

function submit() {
  submitted.value = true
  emit('rating-submit', { rating: currentRating.value })
}
</script>

<style>
.widget {
  max-width: 320px;
  font-family: var(--sl-font-sans);
}
</style>
