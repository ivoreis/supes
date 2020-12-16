import type { NextPage, GetStaticProps } from 'next'
import SupeCard from '~/components/SupeCard'
import type { Supe } from '~/typings'
import { fetchSupes } from '~/pages/api/supes/by-id'
import { defaultIds } from '~/config'

export interface ISRProps {
  data: Supe[]
}

const detailsUrl = (supe: Supe) => `/supes/isr/${supe.uuid}`

const ISR: NextPage<ISRProps> = (props) => {
  const { data } = props
  return (
    <div>
      <h1 className="font-bold text-4xl mt-4 mb-8">Supes ISR</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((s) => (
          <SupeCard key={s.uuid} supe={s} detailsUrl={detailsUrl} />
        ))}
      </div>
    </div>
  )
}

// eslint-disable-next-line
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: fetchSupes(defaultIds),
    },
  }
}

export default ISR
