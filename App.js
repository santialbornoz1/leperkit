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
import CardProbingScreen from './routes/CardProbing';
import AllUIScreen from './routes/AllUI';



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
  CardProbing: {
    screen: CardProbingScreen,
  },
  AllUI : {
    screen: AllUIScreen,
  },
}, { initialRouteName: 'AllUI' });

export default createAppContainer(AppNavigator);





