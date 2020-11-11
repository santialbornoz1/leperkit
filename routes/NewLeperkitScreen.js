import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Title, Paragraph, DataTable, Subheading, Drawer } from 'react-native-paper';
import Appbar from "../components/Appbar/Appbar";
import SyncStorage from 'sync-storage';


function NewLeperkit({ navigation }) {
  const [lbbSelected, setLbbSelected] = useState(null);

  useEffect(() => {
    const result = SyncStorage.get('lbbSelected');
    if (result) setLbbSelected(result);
  }, [])

  return (
    <>
      <Appbar title="Armar un nuevo leperkit" navigation={navigation} hasBack={true} />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
          <Title style={styles.titleDetailScreen}>Selecciona una opcion</Title>
          <Drawer.Item
            style={lbbSelected ? { backgroundColor: 'green' } : { backgroundColor: '#789dca' }}
            icon={lbbSelected ? "check" : ""}
            label={lbbSelected ? "Lbb elegido: " + lbbSelected : "Todavia no seleccionaste ningun LBB"}
          />
          <TouchableOpacity onPress={() => navigation.navigate('LbbSelected')}>
            <View style={styles.button}>
              <Text>{!lbbSelected ? "Elegir LBB" : "Elegir otro LBB"}</Text>
            </View>
          </TouchableOpacity>
          {lbbSelected ?
            <>
              <TouchableOpacity onPress={() => navigation.navigate('ModulesInstalled')} >
                <View style={styles.button}>
                  <Text>Elegir modulos de {lbbSelected}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('ModulesInstalled')} >
                <View style={styles.button}>
                  <Text>Elegir interfaz de usuario de {lbbSelected}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AddComponentOrExternalCircuit')} >
                <View style={styles.button}>
                  <Text>Agregar componentes o circuitos externos a {lbbSelected}</Text>
                </View>
              </TouchableOpacity>
            </>
            :
            <Text>Para poder ver mas opciones primero debes elegir un LBB</Text>
          }

        </ScrollView>
      </View>
    </>
  )
}


export default NewLeperkit;
