import axios from 'react-native-axios';

const UserLoginApi = {
    LoginUser: async (data) => {
        let userData = data;
        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                username: userData.email,
                password: userData.password,
            })
            const data = await response.data;
            return data;

        } catch (error) {
            console.log(error)
        }
    }
}

export default UserLoginApi;