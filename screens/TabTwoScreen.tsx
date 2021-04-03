import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { Text, View } from '../components/Themed';
import { useEffect, useState } from 'react'
import Character from '../components/Character'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function TabTwoScreen() {
  const [characters, setCharacters] = useState<any[]>([])
  const getdata = () => {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      setCharacters(res.data.results)
    }).catch(e => console.error(e))
  }
  useEffect(() => {
    if (characters.length === 0)
      getdata()
  }, [characters])

  const list = () => {
    return characters.map((element, i) => {
      return (
        <View key={i}>
          <Image
            style={{
              width: 50,
              height: 50
            }}
            source={{
              uri: element.image
            }}></Image>
          <Text>{element.name}</Text>
        </View>
      )
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Alien Menu Page</Text>
        {list()}
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView:{
    backgroundColor: 'pink',
    marginHorizontal: 20
  },
  text:{
    fontSize: 30
  }
});
