import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateUser, createUserSchema } from "../../../models/user";
import Input from "../../molecules/Input";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../api/users";
import { toast } from "react-toastify";
import { Button } from "../../molecules/Button";
import { Loading } from "../../molecules/Loading";

export const CreateUserForm: FC = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<CreateUser>(
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

            <Button disabled={mutation.isLoading} className="w-full mt-2 disabled:bg-white" type="submit">   
                {mutation.isLoading ? <Loading />:"Sign Up"}
            </Button>
        </form>
    )
}