import React, { useState } from 'react';
import { Text, View, Button, Keyboard, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import styles from "../styles";
import { SocialIcon } from 'react-native-elements';
import useForm from '../hooks/useForm';
import { urlBackEnd } from "../src/Functions/functions";
import Spinner from '../components/SpinnerLoading/SpinnerLoading';
import AwesomeAlert from 'react-native-awesome-alerts';
import SyncStorage from 'sync-storage';

function LoginScreen({ navigation }) {
    const [isLoading, setisLoading] = useState(false);
    const [showmessage, setShowMessage] = useState(false);

    var urlBack = urlBackEnd();
    const initialState = {
        email: '',
        password: '',
    }
    const onSubmit = values => {
        // console.log(values);
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
                    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.loginScreenContainer}>
                                <View style={styles.loginFormView}>
                                    <Text style={styles.logoText}>Leperkit</Text>
                                    <TextInput autoCapitalize="none" value={inputs.email} onChangeText={subscribe('email')} placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                                    <TextInput autoCapitalize="none" value={inputs.password} onChangeText={subscribe('password')} placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
                                    <View style={[styles.buttons , styles.blueColor]}>
                                        <Button success title="Login" color="white" onPress={handleSubmit} />
                                    </View>
                                    <View style={styles.buttons}>
                                        <Text h1 onPress={() => navigation.navigate('Register')}>¿No tenes cuenta? Registrate aquí</Text>
                                    </View>
                                    <View style={{ top: 100 }}>
                                        <View >
                                            <SocialIcon title='Sign In With Facebook' button type='facebook' />
                                        </View>
                                        <View>
                                            <SocialIcon title='Sign In With Google' button type='google' />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
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




