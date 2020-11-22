import { useEffect, useRef, FC, CSSProperties } from 'react'
import clsx from 'clsx'
import echarts, { EChartOption } from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

interface EChartProps {
  option: EChartOption
  className?: string
  style?: CSSProperties
  theme?: string
}

const EChart: FC<EChartProps> = ({
  option,
  style,
  className,
  theme = 'default',
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const echartsInstance = echarts.init(ref.current!, theme)
    echartsInstance.setOption(option, true)
  }, [option])

  return (
    <div
      style={style}
      className={clsx('w-full max-w-full h-full max-h-full', className)}
      ref={ref}
    />
  )
}

export default EChart
