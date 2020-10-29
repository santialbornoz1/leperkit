import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView, Image } from 'react-native';
import { Title, Paragraph, DataTable, Subheading } from 'react-native-paper';
import Appbar from "../components/Appbar/Appbar";
import assets from '../assets/assets.js';
import AccordeonWithTable from '../components/AccordeonWithTable/AccordeonWithTable';
import { urlBackEnd } from "../src/Functions/functions";
import Table2 from '../components/Tables/Tables2';
import Table3 from '../components/Tables/Tables3';
import Spinner from "../components/SpinnerLoading/SpinnerLoading";


function ViewLbbDetail({ navigation, props }) {
    const [isLoading, setisLoading] = useState(true);
    const [dataModulesInstalled, setDataModulesInstalled] = useState([]);
    const [ready, setIsReady] = useState(false);
    const [data, setData] = useState("");
    const item = navigation.getParam("item");
    console.log("item", item);
    var urlBack = urlBackEnd();
    // console.log("parameters", item); //RECIBO EL OBJETO ENTERO, con itemId y otherParams


    useEffect(() => {
        fetch(urlBack + "api/myUIModules", {
            method: 'POST',
        })
            .then((response) => response.json())
            .then((responseData) => {
                setDataModulesInstalled(responseData);
                //   console.log(responseData)
                setisLoading(false)
            })
        var asd1 = "[ID]: 1Modelo-Serie¼[LABEL]: 1AA¼[TYPE]: T1XX¼[NAME]: 1Nombre del dispositivo¼[LOC]: 1LXXX¼[DLOC]: 1Descripcion de la ubicacion¼[LTZ]: 1XX½";
        var asd2 = "[ID]: 2Modelo-Serie¼[LABEL]: 2AA¼[TYPE]: T2XX¼[NAME]: 2Nombre del dispositivo¼[LOC]: 2LXXX¼[DLOC]: 2Descripcion de la ubicacion¼[LTZ]: 2XX½";
        var asd3 = "[ID]: 3Modelo-Serie¼[LABEL]: 3AA¼[TYPE]: T3XX¼[NAME]: 3Nombre del dispositivo¼[LOC]: 3LXXX¼[DLOC]: 3Descripcion de la ubicacion¼[LTZ]: 3XX½";
        var asd4 = "[ID]: 4Modelo-Serie¼[LABEL]: 4AA¼[TYPE]: T4XX¼[NAME]: 4Nombre del dispositivo¼[LOC]: 4LXXX¼[DLOC]: 4Descripcion de la ubicacion¼[LTZ]: 4XX½";

        var cadena = "";
        //FOR RECORRIENDO TODAS LAS TRAMAS QUE LLEGAN Y CONCATENANDOLAS A TODAS
        for (var i = 0; i < 4; i++) {
            // console.log(i)
            switch (i) {
                case 0:
                    cadena = cadena.concat(asd1)
                    break;
                case 1:
                    cadena = cadena.concat(asd2)
                    break;
                case 2:
                    cadena = cadena.concat(asd3)
                    break;
                case 3:
                    cadena = cadena.concat(asd4)
                    break;
                default:
                    break;
            }
        }

        var data = cadena;

        var sp1 = data.split('½');
        var model, label, namee, type, loc, dloc, ltz;
        var datas = [];
        sp1.map((item, index) => {
            var sp2 = item.split('¼')
            sp2.map((item2, index2) => {
                switch (index2) {
                    case 0:
                        var m = item2.indexOf(": ");
                        var res = item2.slice(m + 2, item2.length);
                        model = { "model": res }
                        return
                    case 1:
                        var m = item2.indexOf(": ");
                        var res = item2.slice(m + 2, item2.length);
                        label = { "label": res }
                        return
                    case 2:
                        var m = item2.indexOf(": ");
                        var res = item2.slice(m + 2, item2.length);
                        type = { "type": res }
                        return
                    default:
                        return
                }
            })
            var total = Object.assign(model, label, namee, type, loc, dloc, ltz);               //Object.assign combina objetos separados en uno solo
            datas.push(total);
        });

        datas.splice(datas.length - 1, 1);                  //POR ALGUNA RAZON CREA UN ULTIMO OBJETO REPETIDO DEL ULTIMO, POR LO QUE LO ELIMINO
        // console.log("RESULTANTE: ", datas)
        setData(datas);                                                                                                                                                         //ACA TENGO LA DATA A MOSTRAR EN TABLE 3! FALTA MANIPULARLA SEGUN MARTIN LA ENVIE
        console.log("datas", datas);
        setTimeout(function () { setIsReady(true) }, 3000);         //TIMEOUT DE 3 SEG PARA ESPERAR
    }, [])


    const dataHarcoded = [
        { "pin": "31Y1", "resource": "DO01", "description": "Alacena" },
        { "pin": "31Y2", "resource": "DI02", "description": "Heladera" }
    ];

    function onclick(item) {
        alert("FALTA!!")
    }


    if (ready) {
        return (
            <>
                <Appbar title="Información del LBB" navigation={navigation} hasBack={true} />
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
                        <Title style={styles.titleDetailScreen}>Modelo: {item.model}</Title>
                        <Image source={assets.lbb3} style={{ width: "40%", height: "20%", alignSelf: 'center' }} />
                        <Text style={styles.titleDetailScreen}>Informacion del LBB</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Subheading >Nombre: {item.name}</Subheading>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ width: '30%' }}><Subheading>Label: {item.label}</Subheading></View>
                            <View style={{ width: '30%' }}><Subheading>Tipo: {item.type}</Subheading></View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ width: '30%' }}><Subheading>LOC: {item.loc}</Subheading></View>
                            <View style={{ width: '30%' }}><Subheading>DLOC: {item.dloc}</Subheading></View>
                            <View style={{ width: '30%' }}><Subheading>LTZ: {item.ltz}</Subheading></View>
                        </View>

                        <ScrollView>
                            <Text style={styles.titleDetailScreen}>Modulos instalados </Text>
                            <View style={{ margin: 15 }}>
                                <DataTable style={{ paddingLeft: 0, backgroundColor: "#EEEEEE" }}>
                                    <DataTable.Header >
                                        <DataTable.Title style={{ justifyContent: 'center' }}>ID</DataTable.Title>
                                        <DataTable.Title style={{ justifyContent: 'center' }}>Modelo</DataTable.Title>
                                    </DataTable.Header>
                                    {dataModulesInstalled.map((item, index) =>
                                        <DataTable.Row key={index} >
                                            <DataTable.Cell style={{ justifyContent: 'center' }}>{item._id}</DataTable.Cell>
                                            <DataTable.Cell style={{ justifyContent: 'center' }}>{item.name}</DataTable.Cell>
                                        </DataTable.Row>
                                    )}
                                </DataTable>
                            </View>
                            <Text style={styles.titleDetailScreen}>Recursos asociados </Text>

                            <Table3 navigation={navigation} onclick={(item) => onclick(item)} header1={"ID"} header2={'Modelo'} header3={"Descripcion"} data={dataHarcoded} />
                        </ScrollView>
                    </ScrollView>
                </View>
            </>
        )
    }
    else {
        return (
            <>
                <Appbar title="Información del LBB" navigation={navigation} hasBack={true} />
                <Spinner />
            </>
        )
    }

}


export default ViewLbbDetail;





