import axios from 'react-native-axios';

const CartApi = {

    getCart: async (userId) => {
        try {
            const response = await axios.get("https://fakestoreapi.com/carts/user/" + userId);
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3);
        }
    }
}

export default CartApi;

