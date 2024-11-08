
enum PaymentStatus {
    pending = "PENDING",
    failed = "FAILED",
    confirmed = "CONFIRMED"
} 

export type Payment = {
    id: string
    token: string
    sessionId: string | null
    userId: string
    amount: number
    status: PaymentStatus
    createdAt: string
}

export type Pay = {
    email: string
    amount: number
}

export type PayResponse = {
    sessionId: string
    token: string
    message: string
}

export type Confirm = {
    sessionId: string
    token: string
}

export type ConfirmResponse = {
    message: string
}