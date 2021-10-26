import classNames from 'classnames'
import { StaffContent } from 'components/staff/staff-content/staff-content'
import { StaffNavbar } from 'components/staff/staff-navbar/staff-navbar'
import { StaffTitle } from 'components/staff/staff-title/staff-title'
import { useSelector } from 'react-redux'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import './sandbox.scss'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { getTheme } from 'functions/staff-styling-func'

export const Sandbox = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = getTheme(currentTheme, staffThemes.orange)

  return (
    <div className={classNames('Sandbox', {
      [externalClass]: externalClass
    })}>
      <StaffTitle
        externalClass="Sandbox__title"
        theme={theme}
      >
        Sandbox
      </StaffTitle>
      <StaffNavbar externalClass="Sandbox__navbar" />
      <StaffContent
        externalClass="Sandbox__content"
        theme={theme}
      >

        Sandbox Text

        {/* TypeScript */}
        {/* <Ts /> */}
        
        {/* Tabs */}
        {/* <a href="/sandbox">/sandbox</a>
        <Tabs externalClass="Sandbox__tabs">
          <Tab tabSlug="1" tabName="Таб 1">
            <Pagination
              externalClass="Sandbox__pagination"
              paginationId="tab1"
              total={1375}
              count={[5, 10, 25, 50, 100]}
              handlePage={handlePage}
            />
          </Tab>
          <Tab tabSlug="2" tabName="Таб 2">
            <Pagination
              externalClass="Sandbox__pagination"
              paginationId="tab2"
              total={1375}
              count={[5, 10, 25, 50, 100]}
              handlePage={handlePage}
            />
          </Tab>
          <Tab tabSlug="3" tabName="Таб 3">
            <Pagination
              externalClass="Sandbox__pagination"
              paginationId="tab3"
              total={1375}
              count={[5, 10, 25, 50, 100]}
              handlePage={handlePage}
            />
          </Tab>
        </Tabs> */}

        {/* Hooks */}
        {/* <Button
          externalClass="Sandbox__hooks-show-hide-button"
          onClick={() => setShow(prev => !prev)}
          theme={show ? ButtonProps.theme.greyRed : ButtonProps.theme.greyOlive}
          size={ButtonProps.size.m}
          active
        >
          { show ? 'Hide' : 'Show' }
        </Button>
        {show && <Hooks externalClass="Sandbox__hooks" />} */}

        {/* RxJS */}
        {/* <RxJS externalClass="Sandbox__rx-js" /> */}

        {/* Counter */}
        {/* <Counter externalClass="Sandbox__counter" /> */}
      </StaffContent>
    </div>
  )
}
