import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import SyncStorage from 'sync-storage';

function AuthLoading({ navigation }) {
    useEffect(() => {
        var tkn = SyncStorage.get('token');
        navigation.navigate(tkn ? 'Home' : 'Login')
    }, [])
    return(
        <View>
            <ActivityIndicator/>
        </View>
    )
}

export default AuthLoading;