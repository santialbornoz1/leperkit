import * as React from 'react';
import styles from '../../styles'
import { Avatar, Card, Title, Paragraph, List, IconButton } from 'react-native-paper';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
import { mdiDotsVertical } from '@mdi/js';
import assets from '../../assets/assets.js';
import TableLepper from '../table.js';
import Table2 from '../Tables/Tables2';

const LeftContent = props => <Avatar.Icon {...props} style={{ backgroundColor: "blue" }} icon="folder" />
// const RightContent = (props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />

const CardSimple = (props) => {
    const [expanded, setExpanded] = React.useState(true);
    const [viewMore, setViewMore] = React.useState("Ver mas..");
    const handlePress = () => {
        setExpanded(!expanded);
        if (!expanded) { setViewMore("Ver mas..") }
        else { setViewMore("Ver menos..") }
    };
    function childrenOnClick() {
        props.onclick();
    }
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
                            <Table2 header1={"Pin"} header2={"Usa"} data={props.pins} />
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




