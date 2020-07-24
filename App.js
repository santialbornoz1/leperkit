import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import { Icon } from 'native-base';
import Sidebar from './customDrawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import Card from '../Domus/components/card.js';
import CardUI from '../Domus/components/cardUI.js';


// TAB VIEW
import { TabView, SceneMap } from 'react-native-tab-view';
dataPulsadores = {
  tableHead: ['Usa los pines'],
  tableData: [
    ['U1', 'X'],
    ['U2', 'X'],
    ['U3', 'X'],
    ['U4', 'X'],
    ['U5', 'X'],
  ]
}

dataTeclado4x4 = {
  tableHead: ['Usa los pines'],
  tableData: [
    ['U1', ''],
    ['U2', 'X'],
    ['U3', 'X'],
    ['U4', '']
  ]
}
//PESTAÑAS UI
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    <CardUI imagePath={'ochoPulsadores'} titleCard={"Pulsadores"} titleCard2={""}
      text="Descripcion de los pulsadores."
      data={dataPulsadores}
      isAvaiable={true}

    />
    {/* <CardUI imagePath={'tecladoCuatroPorCuatro'} titleCard={"Teclado 4x4"} titleCard2={""}
      text="Descripcion del teclado 4x4."
      data={dataTeclado4x4}
      isAvaiable={false}
      usedIn={"'Lampara de pie'"}
    />
    <CardUI imagePath={'tecladoNumerico'} titleCard={"Otro"} titleCard2={""}
      text="Descripcion de otro."
      data={dataPulsadores}
      isAvaiable={true}
      usedIn={"'Lampara de pie'"}
    />
    <CardUI imagePath={'tecladoNumerico'} titleCard={"Otro"} titleCard2={""}
      text="Descripcion de otro."
      data={dataPulsadores}
      isAvaiable={false}
      usedIn={"'Lampara de pie'"}
    /> */}
    <View style={styles.buttons}>
      <Button title="Agregar un nuevo UI a 'Mis UI'"></Button>
    </View>
    <View style={styles.buttons}>
      <Button title="Ver Catalogo Del Market"></Button>
    </View>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    <CardUI imagePath={'displayOLED'} titleCard={"Display OLED 128x64"} titleCard2={""}
      text="Descripcion del display."
      data={dataPulsadores}
      isAvaiable={true}
      usedIn={"'Lampara de pie'"}
    />
    <CardUI imagePath={'cuatroporsietesegm'} titleCard={"4 Display  7 seg Reloj"} titleCard2={""}
      text="Descripcion del display."
      data={dataPulsadores}
      isAvaiable={false}
      usedIn={"'Panel de control'"}
    />
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    <CardUI imagePath={'teclado4x4yLeds'} titleCard={"Teclado 4x4 + Leds"} titleCard2={""}
      text="Descripcion de teclado 4x4 + leds."
      data={dataPulsadores}
      isAvaiable={true}
      usedIn={"'Lampara de pie'"}
    />
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };
// TAB VIEW



const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 5 }}>
        <Text style={styles.titleDetailScreen}>¿Que deseas realizar?</Text>
        <View style={styles.buttons}>
          <Button title="Quiero armar un nuevo leperkit" onPress={() => navigation.push('Detalle')} />
        </View>
        <View style={styles.buttons}>
          <Button title="Opcion 2" />
        </View>
        <View style={styles.buttons}>
          <Button title="Opcion 3" />
        </View>
        <View style={styles.buttons}>
          <Button title="Opcion 4" />
        </View>
        <View style={styles.buttons}>
          <Button title="Opcion 5" />
        </View>
      </ScrollView>
    </View>
  )
}

const DetalleScreen = ({ navigation }) => {
  const scrollEnabled = false;
  const handleChangeInput = (e) => {
    // console.log(e.target);
    navigation.push('UI');
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} scrollEnabled={scrollEnabled}>
        <Text style={styles.titleDetailScreen}>¿De parte se compone?</Text>
        <Card name="UI" imagePath={'tecladoNumerico'} titleCard={"UI"} titleCard2={""}
          text="Lorsem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          onPress={handleChangeInput}
        />
        <Card name="Modules" imagePath={'modulos'} titleCard={"Modulos"} titleCard2={""}
          text="¿Qué es Lorem Ipsum?
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos."
          onPress={handleChangeInput}
        />
        <Card name="ExternalCircuits" imagePath={'circuitosexternos'} titleCard={"Componentes o "} titleCard2={"circuitos externos"}
          text="¿Por qué lo usamos?
          Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras"
          onPress={handleChangeInput}
        />
        <View>
        </View>
      </ScrollView>
    </View>
  )
}

const UIScreen = ({ navigation }) => {
  const scrollEnabled = false;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} scrollEnabled={scrollEnabled}>
        <Text style={styles.titleDetailScreen}>User Interface</Text>
        <View style={styles.buttons}>
          <Button title="Ver mis UI" onPress={() => navigation.push('UIDetail')} />
        </View>
        <View style={styles.buttons}>
          <Button title="Ver Catalogo" onPress={() => navigation.push('Detalle')} />
        </View>
      </ScrollView>
    </View>
  )
}

const UIDetailScreen = ({ navigation }) => {
  const scrollEnabled = false;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'In' },
    { key: 'second', title: 'Out' },
    { key: 'third', title: 'In & Out' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} scrollEnabled={scrollEnabled}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </ScrollView>
    </View>
  )
}

const ModulesScreen = ({ navigation }) => {
  const scrollEnabled = false;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'In' },
    { key: 'second', title: 'Out' },
    { key: 'third', title: 'In & Out' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 5 }} scrollEnabled={scrollEnabled}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
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
  },
  UIDetail: {
    screen: UIDetailScreen,
  },
  Modules: {
    screen: ModulesScreen
  }
}, { initialRouteName: 'Home' });

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




