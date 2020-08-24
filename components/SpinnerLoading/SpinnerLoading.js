import * as React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import styles from '../../styles';

const SpinnerLoading = () => {

    return (
        <View style={[styles.containerSpinner, styles.horizontalSpinner]}>
            <ActivityIndicator size="large" color={"blue"}/>
        </View>
    )
}

export default SpinnerLoading;
