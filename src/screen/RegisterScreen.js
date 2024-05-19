import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import InputField from '../components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../assets/img/login.svg';
import GoogleSVG from '../assets/img/google.svg';
import FacebookSVG from '../assets/img/facebook.svg';
import CustomButton from '../components/CustomButton';

import * as Font from 'expo-font';

const RegisterScreen = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    
    // const [fontsLoaded, setFontsLoaded] = useState(false);

    // useEffect(() => {
    //     async function loadFonts() {
    //         try {
    //             await Font.loadAsync({
    //                 'Roboto-Medium': require("../assets/fonts/Roboto-Medium.ttf"),
    //             });
    //             setFontsLoaded(true);
    //         } catch (error) {
    //             console.error('Error loading fonts', error);
    //         }
    //     }
    
    //     loadFonts();
    // }, []);


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>
                    <LoginSVG
                        height={300}
                        width={300}
                        style={{ transform: [{ rotate: '-5deg' }] }}
                    />
                </View>

                <Text
                    style={{
                        // fontFamily: 'Roboto-Medium',
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                    }}>
                    Đăng ký
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 30,
                    }}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            borderColor: '#ddd',
                            borderWidth: 2,
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                        }}>
                        <GoogleSVG height={24} width={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            borderColor: '#ddd',
                            borderWidth: 2,
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                        }}>
                        <FacebookSVG height={24} width={24} />
                    </TouchableOpacity>
                </View>

                <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
                    Hoặc đăng ký với gmail ...
                </Text>

                <InputField
                    label={'Full Name'}
                    icon={
                        <Ionicons
                            name="person-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                />

                <InputField
                    label={'Email ID'}
                    icon={
                        <MaterialIcons
                            name="alternate-email"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    keyboardType="email-address"
                />

                <InputField
                    label={'Password'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    inputType="password"
                />

                <InputField
                    label={'Confirm Password'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    inputType="password"
                />

                <CustomButton label={'Đăng ký'} onPress={() => { }} />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>Đã có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#0866FF', fontWeight: '700' }}> Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                <Text>© 2024 Nguyễn Quốc Danh - Privacy Policy</Text>
            </View>
        </SafeAreaView>
    );
};

export default RegisterScreen;
