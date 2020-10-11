import * as React from 'react';
import { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import PlotScreen from './routes/PlotScreen';
import ConfigurePlotScreen from './routes/ConfigurePlotScreen';
import AssignpinScreen from './routes/AssignPinScreen';
import ReadResourceScreen from './routes/ReadResourceScreen';
import SetResourceScreen from './routes/SetResourceScreen';
import DeleteResourceScreen from './routes/DeleteResourceScreen';
import NewLeperkitScreen from './routes/NewLeperkitScreen';
import ModulesInstalledScreen from './routes/ModulesInstalledScreen';
import MyUIScreen from './routes/MyUIScreen';
import AssignPinScreen from './routes/AssignPinScreen';
import AddComponentOrExternalCircuitScreen from './routes/AddComponentOrExternalCircuitScreen';
import AdvancedViewScreen from './routes/AdvancedView';
import SimpleViewScreen from './routes/SimpleView';
import Prueba2Screen from './routes/Prueba2';
import ListLbbsScreen from './routes/ListLbbs';
import ViewLbbDetailScreen from './routes/ViewLbbDetail';
import LbbSelectedScreen from './routes/LbbSelected';


const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
     navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeScreen,
  },
  ListLbbs : {
    screen: ListLbbsScreen,
  },
  ViewLbbDetail : {
    screen: ViewLbbDetailScreen,
  },
  NewLeperkit: {
    screen: NewLeperkitScreen,
  },
  LbbSelected: {
    screen: LbbSelectedScreen,
  },
  MyUI: {
    screen: MyUIScreen,
  },
  ModulesInstalled: {
    screen: ModulesInstalledScreen,
  },
  Detalle: {
    screen: DetalleScreen,
  },
  OptionUI: {
    screen: UIScreen,
  },
  OptionModules: {
    screen: OptionModuleScreen,               
  },
  OptionExternalCircuits: {
    screen: OptionExternalCircuitsScreen,               
  },
  UIDetail: {
    screen: UIDetailScreen,
  },
  AddNewUI : {
    screen: AddNewUIScreen,
  }, 
  AllUI : {
    screen: AllUIScreen,
  },
  Plot : {
    screen: PlotScreen,
  },
  ConfigurePlot : {
    screen: ConfigurePlotScreen,
  },
  Assignpin : {
    screen: AssignpinScreen,
  },
  ReadResource : {
    screen: ReadResourceScreen,
  },
  SetResource : {
    screen: SetResourceScreen,
  },
  DeleteResource : {
    screen: DeleteResourceScreen,
  },
  AddComponentOrExternalCircuit : {
    screen: AddComponentOrExternalCircuitScreen,
  },
  AdvancedView : {
    screen: AdvancedViewScreen,
  },
  SimpleView : {
    screen: SimpleViewScreen,
  },
  Prueba2 : {
    screen: Prueba2Screen,
  },
}, { initialRouteName: 'Home' });

export default createAppContainer(AppNavigator);





