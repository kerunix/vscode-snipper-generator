<script lang="ts" setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <Body class="bg-gray-200 dark:bg-gray-950" />
  <div class="flex h-screen w-screen">
    <div class="fixed left-0 flex h-screen w-64 shrink flex-col border-r border-gray-900 px-6 py-4">
      <nav class="grow">
        <ul class="flex h-full flex-col">
          <li>
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/snippet-generator">
              Snippet generator
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dummy-data">
              Dummy data generator
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div>
        <UButton
          icon="i-carbon-logo-github" variant="ghost" color="gray"
          :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`" @click="isDark = !isDark"
        />
        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-carbon-sun' : 'i-carbon-moon'" variant="ghost" color="gray"
            :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`" @click="isDark = !isDark"
          />
        </ClientOnly>
      </div>
    </div>
    <div class="ml-64 flex min-h-screen grow flex-col items-center">
      <div class="flex w-full max-w-[1750px] grow flex-col gap-6 py-12">
        <slot />
      </div>
    </div>
  </div>
  <UNotifications />
</template>
