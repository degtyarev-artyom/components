import classNames from 'classnames'
import React from 'react'
import './staff-value-prop-block.scss'
import { StaffValueProp } from 'components/staff/staff-value-prop/staff-value-prop'
import { useDispatch, useSelector } from 'react-redux'
import { staffThemesMain } from 'styling/staff/staff-styling-themes'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { getTheme } from 'styling/staff/staff-styling-functions'

export const StaffValuePropBlock = ({
  externalClass,
  title,
  type,
  properties,
  propActive,
  action,
  ...rest
}) => {
  const currentTheme = useSelector(staffSelectors.currentThemeMain)
  const theme = getTheme(currentTheme, staffThemesMain.purple)
  const dispatch = useDispatch()

  return (
    <div
      className={classNames('StaffValuePropBlock', {
        [externalClass]: externalClass
      })}
      {...rest}
    >
      <div className="StaffValuePropBlock__list">
        <div className="StaffValuePropBlock__title">
          <span>{ title }</span>
          {type !== 'Code' ? ` (${type})` : ''}:
        </div>
        {properties.map((prop, i) => (
          <StaffValueProp
            key={i}
            externalClass="StaffValuePropBlock__item"
            theme={theme}
            propName={prop}
            propActive={propActive}
            type={type}
            onClick={() => propActive !== prop && dispatch(action(prop))}
          />
        ))}
      </div>
    </div>
  )
}

export const StaffValuePropBlockTypes = {
  string: 'String',
  boolean: 'Boolean',
  code: 'Code',
}
