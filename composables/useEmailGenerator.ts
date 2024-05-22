import { useClipboard } from '@vueuse/core'

export default function useEmailGenerator() {
  const email = ref('')

  const toast = useToast()
  const { copy, copied } = useClipboard({ legacy: true, source: email.value })

  function generateEmail() {
    email.value = `${getRandomString(6)}@${getRandomString(5)}.${getRandomString(3)}`
    copy(email.value)
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

  return {
    generateEmail,
    email,
  }
}
