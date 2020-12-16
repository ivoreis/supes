import { Fragment } from 'react'

import YinYang from '~/components/spinners/YinYang'

const Index = () => (
  <Fragment>
    <div className="text-center pt-24">
      <YinYang className="w-80 h-80 md:w-96 md:h-96" />
      <h1 className="mt-10 text-5xl font-bold text-default">Supes</h1>
      {/* <Grid color="var(--color-text)" className="w-80 h-80 md:w-96 md:h-96" /> */}
    </div>
  </Fragment>
)

export default Index
