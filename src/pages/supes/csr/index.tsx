import type { NextPage } from 'next'
import useSwr from 'swr'
import SupeCard from '~/components/SupeCard'
import type { Supe } from '~/typings'

const defaultIds = [
  '9f2642fd-7849-4cdf-b845-f008dc2cff3b',
  '883264fb-c048-4913-842f-7068caaf5ca7',
  '121e01b9-5543-42b7-962f-67c92f8a6abc',
  '4ecf476b-0e2f-4361-a98d-644f76744f30',
  'f2e87853-d6ef-47c7-9505-e711817bd955',
  '1a1cc560-5d36-416c-bd01-1b9df5b890b2',
  '71328b7e-9f39-48eb-bb05-eb057ebe2397',
  '88c37b85-80dc-48e4-955f-e40d8f444bd4',
  'e7217366-d54e-480f-9bce-61664e6e45e8',
  '6a4950b1-9c0c-41ac-8024-f3f4c991de3b',
  '97feacbe-062e-4cba-81d6-f010e21aed9d',
  '06e1e3f7-ab57-4683-9102-35756cb4a4c4',
  '6cf5581a-c61e-473e-932b-d6c0751423f8',
  '78cba1cc-710d-4829-816c-a46fa1dfaa4f',
  '589dfa74-e470-466b-860f-6685361f3867',
  'acf17d9f-daae-4518-b18a-a0a7e97d107f',
  'ef28b4e9-23ea-4637-8c64-fb741b108720',
  '7f69190d-9986-4d0a-8565-b1bca55ff330',
  'fca6c15c-369c-48d7-a798-b23593eca134',
  '86536f8a-2cd5-4984-b22f-8c21297061b3',
  '37701102-66cc-429f-aa09-6226bce794fc',
  'fbf1f1da-2ebd-44da-af05-dcee92d51d73',
  'c828f5c6-6eec-455e-a835-8da07c4cdc96',
  '71328b7e-9f39-48eb-bb05-eb057ebe2397',
  '85d99c26-20e2-407b-a68c-77bffd2607be',
  '10bacde6-1493-417e-812c-8c9e1562dee5',
  '3551da75-c73a-4791-85dd-47e39ab57ab3',
  'c3a31101-f791-4083-a09b-ce55212ed2a9',
]

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const detailsUrl = (supe: Supe) => `/supes/csr/${supe.uuid}`

const CSR: NextPage = () => {
  const { data, error } = useSwr<Supe[]>(
    `/api/supes/by-id?id=${defaultIds.join('&id=')}`,
    {
      fetcher,
    },
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <div>
        <h1 className="font-bold text-4xl mt-4 mb-8">Supes CSR</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((s) => (
            <SupeCard key={s.uuid} supe={s} detailsUrl={detailsUrl} />
          ))}
        </div>
      </div>
    </>
  )
}

export default CSR
