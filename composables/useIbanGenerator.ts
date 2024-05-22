import { useClipboard } from '@vueuse/core'

export default function useIbanGenerator() {
  const separatorOptions = [
    { label: 'Whitespace', value: ' ' },
    { label: 'Dash', value: '-' },
    { label: 'None', value: '' },
  ]

  const selectedCountry = ref(
    { code: 'FR', name: 'France' },
  )

  const countryCode = ref('FR')
  const separator = ref(' ')
  const firstPart = ref(getRandomDigits(2))
  const secondPart = ref(getRandomDigits(4))
  const thirdPart = ref(getRandomDigits(4))
  const fourthPart = ref(getRandomDigits(4))
  const fifthPart = ref(getRandomDigits(4))
  const sixthPart = ref(getRandomDigits(4))
  const seventhPart = ref(getRandomDigits(3))

  const toast = useToast()

  function getRandomDigits(length: number) {
    return Math.floor(10 ** (length - 1) + Math.random() * (10 ** length - 10 ** (length - 1) - 1))
  }

  const iban = computed(() => `${countryCode.value}${firstPart.value}${separator.value}${secondPart.value}${separator.value}${thirdPart.value}${separator.value}${fourthPart.value}${separator.value}${fifthPart.value}${separator.value}${sixthPart.value}${separator.value}${seventhPart.value}`)

  const { copy: copyIban, copied } = useClipboard({ legacy: true, source: () => iban.value })

  watch(copied, () => {
    if (copied.value) {
      toast.add({
        title: 'Copied to clipboard !',
        timeout: 3000,
        color: 'green',
      })
    }
  })

  watch(selectedCountry, newCountry => countryCode.value = newCountry.code)

  function generateNewIban() {
    firstPart.value = getRandomDigits(2)
    secondPart.value = getRandomDigits(4)
    thirdPart.value = getRandomDigits(4)
    fourthPart.value = getRandomDigits(4)
    fifthPart.value = getRandomDigits(4)
    sixthPart.value = getRandomDigits(4)
    seventhPart.value = getRandomDigits(3)
  }

  return {
    iban,
    selectedCountry,
    copyIban,
    separator,
    separatorOptions,
    generateNewIban,
  }
}
