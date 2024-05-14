import React from 'react'

import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

import Header from '@/shared/UI/header'

const Wrapper = ({ children }: LayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            {children}
        </div>
    )
}

export default Wrapper
