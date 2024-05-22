export default function getRandomDigits(length: number) {
  return Math.floor(10 ** (length - 1) + Math.random() * (10 ** length - 10 ** (length - 1) - 1))
}
