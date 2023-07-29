import { people } from '../../../infrastructure/db/mock/data'

export default function handler(req, res) {
  console.log(req);
  res.status(200).json(people)
}