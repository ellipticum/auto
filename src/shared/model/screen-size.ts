'use client'

import { create } from 'zustand'
import { useEffect } from 'react'

export enum ScreenSize {
    XS = 0,
    SM = 576,
    MD = 768,
    LG = 992,
    XL = 1200,
    XXL = 1400
}

interface IState {
    screenSize: ScreenSize
    setScreenSize: (screenSize: ScreenSize) => void
}

export const useScreenSize = () => {
    useEffect(() => {
        const { setScreenSize } = useScreenSizeStore.getState()

        const handle = () => {
            if (window.innerWidth < ScreenSize.SM) {
                setScreenSize(ScreenSize.XS)
            } else if (window.innerWidth < ScreenSize.MD) {
                setScreenSize(ScreenSize.SM)
            } else if (window.innerWidth < ScreenSize.LG) {
                setScreenSize(ScreenSize.MD)
            } else if (window.innerWidth < ScreenSize.XL) {
                setScreenSize(ScreenSize.LG)
            } else if (window.innerWidth < ScreenSize.XXL) {
                setScreenSize(ScreenSize.XL)
            } else {
                setScreenSize(ScreenSize.XXL)
            }
        }

        handle()

        window.addEventListener('resize', handle)

        return () => window.removeEventListener('resize', handle)
    }, [])
}

const useScreenSizeStore = create<IState>((set) => ({
    screenSize: ScreenSize.XS,
    setScreenSize: (screenSize: ScreenSize) => set({ screenSize })
}))

export default useScreenSizeStore
