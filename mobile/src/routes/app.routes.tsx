import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../pages/Home';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home">
      <App.Screen
        options={{
          cardStyle: {backgroundColor: '#f5f5f5'},
          headerShown: false
        }}
        name="Home"
        component={Home}
      />
    </App.Navigator>
  </NavigationContainer>
)

export default AppRoutes;
