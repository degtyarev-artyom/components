import css from 'styled-jsx/css'
import { staffColors } from 'styling/staff/staff-styling-themes'

export const staticStyles = css`
  @import 'src/styling/scss/styling-mixins.scss';

  .NotFound {
    &__content-404 {
      &--theme-green {
        color: ${staffColors.green};
      }

      &--theme-purple {
        color: ${staffColors.purple};
      }

      &--theme-blue {
        color: ${staffColors.blue};
      }
      
      &--theme-red {
        color: ${staffColors.red};
      }
      
      &--theme-orange {
        color: ${staffColors.orange};
      }
      
      &--theme-grey {
        color: ${staffColors.grey};
      }
    }
  }
`
