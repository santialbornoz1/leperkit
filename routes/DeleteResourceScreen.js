import * as React from 'react';
import styles from '../styles'
import { useState, useEffect } from 'react';
import { View, Button, ScrollView} from 'react-native';
import { urlFrontEnd, urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import { Title } from 'react-native-paper';
import SelectInput from '@tele2/react-native-select-input';  //ANDA SOLO EN ANDROID
import Input from '../components/Input/Input.js';


var urlFront = urlFrontEnd();
var urlBack = urlBackEnd();

const DeleteResourceScreen = ({ navigation }) => {
    const [isLoading, setisLoading] = useState(false);

    const [textPlot, setTextPlot] = useState("Elige una opcion");
    const [numberPlot, setNumberPlot] = useState("");

    const [value, setValue] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [selectAllResources, setSelectAllResources] = React.useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [checked, setChecked] = React.useState('first');
    const options = [
        {
            value: 'Elige la opcion',
            label: 'Elige la opcion',
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

    useEffect(() => {
    }, []);

    function setButtonDisabled() {
        if (numberPlot.length >= 1 && textPlot != "Elige una opcion") {
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

    function onContinue(id){
        alert("Trama a enviar:  \n" + "AAA APP DEV INFO DEL " + textPlot + "" + numberPlot + '[NAME]')
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
                                    <Title>Recurso a eliminar</Title>
                                </View>
                                <View style={{ margin: 10 }}>
                                    <SelectInput value={textPlot} options={options} label="¿Que queres eliminar?" placeholder="Elige una opcion" onChange={handleChangeText.bind(this, value)} />
                                </View>
                                <View>
                                    <Input isSelectInput={false} name="description" type={"text"} label={"Escribe el numero de recurso"} placeholder={"Numero de recurso"}
                                        backgroundColor={"#fff"} handleChangeInput={handleChangeNumber} editable={!selectAllResources} maxLength={2} keyboardType={'numeric'} />
                                </View>
                                <View style={styles.buttons} >
                                    <Button title="Elimnar recurso" onPress={() => onContinue(1)} disabled={disableButton} />
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                }
            </View>
        </>
    )
}

export default DeleteResourceScreen;

