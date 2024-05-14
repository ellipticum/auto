import { create } from 'zustand'

import Statuses from '@/shared/statuses'

interface IState {
    message: string
    status: string
    isNotificationHidden: boolean
    setMessage: (message: string) => void
    setStatus: (status: string) => void
    setIsNotificationHidden: (isHidden: boolean) => void
}

const useNotificationStore = create<IState>((set) => ({
    message: '',
    status: Statuses.Code.Success,
    isNotificationHidden: true,

    setMessage: (message: string) => set({ message }),
    setStatus: (status: string) => set({ status }),
    setIsNotificationHidden: (isHidden: boolean) => set({ isNotificationHidden: isHidden })
}))

export default useNotificationStore
