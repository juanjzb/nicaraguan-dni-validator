const isValidBirthDate = birthDate => {
  if (!/^\d{6}$/.test(birthDate)) {
    return false
  }

  const day = parseInt(birthDate.substring(0, 2), 10)
  const month = parseInt(birthDate.substring(2, 4), 10)
  const year = parseInt(birthDate.substring(4, 6), 10)

  if (month < 1 || month > 12) {
    return false
  }

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  if (day < 1 || day > daysInMonth[month - 1]) {
    return false
  }

  return true
}

export default isValidBirthDate
