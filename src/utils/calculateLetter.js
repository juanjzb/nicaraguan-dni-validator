function calculateLetter (numberID) {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXY'
  const idLong = BigInt(numberID)
  const idDouble = (idLong / 23n) * 23n
  const value = Number(idLong - idDouble)
  return letters.charAt(value)
}

export default calculateLetter
