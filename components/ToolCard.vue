<script lang="ts" setup>
interface Props {
  name: string
  icon: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink class="flex flex-col">
    <Card class="grow">
      <CardHeader>
        <CardTitle class="flex items-center gap-5">
          <Icon :name="icon" class="text-muted-foreground" />
          <span>{{ name }}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {{ description }}
      </CardContent>
    </Card>
  </NuxtLink>
</template>
