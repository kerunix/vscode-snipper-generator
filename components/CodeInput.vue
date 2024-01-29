<script lang="ts" setup>
interface Props {
  prefix: string
  description: string
  rawSnippet :string
}

interface Emits {
  (e: 'update:prefix', val: string): void;
  (e: 'update:rawSnippet', val: string): void;
  (e: 'update:description', val: string): void;
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { metaSymbol } = useShortcuts()

const input = ref<HTMLTextAreaElement>()

const innerPrefix = computed({
  get: () => props.prefix,
  set: (val) => emit('update:prefix', val)
})

const innerDescription = computed({
  get: () => props.description,
  set: (val) => emit('update:description', val)
})

const innerRawSnippet = computed({
  get: () => props.rawSnippet,
  set: (val) => emit('update:rawSnippet', val)
})

defineShortcuts({
  tab: {
    usingInput: 'input',
    handler: () => {
      if (input.value) {
        insertStringInInput(input.value, '  ')
        innerRawSnippet.value = input.value.value || ''
      }
    }
  },
  ctrl_i: {
    usingInput: 'input',
    handler: () => {
      if (input.value) {
        insertStringInInput(input.value, '${1:example}', [4, 11])
        innerRawSnippet.value = input.value.value || ''
      }
    }
  }
})

function handleCommandPaletteSelection(variable: string) {
  if (input.value) {
    insertStringInInput(input.value, `$${variable}`)
  }
}
</script>

<template>
  <div class="h-full bg-transparent rounded flex flex-col gap-y-2">
    <div class="flex gap-2">
      <input
        v-model="innerPrefix"
        type="text"
        name="prefix"
        placeholder="Prefix"
        id="prefix"
        class="border border-solid border-gray-300 dark:border-gray-900 w-1/2 p-6 resize-none rounded-tl bg-gray-100 dark:bg-editor-dark focus:outline-none focus:ring focus:ring-gray-700">
      <input
        v-model="innerDescription"
        type="text"
        name="description"
        placeholder="Description"
        id="description"
        class="border border-solid border-gray-300 dark:border-gray-900 w-1/2 p-6 resize-none rounded-tr bg-gray-100 dark:bg-editor-dark focus:outline-none focus:ring focus:ring-gray-700">
    </div>
    <textarea
      v-model="innerRawSnippet"
      placeholder="Snippet"
      class="border border-solid border-gray-300 dark:border-gray-900 bg-gray-100 dark:bg-editor-dark p-6 grow w-full resize-none focus:outline-none focus:ring focus:ring-gray-700"
      ref="input"
      name="input"
      id="input"
    />
    <div class="flex items-center justify-between border border-solid border-gray-300 dark:border-gray-900 bg-gray-100 dark:bg-editor-dark p-6 resize-none rounded-b">
      <div class="flex items-center space-x-2">
        <UKbd>{{ metaSymbol }}</UKbd>
        <UKbd>K</UKbd>
        <p class="text-gray-700 dark:text-gray-500">Open Command Palette</p>
      </div>
      <div class="flex items-center space-x-2">
        <UKbd>{{ metaSymbol }}</UKbd>
        <UKbd>i</UKbd>
        <p class="text-gray-700 dark:text-gray-500">Insert Placeholder</p>
      </div>
      <a
        class="flex items-center space-x-2 hover:dark:text-gray-300 text-gray-700 dark:text-gray-500 hover:text-gray-900"
        href="https://code.visualstudio.com/docs/editor/userdefinedsnippets"
        target="_blank"
      >
        <span>VS Code snippets documentation</span>
        <UIcon name="i-heroicons-arrow-top-right-on-square" />
      </a>
    </div>
  </div>
  <CommandPalette @selected="handleCommandPaletteSelection" />
</template>

