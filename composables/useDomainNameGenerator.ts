import { useClipboard } from '@vueuse/core'

export default function useDomainNameGenerator() {
  const domainName = ref('')

  // const toast = useToast()
  const { copy, copied } = useClipboard({ legacy: true, source: domainName.value })

  function generateDomainName() {
    domainName.value = `${getRandomString(6, { allowNumbers: false })}.${getRandomString(3)}`
    copy(domainName.value)
  }

  watch(copied, () => {
    // if (copied.value) {
    //   toast.add({
    //     title: 'Copied to clipboard !',
    //     timeout: 3000,
    //     color: 'green',
    //   })
    // }
  })

  return {
    generateDomainName,
  }
}
