import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
// import { HomeScreen } from './screens/HomeScreen';
// import { NotificationsScreen } from './screens/NotificationScreen';
import { Icon } from 'native-base';
import Sidebar from './customDrawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import Card  from '../Domus/components/card.js';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 5 }}>
        <Text style={styles.textCenter}>Pagina home</Text>
        <View style={{ margin: 10 }}>
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
        <View style={{ margin: 10 }}>
          <Button title="Ver mis UI" onPress={() => navigation.push('Detalle')} />
        </View>
        <View style={{ margin: 10 }}>
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
        <Text style={styles.titleDetailScreen}>¿De parte se compone?</Text>
          <Card source={"../resources/images/teclado-numerico.jpg"} titleCard={"UI"}
          text="Lorsem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          
          />
          <Card source={"../resources/images/teclado-numerico.jpg"} titleCard={"Modulos"}
          text="¿Qué es Lorem Ipsum?
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos."
          />
          <Card source={"../resources/images/teclado-numerico.jpg"} titleCard={"Componentes o circuitos externos"}
          text="¿Por qué lo usamos?
          Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo 'Contenido aquí, contenido aquí.'"
          />
        <View>
        </View>
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
}, { initialRouteName: 'Detalle' });

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
  textCenter: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawer: {
    backgroundColor: 'black'
  },
  titleDetailScreen:{
    fontSize: 30,
    textAlign: 'center',
  }
});




