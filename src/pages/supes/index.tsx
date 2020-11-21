import { FC } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import useSwr from 'swr'
import Header from '~/components/Header'
import type { Supe } from '~/typings'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const imageUrl = (str: string) => `/images/supes/${str}`

const SupeCard: FC<Supe> = (props) => {
  const {
    image,
    name,
    biography: { alignment },
  } = props
  return (
    <div className="col-span-1 flex flex-col text-center bg-default rounded-lg shadow divide-y divide-gray-200">
      <div className="flex-1 flex flex-col p-8">
        <div className="w-56 h-56 flex-shrink-0 mx-auto bg-black rounded-full overflow-hidden">
          <Image
            width={300}
            height={350}
            src={imageUrl(image)}
            className="w-20"
          />
        </div>

        <h3 className="mt-6 text-gray-900 text-sm font-medium">{name}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-gray-500 text-sm" />
          <dt className="sr-only">{alignment}</dt>
          <dd className="mt-3">
            <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
              {alignment.toUpperCase()}
            </span>
          </dd>
        </dl>
      </div>
    </div>
  )
}

const Supes: NextPage = () => {
  const { data, error } = useSwr<Supe[]>('/api/supes/random?limit=15', {
    fetcher,
  })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <Header showNav />
      <div className="prose pt-5">
        <h1>Supes</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((s) => (
            <SupeCard key={s.uuid} {...s} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Supes
