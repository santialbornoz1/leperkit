
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
  const [selectedValue, setSelectedValue] = useState("");
  const [valueInput, onChangeTextInput] = React.useState('Boton ON');
  const [valueOutput, onChangeTextOutput] = React.useState('Brillo de la pantalla');

  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
          <Title>Display OLED 128x64</Title>
          <Subheading>Estas por agregar estas entradas:</Subheading>
          <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
            <View style={{ width: "50%", height: 50, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }}>
              <TextInput style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }} onChangeText={text => onChangeTextInput(text)} value={valueInput} />
            </View>
            <View style={{ width: "10%", height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>en</Text>
            </View>
            <View style={{ alignItems: 'center', width: "30%", height: 50, backgroundColor: 'skyblue' }}>
              <Picker selectedValue={selectedValue} style={{ height: 50, width: "100%" }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                {options2.map((item, index) => <Picker.Item label={item.label} value={item.value} />)}
              </Picker>
            </View>
          </View>
          <Subheading>y estas salidas:</Subheading>
          <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
            <View style={{ width: "50%", height: 50, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }}>
              <TextInput style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }} onChangeText={text => onChangeTextOutput(text)} value={valueOutput} />
            </View>
            <View style={{ width: "10%", height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ alignSelf: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>en</Text>
            </View>
            <View style={{ alignItems: 'center', width: "30%", height: 50, backgroundColor: 'skyblue' }}>
              <Picker selectedValue={selectedValue} style={{ height: 50, width: "100%" }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                {options2.map((item, index) => <Picker.Item label={item.label} value={item.value} />)}
              </Picker>
            </View>
          </View>
          <View style={{ margin: 10 }}>
          <Paragraph>Toca sobre los cuadrados azules para cambiar los nombres por defecto, que son los recomendados.</Paragraph>
            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
              <View style={{ width: "46%", backgroundColor: 'powderblue' }}>
              <Button title="Vista Avanzada" onPress={() => navigation.push('AdvancedView')} />
              </View>
            </View>
            <View style={styles.buttons}>
              <Button success title="Aplicar" onPress={() => navigation.push('ModulesInstalled')} />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default SimpleView;