import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView } from 'react-native';
import Table7 from "../components/Tables/Tables7"
import { Title, Paragraph, DataTable, Subheading } from 'react-native-paper';
import Appbar from "../components/Appbar/Appbar";
import Spinner from "../components/SpinnerLoading/SpinnerLoading"

function ListLbbs({ navigation }) {
  const [ready, setIsReady] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("i");
    var asd1 = {
      "assets": "lbb3",
      "dloc": "1falta",
      "model": "1Modelo-Serie",
      "label": "1LLL",
      "loc": "1falta",
      "ltz": "1falta",
      "name": "1Nombre del dispositivo",
      "type": "1falta"
    };
    var asd2 = {
      "assets": "lbb3",
      "dloc": "2falta",
      "model": "2Modelo-Serie",
      "label": "2LLL",
      "loc": "2falta",
      "ltz": "2falta",
      "name": "2Nombre del dispositivo",
      "type": "2falta"
    };
    var asd3 = {
      "assets": "lbb3",
      "dloc": "3falta",
      "model": "3Modelo-Serie",
      "label": "3LLL",
      "loc": "3falta",
      "ltz": "3falta",
      "name": "3Nombre del dispositivo",
      "type": "3falta"
    };
    var asd4 = {
      "assets": "lbb3",
      "dloc": "4falta",
      "model": "4Modelo-Serie",
      "label": "4LLL",
      "loc": "4falta",
      "ltz": "4falta",
      "name": "4Nombre del dispositivo",
      "type": "4falta"
    };
    var all = [];
    all.push(asd1, asd2, asd3, asd4);
    setData(all);

  }, [])
  setTimeout(function () { setIsReady(true) }, 3000);         //TIMEOUT DE 3 SEG PARA ESPERAR

  var all = [];
  setInterval(() => {
    all = data;
    if (data.length < 7 && data.length != 0) {
      var asd5 = {
        "assets": "falta",
        "dloc": "falta",
        "model": "1Modelo-Serie",
        "label": "LLL",
        "loc": "falta",
        "ltz": "falta",
        "name": "1Nombre del dispositivo",
        "type": "falta"
      };

      all.push(asd5)
      // console.log(all)
      setData(all);
      console.log(all.length)
    }

  }, 5001);



  function onclick(item) {
    navigation.navigate('ViewLbbDetail', { item });
  }

  if (ready) {
    return (
      <>
        <Appbar title="Lista de LBBS" navigation={navigation} hasBack={true} />
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
            <Title style={styles.titleDetailScreen}>LBBs disponibles</Title>
            <Table7 navigation={navigation} onclick={(item) => onclick(item)} header1={"Model"} header2={"Label"} header3={"Name"} header4={"Type"} header5={"LOC"} header6={"DLOC"} header7={"LTZ"} data={data} />
            <Subheading> * Selecciona el leperkit a leer</Subheading>
          </ScrollView>
        </View>
      </>
    )
  }
  else {
    return (
      <>
        <Appbar title="Cargando..." navigation={navigation} hasBack={true} />
        <Spinner />
      </>
    )
  }
}


export default ListLbbs;





