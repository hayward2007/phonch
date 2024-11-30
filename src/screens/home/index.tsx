import React from 'react';
import { Text, View } from 'react-native';

import style from './style';

const HomeScreen = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>Home Screen</Text>
        </View>
    );
}

export default HomeScreen;