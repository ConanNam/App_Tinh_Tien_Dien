import React from 'react';
import {Text, Image, View, StyleSheet, ActivityIndicator} from 'react-native';

const SpalshScreen = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Image
        style={{height: 150, width: 150}}
        source={require('../assets/note.png')}></Image>
    </View>
  );
};
export default SpalshScreen;
