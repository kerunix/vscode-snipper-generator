<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const selectedLocalPart = ref([15])
const selectedDomainName = ref([15])

const { email, generateNewEmail, copyEmail } = useEmailGenerator(selectedLocalPart, selectedDomainName)

const formSchema = toTypedSchema(z.object({
  localPart: z.array(
    z.number().min(0).max(64),
  ),
  domainName: z.array(
    z.number().min(0).max(64),
  ),
}))

const { values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    localPart: [15],
    domainName: [15],
  },
})

watchEffect(() => {
  selectedLocalPart.value = values.localPart || []
  selectedDomainName.value = values.domainName || []
})
</script>

<template>
  <main class="mt-6 grid w-full grid-cols-2 gap-8">
    <Card>
      <CardHeader>
        <CardTitle>Parameters</CardTitle>
      </CardHeader>
      <CardContent>
        <form class="flex flex-col gap-4">
          <FormField v-slot="{ componentField, value }" name="localPart">
            <FormItem>
              <FormLabel>Local part length: <span class="font-medium">{{ value[0] }}</span></FormLabel>
              <FormControl>
                <Slider
                  v-bind="componentField"
                  :default-value="[15]"
                  :max="64"
                  :min="1"
                  :step="1"
                />
                <FormDescription class="flex justify-between">
                  <span>This is the 'username'</span>
                </FormDescription>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField, value }" name="domainName">
            <FormItem>
              <FormLabel>Domain name length: <span class="font-medium">{{ value[0] }}</span></FormLabel>
              <FormControl>
                <Slider
                  v-bind="componentField"
                  :default-value="[15]"
                  :max="64"
                  :min="1"
                  :step="1"
                />
                <FormDescription class="flex justify-between">
                  <span>This is the complete domain name, including both top level (.com) and second level domains.</span>
                </FormDescription>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </form>
      </CardContent>
    </Card>
    <Card>
      <CardHeader class="flex flex-row items-center gap-5">
        <CardTitle>Generated Email</CardTitle>
        <div>
          <Button variant="ghost" size="icon" @click="generateNewEmail()">
            <Icon name="i-lucide:refresh-cw" />
          </Button>
          <Button variant="ghost" size="icon" @click="copyEmail()">
            <Icon name="i-lucide:copy" />
          </Button>
        </div>
      </CardHeader>
      <CardContent class="flex flex-row items-center gap-5">
        <ClientOnly>{{ email }}</ClientOnly>
      </CardContent>
    </Card>
  </main>
</template>
