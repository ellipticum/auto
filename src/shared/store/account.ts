import { create } from 'zustand'
import IProduct from '@/entities/product-card/model/interface'

export interface IOrder {
    name: string
    email: string
    phone: string
    companyId: number
    address: string
    cart: any
    comment: string
    updatedAt: string
    createdAt: string
    id: number
    total: number
    status: any
}

export interface IAccount {
    id: number
    number: number
    name: string
    cart: ICart
    orders: IOrder[]
}

export interface ICart {
    id: number
    companyId: number
    data: IProduct[]
}

interface IState {
    account: IAccount | null
    cart: ICart | null
    setAccount: (account: IAccount) => void
    setCart: (cart: ICart) => void
}

const useAccountStore = create<IState>((set) => ({
    account: null,
    cart: null,
    setAccount: (account: IAccount) => set({ account }),
    setCart: (cart: ICart) => set({ cart })
}))

export default useAccountStore
