import axios from 'react-native-axios';

const UserRegistrationApi = {
    registerUser: async (data) => {
        let userData = data;
        try {
            const response = await axios.post('https://fakestoreapi.com/users', {
                email: userData.email,
                username: userData.email,
                password: userData.password,
                name: {
                    firstname: userData.name.split(" ")[0],
                    lastname: userData.name.split(" ")[1]
                },
                address: {
                    city: 'kilcoole',
                    street: '7835 new road',
                    number: 3,
                    zipcode: '12926-3874',
                    geolocation: {
                        lat: '-37.3159',
                        long: '81.1496'
                    }
                },
                phone: '1-570-236-7033'
            })

            const data = await response.data;
            return data;

        } catch (error) {
            console.log(error)
        }
    }
}

export default UserRegistrationApi;