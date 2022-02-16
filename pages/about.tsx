import Link from 'next/link'

import GNImage from '../components/GNImage'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is not Gatsby!</p>
      <GNImage />
      <Link href="/">Home</Link>
    </div>
  )
}

export default About
