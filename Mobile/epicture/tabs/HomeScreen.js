import React from 'react';
import { StyleSheet } from 'react-native';
import HomeStack from './homeStack/index';

export default function HomeScreen({navigation}) {
      return (
            <HomeStack/>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  