import { useClipboard } from '@vueuse/core'
import getRandomDigits from '~/utils/getRandomDigits'

export default function usePhoneNumberGenerator() {
  const phoneNumber = ref('')

  const toast = useToast()
  const { copy, copied } = useClipboard({ legacy: true, source: phoneNumber.value })

  function generatePhoneNumber() {
    phoneNumber.value = `${getRandomDigits(10)}`
    copy(phoneNumber.value)
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
    generatePhoneNumber,
  }
}
