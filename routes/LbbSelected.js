import * as React from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { Title, Paragraph, DataTable, Subheading, Snackbar } from 'react-native-paper';
import Appbar from "../components/Appbar/Appbar";
import Table7 from "../components/Tables/Tables7";
import Spinner from "../components/SpinnerLoading/SpinnerLoading"


function LbbSelected({ navigation }) {
  const [ready, setIsReady] = useState(false);
  const [data, setData] = useState("");
  const [snackbarvisible, setSnackBarVisible] = React.useState(false);



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

  function onclick(item) {
    setSnackBarVisible(true);
    setTimeout(function () { navigation.navigate('NewLeperkit') }, 1000); 
  }

  const onDismissSnackBar = () => setSnackBarVisible(false);

  if (ready) {
    return (
      <>
        <Appbar title="Lista de LBBS" navigation={navigation} hasBack={true} />
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
            <Title style={styles.titleDetailScreen}>LBB list</Title>
            <Table7 navigation={navigation} onclick={(item) => onclick(item)} header1={"Modelo"} header2={"Label"} header3={"Name"} header4={"Type"} header5={"LOC"} header6={"DLOC"} header7={"LTZ"} data={data} />
            <Subheading> *Selecciona el leperkit a elegir</Subheading>
          </ScrollView>
        </View>
        <Snackbar
          visible={snackbarvisible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Deshacer',
            onPress: () => {
              // Do something
            },
          }}>
         Lbb elegido.
      </Snackbar>
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


export default LbbSelected;





