import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
// import HomeScreen from '../routes/Home';
import styles from '../styles';
import DetalleScreen from '../routes/Detail';
function HomeScreen({ navigation }) {
    return (

        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
                <Text style={styles.titleDetailScreen}>¿Que deseas realizar?</Text>
                <View style={styles.buttons}>
                    <Button success title="Quiero armar un nuevo leperkit" onPress={() => navigation.navigate('Notifications')} />
                </View>
                <View style={styles.buttons}>
                    <Button title="Opcion 2" />
                </View>
                <View style={styles.buttons}>
                    <Button title="Opcion 3" />
                </View>
                <View style={styles.buttons}>
                    <Button title="Opcion 4" />
                </View>
                <View style={styles.buttons}>
                    <Button title="Opcion 5" />
                </View>
            </ScrollView>
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                <Drawer.Screen name="Detail" component={DetalleScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
