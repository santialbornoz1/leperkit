//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
// import { Icon } from 'react-native-elements';
import {
  Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
// import styles from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerSection } from 'material-bread';


// const CustomSidebarMenu = (props) => {
function CustomSidebarMenu({ props, navigation }) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View>
              <View>
                <Avatar.Image source={{ uri: "https://image.freepik.com/vector-gratis/diseno-avatar-persona_24877-38131.jpg" }} size={50} />
                <Caption>Perfil: Juan Lopez</Caption>
                <Title>Leperkit</Title>
              </View>
              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon
                      name="home-outline"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Pagina principal"
                  onPress={() => navigation.navigate('Home')} />
              </Drawer.Section>
              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon
                      name="account-outline"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Mi cuenta"
                  onPress={() => { alert("FALTA") }} />
              </Drawer.Section>
              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon
                      name="settings-outline"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Configuración"
                  onPress={() => { alert("FALTA") }} />
              </Drawer.Section>
              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon
                      name="cart-arrow-down"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Mis modulos"
                  onPress={() =>  navigation.navigate('ModulesInstalled') } />
              </Drawer.Section>
              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon
                      name="account-check-outline"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Contacto"
                  onPress={() => { alert("FALTA") }} />
              </Drawer.Section>
              <Drawer.Section title="Preferencencias">
                <TouchableRipple onPress={() => { toggleTheme() }}>
                  <View style={styles.preference}>
                    <Text>Modo oscuro</Text>
                    <View pointerEvents="none">
                      <Switch value={isDarkTheme} />
                    </View>
                  </View>
                </TouchableRipple>
              </Drawer.Section>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Cerrar sesión"
          onPress={() => { navigation.navigate("Login") }} />
      </Drawer.Section>

    </View>
  );
}

export default CustomSidebarMenu;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  }
});

