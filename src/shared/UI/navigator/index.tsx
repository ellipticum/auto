'use client'

import React from 'react'

import Icons from '@/shared/UI/icons'

import styles from './styles.module.scss'

interface Props {
    prev: () => void
    next: () => void
}

const Navigator = ({ prev, next }: Props) => {
    return (
        <div className={styles.navigator}>
            <button className={styles.button} onClick={() => prev()}>
                <Icons.Previous />
            </button>
            <button className={styles.button} onClick={() => next()}>
                <Icons.Next />
            </button>
        </div>
    )
}

export default Navigator
