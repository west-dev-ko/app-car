import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
            <Text style={styles.header}>Xe Tự Hành</Text>
            <Text style={styles.header}>Điều Khiển qua Wifi</Text>
            <Text style={styles.headerA}>Nhóm 14</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: '15%',
    backgroundColor: '#fff',
    marginTop: 40,
    justifyContent: 'center',
    alignItems:'center'
  },
  header: {
    color: '#98fb98',
    fontSize: 20
  },
  headerA: {
    color: '#00ffff',
    fontSize: 15
  }
});

