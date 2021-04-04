import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useEffect, useState } from 'react'
import { Text, View } from '../components/Themed';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function TabOneScreen() {
  const [planets, setPlanets] = useState<any[]>([]);
  const getdata = () => {
    axios.get("https://rickandmortyapi.com/api/location").then(res => {
      setPlanets(res.data.results)
    }).catch(e => console.error(e))
  };
  useEffect(() => {
    if (planets.length === 0)
      getdata()
    console.log(planets)
  }, [planets]);

  const listPlanets = () => {
    return planets.map((element, i) => {
      return (
        <View style={styles.planet} key={i}>
          {i}
          <Text>{element.name}</Text>
          <Text>{element.type} </Text>
          <Text>{element.dimension}</Text>

        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Text style={styles.title}>Locations</Text>
        {listPlanets()}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#007dac',
    marginHorizontal: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  planet: {
    flex: 1,
    borderBottomColor: 'green',
    marginBottom: 2
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
