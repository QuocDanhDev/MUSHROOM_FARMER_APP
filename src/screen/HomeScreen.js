import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  RefreshControl,
  Dimensions,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Feather as IconFeather } from '@expo/vector-icons';
import { DataContext } from '../backend/DataContext';
import moment from 'moment';

const { width } = Dimensions.get('window');

const areas = [
  { name: 'Khu ủ bịch phôi', deviceId: 'DEVICE_1', screen: 'Zone1Screen' },
  { name: 'Khu ủ phôi', deviceId: 'DEVICE_2', screen: 'Zone2Screen' },
  { name: 'Khu buồng ủ combosit', deviceId: 'DEVICE_3', screen: 'Zone3Screen' },
  { name: 'Khu nuôi trồng nấm', deviceId: 'DEVICE_4', screen: 'Zone4Screen' },
];

const HomeScreen = ({ navigation }) => {
  const { data } = useContext(DataContext);
  const [refreshing, setRefreshing] = useState(false);
  const [updateTime, setUpdateTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdateTime(moment().format('YYYY-MM-DD HH:mm:ss'));
    }, 5000); // 5 giây

    return () => clearInterval(interval);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000); // Giả lập thời gian làm mới
  };

  const formatTimestamp = (timestamp) => {
    return moment(timestamp).subtract(7, 'hours').format('YYYY-MM-DD HH:mm:ss');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.updateTimeContainer}>
            <Text style={styles.updateTimeText}>Cập nhật lúc: {updateTime}</Text>
          </View>
          <View style={styles.searchContainer}>
            <IconFeather name='search' size={20} color='#C6C6C6' style={{ marginRight: 10 }} />
            <TextInput placeholder='Tìm kiếm' style={styles.input} />
          </View>
          <View style={styles.headerContainer}>
            <Text style={[styles.headerText, styles.areaName]}>Tên Khu</Text>
            <Text style={[styles.headerText, styles.temp]}>Nhiệt độ môi trường</Text>
            <Text style={[styles.headerText, styles.temp]}>Độ ẩm môi trường</Text>
            <Text style={[styles.headerText, styles.humidity]}>Nhiệt độ giá thể</Text>
          </View>
          {areas.map((area, index) => {
            const deviceData = data[area.deviceId] || {};
            return (
              <TouchableOpacity
                key={index}
                style={styles.areaContainer}
                onPress={() => navigation.navigate(area.screen)}
              >
                <View style={styles.areaDetails}>
                  <Text style={[styles.areaText, styles.areaName]}>{area.name}</Text>
                  {area.deviceId !== 'DEVICE_2' && area.deviceId !== 'DEVICE_3' ? (
                    <>
                      <Text style={[styles.areaText, styles.temp, { color: '#FF6347' }]}>
                        <IconFeather name='thermometer' size={16} /> {deviceData.temperature_sht30 || 'N/A'}°C
                      </Text>
                      <Text style={[styles.areaText, styles.humidity, { color: '#32CD32' }]}>
                        <IconFeather name='droplet' size={16} /> {deviceData.humidity_sht30 || 'N/A'}%
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text style={[styles.areaText, styles.temp, { color: '#FF6347' }]}></Text>
                      <Text style={[styles.areaText, styles.humidity, { color: '#32CD32' }]}></Text>
                    </>
                  )}
                  <Text style={[styles.areaText, styles.temp, { color: '#1E90FF' }]}>
                    <IconFeather name='thermometer' size={16} /> {deviceData.temperature_ds18b20 || 'N/A'}°C
                  </Text>
                </View>
                {deviceData.timestamp && (
                  <Text style={styles.timestampText}>Cập nhật lúc: {formatTimestamp(deviceData.timestamp)}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
  },
  updateTimeContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  updateTimeText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
  input: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#0866FF',
    borderRadius: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  areaContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  areaDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  areaText: {
    fontSize: 16,
    color: '#333',
  },
  areaName: {
    flex: 2,
    textAlign: 'left',
  },
  temp: {
    flex: 1,
    textAlign: 'center',
  },
  humidity: {
    flex: 1,
    textAlign: 'center',
  },
  timestampText: {
    marginTop: 5,
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#333',
  },
});

export default HomeScreen;
