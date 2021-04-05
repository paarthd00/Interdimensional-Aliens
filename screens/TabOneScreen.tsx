import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={{
              alignSelf: 'stretch',
              height: 200,
            }}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Rick_and_Morty_characters.jpg/280px-Rick_and_Morty_characters.jpg'
            }}></Image>
          <Text  style={styles.title}>The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington.[5] The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters travelling to other planets and dimensions through portals and Rick's flying car.

          Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary conventions such as school, marriage, love, and family. He frequently goes on adventures with his 14-year-old grandson, Morty, a kind-hearted but easily distressed boy, whose naïve but grounded moral compass plays counterpoint to Rick's Machiavellian ego. Morty's 17-year-old sister, Summer, is a more conventional teenager who worries about improving her status among her peers and sometimes follows Rick and Morty on their adventures. The kids' mother, Beth, is a generally level-headed person and assertive force in the household, though self-conscious about her professional role as a horse surgeon. She is dissatisfied with her marriage to Jerry, a simple-minded and insecure person, who disapproves of Rick's influence over his family.[citation needed]

Different versions of the characters inhabit other dimensions throughout the show's multiverse and their personal characteristics can vary from one reality to another. The show's original Rick identifies himself as "Rick Sanchez of Earth Dimension C-137", in reference to his original universe, but this does not necessarily apply to every other member of the Smith household. For instance, in the first-season episode "Rick Potion #9", after turning the entire world population into monsters, Rick and Morty move to a different dimension, leaving Summer, Beth and Jerry behind.</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
    
  },
  title: {
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
