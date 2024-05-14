'use client'

import React, { ReactNode, useState } from 'react'

import styles from './styles.module.scss'

import IInput from '@/shared/interfaces/input'
import IButton from '@/shared/interfaces/button'

import Inputs from '@/shared/UI/inputs'
import Buttons from '@/shared/UI/buttons'

import Loader from '@/shared/UI/loader/UI'

interface Props {
    Hint: React.ElementType
    fields: IInput[]
    heading: string
    button?: IButton
}

const AuthForm = ({ Hint, fields, button, heading }: Props) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () => {
        if (button) {
            setIsLoading(true)

            await button.onClick()

            setIsLoading(false)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <h3 className={styles.heading}>{heading}</h3>
                <div className={styles.column}>
                    {fields.map((field, index) => {
                        return <Inputs.Main key={index} {...field} />
                    })}
                </div>
                {button && (
                    <Buttons.Default onClick={() => handleClick()} isFilled={true}>
                        {isLoading ? <Loader /> : button.children}
                    </Buttons.Default>
                )}
                <Hint />
            </div>
        </div>
    )
}

export default AuthForm
