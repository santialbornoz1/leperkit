
import React from 'react';
import { Navigation } from 'react-native-navigation';
import styles from '../styles';
import { Title, Subheading, Paragraph, Card } from 'react-native-paper';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, Picker, Button } from 'react-native';
// TAB VIEW
import { TabView, SceneMap } from 'react-native-tab-view';
import Appbar from "../components/Appbar/Appbar"
import { Checkbox } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import AwesomeAlert from 'react-native-awesome-alerts';
import Input from '../components/Input/Input.js';
import SelectInput from '@tele2/react-native-select-input';  //ANDA SOLO EN ANDROID
import AccordeonWithTable from "../components/AccordeonWithTable/AccordeonWithTable";
import options from "../data/selectInput";
import options2 from "../data/selectInput2";
import RNPickerSelect from 'react-native-picker-select';
import Table3 from '../components/Tables/Tables3';

function AdvancedView({ navigation }) {
    const [expanded, setExpanded] = React.useState(true);
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const handlePress = () => setExpanded(!expanded);
    const [textPlot, setTextPlot] = useState("Elige una opcion");
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");

    function handleChangeText(a, value) {
        setTextPlot(value);
    }
    const dataHarcoded = [
        { "pin": "31Y1", "resource": "DO01", "description": "Alacena" },
        { "pin": "31Y2", "resource": "DI02", "description": "Heladera" }
    ];

    function onclick(item) {
        alert("FALTA!!")
    }
    return (
        <>
            <Appbar title="Advanced view" navigation={navigation} hasBack={true} />
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container}>
                        {/* <AccordeonWithTable title="Ver recursos asignados actualmente" /> */}
                        <Title style={styles.titleDetailScreen}> Titulo </Title>
                        <Card style={{ backgroundColor: "#F5F5FA", borderRadius: 36, borderWidth: 2, borderColor: '#BDBDBD', margin: 10 }}>
                            <Card.Title title="Display OLED 128x64" />
                            <Card.Content>
                            </Card.Content>
                            <Paragraph style={{ margin: 16 }}>Pines que usa el modulo: U3 - U4</Paragraph>
                            <View style={{ marginTop: 10, backgroundColor: '#fff', marginHorizontal: 10 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={{ marginLeft: 10, fontSize: 20, alignSelf: 'center' }}>U3</Text>
                                    <View style={{ marginHorizontal: 10, width: '40%', height: "100%", backgroundColor: 'steelblue', padding: 10 }}>
                                        <RNPickerSelect
                                            onValueChange={(value) => console.log(value)}
                                            items={[
                                                { label: 'DI', value: 'DI' },
                                                { label: 'DO', value: 'DO' },
                                                { label: 'DA', value: 'DA' },
                                            ]}
                                        />
                                    </View>
                                    <View style={{ marginHorizontal: 10, width: '40%', height: "100%", backgroundColor: 'steelblue', padding: 10 }}>
                                        <RNPickerSelect
                                            onValueChange={(value) => console.log(value)}
                                            style={{ padding: 20 }}
                                            items={[
                                                { label: '01', value: '01' },
                                                { label: '02', value: '02' },
                                                { label: '03', value: '03' },
                                            ]}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Input isSelectInput={false} name="description" type={"text"} label={"Descripcion"} placeholder={"Escribe una descripcion"}
                                        backgroundColor={"#fff"} editable={true} maxLength={2} keyboardType={'default'} />
                                </View>
                            </View>
                            <View style={{ marginTop: 10, backgroundColor: '#fff', marginHorizontal: 10 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

                                    <Text style={{ marginLeft: 10, fontSize: 20, alignSelf: 'center' }}>U4</Text>
                                    <View style={{ marginHorizontal: 10, width: '40%', height: "100%", backgroundColor: 'steelblue', padding: 10 }}>
                                        <RNPickerSelect
                                            onValueChange={(value) => console.log(value)}
                                            items={[
                                                { label: 'DI', value: 'DI' },
                                                { label: 'DO', value: 'DO' },
                                                { label: 'DA', value: 'DA' },
                                            ]}
                                        />
                                    </View>
                                    <View style={{ marginHorizontal: 10, width: '40%', height: "100%", backgroundColor: 'steelblue', padding: 10 }}>
                                        <RNPickerSelect
                                            onValueChange={(value) => console.log(value)}
                                            style={{ padding: 20 }}
                                            items={[
                                                { label: '01', value: '01' },
                                                { label: '02', value: '02' },
                                                { label: '03', value: '03' },
                                            ]}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Input isSelectInput={false} name="description" type={"text"} label={"Descripcion"} placeholder={"Escribe una descripcion"}
                                        backgroundColor={"#fff"} editable={true} maxLength={2} keyboardType={'default'} />
                                </View>
                            </View>
                            <TouchableOpacity>
                                <View style={styles.button}>
                                    <Text>Aplicar</Text>
                                </View>
                            </TouchableOpacity>
                        </Card>
                        <Subheading> Recursos asignados actualmente: </Subheading>
                        <Table3 navigation={navigation} onclick={(item) => onclick(item)} header1={"ID"} header2={'Modelo'} header3={"Descripcion"} data={dataHarcoded} />

                        <TouchableOpacity onPress={() => navigation.navigate('SimpleView')}>
                            <View style={styles.button}>
                                <Text>Volver a vista simple</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default AdvancedView;
