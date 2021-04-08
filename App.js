import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login'
import Sellers from './screens/Sellers'
import TimeSlots from './screens/TimeSlots';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sellers"
          component={Sellers}
          options={{ 
            title: 'All Available Sellers',
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: '#84a59d',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Time Slots" component={TimeSlots} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
