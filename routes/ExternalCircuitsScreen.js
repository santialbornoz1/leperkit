import * as React from 'react';
import styles from '../styles';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';


function OptionExternalCircuitsScreen({ navigation }) {
  const scrollEnabled = false;
  return (
    <>
      {/* <Appbar/> */}
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} scrollEnabled={scrollEnabled}>
          <Text style={styles.titleDetailScreen}>EXTERNAL CIRCUITS</Text>
          <View style={styles.buttons}>
            <Button title="EXTERNAL" onPress={() => navigation.push('UIDetail')} />
          </View>
          <View style={styles.buttons}>
            <Button title="EXTERNAL" onPress={() => { Linking.openURL("http://africau.edu/images/default/sample.pdf") }} />
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default OptionExternalCircuitsScreen;




