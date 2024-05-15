import axios from 'axios'

const getCars = async (limit?: number) => {
    try {
        let url = `${process.env.NEXT_PUBLIC_API_URL}/cars/`

        if (limit) url += `?limit=${limit}`

        const { data } = await axios.get(url)

        return data
    } catch (error) {
        console.error(error)
    }
}

export default getCars
