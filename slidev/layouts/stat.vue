<script setup lang="ts">
defineProps<{ stat: string }>()
</script>

<template>
  <div class="slidev-layout kg-dark kg-stat">
    <div class="kg-stat-value">{{ stat }}</div>
    <div class="kg-stat-body"><slot /></div>
    <SlideFooter />
  </div>
</template>
