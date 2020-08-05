import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
import Card from '../../frontend/components/card.js';

// TAB VIEW

// TAB VIEW

const DetalleScreen = ({ navigation }) => {
  const scrollEnabled = false;
  const handleChangeInput = (e) => {
    navigation.push('UI');
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} scrollEnabled={scrollEnabled}>
        <Text style={styles.titleDetailScreen}>¿De parte se compone?</Text>
        <Card name="UI" imagePath={'tecladoNumerico'} titleCard={"UI"} titleCard2={""}
          text="Lorsem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          onPress={handleChangeInput}
        />
        <Card name="Modules" imagePath={'modulos'} titleCard={"Modulos"} titleCard2={""}
          text="¿Qué es Lorem Ipsum?
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos."
          onPress={handleChangeInput}
        />
        <Card name="ExternalCircuits" imagePath={'circuitosexternos'} titleCard={"Componentes o "} titleCard2={"circuitos externos"}
          text="¿Por qué lo usamos?
          Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras"
          onPress={handleChangeInput}
        />
        <View>
        </View>
      </ScrollView>
    </View>
  )
}

export default DetalleScreen;

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




