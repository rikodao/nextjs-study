import Link from 'next/link'

export default function Person({ person }) {
  return (
    <li>
      <Link href="/person/[id]" as={`/person/${person.id}`}>
      {person.name}
      </Link>
    </li>
  )
}