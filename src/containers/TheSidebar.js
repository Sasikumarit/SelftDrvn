import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import logo from '../assets/selfdrvn-logo.png'
import TheSidebarBottom from './TheSidebarBottom'
// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/home">
       <CIcon src={logo} alt="logo"/>
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>

      <CSidebarBrand className="d-md-down-none">
      <div className="sidebarBottom">
      <TheSidebarBottom/>
      </div>
      </CSidebarBrand>
     
      <CSidebarMinimizer className="c-d-md-down-none"/>
 
     
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
