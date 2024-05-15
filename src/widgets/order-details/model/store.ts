import { create } from 'zustand'
import { IOrder } from '@/shared/store/auth'

interface IState {
    order: IOrder | null
    setOrder: (order: IOrder) => void
    isOrderDetailsHidden: boolean
    setIsOrderDetailsHidden: (value: boolean | ((prevState: boolean) => boolean)) => void
}

const useOrderDetailsStore = create<IState>((set) => ({
    order: null,
    setOrder: (order) => set({ order }),
    isOrderDetailsHidden: true,
    setIsOrderDetailsHidden: (value: boolean | ((prevState: boolean) => boolean)) =>
        set((state) => ({
            isOrderDetailsHidden:
                typeof value === 'function' ? value(state.isOrderDetailsHidden) : value
        }))
}))

export default useOrderDetailsStore
