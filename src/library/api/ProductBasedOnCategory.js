import axios from 'react-native-axios';

const ProductBasedOnCategory = {
  getProduct: async (category) => {
    try {
        let data;
        if(category === "all"){
          const response = await axios.get("https://fakestoreapi.com/products");
          data = await response.data
        } else {
          const response = await axios.get("https://fakestoreapi.com/products/category/" + category);
          data = await response.data
        }
        return data;
    } catch (error) {
      return error.message.substr(32, 3);
    }
  }
}

export default ProductBasedOnCategory;

