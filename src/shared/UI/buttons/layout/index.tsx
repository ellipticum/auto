'use client'

import React, { MouseEvent } from 'react'

import styles from './styles.module.scss'

import cn from 'classnames'

import ButtonProps from '@/shared/interfaces/button-props'

const Layout = ({
    children,
    className,
    borderColor = 'transparent',
    color = 'var(--additional-color-5)',
    background = 'var(--primary-color-5)',
    isFilled = false,
    onClick
}: ButtonProps) => {
    console.log(className)

    return (
        <button
            className={cn(
                styles.button,
                // @ts-ignore
                { [styles[className]]: className },
                { [styles.filled]: isFilled }
            )}
            style={{ borderColor, color, background }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Layout
