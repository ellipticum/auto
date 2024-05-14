'use client'

import { useEffect } from 'react'

let debounce: NodeJS.Timeout

const useDebounce = (dependencies: any[], callback: () => any) => {
    useEffect(() => {
        clearTimeout(debounce)

        debounce = setTimeout(callback, 500)
    }, dependencies)
}

export default useDebounce
