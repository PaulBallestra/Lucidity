import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

import styles from './tools.styles'
import { COLORS } from '../../constants/themes'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Tools extends React.Component {

    render(){
        return (
          <View style={styles.body}>
              
          <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundBottom]} style={styles.linearGradient}>

            <View style={styles.headerView}>
              <Text style={styles.headerTitle}> LUCIDITY </Text>
              <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
            </View>

            <ScrollView>

              <View style={styles.dreambook}>

    <View style={styles.dreambookHeader}>
      <Text style={styles.dreambookHeaderTitle}> DREAMBOOK </Text>
      <Image source={require('../../assets/icons/dreambook_picto.png')} style={styles.dreambookHeaderImage}/>
    </View>

    <TouchableOpacity style={styles.dreambookContent}>
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.dreambookContentTexts}>
        <Text style={styles.dreambookContentTextHeaderLeft}>DREAMS</Text>
        <Text style={styles.dreambookContentTextContentLeft}>0</Text>
      </View>
      <View>
        <LinearGradient colors={[COLORS.blue, COLORS.blue, COLORS.purple, COLORS.purple]} style={styles.dreambookBreakHR}>
        </LinearGradient>
      </View>
      <View style={styles.dreambookContentTexts}> 
        <Text style={styles.dreambookContentTextHeaderRight}>LUCID DREAMS</Text>
        <Text style={styles.dreambookContentTextContentRight}>0</Text>
      </View>
    </View>
  </TouchableOpacity>

              </View>

              <View style={styles.dreambook}>

              <View style={styles.dreambookHeader}>
                <Text style={styles.dreambookHeaderTitle}> TESTS DE RÉALITÉ </Text>
                <Image source={require('../../assets/icons/realitytests_picto.png')} style={styles.dreambookHeaderImage}/>
              </View>

              <TouchableOpacity style={styles.dreambookContent}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.dreambookContentTexts}>
                    <Text style={styles.dreambookContentTextHeaderRight}>ACTIVÉS</Text>
                    <Text style={styles.dreambookContentTextContentRight}>0</Text>
                  </View>
                  <View>
                    <LinearGradient colors={[COLORS.purple, COLORS.purple, COLORS.blue, COLORS.blue]} style={styles.dreambookBreakHR}>
                    </LinearGradient>
                  </View>
                  <View style={styles.dreambookContentTexts}> 
                    <Text style={styles.dreambookContentTextHeaderLeft}>RAPPEL</Text>
                    <Text style={styles.dreambookContentTextContentLeft}>0</Text>
                  </View>
                </View>
              </TouchableOpacity>

              </View>

            </ScrollView>

            

          </LinearGradient>
          
        </View>
          );
    }

}

export default Tools;