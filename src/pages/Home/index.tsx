import { FC } from "react"
import { getUsers } from "../../api/users"
import { useQuery } from "react-query";

export const Home: FC = () => {
    const { data, isLoading } = useQuery('users', getUsers)

    return (
        <div>
            {isLoading && (
                <div className="flex justify-center items-center font-medium text-lg">Cargando...</div>
            )}
            {JSON.stringify(data)}
        </div>
    )
} 