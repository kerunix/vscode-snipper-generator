<script lang="ts" setup>
const { generatePhoneNumber } = usePhoneNumberGenerator()
</script>

<template>
  <button class="overflow-hidden rounded-md border border-solid border-gray-300 bg-white p-6 dark:border-gray-900 dark:bg-editor-dark" @click="generatePhoneNumber()">
    Phone Number
  </button>
</template>
