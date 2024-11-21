<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import type { VSCodeSnipperGeneratorInject } from '~/tools/pages/vs-code-snippets-generator.vue'

const { prefix, description, rawSnippet } = injectStrict<VSCodeSnipperGeneratorInject>(VSCODE_SNIPPET_GENERATOR_STATE_KEY)

const { metaSymbol } = useShortcuts()

const snippetInputRef = useTemplateRef('snippetInputRef')

const formSchema = toTypedSchema(z.object({
  prefix: z.string().min(1),
  description: z.string().min(1),
  rawSnippet: z.string().min(1),
}))

const { values } = useForm({ validationSchema: formSchema })

defineShortcuts({
  tab: {
    usingInput: 'rawSnippet',
    handler: () => {
      if (snippetInputRef.value) {
        insertStringInInput(snippetInputRef.value.$refs.inputRef, '  ')
        rawSnippet.value = snippetInputRef.value.$refs.inputRef.value || ''
      }
    },
  },
  ctrl_i: {
    usingInput: 'rawSnippet',
    handler: () => {
      if (snippetInputRef.value) {
        // eslint-disable-next-line no-template-curly-in-string
        insertStringInInput(snippetInputRef.value.$refs.inputRef, '${1:example}', [4, 11])
        rawSnippet.value = snippetInputRef.value.$refs.inputRef.value || ''
      }
    },
  },
})

watchEffect(() => {
  prefix.value = values.prefix || ''
  description.value = values.description || ''
  rawSnippet.value = values.rawSnippet || ''
})
</script>

<template>
  <Card class="flex flex-col">
    <CardHeader>
      <CardTitle>Parameters</CardTitle>
    </CardHeader>
    <CardContent class="grow">
      <form class="grid h-full grid-cols-2 grid-rows-[auto_1fr_auto] gap-4">
        <FormField v-slot="{ componentField }" name="prefix">
          <FormItem>
            <FormLabel>Prefix</FormLabel>
            <FormControl>
              <Input

                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="rawSnippet">
          <FormItem class="col-span-2 flex h-full flex-col">
            <FormLabel>Snippet</FormLabel>
            <FormControl>
              <Textarea
                ref="snippetInputRef"
                placeholder="Paste your snippet..."
                class="grow"
                v-bind="componentField"
              />
            </FormControl>
            <FormDescription
              class="flex items-center gap-2"
            >
              <kbd>
                {{ metaSymbol }} + i</kbd>
              <span class="text-gray-700 dark:text-gray-500">
                Insert Placeholder
              </span>
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
      </form>
    </CardContent>
  </Card>
  <!-- <div class="flex h-full flex-col gap-y-2 rounded bg-transparent">
    <div class="flex gap-2">
      <Input
        id="prefix"
        v-model="prefix"
        type="text"
        name="prefix"
        placeholder="Prefix"
        class="w-1/2 resize-none rounded-tl border border-solid border-gray-300 bg-gray-100 p-6 focus:outline-none focus:ring focus:ring-gray-700 dark:border-gray-900 dark:bg-editor-dark"
      />
      <Input
        id="description"
        v-model="description"
        type="text"
        name="description"
        placeholder="Description"
        class="w-1/2 resize-none rounded-tr border border-solid border-gray-300 bg-gray-100 p-6 focus:outline-none focus:ring focus:ring-gray-700 dark:border-gray-900 dark:bg-editor-dark"
      />
    </div>
    <Textarea
      id="input"
      ref="input"
      v-model="rawSnippet"
      placeholder="Snippet"
      class="w-full grow resize-none border border-solid border-gray-300 bg-gray-100 p-6 focus:outline-none focus:ring focus:ring-gray-700 dark:border-gray-900 dark:bg-editor-dark"
      name="input"
    />
    <div class="flex resize-none items-center justify-between rounded-b border border-solid border-gray-300 bg-gray-100 p-6 dark:border-gray-900 dark:bg-editor-dark">
      <div class="flex items-center space-x-2">
        <kbd>{{ metaSymbol }}</kbd>
        <kbd>K</kbd>
        <p class="text-gray-700 dark:text-gray-500">
          Open Command Palette
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <kbd>{{ metaSymbol }}</kbd>
        <kbd>i</kbd>
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
        <Icon name="i-lucide-square-arrow-out-up-right" />
      </a>
    </div>
  </div> -->
  <!-- <SnippetsCommandPalette @selected="handleCommandPaletteSelection" /> -->
</template>
