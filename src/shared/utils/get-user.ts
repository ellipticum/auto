import axios from 'axios'

const getUser = async () => {
    try {
        const token = localStorage.getItem('token')

        if (!token) return

        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(data)

        return data
    } catch (error) {
        console.error(error)
    }
}

export default getUser
