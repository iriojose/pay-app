import { FC, useEffect, useState } from "react"
import { User } from "../../models/user"
import { getUsers } from "../../api/users"

export const Home: FC = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        getUsers().then(data => setUsers(data))
    },[])

    return (
        <div>
            {JSON.stringify(users)}
        </div>
    )
} 