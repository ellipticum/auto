import axios from 'axios'
import notify from '@/shared/utils/notify'

const createOrder = async (payload: {
    userId: number
    carId: number
    sum: number
    bookingDuration: number
}) => {
    try {
        const token = localStorage.getItem('token')

        if (!token) return

        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, payload)

        notify(data)

        return data
    } catch (error) {
        console.error(error)
    }
}

export default createOrder
