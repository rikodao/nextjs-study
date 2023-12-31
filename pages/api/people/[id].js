import { people } from '../../../infrastructure/db/mock/data'
import  getPersonByIdIntaractor from './intaractor/getPersonByIdIntaractor'




const personHandler =  async ({ query: { id } }, res) => {
  console.log({getPersonByIdIntaractor});
  const filtered = await getPersonByIdIntaractor(id)
  
  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}

export default personHandler