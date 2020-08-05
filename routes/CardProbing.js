import * as React from 'react';
import  { useState, useEffect } from 'react';
import CardProbing from '../../frontend/components/Card/Card.js';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';

// TAB VIEW

// TAB VIEW

const CardProbingScreen = (props) => {
  const scrollEnabled = false;

dataPulsadores = {
    tableHead: ['Usa los pines'],
    tableData: [
        ['U1', ''],
        ['U2', 'X'],
        ['U3', 'X'],
        ['U4', 'X'],
        ['U5', 'X'],
    ]
}
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} scrollEnabled={scrollEnabled}>
        <CardProbing imagePath={'ochoPulsadores'} titleCard={"Pulsadores"} text="Descripcion de los pulsadores." 
        data={dataPulsadores} isAvaiable={true}  usedIn="" urlDetail={"http://site.gravitech.us/Components/BUTT-4/BUTT-4_datasheet.pdf"}/>
        <CardProbing imagePath={'tecladoCuatroPorCuatro'} titleCard={"Teclado 4x4"} text="Descripcion de los pulsadores." 
        data={dataPulsadores} isAvaiable={false} usedIn="lampara de pie" urlDetail={"http://site.gravitech.us/Components/BUTT-4/BUTT-4_datasheet.pdf"}/>
      </ScrollView>
    </View>
  )
}

export default CardProbingScreen;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  textCenter: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawer: {
    backgroundColor: 'black'
  },
  titleDetailScreen: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  },
  scene: {
    flex: 1,
  },
  buttons: {
    margin: 10
  }
});




