import classNames from 'classnames'
import { staffActions } from 'redux/staff/staff-actions.ts'
import { staffSelectors } from 'redux/staff/staff-selectors'
import './staff-change-theme-code.scss'
import { useDispatch, useSelector } from 'react-redux'
import { staffThemesCode } from 'styling/staff/staff-styling-themes'
import { staticStyles } from './staff-change-theme-code-styles'

export const StaffChangeThemeCode = ({
  className,
}) => {
  const dispatch = useDispatch()
  const themeCode = useSelector(staffSelectors.currentThemeCode)

  return (
    <div className={classNames('StaffChangeThemeCode', {
      [className]: className
    })}>

      {/* darcula */}
      <div
        className={classNames('StaffChangeThemeCode__item StaffChangeThemeCode__item--darcula', {
          'StaffChangeThemeCode__item--active': themeCode === 'darcula', 
        })}
        onClick={() => dispatch(staffActions.setThemeCode(staffThemesCode.darcula))}
      />

      {/* vscode */}
      <div
        className={classNames('StaffChangeThemeCode__item StaffChangeThemeCode__item--vscode', {
          'StaffChangeThemeCode__item--active': themeCode === 'vscode', 
        })}
        onClick={() => dispatch(staffActions.setThemeCode(staffThemesCode.vscode))}
      />

      {/* monokai */}
      <div
        className={classNames('StaffChangeThemeCode__item StaffChangeThemeCode__item--monokai', {
          'StaffChangeThemeCode__item--active': themeCode === 'monokai', 
        })}
        onClick={() => dispatch(staffActions.setThemeCode(staffThemesCode.monokai))}
      />

      <style jsx>{ staticStyles }</style>
    </div>
  )
}
