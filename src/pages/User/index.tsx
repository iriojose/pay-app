import { FC } from "react"
import { useParams } from "react-router-dom"
import { getUser } from "../../api/users"
import { useQuery } from "react-query"
import { Loading } from "../../components/molecules/Loading"

export const User: FC = () => {
    const { id } = useParams()

    const { data, isLoading } = useQuery(['user', id], () => getUser(id as string), {
        enabled: !!id
    })

    return (
        <div>
            {isLoading && (
                <Loading />
            )}

            {JSON.stringify(data)}
        </div>
    )
} 