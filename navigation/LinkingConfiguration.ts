import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              TabOneScreen: 'home',
            },
          },
          Characters: {
            screens: {
              TabTwoScreen: 'characters',
            },
          },
          Locations: {
            screens: {
              TabThreeScreen: 'locations',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
