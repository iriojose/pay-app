import { FC } from "react"
import { getUsers } from "../../api/users"
import { useQuery } from "react-query";
import { UserCard } from "../../components/organisms/CardUser";
import { Loading } from "../../components/molecules/Loading";
import { User } from "../../models/user";
import { useNavigate } from "react-router-dom";

export const Home: FC = () => {
    const navigate = useNavigate()
    const { data, isLoading } = useQuery<User[]>('users', getUsers)

    return (
        <div>
            {isLoading && (
                <Loading />
            )}

            <div className="flex justify-end mx-10 my-10">
                <button
                    onClick={() => navigate('/user/create')}
                    type="button"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 ease-in-out"
                >
                    Create User
                </button>
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