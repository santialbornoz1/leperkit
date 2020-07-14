import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions,TouchableHighlight } from 'react-native';
// import { HomeScreen } from './screens/HomeScreen';
// import { NotificationsScreen } from './screens/NotificationScreen';
import { Icon } from 'native-base';
import Sidebar from './customDrawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 5 }}>
        <Text style={styles.textCenter}>Pagina home</Text>
        <View style={{margin: 10}}>
        <Button title="Quiero armar un nuevo leperkit" onPress={() => navigation.push('Detalle')} />
        </View>
      </ScrollView>
    </View>
  )
}

const UIScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 5 }}>
        <Text>Pagina UI</Text>
        <View style={{margin: 10}}>
        <Button title="Ver mis UI" onPress={() => navigation.push('Detalle')} />
        </View>
        <View style={{margin: 10}}>
        <Button title="Ver Catalogo" onPress={() => navigation.push('Detalle')} />
          </View>
      </ScrollView>
    </View>
  )
}


const DetalleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 5 }}>
        <Text>¿De parte se compone?</Text>
          <Text style={styles.textCenter}>UI</Text>
        <TouchableHighlight onPress={() => navigation.push('UI')}>
          <Image
            style={styles.tinyLogo}
            source={require('../Domus/resources/images/teclado-numerico.jpg')}
          />
        </TouchableHighlight >
        <View>
          <Text style={styles.textCenter}>Modulos</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../Domus/resources/images/teclado-numerico.jpg')}
          />
        </View>
        <View>
          <Text style={styles.textCenter}>Componentes o cirucuitos externos</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../Domus/resources/images/teclado-numerico.jpg')}
          />
        </View>
        {/* <View>
          <Text style={styles.textCenter}>Componentes o cirucuitos externos</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../Domus/resources/images/teclado-numerico.jpg')}
          />
        </View> */}
      </ScrollView>
    </View>
  )
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detalle: {
    screen: DetalleScreen,
  },
  UI: {
    screen: UIScreen,
  }
}, { initialRouteName: 'Home' });

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    height: 'auto',
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  textCenter:{
    // backgroundColor: 'red',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawer: {
    backgroundColor: 'black'
  }
});





// const Drawer = createDrawerNavigator();

// const AppDrawer = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Home" drawerContent={props => <Sidebar {...props} />}>
//       <Drawer.Screen name="Home" component={HomeScreen}
//         options={{
//           drawerIcon: ({ }) => (
//             <Icon name="home" style={{ fontSize: 20, color: '#0077CC' }} />
//           ),
//         }}
//       />
//       <Drawer.Screen name="Información sobre LBBs" component={NotificationsScreen}
//         options={{
//           drawerIcon: ({ }) => (
//             <Icon name="options" style={{ fontSize: 20, color: '#0077CC' }} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   )
// }



// export default function App() {
//   return (
//     <NavigationContainer>
//       <AppDrawer />
//     </NavigationContainer>
//   );
// }