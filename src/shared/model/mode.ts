import { create } from 'zustand'

export enum Mode {
    Light = 'light',
    Dark = 'dark'
}

interface IState {
    mode: Mode | null
    setMode: (mode: Mode) => void
}

const useModeStore = create<IState>((set) => ({
    mode: null,
    setMode: (mode: Mode) => set({ mode })
}))

export default useModeStore
