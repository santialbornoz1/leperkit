import React from 'react';
import { List, Avatar, Card, Button, Title, Paragraph, DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native';

// function AccordeonWithTable({ navigation, props }) {
const AccordeonWithTable = (props) => {
    const [expanded, setExpanded] = React.useState(true);
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const handlePress = () => setExpanded(!expanded);
    return (
        <>
        <ScrollView>
            <List.Section title="Recursos" >
                <List.Accordion
                    title={props.title}
                    left={props => { }} >
                    <DataTable style={{ paddingLeft: 0, backgroundColor: "#EEEEEE" }}>
                        <DataTable.Header >
                            <DataTable.Title style={{justifyContent: 'center'}}>Pines</DataTable.Title>
                            <DataTable.Title style={{justifyContent: 'center'}}>Recurso asociado</DataTable.Title>
                            <DataTable.Title style={{justifyContent: 'center'}}>Descripcion</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row>
                            <DataTable.Cell style={{justifyContent: 'center'}}>31Y1</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}>DO01</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}>Toma cafetera</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell style={{justifyContent: 'center'}}>31Y2</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}>DI02</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}>Pulsador</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell style={{justifyContent: 'center'}}>31R1</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}></DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell style={{justifyContent: 'center'}}>31R2</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}></DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell style={{justifyContent: 'center'}}>31R3</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}>PW01</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}>Tira de led blanca</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell style={{justifyContent: 'center'}}>31G1</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}>TR01</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}>Luz techo</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell style={{justifyContent: 'center'}}>31G2</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}>TR02</DataTable.Cell>
                            <DataTable.Cell style={{justifyContent: 'center'}}>Ventilador techo</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </List.Accordion>
            </List.Section>
            </ScrollView>
        </>
    )
}

export default AccordeonWithTable;
