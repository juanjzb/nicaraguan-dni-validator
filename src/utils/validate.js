import MUNICIPALITIES from '../data/municipalities.js'
import { calculateLetter } from './calculateLetter.js'
import isValidBirthDate from './isValidBirthDate.js'
/**
 * The function `validate` checks the validity of a given identification number in JavaScript,
 * providing detailed error messages if needed.
 * @param id - The `id` parameter in the `validate` function represents the identification number
 * (cédula) that you want to validate. It should be a string containing either 14 digits (without
 * dashes) or 16 characters (with dashes included). The function checks the validity of this
 * identification number based on
 * @param [verbose=false] - The `verbose` parameter in the `validate` function is a boolean parameter
 * that determines whether the function should return detailed information about the validation result
 * or just a simple boolean value indicating whether the ID is valid or not. If `verbose` is set to
 * `true`, the function will return an object containing
 * @returns The `validate` function returns either a detailed result object containing validation
 * information (if `verbose` is set to `true`) or a boolean value indicating whether the ID is valid or
 * not (if `verbose` is set to `false`).
 */

const validate = (id, verbose = false) => {
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

export default validate
