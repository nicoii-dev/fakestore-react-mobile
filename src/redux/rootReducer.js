import { combineReducers } from "redux";
import cartReducer from './cart/cartReducer'
import userReducer from "./user/userReducer";
import productsReducer from "./product/productReducer";

const rootReducer = combineReducers({
    cartData: cartReducer,
    userData: userReducer,
    productsData: productsReducer
});

export default rootReducer;