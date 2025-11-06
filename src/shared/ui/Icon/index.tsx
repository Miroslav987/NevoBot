import React, { SVGProps, useEffect, useState } from 'react'

export type IconProps = SVGProps<SVGSVGElement> & {
  name: string
  width?: number | string
  height?: number | string
  fill?: string
  size?:number | string
}

const Icon = ({ name, size, width = 24, height = 24, ...rest }: IconProps) => {
  const [SvgComponent, setSvgComponent] = useState<React.FC<SVGProps<SVGSVGElement>> | null>(null)
  const [loadError, setLoadError] = useState<string | unknown>('')

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const module = await import(`@shared/icons/${name}.svg?react`)
        const Svg = module.ReactComponent || module.default
        setSvgComponent(() => Svg)
      } catch (error: unknown) {
        setLoadError(error)
      }
    }

    loadIcon()
  }, [name])

  if (loadError) {
    return <span>🚫</span>
  }
  if (!SvgComponent) {
    return <span>⌛</span>
  }



  return <SvgComponent  width={size? size :width} height={size? size :height} {...rest} />
}

export default Icon
