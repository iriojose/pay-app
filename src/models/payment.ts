
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