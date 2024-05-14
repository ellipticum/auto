import React from 'react'

import Icon from '@/shared/UI/icon'

import IconProps from '@/shared/interfaces/icon-props'

const Chevron = ({ variable }: IconProps) => {
    return (
        <Icon variable={variable} viewBox='0 0 24 24' width='24' height='24'>
            <path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
        </Icon>
    )
}

export default Chevron
