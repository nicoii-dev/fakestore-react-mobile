import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import fireBaseResetPassStyle from '../../style/fireBaseResetPassStyle';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { FireBaseResetPassword } from '../../library/helpers/firebase/auth/FireBaseResetPassword';
import { checkEmailValid } from '../../library/helpers/emailValidator/checkEmailValid';
import Toast from 'react-native-simple-toast';
import { EasingNode } from 'react-native-reanimated';
import { Slider } from 'react-native-elements';

const FireBaseResetPassModal = ({
    showModal,
    setShowModal
}) => {
    const { control, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await FireBaseResetPassword.resetPassword(data.email)
            setShowModal(false);
            Toast.show('Your request on password reset is successful. Please check your email.', Toast.LONG, [
                'UIAlertController',
            ]);
        } catch (error) {
            console.log(error.code)
            if(error.code === 'auth/user-not-found'){
                Toast.show('Email does not exist', Toast.LONG, [
                    'UIAlertController',
                ]);
            }
        }
    }

    return (
        <View style={fireBaseResetPassStyle.container}>
            <Modal 
                visible={showModal} 
                transparent={true}
                animationType={'slide'}>
                <View style={fireBaseResetPassStyle.modalView}>
                    <View style={fireBaseResetPassStyle.modalContainer}>
                        <View style={fireBaseResetPassStyle.closeIconContainer}>
                            <IonIcons 
                                name={'close-circle-outline'} size={30} 
                                style={fireBaseResetPassStyle.closeIcon}
                                onPress={ () => {setShowModal(false)} }/>
                            <Text style={fireBaseResetPassStyle.closeIconText}>Reset Password</Text>
                        </View>
                        <Controller
                            control={control}
                            rules={{
                            required: {
                                value: true,
                                message: 'This is required',
                            },
                            pattern: {
                                value: checkEmailValid(),
                                message: 'Invalid email',
                              }
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style={fireBaseResetPassStyle.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Email"
                            />
                            )}
                            name="email"
                            defaultValue=""
                        />
                        {errors.email && (
                            <Text style={fireBaseResetPassStyle.errorText}>{errors.email?.message}</Text>
                        )}
                        <TouchableOpacity 
                            style={fireBaseResetPassStyle.button}
                            onPress={handleSubmit(onSubmit)}>
                            <Text style={fireBaseResetPassStyle.buttonTitle}>
                                Reset
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default FireBaseResetPassModal;