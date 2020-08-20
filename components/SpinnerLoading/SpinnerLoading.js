import * as React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

const SpinnerLoading = () => {

    return (
        <View style={[styles.containerSpinner, styles.horizontalSpinner]}>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default SpinnerLoading;

const styles = StyleSheet.create({
    containerSpinner: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#fff'
    },
    horizontalSpinner: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    }
});