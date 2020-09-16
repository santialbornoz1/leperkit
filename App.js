import * as React from 'react';
import { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddNewUIScreen from './routes/AddNewUIScreen';
import HomeScreen from './routes/Home';
import DrawerScreen from './routes/DrawerScreen';
import LoginScreen from './routes/Login';
import DetalleScreen from './routes/Detail';
import UIScreen from './routes/UI';
import OptionModuleScreen from './routes/ModuleScreen';
import OptionExternalCircuitsScreen from './routes/ExternalCircuitsScreen';
import UIDetailScreen from './routes/UIDetail';
import ModulesScreen from './routes/Modules';
import CardProbingScreen from './routes/CardProbing';
import AllUIScreen from './routes/AllUI';
// import PlotScreen from './routes/PlotScreen';
// import { navigationRef } from './navigation/RootNavigation';

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    // navigationOptions:{
    //   headerShown: false
    // }
     navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeScreen,
    // navigationOptions: {
    //   header: null,
    // },
  },
  // Drawer: {
  //   screen: DrawerScreen,
  //   // navigationOptions: {
  //   //   header: null,
  //   // },
  // },
  Detalle: {
    screen: DetalleScreen,
    // navigationOptions: {
    //   header: null,
    // },
  },
  OptionUI: {
    screen: UIScreen,
    // navigationOptions: {
    //   header: null,
    // },
  },
  OptionModules: {
    screen: () => <OptionModuleScreen/>,               //FALTA
    // navigationOptions: {
    //   header: null,
    // },
  },
  OptionExternalCircuits: {
    screen: OptionExternalCircuitsScreen,               //FALTA
    // navigationOptions: {
    //   header: null,
    // },
  },
  UIDetail: {
    screen: UIDetailScreen,
    // navigationOptions: {
    //   header: null,
    // },
  },
  AddNewUI : {
    screen: AddNewUIScreen,
    // navigationOptions: {
    //   header: null,
    // },
  }, 
  AllUI : {
    screen: AllUIScreen,
    // navigationOptions: {
    //   header: null,
    // },
  },
  // Plot : {
  //   screen: PlotScreen,
  //   // navigationOptions: {
  //   //   header: null,
  //   // },
  // },
}, { initialRouteName: 'Login' });

export default createAppContainer(AppNavigator);





