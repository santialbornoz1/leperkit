import React from 'react';
import { ScrollView, RefreshControl, StyleSheet, Text, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import styles from "../../styles";

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.containerRefreshControl}>
      <ScrollView
        contentContainerStyle={styles.scrollViewRefreshControl}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
