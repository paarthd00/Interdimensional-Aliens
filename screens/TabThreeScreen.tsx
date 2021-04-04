import * as React from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
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
    let tempresdata: any[] = [...residentsData];
    residents.forEach((residentstring: string) => {
      axios.get(residentstring).then((res) => {
        tempresdata.push(res)
        setResidentsData(tempresdata)
      }).catch((e) => console.error(e))
    })
    setOpenResidents(true)
  }

  const displayResidents = () => {
    console.log(residentsData)
    // return .map((el, i) => {
    //   return (
    //     <View key={100+i}>
    //       <Text>{el.data.name}</Text>
    //     </View>
    //   )
    // })
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Text style={styles.title}>Locations</Text>

        {!openResidents && listPlanets()}
        {openResidents && displayResidents()}
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
    color: 'white'
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
});
