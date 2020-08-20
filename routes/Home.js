import * as React from 'react';
import styles from '../styles';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
        <Text style={styles.titleDetailScreen}>¿Que deseas realizar?</Text>
        <View style={styles.buttons}>
          <Button success title="Quiero armar un nuevo leperkit" onPress={() => navigation.push('Detalle')} />
        </View>
        <View style={styles.buttons}>
          <Button title="Opcion 2" />
        </View>
        <View style={styles.buttons}>
          <Button title="Opcion 3" />
        </View>
        <View style={styles.buttons}>
          <Button title="Opcion 4" />
        </View>
        <View style={styles.buttons}>
          <Button title="Opcion 5" />
        </View>
      </ScrollView>
    </View>
  )
}


export default HomeScreen;





