import Link from 'next/link'
import useSWR from 'swr'
import Person from '../components/Person'
import { useRouter } from 'next/router'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const router = useRouter()
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (<>
    <ul>
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>
    <Link href="/person" as={`/`}>
    Link で getServerSidePropsに戻る
    </Link>
    <button onClick={() => router.push('/person')}>
    useRouter で ServerSidePropsに戻る
    </button>

  </>
  )
}