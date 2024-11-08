import { FC } from 'react';
import { useNavigate } from "react-router-dom";

type Props = {
    firstName: string
    lastName: string
    phone: string
    id: string
}

export const UserCard: FC<Props> = ({ firstName, lastName, phone, id }) => {
    const navigate = useNavigate();
    
    return (
        <div className="w-[250px] max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <h2 className="text-2xl font-bold text-white truncate max-w-[180px]">
                    {firstName} {lastName}
                </h2>
                <p className="text-blue-100">Phone: {phone}</p>
            </div>
            <div className="p-4">
                <button 
                    onClick={() => navigate(`/user/${id}`) }
                    className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                    Actions
                </button>
            </div>
        </div>
    );
};
