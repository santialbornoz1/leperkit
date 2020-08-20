import * as React from 'react';
import styles from '../styles'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
import { TextInput, Dialog, Portal, Menu } from 'react-native-paper';
import Input from '../components/Input/Input.js';
import SelectInput from '../components/Input/SelectInput.js';

const AddNewUIScreen = ({ navigation }) => {
    const [text, setText] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState("In");
    const [data, setData] = React.useState({
        "name": "",
        "model": "FALTA",
        "type": "",
        "assets": "",
        "pins": [],
        "description": "",
        "isAvaiable": true,
        "usedIn": "",
        "urlDetail": "http://africau.edu/images/default/sample.pdf"
    });
    // "name": "",
    // "model": "",
    // "type": "",
    // "assets": "",
    // "pins": [],
    // "description": "",
    // "isAvaiable": false,
    // "usedIn": "asdkjashdas",
    // "urlDetail": "http://africau.edu/images/default/sample.pdf"

    //     {
    // "name": "Hardcodeado",
    // "model": "prueba2",
    // "type": "in",
    // "assets": "ochoPulsadores",
    // "pins": [
    //     {
    //         "_id": "5f2b017c58134828c44acc3c",
    //         "pin": "U1",
    //         "used": "X"
    //     },
    //     {
    //         "_id": "5f2b017c58134828c44acc3d",
    //         "pin": "U2",
    //         "used": "X"
    //     }
    // ],
    // "description": "AEEEEEEEEEEEEE",
    // "isAvaiable": false,
    // "usedIn": "asdkjashdas",
    // "urlDetail": "http://africau.edu/images/default/sample.pdf"
    // }

    const [inModules, setinModules] = React.useState([]);
    const scrollEnabled = false;
    const handleChangeInput = (e) => {
        setData({
            ...data,
            [e.name]: e.value
        })
        if (e.name === "type") {
            fetch("http://192.168.100.18:4000/searchModuleInfo/" + e.value)
                .then((response) => response.json())
                .then((response) => {
                    var mod = [];
                    {response.map((item, index) =>
                        {
                        mod.push(item.name),
                        setinModules(mod)

                    },
                    // console.log("2",inModules)
                    )}
                })
        }
        if (e.name === "model") {
            // alert("SELECCIONASTE MODULO")
            fetch("http://192.168.100.18:4000/searchModuleInfo/" + data.type + "/" + e.value)
            .then((response) => response.json())
            .then((response) => {
                console.log("RESPONSE",response)
                setData({
                    ...data,
                    assets: response.assets,
                    name: response.name,
                    urlDetail: response.urlDetail
                })
            })
        }
        console.log(data)
    }


    const onClickAdd = (e) => {
        fetch("http://192.168.100.18:4000/addUImoduleUser", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                alert("Modulo agregado a base de datos");

                navigation.navigate('UI')
            })
    }
    const [typeModules, setTypeModules] = React.useState(["In", "Out", "In-out"]);
   
    const [outModules, setOutModules] = React.useState(["Display OLED 128x64", "Opcion2", "Opcion3", "Opcion4", "Opcion5", "Opcion6", "Opcion7", "Opcion8", "Opcion9", "Opcion10"]);
    const [inoutModules, setInOutModules] = React.useState(["Teclado 4x4 & 8 Leds", "Opcion2", "Opcion3", "Opcion4", "Opcion5", "Opcion6", "Opcion7", "Opcion8", "Opcion9", "Opcion10"]);
    const [statesModules, setStatesModules] = React.useState(["Libre", "Ocupado"]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <SelectInput name="type" type={"text"} placeholderDefault={"Selecciona el tipo de modulo"} label={"Tipo"} placeholder={"Tipo"} backgroundColor={"#fff"} handleChangeInput={handleChangeInput}
                    options={typeModules}
                />
                <SelectInput name="model" type={"text"} placeholderDefault={"Selecciona un modulo"} label={"Modulo"} placeholder={"Estado"} backgroundColor={"#fff"} handleChangeInput={handleChangeInput}
                    options={inModules}
                />
                <Input isSelectInput={false} name="description" type={"text"} label={"Descripcion"} placeholder={"Descripcion"} backgroundColor={"#fff"} handleChangeInput={handleChangeInput} />
                <SelectInput name="state" type={"text"} placeholderDefault={"Selecciona un estado"} label={"Estado"} placeholder={"Estado"} backgroundColor={"#fff"} handleChangeInput={handleChangeInput}
                    options={statesModules}
                />
                {data.state === "Ocupado" ?
                    <Input isSelectInput={false} name="usedIn" type={"text"} label={"Usado en "} placeholder={"Usado en.."} backgroundColor={"#fff"} handleChangeInput={handleChangeInput} />
                    :
                    <></>
                }
                {/* {data.type === "" || data.type === "In" ?
                    <SelectInput name="modulo" type={"text"} placeholderDefault={"Selecciona un modulo"} label={"Modulo"} placeholder={"Estado"} backgroundColor={"#fff"} handleChangeInput={handleChangeInput}
                        options={inModules}
                    />
                    :
                    <></>
                }
                {data.type === "Out" ?
                    <SelectInput name="modulo" type={"text"} placeholderDefault={"Selecciona un modulo"} label={"Modulo"} placeholder={"Estado"} backgroundColor={"#fff"} handleChangeInput={handleChangeInput}
                        options={outModules}
                    />
                    :
                    <></>
                }
                {data.type === "In-Out" ?
                    <SelectInput name="modulo" type={"text"} placeholderDefault={"Selecciona un modulo"} label={"Modulo"} placeholder={"Estado"} backgroundColor={"#fff"} handleChangeInput={handleChangeInput}
                        options={inoutModules}
                    />
                    :
                    <></>
                }
                <Input isSelectInput={false} name="description" type={"text"} label={"Descripcion"} placeholder={"Descripcion"} backgroundColor={"#fff"} handleChangeInput={handleChangeInput} />
                <SelectInput name="state" type={"text"} placeholderDefault={"Selecciona un estado"} label={"Estado"} placeholder={"Estado"} backgroundColor={"#fff"} handleChangeInput={handleChangeInput}
                    options={statesModules}
                />
                {data.state === "Ocupado" ?
                    <Input isSelectInput={false} name="usedIn" type={"text"} label={"Usado en "} placeholder={"Usado en.."} backgroundColor={"#fff"} handleChangeInput={handleChangeInput} />
                    :
                    <></>
                } */}
                <View style={styles.buttons}>
                    <Button title="Agregar" onPress={onClickAdd} />
                </View>
            </ScrollView>

        </View>
    )
}


export default AddNewUIScreen;

