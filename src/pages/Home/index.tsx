import { FC } from "react"
import { getUsers } from "../../api/users"
import { useQuery } from "react-query";
import { UserCard } from "../../components/organisms/CardUser";
import { Loading } from "../../components/molecules/Loading";
import { User } from "../../models/user";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/molecules/Button";

export const Home: FC = () => {
    const navigate = useNavigate()
    const { data, isLoading } = useQuery<User[]>('users', getUsers)

    return (
        <div>
            {isLoading && (
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <Loading />
                </div>
            )}

            <div className="flex justify-end mx-10 my-10">
                <Button onClick={() => navigate('/user/create')}>
                    Create User
                </Button>
            </div>

            {data && (
                <div className="flex-grow grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mx-10">
                    {data.map((item, i) => {
                        return (
                            <UserCard      
                                firstName={item.firstName}
                                lastName={item.lastName}
                                phone={item.phone}
                                id={item.id}
                                key={i} 
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}