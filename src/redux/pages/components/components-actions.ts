import { action } from 'redux/redux-functions'
import { EComponentsActionTypes, IComponentsActions, TComponentsActions } from './components-types'

export const componentsActions: IComponentsActions = {
  buttonChildren: (payload: string): TComponentsActions => action({ type: EComponentsActionTypes.BUTTON_CHILDREN, payload }),
  buttonClassName: (payload: string): TComponentsActions => action({ type: EComponentsActionTypes.BUTTON_CLASS_NAME, payload }),
  buttonTheme: (payload: string): TComponentsActions => action({ type: EComponentsActionTypes.BUTTON_THEME, payload }),
  buttonSize: (payload: string): TComponentsActions => action({ type: EComponentsActionTypes.BUTTON_SIZE, payload }),
  buttonType: (payload: string): TComponentsActions => action({ type: EComponentsActionTypes.BUTTON_TYPE, payload }),
  buttonFocus: (payload: string | boolean): TComponentsActions => action({ type: EComponentsActionTypes.BUTTON_FOCUS, payload }),
  buttonActive: (payload: string | boolean): TComponentsActions => action({ type: EComponentsActionTypes.BUTTON_ACTIVE, payload }),
  buttonDisabled: (payload: string | boolean): TComponentsActions => action({ type: EComponentsActionTypes.BUTTON_DISABLED, payload }),
  buttonBlock: (payload: string | boolean): TComponentsActions => action({ type: EComponentsActionTypes.BUTTON_BLOCK, payload }),
  buttonPending: (payload: string | boolean): TComponentsActions => action({ type: EComponentsActionTypes.BUTTON_PENDING, payload }),
  buttonShowHideCode: (payload: string): TComponentsActions => action({ type: EComponentsActionTypes.BUTTON_SHOW_HIDE_CODE, payload }),
  paginationClassName: (payload: string): TComponentsActions => action({ type: EComponentsActionTypes.PAGINATION_CLASS_NAME, payload }),
  paginationShowHideCode: (payload: string): TComponentsActions => action({ type: EComponentsActionTypes.PAGINATION_SHOW_HIDE_CODE, payload })
}
