import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';
import { TextInput } from 'react-native-paper';


const SelectInput = (props) => {
    const [text, setText] = React.useState('');
    const [name, setName] = React.useState(props.name);
    const [selectedValue, setSelectedValue] = React.useState("");
    var options = props.options;
    const handleChange = (text, name) => {
            setSelectedValue(text);
            props.handleChangeInput({
                value: text,
                name: name
            });
        }
    return (
        <>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={{ backgroundColor: props.backgroundColor, margin: 10 }}>
                <Text style={{ fontSize: 20 }}>{props.label}</Text>
                    <Picker
                        style={{ margin: 8, backgroundColor: '' }}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => handleChange(itemValue, props.name)}
                    >
                        <Picker.Item key="" label={props.placeholderDefault} value="" />
                         {options.map((item, index) =>
                                   <Picker.Item label={item} value={item} />
                        )}
    
                    </Picker>

            </View>
            </ScrollView>
        </>
    )
}

export default SelectInput;
