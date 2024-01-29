<script lang="ts" setup>
interface Emits {
  (e: 'selected', val: string): void
}

interface CommandPaletteOption {
  id: number
  label: string
  value: string
}

const emit = defineEmits<Emits>()

const variables: CommandPaletteOption[] = [
  { id: 0, value: 'TM_SELECTED_TEXT', label: 'The currently selected text or the empty string'},
  { id: 1, value: 'TM_CURRENT_LINE', label: 'The contents of the current line'},
  { id: 2, value: 'TM_CURRENT_WORD', label: 'The contents of the word under cursor or the empty string'},
  { id: 3, value: 'TM_LINE_INDEX', label: 'The zero - index based line number'},
  { id: 4, value: 'TM_LINE_NUMBER', label: 'The one - index based line number'},
  { id: 5, value: 'TM_FILENAME', label: 'The filename of the current document'},
  { id: 6, value: 'TM_FILENAME_BASE', label: 'The filename of the current document without its extensions'},
  { id: 7, value: 'TM_DIRECTORY', label: 'The directory of the current document'},
  { id: 8, value: 'TM_FILEPATH', label: 'The full file path of the current document'},
  { id: 9, value: 'RELATIVE_FILEPATH', label: 'The relative(to the opened workspace or folder) file path of the current document'},
  { id: 10, value: 'CLIPBOARD', label: 'The contents of your clipboard'},
  { id: 11, value: 'WORKSPACE_NAME', label: 'The name of the opened workspace or folder'},
  { id: 12, value: 'WORKSPACE_FOLDER', label: 'The path of the opened workspace or folder'},
  { id: 13, value: 'CURSOR_INDEX', label: 'The zero - index based cursor number'},
  { id: 14, value: 'CURSOR_NUMBER', label: 'The one - index based cursor number'},
  { id: 15, value: 'CURRENT_YEAR', label: 'The current year'},
  { id: 16, value: 'CURRENT_YEAR_SHORT', label: 'The current year\'s last two digits'},
  { id: 17, value: 'CURRENT_MONTH', label: 'The month as two digits(example \'02\')'},
  { id: 18, value: 'CURRENT_MONTH_NAME', label: 'The full name of the month(example \'July\')'},
  { id: 19, value: 'CURRENT_MONTH_NAME_SHORT', label: 'The short name of the month(example \'Jul\')'},
  { id: 20, value: 'CURRENT_DATE', label: 'The day of the month as two digits(example \'08\')'},
  { id: 21, value: 'CURRENT_DAY_NAME', label: 'The name of day(example \'Monday\')'},
  { id: 22, value: 'CURRENT_DAY_NAME_SHORT', label: 'The short name of the day(example \'Mon\')'},
  { id: 23, value: 'CURRENT_HOUR', label: 'The current hour in 24 - hour clock format'},
  { id: 24, value: 'CURRENT_MINUTE', label: 'The current minute as two digits'},
  { id: 25, value: 'CURRENT_SECOND', label: 'The current second as two digits'},
  { id: 26, value: 'CURRENT_SECONDS_UNIX', label: 'The number of seconds since the Unix epoch'},
  { id: 27, value: 'CURRENT_TIMEZONE_OFFSET', label: 'The current UTC time zone offset as + HH:MM or - HH: MM(example -07:00).'},
  { id: 28, value: 'RANDOM', label: '6 random Base - 10 digits'},
  { id: 29, value: 'RANDOM_HEX', label: '6 random Base - 16 digits'},
  { id: 30, value: 'UUID', label: 'A Version 4 UUID'},
  { id: 31, value: 'BLOCK_COMMENT_START', label: 'Start a block comment (Example output: in PHP /* or in HTML <!--)'},
  { id: 32, value: 'BLOCK_COMMENT_END', label: 'End a block comment (Example output: in PHP */ or in HTML-- >)'},
  { id: 33, value: 'LINE_COMMENT', label: 'Line comment (Example output: in PHP //)'},
]

const isOpened = ref()

function onSelect(option: CommandPaletteOption) {
  emit('selected', option.value)
  isOpened.value = false
}

// Same shortcut for when input is in or out of focus
defineShortcuts({
  ctrl_k: {
    usingInput: 'input',
    handler: () => isOpened.value = !isOpened.value
  },
})

// Same shortcut for when input is in or out of focus
defineShortcuts({
  ctrl_k: {
    handler: () => isOpened.value = !isOpened.value
  },
})
</script>

<template>
  <UModal v-model="isOpened">
    <UCommandPalette
      model-value="variables"
      nullable
      :groups="[{ key: 'variables', commands: variables }]"
      @update:model-value="onSelect"
    />
  </UModal>
</template>

