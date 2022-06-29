import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

import styles from './alarmsCustom.styles'
import { COLORS } from '../../constants/themes'

//import AlarmClock from 'react-native-alarm-clock'


import HeaderComponent from '../../components/header-component';
import SubHeaderComponent from '../../components/subheader-component';

const AlarmsCustom = ({navigation}) => {

    //Function qui va save la page et save les valeurs
    const savePage = () => {
    
        let date = new Date();
        date.setDate(date.getDate() + 1);
        date.setHours(13, 55);

        //AlarmClock.createAlarm(date.toISOString(), 'My Custom Alarm');


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

            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>

                <TouchableOpacity onPress={savePage} style={{backgroundColor: COLORS.blue, width: '90%', borderRadius: 5}}> 
                    <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 20, fontWeight: 'bold', textAlign: 'center', padding: 7.5, color: COLORS.customDark}}> SAUVEGARDER </Text>
                </TouchableOpacity>

            </View>

            </LinearGradient>
        </View>
    );
}

export default AlarmsCustom;