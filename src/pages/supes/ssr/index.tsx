import type { NextPage, GetServerSideProps } from 'next'
import SupeCard from '~/components/SupeCard'
import type { Supe } from '~/typings'
import { fetchSupes } from '~/pages/api/supes/by-id'
import { defaultIds } from '~/config'

export interface SSRProps {
  data: Supe[]
}

const detailsUrl = (supe: Supe) => `/supes/ssr/${supe.uuid}`

const SSR: NextPage<SSRProps> = (props) => {
  const { data } = props
  return (
    <>
      <div>
        <h1 className="font-bold text-4xl mt-4 mb-8">Supes SSR</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((s) => (
            <SupeCard key={s.uuid} supe={s} detailsUrl={detailsUrl} />
          ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context, // eslint-disable-line
) => {
  return {
    props: {
      data: fetchSupes(defaultIds),
    },
  }
}

export default SSR
