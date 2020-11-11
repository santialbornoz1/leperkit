import * as React from 'react';
import { useState } from "react";

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CustomDrawerContentComponent from './components/Drawer/Drawer';
import { NavigationContainer , DarkTheme } from '@react-navigation/native';
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
import Logout from './routes/Logout';
import ListLbbsScreen from './routes/ListLbbs';
import ViewLbbDetailScreen from './routes/ViewLbbDetail';
import LbbSelectedScreen from './routes/LbbSelected';
import RegisterScreen from './routes/Register';
import { SafeAreaView, ScrollView } from 'react-native';
import { DrawerItems } from "react-navigation-drawer";
import AuthLoadingScreen from './routes/AuthLoading';
import MyCatalogueScreen from './routes/MyCatalogue';
import AllCatalogueScreen from './routes/AllCatalogue';

//class Hidden extends React.Component {
function Hidden({ navigation }) { return null; }

const AppNavigator = createDrawerNavigator({
  AuthLoading: {
    screen: AuthLoadingScreen,
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />,
      drawerLockMode: 'locked-closed' //NO PERMITE ABRIR DRAWER EN LOGIN
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      drawerLabel: "Home",
      // drawerIcon : <Icon name={'heart'} />
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  ListLbbs: {
    screen: ListLbbsScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  ViewLbbDetail: {
    screen: ViewLbbDetailScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  NewLeperkit: {
    screen: NewLeperkitScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  LbbSelected: {
    screen: LbbSelectedScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  MyUI: {
    screen: MyUIScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  ModulesInstalled: {
    screen: ModulesInstalledScreen,
    navigationOptions: {
      header: null,
      // drawerLabel: <Hidden />
      drawerLabel: "Modulos instalados"
    },
  },
  Detalle: {
    screen: DetalleScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  OptionUI: {
    screen: UIScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  OptionModules: {
    screen: OptionModuleScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  OptionExternalCircuits: {
    screen: OptionExternalCircuitsScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  UIDetail: {
    screen: UIDetailScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  AddNewUI: {
    screen: AddNewUIScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  AllUI: {
    screen: AllUIScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  Plot: {
    screen: PlotScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  ConfigurePlot: {
    screen: ConfigurePlotScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  Assignpin: {                                 //VER
    screen: AssignpinScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  ReadResource: {
    screen: ReadResourceScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  SetResource: {
    screen: SetResourceScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  DeleteResource: {
    screen: DeleteResourceScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  AddComponentOrExternalCircuit: {
    screen: AddComponentOrExternalCircuitScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  MyCatalogue: {
    screen: MyCatalogueScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  AllCatalogue: {
    screen: AllCatalogueScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  AdvancedView: {
    screen: AdvancedViewScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  SimpleView: {
    screen: SimpleViewScreen,
    navigationOptions: {
      header: null,
      drawerLabel: <Hidden />
    },
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      header: null,
      drawerLabel: "Cerrar sesion"
    },
  },
}, {
   contentComponent: CustomDrawerContentComponent,
   unmountInactiveRoutes: true,
   initialRouteName: 'Login'
});

const RootStack = createStackNavigator({
  Main: AppNavigator,
  MiModal: () => <Text>Lalala</Text>
}, { mode: "modal", headerMode: "none" })


const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

export default createAppContainer(RootStack);





