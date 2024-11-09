import { FC, useEffect, useState } from "react"
import { useMutation } from "react-query"
import { checkBalance } from "../../../api/users"
import { toast } from "react-toastify"
import { User } from "../../../models/user"
import { AddBalanceModal } from "../AddBalanceModal"
import { PayModal } from "../PayModal"
import { Button } from "../../molecules/Button"
import { Loading } from "../../molecules/Loading"

type Props = {
    user: User
}

export const Balance:FC<Props> = ({ user }) => {
    const [stateBalance, setStateBalance] = useState(user.balance)
    const [isModalAddBalanceOpen, setIsModalAddBalanceOpen] = useState(false)
    const [isModalPayOpen, setIsModalPayOpen] = useState(false)

    useEffect(() => {
        setStateBalance(user.balance)
    }, [user])
    
    const mutationCheckBalance = useMutation(checkBalance, {
        onSuccess: (data) => {
            setStateBalance(data)
            toast.success("Updated Balance!");
        },
        onError: () => {
            toast.error("There was an error checking the balance.");
        },
    });

    const handleCheckBalance = () => {
        mutationCheckBalance.mutate({document: user.document, phone: user.phone})
    }

    return (
        <div className="col-span-2 lg:col-span-1 p-6 text-center">
            <p className="text-xl font-bold text-gray-700">Balance</p>
            <p className="text-4xl font-extrabold text-blue-600">${stateBalance.toFixed(2)}</p>
            <div className="mt-6 space-y-4">
                <Button 
                    disabled={mutationCheckBalance.isLoading}
                    onClick={handleCheckBalance}
                    className="w-full hover:text-white rounded-lg shadow bg-white text-black hover:bg-green-600"
                >
                    {mutationCheckBalance.isLoading ? <Loading className="border-white-600"/> : "Check Balance"}
                </Button>
                <Button 
                    onClick={() => setIsModalAddBalanceOpen(true)}
                    className="w-full hover:text-white rounded-lg shadow bg-white text-black hover:bg-blue-600"
                >
                    Add Balance
                </Button>
                <Button 
                    onClick={() => setIsModalPayOpen(true)}
                    className="w-full hover:text-white rounded-lg shadow bg-white text-black hover:bg-yellow-600"
                >
                    Pay
                </Button>
            </div>

            {isModalAddBalanceOpen && (
                <AddBalanceModal 
                    setIsModalOpen={setIsModalAddBalanceOpen} 
                    setStateBalance={setStateBalance} 
                    phone={user.phone} 
                    document={user.document}
                />)
            }

            {isModalPayOpen && (
                <PayModal setIsModalOpen={setIsModalPayOpen} email={user.email} id={user.id}  />
            )}
        </div>
    )
}