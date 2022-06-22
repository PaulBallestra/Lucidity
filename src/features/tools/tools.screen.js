import React from 'react'
import { View, ScrollView } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

import styles from './tools.styles'
import { COLORS } from '../../constants/themes'

//Components
import ToolsComponent from './components/tools-component';
import HeaderComponent from '../../components/header-component';
import SubTitlePageComponent from '../../components/subheader-component';

const Tools = ({navigation}) => {

  return (
    <View style={styles.body}>

      <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

        <HeaderComponent />

        <ScrollView style={{paddingBottom: 25}}>

          <SubTitlePageComponent subtitle='OUTILS' />

          {/*REVEILS*/}
          <ToolsComponent type="reveil"/>

          {/*DREAMBOOK*/}
          <ToolsComponent type="dreambook" onPress={() => navigation.navigate('DreamBook')}/>

          {/*TESTS*/}
          <ToolsComponent type="tests" onPress={() => navigation.navigate('RealityTests')}/>

          {/* PROFILE */}
          <ToolsComponent type="profile" />

        </ScrollView>

      </LinearGradient>
    </View>
  );
  }

export default Tools;