import React from 'react'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    isValid?: boolean
    isSlim?: boolean
}

export default IInput
