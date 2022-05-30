import { View, Text } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

import styles from './tools.styles'
import { COLORS } from '../../constants/themes'

class Tools extends React.Component {

    render(){
        return (
          <View style={styles.body}>
              
          <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundBottom]} style={styles.linearGradient}>

            <View style={styles.headerView}>
              <Text style={styles.headerTitle}> LUCIDITY </Text>
              <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
            </View>

        
          </LinearGradient>
          
        </View>
          );
    }

}

export default Tools;