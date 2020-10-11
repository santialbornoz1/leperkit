import * as React from 'react';
import styles from '../styles';
import { useState, useEffect } from 'react';
import { View, ScrollView, Dimensions} from 'react-native';
import { urlBackEnd } from "../src/Functions/functions";
import CardProbing from '../../frontend/components/Card/Card.js';
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import { FAB, Chip, Title } from 'react-native-paper';
import axios from "axios";
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

var urlBack = urlBackEnd();
const initialLayout = { width: Dimensions.get('window').width };

function UIDetailScreen({ navigation }) {
    const [dataUser, setDataUser] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        fetch(urlBack + "test")
            .then((response) => response.json())
            .then((responseData) => {
                setDataUser(responseData);
                setisLoading(false);
            }).catch(function (error) {
                console.log(error);
            });
    }, []);
    // FAB
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    // FAB

    const [stateIn, setStateIn] = React.useState(false);
    const [stateOut, setStateOut] = React.useState(false);
    const [stateInOut, setStateInOut] = React.useState(false);

    const chipSelect = (e) => {
        setStateIn(!stateIn)
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
                                <View>
                                    {dataUser.map((item, index) =>
                                        <View key={index}>
                                            <CardProbing assets={item.assets} titleCard={item.name} text={item.description}
                                                data={dataPulsadores} isAvaiable={item.isAvaiable} usedIn={item.usedIn} urlDetail={item.urlDetail} />
                                        </View>
                                    )}
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                }
                <FAB.Group open={open} icon={open ? 'minus' : 'plus'} fabStyle={{ backgroundColor: "blue" }} style={{ underlayColor: 'red' }}
                    actions={[
                        {
                            icon: 'plus',
                            label: 'Agregar UI',
                            onPress: () => navigation.navigate('AddNewUI')
                        },
                        {
                            icon: 'star',
                            label: 'Ver todos los UI',
                            onPress: () => navigation.navigate('AllUI'),
                        }
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {

                        }
                    }}
                />
            </View>
        </>
    )
}

export default UIDetailScreen;




