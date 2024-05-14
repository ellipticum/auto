'use client'

import ButtonProps from '@/shared/interfaces/button-props'

import Buttons from '@/shared/UI/buttons'

const Stroke = ({ children, onClick }: ButtonProps) => {
    return (
        <Buttons.Layout
            className='stroke'
            color='var(--primary-color-5)'
            background='transparent'
            borderColor='var(--primary-color-5)'
            onClick={onClick}
        >
            {children}
        </Buttons.Layout>
    )
}

export default Stroke
