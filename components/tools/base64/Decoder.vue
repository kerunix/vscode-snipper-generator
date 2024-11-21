<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const decodingOutput = ref('')

const decodeFormSchema = toTypedSchema(z.object({
  decodeInput: z.string().min(1),
}))

const { values: decodeFormValues } = useForm({
  validationSchema: decodeFormSchema,
})

watchEffect(() => {
  if (decodeFormValues.decodeInput) {
    decodingOutput.value = atob(decodeFormValues.decodeInput)
  }
})
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center gap-5">
      <CardTitle>Decode string from base64</CardTitle>
      <div>
        <Button variant="ghost" size="icon">
          <Icon name="i-lucide:copy" />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <form class="flex flex-col gap-4">
        <FormField v-slot="{ componentField }" name="decodeInput">
          <FormItem>
            <FormLabel>Input string</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Paste your string..."
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </form>
      <div class="mt-6">
        <Label id="decoding-output-label">Output string</Label>
        <Card class="mt-2 rounded-sm bg-muted/25" aria-labelledby="decoding-output-label">
          <CardContent class="py-6">
            {{ decodingOutput }}
          </CardContent>
        </Card>
      </div>
    </CardContent>
  </Card>
</template>
