<script setup lang="ts">
defineProps<{ number: string | number }>()
</script>

<template>
  <div class="slidev-layout kg-dark kg-section">
    <div class="kg-section-num">{{ String(number).padStart(2, '0') }}</div>
    <div class="kg-section-title"><slot /></div>
    <SlideFooter />
  </div>
</template>
