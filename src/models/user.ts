import { Payment } from "./payment"

export type User = {
    id: string
    document: string
    firstName: string
    lastName: string
    email: string
    phone: string
    balance: number
    createdAt: string
    updatedAt: string
    payments?: Payment[]
}

export type CheckBalance = {
    document: string
    phone: string
}

export type AddBalance = {
    document: string
    phone: string
    amount: number
}