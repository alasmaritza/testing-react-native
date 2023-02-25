import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}}
        style={styles.image}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#73e6cd',
    fontWeight: 'bold',
    fontSize: 60,
  },
  image: {
    width: 200,
    height: 200,
  },
});
