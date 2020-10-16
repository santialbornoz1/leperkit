import React from 'react';
import styles from '../../styles';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { List, Avatar, Card, Button, Title, Paragraph, DataTable, Subheading } from 'react-native-paper';


const Table = (props) => {

    // console.log("props.data", props.data);
    function childrenOnClick(option) { props.onclick(option); }
    return (
        <>
            {/* <ScrollView> */}
            <DataTable style={{ paddingLeft: 0, backgroundColor: "#EEEEEE" }}>
                <DataTable.Header >
                    <DataTable.Title style={{ justifyContent: 'center' }}>{props.header1}</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center' }}>{props.header2}</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center' }}>{props.header3}</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center' }}>{props.header4}</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center' }}>{props.header5}</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center' }}>{props.header6}</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center' }}>{props.header7}</DataTable.Title>
                </DataTable.Header>
                {props.data.map((item, index) =>
                    <DataTable.Row onPress={() => childrenOnClick(item)}>
                    <DataTable.Cell style={{ justifyContent: 'center' }}>{item.model}</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: 'center' }}>{item.label}</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: 'center' }}>{item.name}</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: 'center' }}>{item.type}</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: 'center' }}>{item.LOC}</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: 'center' }}>{item.DLOC}</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: 'center' }}>{item.LTZ}</DataTable.Cell>
                </DataTable.Row>
                )}
            </DataTable>
            {/* </ScrollView> */}
        </>
    )
}

export default Table;
