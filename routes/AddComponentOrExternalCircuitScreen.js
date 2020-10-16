
import React from 'react';
import { Navigation } from 'react-native-navigation';
import styles from '../styles';
import { Title, Subheading, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Picker } from 'react-native';
import { List, Avatar, Card, DataTable } from 'react-native-paper';
import AccordeonWithTable from "../components/AccordeonWithTable/AccordeonWithTable";
import SelectInput from '@tele2/react-native-select-input';  //ANDA SOLO EN ANDROID
import { useState, useEffect } from 'react';
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
                    <View style={{ margin: 10, borderWidth: 2, borderColor: '#BDBDBD' }}>
                        <View style={{ justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                            <View>
                                <Subheading style={{ margin: 8 }}>Pin a asignar:</Subheading>
                            </View>
                            <View style={{ backgroundColor: 'steelblue', height: 50, width: width_proportion2, margin: 10 }}>
                                <Picker selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                    {pins.map((item, index) => <Picker.Item key={index} label={item.label} value={item.value} />)}
                                </Picker>
                            </View>
                        </View>

                        <View style={{ justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                            <View style={{ backgroundColor: 'steelblue', height: 50, width: width_proportion2, margin: 10 }}>
                                <Picker selectedValue={selectedValue2} onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                                    {TT.map((item, index) => <Picker.Item key={index} label={item.label} value={item.value} />)}
                                </Picker>
                            </View>
                            <View style={{ backgroundColor: 'skyblue', height: 50, width: width_proportion2, margin: 10 }}>
                                <Picker selectedValue={selectedValue3} onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}>
                                    {options2.map((item, index) => <Picker.Item key={index} label={item.label} value={item.value} />)}
                                </Picker>
                            </View>
                        </View>
                        <Input isSelectInput={false} name="description" type={"text"} label={"Descripcion"} placeholder={"Escribe una descripcion"}
                            backgroundColor={"#FAFAFA"} editable={true} maxLength={2} keyboardType={'default'} />
                        <View style={{ alignSelf: 'flex-end', bottom: 8, right: 8 }}>
                            <Button title="Aplicar" onPress={() => navigation.goBack()} />
                        </View>
                    </View>
                    <Table3 navigation={navigation} header1={"ID"} header2={'Modelo'} header3={"Descripcion"} data={dataHarcoded} />
                </ScrollView>
            </View>
        </>
    )
}


export default AddComponentOrExternalCircuit;
