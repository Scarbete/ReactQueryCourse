import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getTodos, removeTodoById } from '../services/todosServices.js'

export const useTodoQuery = () => useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
})

export const useRemoveTodoMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: removeTodoById,
        onSuccess: queryClient.invalidateQueries({ queryKey: ['todos'] })
    })
}