import Image from 'next/image'

import GatsbyNextImage from '../public/gatsbynext.jpeg'

const GNImage = () => (
  <Image
    src={GatsbyNextImage}
    height={500}
    width={800}
    alt="The Gatsby and Next logos in perfect harmony."
  />
)

export default GNImage
