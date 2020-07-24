import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import assets from '../assets/assets.js';
import TableLepper from '../components/table.js';

const CardUI = (props) => {
    const onPressCard = (e) => {
        props.onPress();
    }
    return (
        <TouchableHighlight style={styles.touchableCard} activeOpacity={1} underlayColor="#EDF0F2" onPress={onPressCard}>
            <View style={styles.containerCard}>
                <View style={styles.imageContainerAndText}>
                    <Text style={styles.radioButtonContainer}>{props.titleCard}</Text>
                    <Text style={styles.radioButtonContainer}>{props.titleCard2}</Text>
                    <Image style={styles.imageContainer} source={assets[props.imagePath]} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.blue}>{props.text}</Text>
                </View>
                <View style={styles.textContainer}>
                    <View style={{ margin: 3 }}>
                        {props.isAvaiable ?
                            <View>
                                <Text style={{ color: 'green', textAlign: 'center' }}>Libre</Text>
                            </View>
                            :
                            <View>
                                <Text style={{ color: 'red', textAlign: 'center' }}>Usado en {props.usedIn}</Text>
                            </View>
                        }
                        <TableLepper data={props.data} />
                    </View>
                    <View style={{ margin: 3 }}>
                        <Button style={{ marginLeft: 20 }} title="Datasheet" ></Button>
                    </View>
                </View>

            </View>
        </TouchableHighlight>
    )
}

export default CardUI;


const styles = StyleSheet.create({
    touchableCard: {
        height: 'auto',
        // flex: 1,
        height: 220,
        flexDirection: 'row',
        borderColor: '#D2DBE0',
        borderWidth: 3,
        backgroundColor: '#EDF0F2',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 20
    },
    containerCard: {
        height: 'auto',
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 20
    },
    imageAndTextContainer: {
        flex: 1,
    },
    textContainer: {
        flex: 3,
        margin: 10,
        borderRadius: 20,
    },
    radioButtonContainer: {
        // width: 120,
        // height: 100,
        // flex: 2,
    },
    imageContainer: {
        width: 120,
        height: 120,
        flex: 2,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blue: {
        flex: 1,
        // backgroundColor: 'blue'
    },
    green: {
        flex: 4,
        backgroundColor: 'green'
    },
    radioButtonContainer: {
        textAlign: 'center',
    },
    backgroundProb: {
        backgroundColor: 'red'
    },
    text: {
        textAlign: 'center',
    }
});


