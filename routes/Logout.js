
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

function Logout({ navigation }) {

alert("Cerrar sesion")

  return (
    <>
      <View style={styles.container}>
        <Text>ASDADA</Text>
      </View>
    </>
  )
}

export default Logout;
