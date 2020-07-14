import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import { Button, Header } from 'react-native-elements';


const Boton = (props) => {
    const { texto, background } = props;
    return (
      <TouchableOpacity style={{ backgroundColor: background, justifyContent: 'center', height: 40, borderRadius: 50, margin: 20 }}>
        <Button
          title={texto}
          buttonStyle={{
            backgroundColor: 'none'
          }}
        />
      </TouchableOpacity>
    )
  }
  

  function NotificationsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Notifications', style: { color: '#fff', fontSize: 20  } }}
            rightComponent={{ icon: 'home', color: '#fff' }} />
        </View>
        <Text style={{
          textAlign: "center",
          color: "white",
          fontWeight: "normal"
        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
        <View>
        <Button onPress={() => navigation.goBack()} title="Go back home"/>
        </View>
      </View>
    );
  }


  
const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      right: 0,
      left: 0,
      right: 0,
      bottom : 0,
      top: 0,
      flex: 1,
      alignSelf: 'center',                           //LE DA 100% DE ANCHO. La otra opc para toda la pantalla es stretch
      justifyContent: 'center',
      backgroundColor: 'black'
    },

  });

  export {NotificationsScreen};