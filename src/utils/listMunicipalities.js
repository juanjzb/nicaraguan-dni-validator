import MUNICIPALITIES from '../data/municipalities.js'
import departmentExists from './departmentExists.js'

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

export default listMunicipalities
