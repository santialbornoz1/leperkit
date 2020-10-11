import React from 'react';
import { Navigation } from 'react-native-navigation';
import styles from '../../styles';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { List, Avatar, Card, Button, Title, Paragraph, DataTable } from 'react-native-paper';

function Prueba({ navigation, props }) {
    const [expanded, setExpanded] = React.useState(true);
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const handlePress = () => setExpanded(!expanded);
    return (
        <>
            <List.Section title="Recursos" >
                <List.Accordion
                    title="Ver recursos asignados actualmente"
                    left={props => { }} >
                    <DataTable style={{ paddingLeft: 0, backgroundColor: "#EEEEEE" }}>
                        <DataTable.Header >
                            <DataTable.Title>Pines</DataTable.Title>
                            <DataTable.Title >Recurso asociado</DataTable.Title>
                            <DataTable.Title >Descripcion</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row>
                            <DataTable.Cell>31Y1</DataTable.Cell>
                            <DataTable.Cell >DO01</DataTable.Cell>
                            <DataTable.Cell >Toma cafetera</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>31Y2</DataTable.Cell>
                            <DataTable.Cell >DI02</DataTable.Cell>
                            <DataTable.Cell>Pulsador</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>31R1</DataTable.Cell>
                            <DataTable.Cell ></DataTable.Cell>
                            <DataTable.Cell ></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>31R2</DataTable.Cell>
                            <DataTable.Cell ></DataTable.Cell>
                            <DataTable.Cell ></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>31R3</DataTable.Cell>
                            <DataTable.Cell >PW01</DataTable.Cell>
                            <DataTable.Cell>Tira de led blanca</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>31G1</DataTable.Cell>
                            <DataTable.Cell >TR01</DataTable.Cell>
                            <DataTable.Cell >Luz techo</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>31G2</DataTable.Cell>
                            <DataTable.Cell >TR02</DataTable.Cell>
                            <DataTable.Cell >Ventilador techo</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </List.Accordion>
            </List.Section>
        </>
    )
}

export default Prueba;
