import React, {useContext, useEffect, useState} from 'react'
import { View, ScrollView } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

import * as Keychain from 'react-native-keychain';
import { AxiosContext } from '../../context/AxiosContext';

import styles from './tools.styles'
import { COLORS } from '../../constants/themes'

//Components
import ToolsComponent from './components/tools-component';
import HeaderComponent from '../../components/header-component';
import SubTitlePageComponent from '../../components/subheader-component';

const Tools = ({navigation}) => {

    const [numberOfTestsChecked, setNumberOfTestsChecked] = useState(0)
    const [numberOfLucidDreams, setNumberOfLucidDreams] = useState()
    const [numberOfClassicDreams, setNumberOfClassicDreams] = useState()

    const useForceUpdate = async () => {
      const {publicAxios} = useContext(AxiosContext);
        const value = await Keychain.getGenericPassword();
        const jwt = JSON.parse(value.username)

        console.log(value)

        const token = jwt.accessToken;

        const config = {
          headers: { 
              "Authorization": `Bearer ${token}`
          }
        };

        try{

          const numbers = await publicAxios.get('/dreams/count', config)

          console.log(numbers)

          setNumberOfLucidDreams(numbers.data.numberOfLucidDreams)
          setNumberOfClassicDreams(numbers.data.numberOfClassicDreams)
        
        }catch(error){
          
          setNumberOfLucidDreams(0)
          setNumberOfClassicDreams(0)

          console.log(error.response.status)
        }


      return; // update state to force render
      // An function that increment 👆🏻 the previous state like here 
      // is better than directly setting `value + 1`
    }

    return (
      <View style={styles.body}>
  
        <LinearGradient colors={[COLORS.backgroundTop, COLORS.backgroundTop, COLORS.backgroundBottom,  COLORS.backgroundBottom]} style={styles.linearGradient}>
  
          <HeaderComponent />
  
          <SubTitlePageComponent subtitle='OUTILS' />
  
          <ScrollView style={{paddingBottom: 25}}>

            {/*REVEILS*/}
            <ToolsComponent type="reveil" valueLeftSide={0} valueRightSide={0} onPress={() => navigation.navigate('AlarmClocks')} />
  
            {/*DREAMBOOK*/}
            <ToolsComponent type="dreambook" valueLeftSide={numberOfClassicDreams + numberOfLucidDreams} valueRightSide={numberOfLucidDreams} onPress={() => navigation.navigate('DreamBook')}/>
  
            {/*TESTS*/}
            <ToolsComponent type="tests" valueLeftSide={5} valueRightSide={numberOfTestsChecked} onPress={() => navigation.navigate('RealityTests')}/>
  
            {/* PROFILE */}
            {/*<ToolsComponent type="profile" />*/}
  
          </ScrollView>
  
        </LinearGradient>
      </View>
    );
}

export default Tools;