import { FC, useState } from "react"
import { useMutation } from "react-query"
import { addBalance } from "../../../api/users"
import Input from "../../molecules/Input"
import { toast } from "react-toastify"

type Props = {
    setIsModalOpen: (value: boolean) => void
    setStateBalance: (value: number) => void
    phone: string
    document: string
}

export const AddBalanceModal: FC<Props> = ({phone, document, setIsModalOpen, setStateBalance}) => {
    const [amount, setAmount] = useState(0)

    const mutationAddBalance = useMutation(addBalance, {
        onSuccess: (data) => {
            setStateBalance(data)
            toast.success("Balance added successfully!");
            setIsModalOpen(false)
        },
        onError: () => {
            toast.error("There was an error checking the balance.");
        },
    });

    const handleAddBalance = () => {
        mutationAddBalance.mutate({ document, phone, balance: amount as number})
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-center">Add Balance</h2>
                <Input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))}
                    placeholder="20"
                    className="w-full px-3 py-2 border rounded-lg mb-4"
                />
                        
                <div className="flex justify-end space-x-4">
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                        Cancel
                    </button>

                    <button 
                        onClick={handleAddBalance}
                        disabled={mutationAddBalance.isLoading || amount <= 0}
                        className={`px-4 py-2 rounded-lg shadow transition ${
                            mutationAddBalance.isLoading ? "bg-blue-300" : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                    >
                        {mutationAddBalance.isLoading ? "Adding..." : "Add Balance"}
                    </button>
                </div>
            </div>
        </div>
    )
}