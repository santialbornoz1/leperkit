// import React, { Component } from "react";
// // import styles from "../../styles";
// import styles from "../../styles";
// import { Button, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';

// const appId = "1047121222092614"

// export default class LoginScreen extends Component {
//     render() {
//         return (
//             <KeyboardAvoidingView style={styles.containerView} behavior="padding">
//                 <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//                     <View style={styles.loginScreenContainer}>
//                         <View style={styles.loginFormView}>
//                             <Text style={styles.logoText}>Leperkit</Text>
//                             <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
//                             <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
//                             <View style={styles.buttons}>
//                                 <Button success title="Login" onPress={() => alert('Go home')} />
//                                 {/* <Button success title="Login" onPress={() => navigation.push('Home')} /> */}
//                             </View>
//                             <View style={styles.buttons}>
//                                 <Button success title="Login with Facebook" onPress={() => alert("LOGIN CON FACEBOOK")} />
//                             </View>
//                         </View>
//                     </View>
//                 </TouchableWithoutFeedback>
//             </KeyboardAvoidingView>
//         );
//     }
// }
