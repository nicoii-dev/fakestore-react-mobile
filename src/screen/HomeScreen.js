import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, ActivityIndicator, Animated } from 'react-native';
import ProductApi from '../library/api/ProductApi';
import homeStyle from '../style/homeStyle';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_PRODUCT } from '../redux/product/actionTypes';
import CartApi from '../library/api/CartApi';
import { FETCH_CART } from '../redux/cart/actionTypes';
import DropDownPicker from 'react-native-dropdown-picker';
import CategoriesApi from '../library/api/CategoriesApi';
import ProductBasedOnCategory from '../library/api/ProductBasedOnCategory';

import SkeletonUI from '../components/Display/loader/skeleton/SkeletonUI';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import LogoLoader from '../components/Loading/LogoLoader';

function Home({ navigation }) {
    // for dropdownpicker
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [categories, setCategories] = useState([]);

    const [productList, setProductList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData.user)

    const getData = async () => {
        try {
            const products = await ProductApi.getProduct();
            //console.log(products)
            setProductList(products);
            await dispatch({ type: GET_ALL_PRODUCT, payload: products })

            const productCategories = await CategoriesApi.getCategories();
            let categoriesArray = [];
            categoriesArray.push({label: "All Product", value:"all"});
            for(let i = 0; i < productCategories.length; i++){
                categoriesArray.push({label: productCategories[i].charAt(0).toUpperCase() + productCategories[i].slice(1), value: productCategories[i]})
            }
            setCategories(categoriesArray);
            setIsLoading(false);
            setRefreshing(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    const productsBasedOnCategory = async (category) => {
        setIsLoading(true);
        const productCategoryList = await ProductBasedOnCategory.getProduct(category);
        setProductList(productCategoryList);
        setIsLoading(false);
    }

    const _onRefresh = () => {
        setRefreshing(true);
        setIsLoading(true);
        getData();
    };

    useEffect(() => {
        setIsLoading(true);
        getData();
    }, [])


        // * animated header
        const scrollY = useRef(new Animated.Value(0)).current;
   
    return (
        <View style={homeStyle.container} scrollY={scrollY}>
            <DropDownPicker
                open={open}
                value={value}
                items={categories}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setCategories}
                containerStyle={{
                    padding:10,
                    alignItems:'center',
                }}
                onChangeValue={(category) => {
                    category ? productsBasedOnCategory(category) : ()=>{};
                }}
            />
            {!isLoading ?
            (<FlatList
                numColumns={2}
                contentContainerStyle={{
                    alignSelf: 'flex-start',
                  }}
                onRefresh={_onRefresh}
                refreshing={refreshing}

                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={productList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("ProductScreenStack", {
                                screen: 'ProductScreen',
                                params: {...item, itemQty: 1, itemChecked: 0 }
                            });
                        }}
                    >

                        <View style={homeStyle.item}>
                            <Text style={homeStyle.title}>{item?.title?.length > 30 ? item.title.substring(0, 30) + "..." : item?.title}</Text>
                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Image
                                    style={homeStyle.image}
                                    source={{ uri: item.image }}
                                    resizeMode='contain'
                                />
                            </View>
                            <Text style={homeStyle.price}>${item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />) : (
                <SkeletonUI
                    loading={isLoading}
                    count={8}
                    flex={'center'}
                    width={wp('92%')}
                />
            )}
        </View>
    );
}

export default Home;