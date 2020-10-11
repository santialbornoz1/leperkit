import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {
        height: 'auto',
        flex: 1,
        backgroundColor: '#fafafa',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    // tinyLogo: {
    //     width: 150,
    //     height: 150,
    // },
    textCenter: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawer: {
        backgroundColor: 'black'
    },
    titleDetailScreen: {
        fontSize: 21,
        textAlign: 'center',
        margin: 10
    },
    scene: {
        flex: 1,
    },
    buttons: {
        margin: 10,
        marginRight: 50,
        marginLeft: 50
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
    blueColor: {
        backgroundColor: "#2096F3",
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
    },
    ///BUTTON
    containerView: {
        flex: 1,
      },
      loginScreenContainer: {
        flex: 1,
        backgroundColor: "#fafafa"
      },
      logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
      },
      loginFormView: {
        flex: 1
      },
      loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fff',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
      
      },
      loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
      },
      fbLoginButton: {
        height: 45,
        marginTop: 10,
        backgroundColor: 'transparent',
      },
    ///Refresh Control
    containerRefreshControl: {
        flex: 1,
      },
      scrollViewRefreshControl: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
      cardContainer: {
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#f7f7f7',
        borderColor: '#D2DBE0',
        borderWidth: 2,
    }
});