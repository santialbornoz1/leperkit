
import React from 'react';
import { Navigation } from 'react-native-navigation';
import styles from '../styles';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
// TAB VIEW
import { TabView, SceneMap } from 'react-native-tab-view';
import Appbar from "../components/Appbar/Appbar"
import { Checkbox } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import AwesomeAlert from 'react-native-awesome-alerts';
import Input from '../components/Input/Input.js';
import SelectInput from '@tele2/react-native-select-input';  //ANDA SOLO EN ANDROID


function AssignPinScreen({ navigation }) {
  const [showAlert, setShowAlert] = useState(false)
  const [dataModules, setDataModules] = useState(false);
  const [models, setModels] = useState(["G1", "G2", "G3", "G4", "R1", "R2", "R3", "Y1", "Y2", "Y3", "Y4", "B1", "B2", "B3", "B4", "B5", "I2C"]);
  const [disableButton, setDisableButton] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [options, setOptions] = useState();
  const [textPlot, setTextPlot] = useState("Elige una opcion");
  const [numberPlot, setNumberPlot] = useState("");
  var urlBack = urlBackEnd();
  const received = navigation.getParam("options");
  const optionsSelect = [
    {
      value: 'Elige la opcion',
      label: 'Elige la opcion',
    },
    {
      value: '*',
      label: 'Todos los recursos',
    },
    {
      value: 'DO',
      label: 'Digital Output',
    }, {
      value: 'DI',
      label: 'Digital Input',
    }, {
      value: 'DA',
      label: 'Digital to Analog',
    },
    {
      value: 'PW',
      label: 'PWM',
    },
    {
      value: 'TR',
      label: 'TRIAC',
    },
    {
      value: 'AD',
      label: 'Analog to Digital',
    }
  ];
  useEffect(() => {
    setOptions(received);
    fetch(urlBack + "allModules")
      .then((response) => response.json())
      .then((response) => {
        setDataModules(response);
        setisLoading(false)
      })

      .then((response) => console.log(received))
  }, []);

  function selectingOption(id) {

  }

  const onContinue = () => {
    navigation.navigate("ConfigurePlot", { options })
  }

  function hideAlert() {
    setShowAlert(false)
  }

  function handleChangeNumber() {
    console.log("VER FORMS DE CURSO RN")
  }
  function handleChangeText(a, value) {
  }
  return (
    <>
      {/* <Appbar/> */}
      <View style={styles.container}>
        {isLoading ?
          <Spinner />
          :
          <ScrollView>
            <Text style={styles.titleDetailScreen}>Asigna los pines:</Text>
            {received.map((item, index) =>
              <View style={{ backgroundColor: "grey", margin: 10 }}>
                <View style={{ margin: 10 }}>
                  <SelectInput value={textPlot} options={optionsSelect} label={"Asigna el tipo y numero de " + item} placeholder="Elige una opcion" onChange={handleChangeText.bind(this, "value")} />
                  <Input isSelectInput={false} name="description" type={"text"} placeholder={"Numero "} handleChangeInput={handleChangeNumber} editable={true} maxLength={5} keyboardType={'numeric'} />
                </View>
              </View>
            )}
            <View style={styles.buttons} >
              <Button title="Siguiente" onPress={() => onContinue()} disabled={disableButton} />
            </View>
          </ScrollView>
        }
      </View>
    </>
  )
}

export default AssignPinScreen;
