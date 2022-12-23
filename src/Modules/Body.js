import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableWithoutFeedback } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';

export default function Body() {
    function tien(){
        Alert.alert('tiến');
    }
    function trai(){
        Alert.alert('trái');
    }
    function phai(){
        Alert.alert('phải');
    }
    function lui(){
        Alert.alert('lùi');
    }
    function thoi(){
        Alert.alert('thổi');
    }
  return (
    <View style={styles.container}>
        
         <View style={styles.tien}>
        <Button
        color="#7b68ee"
        onPress={tien}
         title="Tiến"/>
         </View>
        <View style={styles.sang}>
        <View style={styles.left}>
        <Button style={styles.btn}
        onPress={trai}
         color="#7b68ee"
         title="Sang Trái"/>
         </View>
         <View style= {styles.right}>
         <Button style={styles.btn}
         onPress={phai}
         color="#7b68ee"
         title="Sang Phải"/>
         </View>
         </View>
         <View style={styles.lui}>
        <Button
        color="#7b68ee"
        onPress={lui}
         title="Lùi"/>
         </View>

         <View style={styles.thoi}>
        <Button
        color="#7b68ee"
        onPress={() => Alert.alert('aa')}
         title="Thổi"/>
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center'

  },
  tien: {
  marginTop: 10,
  width: '40%',
  height: "15%",
  backgroundColor: '#deb887',
  borderRadius: 5,
  justifyContent: 'center',
  },
  sang: {
    marginTop: 10,
    width: '100%',
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 10,
    },

    lui: {
        marginTop: 10,
        width: '40%',
        height: "15%",
        backgroundColor: '#deb887',
        justifyContent: "center",
        borderRadius: 5,
    },

    left : {
        minWidth: "40%",
        height: 80,
        marginRight: 20,
        borderRadius: 5,
        backgroundColor: '#deb887',
        justifyContent: 'center'
    },

    right: {
        minWidth: "40%",
        height: 80,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#deb887',
    },
    thoi: {
        marginTop: 20,
        minWidth: "40%",
        height: 80,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#fff0f5',
    }
});
