import { FC } from 'react'
import Image from 'next/image'
import type { Supe } from '~/typings'

export interface SupeInfoProps {
  supe: Supe
}

const imageUrl = (str: string) => `/images/supes/${str}`

const SupeCard: FC<SupeInfoProps> = (props) => {
  const { supe } = props
  const { name, image } = supe

  return (
    <div className="w-2/3 pt-5 mx-auto prose">
      <h1>{name}</h1>
      <br />
      <Image width={300} height={350} src={imageUrl(image)} />
    </div>
  )
}

export default SupeCard
