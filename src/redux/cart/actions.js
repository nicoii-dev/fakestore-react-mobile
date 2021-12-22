import * as actionTypes from './actionTypes';

// export const fetchCart = item => (
//     {
//         type: FETCH_CART,
//         payload: item
//     }
// )

export const AddToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item
    }
}

export const RemoveFromCart = (item) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: item
    }
}

export const AddItemQty = (item) => {
    return {
        type: actionTypes.ADD_ITEM_QTY,
        payload: item
    }
}

export const SubtractItemQty = (item) => {
    return {
        type: actionTypes.SUBTRACT_ITEM_QTY,
        payload: item
    }
}

export const SelectedItems = (item) => {
    return {
        type: actionTypes.SELECTED_ITEMS,
        payload: item
    }
}

export const RemoveAllItemsLogout = () => (
    {
        type: actionTypes.REMOVE_ALL_ITEMS
    }
)