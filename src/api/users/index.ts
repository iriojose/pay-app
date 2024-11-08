
import { User, AddBalance, CheckBalance, CreateUser } from "../../models/user";
import { apiCommand } from "../apiFactory";

const BASE_URL = import.meta.env.VITE_API_URL

const getUsers = () => {
    return apiCommand<User[]>('GET')(BASE_URL, '/users');
}

const getUser = (id: string) => {
    return apiCommand<User>('GET')(BASE_URL, `/users/${id}`)
}

const createUser = (data: CreateUser) => {
    return apiCommand<User>('POST')(BASE_URL, '/users/create', data)
}

const checkBalance = (data: CheckBalance) => {
    return apiCommand<number>('POST')(BASE_URL, '/users/check-balance', data)
}

const addBalance = (data: AddBalance) => {
    return apiCommand<number>('POST')(BASE_URL, '/users/add-balance', data)
} 

export {
    getUsers,
    getUser,
    checkBalance,
    addBalance,
    createUser
}