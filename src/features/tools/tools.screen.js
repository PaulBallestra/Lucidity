import { View, ScrollView } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';

import styles from './tools.styles'
import { COLORS } from '../../constants/themes'

//Components
import ToolsComponent from './components/tools-component';
import HeaderComponent from '../../components/header-component';
import SubTitlePageComponent from '../../components/subtitlepage-component';

const Tools = ({navigation}) => {

      return (
        <View style={styles.body}>
            
        <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

            <HeaderComponent />

            <SubTitlePageComponent subtitle='OUTILS' />

          <ScrollView style={{marginTop: 4}}>

            {/*REVEILS*/}
            <ToolsComponent type="reveil" />

            {/*DREAMBOOK*/}
            <ToolsComponent type="dreambook" onPress={() => navigation.navigate('DreamBook')}/>

            {/*TESTS*/}
            <ToolsComponent type="tests" onPress={() => navigation.navigate('RealityTests')}/>

          </ScrollView>

        </LinearGradient>
      </View>
    );
}

export default Tools;