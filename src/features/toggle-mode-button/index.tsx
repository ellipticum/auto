import React from 'react'

import useModeStore, { Mode } from '@/shared/model/mode'

import Icons from '@/shared/UI/icons'

const ToggleModeButton = () => {
    const { mode, setMode } = useModeStore()

    const handleClick = () => {
        const value = mode === Mode.Dark ? Mode.Light : Mode.Dark

        setMode(value)

        localStorage.setItem('mode', value)
    }

    return (
        <button onClick={() => handleClick()}>
            {mode === Mode.Dark ? <Icons.LightMode /> : <Icons.DarkMode />}{' '}
        </button>
    )
}

export default ToggleModeButton
