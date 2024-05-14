import React, { CSSProperties, ReactNode } from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

interface Props {
    children: ReactNode
    isOutlined?: boolean
    isFilled?: boolean
    isRounded?: boolean
    isBright?: boolean
    onClick: () => void
    style?: CSSProperties
}

const Default = ({
    children,
    isOutlined = false,
    isFilled = false,
    isRounded = false,
    isBright = false,
    onClick,
    style
}: Props) => {
    return (
        <button
            style={style}
            className={cn(
                styles.button,
                { [styles.outlined]: isOutlined },
                { [styles.filled]: isFilled },
                { [styles.rounded]: isRounded },
                { [styles.bright]: isBright }
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Default
