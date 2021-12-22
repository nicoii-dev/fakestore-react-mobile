import * as actionTypes from './actionTypes'

export const UserRegister = (user) => {
    return {
        type: actionTypes.USER_REGISTRATION,
        payload: user
    }
}

export const UserLogin = (user) => {
    return {
        type: actionTypes.USER_LOGIN,
        payload: user
    }
}
