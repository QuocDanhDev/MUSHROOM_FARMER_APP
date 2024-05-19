import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider } from './src/backend/DataContext';
import AuthStack from './src/navigation/AuthStack';

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </DataProvider>
  );
}
