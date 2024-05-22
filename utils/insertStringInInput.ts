export default function insertStringInInput(input: HTMLTextAreaElement, str: string, newSelectionPostions: number[] = []) {
  const initialSelectionStart = input.selectionStart
  const initialSelectionEnd = input.selectionEnd
  const insertionLength = str.length

  const stringBeforeCaret = input.value.substring(
    0,
    initialSelectionStart,
  )
  const stringAfterCaret = input.value.substring(
    initialSelectionEnd,
    input.textLength,
  )

  const newValue = `${stringBeforeCaret}${str}${stringAfterCaret}`

  input.value = newValue

  if (newSelectionPostions.length === 0) {
    input.selectionStart = initialSelectionStart + insertionLength
    input.selectionEnd = initialSelectionStart + insertionLength
  }
  else {
    input.selectionStart = initialSelectionStart + newSelectionPostions[0]
    input.selectionEnd = initialSelectionStart + newSelectionPostions[1]
  }
}
