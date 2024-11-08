import { FC } from "react";
import { User } from "../../../models/user";
import { Balance } from "../Balance";

type Props = {
    user: User
}

export const Profile: FC<Props> = ({ user }) => {
    return (
        <div className="bg-white px-8 rounded-2xl shadow-xl mb-10 space-y-6">
            <div className="flex items-center gap-20 justify-center">   
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800">Profile</h2>
                    <p><span className="font-bold text-gray-600">Name:</span> {user.firstName} {user.lastName}</p>
                    <p><span className="font-bold text-gray-600">Email:</span> {user.email}</p>
                    <p><span className="font-bold text-gray-600">Phone:</span> {user.phone}</p>
                    <p><span className="font-bold text-gray-600">Document:</span> {user.document}</p>
                    <p><span className="font-bold text-gray-600">Created:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
                </div>

                <Balance user={user} />
            </div>
        </div>
    )
}