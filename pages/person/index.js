
import Link from 'next/link'
import useSWR from 'swr'
import Person from '../../components/Person'

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
const getsp = async (i) => {
  let people = await fetcher('http://localhost:3000/api/people')
  // console.log(people.slice(6));
  people = people.slice(i)
  return { props: { people } }
}

// export const getStaticProps = async () => {
//     return await getsp(8)
//   }

export const getServerSideProps = async () => {
  return await getsp(4)
}


