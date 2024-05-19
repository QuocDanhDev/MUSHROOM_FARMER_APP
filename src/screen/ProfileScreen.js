import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

import RightSVG from '../assets/img/right.svg'
import UserSVG from '../assets/img/user2.svg'
import LockSVG from '../assets/img/lock.svg'
import WorldSVG from '../assets/img/world.svg'
import TrashSVG from '../assets/img/trash.svg'
import LogoutSVG from '../assets/img/logout.svg'

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: "https://danviet.mediacdn.vn/upload/2-2017/images/2017-05-16/149491419692444-coi-xay-gio1.jpg" }}
                />
            </View>
            <View>
                <Text style={{
                    fontSize: 22,
                    fontWeight: '500',
                    color: '#363636',
                    marginLeft: 30,
                    marginTop: 20,
                }}>Hello, Boss</Text>
                <Text style={{
                    fontSize: 12,
                    color: '#CCCCCC',
                    marginLeft: 30,
                }}>admin@gmail.com</Text>
            </View>
            <View style={{ marginTop: 20, }}>
                <TouchableOpacity style={styles.menuItem}>
                    <UserSVG style={{ color: '#363636' }} />
                    <Text style={styles.menuItemText}>Thông tin tài khoản</Text>
                    <RightSVG style={{ color: '#CCCCCC' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <LockSVG style={{ color: '#363636' }} />
                    <Text style={styles.menuItemText}>Đổi mật khẩu</Text>
                    <RightSVG style={{ color: '#CCCCCC' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <WorldSVG style={{ color: '#363636' }} />
                    <Text style={styles.menuItemText}>Ngôn ngữ</Text>
                    <RightSVG style={{ color: '#CCCCCC' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <TrashSVG style={{ color: '#363636' }} />
                    <Text style={[styles.menuItemText, styles.deleteAccount]}>Xóa tài khoản</Text>
                    <RightSVG style={{ color: 'red' }} />
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 150,}}>
                <TouchableOpacity style={styles.menuItemLog}  onPress={() => navigation.navigate('Login')}>
                    <LogoutSVG style={{ color: '#363636' }} />
                    <Text style={styles.menuItemText}>Đăng xuất</Text>
                    <RightSVG style={{ color: '#CCCCCC' }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        width: '100%',
        height: 180,
    },
    image: {
        flex: 1,
        width: '100%',
        height: 50,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    menuItemText: {
        fontSize: 16,
        color: '#363636',
        marginLeft: 20,
        flex: 1,
    },
    deleteAccount: {
        fontSize: 16,
        color: 'red',
    },
    menuItemLog: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
});

export default ProfileScreen;
