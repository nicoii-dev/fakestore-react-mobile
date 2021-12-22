import { GET_ALL_PRODUCT } from './actionTypes';

export const getAllProcut = products => (
    {
        type: GET_ALL_PRODUCT,
        payload: products
    }
)