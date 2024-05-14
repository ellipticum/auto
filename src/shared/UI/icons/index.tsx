import { Component } from 'react'

import IconProps from '@/shared/interfaces/icon-props'

import Logo from '@/shared/UI/icons/logo'
import Calendar from '@/shared/UI/icons/calendar'
import About from '@/shared/UI/icons/about'
import Cross from '@/shared/UI/icons/cross'
import Students from '@/shared/UI/icons/students'
import Document from '@/shared/UI/icons/document'
import Messenger from '@/shared/UI/icons/messenger'
import Profile from '@/shared/UI/icons/profile'
import Tasks from '@/shared/UI/icons/tasks'
import Support from '@/shared/UI/icons/support'
import FAQ from '@/shared/UI/icons/FAQ'
import Logout from '@/shared/UI/icons/logout'
import Home from '@/shared/UI/icons/home'
import Previous from '@/shared/UI/icons/previous'
import Next from '@/shared/UI/icons/next'
import Plus from '@/shared/UI/icons/plus'
import Verified from '@/shared/UI/icons/verified'
import DarkMode from '@/shared/UI/icons/dark-mode'
import LightMode from '@/shared/UI/icons/light-mode'
import Chevron from '@/shared/UI/icons/chevron'

const Icons: Record<string, React.ComponentType<IconProps>> = {
    Chevron,
    Logo,
    About,
    Calendar,
    Cross,
    Document,
    Students,
    Messenger,
    Profile,
    Tasks,
    Support,
    FAQ,
    Logout,
    Home,
    Previous,
    Next,
    Plus,
    Verified,
    DarkMode,
    LightMode
}

export default Icons
