import { getPersonById  } from '../../../../repository/mock'

export default  async (id)=> {
    const filtered = await  getPersonById(id)
    return filtered
}