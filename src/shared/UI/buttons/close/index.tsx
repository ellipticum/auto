import React from 'react'

import styles from './styles.module.scss'

import Icons from '@/shared/UI/icons'

interface Props {
    color?: string
    onClick: () => void
}

const Close = ({ onClick, color = '#202020' }: Props) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <Icons.Cross color={color} />
        </button>
    )
}

export default Close
