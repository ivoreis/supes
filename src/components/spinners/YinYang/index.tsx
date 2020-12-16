import clsx from 'clsx'
import { CSSProperties, FC } from 'react'

export interface YinYangProps {
  className?: string
  style?: CSSProperties
}

const YinYang: FC<YinYangProps> = (props) => {
  const { className, style } = props
  return (
    <div
      className={clsx('inline-block relative', className)}
      style={{ ...style }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <circle style={{ fill: '#F8F6F8' }} cx="256" cy="256" r="256" />
        <path
          style={{ fill: '#d81b1b' }}
          d="M255.437,512c-70.693,0-128-57.307-128-128s57.307-128,128-128s128-57.307,128-128  s-57.307-128-128-128H256c141.385,0,256,114.615,256,256S397.385,512,256,512H255.437z"
        />
        <circle style={{ fill: '#F8F6F8' }} cx="256" cy="384" r="28.473" />
        <circle style={{ fill: '#d81b1b' }} cx="256" cy="139.4" r="28.473" />
      </svg>
    </div>
  )
}

export default YinYang
