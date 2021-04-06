import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Sellers from './screens/Sellers'
import TimeSlots from './screens/TimeSlots';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sellers"
          component={Sellers}
          options={{ title: 'All Available Sellers' }}
        />
        <Stack.Screen name="Time Slots" component={TimeSlots} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
