import React from 'react';
import { Text, View, Button, Keyboard, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import styles from "../styles";
import { SocialIcon  } from 'react-native-elements';

function LoginScreen({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>Leperkit</Text>
                        <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                        <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
                        <View style={styles.buttons}>
                            <Button success title="Login" onPress={() => navigation.push('Home')} />
                        </View>
                        <View style={styles.buttons}>
                        <Text h1>¿No tenes cuenta? Registrate aquí</Text>
                        </View>
                        <View style={{ top: 100}}>
                            <View style={styles.buttons}>
                                <SocialIcon title='Sign In With Facebook' button type='facebook'/>
                            </View>
                            <View style={styles.buttons}>
                                <SocialIcon title='Sign In With Google' button type='google'/>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;




