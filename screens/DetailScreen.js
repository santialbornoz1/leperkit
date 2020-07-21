// import * as React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
// import { Icon } from 'native-base';
// import Sidebar from './customDrawer';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { Header } from 'react-native-elements';
// import { NavigationContainer } from '@react-navigation/native';


// const DetalleScreen = ({ navigation }) => {

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 5 }}>
//         <Text>¿De parte se compone?</Text>
//         {/* CARD */}
//         <TouchableHighlight>
//           <View>
//             <Text>
//               ALGUN TEXTO
//             </Text>
//             <Image
//               style={styles.tinyLogo}
//               source={require('../../Domus/resources/images/teclado-numerico.jpg')}
//             />
//           </View>
//         </TouchableHighlight>
//         {/* CARD */}
//         <Text style={styles.textCenter}>UI</Text>
//         <TouchableHighlight onPress={() => navigation.push('UI')}>
//           <Image
//             style={styles.tinyLogo}
//             source={require('../../Domus/resources/images/teclado-numerico.jpg')}
//           />
//         </TouchableHighlight >
//         <View>
//           <Text style={styles.textCenter}>Modulos</Text>
//           <Image
//             style={styles.tinyLogo}
//             source={require('../../Domus/resources/images/teclado-numerico.jpg')}
//           />
//         </View>
//         <View>
//           <Text style={styles.textCenter}>Componentes o cirucuitos externos</Text>
//           <Image
//             style={styles.tinyLogo}
//             source={require('../../Domus/resources/images/teclado-numerico.jpg')}
//           />
//         </View>

//       </ScrollView>
//     </View>
//   )
// }

// export default DetalleScreen;


// const styles = StyleSheet.create({
//   container: {
//     height: 'auto',
//     flex: 1,
//     backgroundColor: '#fff',
//     alignSelf: 'stretch',
//     justifyContent: 'center'
//   },
//   tinyLogo: {
//     width: 200,
//     height: 200,
//   },
//   textCenter: {
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   drawer: {
//     backgroundColor: 'black'
//   }
// });


