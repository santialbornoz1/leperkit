import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
import CardProbing from '../../frontend/components/Card/Card.js';
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
const FirstRoute = ({ navigation }) => (
    <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
        {/* ACA VA EL MAPEO DE TODOS LOS UI IN */}
        <CardProbing imagePath={'ochoPulsadores'} titleCard={"Pulsadores"} text="Descripcion de los pulsadores."
            data={dataPulsadores} isAvaiable={true} usedIn="" urlDetail={"http://site.gravitech.us/Components/BUTT-4/BUTT-4_datasheet.pdf"} />
        <View style={styles.buttons}>
            <Button title="Agregar un nuevo UI a 'Mis UI'" />
        </View>
        <View style={styles.buttons}>
            <Button title="Ver Catalogo Del Market" onPress={() => { Linking.openURL("http://africau.edu/images/default/sample.pdf") }}></Button>
        </View>

    </View>
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
        {/* ACA VA EL MAPEO DE TODOS LOS UI OUT */}
        <CardProbing imagePath={'displayOLED'} titleCard={"Display OLED 128x64"}
            text="Descripcion de display OLED."
            data={dataPulsadores}
            isAvaiable={true}
            usedIn=""
            urlDetail={"https://www.vishay.com/docs/37902/oled128o064dbpp3n00000.pdf"} />
        <CardProbing imagePath={'cuatroporsietesegm'} titleCard={"4 Display  7 seg Reloj"}
            text="Descripcion de display."
            data={dataPulsadores}
            isAvaiable={false}
            usedIn={"'Panel de control'"}
            urlDetail={"http://www.bolanosdj.com.ar/MOVIL/ARDUINO2/segmentos7x4.pdf"}
        />
    </View>
);

const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
        {/* ACA VA EL MAPEO DE TODOS LOS UI IN/OUT */}
        {/* <CardUI imagePath={'teclado4x4yLeds'} titleCard={"Teclado 4x4 + Leds"} titleCard2={""}
            text="Descripcion de teclado 4x4 + leds."
            data={dataPulsadores}
            isAvaiable={true}
            usedIn={"'Lampara de pie'"}
            urlDetail={"http://www.electronicoscaldas.com/datasheet/Teclado-membrana-matricial-4x4.pdf"}
        /> */}
        <CardProbing imagePath={'teclado4x4yLeds'} titleCard={"Teclado 4x4 + Leds"}
            text="Descripcion de teclado 4x4 + leds."
            data={dataPulsadores}
            isAvaiable={true}
            usedIn=""
            urlDetail={"http://www.electronicoscaldas.com/datasheet/Teclado-membrana-matricial-4x4.pdf"} />
    </View>
);

const initialLayout = { width: Dimensions.get('window').width };
// TAB VIEW

const UIDetailScreen = ({ navigation }) => {
    const [dataUser, setDataUser] = useState([]);
    useEffect(() => {
        fetch("http://192.168.100.18:4000/test")
            .then((response) => response.json())
            .then((responseData) => {
                setDataUser(responseData);
                //    console.log(responseData);
            })
    }, []);


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
                {/* <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                /> */}
                {/* <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
                    ACA VA EL MAPEO DE TODOS LOS UI IN
                    <CardProbing imagePath={'ochoPulsadores'} titleCard={"Pulsadores"} text="Descripcion de los pulsadores."
                        data={dataPulsadores} isAvaiable={true} usedIn="" urlDetail={"http://site.gravitech.us/Components/BUTT-4/BUTT-4_datasheet.pdf"} />
                    <View style={styles.buttons}>
                        <Button title="Agregar un nuevo UI a 'Mis UI'" />
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Ver Catalogo Del Market" onPress={() => { Linking.openURL("http://africau.edu/images/default/sample.pdf") }}></Button>
                    </View>
                </View> */}
                {dataUser.map((item, index) =>
                    <View>
                        <Text>Index: {index}</Text>
                        <Text>Id del usuario: {item.userId}</Text>
                        <CardProbing imagePath={'ochoPulsadores'} titleCard={"Pulsadores"} text="Descripcion de los pulsadores."
                        data={dataPulsadores} isAvaiable={true} usedIn="" urlDetail={"http://site.gravitech.us/Components/BUTT-4/BUTT-4_datasheet.pdf"} />
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

export default UIDetailScreen;

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




