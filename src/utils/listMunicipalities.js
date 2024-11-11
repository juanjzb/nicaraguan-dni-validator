import MUNICIPALITIES from '../data/municipalities.js'
import departmentExists from './departmentExists.js'

/**
 * The function `listMunicipalities` filters a list of municipalities based on a specified department
 * or returns all municipalities if no department is provided.
 * @param [department] - The `department` parameter in the `listMunicipalities` function is used to
 * filter the list of municipalities based on a specific department. If a department is provided, the
 * function will return only the municipalities that belong to that department. If no department is
 * provided or the provided department does not exist
 * @returns If the `department` parameter passed to the `listMunicipalities` function exists in the
 * `MUNICIPALITIES` array, then an array of municipalities belonging to that department will be
 * returned. Otherwise, the entire `MUNICIPALITIES` array will be returned.
 */
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
