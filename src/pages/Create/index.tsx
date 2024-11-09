import { FC } from "react"
import { CreateUserForm } from "../../components/organisms/CreateUserForm"
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/molecules/Button";

export const Create: FC = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <div className="flex justify-start mx-10 my-10">
                <Button onClick={() => navigate('/')}>
                    Back
                </Button>
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