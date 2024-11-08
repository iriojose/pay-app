import { FC, useState } from "react";
import { Payment } from "../../../models/payment";

type Props = {
    payments: Payment[]
}

enum PaymentStatus {
    confirmed = "CONFIRMED",
    failed = "FAILED"
}

export const Payments: FC<Props> = ({payments}) => {
    const [paymentFilter, setPaymentFilter] = useState<PaymentStatus>(PaymentStatus.confirmed);

    const filteredPayments = payments.filter(payment => payment.status === paymentFilter) || [];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl mb-10">
            <h3 className="text-xl font-semibold text-gray-800">Payments</h3>
            <div className="flex space-x-6 my-4">
                {['CONFIRMED', 'FAILED'].map((status) => (
                    <button
                        key={status}
                        className={`px-6 py-3 rounded-lg text-sm font-medium focus:outline-none transition duration-300 
                            ${paymentFilter === status ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}
                        onClick={() => setPaymentFilter(status as PaymentStatus)}
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {filteredPayments.length > 0 ? (
                    filteredPayments.reverse().map((payment, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                            <p><span className="font-semibold text-gray-700">Amount:</span> ${payment.amount.toFixed(2)}</p>
                            <p><span className="font-semibold text-gray-700">Date:</span> {new Date(payment.createdAt).toLocaleDateString()}</p>
                            <p><span className="font-semibold text-gray-700">Status: </span> 
                            <span className={`text-${payment.status == 'CONFIRMED' ? 'green':'red'}-500`}>
                                {payment.status}
                            </span>
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No payments found for this filter.</p>
                )}
            </div>
        </div>
    )
}