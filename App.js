import * as React from 'react';
import { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddNewUIScreen from './routes/AddNewUIScreen';
import HomeScreen from './routes/Home';
import LoginScreen from './routes/Login';
import DetalleScreen from './routes/Detail';
import UIScreen from './routes/UI';
import OptionModuleScreen from './routes/ModuleScreen';
import OptionExternalCircuitsScreen from './routes/ExternalCircuitsScreen';
import UIDetailScreen from './routes/UIDetail';
import ModulesScreen from './routes/Modules';
import CardProbingScreen from './routes/CardProbing';
import AllUIScreen from './routes/AllUI';
import PlotScreen from './routes/PlotScreen';
import ConfigurePlotScreen from './routes/ConfigurePlotScreen';
import AssignpinScreen from './routes/AssignPinScreen';
import ReadResourceScreen from './routes/ReadResourceScreen';
import SetResourceScreen from './routes/SetResourceScreen';
import DeleteResourceScreen from './routes/DeleteResourceScreen';
import NewLeperkitScreen from './routes/NewLeperkitScreen';
import ModulesInstalledScreen from './routes/ModulesInstalledScreen';
import MyUIScreen from './routes/MyUIScreen';
import AddComponentOrExternalCircuitScreen from './routes/AddComponentOrExternalCircuitScreen';
import AdvancedViewScreen from './routes/AdvancedView';
import SimpleViewScreen from './routes/SimpleView';
import Prueba2Screen from './routes/Prueba2';
import ListLbbsScreen from './routes/ListLbbs';
import ViewLbbDetailScreen from './routes/ViewLbbDetail';
import LbbSelectedScreen from './routes/LbbSelected';
import RegisterScreen from './routes/Register';

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
     navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
    },
  },
  ListLbbs : {
    screen: ListLbbsScreen,
    navigationOptions: {
      header: null,
    },
  },
  ViewLbbDetail : {
    screen: ViewLbbDetailScreen,
    navigationOptions: {
      header: null,
    },
  },
  NewLeperkit: {
    screen: NewLeperkitScreen,
    navigationOptions: {
      header: null,
    },
  },
  LbbSelected: {
    screen: LbbSelectedScreen,
    navigationOptions: {
      header: null,
    },
  },
  MyUI: {
    screen: MyUIScreen,
    navigationOptions: {
      header: null,
    },
  },
  ModulesInstalled: {
    screen: ModulesInstalledScreen,
    navigationOptions: {
      header: null,
    },
  },
  Detalle: {
    screen: DetalleScreen,
    navigationOptions: {
      header: null,
    },
  },
  OptionUI: {
    screen: UIScreen,
    navigationOptions: {
      header: null,
    },
  },
  OptionModules: {
    screen: OptionModuleScreen, 
    navigationOptions: {
      header: null,
    },              
  },
  OptionExternalCircuits: {
    screen: OptionExternalCircuitsScreen,
    navigationOptions: {
      header: null,
    },               
  },
  UIDetail: {
    screen: UIDetailScreen,
    navigationOptions: {
      header: null,
    },
  },
  AddNewUI : {
    screen: AddNewUIScreen,
    navigationOptions: {
      header: null,
    },
  }, 
  AllUI : {
    screen: AllUIScreen,
    navigationOptions: {
      header: null,
    },
  },
  Plot : {
    screen: PlotScreen,
    navigationOptions: {
      header: null,
    },
  },
  ConfigurePlot : {
    screen: ConfigurePlotScreen,
    navigationOptions: {
      header: null,
    },
  },
  Assignpin : {                                 //VER
    screen: AssignpinScreen,
    navigationOptions: {
      header: null,
    },
  },
  ReadResource : {
    screen: ReadResourceScreen,
    navigationOptions: {
      header: null,
    },
  },
  SetResource : {
    screen: SetResourceScreen,
    navigationOptions: {
      header: null,
    },
  },
  DeleteResource : {
    screen: DeleteResourceScreen,
    navigationOptions: {
      header: null,
    },
  },
  AddComponentOrExternalCircuit : {
    screen: AddComponentOrExternalCircuitScreen,
    navigationOptions: {
      header: null,
    },
  },
  AdvancedView : {
    screen: AdvancedViewScreen,
    navigationOptions: {
      header: null,
    },
  },
  SimpleView : {
    screen: SimpleViewScreen,
    navigationOptions: {
      header: null,
    },
  },
  Prueba2 : {
    screen: Prueba2Screen,
    navigationOptions: {
      header: null,
    },
  },
}, { initialRouteName: 'Home' });

export default createAppContainer(AppNavigator);





