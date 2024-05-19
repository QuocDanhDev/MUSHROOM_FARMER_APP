import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { LineChart } from 'react-native-chart-kit';
import { DataContext } from '../../backend/DataContext';

const screenWidth = Dimensions.get('window').width;

export default function Zone1Screen({ navigation }) {
  const data = useContext(DataContext);
  const data1 = data.data1;  // Dữ liệu cho Zone1

  const getColorTemperatureSHT30 = (value) => {
    if (value <= 26) return '#00e0ff'; // Blue for 0-26 degrees
    if (value <= 30) return '#ffa500'; // Orange for 27-30 degrees
    return '#ff0000'; // Red for 31-60 degrees
  };

  const getColorHumiditySHT30 = (value) => {
    if (value <= 75) return '#00e0ff'; // Blue for 0-75%
    if (value <= 80) return '#ffa500'; // Orange for 75-80%
    return '#ff0000'; // Red for >80%
  };

  const getColorTemperatureDS18B20 = (value) => {
    if (value <= 35) return '#00e0ff'; // Blue for 0-35 degrees
    if (value <= 50) return '#ffa500'; // Orange for 35-50 degrees
    return '#ff0000'; // Red for >50 degrees
  };

  if (!data1) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerText}>Khu ủ bịch phôi</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.section, styles.shadow]}>
          <Text style={styles.sectionTitle}>Môi trường</Text>
          <View>
            <View style={styles.row}>
              <View style={styles.gaugeContainer}>
                <Text style={styles.gaugeText}>Nhiệt độ SHT30</Text>
                <AnimatedCircularProgress
                  size={150}
                  width={15}
                  fill={(data1.temperature_sht30 / 60) * 100}
                  tintColor={getColorTemperatureSHT30(data1.temperature_sht30)}
                  backgroundColor="#3d5875"
                  lineCap="round"
                  rotation={180}
                >
                  {() => (
                    <Text style={[styles.gaugeValue, { color: getColorTemperatureSHT30(data1.temperature_sht30) }]}>
                      {data1.temperature_sht30}°C
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.gaugeContainer}>
                <Text style={styles.gaugeText}>Độ ẩm SHT30</Text>
                <AnimatedCircularProgress
                  size={150}
                  width={15}
                  fill={(data1.humidity_sht30 / 100) * 100}
                  tintColor={getColorHumiditySHT30(data1.humidity_sht30)}
                  backgroundColor="#3d5875"
                  lineCap="round"
                  rotation={180}
                >
                  {() => (
                    <Text style={[styles.gaugeValue, { color: getColorHumiditySHT30(data1.humidity_sht30) }]}>
                      {data1.humidity_sht30}%
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Nhiệt độ cao nhất</Text>
                <Text style={[styles.infoValue, { color: '#ff0000' }]}>{data1.high_temp_sht30}°C</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Nhiệt độ thấp nhất</Text>
                <Text style={[styles.infoValue, { color: '#00e0ff' }]}>{data1.low_temp_sht30}°C</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Độ ẩm cao nhất</Text>
                <Text style={[styles.infoValue, { color: '#ff0000' }]}>{data1.high_humi_sht30}%</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Độ ẩm thấp nhất</Text>
                <Text style={[styles.infoValue, { color: '#00e0ff' }]}>{data1.low_humi_sht30}%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.section, styles.shadow]}>
          <Text style={styles.sectionTitle}>Giá thể</Text>
          <View>
            <View style={styles.gaugeContainer}>
              <Text style={styles.gaugeText}>Nhiệt độ DS18B20</Text>
              <AnimatedCircularProgress
                size={150}
                width={15}
                fill={(data1.temperature_ds18b20 / 100) * 100}
                tintColor={getColorTemperatureDS18B20(data1.temperature_ds18b20)}
                backgroundColor="#3d5875"
                lineCap="round"
                rotation={180}
              >
                {() => (
                  <Text style={[styles.gaugeValue, { color: getColorTemperatureDS18B20(data1.temperature_ds18b20) }]}>
                    {data1.temperature_ds18b20}°C
                  </Text>
                )}
              </AnimatedCircularProgress>
            </View>
            <View style={styles.row}>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Nhiệt độ cao nhất</Text>
                <Text style={[styles.infoValue, { color: '#ff0000' }]}>{data1.high_temp_ds18b20}°C</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Nhiệt độ thấp nhất</Text>
                <Text style={[styles.infoValue, { color: '#00e0ff' }]}>{data1.low_temp_ds18b20}°C</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.section, styles.shadow]}>
          <Text style={styles.sectionTitle}>Biểu đồ</Text>
          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View style={[styles.legendIcon, { backgroundColor: '#ff0000' }]} />
              <Text style={styles.legendText}>Nhiệt độ môi trường</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendIcon, { backgroundColor: '#00e0ff' }]} />
              <Text style={styles.legendText}>Độ ẩm môi trường</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendIcon, { backgroundColor: '#800080' }]} />
              <Text style={styles.legendText}>Nhiệt độ giá thể</Text>
            </View>
          </View>
          {chartData ? (
            <ScrollView horizontal>
              <View>
                <LineChart
                  data={{
                    labels: chartData.labels,
                    datasets: chartData.datasets,
                  }}
                  width={screenWidth * 1.5}
                  height={220}
                  chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 1,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: '6',
                      strokeWidth: '2',
                      stroke: '#ffa726',
                    },
                    propsForLabels: {
                      fontSize: 10,
                      rotation: 25,
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                  fromZero={true}
                />
              </View>
            </ScrollView>
          ) : (
            <Text style={styles.loadingText}>Đang tải dữ liệu biểu đồ...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  gaugeContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  gaugeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  gaugeValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loadingText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  infoValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  legendContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendIcon: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
  },
});
