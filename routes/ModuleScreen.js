import * as React from 'react';
import styles from '../styles';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
// TAB VIEW
import { TabView, SceneMap } from 'react-native-tab-view';
import Appbar from "../components/Appbar/Appbar"
import { Checkbox } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import AwesomeAlert from 'react-native-awesome-alerts';


const OptionModuleScreen = ({ navigation }) => {
  const [showAlert, setShowAlert] = useState(false)
  const [pinProblem, setPinProblem] = useState("")
  const [dataModules, setDataModules] = useState(false);
  const [models, setModels] = useState(["G1", "G2", "G3", "G4", "R1", "R2", "R3", "Y1", "Y2", "Y3", "Y4", "B1", "B2", "B3", "B4", "B5", "I2C"]);
  const [disableButton, setDisableButton] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  var urlBack = urlBackEnd();

  useEffect(() => {
    fetch(urlBack + "allModules")
      .then((response) => response.json())
      .then((response) => {
        setDataModules(response);
        setisLoading(false)
      })
  }, []);

  function selectingOption(id) {
    dataModules.map((item, index) => {
      if (item._id === id) {
        item.state = !item.state;
        var filtered = dataModules.filter(obj => obj._id !== id)
        filtered.push(item);
        filtered = filtered.sort(function (a, b) {
          return a.id - b.id;
        });
        setDataModules(filtered);
      }
    })
  }

  function onContinue() {
    var models2 =[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    var count = 0;
    var newArray = dataModules.filter(obj => obj.state === true);
    for (var i = 0; i < newArray.length; i++) {
      var currentArray = newArray[i].pins;
      for (const option in currentArray) {
        if (count / 20 === 1 && count % 20 === 0) {       //VUELVE A 0 para volver a recorrer models (G1,G2,G3,G4)
          count = 0;
        }
        console.log("models2" , models2[count])
        if (option === models[count] && currentArray[option] === true) {
          if (models2[count] === false) {
            models2[count] = true;
          }
          else {
            setPinProblem(option);
            setShowAlert(true);
            return
          }
        }
        count++;
      }
    }
  }

function hideAlert(){
  setShowAlert(false)
}
  return (
    <>
      {/* <Appbar/> */}
      <View style={styles.container}>
        {isLoading ?
          <Spinner />
          :
          <ScrollView>
            <Text style={styles.titleDetailScreen}>Modulos</Text>
            <View style={styles.buttons} >
              <Button title="Siguiente" onPress={() => onContinue()} disabled={disableButton} />
            </View>
            {dataModules.map((item, index) =>
              <ScrollView key={index}>
                <View key={index} style={{ backgroundColor: "#fff", marginHorizontal: 16, marginVertical: 5, borderRadius: 16, borderWidth: 3, borderColor: "grey" }}>
                  <Checkbox.Item key={index} color="#2096F3" label={"Modulo: " + item.model} status={item.state ? "checked" : "!checked"} onPress={() => selectingOption(item._id)} />
                </View>
              </ScrollView>
            )}
          </ScrollView>
        }
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="No es posible"
          message= {"El pin " + pinProblem + " es incompatible con los modulos seleccionados" }
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Aceptar"
          confirmButtonColor="#2096F3"
          onConfirmPressed={() => {
            hideAlert();
          }}
        />
      </View>
    </>
  )
}

export default OptionModuleScreen;







