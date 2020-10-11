import React from 'react';
import styles from '../../styles';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { List, Avatar, Card, Button, Title, Paragraph, DataTable, Subheading } from 'react-native-paper';


function ListAllLbbs({ navigation }) {

    function onclick(){
        navigation.push('ViewLbbDetail');
    }
    return (
        <>
            <DataTable style={{ paddingLeft: 0, backgroundColor: "#EEEEEE" }}>
                <DataTable.Header >
                    <DataTable.Title>Modelo</DataTable.Title>
                    <DataTable.Title >Label</DataTable.Title>
                    <DataTable.Title >Type</DataTable.Title>
                    <DataTable.Title >Nombre</DataTable.Title>
                    <DataTable.Title >LOC</DataTable.Title>
                    <DataTable.Title >DLOC</DataTable.Title>
                    <DataTable.Title >LTZ</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row onPress={() => onclick()}>
                    <DataTable.Cell > 3X</DataTable.Cell>
                    <DataTable.Cell >AAB</DataTable.Cell>
                    <DataTable.Cell >TLUZ</DataTable.Cell>
                    <DataTable.Cell >Alacena cocina</DataTable.Cell>
                    <DataTable.Cell >CCO</DataTable.Cell>
                    <DataTable.Cell >Cocina</DataTable.Cell>
                    <DataTable.Cell >-3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row onPress={() => alert("b")}>
                    <DataTable.Cell>3X</DataTable.Cell>
                    <DataTable.Cell >AAB</DataTable.Cell>
                    <DataTable.Cell >TLUZ</DataTable.Cell>
                    <DataTable.Cell >Alacena cocina</DataTable.Cell>
                    <DataTable.Cell >CCO</DataTable.Cell>
                    <DataTable.Cell >Cocina</DataTable.Cell>
                    <DataTable.Cell >-3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row onPress={() => alert("c")}>
                    <DataTable.Cell>3X</DataTable.Cell>
                    <DataTable.Cell >AAB</DataTable.Cell>
                    <DataTable.Cell >TLUZ</DataTable.Cell>
                    <DataTable.Cell >Alacena cocina</DataTable.Cell>
                    <DataTable.Cell >CCO</DataTable.Cell>
                    <DataTable.Cell >Cocina</DataTable.Cell>
                    <DataTable.Cell >-3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row onPress={() => alert("d")}>
                    <DataTable.Cell>3X</DataTable.Cell>
                    <DataTable.Cell >AAB</DataTable.Cell>
                    <DataTable.Cell >TLUZ</DataTable.Cell>
                    <DataTable.Cell >Alacena cocina</DataTable.Cell>
                    <DataTable.Cell >CCO</DataTable.Cell>
                    <DataTable.Cell >Cocina</DataTable.Cell>
                    <DataTable.Cell >-3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row onPress={() => alert("e")}>
                    <DataTable.Cell>3X</DataTable.Cell>
                    <DataTable.Cell >AAB</DataTable.Cell>
                    <DataTable.Cell >TLUZ</DataTable.Cell>
                    <DataTable.Cell >Alacena cocina</DataTable.Cell>
                    <DataTable.Cell >CCO</DataTable.Cell>
                    <DataTable.Cell >Cocina</DataTable.Cell>
                    <DataTable.Cell >-3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row onPress={() => alert("f")}>
                    <DataTable.Cell>3X</DataTable.Cell>
                    <DataTable.Cell >AAB</DataTable.Cell>
                    <DataTable.Cell >TLUZ</DataTable.Cell>
                    <DataTable.Cell >Alacena cocina</DataTable.Cell>
                    <DataTable.Cell >CCO</DataTable.Cell>
                    <DataTable.Cell >Cocina</DataTable.Cell>
                    <DataTable.Cell >-3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row onPress={() => alert("g")}>
                    <DataTable.Cell>3X</DataTable.Cell>
                    <DataTable.Cell >AAB</DataTable.Cell>
                    <DataTable.Cell >TLUZ</DataTable.Cell>
                    <DataTable.Cell >Alacena cocina</DataTable.Cell>
                    <DataTable.Cell >CCO</DataTable.Cell>
                    <DataTable.Cell >Cocina</DataTable.Cell>
                    <DataTable.Cell >-3</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </>
    )
}

export default ListAllLbbs;
