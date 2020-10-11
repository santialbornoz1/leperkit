import * as React from 'react';
import styles from '../styles'
import { useState, useEffect } from 'react';
import { Text, TextInput, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
import CardProbing from '../../frontend/components/Card/CardSimple.js';
import { urlFrontEnd, urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import { FAB, Chip, Title } from 'react-native-paper';
import SelectInput from '@tele2/react-native-select-input';  //ANDA SOLO EN ANDROID
// import RNPickerSelect from 'react-native-picker-select';
import Input from '../components/Input/Input.js';
import options from "../data/selectInput";

var urlFront = urlFrontEnd();
var urlBack = urlBackEnd();

const ReadResourceScreen = ({ navigation }) => {
    const [isLoading, setisLoading] = useState(false);

    const [textPlot, setTextPlot] = useState("Elige una opcion");
    const [numberPlot, setNumberPlot] = useState("");
    const [namePlot, setNamePlot] = useState("");

    const [value, setValue] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [selectAllResources, setSelectAllResources] = React.useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [checked, setChecked] = React.useState('first');

    useEffect(() => {
    }, []);

    function setButtonDisabled() {
        if (numberPlot.length >= 1 && textPlot != "Elige una opcion" && namePlot.length > 1) {
            setDisableButton(false)
        }
        else {
            setDisableButton(true)
        }
    }

    function handleChangeText(a, value) {
        setTextPlot(value);
    }
    
    function handleChangeNumber(e) {
        setNumberPlot(e.value);
        var value = e.value;
        if (value.length < 2) {
            setDisableButton(false)
        }
        else {
            setDisableButton(true)
        }
        setNumberPlot(e.value);
        setButtonDisabled();
    }

    function handleChangeName(e) {
        console.log(e.value);
        setNamePlot(e.value);
        setButtonDisabled();
    }

    function onContinue(id){
        alert("Trama a enviar:  \n" + "AAA APP DEV INFO WRITE " + textPlot + "" + numberPlot + '[NAME]="' + namePlot + '"')
    }

    return (
        <>
            {/* <Appbar/> */}
            <View style={styles.container}>
                {isLoading ?
                    <Spinner />
                    :
                    <ScrollView>
                        <View style={styles.container}>
                            <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} >
                                <View style={styles.containerChip} >
                                    <Title>Recurso a setear</Title>
                                </View>
                                <View style={{ margin: 10 }}>
                                    <SelectInput value={textPlot} options={options} label="¿Que queres setear?" placeholder="Elige una opcion" onChange={handleChangeText.bind(this, value)} />
                                </View>
                                <View>
                                    <Input isSelectInput={false} name="description" type={"text"} label={"Escribe el numero de recurso"} placeholder={"Numero de recurso"}
                                        backgroundColor={"#fff"} handleChangeInput={handleChangeNumber} editable={!selectAllResources} maxLength={2} keyboardType={'numeric'} />
                                </View>
                                <View>
                                    <Input isSelectInput={false} name="description" type={"text"} label={"Escribe el nombre del recurso a setear"} placeholder={"Nombre elegido"}
                                        backgroundColor={"#fff"} handleChangeInput={handleChangeName} editable={!selectAllResources} maxLength={30} />
                                </View>
                                <View style={styles.buttons} >
                                    <Button title="Setear recurso" onPress={() => onContinue(1)} disabled={disableButton} />
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                }
            </View>
        </>
    )
}

export default ReadResourceScreen;

