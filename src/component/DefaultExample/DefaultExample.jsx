import axios from 'axios'
import { BASE_URL } from '../../api/api.js'
import { useEffect, useState } from 'react'

const getTodos = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/todos`)
        return data
    }
    catch (error) {
        return Promise.reject(error.message)
    }
}

const DefaultExample = () => {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setIsLoading(true)
        getTodos()
            .then(data => setTodos(data))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) return <div>LOADING...</div>
    if (error) return <div>{error}</div>

    return (
        <div>
            {todos?.map((todo) => (
                <div key={todo.id}>
                    {todo.title}
                </div>
            ))}
        </div>
    )
}

export default DefaultExample