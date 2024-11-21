<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useSidebar } from './utils'
import Button from '@/components/ui/button/Button.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    variant="ghost"
    size="icon"
    :class="props.class"
    @click="toggleSidebar"
  >
    <Icon name="i-lucide:panel-left" class="size-[1.2rem]" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
