import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is it all about</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
    color: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
