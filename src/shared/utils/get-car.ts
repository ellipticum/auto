import axios from 'axios'

const getCars = async (id: number) => {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`)

        return data
    } catch (error) {
        console.error(error)
    }
}

export default getCars
