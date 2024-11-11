import MUNICIPALITIES from '../data/municipalities.js'

/**
 * The function `listDepartments` creates a list of unique department names from the `MUNICIPALITIES`
 * array.
 * @returns An array of unique department names from the MUNICIPALITIES data.
 */
const listDepartments = () => {
  const departments = new Set()

  MUNICIPALITIES.forEach(({ department }) => {
    departments.add(department)
  })

  return Array.from(departments)
}
export default listDepartments
