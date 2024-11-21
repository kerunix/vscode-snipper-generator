<script setup lang="ts">
export interface VSCodeSnipperGeneratorInject {
  prefix: Ref<string>
  rawSnippet: Ref<string>
  description: Ref<string>
  updateSnippet: (newSnippet: string) => void
  updatePrefix: (newSnippet: string) => void
  updateDescription: (newSnippet: string) => void
}

const rawSnippet = ref('')
const prefix = ref('')
const description = ref('')

function updateSnippet(newSnippet: string) {
  rawSnippet.value = newSnippet
}

function updatePrefix(newPrefix: string) {
  prefix.value = newPrefix
}

function updateDescription(newDescription: string) {
  description.value = newDescription
}

provide(VSCODE_SNIPPET_GENERATOR_STATE_KEY, {
  updateDescription,
  updatePrefix,
  updateSnippet,
  rawSnippet,
  prefix,
  description,
})
</script>

<template>
  <main class="mt-6 grid w-full grow grid-cols-2 gap-8">
    <ToolsVSCodeSnippetInput
      v-model:description="description" v-model:prefix="prefix"
      v-model:raw-snippet="rawSnippet"
    />
    <ToolsVSCodeSnippetOutput :raw-snippet-value="rawSnippet" :prefix="prefix" :description="description" />
  </main>
</template>
