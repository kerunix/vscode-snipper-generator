<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { cn } from '@/lib/utils'

const initialValues = {
  separator: ' ',
  country: 'FR',
} as const

const selectedCountry = ref<string>(initialValues.country)
const selectedSeparator = ref<string>(initialValues.separator)

const formSchema = toTypedSchema(z.object({
  separator: z.enum(['', ' ', '-'], {
    required_error: 'You need to select a separator.',
  }),
  country: z.string({
    required_error: 'Please select a country.',
  }),
}))

const { setFieldValue, values } = useForm({
  validationSchema: formSchema,
  initialValues,
})

watchEffect(() => {
  selectedCountry.value = values.country || ''
  selectedSeparator.value = values.separator || ''
})

const { copyIban, iban, separatorOptions, generateNewIban, countriesOptions } = useIbanGenerator(selectedSeparator, selectedCountry)
</script>

<template>
  <Alert>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      Does <b>NOT</b> enforce any country based validation at the moment. This should be used as a dummy data generator for things like fake forms submissions. Don't base any validation or critical business logic on the output of this generator.
    </AlertDescription>
  </Alert>
  <main class="mt-6 grid w-full grid-cols-2 gap-8">
    <Card>
      <CardHeader>
        <CardTitle>Parameters</CardTitle>
      </CardHeader>
      <CardContent>
        <form class="grid grid-cols-2">
          <FormField v-slot="{ componentField }" type="radio" name="separator">
            <FormItem class="space-y-3">
              <FormLabel>Separator</FormLabel>
              <FormControl>
                <RadioGroup class="flex flex-col gap-4" v-bind="componentField">
                  <FormControl v-for="option in separatorOptions" :key="option.label">
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem :id="option.label" :value="option.value" />
                      <Label :for="option.label">{{ option.label }}</Label>
                    </div>
                  </FormControl>
                </RadioGroup>
              </FormControl>
            </FormItem>
          </FormField>
          <FormField name="country">
            <FormItem class="flex flex-col">
              <FormLabel>Country</FormLabel>
              <Popover>
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      :class="cn('w-[200px] justify-between', !values.country && 'text-muted-foreground')"
                    >
                      {{ values.country ? countriesOptions.find(
                        (country) => country.code === values.country,
                      )?.label : 'Select country...' }}
                      <Icon name="i-lucide:chevrons-up-down" class="ml-2 size-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandEmpty>Nothing found.</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        <CommandItem
                          v-for="country in countriesOptions"
                          :key="country.label"
                          :value="country.label"
                          @select="() => {
                            setFieldValue('country', country.code)
                          }"
                        >
                          <Icon
                            name="i-lucide:check"
                            :class="cn('mr-2 h-4 w-4', country.label === values.country ? 'opacity-100' : 'opacity-0')"
                          />
                          {{ country.label }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the country that will be used in the first part of the IBAN.
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
        </form>
      </CardContent>
    </Card>
    <Card>
      <CardHeader class="flex flex-row items-center gap-5">
        <CardTitle>Generated Iban</CardTitle>
        <div>
          <Button variant="ghost" size="icon" @click="generateNewIban()">
            <Icon name="i-lucide:refresh-cw" />
          </Button>
          <Button variant="ghost" size="icon" @click="copyIban()">
            <Icon name="i-lucide:copy" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ClientOnly>{{ iban }}</ClientOnly>
      </CardContent>
    </Card>
  </main>
</template>
