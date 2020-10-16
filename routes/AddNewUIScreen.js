import * as React from 'react';
import styles from '../styles';
import { urlFrontEnd, urlBackEnd } from "../src/Functions/functions";
import { View, Button, ScrollView} from 'react-native';
import Input from '../components/Input/Input.js';
import SelectInput from '../components/Input/SelectInput.js';
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import AwesomeAlert from 'react-native-awesome-alerts';
import Appbar from "../components/Appbar/Appbar";
import { useState } from 'react';


function AddNewUIScreen({ navigation }) {
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
    const [isLoading, setisLoading] = useState(false);
    const [showAlert, setshowAlert] = useState(false);
    const showAlertFunction = () => {
        setshowAlert(true);
    };

    const hideAlertFunction = () => {
        setshowAlert(false);
        navigation.navigate('UI')
    };
    var urlFront = urlFrontEnd();
    var urlBack = urlBackEnd();

    const [inModules, setinModules] = React.useState([]);
    const handleChangeInput = (e) => {
        setData({
            ...data,
            [e.name]: e.value
        })
        // console.log(data)
        if (e.name === "type") {
            fetch(urlBack + "searchModuleInfo/" + e.value)
                .then((response) => response.json())
                .then((response) => {
                    var mod = [];
                    {
                        response.map((item, index) => {
                            mod.push(item.name),
                                setinModules(mod)
                        },
                        )
                    }
                })
        }
        if (e.name === "model") {
            fetch(urlBack + "searchModuleInfo/" + data.type + "/" + e.value)
                .then((response) => response.json())
                .then((response) => {
                    // console.log("RESPONSE",response)
                    setData({
                        ...data,
                        assets: response.assets,
                        name: response.name,
                        urlDetail: response.urlDetail
                    })
                })
        }
        if (e.name === "state") {
            if (e.value === "Libre") {
                // alert("2")
                setData({ ...data, isAvaiable: true })
            }
            else {
                // alert("3")
                setData({ ...data, isAvaiable: false })
            }
        }
    }


    const onClickAdd = (e) => {

        if (data.type === "" || data.model === "" || data.description === "" || data.state === "") {
            alert("Completa todos los campos!")
        }
        else {
            setisLoading(true)
            fetch(urlBack + "addUImoduleUser", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((responseData) => {
                    setisLoading(false)
                    setshowAlert(true)
                })
        }
    }
    const [typeModules, setTypeModules] = React.useState(["In", "Out", "In-out"]);

    const [outModules, setOutModules] = React.useState(["Display OLED 128x64", "Opcion2", "Opcion3", "Opcion4", "Opcion5", "Opcion6", "Opcion7", "Opcion8", "Opcion9", "Opcion10"]);
    const [inoutModules, setInOutModules] = React.useState(["Teclado 4x4 & 8 Leds", "Opcion2", "Opcion3", "Opcion4", "Opcion5", "Opcion6", "Opcion7", "Opcion8", "Opcion9", "Opcion10"]);
    const [statesModules, setStatesModules] = React.useState(["Libre", "Ocupado"]);

    return (
        <>
            <Appbar title="Add new UI" navigation={navigation} hasBack={true} />
            <View style={styles.container}>
                {isLoading ? <Spinner /> : <ScrollView>
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
                    {!data.isAvaiable ?
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
                </ScrollView>}

                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    //   title="Exitoso"
                    message="Modulo agregado exitosamente"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="Aceptar"
                    confirmButtonColor="green"
                    onCancelPressed={() => {
                        hideAlertFunction();
                    }}
                    onConfirmPressed={() => {
                        hideAlertFunction();
                    }}
                />
            </View>
        </>
    )
}


export default AddNewUIScreen;

