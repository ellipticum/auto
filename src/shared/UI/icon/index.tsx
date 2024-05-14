'use client'

import React, { ReactElement, SVGProps, useEffect, useState } from 'react'

import useModeStore from '@/shared/model/mode'

interface Props extends SVGProps<SVGSVGElement> {
    variable?: string
}

const Icon = ({ variable = '--primary-color-5', children, ...props }: Props) => {
    const { mode } = useModeStore()

    const [color, setColor] = useState('none')

    useEffect(() => {
        const wrapper = document.querySelector('#wrapper')

        if (wrapper) {
            const style = getComputedStyle(wrapper)

            console.log(style)

            setColor(style.getPropertyValue(variable).trim() || 'none')
        }
    }, [mode, variable])

    return (
        <svg {...props} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as ReactElement<any>, {
                        fill: color
                    })
                }
                return child
            })}
        </svg>
    )
}

export default Icon
