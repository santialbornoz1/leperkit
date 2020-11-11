import * as React from 'react';
import styles from '../../styles'
import { Avatar, Card, Title, Paragraph, List, IconButton, DataTable } from 'react-native-paper';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
import { mdiDotsVertical } from '@mdi/js';
import assets from '../../assets/assets.js';
import TableLepper from '../table.js';
import Table2 from '../Tables/Tables2';
import Spinner from '../../components/SpinnerLoading/SpinnerLoading';
import { useState, useEffect } from 'react';

const LeftContent = props => <Avatar.Icon {...props} style={{ backgroundColor: "blue" }} icon="folder" />
// const RightContent = (props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />

const CardSimple = (props) => {
    const [expanded, setExpanded] = React.useState(true);
    const [viewMore, setViewMore] = React.useState("Ver mas..");
    const [pinsData, setPinsData] = React.useState([]);


    const handlePress = () => {
        setExpanded(!expanded);
        if (!expanded) { setViewMore("Ver mas..") }
        else { setViewMore("Ver menos..") }
    };
    function childrenOnClick() {
        props.onclick();
    }

    useEffect(() => {
        var dataFiltered = props.pins.filter(item => item[Object.keys(item)[0]] === true);
        setPinsData(dataFiltered)
    }, [])
    return (
        <ScrollView>
            <Card style={styles.cardContainer} onPress={() => childrenOnClick()}>
                <Card.Title title={props.titleCard} subtitle={"Type:" + props.type} subtitleStyle={{ color: 'black', fontSize: 15 }} left={LeftContent} />
                <View style={{ alignItems: 'center' }}>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Card.Cover style={styles.tinyLogo} source={assets[props.assets]} />
                </View>
                <List.Section>
                    <List.Accordion
                        title={viewMore}
                        style={{ paddingBottom: 0 }}
                        left={props => { }} onPress={handlePress}>
                        <List.Item left={props => { }} description={props.text} style={{ position: 'relative', bottom: 10, paddingTop: 0, marginTop: 0 }} />
                        <Text>Usa los pines</Text>
                        <View style={{ paddingLeft: 0, margin: 15, marginHorizontal: 50 }}>
                            <DataTable style={{ paddingLeft: 0, backgroundColor: "#EEEEEE", marginBottom: 10 }}>
                                <DataTable.Header >
                                    <DataTable.Title style={{ justifyContent: 'center' }}>Pin</DataTable.Title>
                                    <DataTable.Title style={{ justifyContent: 'center' }}>Recurso sugerido</DataTable.Title>
                                </DataTable.Header>
                                {pinsData.map((item, index) =>
                                    <DataTable.Row key={index}>
                                        <DataTable.Cell style={{ justifyContent: 'center' }}>{Object.keys(item)[0]}</DataTable.Cell>
                                        <DataTable.Cell style={{ justifyContent: 'center' }}>{item[Object.keys(item)[1]]}</DataTable.Cell>
                                    </DataTable.Row>
                                )}
                            </DataTable>
                        </View>
                        <View style={{ paddingLeft: 0, margin: 15, marginHorizontal: 50 }}>
                            <Button success title="Ver datasheet" onPress={() => { Linking.openURL(props.urlDetail); }} />
                        </View>
                    </List.Accordion>
                </List.Section>
            </Card>
        </ScrollView>
    );
};

export default CardSimple;




