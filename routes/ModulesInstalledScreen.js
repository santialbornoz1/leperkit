import * as React from 'react';
import styles from '../styles';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
import { FAB, Subheading } from 'react-native-paper';
import Appbar from "../components/Appbar/Appbar";
import Table3 from '../components/Tables/Tables3';


function ModulesInstalled({ navigation }) {
  const [isLoading, setisLoading] = useState(false);
  return (
    <>
      <Appbar title="Tus modulos" navigation={navigation} hasBack={true} />
      <View style={styles.container}>
        <ScrollView >
          <Text style={styles.titleDetailScreen}>Estos son tus modulos instalados</Text>
          <Table3 navigation={navigation} header1={"ID"} header2={'Modelo'} header3={"Acción"} /> 
          <View style={styles.buttons}>
            <Button title="(+) Agregar"  onPress={() => navigation.push('MyUI')}/>
          </View> 
          {isLoading ?
            <>
            </>
            :
            <View style={styles.buttons} >
              <FAB open={true} fabStyle={{ backgroundColor: "blue" }} style={{ backgroundColor: '#2096F3' }}
                label="Listo" disabled={false}
              // icon={'plus'}
              // onPress={() => navigation.push('MyUI')}
              />
            </View>}
        </ScrollView>
      </View>
    </>
  )
}

export default ModulesInstalled;




