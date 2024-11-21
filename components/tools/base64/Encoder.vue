<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const encodingOutput = ref('')

const encodeFormSchema = toTypedSchema(z.object({
  encodeInput: z.string().min(1),
}))

const { values: encodeFormValues } = useForm({
  validationSchema: encodeFormSchema,
})

watchEffect(() => {
  if (encodeFormValues.encodeInput) {
    encodingOutput.value = btoa(encodeFormValues.encodeInput)
  }
})
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center gap-5">
      <CardTitle>Encode string to base64</CardTitle>
      <div>
        <Button variant="ghost" size="icon">
          <Icon name="i-lucide:copy" />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <form class="flex flex-col gap-4">
        <FormField v-slot="{ componentField }" name="encodeInput">
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
        <Label id="encoding-output-label">Output string</Label>
        <Card class="mt-2 rounded-sm bg-muted/25" aria-labelledby="encoding-output-label">
          <CardContent class="py-6">
            {{ encodingOutput }}
          </CardContent>
        </Card>
      </div>
    </CardContent>
  </Card>
</template>
