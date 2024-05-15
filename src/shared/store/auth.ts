import { create } from 'zustand'

export interface IProperty {
    name: string
    value: string
}
export interface ICar {
    id: number
    name: string
    type: string
    hourlyPrice: number
    dailyPrice: number
    weeklyPrice: number
    description: string
    images: string[]
    quantity: number
    properties: IProperty[]
}

export interface IOrder {
    id: number
    bookingTime: number
    bookingDuration: number
    car: ICar
}

interface IProfile {
    id: number
    login: string
    password: string
    firstName: string
    lastName: string
    orders: IOrder[]
}

interface IState {
    profile: IProfile | null
    setProfile: (profile: IProfile | null) => void
    isAuth: boolean
    setIsAuth: (isAuth: boolean) => void
}

const useAuthStore = create<IState>((set) => ({
    isAuth: false,
    profile: null,
    setProfile: (profile: IProfile | null) => set({ profile }),
    setIsAuth: (isAuth: boolean) => set({ isAuth })
}))

export default useAuthStore
