import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListStore from '../pages/ListStore';
import Icon from 'react-native-vector-icons/Feather';
import Orders from '../pages/Orders';
import Favorites from '../pages/Favorites';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: '#FF4644',
      inactiveTintColor: '#9f9da9',
      showLabel: false,

    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={24} name="home" color={color} />
        )
      }}
      name="ListStore"
      component={ListStore}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={24} name="shopping-bag" color={color} />
        )
      }}
      name="Orders"
      component={Orders}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={24} name="star" color={color} />
        )
      }}
      name="Favorites"
      component={Favorites}
    />
  </Tab.Navigator>
)

export default TabRoutes;
