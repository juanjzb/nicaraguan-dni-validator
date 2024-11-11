const LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXY'

const calculateLetter = numberID => {
  const onlyNumbers = BigInt(numberID)
  const mod = (onlyNumbers / 23n) * 23n
  const value = Number(onlyNumbers - mod)
  return LETTERS.charAt(value)
}

export { LETTERS, calculateLetter }

