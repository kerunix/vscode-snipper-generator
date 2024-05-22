<script lang="ts" setup>
interface CommandPaletteOption {
  id: number
  label: string
  click: () => void
}

const { generateEmail } = useEmailGenerator()
const { generateIban } = useIbanGenerator()
const { generateBic } = useBicGenerator()
const { generateDomainName } = useDomainNameGenerator()
const { generatePhoneNumber } = usePhoneNumberGenerator()

const commands: CommandPaletteOption[] = [
  { id: 0, label: 'Email - Quick copy', click: () => generateEmail() },
  { id: 1, label: 'Iban - Quick copy', click: () => generateIban() },
  { id: 2, label: 'Bic - Quick copy', click: () => generateBic() },
  { id: 3, label: 'Domain Name - Quick copy', click: () => generateDomainName() },
  { id: 4, label: 'Phone Number - Quick copy', click: () => generatePhoneNumber() },
]

const isOpened = ref()

defineShortcuts({
  ctrl_k: {
    handler: () => isOpened.value = !isOpened.value,
  },
})

function handleSelect(option: CommandPaletteOption) {
  option.click()
  isOpened.value = false
}
</script>

<template>
  <UModal v-model="isOpened">
    <UCommandPalette
      nullable
      :groups="[{ key: 'commands', commands }]"
      @update:model-value="handleSelect"
    />
  </UModal>
</template>
