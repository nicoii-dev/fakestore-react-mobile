import * as actionTypes from './actionTypes'

const initialState = {
    user: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_REGISTRATION:
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                user: []
            }
        default:
            return state;
    }
}


export default userReducer;