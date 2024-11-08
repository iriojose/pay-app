import { FC } from "react"
import { CreateUserForm } from "../../components/organisms/CreateUserForm"
import { useNavigate } from "react-router-dom";

export const Create: FC = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <div className="flex justify-start mx-10 my-10">
                <button
                    onClick={() => navigate('/')}
                    type="button"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 ease-in-out"
                >
                    Back
                </button>
            </div>

            <div className="text-center font-bold text-xl">
                Create User
            </div>

            <div className="flex justify-center items-center mt-5">
                <CreateUserForm />
            </div>
        </div>
    )
} 