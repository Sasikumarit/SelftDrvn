import CIcon from '@coreui/icons-react'

import {
  Assignment as  AssignmentIcon, 
  NotificationsNone as NotificationsNoneIcon,
  TrackChanges as TrackChangesIcon,
  PeopleOutline as PeopleOutlineIcon,
  Timeline as TimelineIcon,
  Apartment as ApartmentIcon,
  Nfc as NfcIcon
} from '@material-ui/icons'
import Gift from '../assets/icons/gift.svg'
import Gamepad from '../assets/icons/gamepad.svg'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/home',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Notifications',
    to: '/home',
    icon: <NotificationsNoneIcon className="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      className:"mfs-auto leftsidenav",
      text: '1',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Newsfeed',
    to: '/home',
    icon: <TimelineIcon className="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      className:"mfs-auto leftsidenav",
      text: '+',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Quests',
    to: '/home',
    icon:<NfcIcon className="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      className:"mfs-auto leftsidenav",
      text: '+',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Goals Setting',
    to: '/home',
    icon: <TrackChangesIcon className="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      className:"mfs-auto leftsidenav",
      text: '+',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reward',
    route: '/home',
    icon:  <img src={Gift} alt="Reward"  className="c-sidebar-nav-icon"/>,
    _children: [
         ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Collaborate',
    route: '/home',
    icon: <PeopleOutlineIcon className="c-sidebar-nav-icon"/>,
    _children: [
         ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Games',
    route: '/home',
    icon:  <img src={Gamepad} alt="Games"  className="c-sidebar-nav-icon"/>,
    _children: [
         ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Organization',
    route: '/home',
    icon: <ApartmentIcon className="c-sidebar-nav-icon"/>,
    _children: [
         ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Report',
    route: '/home',
    icon: <AssignmentIcon className="c-sidebar-nav-icon" />,
    _children: [
         ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 404',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  //  {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // }
]

export default _nav
