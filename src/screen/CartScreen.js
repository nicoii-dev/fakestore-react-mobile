import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SUBTRACT_ITEM_QTY, ADD_ITEM_QTY, REMOVE_FROM_CART, SELECTED_ITEMS } from '../redux/cart/actionTypes';
import { SubtractItemQty, AddItemQty, RemoveFromCart, SelectedItems } from '../redux/cart/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import cartStyle from '../style/cartStyle';
import Checkout from '../components/Cart/Checkout';

function CartScreen({ navigation }) {
    const items = useSelector(state => state.cartData.items);
    const total = useSelector(state => state.cartData.total);
    const dispatch = useDispatch();

    // checkout modal
    const [checkoutModal, setCheckoutModal] = useState(false);

    const selectHandler = (item) => {
        dispatch(SelectedItems(item))
    }

    const quantityHandler = (action, item) => {
        if (action == 'more') {
            dispatch(AddItemQty(item))
        } else if (action == 'less') {
            dispatch(SubtractItemQty(item))
        }
    }

    function deleteHandler(item) {
        dispatch(RemoveFromCart(item))
    }

    function navigateHandler(item) {
        navigation.navigate("HomeScreenStack", {
            screen: 'ProductScreen',
            params: {
                id: item.id, itemTitle: item.itemTitle, itemDescription: item.itemDescription, itemImage: item.itemImage,
                itemPrice: item.itemPrice, itemQty: item.itemQty, itemChecked: item.itemChecked
            }
        })
    }

    return (

        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, i }) => (
                        <View key={i} style={cartStyle.container}>
                            <View style={cartStyle.selectorView}>
                                <TouchableOpacity style={cartStyle.selector} onPress={() => selectHandler(item)}>
                                    <Icon name={item.itemChecked == 1 ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25}
                                        color={item.itemChecked == 1 ? "#0faf9a" : "#aaaaaa"} />
                                </TouchableOpacity>
                            </View>
                            <View style={cartStyle.item}>
                                <TouchableOpacity onPress={() => { navigateHandler(item) }} style={{ paddingRight: 10 }}>
                                    <Image source={{ uri: item.image }} style={cartStyle.image} resizeMode='contain' />
                                </TouchableOpacity>
                                <View style={cartStyle.itemDetails}>
                                    <Text numberOfLines={1} style={cartStyle.itemTitle}>{item.title}</Text>
                                    <Text></Text>
                                    <Text numberOfLines={1} style={cartStyle.itemPrice}>${(item.itemQty * item.price).toFixed(2)}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity disabled={item.itemQty === 1 ? true : false} onPress={() => quantityHandler('less', item)} style={cartStyle.subQtyButton}>
                                            <Text style={cartStyle.subQtyText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={cartStyle.itemQty}>{item.itemQty}</Text>
                                        <TouchableOpacity onPress={() => quantityHandler('more', item)} style={cartStyle.addQtyButton}>
                                            <Text style={cartStyle.addQtyText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={cartStyle.deleteView}>
                                    <TouchableOpacity style={cartStyle.deleteButton} onPress={() => deleteHandler(item)}>
                                        <Icon name="md-trash" style={cartStyle.deleteIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    )}
                />
                <View style={{ flexDirection: 'row' }}>
                    <View style={cartStyle.subTotalView}>
                        <Text></Text>
                        <View style={cartStyle.subTotalText}>
                            <Text style={{ color: '#8f8f8f' }}>SubTotal: </Text>
                            <Text>${total.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
                <View style={cartStyle.checkoutView}>
                    <TouchableOpacity style={cartStyle.checkoutButton} onPress={() => {setCheckoutModal(true)}}>
                        <Text style={{ color: '#ffffff' }}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{padding:5}}>
                {/* <Checkout 
                    items = {items}
                    checkoutModal = {checkoutModal}
                    setCheckoutModal = {setCheckoutModal}
                /> */}
            </View>
        </View>
    );
}

export default CartScreen;