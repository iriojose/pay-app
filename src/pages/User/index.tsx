import { FC } from "react"
import { useParams, useNavigate  } from "react-router-dom"
import { getUser } from "../../api/users"
import { useQuery } from "react-query"
import { Loading } from "../../components/molecules/Loading"
import { User } from "../../models/user"
import { Payment } from "../../models/payment"
import { Profile } from "../../components/organisms/Profile"
import { Payments } from "../../components/organisms/Payments"

export const UserView: FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data, isLoading } = useQuery<User>(`user_${id}`, () => getUser(id as string), {
        enabled: !!id
    })

    return (
        <div>
            {isLoading && (
                <Loading />
            )}

            <div className="flex justify-start mx-10 mt-5">
                <button
                    onClick={() => navigate('/')}
                    type="button"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 ease-in-out"
                >
                    Back
                </button>
            </div>

            {data && (
                <div className="max-w-7xl mx-auto p-8">
                    <Profile user={data} />

                    <Payments payments={data.payments as Payment[]} />
                </div>
            )}
        </div>
    )
} 