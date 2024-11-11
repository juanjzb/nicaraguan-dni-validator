import MUNICIPALITIES from '../data/municipalities.js'

const listDepartments = () => {
  const departments = new Set()

  MUNICIPALITIES.forEach(({ department }) => {
    departments.add(department)
  })

  return Array.from(departments)
}
export default listDepartments
