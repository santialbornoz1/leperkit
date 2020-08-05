import * as React from 'react';
import { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
import { Icon } from 'native-base';
import Sidebar from './customDrawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddNewUIScreen from './routes/AddNewUIScreen';
import HomeScreen from './routes/Home';
import DetalleScreen from './routes/Detail';
import UIScreen from './routes/UI';
import UIDetailScreen from './routes/UIDetail';
import ModulesScreen from './routes/Modules';
import DownloadPDFScreen from './routes/DownloadPDF';
import CardProbingScreen from './routes/CardProbing';



const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detalle: {
    screen: DetalleScreen,
  },
  UI: {
    screen: UIScreen,
  },
  UIDetail: {
    screen: UIDetailScreen,
  },
  Modules: {
    screen: ModulesScreen,
  },
  AddNewUI : {
    screen: AddNewUIScreen,
  },
  DownloadPDF: {
    screen: DownloadPDFScreen,
  },  
  CardProbing: {
    screen: CardProbingScreen,
  }
}, { initialRouteName: 'UIDetail' });

export default createAppContainer(AppNavigator);


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




