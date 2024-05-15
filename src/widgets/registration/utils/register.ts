import axios from 'axios'

import notify from '@/shared/utils/notify'

interface IInfo {
    firstName: string
    lastName: string
    login: string
    password: string
}

const register = async (info: IInfo) => {
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/registration`, {
            ...info
        })

        notify(data)

        return data
    } catch (error: Error | any) {
        console.error(error)

        if (error.response) {
            notify(error.response.data)
        } else {
            notify({ error: error.message })
        }
    }
}

export default register
