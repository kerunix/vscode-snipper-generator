<script setup lang="ts">
const { metaSymbol } = useShortcuts()
const { copySnippet, state, prettifiedOutput } = await useVSCodeSnippetGenerator()
</script>

<template>
  <header>
    <h1 class="text-center text-4xl">
      VS Code Snippet Generator
    </h1>
  </header>
  <main class="grid w-full grow grid-cols-2 gap-8">
    <div class="flex h-full flex-col gap-y-2 rounded bg-transparent">
      <div class="flex gap-2">
        <Input
          id="prefix"
          v-model="state.prefix"
          type="text"
          name="prefix"
          placeholder="Prefix"
        />
        <Input
          id="description"
          v-model="state.description"
          type="text"
          name="description"
          placeholder="Description"
        />
      </div>
      <Textarea
        id="input"
        v-model="state.rawSnippet"
        placeholder="Snippet"
        class="flex min-h-20 w-full grow resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        name="input"
      />
      <Card>
        <CardContent class="flex items-center justify-between py-3">
          <div class="flex items-center space-x-2">
            <kbd>{{ metaSymbol }}</kbd>
            <span>+</span>
            <kbd>i</kbd>
            <p class="text-muted-foreground">
              Insert Placeholder
            </p>
          </div>
          <a
            class="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
            href="https://code.visualstudio.com/docs/editor/userdefinedsnippets"
            target="_blank"
          >
            <span>VS Code snippets documentation</span>
            <Icon name="i-lucide-square-arrow-out-up-right" />
          </a>
        </CardContent>
      </Card>
    </div>
    <div class="flex h-full flex-col gap-y-2 rounded bg-transparent">
      <ColorScheme class="rounded-sm">
        <Card class="grow bg-card [&>*]:rounded-lg">
          <div
            class="bg-card [&>*]:rounded-lg"
            v-html="prettifiedOutput"
          />
        </Card>
      </ColorScheme>
      <Button
        variant="outline"
        class="h-12"
        @click="copySnippet"
      >
        Copy Snippet
      </Button>
    </div>
  </main>
</template>
