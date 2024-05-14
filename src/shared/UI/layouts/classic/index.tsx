'use client'

import React from 'react'

import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

import { useScreenSize } from '@/shared/model/screen-size'

import Suggestion from '@/features/suggestion/UI'

import Navbar from '@/widgets/navbar/UI'
import Overlay from '@/widgets/overlay/UI'

const Classic = ({ children }: LayoutProps) => {
    useScreenSize()

    return (
        <div className={styles.wrapper}>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.content}>
                    <Suggestion />
                    {children}
                </div>
            </main>
            <Overlay />
        </div>
    )
}

export default Classic
