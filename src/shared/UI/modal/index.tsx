import React from 'react'

import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

const Modal = ({ children }: LayoutProps) => {
    return <div className={styles.modal}>{children}</div>
}

export default Modal
