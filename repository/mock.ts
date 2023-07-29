import { people } from '../infrastructure/db/mock/data'
import People from '../pages/api/people/domain/model/people'

export const  getPersonById = async (id) => {
    const filtered = people.filter((p) => p.id == id).map(p => new People(p))
    return filtered
    
} 