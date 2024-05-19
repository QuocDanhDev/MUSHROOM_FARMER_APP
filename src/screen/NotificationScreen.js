import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import CheckSVG from '../assets/img/check.svg';

const NotificationScreen = () => {
    const handlePress = () => {
        console.log('Check icon pressed');
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <TouchableOpacity style={styles.checkIconContainer} onPress={handlePress}>
                        <CheckSVG width={24} height={24} />
                    </TouchableOpacity>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>Không có thông báo</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    textStyle: {
        fontSize: 16,
        color: '#333'
    }
});

export default NotificationScreen;
