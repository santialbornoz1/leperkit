
import React from 'react';
import { Navigation } from 'react-native-navigation';
import styles from '../styles';
import { Title, Subheading, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Picker, TextInput } from 'react-native';
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
import options2 from '../data/selectInput2';

function SimpleView({ navigation }) {
  var item = navigation.getParam("item");
  const [isLoading, setisLoading] = useState(true);
  const [input, setInput] = useState(Object.values(item.in));
  const [output, setOutput] = useState(Object.values(item.out));

  useEffect(() => {
    if (input) {
      setisLoading(false)
    }
  }, [input, output])

  const [selectedValue, setSelectedValue] = useState("");
  const [valueInput, onChangeTextInput] = React.useState(item.in.in1);
  const [valueOutput, onChangeTextOutput] = React.useState(item.out1);


  return (
    <>
      {isLoading ?
        <Spinner />
        :
        <>
          <Appbar title="Simple view" navigation={navigation} hasBack={true} />
          <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
              <Title>{item.name}</Title>
              <Subheading>Estas por agregar estas entradas:</Subheading>
              {input.map((item, index) =>
                <View key={index} style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                  <View style={{ width: "50%", height: 50, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }} onChangeText={text => onChangeTextInput(text)} value={valueInput} />
                  </View>
                  <View style={{ width: "10%", height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>en</Text>
                  </View>
                  <View style={{ alignItems: 'center', width: "30%", height: 50, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }} onChangeText={text => onChangeTextInput(text)} value={"DI01"} editable={false} />
                  </View>
                </View>
              )}
              <Subheading>y estas salidas:</Subheading>
              {output.map((item, index) =>
                <View key={index} style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                  <View style={{ width: "50%", height: 50, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }} onChangeText={text => onChangeTextOutput(text)} value={valueOutput} />
                  </View>
                  <View style={{ width: "10%", height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>en</Text>
                  </View>
                  <View style={{ alignItems: 'center', width: "30%", height: 50, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }} onChangeText={text => onChangeTextInput(text)} value={"DO01"} editable={false} />
                  </View>
                </View>
              )}

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
        </>}
    </>
  )
}

export default SimpleView;
