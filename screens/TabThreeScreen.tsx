import * as React from 'react';
import { StyleSheet, ScrollView, Button, Image } from 'react-native';
import { useEffect, useState } from 'react'
import { Text, View } from '../components/Themed';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function TabOneScreen() {
  const [planets, setPlanets] = useState<any[]>([]);
  const [openResidents, setOpenResidents] = useState(false)
  const [residentsData, setResidentsData] = useState<any[]>([])

  const getdata = () => {
    axios.get("https://rickandmortyapi.com/api/location").then(res => {
      setPlanets(res.data.results)
    }).catch(e => console.error(e))
  };
  useEffect(() => {
    if (planets.length === 0)
      getdata()
  }, [planets]);

  const listResidentsOfPlanet = (residents: any) => {
    let tempresdata: any[] = [...residentsData]
    residents.forEach((residentstring: string) => {
      axios.get(residentstring).then((res) => {
        tempresdata.push(res.data)
        setResidentsData([...tempresdata])
      }).catch((e) => console.error(e))
    })
    setOpenResidents(true)
  }

  const listPlanets = () => {
    return planets.map((element, i) => {
      return (
        <View style={styles.planet} key={i}>
          <Text>{i + 1}</Text>
          <Text style={styles.planetstext}>{element.name}</Text>
          <Text style={styles.planetstext}>{element.type} </Text>
          <Text style={styles.planetstext}>{element.dimension}</Text>
          <Button
            onPress={() => listResidentsOfPlanet(element.residents)}
            title="See Residents"
            color="#841584"
            accessibilityLabel="getresidents"
          />
        </View>
      );
    });
  };

  const renderItem = residentsData.map((item) => (
    <View key={item.id} style={styles.characterView}>
      <Image
        style={{
          width: 80,
          height: 80,
          borderRadius: 50
        }}
        source={{
          uri: item.image
        }}></Image>
      <Text style={styles.planetstext}>{item.name}</Text>
      <Text style={styles.planetstext}>{item.status} </Text>
      <Text style={styles.planetstext}>{item.species} </Text>
    </View>
  ));
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Locations</Text>
        {!openResidents && listPlanets()}
        {openResidents &&
          renderItem
        }
        {
          openResidents && <Button onPress={() => { setOpenResidents(!openResidents); setResidentsData([]) }}
            title="back"
          />
        }
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
  planetstext: {
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    color: 'white',
    alignSelf: 'center',

  },
  planet: {
    flex: 1,
    borderBottomColor: 'green',
    marginBottom: 2,
    backgroundColor: 'black',
    color: 'white',
    padding: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  characterView: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    borderColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 1
  }
});
