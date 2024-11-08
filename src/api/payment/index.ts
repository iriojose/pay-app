import { Confirm, ConfirmResponse, Pay, PayResponse } from "../../models/payment";
import { apiCommand } from "../apiFactory";

const BASE_URL = import.meta.env.VITE_API_URL

const pay = (data: Pay) => {
    return apiCommand<PayResponse>('POST')(BASE_URL, '/payment', data)
}

const confirm = (data: Confirm) => {
    return apiCommand<ConfirmResponse>('POST')(BASE_URL, '/payment/confirm', data)
}

export {
    pay,
    confirm
}