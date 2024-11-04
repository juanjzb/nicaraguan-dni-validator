import MUNICIPALITIES from './../data/municipalities.js'
import calculateLetter from './calculateLetter.js'
import isValidBirthDate from './isValidBirthDate.js'
function validateDNI (id, verbose = false) {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXY'

  if (!id) {
    const result = { valid: false, message: 'Se debe proporcionar una cédula.' }
    return verbose ? result : false
  }

  const idWithoutDashes = id.replace(/-/g, '')

  if (id.length === 16 && idWithoutDashes.length !== 14) {
    const result = {
      valid: false,
      message:
        'La cédula debe tener un máximo de 16 caracteres en caso que incluya guiones.'
    }
    return verbose ? result : false
  } else if (idWithoutDashes.length !== 14) {
    const result = {
      valid: false,
      message: 'La cédula debe tener 14 dígitos (sin incluir guiones).'
    }
    return verbose ? result : false
  }

  const municipalityCode = idWithoutDashes.substring(0, 3)

  if (
    !MUNICIPALITIES.some(municipality => municipality.code === municipalityCode)
  ) {
    const result = {
      valid: false,
      message: `El código de Municipio "${municipalityCode}" no es válido.`
    }
    return verbose ? result : false
  }

  const birthDate = idWithoutDashes.substring(3, 9)

  if (!isValidBirthDate(birthDate)) {
    const result = {
      valid: false,
      message: 'La fecha de nacimiento no es válida.'
    }
    return verbose ? result : false
  }

  const numberID = idWithoutDashes.substring(0, 13)
  const calculatedLetter = calculateLetter(numberID)
  const providedLetter = idWithoutDashes.charAt(13)

  if (calculatedLetter !== providedLetter) {
    const result = {
      valid: false,
      message: `La letra proporcionada "${providedLetter}" es incorrecta."`
    }
    return verbose ? result : false
  }

  const result = { valid: true, message: 'La cédula es válida.' }
  return verbose ? result : true
}

export default validateDNI
