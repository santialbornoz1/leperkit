import React from 'react';
import styles from '../../styles';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { List, Avatar, Card, Button, Title, Paragraph, DataTable, Subheading } from 'react-native-paper';


const Table2 = (props) => {
    var pins = props.data;
    // console.log(pins);
    const entries = Object.entries(pins);           //TRANSFORMO OBJETO EN ARRAY para poder listarlo
    const result = entries.filter(entries => entries[1] == true); //LO FILTRO POR SOLO LOS QUE USA PARA MOSTRAR SOLO ESOS
    console.log(result);

    return (
        <>
            {/* <ScrollView> */}
            <DataTable style={{ paddingLeft: 0, backgroundColor: "#EEEEEE", marginBottom: 10 }}>
                <DataTable.Header >
                    <DataTable.Title style={{ justifyContent: 'center' }}>{props.header1}</DataTable.Title>
                    <DataTable.Title style={{ justifyContent: 'center' }}>{props.header2}</DataTable.Title>
                </DataTable.Header>
                {result.map((item, index) =>
                    <DataTable.Row>
                        {item[1] ?
                            <>
                                <DataTable.Cell style={{ justifyContent: 'center' }}>{item[0]}</DataTable.Cell>
                                <DataTable.Cell style={{ justifyContent: 'center' }}>X</DataTable.Cell>
                            </>
                            :
                            <></>
                        }

                    </DataTable.Row>
                )}

            </DataTable>
            {/* </ScrollView> */}
        </>
    )
}

export default Table2;
