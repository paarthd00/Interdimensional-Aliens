import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { Text, View } from '../components/Themed';
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  const [characters, setCharacters] = useState<any[]>([]);
  const getdata = () => {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      setCharacters(res.data.results)
    }).catch(e => console.error(e))
  };

  useEffect(() => {
    if (characters.length === 0)
      getdata()
  }, [characters]);

  const listCharacters = () => {
    return characters.map((element, i) => {
      return (
        <View key={i} style={styles.characterView}>
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 50
            }}
            source={{
              uri: element.image
            }}></Image>
          <Text style={styles.characterText}>{element.name}</Text>
          <Text style={styles.characterText}>{element.status} </Text>
          <Text style={styles.characterText}>{element.location.name}</Text>
          <Text style={styles.characterText}>{element.species} </Text>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Alien Menu Page</Text>
        {listCharacters()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    backgroundColor: '#007dac',
    marginHorizontal: 20  
  },
  text: {
    fontSize: 30
  },
  characterView: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    borderColor: 'green',
  },
  characterText: {
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    color: 'white'
  }
});
