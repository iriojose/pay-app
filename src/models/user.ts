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