import * as React from 'react';
import styles from '../styles'
import { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
import CardProbing from '../../frontend/components/Card/CardSimple.js';
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import { FAB, Chip, Title } from 'react-native-paper';
// TAB VIEW
import { TabView, SceneMap } from 'react-native-tab-view';
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




const initialLayout = { width: Dimensions.get('window').width };

const AllUIScreen = ({ navigation }) => {
    const [dataUser, setDataUser] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        fetch("http://192.168.100.18:4000/allUIModules")
            .then((response) => response.json())
            .then((responseData) => {
                setDataUser(responseData);
                // console.log("DATA: ", responseData);
                setisLoading(false)
            })

    }, []);
    // FAB
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    // FAB

    const [stateIn, setStateIn] = React.useState(false);
    const [stateOut, setStateOut] = React.useState(false);
    const [stateInOut, setStateInOut] = React.useState(false);
    const [stateSmall, setStateSmall] = React.useState(false);
    const [stateMedium, setStateMedium] = React.useState(false);
    const [stateLarge, setStateLarge] = React.useState(false);
    const chipSelect = (e) => {
        setStateIn(!stateIn),
        setStateOut(!stateOut),
        setStateInOut(!stateInOut),
        setStateSmall(!stateSmall),
        setStateMedium(!stateMedium),
        setStateLarge(!stateLarge)
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    {isLoading ?
                        <Spinner />
                        :
                        <View style={styles.container}>
                            <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} >
                                <View style={styles.containerChip} >
                                <Title>Filters</Title>
                                    <View style={styles.rowChip}>
                                        <Chip style={styles.chip} name="in" selected={stateIn} onPress={chipSelect} style={stateIn ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText}>In</Text>
                                        </Chip>
                                        <Chip style={styles.chip} name="out" selected={stateOut} onPress={chipSelect} style={stateOut ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText}>Out</Text>
                                        </Chip>
                                        <Chip style={styles.chip} name="inOut" selected={stateInOut} onPress={chipSelect} style={stateInOut ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText}>In-Out</Text>
                                        </Chip>
                                    </View>
                                    <View style={styles.rowChip}>
                                        <Chip style={styles.chip} name="small" selected={stateSmall} onPress={chipSelect} style={stateSmall ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText} >Small</Text>
                                        </Chip>
                                        <Chip style={styles.chip} name="medium" selected={stateMedium} onPress={chipSelect} style={stateMedium ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText} >Medium</Text>
                                        </Chip>
                                        <Chip style={styles.chip} name="large" selected={stateLarge} onPress={chipSelect} style={stateLarge ? styles.chipSelected : styles.chipNotSelected}>
                                            <Text style={styles.chipText} >Large</Text>
                                        </Chip>
                                    </View>
                                </View>
                                <View>
                                    {dataUser.map((item, index) =>
                                        <View>
                                            <CardProbing assets={item.assets} type={item.type} titleCard={item.name} text={item.description}
                                                data={dataPulsadores} isAvaiable={item.isAvaiable} usedIn={item.usedIn} urlDetail={item.urlDetail} />
                                        </View>
                                    )}

                                </View>

                            </ScrollView>
                        </View>
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default AllUIScreen;

