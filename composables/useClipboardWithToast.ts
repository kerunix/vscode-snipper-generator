import { type UseClipboardOptions, useClipboard } from '@vueuse/core'

export default function useClipboardWithToast(options: UseClipboardOptions<MaybeRefOrGetter<string>>) {
  const { copied, copy, isSupported, text } = useClipboard(options)
  const { toast } = useToast()

  watch(() => copied.value, () => {
    if (copied.value) {
      toast({
        title: 'Copied to clipboard !',
      })
    }
  })

  return {
    copied,
    copy,
    isSupported,
    text,
  }
}
