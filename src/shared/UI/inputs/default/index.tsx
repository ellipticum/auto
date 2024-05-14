import React, { useState } from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

import ValidationStatus from '@/shared/enums/validation-status'

interface Props {
    label: string
    value: string
    status: ValidationStatus
    setValue: (value: string) => void

    type?: string
}

const Default = ({ type = 'text', label, status, value, setValue }: Props) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div
            className={cn(
                styles.wrapper,
                { [styles.accent]: isFocused },
                { [styles.invalid]: status === ValidationStatus.Invalid }
            )}
        >
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                type={type}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    )
}

export default Default
