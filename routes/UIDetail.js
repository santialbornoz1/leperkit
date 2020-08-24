import * as React from 'react';
import styles from '../styles';
import { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
import { urlFrontEnd, urlBackEnd } from "../src/Functions/functions";
import CardProbing from '../../frontend/components/Card/Card.js';
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



var urlFront = urlFrontEnd();
var urlBack = urlBackEnd();
const initialLayout = { width: Dimensions.get('window').width };

const UIDetailScreen = ({ navigation }) => {
    const [dataUser, setDataUser] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        fetch(urlBack + "test")
            .then((response) => response.json())
            .then((responseData) => {
                setDataUser(responseData);
                console.log("DATA: ", responseData);
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
    const chipSelect = (e) => {
        setStateIn(!stateIn)
        console.log(e.target)
    }
    return (
        <View style={styles.container}>
                    {isLoading ?
                        <Spinner />
                        :
                        <ScrollView>
                        <View style={styles.container}>
                            <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }} >

                                {/* <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={initialLayout}
                        /> */}
                                <View>
                                    {dataUser.map((item, index) =>
                                        <View>
                                            <CardProbing assets={item.assets} titleCard={item.name} text={item.description}
                                                data={dataPulsadores} isAvaiable={item.isAvaiable} usedIn={item.usedIn} urlDetail={item.urlDetail} />
                                        </View>
                                    )}

                                </View>

                            </ScrollView>
                        </View>
                        </ScrollView>
                    }
            <FAB.Group
                open={open}
                icon={open ? 'minus' : 'plus'}
                fabStyle={{ backgroundColor: "blue" }}
                style={{ underlayColor: 'red' }}
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
                    },
                    {
                        icon: 'email',
                        label: 'Email',
                        onPress: () => console.log('Pressed email'),
                    },
                    {
                        icon: 'bell',
                        label: 'Remind',
                        onPress: () => console.log('Pressed notifications'),
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                        // do something if the speed dial is open
                    }
                }}
            />
        </View>
    )
}

export default UIDetailScreen;




