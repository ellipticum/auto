'use client'

import React, { useEffect } from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

import useNotificationStore from '@/widgets/notification/model/store'

import Statuses from '@/shared/statuses'

import Icons from '@/shared/UI/icons'

const Notification = () => {
    const { status, message, isNotificationHidden, setIsNotificationHidden } =
        useNotificationStore()

    useEffect(() => {
        if (!isNotificationHidden) {
            setTimeout(() => {
                setIsNotificationHidden(true)
            }, 5000)
        }
    }, [isNotificationHidden])

    return (
        <div
            className={cn(styles.notification, styles[status.toLowerCase()], {
                [styles.hidden]: isNotificationHidden
            })}
            onClick={() => setIsNotificationHidden(true)}
        >
            {status === Statuses.Code.Success ? <Icons.Done /> : <Icons.Cross />}
            <p className={styles.message}>{message}</p>
        </div>
    )
}

export default Notification
