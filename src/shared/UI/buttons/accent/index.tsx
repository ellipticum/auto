'use client'

import React from 'react'

import ButtonProps from '@/shared/interfaces/button-props'

import Buttons from '@/shared/UI/buttons'

const Accent = ({ children, onClick }: ButtonProps) => {
    return (
        <Buttons.Layout
            color='var(--additional-color-5)'
            background='var(--identify-color-5)'
            onClick={onClick}
        >
            {children}
        </Buttons.Layout>
    )
}

export default Accent
