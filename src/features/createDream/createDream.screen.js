import { View, Text, Button } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

import styles from './createDream.styles'
import { COLORS } from '../../constants/themes'

class CreateDream extends React.Component {

    //Create New Dream
    render(){

        const {dateString, timestamp} = this.props.route.params;

        console.log(this.props.route.params)

        return (

            <View style={styles.body}>

                <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

                {/* HEADER */}
                <View style={styles.headerView}>
                    <Text style={styles.headerTitle}> LUCIDITY </Text>
                    <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
                </View>

                <View>
                    <Text style={{color: COLORS.text}}> TEXT : {dateString} </Text>
                </View>

                </LinearGradient>
            </View>
            
        );

    }
}

export default CreateDream;