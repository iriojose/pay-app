import { FC, Fragment, useState } from "react";
import { useMutation, useQueryClient } from "react-query"
import { pay, confirm } from "../../../api/payment";
import { toast } from "react-toastify"
import Input from "../../molecules/Input";

type Props = {
    setIsModalOpen: (value: boolean) => void
    email: string
    id: string
}

export const PayModal:FC<Props> = ({ id, email, setIsModalOpen}) => {
    const queryClient = useQueryClient();
    const [amount, setAmount] = useState(0)
    const [token, setToken] = useState("")
    const [sessionId, setSessionId] = useState("")
    const [isTokenStep, setIsTokenStep] = useState(false);

    const mutationPay = useMutation(pay, {
        onSuccess: (data) => {
            setSessionId(data.sessionId)
            setIsTokenStep(true)
            toast.warning("Check the token in your email");
        },
        onError: () => {
            toast.error("There was an error paying");
        },
    });

    const mutationConfirm = useMutation(confirm, {
        onSuccess: () => {
            toast.success("Payment successfully!");
            setIsModalOpen(false)
            queryClient.invalidateQueries(`user_${id}`);
        },
        onError: () => {
            toast.error("There was an error checking the balance.");
        },
    })

    const handlePay = () => {
        mutationPay.mutate({ email, amount })
    }

    const handleConfirm = () => {
        mutationConfirm.mutate({ sessionId, token })
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-center">Make a Payment</h2>
                    {!isTokenStep ? (
                        <Input 
                            type="number" 
                            value={amount} 
                            onChange={(e) => setAmount(Number(e.target.value))}
                            placeholder="Enter amount to pay"
                            className="w-full px-3 py-2 border rounded-lg mb-4"
                        />
                    ):(
                        <Fragment>
                            <p className="text-center mb-4">Enter the 6-digit token sent to your email</p>
                            <Input 
                                type="text" 
                                value={token} 
                                onChange={(e) => setToken(e.target.value)}
                                placeholder="Enter token"
                                className="w-full px-3 py-2 border rounded-lg mb-4 text-center"
                                maxLength={6}
                            />
                        </Fragment>
                    )}

                    <div className="flex justify-end space-x-4">
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                            Cancel
                        </button>

                        {!isTokenStep ? (
                            <button 
                                onClick={handlePay}
                                disabled={amount <= 0}
                                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                            >
                                {mutationPay.isLoading ? "Processing..." : "Pay"}
                            </button>
                        ):(
                            <button 
                                onClick={handleConfirm}
                                disabled={mutationConfirm.isLoading || token.length !== 6}
                                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                            >
                                {mutationConfirm.isLoading ? "Processing..." : "Confirm Payment"}
                            </button>
                        )}
                    </div>
            </div>
        </div>
    )
}