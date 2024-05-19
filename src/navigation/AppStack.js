import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './Tabs.js';
import HomeScreen from '../screen/HomeScreen.js';
import Zone1Screen from '../screen/screen_item/Zone1Screen.js';
import Zone2Screen from '../screen/screen_item/Zone2Screen.js';
import Zone3Screen from '../screen/screen_item/Zone3Screen.js';
import Zone4Screen from '../screen/screen_item/Zone4Screen.js';
// import RegisterScreen from '../screen/RegisterScreen.js';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Zone1Screen" component={Zone1Screen} />
      <Stack.Screen name="Zone2Screen" component={Zone2Screen} />
      <Stack.Screen name="Zone3Screen" component={Zone3Screen} />
      <Stack.Screen name="Zone4Screen" component={Zone4Screen} />
      {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
