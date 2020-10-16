import * as React from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView } from 'react-native';
import { Title, Paragraph, DataTable, Subheading } from 'react-native-paper';
import Appbar from "../components/Appbar/Appbar";
import Table7 from "../components/Tables/Tables7";

function LbbSelected({ navigation }) {

  const dataHarcoded = [
    { "model": "LBB3X", "label": "AAB", "name": "Alacena", "type": "TLUZ", "LOC": "CCO", "DLOC": "Cocina", "LTZ": "-3" }, 
    { "model": "LBB5X", "label": "AAC", "name": "Heladera", "type": "TLUZ", "LOC": "CCO", "DLOC": "Cocina", "LTZ": "-3" }
  ];
  var data = dataHarcoded;
  return (
    <>
    <Appbar title="Lista de LBBS" navigation={navigation} hasBack={true} />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
          <Text style={styles.titleDetailScreen}>LBB list</Text>
          <Table7 navigation={navigation} onclick={(item) => onclick(item)} header1={"Modelo"} header2={"Label"} header3={"Name"} header4={"Type"} header5={"LOC"} header6={"DLOC"} header7={"LTZ"} data={data}/>
          <Subheading> *Selecciona el leperkit a elegir</Subheading>
        </ScrollView>
      </View>
    </>
  )
}


export default LbbSelected;





