<script lang="ts" setup>
import Default from './default.vue'

const route = useRoute()
</script>

<template>
  <Default>
    <h1 class="mt-3 scroll-m-20 text-2xl font-extrabold tracking-tight text-foreground lg:text-3xl">
      {{ route.meta.title }}
    </h1>
    <p class="max-w-2xl leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
      {{ route.meta.description }}
    </p>
    <slot />
  </Default>
</template>
