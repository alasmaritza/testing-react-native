import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';

const getName = (name: string) => {
  return name + ' Bo-B' + name.substring(1);
};

type greetingProps = {
  name: string,
};

const Greeting = (props: greetingProps) => {
  const [timeOfDay, setTimeOfDay] = useState(true);
  return (
    <View>
      <Text style={styles.text}>Hello there, {getName(props.name)}!</Text>
      <Text style={styles.text}>Good {timeOfDay ? 'morning': 'evening'}!</Text>
      <Pressable style={styles.button} 
        onPress={() => {
          setTimeOfDay(!timeOfDay)
        }}
      >
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingTop: 6, color:'#042e42'}}>Not {timeOfDay ? 'morning': 'evening'}?</Text>
      </Pressable>
      <Image
        source={timeOfDay ? {uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}: {uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
        style={styles.image}
      />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name='Kitty' />
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
    textAlign: 'center',
    color: '#73e6cd',
    fontWeight: 'bold',
    fontSize: 60,
  },
  button: {
    margin: 'auto',
    padding: 'auto',
    width: 200,
    height: 40,
    backgroundColor: '#73e6cd',
    borderRadius: 8,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    margin: 'auto',
  },
});
