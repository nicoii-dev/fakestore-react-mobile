import { GET_ALL_PRODUCT } from "./actionTypes";

const initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        default:
            return state;
    }
}


export default productsReducer;