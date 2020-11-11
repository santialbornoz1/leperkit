import * as React from 'react';
import styles from '../styles';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, Picker, Label } from 'react-native';
import { FAB, Subheading, DataTable } from 'react-native-paper';
import Appbar from "../components/Appbar/Appbar";
import Table3 from '../components/Tables/Tables3';
import { urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import AwesomeAlert from 'react-native-awesome-alerts';


function ModulesInstalled({ navigation }) {
  const [isLoading, setisLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [dataModulesInstalled, setDataModulesInstalled] = useState([]);
  var urlBack = urlBackEnd();


  useEffect(() => {
    console.log("a")
    fetch(urlBack + "api/myUIModules", {
      method: 'POST',
      // body: JSON.stringify(item),
      // headers: {
      //   'Content-Type': 'application/json',
      // }
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("responseData", response);
        // var data = response.filter(items => items._id != item._id)
        setDataModulesInstalled(response);
        setisLoading(false);
        console.log("b")
        // setisLoading(false)
      })
      alert("FALTA -> TRAER LOS MODULOS RELACIONADOS CON EL LBB SELECCIONADO")  
  }, []);


  function OnQuit(item) {
    setShowAlert(true);
    setisLoading(true)
    fetch(urlBack + "api/deleteuimodule", {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("responseData2222222222222", response);
        var data = response.filter(items => items._id != item._id)
        setDataModulesInstalled(data);
        setisLoading(false)
      })

  }
  function hideAlert(item) {
    
  }
  //5f33e6f370d80c3d4ca168a6
  //5f3a8b960da1b12db031efb9
  //5f4c3d6d0f0b0720780d423d
  return (
    <>
      <Appbar title="Tus modulos" navigation={navigation} hasBack={true} />
      <View style={styles.container}>
        {isLoading ?
          <Spinner />
          :
          <ScrollView >
            <Text style={styles.titleDetailScreen}>Estos son tus modulos instalados</Text>
            {/* <Table3 navigation={navigation} onclick={(item) => onclick(item)} header1={"ID"} header2={'Modelo'} header3={"Acción"} data={dataModulesInstalled} isModulesInstalled={true}/> */}
            <View style={{ margin: 15 }}>
              <DataTable style={{ paddingLeft: 0, backgroundColor: "#EEEEEE" }}>
                <DataTable.Header >
                  <DataTable.Title style={{ justifyContent: 'center' }}>ID</DataTable.Title>
                  <DataTable.Title style={{ justifyContent: 'center' }}>Model</DataTable.Title>
                  <DataTable.Title style={{ justifyContent: 'center' }}>Action</DataTable.Title>
                </DataTable.Header>
                {dataModulesInstalled.map((item, index) =>
                  <DataTable.Row key={index} >
                    <DataTable.Cell style={{ justifyContent: 'center' }}>{item._id}</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: 'center' }}>{item.name}</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: 'center' }} onPress={() => OnQuit(item)}>Quitar</DataTable.Cell>
                  </DataTable.Row>
                )}
              </DataTable>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <Button title="(+) Agregar" onPress={() => navigation.navigate('MyUI')} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MyUI')}>
              <View style={styles.button}>
                <Text>Listo</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>      
        }     
      </View>
    </>
  )
}

export default ModulesInstalled;




