import { Platform, StyleSheet } from 'react-native';
import * as Font from "expo-font";
import {Dimensions} from 'react-native';

const getFonts = () => Font.loadAsync({
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'openSans-medium': require('./assets/fonts/OpenSans-Regular.ttf'),
    'monserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
})
getFonts();

const {height} = Dimensions.get("screen");
const heigth_logo = height * 0.16;

export default StyleSheet.create({
    containerLogin: {
        flex: 1,
        backgroundColor: '#009387'
    },
    headerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerLogin:{
        flex: 2,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    logoLogin: {
        width: heigth_logo,
        height: heigth_logo
    },
    textheaderLogin: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30
    },
    actionLogin: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5
    },
    textInputLogin: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a"
    },
    textFooterLogin: {
        color: "#05375a",
        fontSize: 18
    },
    buttonLogin: {
        alignItems: "center",
        marginTop: 50
    },
    signInLogin:{
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    textSignInLogin: {
       fontSize: 18,
       fontWeight: "bold"
    },
    fontText: {
        fontFamily: 'monserrat-regular'
    },
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
        marginLeft: 50,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 30,
        tintColor: 'red'
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
    },
    //COLORS
    redColor: {
        backgroundColor: "red",
    },
    blueColor: {
        backgroundColor: "blue",
    },
    greenColor: {
        backgroundColor: "green",
    },
    blackColor: {
        backgroundColor: "black",
    },
    yellowColor: {
        backgroundColor: "yellow",
    }
});