import { useClipboard } from '@vueuse/core'

export default function useEmailGenerator(local: Ref<number[]>, domain: Ref<number[]>) {
  const tldLength = ref(Math.floor(Math.random() * (5 - 1 + 1)) + 1)

  const email = computed(() => {
    return `${getRandomString(local.value[0])}@${getRandomString(domain.value[0] - tldLength.value)}.${getRandomString(tldLength.value)}`
  })

  function generateNewEmail() {
    // Forces the whole `email` computed to reset since `tldLength` is a reactive dependency and strings are random
    tldLength.value = Math.floor(Math.random() * (5 - 1 + 1)) + 1
  }

  const { copy: copyEmail, copied } = useClipboard({ legacy: true, source: () => email.value })

  watch(copied, () => {
    if (copied.value) {
      toast({
        title: 'Copied to clipboard !',
      })
    }
  })

  return {
    generateNewEmail,
    copyEmail,
    email,
  }
}
