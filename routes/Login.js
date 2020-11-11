import React, { useState } from 'react';
import { Text, View, Button, Keyboard, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../styles";
import { SocialIcon } from 'react-native-elements';
import useForm from '../hooks/useForm';
import { urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import AwesomeAlert from 'react-native-awesome-alerts';
import SyncStorage from 'sync-storage';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

function LoginScreen({ navigation }) {
    const [isLoading, setisLoading] = useState(false);
    const [showmessage, setShowMessage] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
        check_textInputChange: false,
        secureTextEntry: true
    })
    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }
    const textPasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    var urlBack = urlBackEnd();
    const initialState = {
        email: '',
        password: '',
    }
    const onSubmit = values => {
        setisLoading(true);
        const data = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };

        fetch(urlBack + "login", data)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setisLoading(false);
                const result = SyncStorage.get('token');
                console.log("result", result); // 'bar'

                if (response.ok) {
                    //DEBO SETEAR COOKIE
                    SyncStorage.set('token', 'ejemplo');
                    navigation.navigate('Home');
                }
                else {
                    setShowMessage(true);
                }


            })
    }
    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)

    return (
        <>
            <View style={styles.container}>
                {isLoading ?
                    <Spinner />
                    :
                    <View style={styles.containerLogin}>
                        <StatusBar barStyle="ligth-content" />
                        <View style={styles.headerLogin}>
                            <Image
                                source={require("../assets/logo2.png")}
                                style={styles.logoLogin}
                                resizeMode="stretch"
                            />
                            <Text style={styles.textheaderLogin}>Bienvenido</Text>
                        </View>
                        <Animatable.View style={styles.footerLogin} animation="fadeInUpBig">
                            <Text style={styles.textFooterLogin}>Email</Text>
                            <View style={styles.actionLogin}>
                                <FontAwesome
                                    name="user-o"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Tu usuario"
                                    style={styles.textInputLogin}
                                    autoCapitalize="none"
                                    onChangeText={(val) => textInputChange(val)}
                                />
                                {data.check_textInputChange ?
                                    <Animatable.View animation="bounceIn">
                                        <Feather
                                            name="check-circle"
                                            color="green"
                                            size={20}
                                        />
                                    </Animatable.View> : null}
                            </View>
                            <Text style={[styles.textFooterLogin, { marginTop: 35 }]}>Contraseña</Text>
                            <View style={styles.actionLogin}>
                                <Feather
                                    name="lock"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Tu contraseña"
                                    secureTextEntry={data.secureTextEntry ? true : false}
                                    style={styles.textInputLogin}
                                    autoCapitalize="none"
                                    onChangeText={(val) => textPasswordChange(val)}
                                />
                                <TouchableOpacity onPress={updateSecureTextEntry}>
                                    {data.secureTextEntry ?
                                        <Feather
                                            name="eye-off"
                                            color="green"
                                            size={20}
                                        />
                                        :
                                        <Feather
                                            name="eye"
                                            color="green"
                                            size={20}
                                        />
                                    }
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonLogin} onPress={() => console.log("E")}>
                                <LinearGradient
                                    colors={["#08d4c4", "#01ab9d"]}
                                    style={styles.signInLogin}
                                >
                                    <Text style={[styles.textSignInLogin, {
                                        color: "#fff"
                                    }]}>Ingresar</Text>
                                </LinearGradient>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Register')}
                                style={[styles.signInLogin, {
                                    borderColor: "#009387",
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}>
                                <Text style={[styles.textSignInLogin, {
                                    color: "#009387",
                                }]}>Registrarme</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.signInLogin, {
                                    borderColor: "blue",
                                    backgroundColor: "blue",
                                    borderWidth: 1,
                                    marginTop: 15,
                                    flexDirection: 'row',
                                }]}>
                                <FontAwesome
                                    name="facebook"
                                    color="#fff"
                                    size={20}
                                />
                                <Text style={[styles.textSignInLogin, {
                                    color: "#fff"
                                }]}>   Ingresar con Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.signInLogin, {
                                    borderColor: "red",
                                    backgroundColor: "red",
                                    borderWidth: 1,
                                    marginTop: 15,
                                    flexDirection: 'row',
                                }]}>
                                <FontAwesome
                                    name="google"
                                    color="#fff"
                                    size={20}
                                />
                                <Text style={[styles.textSignInLogin, {
                                    color: "#fff"
                                }]}>   Ingresar con Google</Text>
                            </TouchableOpacity>

                        </Animatable.View>
                    </View>
                    // <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                    //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    //         <View style={styles.loginScreenContainer}>
                    //             <View style={styles.loginFormView}>
                    //                 <Text style={styles.logoText}>Leperkit</Text>
                    //                 <TextInput autoCapitalize="none" value={inputs.email} onChangeText={subscribe('email')} placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                    //                 <TextInput autoCapitalize="none" value={inputs.password} onChangeText={subscribe('password')} placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
                    //                 <View style={[styles.buttons, styles.blueColor]}>
                    //                     <Button success title="Login" color="white" onPress={handleSubmit} />
                    //                 </View>
                    //                 <View style={styles.buttons}>
                    //                     <Text h1 onPress={() => navigation.navigate('Register')}>¿No tenes cuenta? Registrate aquí</Text>
                    //                 </View>
                    //                 <View style={{ top: 100 }}>
                    //                     <View >
                    //                         <SocialIcon title='Sign In With Facebook' button type='facebook' />
                    //                     </View>
                    //                     <View>
                    //                         <SocialIcon title='Sign In With Google' button type='google' />
                    //                     </View>
                    //                 </View>
                    //             </View>
                    //         </View>
                    //     </TouchableWithoutFeedback>
                    // </KeyboardAvoidingView>
                }
                <AwesomeAlert
                    show={showmessage}
                    showProgress={false}
                    title="Error"
                    message="Los datos ingresados son incorrectos."
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="Intentarlo nuevamente"
                    confirmButtonColor="blue"
                    onConfirmPressed={() => {
                        setShowMessage(false);
                    }}
                />
            </View>
        </>
    )
}

export default LoginScreen;




