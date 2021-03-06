import classNames from 'classnames'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import './staff-button.scss'
import { staticStyles } from './staff-button-styles'

export const StaffButton = ({
  className,
  theme,
  size,
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames('StaffButton', {
        [className]: className,
        [`StaffButton--theme-${theme}`]: theme,
        [`StaffButton--size-${size}`]: size
      })}
      {...rest}
    >
      { children }
      <style jsx>{ staticStyles }</style>
    </button>
  )
}

export const StaffButtonProps = {
  theme: staffThemes
}
