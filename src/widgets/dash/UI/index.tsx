import React, { useEffect, useRef } from 'react'

import styles from './styles.module.scss'
import useAuthStore from '@/shared/store/auth'
import { useRouter } from 'next/navigation'

interface Props {
    isHidden: boolean
    setIsHidden: React.Dispatch<React.SetStateAction<boolean>>
}

const Dash = ({ isHidden, setIsHidden }: Props) => {
    const { setIsAuth, setProfile } = useAuthStore()

    const elementRef = useRef<HTMLDivElement | null>(null)

    const router = useRouter()

    const logOut = () => {
        localStorage.removeItem('token')

        setIsAuth(false)
        setProfile(null)

        router.push('/')
    }

    const handleClick = (callback: any) => {
        setIsHidden(true)
        callback()
    }

    const handleClickOutside = (event: Event) => {
        if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
            setIsHidden(true)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return (
        <div className={styles.dash} ref={elementRef}>
            <button
                className={styles.button}
                onClick={() => handleClick(() => router.push('/profile'))}
            >
                В профиль
            </button>
            <button className={styles.button} onClick={() => handleClick(() => logOut())}>
                Выйти
            </button>
        </div>
    )
}

export default Dash
