
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, TouchableHighlight, Picker, Label } from 'react-native';

// TAB VIEW
import { TabView, SceneMap } from 'react-native-tab-view';
dataPulsadores = {
  tableHead: ['Usa los pines'],
  tableData: [
    ['U1', 'X'],
    ['U2', 'X'],
    ['U3', 'X'],
    ['U4', 'X'],
    ['U5', 'X'],
  ]
}

dataTeclado4x4 = {
  tableHead: ['Usa los pines'],
  tableData: [
    ['U1', ''],
    ['U2', 'X'],
    ['U3', 'X'],
    ['U4', '']
  ]
}
//PESTAÑAS UI
const FirstRoute = ({ navigation }) => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
    <View style={styles.buttons}>
      <Button title="Agregar un nuevo UI a 'Mis UI'"/>
    </View>
    <View style={styles.buttons}>
      <Button title="Ver Catalogo Del Market"></Button>
    </View>

  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]}>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };


const ModulesScreen = ({ navigation }) => {
  const scrollEnabled = false;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'In' },
    { key: 'second', title: 'Out' },
    { key: 'third', title: 'In & Out' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 5 }} scrollEnabled={scrollEnabled}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </ScrollView>
    </View>
  )
}

export default ModulesScreen;


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




