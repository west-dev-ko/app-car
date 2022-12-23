import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
import Header from './src/Modules/Header';
import Body from './src/Modules/Body';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Header/>
       <Body />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
