import { FC } from 'react'
import Image from 'next/image'
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

  return (
    <div className="w-2/3 pt-5 mx-auto flex relative text-default">
      <div className="flex-shrink-0">
        <Image height={399} width={300} src={imageUrl(image)} />
      </div>
      <div className="flex-1 pl-10">
        <span className="px-2 py-1 text-green-800 text-xs font-bold bg-green-100 rounded-full absolute right-0">
          {alignment.toUpperCase()}
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
          {/* <dl className="flex text-sm self-center">
            <dt className="font-bold pr-1">Intelligence</dt>
            <dd>{intelligence}</dd>
            <dt className="pl-4 font-bold pr-1">Power</dt>
            <dd className="">{power}</dd>
            <dt className="pl-4 font-bold pr-1">Strength</dt>
            <dd>{strength}</dd>
            <dt className="pl-4 font-bold pr-1">Speed</dt>
            <dd>{speed}</dd>
            <dt className="pl-4 font-bold pr-1">Durability</dt>
            <dd>{durability}</dd>
            <dt className="pl-4 font-bold pr-1">Combat</dt>
            <dd>{combat}</dd>
          </dl>
          <br /> */}
          <dl>
            <dt className="font-bold">Relatives</dt>
            <dd>{groupAffiliation}</dd>
            <dt className="font-bold pt-4">Affiliation</dt>
            <dd>{relatives}</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default SupeCard
