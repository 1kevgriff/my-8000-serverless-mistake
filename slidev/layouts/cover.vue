<script setup lang="ts">
defineProps<{ eyebrow?: string; subtitle?: string; byline?: string }>()
</script>

<template>
  <div class="slidev-layout kg-cover">
    <div class="kg-cover-panel">
      <div class="kg-eyebrow">{{ eyebrow }}</div>
      <div class="kg-rule" />
      <slot />
      <p v-if="subtitle" class="kg-cover-subtitle">{{ subtitle }}</p>
      <p v-if="byline" class="kg-cover-byline" v-html="byline" />
    </div>
    <img class="kg-cover-photo" src="/kevin-griffin.png" alt="Kevin Griffin">
  </div>
</template>
