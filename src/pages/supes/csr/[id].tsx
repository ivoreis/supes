import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import type { Supe } from '~/typings'
import SupeInfo from '~/components/SupeInfo'

export interface SupePageProps {
  id: string
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const SupePage: NextPage<SupePageProps> = () => {
  const { query } = useRouter()
  const { data, error } = useSwr<Supe[]>(`/api/supes/by-id?id=${query.id}`, {
    fetcher,
  })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <SupeInfo supe={data[0]} />
}

export default SupePage
