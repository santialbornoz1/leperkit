import React, {useState} from 'react';
import { Text, View, Button, Keyboard, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import styles from "../styles";
import { SocialIcon } from 'react-native-elements';
import useForm from '../hooks/useForm';
import { urlBackEnd } from "../src/Functions/functions";


function RegisterScreen({ navigation }) {
    var [repeatPassword, setrepeatPassword] = useState("");
    var urlBack = urlBackEnd();
    const initialState = {
        email: '',
        password: '',
        repeatpassword: ''
    }
    const onSubmit = values => {
        console.log(values);
        console.log("values.password", values.password);
        console.log("values.repeatpassword", values.repeatpassword);
        if(values.password === values.repeatpassword){
            alert("CONTRASENIAS IGUALES")
        }
        else{
            alert('Contrasenias distintas')
        }
        // const data = {
        //     method: 'POST',
        //     body: JSON.stringify(values),
        //     headers: new Headers({
        //         'Content-Type': 'application/json'
        //     }),
        // };

        // fetch(urlBack + "login", data)
        //     .then((response) => response.json())
        //     .then((response) => {
        //         console.log(response);
        //         if (response.ok) {
        //             //DEBO SETEAR COOKIE
        //             navigation.push('Home');
        //         }
        //         else {
        //             alert("Datos erroneos");
        //         }
        //     })
    }
    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>Registro</Text>
                        <TextInput autoCapitalize="none" value={inputs.email} onChangeText={subscribe('email')} placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                        <TextInput autoCapitalize="none" value={inputs.password} onChangeText={subscribe('password')} placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
                        <TextInput autoCapitalize="none" value={inputs.repeatPassword} onChangeText={subscribe('repeatpassword')} placeholder="Repeat password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
                        <View style={styles.buttons}>
                            <Text h1  onPress={()=> navigation.push('Login')}>Volver al menu anterior</Text>
                        </View>
                        <View style={styles.buttons}>
                            <Button success title="Enviar" onPress={handleSubmit} />
                        </View>
                      
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;




