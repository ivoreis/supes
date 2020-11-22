import { FC } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import type { Supe } from '~/typings'

const imageUrl = (str: string) => `/images/supes/${str}`

export interface SupeCardProps {
  supe: Supe
  detailsUrl?: (supe: Supe) => string
}

const SupeCard: FC<SupeCardProps> = (props) => {
  const { supe, detailsUrl } = props
  const {
    image,
    name,
    biography: { alignment },
  } = supe
  const alig = alignment.toUpperCase()

  return (
    <div className="col-span-1 flex flex-col text-center bg-default rounded-lg shadow divide-y divide-gray-200">
      <a
        className="flex-1 flex flex-col p-8 no-underline"
        href={detailsUrl(supe)}
      >
        <div className="w-56 h-56 flex-shrink-0 mx-auto rounded-full overflow-hidden">
          <Image width={300} height={350} src={imageUrl(image)} />
        </div>

        <h3 className="mt-6 text-default font-bold text-xl">{name}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Alignment</dt>
          <dd className="text-gray-500 text-sm" />
          <dt className="sr-only">{alignment}</dt>
          <dd className="mt-3">
            <span
              className={clsx(
                'px-2 py-1 text-white text-xs font-medium rounded-full',
                alig === 'GOOD' ? 'bg-primary' : 'bg-secondary',
              )}
            >
              {alig}
            </span>
          </dd>
        </dl>
      </a>
    </div>
  )
}

export default SupeCard
