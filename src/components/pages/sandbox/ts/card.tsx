import classNames from 'classnames'
import React, { FC, useState } from 'react'

export enum CardVariant {
  one = 'one',
  two = 'two',
  three = 'three'
}

interface CardProps {
  className?: string
  width?: number
  height?: number
  variant?: CardVariant
  squared: (num: number) => void
}

export const Card: FC<CardProps> = ({
  className = '',
  width,
  height,
  variant,
  children,
  squared,
  ...rest
}) => {

  const [a, setA] = useState(0)

  return (
    <div
      className={classNames('Card', {
        [className]: className
      })}
      onClick={() => {
        squared(a)
        setA(prev => prev + 1)
      }}
      {...rest}
    >
      {(width && height) ? `${width} x ${height}` : `???`}
      { children } ( { variant } )
    </div>
  )
}
