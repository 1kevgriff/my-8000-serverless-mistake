<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps<{ hideByline?: boolean }>()
const { $page } = useSlideContext()
const num = computed(() => String($page.value).padStart(2, '0'))
</script>

<template>
  <footer class="kg-footer">
    <span v-if="!props.hideByline" class="kg-footer-byline">Kevin Griffin · consultwithgriff.com</span>
    <span class="kg-footer-num">{{ num }}</span>
  </footer>
</template>
