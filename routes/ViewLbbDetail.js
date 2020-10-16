import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView, Image } from 'react-native';
import Appbar from "../components/Appbar/Appbar";
import assets from '../assets/assets.js';
import AccordeonWithTable from '../components/AccordeonWithTable/AccordeonWithTable';
import Table2 from '../components/Tables/Tables2';
import Table3 from '../components/Tables/Tables3';

function ViewLbbDetail({ navigation, props }) {

    const item = navigation.getParam("item");
    console.log("parameters", item); //RECIBO EL OBJETO ENTERO, con itemId y otherParams

    const dataHarcoded2 = [
        { "id": "asds", "resource": "asdsa" },
        { "id": "asd", "resource": "DIsss02"}
    ];


    const dataHarcoded = [
        { "pin": "31Y1", "resource": "DO01", "description": "Alacena" },
        { "pin": "31Y2", "resource": "DI02", "description": "Heladera" }
    ];

    return (
        <>
            <Appbar title={item.model} navigation={navigation} hasBack={true} />
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
                    <Text style={styles.titleDetailScreen}>{item.model}</Text>
                    <Image source={assets.circuitosexternos} style={{ width: "40%", height: "20%", alignSelf: 'center' }} />
                    <Text style={styles.titleDetailScreen}>Informacion del LBB</Text>
                    <Text style={styles.titleDetailScreen}>Modulos instalados </Text>
                    <Table2 navigation={navigation} header1={"ID"} header2={"Modulo"} data={dataHarcoded2} />
                    <Table3 navigation={navigation} header1={"ID"} header2={'Modelo'} header3={"Descripcion"} data={dataHarcoded} />
                </ScrollView>
            </View>
        </>
    )
}


export default ViewLbbDetail;





