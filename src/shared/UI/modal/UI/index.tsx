import React, { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'
import Icons from '@/shared/UI/icons'
import cn from 'classnames'
import useModalStore from '@/widgets/order-details/model/store'

interface Props {
    children: ReactNode
    isHidden: boolean
    setIsHidden: (value: boolean | ((prevState: boolean) => boolean)) => void
}

const Modal = ({ children, isHidden, setIsHidden }: Props) => {
    const elementRef = useRef<HTMLDivElement | null>(null)

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
        <div className={cn(styles.overlay, { [styles.hidden]: isHidden })}>
            <div className={styles.window} ref={elementRef}>
                <button
                    className={styles.button}
                    onClick={() => setIsHidden((prevState) => !prevState)}
                >
                    <Icons.Cross variable='--additional-color-5' />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal
