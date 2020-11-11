import * as React from 'react';
import { useState } from 'react';
import { Appbar, List  } from 'react-native-paper';
import { Text, View, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles';

function MyComponent(props) {
  
  const [visible, setVisible] = useState(true);
  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });
  const _goBack = () => {
    props.navigation.goBack(null);
  }
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  return (
    <>
      <Appbar.Header style={styles.blueColor}>
        {props.hasBack ?
          <><Appbar.BackAction onPress={_goBack} /></>
          :
          <></>
        }
        <Appbar.Content title={props.title} subtitle={props.subtitle} />
        {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>
    </>
  );
};

export default MyComponent;