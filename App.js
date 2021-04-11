import React from 'react';
import { LogBox } from 'react-native';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login'
import Sellers from './screens/Sellers'
import TimeSlots from './screens/TimeSlots';

LogBox.ignoreAllLogs();//Ignore all log notifications
const queryClient = new QueryClient()
const Stack = createStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
          <Stack.Screen 
          name="Time Slots" 
          component={TimeSlots} 
          options={{
            headerStyle: {
              backgroundColor: '#84a59d',
            },
            headerTintColor: '#fff',
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
