import * as React from 'react';
import styles from '../styles';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
import Card from '../../frontend/components/card.js';
import Card2 from "../components/RNPapper/Card/Card";
import Appbar from "../components/Appbar/Appbar"

const DetalleScreen = ({ navigation }) => {
  const scrollEnabled = true;
  const handleChangeInput = (e) => {
    navigation.push('OptionUI');
  }
  const goToModules = (e) => {
    navigation.push('OptionModules');
  }
  const goToExternalCircuits = (e) => {
    navigation.push('OptionExternalCircuits');
  }
  return (
    <>
    {/* <Appbar/> */}
    <View style={styles.container}>
      <ScrollView >
        <Text style={styles.titleDetailScreen}>¿De parte se compone?</Text>
        <Card2 imagePath={'tecladoNumerico'} title="UI"
          subtitle="Lorsem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          onPress={handleChangeInput}
        />
        <Card2 imagePath={'modulos'} title="Modules"
          subtitle="Lorsem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          onPress={goToModules}
        />
        <Card2 imagePath={'circuitosexternos'} title="Circuitos externos"
          subtitle="Lorsem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          onPress={goToExternalCircuits}
        />
        {/* <Card name="UI" imagePath={'tecladoNumerico'} titleCard={"UI"} titleCard2={""}
          text="Lorsem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          onPress={handleChangeInput}
        /> */}
        {/* <Card name="Modules" imagePath={'modulos'} titleCard={"Modulos"} titleCard2={""}
          text="¿Qué es Lorem Ipsum?
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos."
          onPress={handleChangeInput}
        />
        <Card name="ExternalCircuits" imagePath={'circuitosexternos'} titleCard={"Componentes o "} titleCard2={"circuitos externos"}
          text="¿Por qué lo usamos?
          Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras"
          onPress={handleChangeInput}
        /> */}
        <View>
        </View>
      </ScrollView>
    </View>
    </>
  )
}

export default DetalleScreen;




