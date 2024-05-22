import { defu } from 'defu'

interface Options {
  allowNumbers: boolean
  allowUppercase: boolean
  uppercaseOnly: boolean
}

const defaultOptions: Options = { allowNumbers: false, allowUppercase: false, uppercaseOnly: false }

export default function getRandomString(length: number, options?: Partial<Options>) {
  const opts = defu(options, defaultOptions)

  const chars = `abcdefghijklmnopqrstuvwxyz${opts.allowUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''}${opts.allowNumbers ? '0123456789' : ''}`

  let str = ''
  for (let i = 0; i < length; i++)
    str += chars.charAt(Math.floor(Math.random() * chars.length))

  if (opts.uppercaseOnly)
    return str.toUpperCase()

  return str
}
