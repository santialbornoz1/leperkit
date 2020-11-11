
import React from 'react';
import styles from '../styles';
import { View, ScrollView, Linking } from 'react-native';
import { Title, Subheading, List } from 'react-native-paper';
import Appbar from "../components/Appbar/Appbar"
import { useState, useEffect } from 'react';
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import { urlBackEnd } from "../src/Functions/functions";

function AllCatalogue({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const [modules, setModules] = useState([]);
    var urlBack = urlBackEnd();

    useEffect(() => {
        setIsLoading(true);
        fetch(urlBack + "allModules")
            .then((response) => response.json())
            .then((response) => {
                console.log("responseData", response);
                setModules(response);
                setIsLoading(false);
            })
    }, [])

    return (
        <>
            <Appbar title="Catalogo completo" navigation={navigation} hasBack={true} />
            <View style={styles.container}>
                {isLoading ?
                    <Spinner />
                    :
                    <>
                        <ScrollView>
                            <Title style={styles.titleDetailScreen}>Modulos</Title>
                            {modules.map((item, index) =>
                                <List.Item key={index}
                                    title={item.model}
                                    description="Presiona aqui para la hoja de datos"
                                    left={props => <List.Icon {...props} icon="folder" />}
                                    style={{ backgroundColor: '#dddddd', margin: 10 }}
                                    onPress={() => { Linking.openURL(item.urlDetail); }}
                                />
                            )}
                        </ScrollView>
                    </>}
            </View>
        </>
    )
}

export default AllCatalogue;
