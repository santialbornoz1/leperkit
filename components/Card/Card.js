import * as React from 'react';
import { Avatar, Card, Title, Paragraph, List } from 'react-native-paper';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
import assets from '../../assets/assets.js';
import TableLepper from '../../components/table.js';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardProbing = (props) => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    // console.log("Props: ", props)
    console.log("USED: ", props.usedIn)
    return (
        <View>
            <Card style={styles.cardContainer}>
                {props.isAvaiable ?
                    <Card.Title title={props.titleCard} subtitle="Estado: Libre" subtitleStyle={{ color: 'green', fontSize: 15 }} left={LeftContent} />
                    :
                    <Card.Title  title={props.titleCard} subtitle={"Estado: Usado en " + props.usedIn} subtitleStyle={{ color: 'red', fontSize: 15 }} left={LeftContent} />
                }
                <View style={{ alignItems: 'center' }}>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Card.Cover style={styles.tinyLogo} source={assets[props.imagePath]} />
                </View>
                <List.Section>
                    <List.Accordion
                        title="Ver mas.."
                        style={{ paddingBottom: 0 }}
                        left={props => { }}>
                        <List.Item left={props => { }} description={props.text} style={{ position: 'relative', bottom: 10, paddingTop: 0, marginTop: 0 }} />
                        <View style={{ paddingLeft: 0, marginHorizontal: 50 }}>
                            <TableLepper data={props.data} style={{ margin: 0 }} />
                        </View>
                        <View style={{ paddingLeft: 0, margin: 15, marginHorizontal: 50 }}>
                            <Button success title="Ver datasheet" onPress={() => { Linking.openURL(props.urlDetail); }} />
                        </View>
                    </List.Accordion>
                </List.Section>
            </Card>
        </View>
    );
};

export default CardProbing;




const styles = StyleSheet.create({
    cardContainer: {
        // backgroundColor: 'red',
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#f7f7f7',
        // boxShadow: 20 20 60 '#d2d2d2', - 20 - 20 60 '#ffffff',
        borderColor: '#D2DBE0',
        borderWidth: 2,
    },
    tinyLogo: {
        width: 150,
        height: 150,
    },
    buttons: {
        margin: 10,
        marginHorizontal: 30
    }
});

