<script setup lang="ts">
import { tools } from '~/tools/tools'
</script>

<template>
  <h1 class="mt-3 scroll-m-20 text-2xl font-extrabold tracking-tight text-foreground lg:text-3xl">
    All Tools
  </h1>
  <div class="grid auto-rows-min gap-4 md:grid-cols-4">
    <ToolCard
      v-for="tool in tools"
      :key="tool.slug"
      :href="`/tools/${tool.slug}`"
      v-bind="tool"
    />
  </div>
</template>
