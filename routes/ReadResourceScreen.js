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
import Appbar from "../components/Appbar/Appbar";

var urlFront = urlFrontEnd();
var urlBack = urlBackEnd();

const ReadResourceScreen = ({ navigation }) => {
    const [isLoading, setisLoading] = useState(false);

    const [textPlot, setTextPlot] = useState("Elige una opcion");
    const [numberPlot, setNumberPlot] = useState("");

    const [value, setValue] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [selectAllResources, setSelectAllResources] = React.useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [checked, setChecked] = React.useState('first');
    const optionsSelect = [
        {
            value: 'Elige la opcion',
            label: 'Elige la opcion',
        },
        {
            value: '*',
            label: 'Todos los recursos',
        },
        {
            value: 'DO',
            label: 'Digital Output',
        }, {
            value: 'DI',
            label: 'Digital Input',
        }, {
            value: 'DA',
            label: 'Digital to Analog',
        },
        {
            value: 'PW',
            label: 'PWM',
        },
        {
            value: 'TR',
            label: 'TRIAC',
        },
        {
            value: 'AD',
            label: 'Analog to Digital',
        }
    ];

    const [options, setOptions] = useState();

    useEffect(() => {
        const received = navigation.getParam("options");
        setOptions(received);
        console.log("received en read", received)
    }, []);
    function setButtonDisabled() {
        if (numberPlot.length >= 1 && textPlot != "") {
            setDisableButton(false)
        }
        else {
            setDisableButton(true)
        }
    }

    function handleChangeText(a, value) {
        if (value === "*") {
            setNumberPlot("");
            setDisableButton(false)
            setSelectAllResources(true);
        }
        else {
            setSelectAllResources(false);
            setButtonDisabled();
        }
        setTextPlot(value);
    }

    function handleChangeNumber(e) {
        console.log(e.value);
        var value = e.value;
        if (value.length < 2) {
            setDisableButton(false)
        }
        else {
            setDisableButton(true)
        }
        setNumberPlot(e.value)
        setButtonDisabled();
    }

    function onContinue(id) {
        console.log(textPlot + numberPlot);
        if (numberPlot == 99) {
            alert("Trama a enviar:  \n" + "AAA APP DEV INFO READ " + textPlot + "*[NAME]")
        }
        else {
            alert("Trama a enviar:  \n" + "AAA APP DEV INFO READ " + textPlot + "" + numberPlot + "[NAME]")
        }
    }
    return (
        <>
             <Appbar title="Reading resource" navigation={navigation} hasBack={true} />
            <View style={styles.container}>
                {isLoading ?
                    <Spinner />
                    :
                    <ScrollView>
                        <View style={styles.container}>
                            <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} >
                                <View style={styles.containerChip} >
                                    <Title>Recurso a leer</Title>
                                </View>
                                <View style={{ margin: 10 }}>
                                    <SelectInput value={textPlot} options={optionsSelect} label="¿Que queres leer?" placeholder="Elige una opcion" onChange={handleChangeText.bind(this, value)} />
                                </View>
                                {selectAllResources ?
                                    <></>
                                    :
                                    <View>
                                        <Input isSelectInput={false} name="description" type={"text"} label={"Escribe el numero de recurso (99 para leer todos)"} placeholder={"Numero de recurso"}
                                            backgroundColor={"#fff"} handleChangeInput={handleChangeNumber} editable={!selectAllResources} maxLength={2} keyboardType={'numeric'} />
                                    </View>
                                }

                                <View style={styles.buttons} >
                                    <Button title="Leer recursos" onPress={() => onContinue(1)} disabled={disableButton} />
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

