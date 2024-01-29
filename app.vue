<script setup lang="ts">

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})

const state = reactive({
  rawSnippet: '',
  prefix: '',
  description: '',
})

</script>

<template>
  <Body class="bg-gray-200 dark:bg-gray-950" />
  <div class="min-h-screen flex flex-col items-center">

    <div class="py-12 grow flex flex-col gap-6 w-[120rem]">
      <header>
        <h1 class="text-4xl text-center">VS Code Snippet Generator</h1>
      </header>
      <main class="w-full grid grid-cols-2 gap-8 grow">
        <CodeInput
          v-model:description="state.description"
          v-model:prefix="state.prefix"
          v-model:raw-snippet="state.rawSnippet"
        />
        <CodeOutput
          :raw-snippet-value="state.rawSnippet"
          :prefix="state.prefix"
          :description="state.description"
         />
      </main>
    </div>
    <footer class="w-full flex px-9 py-4 space-x-5">
      <p class="inline-flex items-center grow ml-3">Made with ❤️ by <a href="https://www.github.com/kerunix" target="_blank" class="underline mx-2">Kerunix</a> using <a href="https://www.nuxt.com" target="_blank" class="mx-2 dark:text-gray-50 text-gray-800 hover:text-green-700 dark:hover:text-green-800"><NuxtLogo /></a></p>
      <div class="self-end pr-1">
        <UButton
          icon="i-carbon-logo-github"
          variant="ghost"
          color="gray"
          :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          @click="isDark = !isDark"
        />
        <UButton
          :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
          variant="ghost"
          color="gray"
          :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          @click="isDark = !isDark"
        />
      </div>
    </footer>
  </div>
  <UNotifications />
</template>
