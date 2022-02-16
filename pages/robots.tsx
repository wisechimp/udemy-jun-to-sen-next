import { NextPage } from 'next'
import Link from 'next/link'

import { Robot } from '../types/robot'

interface Props {
  robots: Robot[]
}

const Robots: NextPage<Props> = ({ robots }) => {
  return (
    <div>
      <h1>We are Robots</h1>
      <p>000000000000001</p>
      <div>
        {(robots as Robot[]).map((robot: Robot) => (
          <li key={robot.id}>{robot.name}</li>
        ))}
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log(data)
  return { robots: data }
}

export default Robots
