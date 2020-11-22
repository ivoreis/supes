import { FC } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import type { Supe } from '~/typings'

import Echart from '~/components/Echart'

export interface SupeInfoProps {
  supe: Supe
}

const imageUrl = (str: string) => `/images/supes/${str}`

const option = (values: number[]) => ({
  title: {
    text: 'Powerstats',
  },
  tooltip: {},
  legend: {
    data: ['Powerstats'],
  },
  radar: {
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5],
      },
    },
    indicator: [
      { name: 'Intelligence', max: 100 },
      { name: 'Power', max: 100 },
      { name: 'Strength', max: 100 },
      { name: 'Speed', max: 100 },
      { name: 'Durability', max: 100 },
      { name: 'Combat', max: 100 },
    ],
  },
  series: [
    {
      name: 'Powerstats',
      type: 'radar',
      data: [
        {
          value: values,
          name: 'Powerstats',
        },
      ],
    },
  ],
})

const SupeCard: FC<SupeInfoProps> = (props) => {
  const { supe } = props
  const {
    name,
    image,
    powerstats: { intelligence, power, strength, speed, durability, combat },
    biography: { alignment, fullName },
    connections: { groupAffiliation, relatives },
  } = supe

  const alig = alignment.toUpperCase()
  return (
    <div className="w-2/3 pt-5 mx-auto flex relative text-default">
      <div className="flex-shrink-0">
        <Image height={399} width={300} src={imageUrl(image)} />
      </div>
      <div className="flex-1 pl-10">
        <span
          className={clsx(
            'px-2 py-1 text-white text-xs font-medium rounded-full absolute right-0',
            alig === 'GOOD' ? 'bg-primary' : 'bg-secondary',
          )}
        >
          {alig}
        </span>
        <div className="flex flex-col">
          <h1 className="flex-1 text-2xl font-extrabold text-default sm:text-3xl">
            {name}
          </h1>
          <p className="mb-8">{fullName}</p>
          <div className="w-full h-full">
            <Echart
              option={option([
                intelligence,
                power,
                strength,
                speed,
                durability,
                combat,
              ])}
              style={{ width: '600px', height: '400px' }}
            />
          </div>
          <dl>
            <dt className="font-bold">Relatives</dt>
            <dd>{relatives}</dd>
            <dt className="font-bold pt-4">Affiliation</dt>
            <dd>{groupAffiliation}</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default SupeCard
