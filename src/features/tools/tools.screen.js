import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

import styles from './tools.styles'
import { COLORS } from '../../constants/themes'

//Components
import ToolsComponent from './components/tools-component';

class Tools extends React.Component {
  
    render(){
        return (
          <View style={styles.body}>
              
          <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

              <View style={styles.headerView}>
                <Text style={styles.headerTitle}> LUCIDITY </Text>
                <Text style={styles.headerSubTitle}> PRENEZ LE CONTRÔLE </Text>
              </View>

            <ScrollView style={{marginTop: 4}}>

              {/*REVEILS*/}
              <ToolsComponent type="reveil" />

              {/*DREAMBOOK*/}
              <ToolsComponent type="dreambook"/>

              {/*TESTS*/}
              <ToolsComponent type="tests"/>

            </ScrollView>

          </LinearGradient>
        </View>
      );
    }
}

export default Tools;