import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import type { Supe } from '~/typings'
import SupeInfo from '~/components/SupeInfo'
import { defaultIds } from '~/config'
import { fetchSupes } from '~/pages/api/supes/by-id'

export interface SupePageProps {
  data: Supe
}

const SupePage: NextPage<SupePageProps> = (props) => {
  const { data } = props

  return <SupeInfo supe={data} />
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: defaultIds.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: 'blocking',
  }
}

// eslint-disable-next-line
export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { id },
  } = context
  return {
    props: {
      data: fetchSupes(id)[0],
    },
    revalidate: 5, // In seconds
  }
}

export default SupePage
