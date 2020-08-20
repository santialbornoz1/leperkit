import * as React from 'react';
import styles from '../styles';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
// TAB VIEW
import { TabView, SceneMap } from 'react-native-tab-view';


const UIScreen = ({ navigation }) => {
  const scrollEnabled = false;


  
  return (
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
  )
}

export default UIScreen;




