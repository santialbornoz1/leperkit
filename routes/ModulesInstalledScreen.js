import * as React from 'react';
import styles from '../styles';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
import {FAB} from 'react-native-paper';

function ModulesInstalled({ navigation }) {
  const [isLoading, setisLoading] = useState(false);
  return (
    <>
      {/* <Appbar/> */}
      <View style={styles.container}>
        <ScrollView >
          <Text style={styles.titleDetailScreen}>Tus modulos instalados</Text>
          <View style={{ margin: 10, flexDirection: "row" }}>
            <Text style={{ textAlign: "center", height: 50, width: "28%" }}>ID</Text>
            <Text style={{ textAlign: "center", height: 50, width: "50%" }}>Modelo</Text>
            <Text style={{ textAlign: "center", height: 50, width: "22%" }}>Quitar</Text>
          </View>
          <View style={{ margin: 10, flexDirection: "row" }}>
            <Text style={{ textAlign: "center", height: 50, width: "28%" }}>ID</Text>
            <Text style={{ textAlign: "center", height: 50, width: "50%" }}>ID</Text>
            <Text style={{ textAlign: "center", height: 50, width: "22%" }}>(X)</Text>
          </View>
          <View style={{ margin: 10, flexDirection: "row" }}>
            <Text style={{ textAlign: "center", height: 50, width: "28%" }}>ID</Text>
            <Text style={{ textAlign: "center", height: 50, width: "50%" }}>ID</Text>
            <Text style={{ textAlign: "center", height: 50, width: "22%" }}>(X)</Text>
          </View>
          <View style={{ margin: 10, flexDirection: "row" }}>
            <Text style={{ textAlign: "center", height: 50, width: "28%" }}>ID</Text>
            <Text style={{ textAlign: "center", height: 50, width: "50%" }}>ID</Text>
            <Text style={{ textAlign: "center", height: 50, width: "22%" }}>(X)</Text>
          </View>
          <View style={{ margin: 10, flexDirection: "row" }}>
            <Text style={{ textAlign: "center", height: 50, width: "28%" }}>ID</Text>
            <Text style={{ textAlign: "center", height: 50, width: "50%" }}>ID</Text>
            <Text style={{ textAlign: "center", height: 50, width: "22%" }}>(X)</Text>
          </View>
          <View style={{ margin: 10, flexDirection: "row" }}>
            <Text style={{ textAlign: "center", height: 50, width: "28%" }}>ID</Text>
            <Text style={{ textAlign: "center", height: 50, width: "50%" }}>ID</Text>
            <Text style={{ textAlign: "center", height: 50, width: "22%" }}>(X)</Text>
          </View>
          <View style={styles.buttons}>
            <Button title="(+) Agregar"  onPress={() => navigation.push('MyUI')}/>
          </View>
          {isLoading ?
          <>
          </>
          :
          <View style={styles.buttons} >
            <FAB open={true}  fabStyle={{ backgroundColor: "blue" }} style={{ backgroundColor: '#2096F3' }}
              label="Listo" disabled={false}
              // icon={'plus'}
              // onPress={() => navigation.push('MyUI')}
            />
          </View>}
        </ScrollView>
      </View>
    </>
  )
}

export default ModulesInstalled;




