import { create } from 'zustand'
import { ICar, IOrder } from '@/shared/store/auth'

interface IState {
    car: ICar | null
    setCar: (car: ICar) => void
    isOrderWindowHidden: boolean
    setIsOrderWindowHidden: (value: boolean | ((prevState: boolean) => boolean)) => void
}

const useOrderWindowStore = create<IState>((set) => ({
    car: null,
    setCar: (car) => set({ car }),
    isOrderWindowHidden: true,
    setIsOrderWindowHidden: (value: boolean | ((prevState: boolean) => boolean)) =>
        set((state) => ({
            isOrderWindowHidden:
                typeof value === 'function' ? value(state.isOrderWindowHidden) : value
        }))
}))

export default useOrderWindowStore
