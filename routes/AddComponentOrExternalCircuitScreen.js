
import React from 'react';
import { Navigation } from 'react-native-navigation';
import styles from '../styles';
import { Title, Subheading, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Picker } from 'react-native';
import { List, Avatar, Card, DataTable } from 'react-native-paper';
import AccordeonWithTable from "../components/AccordeonWithTable/AccordeonWithTable";
import SelectInput from '@tele2/react-native-select-input';  //ANDA SOLO EN ANDROID
import { useState, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import options2 from '../data/selectInput2';
import TT from '../data/selectInput';
import pins from '../data/pins.js';
import Input from '../components/Input/Input.js';
import Appbar from "../components/Appbar/Appbar";
import Table3 from '../components/Tables/Tables3';

function AddComponentOrExternalCircuit({ navigation }) {
    const [expanded, setExpanded] = React.useState(true);
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const handlePress = () => setExpanded(!expanded);
    const [textPlot, setTextPlot] = useState("Elige una opcion");
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("TT");
    const [selectedValue3, setSelectedValue3] = useState("NN");

    const width_proportion = '40%';
    const width_proportion2 = '40%';

    const dataHarcoded = [
        { "pin": "31Y1", "resource": "DO01", "description": "Alacena" },
        { "pin": "31Y2", "resource": "DI02", "description": "Heladera" }
    ];

    function handleChangeText(a, value) {
        setTextPlot(value);
    }
    return (
        <>
            <Appbar title="Adding external circuit" navigation={navigation} hasBack={true} />
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
                    <Title>Display OLED 128x64</Title>
                    <View style={{ margin: 10, borderWidth: 2, borderRadius: 20, borderColor: '#BDBDBD' }}>
                        <View style={{ justifyContent: "center", alignItems: "center", flexDirection: 'row', margin: 10 }}>
                            <View>
                                <Subheading style={{ margin: 8 }}>Pin a asignar:</Subheading>
                            </View>
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
                        </View>

                        <View style={{ justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
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
                        </View>
                        <Input isSelectInput={false} name="description" type={"text"} label={"Descripcion"} placeholder={"Escribe una descripcion"}
                            backgroundColor={"#FAFAFA"} editable={true} maxLength={2} keyboardType={'default'} />                    
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.button}>
                                <Text>Aplicar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Table3 navigation={navigation} header1={"ID"} header2={'Modelo'} header3={"Descripcion"} data={dataHarcoded} />
                </ScrollView>
            </View>
        </>
    )
}


export default AddComponentOrExternalCircuit;
