import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {
        height: 'auto',
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    textCenter: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawer: {
        backgroundColor: 'black'
    },
    titleDetailScreen: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10
    },
    scene: {
        flex: 1,
    },
    buttons: {
        margin: 10
    },
    containerSpinner: {
        flex: 1,
        justifyContent: "center",
    },
    horizontalSpinner: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    containerChip: {
        flex: 1,
        alignItems: "center",
        
    },
    rowChip: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,

    },
    chip: {
        backgroundColor: "#2096F3",
    },
    chipText: {
        color: "black",
    },
    chipSelected: {
        backgroundColor: "#bebebe"
    },
    chipNotSelected: {
        backgroundColor: "#ebebeb",
        
    },
    containerSpinner: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#fff'
    },
    horizontalSpinner: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});