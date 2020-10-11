
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

function AdvancedView({ navigation }) {
    const [expanded, setExpanded] = React.useState(true);
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const handlePress = () => setExpanded(!expanded);
    const [textPlot, setTextPlot] = useState("Elige una opcion");
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");
    const width_proportion = '50%';
    const width_proportion2 = '40%';


    function handleChangeText(a, value) {
        setTextPlot(value);
    }

    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container}>
                        <AccordeonWithTable />
                        <Card style={{ backgroundColor: "#F5F5FA", borderRadius: 36, borderWidth: 2, borderColor: '#BDBDBD', margin: 10 }}>
                            <Card.Title title="Display OLED 128x64" />
                            <Card.Content>
                            </Card.Content>
                            <Paragraph style={{ margin: 16 }}>Pines que usa el modulo: U3 - U4</Paragraph>
                            <View style={{ margin: 10, borderWidth: 2, borderColor: '#BDBDBD' }}>
                                <Text style={{ margin: 10, fontSize: 20 }}>U3</Text>
                                <View style={{ alignItems: "center", flexDirection: 'row' }}>
                                    <Picker selectedValue={selectedValue} style={{ height: 50, width: width_proportion }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                        {options.map((item, index) => <Picker.Item label={item.label} value={item.value} />)}
                                    </Picker>
                                    <Picker selectedValue={selectedValue2} style={{ height: 50, width: width_proportion2 }} onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                                        {options2.map((item, index) => <Picker.Item label={item.label} value={item.value} />)}
                                    </Picker>
                                </View>
                                <Input isSelectInput={false} name="description" type={"text"} label={"Descripcion"} placeholder={"Escribe una descripcion"}
                                    backgroundColor={"#F5F5FA"} editable={true} maxLength={2} keyboardType={'default'} />
                            </View>
                            <View style={{ margin: 10, borderWidth: 2, borderColor: '#BDBDBD' }}>
                                <Text style={{ margin: 10, fontSize: 20 }}>U4</Text>
                                <View style={{ alignItems: "center", flexDirection: 'row' }}>
                                    <Picker selectedValue={selectedValue} style={{ height: 50, width: width_proportion }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                        {options.map((item, index) => <Picker.Item label={item.label} value={item.value} />)}
                                    </Picker>
                                    <Picker selectedValue={selectedValue2} style={{ height: 50, width: width_proportion2 }} onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                                        {options2.map((item, index) => <Picker.Item label={item.label} value={item.value} />)}
                                    </Picker>
                                </View>
                                <Input isSelectInput={false} name="description" type={"text"} label={"Descripcion"} placeholder={"Escribe una descripcion"}
                                    backgroundColor={"#F5F5FA"} editable={true} maxLength={2} keyboardType={'default'} />
                            </View>
                            <View style={{ alignSelf: 'flex-end', margin: 14 }}>
                                <Button title="Aplicar" />
                            </View>

                        </Card>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default AdvancedView;
