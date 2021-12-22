import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import productStyle from "../style/productStyle";
import AddToCartButton from "../components/Cart/AddToCartButton";
import LogoLoader from "../components/Loading/LogoLoader";

function ProductScreen({ route, navigation }) {

    const [product, setProduct] = useState([route.params]);
    const [isLoading, setIsLoading] = useState(false);

    function quantityHandler(action, item) {
        if (action === 'more') {
            let newProduct = product.map((_product) => {
                        _product = {
                            ..._product,
                            itemQty: _product.itemQty + 1
                        }
                      return _product
                    }
                )
            setProduct(newProduct)
        } else if (action === 'less') {
            let newProduct = product.map((_product) => {
                    _product = {
                        ..._product,
                        itemQty: _product.itemQty - 1
                    }
                return _product
                }
            )
            setProduct(newProduct)
        }
    }

    return isLoading ? (<LogoLoader />) : (
        <View style={productStyle.container}>
            <ScrollView>
                <Image
                    style={productStyle.image}
                    source={{ uri: product[0].image }}
                    resizeMode='contain'
                />
                <Text style={productStyle.title}>{product[0].title}</Text>
                <Text style={productStyle.price}>${product[0].price.toFixed(2)}</Text>
                <Text style={productStyle.description}>{product[0].description}</Text>
            </ScrollView>
            <View style={productStyle.quantityContainer}>
                <TouchableOpacity disabled={product[0].itemQty === 1 ? true : false} onPress={() => quantityHandler('less', product[0])} style={productStyle.subQtyButton}>
                    <Text style={productStyle.subQtyText}>-</Text>
                </TouchableOpacity>
                <View style={productStyle.itemQtyContainer}>
                    <Text style={productStyle.itemQty}>
                        {product[0].itemQty}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => quantityHandler('more', product[0])} style={productStyle.addQtyButton}>
                    <Text style={productStyle.addQtyText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={productStyle.footer}>
                <AddToCartButton 
                    item = {product[0]} 
                    priceTimesQty = {product[0].itemQty * product[0].price}
                    isLoading = {isLoading}
                    setIsLoading = {setIsLoading}
                />
            </View>
            
        </View>


    );
}


export default ProductScreen;