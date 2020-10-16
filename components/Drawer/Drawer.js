import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../../routes/Login';

const Drawer = createDrawerNavigator();

function Drawer2({ navigation }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}