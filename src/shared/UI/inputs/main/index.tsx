import React from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

import IInput from '@/shared/interfaces/input'

const Main = ({
    type,
    label,
    value,
    placeholder,
    maxLength,
    isValid = true,
    isSlim = false,
    onChange
}: IInput) => {
    return (
        <div className={styles.wrapper}>
            <input
                className={cn(
                    styles.input,
                    { [styles.invalid]: !isValid },
                    { [styles.slim]: isSlim }
                )}
                type={type}
                value={value}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={onChange}
            />
            {label && <label className={styles.label}>{label}</label>}
        </div>
    )
}

export default Main
