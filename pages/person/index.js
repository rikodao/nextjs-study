
import Link from 'next/link'
import useSWR from 'swr'
import Person from '../../components/Person'
let  people = []
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index({ people }) {


  //   if (error) return <div>Failed to load</div>
  //   if (!data) return <div>Loading...</div>

  return (<>
    <ul>
      {people.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>
    <Link href="/" as={`/`}>
      SWRに戻る
    </Link>
  </>
  )
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const getsp = async (i) => {
  // let people = await fetcher('http://localhost:3000/api/people')

  people.push(
    {
      "id": String(getRandomInt(1000)),
      "name": String(getRandomInt(1000)),
      "height": "165",
      "mass": "75",
      "hair_color": "brown",
      "skin_color": "light",
      "eye_color": "blue",
      "gender": "female"
    })
  // console.log(people.slice(6));
  // people = people.slice(i) 
  // const  people = [{}]
  return { props: { people } }
}

// export const getStaticProps = async () => {
//     return await getsp(8)
//   }

export const getStaticProps = async () => {
  return { ...await getsp(6), revalidate: 2, }
}


