import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

const Die = ({ children }: LayoutProps) => {
    return <div className={styles.die}>{children}</div>
}

export default Die
