import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

import styles from './learning.styles'
import { COLORS } from '../../constants/themes'

import TechniqueComponent from './components/technique-component';
import HeaderComponent from '../../components/header-component';
import SubHeaderComponent from '../../components/subheader-component';

const Learning = () => {

    return (
      <View style={styles.body}>

        <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>

          <HeaderComponent />

          <SubHeaderComponent subtitle='TECHNIQUES' />

          {/* Techniques */}
          <View style={styles.techniqueBody}>

                <View style={styles.techniqueHeader}>
                  <Text style={styles.techniqueHeaderTitle}> TECHNIQUES </Text>
                  <Image source={require('../../assets/icons/technique_picto.png')} style={styles.techniqueHeaderImage}/>
                </View>

                <ScrollView>

                  <TechniqueComponent type='WILD'/>

                  <TechniqueComponent type='MILD'/>
                  
                  <TechniqueComponent type='WBTB'/>

                  <TechniqueComponent type='AUTO'/>

                </ScrollView>
          </View>
        </LinearGradient>
      </View>
    );
}

export default Learning;