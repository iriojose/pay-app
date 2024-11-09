import { FC } from "react"
import { useParams, useNavigate  } from "react-router-dom"
import { getUser } from "../../api/users"
import { useQuery } from "react-query"
import { Loading } from "../../components/molecules/Loading"
import { User } from "../../models/user"
import { Payment } from "../../models/payment"
import { Profile } from "../../components/organisms/Profile"
import { Payments } from "../../components/organisms/Payments"
import { Button } from "../../components/molecules/Button"

export const UserView: FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data, isLoading } = useQuery<User>(`user_${id}`, () => getUser(id as string), {
        enabled: !!id
    })

    return (
        <div>
            {isLoading && (
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <Loading />
                </div>
            )}

            <div className="flex justify-start mx-10 mt-5">
                <Button onClick={() => navigate('/')}>
                    Back
                </Button>
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