import axios from 'react-native-axios';

const NiloApi = {

    getData: async () => {
        try {
            const response = await axios.get("https://stg.qrthis.io/api/qr/ext/XhHxbb2ikQy0HdAhlGWHgnwXE8NCyM9O/list");
            const data = await response.data;
            return data;
        } catch (error) {
            return error.message.substr(32, 3);
        }
    }
}

export default NiloApi;