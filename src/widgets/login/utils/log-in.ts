import axios from 'axios'

import notify from '@/shared/utils/notify'

interface IInfo {
    login: string
    password: string
}

const logIn = async (info: IInfo) => {
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
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

export default logIn
