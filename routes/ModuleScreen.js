
import React from 'react';
import { Navigation } from 'react-native-navigation';
import styles from '../styles';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Avatar, FAB, Chip, Title, Card, List } from 'react-native-paper';
import assets from '../assets/assets.js';


function OptionModuleScreen({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);
  const [viewMore, setViewMore] = React.useState("Ver mas..");
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  const [stateIn, setStateIn] = React.useState(false);
  const [stateOut, setStateOut] = React.useState(false);
  const [stateInOut, setStateInOut] = React.useState(false);
  const [stateSmall, setStateSmall] = React.useState(false);
  const [stateMedium, setStateMedium] = React.useState(false);
  const [stateLarge, setStateLarge] = React.useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
    if (expanded) { setViewMore("Ver mas..") }
    else { setViewMore("Ver menos..") }
  };

  const [showAlert, setShowAlert] = useState(false)
  const [pinProblem, setPinProblem] = useState("")
  const [dataModules, setDataModules] = useState(false);
  const [dataUserOriginalList, setDataUserOriginalList] = useState([]);
  const [models, setModels] = useState(["G1", "G2", "G3", "G4", "R1", "R2", "R3", "Y1", "Y2", "Y3", "Y4", "B1", "B2", "B3", "B4", "B5", "I2C"]);
  const [disableButton, setDisableButton] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  var urlBack = urlBackEnd();
  const LeftContent = props => <Avatar.Icon {...props} style={{ backgroundColor: "blue" }} icon="folder" />
  const RightContent = (props) => <Checkbox.Item key={props.index} color="#2096F3" status={props.state ? "checked" : "!checked"} onPress={() => selectingOption(props._id)} />


  useEffect(() => {
    fetch(urlBack + "allModules")
      .then((response) => response.json())
      .then((response) => {
        setDataModules(response);
        setDataUserOriginalList(response);
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
  const applyChanges = () => {
    setisLoading(false)
    if (stateIn && !stateOut && !stateInOut) {
      var asd = dataModules.filter(obj => obj.type == "In")
      setDataUserOriginalList(asd);
    }
    else if (!stateIn && stateOut && !stateInOut) {
      var asd = dataModules.filter(obj => obj.type == "Out")
      setDataUserOriginalList(asd);
    }
    else if (!stateIn && !stateOut && stateInOut) {
      var asd = dataModules.filter(obj => obj.type == "In-out")
      setDataUserOriginalList(asd);
    }
    else if (stateIn && stateOut && !stateInOut) {
      var asd = dataModules.filter(obj => obj.type == "In" || obj.type == "Out")
      setDataUserOriginalList(asd);
    }
    else if (stateIn && !stateOut && stateInOut) {
      var asd = dataModules.filter(obj => obj.type == "In" || obj.type == "In-out")
      setDataUserOriginalList(asd);
    }
    else if (!stateIn && stateOut && stateInOut) {
      var asd = dataModules.filter(obj => obj.type == "Out" || obj.type == "In-out")
      setDataUserOriginalList(asd);
    }
    else if (stateIn && stateOut && stateInOut) {
      var asd = dataModules;
      setDataUserOriginalList(asd);
    }
    else {
      var asd = dataModules;
      setDataUserOriginalList(asd);
     }

  }
  const chipSelect = (e) => {
    switch (e) {
      case 1:
        setStateIn(!stateIn)
        break;
      case 2:
        setStateOut(!stateOut)
        break;
      case 3:
        setStateInOut(!stateInOut)
        break;
      case 4:
        setStateSmall(!stateSmall)
        break;
      case 5:
        setStateMedium(!stateMedium)
        break;
      default:
        setStateLarge(!stateLarge)
        break;
    }
  }
  const onContinue = () => {
    var models2 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    var count = 0;
    var newArray = dataModules.filter(obj => obj.state === true);
    for (var i = 0; i < newArray.length; i++) {
      var currentArray = newArray[i].pins;
      for (const option in currentArray) {
        if (count / 20 === 1 && count % 20 === 0) {       //VUELVE A 0 para volver a recorrer models (G1,G2,G3,G4)
          count = 0;
        }
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
    if (!showAlert) {
      navigation.push('Plot', {models2});
    }
  }

  function hideAlert() {
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
            <View>
              <Text style={styles.titleDetailScreen}>Elige los modulos a configurar</Text>
            </View>
            <View style={styles.containerChip} >
              <Title>Filtros</Title>
              <View style={styles.rowChip}>
                <Chip style={styles.chip} name="in" selected={stateIn} onPress={() => chipSelect(1)} style={styles.chipNotSelected}>
                  <Text style={styles.chipText}>In</Text>
                </Chip>
                <Chip style={styles.chip} name="out" selected={stateOut} onPress={() => chipSelect(2)} style={styles.chipNotSelected}>
                  <Text style={styles.chipText}>Out</Text>
                </Chip>
                <Chip style={styles.chip} name="inOut" selected={stateInOut} onPress={() => chipSelect(3)} style={styles.chipNotSelected}>
                  <Text style={styles.chipText}>In-Out</Text>
                </Chip>
              </View>
              <View style={styles.rowChip}>
                <Chip style={styles.chip} name="small" selected={stateSmall} onPress={() => chipSelect(4)} style={styles.chipNotSelected}>
                  <Text style={styles.chipText} >Small</Text>
                </Chip>
                <Chip style={styles.chip} name="medium" selected={stateMedium} onPress={() => chipSelect(5)} style={styles.chipNotSelected}>
                  <Text style={styles.chipText} >Medium</Text>
                </Chip>
                <Chip style={styles.chip} name="large" selected={stateLarge} onPress={() => chipSelect(6)} style={styles.chipNotSelected}>
                  <Text style={styles.chipText} >Large</Text>
                </Chip>
              </View>
            </View>
            <View style={styles.buttons}>
              <Button success title="Aplicar cambios" onPress={() => applyChanges()} />
            </View>
            {dataUserOriginalList.map((item, index) =>
              <View key={index}>
                <Card style={styles.cardContainer}>
                  <Card.Title title={"Modulo: " + item.model} left={LeftContent} right={() => RightContent(item)} />
                  <View style={{ alignItems: 'center' }}>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Card.Cover style={styles.tinyLogo} source={assets[item.assets]} />
                  </View>
                  <List.Section>
                    <List.Accordion
                      title={viewMore}
                      style={{ paddingBottom: 0 }}
                      onPress={handlePress}>
                      <List.Item description={item.description} style={{ position: 'relative', bottom: 10, paddingTop: 0, marginTop: 0 }} />
                      <View style={{ paddingLeft: 0, margin: 15, marginHorizontal: 50 }}>
                        <Button success title="Ver datasheet" onPress={() => { Linking.openURL("www..urlDetail"); }} />
                      </View>
                    </List.Accordion>
                  </List.Section>
                </Card>
              </View>
            )}
          </ScrollView>
        }
        {isLoading ?
          <>
          </>
          :
          <View style={styles.buttons} >
            <FAB open={open} icon={open ? 'minus' : 'plus'} fabStyle={{ backgroundColor: "blue" }} style={{ backgroundColor: '#2096F3' }}
              label="Continuar" disabled={disableButton}
              onPress={() => onContinue()}
            />
          </View>}
        <AwesomeAlert show={showAlert} showProgress={false} title="No es posible" message={"El pin " + pinProblem + " es incompatible con los modulos seleccionados"}
          closeOnTouchOutside={false} closeOnHardwareBackPress={false} showConfirmButton={true} confirmText="Aceptar" confirmButtonColor="#2096F3" onConfirmPressed={() => { hideAlert(); }}
        />
      </View>
    </>
  )
}

export default OptionModuleScreen;


