'use client'

import React, { useEffect } from 'react'

import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

import useModeStore, { Mode } from '@/shared/model/mode'

import Header from '@/shared/UI/header'

const Wrapper = ({ children }: LayoutProps) => {
    const { mode, setMode } = useModeStore()

    useEffect(() => {
        const savedMode = localStorage.getItem('mode')

        setMode(savedMode ? (savedMode as Mode) : Mode.Light)
    }, [])

    return (
        <div id='wrapper' className={styles.wrapper} data-mode={mode}>
            {children}
        </div>
    )
}

export default Wrapper
