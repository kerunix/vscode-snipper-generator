<script lang="ts" setup>
const { generateEmail } = useEmailGenerator()
const { copyIban } = useIbanGenerator()
const { generateBic } = useBicGenerator()
const { generateDomainName } = useDomainNameGenerator()
const { generatePhoneNumber } = usePhoneNumberGenerator()
const { metaSymbol } = useShortcuts()
</script>

<template>
  <header class="flex flex-col items-center text-center">
    <h1 class="text-4xl">
      Dummy JS data generator
    </h1>
    <h2 class="mt-12 text-xl">
      What do you want generated ?
    </h2>
    <div class="mt-6 flex items-center space-x-2">
      <UKbd>{{ metaSymbol }}</UKbd>
      <span>+</span>
      <UKbd>K</UKbd>
      <p class="text-gray-700 dark:text-gray-500">
        to open Command Palette for quick generation
      </p>
    </div>
  </header>
  <main class="mt-16 grid w-full grow grid-cols-12 grid-rows-6 gap-8">
    <GeneratorCard title="EMAIL">
      <p>Generate fake email addresses with advanced configuration options</p>
      <template #actions>
        <UButton label="Advanced options" color="white" to="/dummy-data/email-generator" />
        <UButton label="Quick copy" @click="generateEmail" />
      </template>
    </GeneratorCard>
    <GeneratorCard title="IBAN">
      <p>Generate fake bank accounts IBANs number with advanced configuration options</p>
      <template #actions>
        <UButton label="Advanced options" color="white" to="/dummy-data/iban-generator" />
        <UButton label="Quick copy" @click="copyIban()" />
      </template>
    </GeneratorCard>
    <GeneratorCard title="BIC">
      <p>Generate fake BIC / SWIFT numbers with advanced configuration options</p>
      <template #actions>
        <UButton label="Advanced options" color="white" to="/dummy-data/bic-generator" />
        <UButton label="Quick copy" @click="generateBic" />
      </template>
    </GeneratorCard>
    <GeneratorCard title="Domain Name">
      <p>Generate fake domain names with advanced configuration options</p>
      <template #actions>
        <UButton label="Advanced options" color="white" to="/dummy-data/domain-names-generator" />
        <UButton label="Quick copy" @click="generateDomainName" />
      </template>
    </GeneratorCard>
    <GeneratorCard title="Phone Number">
      <p>Generate fake phone numbers with advanced configuration options</p>
      <template #actions>
        <UButton label="Advanced options" color="white" to="/dummy-data/phone-number-generator" />
        <UButton label="Quick copy" @click="generatePhoneNumber" />
      </template>
    </GeneratorCard>
  </main>
  <GeneratorCommandPalette />
</template>
