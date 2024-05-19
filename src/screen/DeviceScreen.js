import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

import AddSVG from '../assets/img/add.svg';

const DeviceScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.addButton}>
                    <AddSVG width={24} height={24} />
                    <Text style={styles.addText}>Add device</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#C6C6C6',
    },
    addText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    }
});

export default DeviceScreen;
