<script setup lang="ts">
const state = reactive({
  rawSnippet: '',
  prefix: '',
  description: '',
})
</script>

<template>
  <header>
    <h1 class="text-center text-4xl">
      VS Code Snippet Generator
    </h1>
  </header>
  <main class="grid w-full grow grid-cols-2 gap-8">
    <CodeInput
      v-model:description="state.description" v-model:prefix="state.prefix"
      v-model:raw-snippet="state.rawSnippet"
    />
    <CodeOutput :raw-snippet-value="state.rawSnippet" :prefix="state.prefix" :description="state.description" />
  </main>
</template>
