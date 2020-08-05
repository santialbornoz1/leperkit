import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
import { TextInput } from 'react-native-paper';
// TAB VIEW
import InputLK from '../components/Input/Input';

const AddNewUIScreen = () => {
    const [text, setText] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState("In");
    const [data, setData] = React.useState({
        "Description": "",
        "Select": "In"
    });
    const scrollEnabled = false;
    const handleChangeInput = (e) => {
        setData({
          ...data,
          [e.name]: e.value
        })
        console.log("DATA:" , data)
        props.dataToFather(data);
      }

      
      const onClickAdd = (e) => {
        console.log("CLICK:" , data)
      }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 5 }} scrollEnabled={scrollEnabled}>
                <InputLK isSelectInput={true} name="Select" type={"text"} label={"Tipo"} placeholder={"Tipo"} backgroundColor={"red"} handleChangeInput={handleChangeInput} />
                <InputLK isSelectInput={false} name="Description" type={"text"} label={"Descripcion"} placeholder={"Descripcion"} backgroundColor={"blue"} handleChangeInput={handleChangeInput}/>
                <View style={styles.buttons}>
                    <Button title="Agregar" onPress={onClickAdd} />
                </View>
            </ScrollView>
        </View>
    )
}


export default AddNewUIScreen;

const styles = StyleSheet.create({
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
    }
});