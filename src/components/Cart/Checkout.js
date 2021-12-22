import React, { useState, useEffect }from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';
import checkoutStyle from '../../style/checkoutStyle';

const Checkout = ({
    items,
    checkoutModal,
    setCheckoutModal
}) => {

    const [checkoutItems, setCheckoutItems] = useState([]);

    const checkedItems = () =>{
        let newItems = items.filter(item => item.itemChecked === 1)
        setCheckoutItems(newItems)
    }

    useEffect(()=>{
        checkedItems();
    },items)

    return (

            <Modal visible={checkoutModal}>
                <View style={checkoutStyle.container}>
                    <TouchableOpacity onPress={() => {setCheckoutModal(false)}} style={checkoutStyle.closeBtn}>
                        <Text>
                            X
                        </Text>
                    </TouchableOpacity>
                    <View style={checkoutStyle.flatListContainer}>
                       <FlatList
                            data = {checkoutItems}
                            renderItem = { ({item}) => (
                                <View style={{flexDirection:'row'}}>
                                    <Text style={checkoutStyle.itemQty}>
                                        {item.itemQty} x
                                    </Text>
                                    <Text style={checkoutStyle.itemTitle}>
                                        {item.title}
                                    </Text>
                                    <View style={checkoutStyle.itemSubtotal}>
                                        <Text>
                                            ${(item.itemQty * item.price).toFixed(2)}
                                        </Text>
                                    </View>
                                </View>
                            )}
                       />
                    </View>

                </View>
            </Modal>
  
    )
}

export default Checkout;