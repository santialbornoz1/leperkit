
import React from 'react';
import { Navigation } from 'react-native-navigation';
import styles from '../styles';
import { Title, Subheading, Paragraph, Appbar } from 'react-native-paper';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Picker, TextInput } from 'react-native';
// TAB VIEW
import { TabView, SceneMap } from 'react-native-tab-view';
import { Checkbox } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import AwesomeAlert from 'react-native-awesome-alerts';
import Input from '../components/Input/Input.js';
import SelectInput from '@tele2/react-native-select-input';  //ANDA SOLO EN ANDROID
import options2 from '../data/selectInput2';

function SimpleView({ navigation }) {
  var item = navigation.getParam("item");

  const [isLoading, setisLoading] = useState(true);
  const [input, setInput] = useState(null);
  const [hasInput, setHasInput] = useState(false);
  const [output, setOutput] = useState(null);
  const [hasOutput, setHasOutput] = useState(false);
  const [pinsUsed, setPinsUsed] = useState();

  useEffect(() => {
    var dataFiltered = item.pins.filter(item => item[Object.keys(item)[0]] === true);
    setPinsUsed(dataFiltered);
    if (item.in && item.out) {
      console.log("1");
      setInput(Object.values(item.in))
      setOutput(Object.values(item.out))
      setHasInput(true);
      setHasOutput(true);
      setisLoading(false)
    }
    if (!item.in && item.out) {
      console.log("2");
      // setInput({});
      setOutput(Object.values(item.out));
      setHasOutput(true);
      setisLoading(false)
    }
    if (item.in && !item.out) {
      console.log("3");
      setInput(Object.values(item.in));
      // setOutput({})
      setHasInput(true);
      setisLoading(false);
    }


  }, [item])

  const [selectedValue, setSelectedValue] = useState("");


  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    )
  }
  else {
    return (
      <>
        {/* <Appbar title="Simple view" navigation={navigation} hasBack={true} /> */}
        <Appbar.Header style={styles.blueColor}>
          <Appbar.BackAction onPress={() => navigation.navigate("MyUI")} />
          <Appbar.Content title="My User interface" />
        </Appbar.Header>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
            <Title>{item.name}</Title>
            {hasInput ?
              <>
                <Subheading>Estas por agregar estas entradas:</Subheading>
                {input.map((item, index) =>
                  <View key={index} style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                    <View style={{ width: "50%", height: 50, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }}>
                      <TextInput style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }} onChangeText={text => onChangeTextInput(text)} value={pinsUsed[index].SR} />
                    </View>
                    <View style={{ width: "10%", height: 50, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>en</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: "30%", height: 50, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                      <TextInput style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }} onChangeText={text => onChangeTextInput(text)} value={"DI01"} editable={false} />
                    </View>
                  </View>
                )}
              </>
              :
              <></>
            }
            {hasOutput ?
              <>
                <Subheading>y estas salidas:</Subheading>
                {output.map((item, index) =>
                  <View key={index} style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                    <View style={{ width: "50%", height: 50, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }}>
                      <TextInput style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }} onChangeText={text => onChangeTextOutput(text)} value={"falta"} />
                    </View>
                    <View style={{ width: "10%", height: 50, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>en</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: "30%", height: 50, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                      <TextInput style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }} onChangeText={text => onChangeTextInput(text)} value={"DO01"} editable={false} />
                    </View>
                  </View>
                )}</>
              :
              <></>
            }
            <View style={{ margin: 10 }}>
              <Paragraph>Toca sobre los cuadrados azules para cambiar los nombres por defecto, que son los recomendados.</Paragraph>
              <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('AdvancedView')}>
                  <View style={styles.button}>
                    <Text>Vista Avanzada</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('ModulesInstalled')}>
                <View style={styles.button}>
                  <Text>Aplicar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </>
    )
  }
}

export default SimpleView;
