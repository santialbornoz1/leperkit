import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight } from 'react-native';


const Card = (props) => {
    var source = props.source;
const onPressCard = () => {
    console.log("a");
}
    return (
     <TouchableHighlight style={styles.touchableCard} onPress={() => onPressCard}>         
        <View style={styles.containerCard}>
            <View style={styles.imageContainerAndText}>
                <Text style={styles.radioButtonContainer}>{props.titleCard}</Text>
                <Image style={styles.imageContainer} source={require('../resources/images/teclado-numerico.jpg')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.blue}>{props.text}</Text>
            </View>
        </View>
        </TouchableHighlight>
    )
}


export default Card;


const styles = StyleSheet.create({
    touchableCard: {
        height: 'auto',
        flex: 1,
        flexDirection: 'row',
        borderColor: '#D2DBE0',
        borderWidth: 3,
        backgroundColor: '#EDF0F2',
        // backgroundColor: '#D2DBE0',
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
        borderColor: '#D2DBE0',
        borderWidth: 3,
        backgroundColor: '#EDF0F2',
        // backgroundColor: '#D2DBE0',
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
    },
    radioButtonContainer: {
        fontSize: 30,
        // width: 120,
        // height: 100,
        flex: 2,
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
    }
});


