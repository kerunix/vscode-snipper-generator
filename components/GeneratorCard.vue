<script lang="ts" setup>
interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <UCard :ui="{ base: 'flex flex-col col-span-4', body: { base: 'grow' } }">
    <template #header>
      <div class="text-center text-xl font-bold uppercase">
        {{ title }}
      </div>
    </template>
    <slot />
    <template #footer>
      <div class="flex justify-between">
        <slot name="actions" />
      </div>
    </template>
  </UCard>
</template>
