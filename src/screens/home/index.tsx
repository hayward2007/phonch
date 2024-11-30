import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { style } from './style';
import { Color } from '@styles/color';
import IconToBeTinted from '@assets/images/icon_to_be_tinted.svg';

const HomeScreen = () => {
    return (
        <SafeAreaView style={style.background}>
            <View>
                <Text>Home Screen</Text>
                <IconToBeTinted height={128} width={128} fill={Color.black} />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;