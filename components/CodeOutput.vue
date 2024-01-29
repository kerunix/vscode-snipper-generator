<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { getHighlighter } from 'shikiji'

interface Props {
  rawSnippetValue: string
  description: string
  prefix: string
}

const props = defineProps<Props>()

const highlighter = await getHighlighter({
  themes: ['vitesse-dark', 'vitesse-light'],
  langs: ['json'],
})

const toast = useToast()
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const formattedOutput = ref('')
const prettifiedOutput = ref('')

const { copy, copied } = useClipboard({ legacy: true, source: formattedOutput.value })


watch(copied, () => {
  if (copied.value) {
    toast.add({
      title: 'Copied to clipboard !',
      timeout: 3000,
      color: 'green'
    })
  }
})


watchEffect(() => {
  // escape " with \"
  // split lines by line-break
  const separatedSnippet = props.rawSnippetValue
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .split("\n")
  const separatedSnippetLength = separatedSnippet.length

  // add double quotes around each line and comas at the end except for the last one
  // Also add indentation to all lines except for the first one
  const newSnippet = separatedSnippet.map((line, index) => {
    const bodyIndent = '        '
    if (index === 0) return `"${line}",`
    if (index === separatedSnippetLength - 1) return `${bodyIndent}"${line}"`
    return `${bodyIndent}"${line}",`
  })

  formattedOutput.value = `
    "${props.description}": {
      "prefix": "${props.prefix}",
      "body": [
        ${newSnippet.join('\n')}
      ],
      "description": "${props.description}"
    }
  `
  prettifiedOutput.value = highlighter.codeToHtml(formattedOutput.value, { lang: 'json', theme: isDark.value ? 'vitesse-dark' : 'vitesse-light' })
})
</script>

<template>
  <div class="h-full bg-transparent rounded flex flex-col gap-y-2">
      <div
        class="border overflow-hidden border-gray-300 dark:border-gray-900 border-solid h-full bg-white dark:bg-editor-dark rounded-t"
        v-html="prettifiedOutput"
      />
    <button
      class="w-full border border-solid border-gray-300 dark:border-gray-900 p-6 resize-none rounded-b bg-gray-100 dark:bg-editor-dark focus:outline-none focus:ring focus:ring-gray-700"
      @click="copy(formattedOutput)"
    >
      Copy Snippet
    </button>
  </div>
</template>

