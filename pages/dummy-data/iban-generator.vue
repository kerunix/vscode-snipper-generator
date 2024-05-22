<script lang="ts" setup>
const { copyIban, iban, selectedCountry, separator, separatorOptions, generateNewIban } = useIbanGenerator()
</script>

<template>
  <UContainer>
    <UCard>
      <template #header>
        <h1 class="text-center">
          IBAN GENERATOR
        </h1>
      </template>
      <div class="flex gap-44">
        <URadioGroup v-model="separator" :options="separatorOptions" legend="Separator" />
        <UFormGroup label="Country">
          <template #hint>
            <UTooltip text="Only affects the first two letters, not the actual format of the generated IBAN">
              <UIcon name="i-carbon-help" />
            </UTooltip>
          </template>
          <UInputMenu v-model="selectedCountry" :options="countryList" option-attribute="name" />
        </UFormGroup>
      </div>
      <div class="mt-9 ">
        <p class="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Generated iban :
        </p>
        <div class="flex w-full items-center justify-between">
          <ClientOnly>{{ iban }}</ClientOnly>
          <div class="flex space-x-4">
            <UButton
              size="xs"
              color="gray"
              variant="ghost"
              icon="i-carbon-renew"
              @click="generateNewIban()"
            />
            <UButton
              size="xs"
              color="gray"
              variant="ghost"
              icon="i-carbon-copy"
              @click="copyIban()"
            />
          </div>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
