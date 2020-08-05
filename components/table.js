import * as React from 'react';
import { StyleSheet } from 'react-native';

// TABLE
import { Table, Row, Rows } from 'react-native-table-component';



const TableLepper = (props) => {

    return (
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={props.data.tableHead} style={styles.head} textStyle={styles.text} />
            <Rows data={props.data.tableData} textStyle={styles.text} />
        </Table>
    )
}

export default TableLepper;



const styles = StyleSheet.create({
    touchableCard: {
        height: 'auto',
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
