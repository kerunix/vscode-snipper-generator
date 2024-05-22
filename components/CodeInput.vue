<script lang="ts" setup>
interface Props {
  prefix: string
  description: string
  rawSnippet: string
}

interface Emits {
  (e: 'update:prefix', val: string): void
  (e: 'update:rawSnippet', val: string): void
  (e: 'update:description', val: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { metaSymbol } = useShortcuts()

const input = ref<HTMLTextAreaElement>()

const innerPrefix = computed({
  get: () => props.prefix,
  set: val => emit('update:prefix', val),
})

const innerDescription = computed({
  get: () => props.description,
  set: val => emit('update:description', val),
})

const innerRawSnippet = computed({
  get: () => props.rawSnippet,
  set: val => emit('update:rawSnippet', val),
})

defineShortcuts({
  tab: {
    usingInput: 'input',
    handler: () => {
      if (input.value) {
        insertStringInInput(input.value, '  ')
        innerRawSnippet.value = input.value.value || ''
      }
    },
  },
  ctrl_i: {
    usingInput: 'input',
    handler: () => {
      if (input.value) {
        // eslint-disable-next-line no-template-curly-in-string
        insertStringInInput(input.value, '${1:example}', [4, 11])
        innerRawSnippet.value = input.value.value || ''
      }
    },
  },
})

function handleCommandPaletteSelection(variable: string) {
  if (input.value)
    insertStringInInput(input.value, `$${variable}`)
}
</script>

<template>
  <div class="flex h-full flex-col gap-y-2 rounded bg-transparent">
    <div class="flex gap-2">
      <input
        id="prefix"
        v-model="innerPrefix"
        type="text"
        name="prefix"
        placeholder="Prefix"
        class="w-1/2 resize-none rounded-tl border border-solid border-gray-300 bg-gray-100 p-6 focus:outline-none focus:ring focus:ring-gray-700 dark:border-gray-900 dark:bg-editor-dark"
      >
      <input
        id="description"
        v-model="innerDescription"
        type="text"
        name="description"
        placeholder="Description"
        class="w-1/2 resize-none rounded-tr border border-solid border-gray-300 bg-gray-100 p-6 focus:outline-none focus:ring focus:ring-gray-700 dark:border-gray-900 dark:bg-editor-dark"
      >
    </div>
    <textarea
      id="input"
      ref="input"
      v-model="innerRawSnippet"
      placeholder="Snippet"
      class="w-full grow resize-none border border-solid border-gray-300 bg-gray-100 p-6 focus:outline-none focus:ring focus:ring-gray-700 dark:border-gray-900 dark:bg-editor-dark"
      name="input"
    />
    <div class="flex resize-none items-center justify-between rounded-b border border-solid border-gray-300 bg-gray-100 p-6 dark:border-gray-900 dark:bg-editor-dark">
      <div class="flex items-center space-x-2">
        <UKbd>{{ metaSymbol }}</UKbd>
        <UKbd>K</UKbd>
        <p class="text-gray-700 dark:text-gray-500">
          Open Command Palette
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <UKbd>{{ metaSymbol }}</UKbd>
        <UKbd>i</UKbd>
        <p class="text-gray-700 dark:text-gray-500">
          Insert Placeholder
        </p>
      </div>
      <a
        class="flex items-center space-x-2 text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-300"
        href="https://code.visualstudio.com/docs/editor/userdefinedsnippets"
        target="_blank"
      >
        <span>VS Code snippets documentation</span>
        <UIcon name="i-heroicons-arrow-top-right-on-square" />
      </a>
    </div>
  </div>
  <SnippetsCommandPalette @selected="handleCommandPaletteSelection" />
</template>
