import * as React from 'react';
import styles from '../styles';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
import Card from '../../frontend/components/card.js';
import Card2 from "../components/RNPapper/Card/Card";
import Appbar from "../components/Appbar/Appbar"


function DetalleScreen({ navigation }) {
  const handleChangeInput = (e) => {
    navigation.navigate('OptionUI');
  }
  const goToModules = (e) => {
    navigation.navigate('OptionModules');
  }
  const goToExternalCircuits = (e) => {
    navigation.navigate('OptionExternalCircuits');
  }
  return (
    <>
    <Appbar title="¿De parte se compone?" navigation={navigation} hasBack={true} />
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
          <View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default DetalleScreen;




