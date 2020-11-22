import { Fragment } from 'react'

// import Grid from '~/components/spinners/Grid'
import Yin from '~/components/spinners/Yin'

const Index = () => (
  <Fragment>
    <div className="text-center pt-24">
      <Yin className="w-80 h-80 md:w-96 md:h-96" />
      <h1 className="mt-10 text-5xl font-bold">Supes</h1>
      {/* <Grid color="var(--color-text)" className="w-80 h-80 md:w-96 md:h-96" /> */}
    </div>
  </Fragment>
)

export default Index
