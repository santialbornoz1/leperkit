
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
import Input from '../components/Input/Input.js';

function AddComponentOrExternalCircuit({ navigation }) {
    const [expanded, setExpanded] = React.useState(true);
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const handlePress = () => setExpanded(!expanded);
    const [textPlot, setTextPlot] = useState("Elige una opcion");
    const [selectedValue, setSelectedValue] = useState("TT");
    const [selectedValue2, setSelectedValue2] = useState("NN");
    const width_proportion = '40%';
    const width_proportion2 = '40%';


    function handleChangeText(a, value) {
        setTextPlot(value);
    }
    return (
        <>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
                    <Title>Display OLED 128x64</Title>
                    <Subheading>Pin a asignar:</Subheading>
                    <View style={{ margin: 10, borderWidth: 2, borderColor: '#BDBDBD' }}>
                        <Text style={{ margin: 10, fontSize: 20 }}>31R2</Text>
                        <View style={{ justifyContent: "center" ,alignItems: "center", flexDirection: 'row' }}>
                            <Picker selectedValue={selectedValue2} style={{ height: 50, width: width_proportion2, margin: 10 }} onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                                {options2.map((item, index) => <Picker.Item label={item.label} value={item.value} />)}
                            </Picker>
                            <Picker selectedValue={selectedValue2} style={{ height: 50, width: width_proportion2, margin: 10 }} onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                                {options2.map((item, index) => <Picker.Item label={item.label} value={item.value} />)}
                            </Picker>
                        </View>
                        <Input isSelectInput={false} name="description" type={"text"} label={"Descripcion"} placeholder={"Escribe una descripcion"}
                            backgroundColor={"#FAFAFA"} editable={true} maxLength={2} keyboardType={'default'} />
                        <View style={{ alignSelf: 'flex-end', bottom: 8 }}>
                            <Button title="Aplicar"  onPress={() => navigation.push('Home')}/>
                        </View>
                    </View>
                    <AccordeonWithTable />
                </ScrollView>
            </View>
        </>
    )
}


export default AddComponentOrExternalCircuit;
