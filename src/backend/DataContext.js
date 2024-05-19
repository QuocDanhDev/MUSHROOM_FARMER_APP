import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    data1: null,
    data2: null,
    data3: null,
    data4: null
  });
  const [initialized, setInitialized] = useState(false);

  const fetchDeviceData = async (deviceId) => {
    try {
      const response = await axios.get('http://52.221.26.0:4000/device_realtime_data');
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

  const fetchLatestData = async () => {
    try {
      const response = await axios.get('http://52.221.26.0:4000/device_realtime_data');
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

  useEffect(() => {
    if (initialized) {
      const interval = setInterval(async () => {
        try {
          const data1 = await fetchDeviceData('DEVICE_1');
          const data2 = await fetchDeviceData('DEVICE_2');
          const data3 = await fetchDeviceData('DEVICE_3');
          const data4 = await fetchDeviceData('DEVICE_4');
          setData({ data1, data2, data3, data4 });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }, 5000); // 5 giây
      return () => clearInterval(interval);
    }
  }, [initialized]);

  const initializeData = async () => {
    try {
      const data1 = await fetchDeviceData('DEVICE_1');
      const data2 = await fetchDeviceData('DEVICE_2');
      const data3 = await fetchDeviceData('DEVICE_3');
      const data4 = await fetchDeviceData('DEVICE_4');
      setData({ data1, data2, data3, data4 });
      setInitialized(true);
    } catch (error) {
      console.error('Error initializing data:', error);
    }
  };

  return (
    <DataContext.Provider value={{ data, initializeData }}>
      {children}
    </DataContext.Provider>
  );
};
