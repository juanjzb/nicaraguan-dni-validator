import MUNICIPALITIES from '../data/municipalities.js'

const departmentExists = department => {
  const exists = MUNICIPALITIES.some(
    municipality => municipality.department === department
  )

  return exists
}

export default departmentExists
