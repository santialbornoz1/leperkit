import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
import { TextInput } from 'react-native-paper';


const Input = (props) => {
    const [text, setText] = React.useState('');
    const [name, setName] = React.useState(props.name);
    const [selectedValue, setSelectedValue] = React.useState("In");
    const handleChangeSelectInput = (itemValue, name) => {
        // setText(text);
        // console.log(itemValue);
        props.handleChangeInput({
            value : itemValue,
            name: name
        });
      } 
    const handleChange = (text, name) => {
        // console.log("Lo que recibo: " , name)
        setText(text);
        props.handleChangeInput({
          value : text,
          name: name
        });
      } 


    return (
        <>
            <View style={{ backgroundColor: props.backgroundColor, margin: 10 }}>
                <Text style={{ fontSize: 20 }}>{props.label}</Text>
                {props.isSelectInput ?
                    <Picker
                        style={{ margin: 8, backgroundColor: 'green' }}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => handleChangeSelectInput(itemValue,props.name)}
                    >
                        <Picker.Item label="In" value="In" />
                        <Picker.Item label="Out" value="Out" />
                        <Picker.Item label="In-Out" value="In-Out" />
                    </Picker>
                    :
                    <TextInput
                        style={{ margin: 8,  backgroundColor: 'yellow'}}
                        label={props.placeholder}
                        value={text}
                        name={props.name}
                        onChangeText={(text) => handleChange(text, props.name)}
                    />
                }
            </View>
        </>
    )
}

export default Input;
