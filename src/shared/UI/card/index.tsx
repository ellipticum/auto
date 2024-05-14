'use client'

import React, { useEffect, useRef } from 'react'

import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

interface Props extends LayoutProps {
    onClick: () => void
}

const Card = ({ children, onClick }: Props) => {
    return (
        <div className={styles.card} onClick={onClick}>
            {children}
        </div>
    )
}

export default Card
