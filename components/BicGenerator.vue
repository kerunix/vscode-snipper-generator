<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

const bic = ref('')

const toast = useToast()
const { copy, copied } = useClipboard({ legacy: true, source: bic.value })

function generateBic() {
  bic.value = `${getRandomString(6, { uppercaseOnly: true })}${getRandomString(5, { uppercaseOnly: true, allowNumbers: true })}`
  copy(bic.value)
}

watch(copied, () => {
  if (copied.value) {
    toast.add({
      title: 'Copied to clipboard !',
      timeout: 3000,
      color: 'green',
    })
  }
})
</script>

<template>
  <button class="overflow-hidden rounded-md border border-solid border-gray-300 bg-white p-6 dark:border-gray-900 dark:bg-editor-dark" @click="generateBic()">
    BIC
  </button>
</template>
