import * as React from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
// import Appbar from "../components/Appbar/Appbar";

function UIScreen({ navigation }) {
  const scrollEnabled = false;
  return (
    <>
    {/* <Appbar/> */}
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} scrollEnabled={scrollEnabled}>
        <Text style={styles.titleDetailScreen}>User Interface</Text>
        <View style={styles.buttons}>
          <Button title="Ver mis UI" onPress={() => navigation.push('UIDetail')} />
        </View>
        <View style={styles.buttons}>
          <Button title="Ver Catalogo" onPress={()=>{ Linking.openURL("http://africau.edu/images/default/sample.pdf")}} />
        </View>
      </ScrollView>
    </View>
    </>
  )
}

export default UIScreen;




