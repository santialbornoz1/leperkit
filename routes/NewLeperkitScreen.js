import * as React from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Title, Paragraph, DataTable, Subheading, Drawer } from 'react-native-paper';
import Appbar from "../components/Appbar/Appbar";

function NewLeperkit({ navigation }) {

  return (
    <>
      <Appbar title="Armar un nuevo leperkit" navigation={navigation} hasBack={true} />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
          <Title style={styles.titleDetailScreen}>Selecciona una opcion</Title>
          <Drawer.Item
            style={{ backgroundColor: '#789dca' }}
            icon="check"
            label="Lbb elegido: LBB3 Label Name"
          />
          <TouchableOpacity onPress={() => navigation.navigate('LbbSelected')}>
            <View style={styles.button}>
              <Text>Elegir LBB</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ModulesInstalled')} >
            <View style={styles.button}>
              <Text>Elegir modulos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ModulesInstalled')} >
            <View style={styles.button}>
              <Text>Elegir interfaz de usuario</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AddComponentOrExternalCircuit')} >
            <View style={styles.button}>
              <Text>Agregar componentes o circuitos externos</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  )
}


export default NewLeperkit;
