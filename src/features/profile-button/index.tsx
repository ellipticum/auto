import React, { useEffect, useState } from 'react'

import styles from './styles.module.scss'

import { useRouter } from 'next/navigation'

import Icons from '@/shared/UI/icons'

import useAuthStore from '@/shared/store/auth'
import cn from 'classnames'
import Dash from '@/widgets/dash/UI'

const ProfileButton = () => {
    const { isAuth } = useAuthStore()

    const router = useRouter()

    const [isWrapperHidden, setIsWrapperHidden] = useState(true)

    const handleClick = () => {
        if (isAuth) {
            setIsWrapperHidden((prevState) => !prevState)
        } else {
            router.push('/auth/login')
        }
    }

    return (
        <div className={styles.meta}>
            <button className={styles.button} onClick={() => handleClick()}>
                <Icons.Profile />
            </button>
            <div className={cn(styles.wrapper, { [styles.hidden]: isWrapperHidden })}>
                <Dash isHidden={isWrapperHidden} setIsHidden={setIsWrapperHidden} />
            </div>
        </div>
    )
}

export default ProfileButton
