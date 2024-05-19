import React, { useContext, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import LoginSVG from '../assets/img/login.svg';
import GoogleSVG from '../assets/img/google.svg';
import FacebookSVG from '../assets/img/facebook.svg';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

import { DataContext } from '../backend/DataContext';

const LoginScreen = ({ navigation }) => {
    const { initializeData } = useContext(DataContext);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        const success = true; // Giả sử đăng nhập thành công
        if (success) {
            await initializeData();
            navigation.navigate('AppStack');
        }
        setLoading(false);
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 25 }}>
                <View style={{ paddingHorizontal: 25 }}>
                    <View style={{ alignItems: 'center' }}>
                        <LoginSVG height={300} width={300} />
                    </View>
                    <Text
                        style={{
                            fontSize: 28,
                            fontWeight: '500',
                            color: '#333',
                            marginBottom: 30,
                        }}>
                        Đăng nhập
                    </Text>
                    <InputField
                        label={'Username'}
                        icon={
                            <MaterialIcons
                                name="alternate-email"
                                size={20}
                                color="#0866FF"
                                style={{ marginRight: 5 }}
                            />
                        }
                        keyboardType="default"
                    />
                    <InputField
                        label={'Password'}
                        icon={
                            <Ionicons
                                name="ios-lock-closed-outline"
                                size={20}
                                color="#0866FF"
                                style={{ marginRight: 5 }}
                            />
                        }
                        inputType="password"
                        fieldButtonLabel={"Quên?"}
                        fieldButtonFunction={() => { }}
                    />
                    <CustomButton label={"Đăng nhập"} onPress={handleLogin} />
                    {loading && <ActivityIndicator size="large" color="#0000ff" />}
                    <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
                        Hoặc đăng nhập với ...
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

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: 30,
                        }}>
                        <Text>Lần đầu đến ứng dụng ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{ color: '#0866FF', fontWeight: '700' }}> Đăng kí</Text>
                        </TouchableOpacity>
                    </View>
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

export default LoginScreen;
