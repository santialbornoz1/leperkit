import * as React from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView } from 'react-native';
// import Appbar from "../components/Appbar/Appbar";
import AccordeonWithTable from '../components/AccordeonWithTable/AccordeonWithTable';
function ViewLbbDetail({ navigation }) {
    return (
        <>
            {/* <Appbar title="Home screen" subtitle="Subtitulo!"/> */}
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
                    <Text style={styles.titleDetailScreen}>LBB :</Text>
                    <Text style={styles.titleDetailScreen}>Informacion del LBB</Text>
                    <Text style={styles.titleDetailScreen}>Modulos instalados :</Text>
                    <AccordeonWithTable />
                </ScrollView>
            </View>
        </>
    )
}


export default ViewLbbDetail;





