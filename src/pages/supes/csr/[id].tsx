import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import type { Supe } from '~/typings'
import useLoading from '~/hooks/useLoading'
import SupeInfo from '~/components/SupeInfo'
import YinYang from '~/components/spinners/YinYang'

export interface SupePageProps {
  id: string
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const SupePage: NextPage<SupePageProps> = () => {
  const { query } = useRouter()
  const { data, error } = useSwr<Supe[]>(`/api/supes/by-id?id=${query.id}`, {
    fetcher,
  })
  const loading = useLoading(!data && !error, 500)

  if (error) return <div>failed to load</div>
  if (loading)
    return (
      <div className="text-center pt-24">
        <YinYang className="w-80 h-80 md:w-96 md:h-96" />
        <h2 className="mt-10 text-3xl font-bold text-default">Loading...</h2>
      </div>
    )

  return <SupeInfo supe={data[0]} />
}

export default SupePage
