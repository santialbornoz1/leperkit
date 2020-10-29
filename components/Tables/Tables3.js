import React from 'react';
import styles from '../../styles';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { List, Avatar, Card, Button, Title, Paragraph, DataTable, Subheading } from 'react-native-paper';

const Table3 = (props) => {
    // console.log(props.data)
    function childrenOnClick(option) { props.onclick(option); }
    return (
        <>
            {/* <ScrollView> */}
            <View style={{ margin: 15 }}>
                <DataTable style={{ paddingLeft: 0, backgroundColor: "#EEEEEE" }}>
                    <DataTable.Header >
                        <DataTable.Title style={{ justifyContent: 'center' }}>{props.header1}</DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }}>{props.header2}</DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }}>{props.header3}</DataTable.Title>
                    </DataTable.Header>
                    {props.data.map((item, index) =>
                        <DataTable.Row key={index} onPress={() => childrenOnClick(item)}>
                            <DataTable.Cell style={{ justifyContent: 'center' }}>{item.pin}</DataTable.Cell>
                            <DataTable.Cell style={{ justifyContent: 'center' }}>{item.resource}</DataTable.Cell>
                            <DataTable.Cell style={{ justifyContent: 'center' }}>{item.description}</DataTable.Cell>
                        </DataTable.Row>
                    )}
                </DataTable>
            </View>
            {/* </ScrollView> */}

        </>
    )
}

export default Table3;
