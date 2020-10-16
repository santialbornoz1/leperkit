import * as React from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView } from 'react-native';
import Appbar from "../components/Appbar/Appbar";

function HomeScreen({ navigation }) {

  //dataHarcoded TENGO QUE ENVIAR AL COMPONENTE TABLE 7 PARA PODER MOSTRARLO. MARTIN MANDA TODO EN 1 SOLO STRING, TENGO QUE TRANSFORMARLO NADA MAS
  //Me enviara por ejemplo :  "LBB3X½AAB½Alacena½TLUZ½CCO½Cocina½-3¼"
  const dataHarcoded = [
    { "model": "LBB3X", "label": "AAB", "name": "Alacena", "type": "TLUZ", "LOC": "CCO", "DLOC": "Cocina", "LTZ": "-3" }, 
    { "model": "LBB5X", "label": "AAC", "name": "Heladera", "type": "TLUZ", "LOC": "CCO", "DLOC": "Cocina", "LTZ": "-3" }
  ];

  function onpressInformation() {
    var parameters = { dataHarcoded }
    navigation.push('ListLbbs', { parameters })
  }




  return (
    <>
      <Appbar title="Home screen" subtitle="Bienvenido Santiago" navigation={navigation} hasBack={false} />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
          <Text style={styles.titleDetailScreen}>¿Que deseas realizar?</Text>
          <View style={styles.buttons}>
            <Button title="Ver información de un Leperkit" onPress={() => onpressInformation()} />
          </View>
          <View style={styles.buttons}>
            <Button success title="Armar un nuevo leperkit" onPress={() => navigation.push('NewLeperkit')} />
          </View>
          <View style={styles.buttons}>
            <Button title="Simular armado" />
          </View>
          <View style={styles.buttons}>
            <Button title="Ver mi catalogo" />
          </View>
          <View style={styles.buttons}>
            <Button title="Ver catalogo completo" />
          </View>
        </ScrollView>
      </View>
    </>
  )
}


export default HomeScreen;





