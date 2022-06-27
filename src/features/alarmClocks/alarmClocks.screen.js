import React from 'react'
import { View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

import LinearGradient from 'react-native-linear-gradient';

import styles from './alarmClocks.styles'
import { COLORS } from '../../constants/themes'

import HeaderComponent from '../../components/header-component';
import SubHeaderComponent from '../../components/subheader-component';

const AlarmClocks = ({navigation}) => {

    //console.log(navigation)

    //Function qui va save la page et save les valeurs
    const savePage = () => {

        navigation.goBack()
    }

    //Reality Tests
    return (
        <View style={styles.body}>

            <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

            {/* HEADER */}
            <HeaderComponent />

            {/* SUBTITLE PAGE */}
            <SubHeaderComponent subtitle='RÉVEILS' />


            </LinearGradient>
        </View>
    );
}

export default AlarmClocks;