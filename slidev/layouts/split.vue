<script setup lang="ts">
defineProps<{ eyebrow?: string; heading: string }>()
</script>

<template>
  <div class="slidev-layout kg-split">
    <aside class="kg-split-panel">
      <div class="kg-eyebrow">{{ eyebrow }}</div>
      <h1>{{ heading }}</h1>
      <div class="kg-rule" />
    </aside>
    <main class="kg-split-body">
      <slot />
      <SlideFooter />
    </main>
  </div>
</template>
