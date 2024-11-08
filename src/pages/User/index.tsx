import { FC } from "react"
import { useParams } from "react-router-dom"
import { getUser } from "../../api/users"
import { useQuery } from "react-query"

export const User: FC = () => {
    const { id } = useParams()

    const { data, isLoading } = useQuery(['user', id], () => getUser(id as string), {
        enabled: !!id
    })

    return (
        <div>
            user
            {isLoading && (
                <div className="flex justify-center items-center font-medium text-lg">Cargando...</div>
            )}

            {JSON.stringify(data)}
        </div>
    )
} 