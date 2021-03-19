/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SpalshScreen from './components/SplashScreen';
import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import ElectricBill from './components/ElectricBill';
import TabNavigation from './components/BottomNavigation';

const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  if (splash) {
    return <SpalshScreen></SpalshScreen>;
  } else {
    return (
      <>
        <SafeAreaView style={styles.Container}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <TabNavigation />
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F4F4F7',
  },
});

export default App;
