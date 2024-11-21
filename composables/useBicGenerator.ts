import { useClipboard } from '@vueuse/core'

export default function useBicGenerator() {
  const bic = ref('')

  // const toast = useToast()
  const { copy, copied } = useClipboard({ legacy: true, source: bic.value })

  function generateBic() {
    bic.value = `${getRandomString(6, { uppercaseOnly: true })}${getRandomString(5, { uppercaseOnly: true, allowNumbers: true })}`
    copy(bic.value)
  }

  watch(copied, () => {
    if (copied.value) {
      // toast.add({
      //   title: 'Copied to clipboard !',
      //   timeout: 3000,
      //   color: 'green',
      // })
    }
  })

  return {
    generateBic,
  }
}
