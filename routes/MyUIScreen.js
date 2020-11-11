import * as React from 'react';
import styles from '../styles'
import { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import CardProbing from '../../frontend/components/Card/CardSimple.js';
import { urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import Appbar from "../components/Appbar/Appbar";
import { Avatar, FAB, Chip, Title, Card, List, Subheading } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

// TAB VIEW
dataPulsadores = {
    tableHead: ['Usa los pines'],
    tableData: [
        ['U1', 'X'],
        ['U2', 'X'],
        ['U3', 'X'],
        ['U4', 'X'],
        ['U5', 'X'],
    ]
}

dataTeclado4x4 = {
    tableHead: ['Usa los pines'],
    tableData: [
        ['U1', ''],
        ['U2', 'X'],
        ['U3', 'X'],
        ['U4', '']
    ]
}


var urlBack = urlBackEnd();


const MyUIScreen = ({ navigation }) => {
    const [dataUser, setDataUser] = useState([]);
    const [dataUserOriginalList, setDataUserOriginalList] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         alert("Enter");
    //         return () => alert("Exit");
    //     }, [])
    // );


    useEffect(() => {

        // const unsubscribe = navigation.addListener("focus", () => {
        //     dispatch(accion());
        //     return unsubscribe
        // })
        fetch(urlBack + "api/myUIModules", {
            method: 'POST',
        })
            .then((response) => response.json())
            .then((responseData) => {
                setDataUser(responseData);
                setDataUserOriginalList(responseData);
                setisLoading(false)
            })

    }, [navigation]);

    // function accion(){
    //     fetch(urlBack + "api/myUIModules", {
    //         method: 'POST',
    //     })
    //         .then((response) => response.json())
    //         .then((responseData) => {
    //             setDataUser(responseData);
    //             setDataUserOriginalList(responseData);
    //             setisLoading(false)
    //         })
    // }
    // FAB
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    // FAB
    const [stateIn, setStateIn] = React.useState(false);
    const [stateOut, setStateOut] = React.useState(false);
    const [stateInOut, setStateInOut] = React.useState(false);
    const [stateSmall, setStateSmall] = React.useState(false);
    const [stateMedium, setStateMedium] = React.useState(false);
    const [stateLarge, setStateLarge] = React.useState(false);

    const chipSelect = (e) => {
        switch (e) {
            case 1:
                setStateIn(!stateIn)
                break;
            case 2:
                setStateOut(!stateOut)
                break;
            case 3:
                setStateInOut(!stateInOut)
                break;
            case 4:
                setStateSmall(!stateSmall)
                break;
            case 5:
                setStateMedium(!stateMedium)
                break;
            default:
                setStateLarge(!stateLarge)
                break;
        }
    }

    const applyChanges = () => {
        setisLoading(false)
        if (stateIn && !stateOut && !stateInOut) {
            var asd = dataUser.filter(obj => obj.type == "In")
            setDataUserOriginalList(asd);
        }
        else if (!stateIn && stateOut && !stateInOut) {
            var asd = dataUser.filter(obj => obj.type == "Out")
            setDataUserOriginalList(asd);
        }
        else if (!stateIn && !stateOut && stateInOut) {
            var asd = dataUser.filter(obj => obj.type == "In-out")
            setDataUserOriginalList(asd);
        }
        else if (stateIn && stateOut && !stateInOut) {
            var asd = dataUser.filter(obj => obj.type == "In" || obj.type == "Out")
            setDataUserOriginalList(asd);
        }
        else if (stateIn && !stateOut && stateInOut) {
            var asd = dataUser.filter(obj => obj.type == "In" || obj.type == "In-out")
            setDataUserOriginalList(asd);
        }
        else if (!stateIn && stateOut && stateInOut) {
            var asd = dataUser.filter(obj => obj.type == "Out" || obj.type == "In-out")
            setDataUserOriginalList(asd);
        }
        else if (stateIn && stateOut && stateInOut) {
            var asd = dataUser;
            setDataUserOriginalList(asd);
        }
        else {
            var asd = dataUser;
            setDataUserOriginalList(asd);
        }

    }

    function onclick(item) {
        // console.log(item);
        navigation.navigate("SimpleView", { item })
    }
    return (
        <>
            <Appbar title="Mis User Interface" navigation={navigation} hasBack={true} />
            <View style={styles.container}>
                {isLoading ?
                    <Spinner />
                    :
                    <ScrollView>
                        <View style={styles.container}>
                            <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} >
                                <View style={styles.containerChip} >
                                    <Title>Estos son tus modulos</Title>
                                    <Title>Filtros</Title>
                                    <View style={styles.rowChip}>
                                        <Chip style={styles.chip} name="in" selected={stateIn} onPress={() => chipSelect(1)} style={stateIn ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText}>In</Text>
                                        </Chip>
                                        <Chip style={styles.chip} name="out" selected={stateOut} onPress={() => chipSelect(2)} style={stateOut ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText}>Out</Text>
                                        </Chip>
                                        <Chip style={styles.chip} name="inOut" selected={stateInOut} onPress={() => chipSelect(3)} style={stateInOut ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText}>In-Out</Text>
                                        </Chip>
                                    </View>
                                    <View style={styles.rowChip}>
                                        <Chip style={styles.chip} name="small" selected={stateSmall} onPress={() => chipSelect(4)} style={stateSmall ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText} >Small</Text>
                                        </Chip>
                                        <Chip style={styles.chip} name="medium" selected={stateMedium} onPress={() => chipSelect(5)} style={stateMedium ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText} >Medium</Text>
                                        </Chip>
                                        <Chip style={styles.chip} name="large" selected={stateLarge} onPress={() => chipSelect(6)} style={stateLarge ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText} >Large</Text>
                                        </Chip>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => applyChanges()}>
                                    <View style={styles.button}>
                                        <Text>Aplicar cambios</Text>
                                    </View>
                                </TouchableOpacity>
                                <Subheading> Clickea en el modulo para elegirlo</Subheading>
                                <View>
                                    {dataUserOriginalList.map((item, index) =>
                                        <View key={index}>
                                            <CardProbing key={index} onclick={() => onclick(item)} assets={item.assets} type={item.type} titleCard={item.name} text={item.description}
                                                data={dataPulsadores} isAvaiable={item.isAvaiable} usedIn={item.usedIn} urlDetail={item.urlDetail} pins={item.pins} />
                                        </View>
                                    )}
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                }
            </View>
        </>
    )
}

export default MyUIScreen;
