import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TabRoutes from './tab.routes';

import Home from '../pages/Home';
import ListStore from '../pages/ListStore';
import ProducDetails from '../pages/ProducDetails';
import Orders from '../pages/Orders';
import Favorites from '../pages/Favorites';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home" screenOptions={{
      gestureEnabled: true,
      gestureDirection: "horizontal",
      cardStyle: {backgroundColor: '#f5f5f5'},
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <App.Screen
        name="MainBottom"
        component={TabRoutes}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <App.Screen
        options={{
          cardStyle: {backgroundColor: '#f5f5f5'},
          headerShown: false
        }}
        name="Home"
        component={Home}
      />
      <App.Screen
        options={{
          cardStyle: {backgroundColor: '#f5f5f5'},
          headerShown: false
        }}
        name='ListStore'
        component={ListStore}
      />
      <App.Screen
        options={{
          cardStyle: {backgroundColor: '#f5f5f5'},
          headerShown: false
        }}
        name='ProducDetails'
        component={ProducDetails}
      />
      <App.Screen
        options={{
          cardStyle: {backgroundColor: '#f5f5f5'},
          headerShown: false
        }}
        name='Orders'
        component={Orders}
      />
      <App.Screen
        options={{
          cardStyle: {backgroundColor: '#f5f5f5'},
          headerShown: false
        }}
        name='Favorites'
        component={Favorites}
      />
    </App.Navigator>
  </NavigationContainer>
)

export default AppRoutes;
