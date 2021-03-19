import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ElectricBill from './ElectricBill';
import Price from './Price';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tính Tiền Điện"
      activeColor="blue"
      labelStyle={{fontSize: 12}}
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Tính Tiền Điện"
        component={ElectricBill}
        options={{
          tabBarLabel: 'Tính Tiền Điện',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Đơn Giá"
        component={Price}
        options={{
          tabBarLabel: 'Đơn Giá',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="menu" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default TabNavigation;
