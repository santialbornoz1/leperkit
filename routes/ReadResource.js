import * as React from 'react';
import styles from '../styles'
import { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
import CardProbing from '../../frontend/components/Card/CardSimple.js';
import { urlFrontEnd, urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import { FAB, Chip, Title } from 'react-native-paper';

var urlFront = urlFrontEnd();
var urlBack = urlBackEnd();

const ReadResourceScreen = ({ navigation }) => {
    const [isLoading, setisLoading] = useState(false);
    const [value, setValue] = React.useState('first');
    const [disableButton, setDisableButton] = useState(false);
    const [checked, setChecked] = React.useState('first');

    useEffect(() => {
    }, []);

    const selectingOption = () => {
        // alert("E")
    }
    const onContinue = (id) => {

        switch(id){
            case 1:
            alert("E")
            return;
            default:
            alert("B")
        }
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
                                    <Title>Configuracion de los recursos</Title>
                                </View>
                                <View style={styles.buttons} >
                                    <Button title="Quiero leer un recurso" onPress={() => onContinue(1)} disabled={disableButton} />
                                </View>
                                <View style={styles.buttons} >
                                    <Button title="Quiero setear un recurso " onPress={() => onContinue(2)} disabled={disableButton} />
                                </View>
                                <View style={styles.buttons} >
                                    <Button title="Quiero eliminar un recurso "  onPress={() => onContinue(3)} disabled={disableButton} />
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

