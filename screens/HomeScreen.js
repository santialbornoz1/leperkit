import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import { Button, Header } from 'react-native-elements';


const Boton = (props) => {
    const { texto, background } = props;
    return (
      <TouchableOpacity style={{ backgroundColor: background, justifyContent: 'center', height: 40, borderRadius: 50, margin: 20 }}>
        <Button title={texto} buttonStyle={{ backgroundColor: 'none' }}
        />
      </TouchableOpacity>
    )
  }
  
function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 5}}>
        <TouchableOpacity>
          <Header backgroundColor="#0077CC"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Home', style: { color: '#fff', fontSize: 20 } }}
            rightComponent={{ icon: 'home', color: '#fff' }} />
        </TouchableOpacity>
        <Boton texto={'Quiero armar un nuevo LeperKit'} background="#007bff" />
        <Boton texto={'Quiero configurar un LeperKit ya armado'} background='red' />
        <Boton texto={'Información sobre LBBs'} background='blue' />
        <Boton texto={'Información sobre Módulos'} background='orange' />
        <Boton texto={'Mis LeperKits'} background='green' />
        <Button onPress={() => navigation.navigate('Notifications')} title="Go to notifications" />
        </ScrollView>
      </View>
    );
  }


  
const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      right: 0,
      left: 0,
      right: 0,
      bottom : 0,
      top: 0,
      flex: 1,
      alignSelf: 'center',                           //LE DA 100% DE ANCHO. La otra opc para toda la pantalla es stretch
      justifyContent: 'center',
      backgroundColor: 'black'
    }
  });

  export {HomeScreen};