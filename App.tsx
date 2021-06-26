import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Spinner from 'react-native-loading-spinner-overlay';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setSpinner(!spinner);
    }, 3000);
  });

  if (!isLoadingComplete) {
    <Spinner
    visible={spinner}
    textContent={'Loading...'}
    textStyle={styles.spinnerTextStyle}
  />
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  }
});