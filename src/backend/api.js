import axios from 'axios';

const API_URL = 'http://52.221.26.0:4000/device_realtime_data';

export const fetchDeviceData = async (deviceId) => {
  try {
    const response = await axios.get(API_URL);
    const filteredData = response.data.filter(item => item.device === deviceId);
    if (!filteredData.length) {
      throw new Error(`No data found for device ID: ${deviceId}`);
    }
    const latestData = filteredData.reduce((latest, current) => {
      return new Date(latest.timestamp) > new Date(current.timestamp) ? latest : current;
    }, filteredData[0]);
    return latestData;
  } catch (error) {
    console.error(`Error fetching data for device ${deviceId}:`, error);
    throw error;
  }
};

export const fetchLatestData = async () => {
  try {
    const response = await axios.get(API_URL);
    const sortedData = response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    return sortedData.slice(0, 10).map(item => {
      item.timestamp = moment(item.timestamp).subtract(7, 'hours').format();
      return item;
    });
  } catch (error) {
    console.error('Error fetching latest data:', error);
    throw error;
  }
};

export const fetchDevice1Data = () => fetchDeviceData('DEVICE_1');
export const fetchDevice2Data = () => fetchDeviceData('DEVICE_2');
export const fetchDevice3Data = () => fetchDeviceData('DEVICE_3');
export const fetchDevice4Data = () => fetchDeviceData('DEVICE_4');
