<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { getHighlighter } from 'shikiji'
import type { VSCodeSnipperGeneratorInject } from '~/tools/pages/vs-code-snippets-generator.vue'

const { description, prefix, rawSnippet } = injectStrict<VSCodeSnipperGeneratorInject>(VSCODE_SNIPPET_GENERATOR_STATE_KEY)

const highlighter = await getHighlighter({
  themes: ['vitesse-dark', 'vitesse-light'],
  langs: ['json'],
})

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const formattedOutput = ref('')
const prettifiedOutput = ref('')

const { copy } = useClipboardWithToast({ legacy: true, source: formattedOutput.value })

watchEffect(() => {
  // escape " with \"
  // split lines by line-break
  const separatedSnippet = rawSnippet.value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .split('\n')
  const separatedSnippetLength = separatedSnippet.length

  // add double quotes around each line and comas at the end except for the last one
  // Also add indentation to all lines except for the first one
  const newSnippet = separatedSnippet.map((line, index) => {
    const bodyIndent = '        '
    if (index === 0)
      return `"${line}",`
    if (index === separatedSnippetLength - 1)
      return `${bodyIndent}"${line}"`
    return `${bodyIndent}"${line}",`
  })

  formattedOutput.value = `
    "${description.value}": {
      "prefix": "${prefix.value}",
      "body": [
        ${newSnippet.join('\n')}
      ],
      "description": "${description.value}"
    }
  `
  prettifiedOutput.value = highlighter.codeToHtml(formattedOutput.value, { lang: 'json', theme: isDark.value ? 'vitesse-dark' : 'vitesse-light' })
})
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center gap-5">
      <CardTitle>Snippet</CardTitle>
      <div>
        <Button
          variant="ghost" size="icon"
          @click="copy(formattedOutput)"
        >
          <Icon name="i-lucide:copy" />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <Card class="p-0">
        <CardContent class="p-0">
          <ColorScheme class="h-full overflow-hidden rounded-lg">
            <div
              class="h-full overflow-hidden rounded-lg"
              v-html="prettifiedOutput"
            />
          </ColorScheme>
        </CardContent>
      </Card>
    </CardContent>
  </Card>
</template>
