import { Payment } from "./payment"
import z from "zod"

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

export const createUserSchema = z.object({
    document: z
        .string()
        .min(6, "The document must be at least 6 characters")
        .max(20, "The document cannot exceed 20 characters"),
        
    firstName: z
        .string()
        .min(2, "The name must be at least 2 characters")
        .max(50, "The name cannot exceed 50 characters"),
        
    lastName: z
        .string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "The last name cannot exceed 50 characters"),
        
    email: z
        .string()
        .email("The email must be a valid address"),
        
    phone: z
        .string()
        .min(7, "The phone number must be at least 7 characters")
        .max(15, "The phone cannot exceed 15 characters")
        .regex(/^\+?[0-9\s-]*$/, "Phone can only contain numbers, spaces and hyphens"),
});

export type CreateUser = z.TypeOf<typeof createUserSchema>