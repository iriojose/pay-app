import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateUser, createUserSchema } from "../../../models/user";
import Input from "../../molecules/Input";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../api/users";
import { toast } from "react-toastify";

export const CreateUserForm: FC = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateUser>(
        { 
            resolver: zodResolver(createUserSchema),
            mode: "onSubmit",
            reValidateMode: "onChange",
        }
    )

    const mutation = useMutation(createUser, {
        onSuccess: () => {
            toast.success("User created successfully!");
            queryClient.invalidateQueries('users');
            navigate('/');
        },
        onError: () => {
            toast.error("There was an error creating the user.");
        },
    });

    const onSubmit: SubmitHandler<CreateUser> = (data) => {
        mutation.mutate(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <Input 
                    label="Name"
                    {...register('firstName')}
                    placeholder="manuel"
                    error={errors.firstName}
                />
            </div>

            <div className="mb-4">
                <Input 
                    label="Lastname"
                    {...register('lastName')}
                    placeholder="perez"
                    error={errors.lastName}
                />
            </div>

            <div className="mb-4">
                <Input 
                    label="Email"
                    {...register('email')}
                    placeholder="hola@gmail.com"
                    error={errors.email}
                />
            </div>

            <div className="mb-4">
                <Input 
                    label="Document"
                    {...register('document')}
                    placeholder="789172"
                    error={errors.document}
                />
            </div>

            <div className="mb-4">
                <Input 
                    label="Phone"
                    {...register('phone')}
                    placeholder="04128981282"
                    error={errors.phone}
                />
            </div>


            <div className="flex items-center justify-between">
                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="relative overflow-hidden group w-full bg-none border border-black/15 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >   
                    <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        {isSubmitting ? "Loading...":"Sign Up"}
                    </div>
                    <span className="absolute inset-0 bg-blue-600 transition-transform duration-300 translate-y-full group-hover:translate-y-0"></span>
                </button>
            </div>
        </form>
    )
}