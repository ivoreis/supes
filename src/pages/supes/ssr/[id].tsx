import type { NextPage, GetServerSidePropsContext } from 'next'
import SupeInfo from '~/components/SupeInfo'
import { fetchSupes } from '~/pages/api/supes/by-id'
import { Supe } from '~/typings'

export interface SupePageProps {
  data: Supe[]
}

const SupePage: NextPage<SupePageProps> = (props) => {
  const { data } = props
  return <SupeInfo supe={data[0]} />
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext, // eslint-disable-line
) => {
  return {
    props: {
      data: fetchSupes(context.query.id),
    },
  }
}

export default SupePage
