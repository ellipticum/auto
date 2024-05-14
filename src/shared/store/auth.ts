import { create } from 'zustand'

interface IState {
    isAuth: boolean
    setIsAuth: (isAuth: boolean) => void
}

const useAuthStore = create<IState>((set) => ({
    isAuth: false,
    setIsAuth: (isAuth: boolean) => set({ isAuth })
}))

export default useAuthStore
