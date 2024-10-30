import { useRemoveTodoMutation, useTodoQuery } from './api/queries/useTodoQuery.js'


const ReactQuery = () => {
    const { data, isLoading, isError, error } = useTodoQuery()
    const removeTodoMutation = useRemoveTodoMutation()

    if (isLoading) return <div>LOADING...</div>
    if (isError) return <div>{error}</div>

    return (
        <div>
            {data?.map((todo) => (
                <button
                    key={todo.id}
                    onClick={() => removeTodoMutation.mutate(todo.id)}
                >
                    {removeTodoMutation.isPending
                        ? 'LOADING...'
                        : todo.title
                    }
                </button>
            ))}
        </div>
    )
}

export default ReactQuery