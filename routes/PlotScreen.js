import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import styles from '../styles'
import { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
import CardProbing from '../../frontend/components/Card/CardSimple.js';
import { urlFrontEnd, urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import { FAB, Chip, Title } from 'react-native-paper';
import Appbar from "../components/Appbar/Appbar";
import { Checkbox, RadioButton } from 'react-native-paper';


function PlotScreen({ navigation }) {
    const [isLoading, setisLoading] = useState(false);
    const [value, setValue] = React.useState('first');
    const [disableButton, setDisableButton] = useState(false);
    const [models, setModels] = useState(["G1", "G2", "G3", "G4", "R1", "R2", "R3", "Y1", "Y2", "Y3", "Y4", "B1", "B2", "B3", "B4", "B5", "I2C"]);
    const [options, setOptions] = useState();
    const optionused = [];

    useEffect(() => {
        const received = navigation.getParam("models2");
        for (const option in received) {
            if(received[option] === true){
                optionused.push(models[option]);
            }
        }
        setOptions(optionused);
    }, []);

    const selectingOption = () => {
        alert("E")
    }

    const onContinue = () => {
        navigation.push('Assignpin', {options});
    }
    return (
        <>
            <Appbar title="Plot screen" navigation={navigation} hasBack={true} />
            <View style={styles.container}>
                {isLoading ?
                    <Spinner />
                    :
                    <ScrollView>
                        <View style={styles.container}>
                            <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} >
                                <View>
                                    <Text style={styles.titleDetailScreen}>Selecciona el Lepercom a configurar</Text>
                                </View>
                                <View>
                                    <ScrollView>
                                        <View style={{ backgroundColor: "#fff", marginHorizontal: 16, marginVertical: 5, borderRadius: 16, borderWidth: 3, borderColor: "grey" }}>
                                            <Checkbox.Item color="#2096F3" label={"Casa (LBB3)"} status="checked" onPress={() => selectingOption()} />
                                        </View>
                                    </ScrollView>
                                    <ScrollView>
                                        <View style={{ backgroundColor: "#fff", marginHorizontal: 16, marginVertical: 5, borderRadius: 16, borderWidth: 3, borderColor: "grey" }}>
                                            <Checkbox.Item color="#2096F3" label={"Cocina  (LBB3)"} status="!checked" onPress={() => selectingOption()} />
                                        </View>
                                    </ScrollView>
                                    <ScrollView>
                                        <View style={{ backgroundColor: "#fff", marginHorizontal: 16, marginVertical: 5, borderRadius: 16, borderWidth: 3, borderColor: "grey" }}>
                                            <Checkbox.Item color="#2096F3" label={"Comedor  (LBB3)"} status="!checked" onPress={() => selectingOption()} />
                                        </View>
                                    </ScrollView>
                                    <View style={styles.buttons} >
                                        <Button title="Siguiente" onPress={() => onContinue()} disabled={disableButton} />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                }
            </View>
        </>
    )
}

export default PlotScreen;
