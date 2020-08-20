import * as React from 'react';
import { Avatar, Card, Title, Paragraph, List , IconButton } from 'react-native-paper';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label, Linking } from 'react-native';
import { mdiDotsVertical } from '@mdi/js';
import assets from '../../assets/assets.js';
import TableLepper from '../../components/table.js';


const LeftContent = props => <Avatar.Icon {...props}  style={{backgroundColor: "blue"}} icon="folder" />
// const RightContent = (props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />

const CardSimple = (props) => {
    const [expanded, setExpanded] = React.useState(true);
    const [viewMore, setViewMore] = React.useState("Ver mas..");
    const handlePress = () => {
        setExpanded(!expanded);
        if (!expanded) { setViewMore("Ver mas..") }
        else { setViewMore("Ver menos..") }
    };


    return (
        <ScrollView>
            {/* <View> */}
            <Card style={styles.cardContainer}>
                    <Card.Title title={props.titleCard} subtitle={"Type:" + props.type} subtitleStyle={{ color: 'black', fontSize: 15 }}left={LeftContent}  />
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
                        <View style={{ paddingLeft: 0, marginHorizontal: 50 }}>
                            <TableLepper data={props.data} style={{ margin: 0 }} />
                        </View>
                        <View style={{ paddingLeft: 0, margin: 15, marginHorizontal: 50 }}>
                            <Button success title="Ver datasheet" onPress={() => { Linking.openURL(props.urlDetail); }} />
                        </View>
                    </List.Accordion>
                </List.Section>
            </Card>
            {/* </View> */}
        </ScrollView>
    );
};

export default CardSimple;




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

