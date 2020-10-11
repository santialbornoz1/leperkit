import * as React from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView } from 'react-native';
import ListAllLbbs from "../components/ListAllLbbs/ListAllLbbs"
import { Title, Paragraph, DataTable, Subheading } from 'react-native-paper';

function LbbSelected({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
          <Text style={styles.titleDetailScreen}>LBB list</Text>
          <ListAllLbbs navigation={navigation}/>
          <Subheading> *Selecciona el leperkit a elegir</Subheading>
        </ScrollView>
      </View>
    </>
  )
}


export default LbbSelected;





