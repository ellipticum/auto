'use client'

import React, { useEffect } from 'react'

import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

import useModeStore, { Mode } from '@/shared/model/mode'

import Notification from '@/widgets/notification/UI'

import Header from '@/shared/UI/header'
import useAuthStore from '@/shared/store/auth'
import getUser from '@/shared/utils/get-user'
import OrderDetails from '@/widgets/order-details/UI'

const Wrapper = ({ children }: LayoutProps) => {
    const { mode, setMode } = useModeStore()
    const { isAuth, setIsAuth, profile, setProfile } = useAuthStore()

    useEffect(() => {
        const savedMode = localStorage.getItem('mode')

        setMode(savedMode ? (savedMode as Mode) : Mode.Light)

        const token = localStorage.getItem('token')

        setIsAuth(Boolean(token))

        if (token) {
            const fetch = async () => {
                const profile = await getUser()

                console.log(profile)

                setProfile(profile)
            }

            fetch()
        }
    }, [])

    return (
        <div id='wrapper' className={styles.wrapper} data-mode={mode}>
            {children}
            <Notification />
            <OrderDetails />
        </div>
    )
}

export default Wrapper
