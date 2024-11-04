import MUNICIPALITIES from './src/data/municipalities.js'
import departmentExists from './src/utils/departmentExists.js'
import validateDNI from './src/utils/validateDni.js'

const validate = (cedula, verbose) => {
  return validateDNI(cedula, verbose)
}

const listDepartments = () => {
  const departments = new Set()

  MUNICIPALITIES.forEach(({ department }) => {
    departments.add(department)
  })

  return Array.from(departments)
}

const listMunicipalities = (department = '') => {
  const normalizeDepartment = department.trim()
  const exists = departmentExists(department)

  if (exists) {
    return MUNICIPALITIES.filter(
      ({ department }) => department === normalizeDepartment
    )
  }
  return MUNICIPALITIES
}

export { listDepartments, listMunicipalities, validate }
